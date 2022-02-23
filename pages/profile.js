import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/commmons/Header";
import Footer from "../components/commmons/Footer";
import { DuplicateIcon, QrcodeIcon } from "@heroicons/react/outline";

function Profile() {
  const username = "0xffb2...326418";
  const [active, setActive] = React.useState("transaction");

  return (
    <div>
      <Head>
        <title>Sartonin | Profile</title>
        <meta name="description" content="saratonin my course, with collection of courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-20">
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3 mt-5 ">
            <div className="relative h-[30px] w-[30px]  border-pink-500 border-4 rounded-full">
              <Image
                className="rounded-full bg-black cursor-pointer hover:opacity-75"
                src={`https://avatars.dicebear.com/api/pixel-art/${
                  username //|| user.get("username")
                }.svg`}
                layout="fill"
              />
            </div>
            <p className="text-xl text-black">Address</p>
            <div className="text-xl text-gray-500">0xffb2...326418</div>
            <div className="p-1.5 bg-gray-300 rounded-3xl cursor-pointer">
              <DuplicateIcon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="p-1.5 bg-gray-300 rounded-3xl cursor-pointer">
              <QrcodeIcon className="w-5 h-5 text-gray-600" />
            </div>
          </div>

          <button className="bg-blue-600 rounded py-1 w-20 text-white">Fiat</button>
        </div>
        <div className="flex gap-5">
          <div className="w-full md:w-1/2 rounded shadow mt-10 bg-white">
            <div className="font-bold border-b px-5 py-3 border-1 border-gray-300">Overview</div>
            <div className="flex items-center border-b px-5 py-3 border-1 border-gray-100">
              <div className="w-1/3">Balance:</div>
              <div>0 Ether</div>
            </div>

            <div className="flex items-center px-5 py-3 ">
              <div className="w-1/3">Ether Value:</div>
              <div>$2.5</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 rounded shadow mt-10 bg-white">
            <div className="font-bold border-b px-5 py-3 border-1 border-gray-300">More Info</div>
            <div className="flex items-center border-b px-5 py-3 border-1 border-gray-100">
              <div className="w-1/3">My Name Tag:</div>
              <div>John Doe</div>
            </div>

            <div className="flex items-center px-5 py-3 ">
              <div className="w-1/3"></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full rounded shadow mt-10 bg-white">
            <div className="flex gap-5 font-bold border-b px-5 pt-3 border-1 border-gray-300">
              <p
                className={`${
                  active == "transaction" && "border-b-2 border-blue-500 pb-3 text-blue-500"
                } cursor-pointer`}
                onClick={() => active != "transaction" && setActive("transaction")}
              >
                Transactions
              </p>
              <p
                className={`${active == "history" && "border-b-2 border-blue-500 pb-3 text-blue-500"} cursor-pointer`}
                onClick={() => active != "history" && setActive("history")}
              >
                Purchase History
              </p>
            </div>
            <div className=" px-5 py-3 ">
              <table>
                <tr>name</tr>
                <tr>doe</tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
