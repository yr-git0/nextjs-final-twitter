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
  const alreadyExists = await client.bookmark.findFirst({
    where: {
      tweetId: +id.toString(),
      userId: user?.id,
    },
  });
  if (alreadyExists) {
    await client.bookmark.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await client.bookmark.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        tweet: {
          connect: {
            id: +id.toString(),
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
