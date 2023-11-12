import { Tweet as TweetType } from "@prisma/client";
import { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";
import Layout from "../components/layout";
import Post from "../components/post";
import Tweet from "../components/tweet";
import { NextPageWithLayout } from "./_app";

export interface TweetWithEtcInfo extends TweetType {
  _user: {
    mailId: string;
    name: string;
    avatar: string;
  };
  _etc: {
    postDate: string;
    replyCount: number;
    likeCount: number;
    isLiked: boolean;
    isBookmarked: boolean;
    hashtags: string[];
  };
}

interface TweetsResponse {
  ok: boolean;
  tweets: TweetWithEtcInfo[];
}

const Page: NextPageWithLayout = () => {
  const { mutate } = useSWRConfig();
  const { data } = useSWR<TweetsResponse>("/api/tweets");

  useEffect(() => {
    mutate("/api/tweets");
  }, []);

  return (
    <Layout>
      <div className="flex flex-col h-full">
        <div className="font-bold text-sm px-3 py-2 border-b-[1px] border-gray-200">
          Home
        </div>
        <Post />
        <div className="flex-1 overflow-y-scroll scrollbar-hide">
          {data?.tweets?.map((tweet) => (
            <Tweet
              key={tweet.id}
              tweetId={tweet.id}
              content={tweet.content}
              image={tweet.fileName}
              userId={tweet.userId}
              userMailId={tweet._user.mailId}
              userName={tweet._user.name}
              userAvatar={tweet._user.avatar}
              createdAt={tweet._etc.postDate}
              replyCount={tweet._etc.replyCount}
              retweetCount={tweet.retweetCount}
              likeCount={tweet._etc.likeCount}
              viewCount={tweet.viewCount}
              isLiked={tweet._etc.isLiked}
              isBookmarked={tweet._etc.isBookmarked}
              hashtags={tweet._etc.hashtags}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
