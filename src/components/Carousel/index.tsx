"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import CardProjetos from "../Cards/CardProjetos";
import {
  SiCss3,
  SiGraphql,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const cards = [
  {
    urlGit: "https://github.com/lucasdesouza-dev/The-Movie-App",
    urlDemo: "https://the-movie-app-git-master-lucashenriquesouza.vercel.app",
    referencias: {
      url: "https://developer.themoviedb.org/docs",
      titulo: "Themoviedb",
    },
    descricao:
      "Aplicação com intuito de mostrar informações atualizadas de filmes , utizando a api da themoviedb para fornecer informações, ",
    tecnologias: [
      { titulo: "React.js", icon: <SiReact /> },
      { titulo: "Vite.js", icon: <SiVite /> },
      { titulo: "Css3", icon: <SiCss3 /> },
      { titulo: "Typescript", icon: <SiTypescript /> },
    ],
    titulo: "MoviesLib",
  },
  {
    urlGit: "https://github.com/lucasdesouza-dev/Projeto-ignite-Lab",
    urlDemo:
      "https://projeto-ignite-lab-git-main-lucashenriquesouza.vercel.app",
    descricao:
      "Projeto onde desenvolvo uma plataforma de eventos  junto com ignite lab da rocketseat implementandoas tecnologias abaixo !",
    tecnologias: [
      { titulo: "React.js", icon: <SiReact /> },
      { titulo: "Vite.js", icon: <SiVite /> },
      { titulo: "Css3", icon: <SiCss3 /> },
      { titulo: "Typescript", icon: <SiTypescript /> },
      { titulo: "Graphql", icon: <SiGraphql /> },
    ],
    referencias: {
      url: "https://www.rocketseat.com.br/ignite",
      titulo: "Ignite-Lab Rocketseat",
    },
    titulo: "Ignite-Lab",
  },
  {
    urlGit: "https://github.com/lucasdesouza-dev/Calculadora",
    urlDemo: "",
    descricao: "Simulando uma calculadora com designer da Apple",
    tecnologias: [
      { titulo: "React.js", icon: <SiReact /> },
      { titulo: "Vite.js", icon: <SiVite /> },
      { titulo: "Css3", icon: <SiCss3 /> },
      { titulo: "Typescript", icon: <SiTypescript /> },
      ,
    ],
    titulo: "Calculadora ",
  },
  {
    urlGit: "",
    urlDemo: "",
    descricao: "loresldjhaskjfbk kjhdkja kjahdkja hdkjah kjdhkjhkjhdkjha jkh",
    tecnologias: [
      { titulo: "React.js", icon: <SiReact /> },
      { titulo: "Vite.js", icon: <SiVite /> },
      { titulo: "Css3", icon: <SiCss3 /> },
      { titulo: "Typescript", icon: <SiTypescript /> },
    ],
    titulo: "Mergulhe no JavaScript com TypeScript",
  },
];

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <motion.div className="w-full px-10 display flex justify-center items-center">
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden w-full "
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex  gap-6 "
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {cards.map((item, index) => {
            const { urlGit, urlDemo, descricao, titulo, tecnologias } = item;
            return (
              <motion.div key={index} className="w-full">
                <CardProjetos
                  titulo={titulo}
                  urlGit={urlGit}
                  urlDemo={urlDemo}
                  descricao={descricao}
                  tecnologias={tecnologias}
                  referencias={item.referencias}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
