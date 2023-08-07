import Image from "next/image";
import React, { ReactNode } from "react";
import moviesLibGif from "../../../../public/Movies-Lib.gif";
import { BsFillArrowUpRightSquareFill, BsGithub } from "react-icons/bs";
import { IconType } from "react-icons";
const user = {
  name: "Lucas Souza",
  email: "luca.s.ouza@hotmail.com",
  imageUrl:
    "https://avatars.githubusercontent.com/u/55006206?s=400&u=557df4d972199b2a55c50ed83fa760b7a9da15d4&v=4",
};

interface Props {
  titulo: string;
  descricao: string;
  tecnologias?: any[] | undefined;
  urlGit: string;
  urlDemo: string;
  referencias?: { url: string; titulo: string };
  image: any;
}
export default function CardProjetos({
  titulo,
  descricao,
  tecnologias,
  urlGit,
  urlDemo,
  referencias,
  image,
}: Props) {
  return (
    <div className="flex flex-col p-2 my-2 w-full h-full  items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-[#10101a] dark:bg-[#10101a] dark:hover:bg-gray-700">
      <Image
        width={300}
        height={200}
        className="object-cover max-w-lg cursor-move rounded-t-lg  h-full w-full rounded-xl "
        src={image}
        alt=""
      />
      <div className="flex flex-col h-full justify-around p-4 leading-normal">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {titulo}
        </h1>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {descricao}
        </p>
        <div className="p-2">
          {referencias && (
            <div className="flex flex-col gap-2 border-y-2 border-gray-300 justify-center items-center">
              <h1 className="font-semibold">Referencias </h1>
              <a href={referencias.url}>{referencias.titulo}</a>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-2 m-2">
          {tecnologias?.map((item, i) => {
            return (
              <div
                key={i}
                className="p-2 rounded-xl border border-[#dc2626] flex gap-2 justify-center items-center"
              >
               
                {React.createElement(item.icon)}
                <p>{item.titulo}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-around">
          <a
            href={urlGit}
            className="cursor-pointer p-2 flex gap-4 justify-center border border-[#dc2626] rounded-xl"
          >
            <p>Github</p>
            <BsGithub size={25} />
          </a>
          <a
            href={urlDemo}
            className="cursor-pointer p-2 flex gap-4 justify-center border border-[#dc2626] rounded-xl"
          >
            <p>Demo</p>
            <BsFillArrowUpRightSquareFill size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
