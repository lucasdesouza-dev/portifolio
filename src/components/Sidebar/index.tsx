"use client";
import React, { Fragment, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import SubMenu from "./SubMenu";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "../../services/Methods.service";

import {
  BsHouseDoorFill,
  BsInstagram,
  BsGithub,
  BsCaretUpFill,
  BsCaretDownFill,
  BsWhatsapp,
} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiIdBadge } from "react-icons/tfi";
import { SiCodefactor } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import user from "../../services/User.service";
import RedesSociais from "../RedesSociais";
const menus = [
  { name: "HOME", link: "#home", icon: <BsHouseDoorFill /> },
  {
    name: "Sobre",
    link: "#sobre",
    icon: <TfiIdBadge />,
  },
  {
    name: "Skills",
    link: "#skills",

    icon: <GiSkills />,
  },
  {
    name: "Projetos",
    link: "#projetos",

    icon: <SiCodefactor />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(null);
  const [showName, setShowName] = useState(null);
  return (
    <div className=" sticky   max-w-[16rem]">
      <div
        className={`bg-[#f7f7ff]  ${
          open ? "w-64" : "w-16"
        } dark:bg-[#1F2326] dark:text-white border-r dark:border-r-white h-full relative overflow-hidden flex flex-col justify-between text-gray-900 duration-500`}
      >
        <div
          style={{
            transitionDelay: `300ms`,
            opacity: !open ? "0" : "1",
            transition: "2s",
            transform: !open ? " translateX(4rem)" : "none",
            overflow: !open ? "hidden" : "",
          }}
          className="  absolute top-[-70px] left-[-10px] bg-[#dc2626] w-60 h-60 rounded-full"
        ></div>

        <div className="z-10 h-1/2 flex flex-col justify-between">
          <div className=" h-1/2  flex  flex-col justify-around items-center rounded">
            <div
              className={classNames(
                !open ? "justify-center" : "justify-end",
                "z-10 w-full flex py-3 "
              )}
            >
              <HiMenuAlt3
                size={26}
                className="cursor-pointer"
                onClick={() => {
                  setOpen(!open);
                  setIsExpanded(null);
                }}
              />
            </div>
            <div
              className={classNames(
                !open ? "px-2" : "",
                " h-2/4 flex flex-col justify-around items-center"
              )}
            >
              <Image
                className="rounded-full border-4 border-white"
                src={user.imageUrl}
                width={100}
                height={100}
                alt="Picture of the author"
              />

              {open && (
                <div className="text-lg ">
                  <h1>{user.name}</h1>
                </div>
              )}
            </div>
          </div>
          <div className="relative px-4 mt-4 flex flex-col gap-4 ">
            {menus?.map((menu: any, i: any) => {
              const createSubMenu = !!menu.subMenu;

              return (
                <div key={i} className=" ">
                  {createSubMenu ? (
                    <div className="w-full">
                      <div
                        className={classNames(
                          isExpanded ? "bg-gray-800" : "",
                          "group  flex  items-center gap-3.5 rounded-md  p-2 text-sm font-medium hover:bg-gray-800"
                        )}
                        onClick={() =>
                          !open
                            ? setTimeout(() => {
                                setIsExpanded(
                                  isExpanded === menu.name ? null : menu.name
                                );
                              }, 500)
                            : setIsExpanded(
                                isExpanded === menu.name ? null : menu.name
                              )
                        }
                        onMouseEnter={() => setShowName(menu.name)}
                        onMouseLeave={() => setShowName(null)}
                        style={{
                          marginTop: menu?.margin ? "5px" : "0px",
                        }}
                      >
                        <div
                          onClick={() => {
                            !open && setOpen(!open);
                          }}
                        >
                          {menu?.icon}
                        </div>
                        <h2
                          style={{
                            transitionDelay: `${i + 3}00ms`,
                            opacity: !open ? "0" : "1",
                            transition: "1s",
                            transform: !open ? " translateX(8rem)" : "none",
                            overflow: !open ? "hidden" : "",
                          }}
                        >
                          {open && menu?.name}
                        </h2>
                        {!open && (
                          <h2
                            className={`absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                          >
                            {menu?.name}
                          </h2>
                        )}
                        <div
                          style={{
                            transitionDelay: `${i + 3}00ms`,
                            opacity: !open ? "0" : "1",
                            transition: "1s",
                            transform: !open ? " translateX(8rem)" : "none",
                            overflow: !open ? "hidden" : "",
                          }}
                          className="flex w-full justify-end"
                        >
                          {createSubMenu &&
                            (isExpanded === menu.name ? (
                              <BsCaretUpFill />
                            ) : (
                              <BsCaretDownFill />
                            ))}
                        </div>
                      </div>

                      {createSubMenu && isExpanded === menu.name && (
                        <SubMenu items={menu.subMenu} />
                      )}
                    </div>
                  ) : (
                    <div>
                      <a
                        href={menu?.link}
                        className={classNames(
                          menu?.margin && "mt-5",
                          "group hover:text-[#dc2626] flex items-center gap-3.5  rounded-md p-2 text-sm font-medium "
                        )}
                      >
                        <div className="delay-300 text-xl duration-500">
                          {menu?.icon}
                        </div>
                        <h2
                          style={{
                            transitionDelay: `${i + 3}00ms`,
                          }}
                          className={classNames(
                            !open
                              ? "translate-x-28 overflow-hidden opacity-0"
                              : "",
                            "whitespace-pre duration-500  "
                          )}
                        >
                          {menu?.name}
                        </h2>
                        {/* {!open && (
                          <h2
                            className={`absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                          >
                            {menu?.name}
                          </h2>
                        )} */}
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <RedesSociais open={open} redesSociais={user.userRedesSociais} />
      </div>
    </div>
  );
};

export default Sidebar;
