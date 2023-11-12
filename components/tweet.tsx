import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faChartSimple,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

export default function Tweet() {
  return (
    <div className="flex gap-2 p-2 pr-5 border-b-[1px] border-gray-200 hover:bg-slate-50">
      <div className="bg-black rounded-full w-10 h-10"></div>
      <div className="flex flex-col w-[500px]">
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold">Name</span>
          <span className="text-xs font-bold text-slate-400">@id · 23s</span>
        </div>
        <div className="text-sm py-1 mb-1 px-1">
          📍 맛집 추천 📍
          <br />
          <br />
          ▪ 파이브가이즈🍔
          <br />
          ▪ 하이디라오🍜
          <br />▪ 아이엠베이글🥪
        </div>
        <Image
          src="/images/망고.png"
          width={480}
          height={280}
          className="bg-black rounded-xl object-contain"
        />
        <div className="mt-2 px-2 flex justify-between items-center text-slate-500 [&_*]:hover:cursor-pointer">
          <div className="flex items-center gap-1 hover:text-[#1da1f2]">
            <FontAwesomeIcon icon={faComment} size="sm" fixedWidth />
            <span className="text-[12px] font-bold">123</span>
          </div>
          <div className="flex items-center gap-1 hover:text-green-500">
            <FontAwesomeIcon icon={faRetweet} size="sm" fixedWidth />
            <span className="text-[12px] font-bold">2K</span>
          </div>
          <div className="flex items-center gap-1 hover:text-pink-500">
            <FontAwesomeIcon icon={faHeart} size="sm" fixedWidth />
            <span className="text-[12px] font-bold">6.6M</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#1da1f2]">
            <FontAwesomeIcon icon={faChartSimple} size="sm" fixedWidth />
            <span className="text-[12px] font-bold">99M</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hover:text-[#1da1f2] relative">
              <FontAwesomeIcon icon={faBookmark} size="sm" fixedWidth />
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
