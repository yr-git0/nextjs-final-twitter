import client from "../../../libs/client";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../libs/server/withSession";
import { Hashtag, User } from "@prisma/client";
import { TweetWithUser, getEtcInfo } from "./[id]";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const {
      session: { user },
    } = req;

    const tweets = await client.tweet.findMany({
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
  if (req.method === "POST") {
    const {
      body: { content, fileName },
      session: { user },
    } = req;

    const tweet = await client.tweet.create({
      data: {
        content,
        fileName: fileName,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    const createdHashtags: Hashtag[] = [];
    const hashtagRegex = /#(\S+)/g;
    const hashtags = content.match(hashtagRegex);

    if (hashtags) {
      for (const hashtag of hashtags) {
        const createdHashtag = await client.hashtag.create({
          data: {
            hashtag: hashtag.substring(1),
            tweet: {
              connect: {
                id: tweet.id,
              },
            },
          },
        });

        createdHashtags.push(createdHashtag);
      }
    }

    if (createdHashtags.length > 0) {
      await client.tweet.update({
        where: {
          id: tweet.id,
        },
        data: {
          hashtags: {
            connect: createdHashtags.map((createdHashtag) => ({
              id: createdHashtag.id,
            })),
          },
        },
      });
    }

    res.json({
      ok: true,
      tweet,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
