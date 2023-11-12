import { Tweet } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useMutation from "../libs/client/useMutation";
import useUser from "../libs/client/useUser";

interface PostProps {
  isReply?: boolean;
  parentUserId?: string;
  parentTweetId?: number;
}
interface PostTweetForm {
  content: string;
  fileName?: string;
  image?: FileList;
}

interface PostTweetMutation {
  ok: boolean;
  tweet: Tweet;
}

export default function Post({
  isReply,
  parentUserId,
  parentTweetId,
}: PostProps) {
  const router = useRouter();
  const { user } = useUser();
  const { register, handleSubmit, watch } = useForm<PostTweetForm>();
  const inputFile = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<String | null>(null);
  const [postTweet, { loading, data }] =
    useMutation<PostTweetMutation>("/api/tweets");

  const handleInput = (element: any) => {
    element.style.height = element.scrollHeight + "px";
  };

  const openFileDiaglog = (type: string) => {
    if (!inputFile.current) return;

    if (type === "img") {
      inputFile.current.accept = "image/jpeg, image/png";
    } else if (type === "gif") {
      inputFile.current.accept = "image/gif";
    }
    inputFile.current.click();
  };

  const image = watch("image");
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
      console.log(imagePreview);
    }
  }, [image]);

  const onValid = async ({ content }: PostTweetForm) => {
    if (loading) return;
    if (image && image.length > 0) {
      const { uploadURL } = await (await fetch(`/api/upload`)).json();
      const form = new FormData();
      form.append("file", image[0]);
      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: "POST", body: form })).json();
      postTweet({ content, imageId: id });
    } else {
      postTweet({ content });
    }
  };
  useEffect(() => {
    if (data?.ok) {
      router.push(`/tweets/${data.tweet.id}`);
    }
  }, [data, router]);

  return (
    <>
      {isReply ? (
        <div className="text-xs pt-2 pl-16">
          <span className="font-bold text-[#1da1f2]">@{parentUserId}</span>{" "}
          님에게 보내는 답글
        </div>
      ) : null}
      <div className="flex gap-1 p-2 pr-9 border-b-[1px] border-gray-200">
        <div className="w-12 h-12">
          <Image
            src={user.avatar ? user.avatar : "/images/anonymous.jpg"}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <form onSubmit={handleSubmit(onValid)} className="flex-1 flex flex-col">
          <textarea
            {...register("content", {
              required: true,
              maxLength: {
                message: "280자 이하로만 작성 가능합니다.",
                value: 280,
              },
            })}
            onInput={(e) => handleInput(e.target)}
            maxLength={280}
            placeholder={isReply ? "답글 게시하기" : "What's happening?"}
            className="h-10 text-md placeholder:font-semibold placeholder-gray-400 align-middle px-2 flex items-center resize-none mb-2 bg-inherit py-2 scrollbar-hide outline-none whitespace-pre-line"
          />
          {imagePreview ? (
            <Image
              src={imagePreview as string}
              width={480}
              height={280}
              className="rounded-xl object-contain"
            />
          ) : null}
          <hr />
          <div className="flex justify-between items-center mt-2">
            <input
              {...register("image")}
              type="file"
              ref={inputFile}
              className="hidden"
            />
            <div className="flex gap-1 [&_svg]:w-7 [&_svg]:cursor-pointer [&_div]:rounded-full [&_div]:p-0.5">
              {/* <div
                onClick={() => openFileDiaglog("img")}
                className="hover:bg-[#E3F2FD]"
              >
                <svg
                  viewBox="-2 -2 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#1da1f2"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z"
                      stroke="#1da1f2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div
                onClick={() => openFileDiaglog("gif")}
                className="hover:bg-[#E3F2FD]"
              >
                <svg
                  viewBox="-3 -3 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#1da1f2"
                  strokeWidth="0.2"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M17.61 21.71H6.39C5.29996 21.71 4.25456 21.277 3.48379 20.5062C2.71302 19.7354 2.28 18.69 2.28 17.6V6.38C2.28 5.28996 2.71302 4.24457 3.48379 3.4738C4.25456 2.70302 5.29996 2.27 6.39 2.27H17.61C18.7 2.27 19.7454 2.70302 20.5162 3.4738C21.287 4.24457 21.72 5.28996 21.72 6.38V17.6C21.72 18.69 21.287 19.7354 20.5162 20.5062C19.7454 21.277 18.7 21.71 17.61 21.71ZM6.39 3.77C5.69778 3.77 5.03392 4.04499 4.54445 4.53446C4.05498 5.02393 3.78 5.68779 3.78 6.38V17.6C3.78 18.2922 4.05498 18.9561 4.54445 19.4456C5.03392 19.935 5.69778 20.21 6.39 20.21H17.61C18.3022 20.21 18.9661 19.935 19.4555 19.4456C19.945 18.9561 20.22 18.2922 20.22 17.6V6.38C20.22 5.68779 19.945 5.02393 19.4555 4.53446C18.9661 4.04499 18.3022 3.77 17.61 3.77H6.39Z"
                      fill="#1da1f2"
                    ></path>
                    <path
                      d="M7.86 14.9C7.09087 14.9 6.35325 14.5945 5.80939 14.0506C5.26553 13.5068 4.96 12.7691 4.96 12C4.96 11.2309 5.26553 10.4933 5.80939 9.9494C6.35325 9.40554 7.09087 9.10001 7.86 9.10001C8.05891 9.10001 8.24968 9.17902 8.39033 9.31968C8.53098 9.46033 8.61 9.65109 8.61 9.85001C8.61 10.0489 8.53098 10.2397 8.39033 10.3803C8.24968 10.521 8.05891 10.6 7.86 10.6C7.61706 10.6014 7.37866 10.6659 7.16823 10.7873C6.9578 10.9087 6.78259 11.0828 6.65981 11.2924C6.53703 11.5021 6.47091 11.74 6.46796 11.983C6.465 12.2259 6.52531 12.4654 6.64296 12.6779C6.76061 12.8905 6.93154 13.0688 7.13895 13.1953C7.34637 13.3218 7.58313 13.3921 7.82596 13.3994C8.06879 13.4066 8.30934 13.3506 8.52395 13.2367C8.73856 13.1229 8.91985 12.9551 9.05 12.75H8.59C8.39109 12.75 8.20032 12.671 8.05967 12.5303C7.91902 12.3897 7.84 12.1989 7.84 12C7.84 11.8011 7.91902 11.6103 8.05967 11.4697C8.20032 11.329 8.39109 11.25 8.59 11.25H10C10.1981 11.2526 10.3874 11.3324 10.5275 11.4725C10.6676 11.6126 10.7474 11.8019 10.75 12C10.7474 12.7666 10.4424 13.5012 9.90125 14.0442C9.36012 14.5872 8.62658 14.8947 7.86 14.9Z"
                      fill="#1da1f2"
                    ></path>
                    <path
                      d="M12.65 14.89C12.5511 14.8914 12.453 14.8729 12.3614 14.8357C12.2698 14.7984 12.1866 14.7433 12.1167 14.6733C12.0468 14.6034 11.9916 14.5202 11.9544 14.4286C11.9171 14.337 11.8987 14.2389 11.9 14.14V9.84001C11.9 9.6411 11.979 9.45033 12.1197 9.30968C12.2603 9.16903 12.4511 9.09001 12.65 9.09001C12.8489 9.09001 13.0397 9.16903 13.1803 9.30968C13.321 9.45033 13.4 9.6411 13.4 9.84001V14.14C13.4 14.3389 13.321 14.5297 13.1803 14.6703C13.0397 14.811 12.8489 14.89 12.65 14.89Z"
                      fill="#1da1f2"
                    ></path>
                    <path
                      d="M15.33 14.9C15.1319 14.8974 14.9426 14.8176 14.8025 14.6775C14.6624 14.5374 14.5826 14.3481 14.58 14.15V9.85001C14.58 9.65109 14.659 9.46033 14.7997 9.31968C14.9403 9.17902 15.1311 9.10001 15.33 9.10001C15.5289 9.10001 15.7197 9.17902 15.8603 9.31968C16.001 9.46033 16.08 9.65109 16.08 9.85001V14.15C16.08 14.2485 16.0606 14.346 16.0229 14.437C15.9852 14.528 15.93 14.6107 15.8603 14.6803C15.7907 14.75 15.708 14.8052 15.617 14.8429C15.526 14.8806 15.4285 14.9 15.33 14.9Z"
                      fill="#1da1f2"
                    ></path>
                    <path
                      d="M17.93 12.81H15.33C15.1311 12.81 14.9403 12.731 14.7997 12.5903C14.659 12.4497 14.58 12.2589 14.58 12.06C14.58 11.8611 14.659 11.6703 14.7997 11.5297C14.9403 11.389 15.1311 11.31 15.33 11.31H17.93C18.1289 11.31 18.3197 11.389 18.4603 11.5297C18.601 11.6703 18.68 11.8611 18.68 12.06C18.68 12.2589 18.601 12.4497 18.4603 12.5903C18.3197 12.731 18.1289 12.81 17.93 12.81Z"
                      fill="#1da1f2"
                    ></path>
                    <path
                      d="M17.93 10.6H15.33C15.1311 10.6 14.9403 10.521 14.7997 10.3803C14.659 10.2397 14.58 10.0489 14.58 9.85001C14.58 9.65109 14.659 9.46033 14.7997 9.31968C14.9403 9.17902 15.1311 9.10001 15.33 9.10001H17.93C18.1289 9.10001 18.3197 9.17902 18.4603 9.31968C18.601 9.46033 18.68 9.65109 18.68 9.85001C18.68 10.0489 18.601 10.2397 18.4603 10.3803C18.3197 10.521 18.1289 10.6 17.93 10.6Z"
                      fill="#1da1f2"
                    ></path>
                  </g>
                </svg>
              </div> */}
              {/* <div onClick={handleEmojiClick} className="hover:bg-[#E3F2FD]">
                <svg
                  viewBox="-3.5 -3.5 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                      fill="#1da1f2"
                    ></path>
                    <path
                      d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z"
                      fill="#1da1f2"
                    ></path>
                    <path
                      d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z"
                      fill="#1da1f2"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                      fill="#1da1f2"
                    ></path>
                  </g>
                </svg>
              </div> */}
            </div>
            <button
              type="submit"
              className="w-16 leading-5 font-semibold bg-[#1DA1F2] text-white text-xs py-1 rounded-full hover:bg-[rgb(26,140,216)]"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
