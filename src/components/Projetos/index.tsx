import React from "react";
import CardProjetos from "../Cards/CardProjetos";
import Carousel from "../Carousel";
import { cards } from "@/services/Projetos.service";
export default function Projetos() {
  return (
    <section
      id="projetos"
      className="bg-gray-200 dark:bg-[#1F2326] flex flex-col my-4  w-full ">
      <div className="px-2  font-semibold  m-4">
        <h1 className="text-2xl  border-b-2 w-3/5 border-red-600 text-red-600 ">
          Meus Projetos
        </h1>
      </div>
      {/* <div className="hidden lg:block">
        <Carousel  />
      </div> */}
      <div className="p-2 flex flex-col gap-1 justify-center my-4 ">
        {cards.map((item, index) => {
          const { image, urlGit, urlDemo, descricao, titulo, tecnologias } =
            item;
          return (
            <div key={index} className="w-full flex justify-center ">
              <CardProjetos
                titulo={titulo}
                urlGit={urlGit}
                urlDemo={urlDemo}
                descricao={descricao}
                tecnologias={tecnologias}
                referencias={item?.referencias}
                image={image}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
