"use client";
import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface Props {
  size: number;
  valorToggle: any;
}

export default function DarkMode({ size, valorToggle }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);

  function onToggle(valor: boolean) {
    setToggle(!valor);
    console.log("filho", toggle);
  }

  return (
    <div
      className={classNames(
        toggle ? "text-yellow-400" : "",
        "cursor-pointer absolute z-10 top-4 right-4 text-white flex justify-center items-center w-14 h-14 rounded-full bg-[#1F2326] "
      )}
    >
      <div
        onClick={() => {
          onToggle(toggle), valorToggle(toggle);
        }}
      >
        {toggle ? <FaSun size={size} /> : <BsFillMoonFill size={size} />}
      </div>
    </div>
  );
}
