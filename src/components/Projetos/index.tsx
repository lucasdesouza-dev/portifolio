import React from "react";
import CardProjetos from "../Cards/CardProjetos";
import Carousel from "../Carousel";

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="bg-gray-200 flex flex-col items-center justify-center w-full h-full min-h-screen"
    >
      <div className="px-8 w-full font-semibold  m-4">
        <h1 className="text-2xl  border-b-2 w-1/6 border-red-600 text-red-600 dark:text-yellow-600">
          Meus Projetos
        </h1>
      </div>
      <Carousel />
    </section>
  );
}
