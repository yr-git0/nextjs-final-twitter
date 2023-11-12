import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../libs/client";
import withHandler, { ResponseType } from "../../../../libs/server/withHandler";
import { withApiSession } from "../../../../libs/server/withSession";
import { TweetWithUser, getEtcInfo } from "../[id]";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
  } = req;

  const tweets = await client.tweet.findMany({
    where: {
      bookmarks: {
        some: {
          userId: user?.id,
        },
      },
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const promise = tweets.map((tweet) => {
    if (user && tweet) {
      const tweetWithUser: TweetWithUser = {
        ...tweet,
        user: tweet.user as User,
      };
      return getEtcInfo(+tweet.id, +user.id, tweetWithUser);
    }
  });

  const tweetsWithEtcInfo = await Promise.all(promise);

  res.json({
    ok: true,
    tweets: tweetsWithEtcInfo,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
