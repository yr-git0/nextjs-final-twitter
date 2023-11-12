import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
  } = req;

  const users = await client.user.findMany({
    where: {
      NOT: {
        id: user?.id,
      },
    },
    include: {
      followedBy: {
        where: {
          id: user?.id,
        },
        select: {
          id: true,
        },
      },
    },
  });

  const usersWithEtcInfo = users.map((user) => {
    if (user) {
      return {
        ...user,
        isFollow: user.followedBy.length > 0,
        emailId: user.email.substring(0, user.email.indexOf("@")),
      };
    }
  });

  res.json({
    ok: true,
    users: usersWithEtcInfo,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
