import client from "../../../libs/client";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import * as bcrypt from "bcrypt";

import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { name, email, password } = req.body;
  const isDuplicatedEmail = await client.user.findUnique({
    where: {
      email,
    },
  });

  if (isDuplicatedEmail) {
    return res.json({
      ok: false,
      type: "email",
      message: "중복된 이메일이 존재합니다.",
    });
  }

  await client.user.create({
    data: {
      name,
      email,
      password: await bcrypt.hash(password, 10),
    },
  });

  return res.json({
    ok: true,
  });
}

export default withHandler({
  methods: ["POST"],
  handler,
  isPrivate: false,
});
