import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../libs/client";
import withHandler, { ResponseType } from "../../../../libs/server/withHandler";
import { withApiSession } from "../../../../libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;

  const loginUser = await client.user.findUnique({
    where: {
      id: user?.id,
    },
    include: {
      following: {
        where: {
          id: +id.toString(),
        },
        select: {
          id: true,
        },
      },
    },
  });

  if (loginUser && loginUser.following.length > 0) {
    /*언팔로우*/
    await client.user.update({
      where: {
        id: user?.id,
      },
      data: {
        following: {
          disconnect: {
            id: +id.toString(),
          },
        },
      },
    });

    await client.user.update({
      where: {
        id: +id.toString(),
      },
      data: {
        followedBy: {
          disconnect: {
            id: user?.id,
          },
        },
      },
    });
  } else {
    /*팔로우*/
    await client.user.update({
      where: {
        id: user?.id,
      },
      data: {
        following: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    });

    await client.user.update({
      where: {
        id: +id.toString(),
      },
      data: {
        followedBy: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
  }

  res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
