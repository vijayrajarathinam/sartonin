import Image from "next/image";
import { useMoralis } from "react-moralis";
import { BellIcon } from "@heroicons/react/solid";

function Header({ username }) {
  const { user, logout } = useMoralis();

  return (
    <div className="px-3.5 py-0 h-[64px] flex justify-evenly w-full bg-white items-center border-b-1 border-b-black/[.06] shadow">
      {/* /border-b-[]"> */}
      <p>Sartonin</p>
      <div className="flex-grow pr-5 pl-10 py-2">
        <input
          className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f0f2f5]"
          placeholder="Search for anything..."
        />
      </div>
      <div className="flex justify-evenly items-center gap-5">
        <div className="relative px-3 py-2">
          <BellIcon className="w-6 h-6 cursor-pointer" />
          <div className="absolute top-0 right-1.5 cursor-pointer bg-red-600 text-white rounded-xl px-1.5 text-sm font-bold">
            5
          </div>
        </div>
        <div className="flex justify-between items-center gap-3 bg-[#f0f2f5] px-3 py-2 rounded-lg cursor-pointer">
          <div className="font-bold text-emerald-500">0xffb2...326418</div>

          <div className="relative h-[30px] w-[30px] lg:mx-auto border-pink-500 border-4 rounded-full">
            <Image
              className="rounded-full bg-black cursor-pointer hover:opacity-75"
              src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
              layout="fill"
              onClick={() => logout()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
