import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { BellIcon, XIcon } from "@heroicons/react/solid";
import { DuplicateIcon, BookOpenIcon, UserCircleIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  start: { y: 100, x: "-50%", transition: { duration: 0.5 } },
  stop: { y: -100, x: "-50%", transition: { repeatDelay: 3 } },
};

const Modal = ({ handleClose, show, username }) => {
  // const { user, logout } = useMoralis();
  const modal = "fixed top-0 left-0 w-full h-full bg-black/[0.6]";

  const redirect = (e, path) => {
    e.preventDefault();
    Router.push(path);
  };

  return (
    <AnimatePresence>
      <div className={modal + ` ${show ? "block" : "hidden"}`} style={{ zIndex: 1 }}>
        <motion.section variants={variants} animate={show ? "start" : "stop"} className="profile-modal">
          <div className="flex items-center justify-between ">
            <p className="text-xl">Account</p>
            <button onClick={handleClose}>
              <XIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="flex items-center gap-5 mt-5 ">
            <div className="relative h-[30px] w-[30px]  border-pink-500 border-4 rounded-full">
              <Image
                className="rounded-full bg-black cursor-pointer hover:opacity-75"
                src={`https://avatars.dicebear.com/api/pixel-art/${
                  username //|| user.get("username")
                }.svg`}
                layout="fill"
              />
            </div>

            <div className="font-bold text-xl text-emerald-500">0xffb2...326418</div>
            <DuplicateIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex flex-col px-5 py-3 my-2 gap-2.5 text-gray-600">
            <p className="flex gap-2.5 cursor-pointer" onClick={(e) => redirect(e, "/mycourse/learning")}>
              <BookOpenIcon className="w-6 h-6" /> My Courses
            </p>
            <p className="flex gap-2.5 cursor-pointer" onClick={(e) => redirect(e, "/profile")}>
              <UserCircleIcon className="w-6 h-6" /> View Profile
            </p>
          </div>
          <button
            // onClick={() => logout()}
            className="bg-blue-600 rounded-md py-2 w-full font-bold text-white"
          >
            Disconnect Wallet
          </button>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

function Header({ username, role, bg }) {
  // const { user } = useMoralis();
  const [show, onModal] = useState(false);

  function onSearchFormSubmit(e) {
    e.preventDefault();
    if (e.target.value == "") return;

    Router.push("/course");
  }
  return (
    <div
      className={`px-3.5 py-0 h-[64px] flex justify-evenly w-full bg-${
        bg == "dark" ? `[#181818]` : "white"
      } items-center border-b-1 border-b-black/[.06] shadow`}
    >
      {role != "admin" ? (
        <>
          <p>Melonin</p>
          <form onSubmit={onSearchFormSubmit} className="flex-grow pr-5 pl-10 py-2">
            <input
              className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f0f2f5]"
              placeholder="Search for anything..."
            />
          </form>
        </>
      ) : (
        <div className="flex-grow pr-5 pl-10 py-2" />
      )}
      <div className="flex justify-evenly items-center gap-5">
        <div className="relative px-3 py-2">
          <BellIcon className="w-6 h-6 cursor-pointer" />
          <div className="absolute top-0 right-1.5 cursor-pointer bg-red-600 text-white rounded-xl px-1.5 text-sm font-bold">
            5
          </div>
        </div>
        <div
          className={`flex justify-between items-center gap-3 bg-[${
            bg == "dark" ? "#171717" : "#f0f2f5"
          }] px-3 py-2 rounded-lg cursor-pointer`}
          onClick={(e) => {
            e.preventDefault();
            onModal((s) => !s);
          }}
        >
          <div className="font-bold text-emerald-500">0xffb2...326418</div>

          <div className="relative h-[30px] w-[30px] lg:mx-auto border-pink-500 border-4 rounded-full">
            <Image
              className="rounded-full bg-black cursor-pointer hover:opacity-75"
              src={`https://avatars.dicebear.com/api/pixel-art/${
                username //s|| //user.get("username")
              }.svg`}
              layout="fill"
              // onClick={() => logout()}
            />
          </div>
        </div>
      </div>
      <Modal
        show={show}
        handleClose={() => onModal((s) => !s)}
        username={username} //|| user.get("username")}
      />
    </div>
  );
}

export default Header;
