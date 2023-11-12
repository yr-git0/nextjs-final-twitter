import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import useSWR from "swr";
import { TweetWithEtcInfo } from "..";
import Layout from "../../components/layout";
import Post from "../../components/post";
import Tweet from "../../components/tweet";
import { NextPageWithLayout } from "../_app";

export interface TweetResponse {
  ok: boolean;
  tweet: TweetWithEtcInfo;
}

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useSWR<TweetResponse>(
    router.query.id ? `/api/tweets/${router.query.id}` : null
  );

  const handleClick = () => {
    router.back();
  };

  return (
    <Layout>
      {!data ? null : (
        <div className="flex flex-col h-full">
          <div className="flex items-center font-bold px-3 py-2 border-b-[1px] border-gray-200">
            <div
              onClick={handleClick}
              className="w-7 h-7 p-1 flex justify-center items-center cursor-pointer rounded-full hover:bg-slate-200"
            >
              <FontAwesomeIcon icon={faArrowLeftLong} size="sm" fixedWidth />
            </div>
            <span className="ml-5 text-lg">상세보기</span>
          </div>
          <div className="overflow-y-scroll scrollbar-hide">
            <Tweet
              key={data.tweet.id}
              tweetId={data.tweet.id}
              content={data.tweet.content}
              image={data.tweet.fileName}
              userId={data.tweet.userId}
              userMailId={data.tweet._user.mailId}
              userName={data.tweet._user.name}
              userAvatar={data.tweet._user.avatar}
              createdAt={data.tweet._etc.postDate}
              replyCount={data.tweet._etc.replyCount}
              retweetCount={data.tweet.retweetCount}
              likeCount={data.tweet._etc.likeCount}
              viewCount={data.tweet.viewCount}
              isLiked={data.tweet._etc.isLiked}
              isBookmarked={data.tweet._etc.isBookmarked}
              hashtags={data.tweet._etc.hashtags}
            />
            {/* <Post isReply={true} parentUserId={data.tweet._user.mailId} /> */}
            {/* <div className="flex-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Tweet key={i} />
            ))}
          </div> */}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Page;
