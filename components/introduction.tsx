import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Introduction() {
  return (
    <div className="w-2/5 h-screen flex select-none">
      <div className="w-full bg-[#1da1f2] flex flex-col justify-center items-center text-white rounded-r-3xl">
        <div className="w-fit">
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon icon={faTwitter} size="3x" fixedWidth />
            <span className="text-4xl font-bold">TWITTER</span>
          </div>
          <div className="text-sm pl-3">
            See what's happening in
            <br />
            the world right now
          </div>
        </div>
      </div>
      <div className="w-fit h-screen flex items-center -ml-10">
        <div className="bg-[#1da1f2] w-20 h-20 rounded-full text-white flex justify-center items-center border-8 border-white pl-0.5">
          <FontAwesomeIcon icon={faTwitter} size="2xl" fixedWidth />
        </div>
      </div>
    </div>
  );
}
