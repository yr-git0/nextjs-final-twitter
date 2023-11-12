import withHandler, { ResponseType } from "../../../libs/server/withHandler";

import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.session);
  req.session.destroy();
  console.log(req.session);

  //   localStorage.removeItem("token");
  //   sessionStorage.removeItem("token");

  return res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false,
  })
);
