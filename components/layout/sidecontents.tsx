import { User } from "@prisma/client";
import Image from "next/image";
import useSWR from "swr";

interface UserWithEtcInfo extends User {
  isFollow: boolean;
  emailId: string;
}
interface UsersResponse {
  ok: boolean;
  users: UserWithEtcInfo[];
}

export default function SideContents() {
  const { data, mutate } = useSWR<UsersResponse>("/api/users");

  const onFollowClick = async (userId: number) => {
    if (!data) return;

    await fetch(`/api/users/${userId}/follow`, { method: "POST" });
    mutate();
  };

  return (
    <div className="w-96 pl-5 pr-12 py-3 flex flex-col gap-4">
      {/* <div className="relative">
        <span
          className="absolute inset-y-0 left-1 input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-slate-500 dark:text-slate-200"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <input
          className="block w-full p-2 pl-11 text-[13px] text-gray-900 border rounded-full bg-slate-200 placeholder-slate-500 font-semibold "
          placeholder="Search Twitter"
        />
      </div> */}
      {/* <div className="bg-slate-100 rounded-xl">
        <div className="border-b-[1px] border-gray-200 px-4 py-2 font-bold">
          What's happening
        </div>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border-b-[1px] border-gray-200 px-4 py-2 flex justify-between gap-2"
          >
            <div className="flex flex-col gap-1 font-semibold">
              <div className="text-[13px] text-slate-500">
                COVID19 · Last night
              </div>
              <div className="text-ellipsis text-sm leading-4 font-bold tracking-tight">
                England’s Chief Medical Officer says the UK is at the most
                dangerous time of the pandemic
              </div>
              <div className="text-xs text-slate-500">
                Trending with{" "}
                <Link href="/">
                  <span className="text-[#1DA1F2] cursor-pointer">
                    #covid19
                  </span>
                </Link>
              </div>
            </div>
            <div className="w-14 h-14 rounded-xl bg-black flex-none mt-2"></div>
          </div>
        ))}
        <div className="px-4 py-2 text-sm text-[#1DA1F2] cursor-pointer font-semibold hover:text-[rgb(26,140,216)]">
          Show more
        </div>
      </div> */}
      <div className="bg-slate-100 rounded-xl">
        <div className="border-b-[1px] border-gray-200 px-4 py-2 font-bold">
          팔로우 추천
        </div>
        {data?.users.map((user) => (
          <div
            key={user.id}
            className="border-b-[1px] border-gray-200 px-4 py-2 flex justify-between items-center gap-1"
          >
            <div className="flex gap-2 items-center">
              <Image
                src={
                  user.avatar
                    ? `/images/${user.avatar}`
                    : "/images/anonymous.jpg"
                }
                width={45}
                height={45}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold">{user.name}</span>
                <span className="text-xs font-bold text-slate-500">
                  @{user.emailId}
                </span>
              </div>
            </div>
            {user.isFollow ? (
              <button
                onClick={() => onFollowClick(user.id)}
                className="px-4 py-1 rounded-full border-[1.5px] border-[#1DA1F2] font-bold text-sm h-fit shadow-md text-[#1DA1F2] hover:text-white hover:border-red-500 hover:bg-red-500 hover:after:content-['언팔로우'] after:content-['팔로잉']"
              ></button>
            ) : (
              <button
                onClick={() => onFollowClick(user.id)}
                className="px-4 py-1 rounded-full border-[1.5px] border-[#1DA1F2] font-bold text-sm h-fit shadow-md bg-[#1DA1F2] text-white hover:bg-inherit hover:text-[#1DA1F2]"
              >
                팔로우
              </button>
            )}
          </div>
        ))}
        <div className="px-4 py-2 text-sm text-[#1DA1F2] font-semibold hover:text-[rgb(26,140,216)]">
          {/* Show more */}
        </div>
      </div>
      <div className="px-2 text-xs font-semibold text-slate-400">
        Terms of Service Privacy Policy Cookie Policy
        <br />
        Ads info More © 2023 PYR, Inc.
      </div>
    </div>
  );
}
