import { PlayIcon, StarIcon, InboxIcon } from "@heroicons/react/solid";

function Infocard() {
  return (
    <div className="w-full flex mt-10">
      <div className="flex gap-5 items-center w-1/3">
        <div className="p-3 bg-gray-400 rounded-3xl">
          <PlayIcon className="w-7 h-7" />
        </div>
        <p>Learn in-demand skills with over 183,000 video courses</p>
      </div>
      <div className="flex gap-5 items-center w-1/3">
        <div className="p-3 bg-gray-400 rounded-3xl">
          <StarIcon className="w-7 h-7" />
        </div>
        <p>Choose courses taught by real-world experts</p>
      </div>
      <div className="flex gap-5 items-center w-1/3">
        <div className="p-3 bg-gray-400 rounded-3xl">
          <InboxIcon className="w-7 h-7" />
        </div>
        <p>Learn at your own pace, with lifetime access on mobile and desktop</p>
      </div>
    </div>
  );
}

export default Infocard;
