import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faBookmark,
  faEnvelope,
  faUser,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis,
  faHashtag,
  faHouseChimneyWindow,
  faSquarePollHorizontal,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import useUser from "../../libs/client/useUser";
import MenuItem from "../menuitem";
import { useRouter } from "next/router";

export default function SideMenu() {
  const { user } = useUser();
  const router = useRouter();

  const handleLogoutClick = async () => {
    await fetch("/api/users/logout", { method: "POST" });
    router.push("/log-in");
  };

  return (
    <div className="w-56 p-5 pt-3 flex flex-col justify-between">
      <div className="flex flex-col gap-5 font-bold">
        <FontAwesomeIcon
          icon={faTwitter}
          size="lg"
          fixedWidth
          className="text-[#1DA1F2]"
        />
        <MenuItem isSelected={router.pathname === "/"}>
          <FontAwesomeIcon icon={faHouseChimneyWindow} size="lg" fixedWidth />
          <Link href="/">Home</Link>
        </MenuItem>
        {/* <MenuItem isSelected={router.pathname === "/explore"}>
          <FontAwesomeIcon icon={faHashtag} size="lg" fixedWidth />
          <Link href="/explore">Explore</Link>
        </MenuItem>
        <MenuItem isSelected={router.pathname === "/notifications"}>
          <FontAwesomeIcon icon={faBell} size="lg" fixedWidth />
          <Link href="/notifications">Notifications</Link>
        </MenuItem>
        <MenuItem isSelected={router.pathname === "/messages"}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" fixedWidth />
          <Link href="/messages">Messages</Link>
        </MenuItem> */}
        <MenuItem isSelected={router.pathname === "/likes"}>
          <FontAwesomeIcon icon={faHeart} size="lg" fixedWidth />
          <Link href="/likes">Likes</Link>
        </MenuItem>
        <MenuItem isSelected={router.pathname === "/bookmarks"}>
          <FontAwesomeIcon icon={faBookmark} size="lg" fixedWidth />
          <Link href="/bookmarks">Bookmarks</Link>
        </MenuItem>
        {/* <MenuItem isSelected={router.pathname === "/lists"}>
          <FontAwesomeIcon icon={faSquarePollHorizontal} size="lg" fixedWidth />
          <Link href="/lists">Lists</Link>
        </MenuItem>
        <MenuItem isSelected={router.pathname === "/profile"}>
          <FontAwesomeIcon icon={faUser} size="lg" fixedWidth />
          <Link href="/Profile">Profile</Link>
        </MenuItem> */}
        {/* <MenuItem isSelected={router.pathname === "/more"}>
          <FontAwesomeIcon icon={faEllipsis} size="lg" fixedWidth />
          <Link href="/more">More</Link>
        </MenuItem> */}
        {/* <button className="w-full bg-[#1DA1F2] text-white text-sm py-2 rounded-full mt-3 hover:bg-[rgb(26,140,216)]">
          Tweet
        </button> */}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            src={
              user.avatar ? `/images/${user.avatar}` : "/images/anonymous.jpg"
            }
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="text-sm font-bold leading-4">{user.name}</div>
            <div className="text-xs font-bold text-gray-500 leading-4">
              @{user.emailId}
            </div>
          </div>
        </div>
        <div
          onClick={handleLogoutClick}
          className="w-7 h-7 flex justify-center items-center font-bold text-xl cursor-pointer hover:bg-slate-200 rounded-full"
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            size="xs"
            fixedWidth
          />
          {/* ··· */}
        </div>
      </div>
    </div>
  );
}
