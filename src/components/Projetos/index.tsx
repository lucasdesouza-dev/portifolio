import React from "react";
import CardProjetos from "../Cards/CardProjetos";
import Carousel from "../Carousel";

export default function Projetos() {
  return (
    <section
      id="projetos"
      className=" flex items-center justify-center w-full h-full min-h-screen"
    >
      <Carousel />
    </section>
  );
}
