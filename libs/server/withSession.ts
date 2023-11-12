import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      name: string;
      email: string;
      avatar?: string;
    };
  }
}

const cookieOptions = {
  cookieName: "twittersession",
  password: process.env.ENCRYPT_PASSWORD!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
