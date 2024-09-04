import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { FaWallet, FaFileSignature, FaUserTie } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";
import Settings from "../components/common/Settings";
import Wallet from "../components/common/Wallet";

export const Dashboard = () => {
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

  const [active, setActive] = useState("lessons");
  const [index, setIndex] = useState(0);

  const navLinks = [
    { title: "lessons", icon: <FaFileSignature />, component: "" },
    { title: "instructors", icon: <FaUserTie />, component: "" },
    { title: "quizes", icon: <MdQuiz />, component: "" },
    { title: "wallet", icon: <FaWallet />, component: <Wallet /> },
    { title: "settings", icon: <RiSettings4Fill />, component: <Settings /> },
  ];

  return (
    <section className="bg-[#F3F4F8] min-h-[100vh]">
      <div className="container bg-white h-full w-4/5 m-auto p-0 pb-4 flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/4 pb-10 h-full flex flex-col items-center justify-start pt-4 gap-10 border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-b-gray-100 lg:border-r-gray-100 pr-4">
          <div
            onClick={() => {
              setActive("settings");
              setIndex(4);
            }}
            className="flex items-center justify-between gap-1 border-2 border-gray-200 rounded-md py-1 px-2 cursor-pointer self-end">
            <span>Edit</span>
            <TbEdit size={20} />
          </div>
          <div className="w-[150px] h-[150px] bg-gray-300 rounded-full">
            <div className="absolute">
              <image src="" alt="" />
              <div className="relative z-20 bottom-1 left-24 top-20 bg-blue-950 p-2 rounded-full border-white border-[3px] cursor-pointer">
                <BsFillCameraFill size={25} color="white" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-black font-bold tracking-wider text-xl">
              Student Name
            </h4>
            <p className="pb-8">Phone Number</p>
            <p>Cairo, Egypt</p>
            <p>14:00 (UTC +3:00)</p>
          </div>
        </div>
        <div className="w-full lg:w-3/4 h-full pt-4 px-4">
          <div
            className="flex gap-12 border-b-[1px]"
            style={{
              overflowX: "scroll",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
            }}>
            {navLinks.map((link, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setActive(link.title);
                    setIndex(index);
                  }}
                  className={`flex items-center gap-1 cursor-pointer pb-2 text-sm ${
                    active === link.title &&
                    "text-blue-400 border-b-[2px] border-b-blue-400"
                  }`}>
                  {link.icon}
                  <p className="text-sm">{link.title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center h-full">
            {navLinks[index].component ? (
              navLinks[index].component
            ) : (
              <h1 className="text-xl">this is {active} page</h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
