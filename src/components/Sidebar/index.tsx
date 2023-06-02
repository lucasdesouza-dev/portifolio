"use client";
import React, { Fragment, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import SubMenu from "./SubMenu";
import Link from "next/link";
import Image from "next/image";
import {
  BsFillPeopleFill,
  BsHouseDoorFill,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsListCheck,
  BsCaretUpFill,
  BsCaretDownFill,
} from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";

const menus = [
  { name: "HOME", link: "/dashboard", icon: BsHouseDoorFill },
  {
    name: "ABOUT ME",
    link: "dashboard/clientes",
    icon: BsFillPeopleFill,
  },
  {
    name: "SERVICES",
    link: "dashboard/procedimentos",

    icon: BsListCheck,
  },
];
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const userRedesSociais = [
  {
    icon: <BsLinkedin />,
    name: "Linkdin",
    href: "https://www.linkedin.com/in/lucasdesouza-dev/",
  },
  {
    icon: <BsGithub />,
    name: "Github",
    href: "https://github.com/lucasdesouza-dev",
  },
  {
    icon: <BsInstagram />,
    name: "Instagram",
    href: "https://www.instagram.com/luccashsouza/",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(null);
  const [showName, setShowName] = useState(null);
  return (
    <section className="sticky top-0 z-10 flex   h-full gap-6">
      <div
        className={`bg-[#1F2326]  ${
          open ? "w-60" : "w-16"
        } h-full px-4 flex flex-col justify-between text-gray-100 duration-500`}
      >
        <div
          className={classNames(
            open ? "justify-between" : "justify-end",
            "flex py-3 "
          )}
        >
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
              setIsExpanded(null);
              console.log(showName);
            }}
          />
        </div>
        <div className="relative mt-4 flex flex-col gap-4 ">
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
                        {React.createElement(menu?.icon, { size: "20" })}
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
                    <Link
                      href={menu?.link}
                      className={classNames(
                        menu?.margin && "mt-5",
                        "group  flex items-center gap-3.5  rounded-md p-2 text-sm font-medium hover:bg-gray-800"
                      )}
                    >
                      <div>
                        {React.createElement(menu?.icon, { size: "20" })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${i + 3}00ms`,
                        }}
                        className={classNames(
                          !open
                            ? "translate-x-28 overflow-hidden opacity-0"
                            : "",
                          "whitespace-pre duration-500"
                        )}
                      >
                        {menu?.name}
                      </h2>
                      {!open && (
                        <h2
                          className={`absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                        >
                          {menu?.name}
                        </h2>
                      )}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div
          style={{
            transitionDelay: `300ms`,
            transition: "2s",
            transform: open ? " translate(1rem)" : "none",
          }}
          className={classNames(open ? " flex justify-center " : " block")}
        >
          {userRedesSociais.map((item) => (
            <div
              style={{
                transitionDelay: `300ms`,
                transition: "2s",
                transform: open ? " translate(1rem)" : "none",
              }}
              key={item.name}
              className={classNames(
                open ? " m-2 " : "mb-2",
                "flex   text-xl text-white justify-center"
              )}
            >
              <a href={item.href} className="cursor-pointer">
                {item.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
