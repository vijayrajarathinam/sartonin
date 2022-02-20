import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as OutlinedStarIcon } from "@heroicons/react/outline";
function Card() {
  return (
    <div className="w-[500px] rounded bg-white">
      <div className="w-[240px] flex flex-col">
        <img className="h-36 w-full " src="https://v1.tailwindcss.com/img/card-top.jpg" />
        <p className="text-xl font-bold px-2">Whats new in crypto..</p>
        <p className="mt-2 px-2 font-bold text-xs text-gray-500 dark:text-white capitalize">Lorem ipsum</p>
        <div className="flex my-2 items-center px-2">
          <p className="text-yellow-600 pr-2">4.4</p>
          {Array(3)
            .fill()
            .map((_) => (
              <StarIcon className="w-4 h-4 text-yellow-500" />
            ))}
          {Array(2)
            .fill()
            .map((_) => (
              <OutlinedStarIcon className="w-4 h-4 text-yellow-500" />
            ))}
          <p className="text-gray-500 pl-2">(123)</p>
        </div>
        <div className="px-2 mb-3">
          <button class="text-gray-800 w-full bg-transparent border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-8 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Buy 340 ETH
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
