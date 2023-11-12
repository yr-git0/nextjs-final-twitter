import { Tweet, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../libs/client";
import withHandler, { ResponseType } from "../../../../libs/server/withHandler";
import { withApiSession } from "../../../../libs/server/withSession";

export interface TweetWithUser extends Tweet {
  user: User;
}

export async function getEtcInfo(
  tweetId: number,
  userId: number,
  foundTweet: TweetWithUser
) {
  let mailId = foundTweet.user.email;
  mailId = mailId.substring(0, mailId.indexOf("@"));

  const createdAt = new Date(foundTweet.createdAt);
  const postDate = createdAt.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const replyCount = await client.reply.count({
    where: {
      tweetId: foundTweet.id,
    },
  });

  const likeCount = await client.like.count({
    where: {
      tweetId: foundTweet.id,
    },
  });

  const isLiked = Boolean(
    await client.like.findFirst({
      where: {
        tweetId,
        userId,
      },
    })
  );

  const isBookmarked = Boolean(
    await client.bookmark.findFirst({
      where: {
        tweetId,
        userId,
      },
    })
  );

  const hashtags = await client.hashtag.findMany({
    where: {
      tweetId: foundTweet.id,
    },
  });

  return {
    ...foundTweet,
    _user: {
      mailId,
      name: foundTweet.user.name,
      avatar: foundTweet.user.avatar,
    },
    _etc: {
      postDate,
      replyCount,
      likeCount,
      isLiked,
      isBookmarked,
      hashtags: hashtags.map((item) => item.hashtag),
    },
  };
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;

  let result = {};

  await client.tweet.update({
    where: {
      id: +id.toString(),
    },
    data: {
      viewCount: {
        increment: 1,
      },
    },
  });

  const tweet = await client.tweet.findUnique({
    where: {
      id: +id.toString(),
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
  });

  if (id && user && tweet) {
    const tweetWithUser: TweetWithUser = {
      ...tweet,
      user: tweet.user as User,
    };
    result = await getEtcInfo(+id, +user.id, tweetWithUser);
  }

  res.json({
    ok: true,
    tweet: result ? result : tweet,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
