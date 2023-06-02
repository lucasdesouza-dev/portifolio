"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const SubMenu = ({ items }: any) => {
  return (
    <section className=" flex justify-center items-center">
      <ul className=" w-4/5 flex flex-col gap-1 justify-center text-[0.8rem]">
        {items?.map((item: any, i: any) => {
          return (
            <div key={i} className="hover:bg-neutral-600 rounded-md text-white p-1">
              <Link href={item.link}>
                <li key={item.name}>
                  <p>{item.name}</p>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default SubMenu;
