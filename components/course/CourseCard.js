import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as OutlinedStarIcon } from "@heroicons/react/outline";

function CourseCard() {
  return (
    <div className="flex md:gap-5 py-5 px-3 border-b border-1 border-gray-300">
      <img className="h-36 w-72 " src="https://v1.tailwindcss.com/img/card-top.jpg" />
      <div className="flex-auto">
        <p className="font-bold mt-2">100 Days of Code: The Complete Python Pro Bootcamp for 2022 </p>
        <p className="w-2/3">
          Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and
          apps!
        </p>
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
      </div>
      <div className="flex flex-col w-20 items-center justify-between py-5">
        <p>$324</p>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default CourseCard;
