import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faChartSimple,
  faRetweet,
  faBookmark as faSolidBookmark,
  faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import useMutation from "../../libs/client/useMutation";
import React, { useState } from "react";
import { cls } from "../../libs/client/utils";
import { TweetResponse } from "../../pages/tweets/[id]";

interface TweetProps {
  tweetId: number;
  content: string;
  image: string | null;
  userId: number;
  userMailId: string;
  userName: string;
  userAvatar: string;
  createdAt: string;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  viewCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  hashtags: string[];
}

export default function Tweet({
  tweetId,
  content,
  image,
  userId,
  userMailId,
  userName,
  userAvatar,
  createdAt,
  replyCount,
  retweetCount,
  likeCount,
  viewCount,
  isLiked,
  isBookmarked,
  hashtags,
}: TweetProps) {
  const router = useRouter();
  const [like, setLike] = useState(isLiked);
  const [bookmark, setBookmark] = useState(isBookmarked);

  const handleClickTweet = () => {
    router.push(`/tweets/${tweetId}`);
  };

  const [toggleLike] = useMutation(`/api/tweets/${tweetId}/like`);
  const onLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLike({});
    setLike((prev) => !prev);
  };

  const [toggleBookmark] = useMutation(`/api/tweets/${tweetId}/bookmark`);
  const onBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark({});
    setBookmark((prev) => !prev);
  };

  return (
    <div
      onClick={handleClickTweet}
      className="flex gap-2 p-2 pr-5 border-b-[1px] border-gray-200 hover:bg-slate-50"
    >
      <div className="w-12 h-12">
        <Image
          src={
            userAvatar
              ? `/images/avatars/${userAvatar}`
              : "/images/anonymous.jpg"
          }
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col w-[500px]">
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold">{userName}</span>
          <span className="text-xs font-bold text-slate-400">
            @{userMailId} · {createdAt}
          </span>
        </div>
        <div className="text-sm py-1 mb-1 px-1 whitespace-pre-wrap">
          {content}
        </div>
        {image ? (
          <Image
            src={`/images/upload/tweets/${image}`}
            width={480}
            height={280}
            className="bg-black rounded-xl object-contain"
          />
        ) : null}
        <div className="mt-2 px-2 flex justify-between items-center text-slate-500 [&_*]:hover:cursor-pointer">
          <div className="flex items-center gap-1 hover:text-[#1da1f2]">
            <FontAwesomeIcon icon={faComment} size="sm" fixedWidth />
            <span className="text-[12px] font-bold">{replyCount}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-green-500">
            <FontAwesomeIcon icon={faRetweet} size="sm" fixedWidth />
            <span className="text-[12px] font-bold">{retweetCount}</span>
          </div>
          <div
            onClick={onLikeClick}
            className={cls(
              "flex items-center gap-1 hover:text-pink-500",
              like ? "text-pink-500" : ""
            )}
          >
            <FontAwesomeIcon
              icon={like ? faSolidHeart : faHeart}
              size="sm"
              fixedWidth
            />
            <span className="text-[12px] font-bold">
              {isLiked !== like
                ? like
                  ? likeCount + 1
                  : likeCount - 1
                : likeCount}
            </span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#1da1f2]">
            <FontAwesomeIcon icon={faChartSimple} size="sm" fixedWidth />
            <span className="text-[12px] font-bold">{viewCount}</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              onClick={onBookmarkClick}
              className="hover:text-[#1da1f2] relative"
            >
              <FontAwesomeIcon
                icon={bookmark ? faSolidBookmark : faBookmark}
                size="sm"
                fixedWidth
                className={bookmark ? "text-[#1da1f2]" : ""}
              />
            </div>
            <div className="hover:text-[#1da1f2]">
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                size="sm"
                fixedWidth
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
