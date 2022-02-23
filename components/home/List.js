import Card from "../commmons/Card";

const count = 8;

function List() {
  return (
    <div className="mt-10 bg-white p-10">
      <h3 className="font-bold text-3xl text-gray-800 mb-3">
        Trending on the platform
      </h3>

      <p className="md:pr-12 mb-5">
        Expand your career opportunities with Sartonin. Take one of Udemy’s
        range of Python courses and learn how to code using this incredibly
        useful language. Its simple syntax and readability makes Python perfect
        for Flask, Django, data science, and machine learning. You’ll learn how
        to build everything from games to sites to apps. Choose from a range of
        courses that will appeal to both beginners and advanced developers
        alike.
      </p>
      <button
        class="text-gray-800 bg-transparent border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Learn more...
      </button>
      <div className="relative">
        <div
          className={` w-[${
            480 * 15
          }px] py-3 flex overflow-x-auto gap-5 justify-between scrollbar-hide`}
        >
          {new Array(count).fill(null).map(function () {
            return <Card />;
          })}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-r from-transparent to-white dark:to-zinc-800 h-full w-2/12" />
      </div>
    </div>
  );
}

export default List;
