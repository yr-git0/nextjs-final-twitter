import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHouseChimneyWindow,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faSquarePollHorizontal,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../menuitem";

export default function SideMenu() {
  return (
    <div className="w-56 p-5 pt-3 flex flex-col justify-between">
      <div className="flex flex-col gap-5 font-bold">
        <FontAwesomeIcon
          icon={faTwitter}
          size="lg"
          fixedWidth
          className="text-[#1DA1F2]"
        />
        <MenuItem>
          <FontAwesomeIcon icon={faHouseChimneyWindow} size="lg" fixedWidth />
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faHashtag} size="lg" fixedWidth />
          <Link href="/explore">Explore</Link>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faBell} size="lg" fixedWidth />
          <Link href="/notifications">Notifications</Link>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faEnvelope} size="lg" fixedWidth />
          <Link href="/messages">Messages</Link>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faBookmark} size="lg" fixedWidth />
          <Link href="/bookmarks">Bookmarks</Link>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faSquarePollHorizontal} size="lg" fixedWidth />
          <Link href="/lists">Lists</Link>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faUser} size="lg" fixedWidth />
          <Link href="/Profile">Profile</Link>
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faEllipsis} size="lg" fixedWidth />
          <Link href="/more">More</Link>
        </MenuItem>
        <button className="w-full bg-[#1DA1F2] text-white text-sm py-2 rounded-full mt-3">
          Tweet
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            src="/images/망고.png"
            width={40}
            height={40}
            className="bg-white rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold">Name</span>
            <span className="text-xs -mt-1 font-bold text-gray-500">@id</span>
          </div>
        </div>
        <div className="font-bold text-xl cursor-pointer">···</div>
      </div>
    </div>
  );
}
