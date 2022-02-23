import React from "react";
// import Logo from "../LOGO.svg";

function Footer() {
  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between p-10 mt-10 bg-white dark:bg-black">
        {/* <img src={Logo} className="h-10 w-20" /> */}
        <p className="h-10 w-20 text-3xl font-bold">Melonin</p>
        <div className="flex justify-between sm:gap-10 ">
          <div className="flex flex-col gap-3 px-5">
            <p className="font-medium mb-3">Products</p>
            <p className="text-gray-500 font-medium text-footer">Blockchain Explorer</p>
            <p className="text-gray-500 font-medium text-footer">Crypto API</p>
            <p className="text-gray-500 font-medium text-footer">Crypto Indices</p>
            <p className="text-gray-500 font-medium text-footer">Interest</p>
            <p className="text-gray-500 font-medium text-footer">Jobs Board</p>
            <p className="text-gray-500 font-medium text-footer">Sitemap</p>
          </div>
          <div className="flex flex-col gap-3 px-5">
            <p className="font-medium mb-3">Company</p>
            <p className="text-gray-500 font-medium text-footer">About us</p>
            <p className="text-gray-500 font-medium text-footer">Terms of use</p>
            <p className="text-gray-500 font-medium text-footer">Privacy Policy</p>
            <p className="text-gray-500 font-medium text-footer">Disclaimer</p>
            <p className="text-gray-500 font-medium text-footer">Methodology</p>
            <p className="text-gray-500 font-medium text-footer">Career</p>
          </div>
          <div className="flex flex-col gap-3 px-5">
            <p className="font-medium mb-3">Request Form</p>
            <p className="text-gray-500 font-medium text-footer">Contact Support</p>
            <p className="text-gray-500 font-medium text-footer">FAQ</p>
            <p className="text-gray-500 font-medium text-footer">Glossary</p>
          </div>
          <div className="flex flex-col gap-3 px-5">
            <p className="font-medium mb-3">Socials</p>
            <p className="text-gray-500 font-medium text-footer">Facebook</p>
            <p className="text-gray-500 font-medium text-footer">Twitter</p>
            <p className="text-gray-500 font-medium text-footer">Telegram</p>
            <p className="text-gray-500 font-medium text-footer">Instagram</p>
            <p className="text-gray-500 font-medium text-footer">Interest</p>
            <p className="text-gray-500 font-medium text-footer">Interactive Chat</p>
          </div>
        </div>
      </div>
      <div className="px-10 py-5 bg-white dark:bg-black dark:text-white">
        <p className="text-gray-500 text-sm font-bold"> &copy; 2022 Melon, All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
