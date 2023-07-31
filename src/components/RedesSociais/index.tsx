import { classNames } from "@/services/Methods.service";
import React from "react";
interface Props {
  open: boolean;
  redesSociais: { name: string; href: string; icon: any }[];
}
export default function RedesSociais({ open, redesSociais }: Props) {
  return (
    <div
      style={{
        transitionDelay: `300ms`,
        transition: "2s",
        transform: open ? " translate(1rem)" : "none",
      }}
      className={classNames(open ? " flex justify-center " : " block", "m-4 sm:w-full ")}
    >
      {redesSociais.map((item) => (
        <div
          style={{
            transitionDelay: `200ms`,
            transition: "1s",
            transform: open ? " translate(1rem)" : "none",
          }}
          key={item.name}
          className={classNames(
            open ? " justify-between " : "mb-2",
            "hover:text-[#dc2626] flex w-full  dark:text-white text-xl text-gray-900 justify-center"
          )}
        >
          <a href={item.href} className="cursor-pointer ">
            {React.createElement(item?.icon, { size: "20" })}
          </a>
        </div>
      ))}
    </div>
  );
}
