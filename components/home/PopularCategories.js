// import { Terminal } from "@heroicons/react/solid";
import {
  TerminalIcon,
  AcademicCapIcon,
  FilmIcon,
  NewspaperIcon,
  CameraIcon,
  HandIcon,
  BriefcaseIcon,
  MusicNoteIcon,
} from "@heroicons/react/outline";

function PopularCategories() {
  return (
    <div className="mt-10 bg-white p-10">
      <h3 className="font-bold text-3xl text-gray-800 mb-3">Popular Category</h3>
      <div className="flex items-center justify-evenly mt-7 w-full">
        <div className="flex flex-col items-center cursor-pointer text-gray-600 w-1/4">
          <TerminalIcon className="w-20 h-20" />
          <p className="font-bold text-lg text-center"> Technology</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-gray-600 w-1/4">
          <AcademicCapIcon className="w-20 h-20" />
          <p className="font-bold text-lg text-center"> Academic</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-gray-600 w-1/4">
          <FilmIcon className="w-20 h-20" />
          <p className="font-bold text-lg text-center"> Video Editing</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 w-1/4">
          <NewspaperIcon className="w-20 h-20" />
          <p className="font-bold text-lg text-center"> Digital Marketing</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly mt-14 w-full">
        <div className="flex flex-col items-center cursor-pointer text-gray-600 w-1/4">
          <CameraIcon className="w-20 h-20" />
          <p className="font-bold text-lg text-center"> Photography</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-gray-600 w-1/4">
          <HandIcon className="w-20 h-20" />
          <p className="font-bold text-lg text-center"> Personal Developemnt</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-gray-600 w-1/4">
          <BriefcaseIcon className="w-20 h-20" />
          <p className="font-bold text-lg text-center"> Business</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 w-1/4">
          <MusicNoteIcon className="w-20 h-20" />
          <p className="font-bold text-lg text-center"> Music</p>
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
