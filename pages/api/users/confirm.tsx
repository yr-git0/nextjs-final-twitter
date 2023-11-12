import client from "../../../libs/client";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import { withApiSession } from "../../../libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
    include: { user: true }, // user도 가져오고 싶을 떄
  });
  if (!foundToken) return res.status(404).end();
  req.session.user = {
    id: foundToken.user.id,
    name: foundToken.user.name,
    email: foundToken.user.email,
    avatar: foundToken.user.avatar?.toString(),
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });
  res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false,
  })
);
