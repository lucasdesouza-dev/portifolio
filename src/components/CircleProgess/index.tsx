"use client";
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
interface Props {
  titulo: string;
  valor: number;
  icon: any;
}
export default function CircleProgress({ titulo, valor, icon }: Props) {
  return (
    <div className="w-36">
      <CircularProgressbarWithChildren
        value={valor}
        strokeWidth={6}
        styles={buildStyles({
          pathColor: "#dc2626",

          trailColor: "",
        })}
      >
        {icon}
        <div>
          <p className=" font-bold">{titulo}</p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
