import client from "../../../libs/client";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import * as bcrypt from "bcrypt";

import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, password, rememberMe } = req.body;
  const user = await client.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.json({
      ok: false,
      type: "email",
      message: "해당 이메일이 존재하지 않습니다.",
    });
  } else if (!(await bcrypt.compare(password, user.password))) {
    return res.json({
      ok: false,
      type: "password",
      message: "비밀번호가 일치하지 않습니다.",
    });
  }

  req.session.user = {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar?.toString(),
  };
  await req.session.save();
  console.log(rememberMe);
  //   const payload = Math.floor(100000 + Math.random() * 900000) + "";
  //   const token = await client.token.create({
  //     data: {
  //       payload,
  //       user: {
  //         connect: {
  //           id: user.id,
  //         },
  //       },
  //     },
  //   });
  //   console.log(rememberMe);
  //   if (rememberMe) {
  //     localStorage.setItem("token", token.payload);
  //   } else {
  //     sessionStorage.setItem("token", token.payload);
  //   }

  return res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false,
  })
);
