"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiCodeBlock } from "react-icons/bi";
import CardProjetos from "../Cards/CardProjetos";
import {
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const cards = [
  {
    urlGit: "https://github.com/lucasdesouza-dev/The-Movie-App",
    urlDemo: "https://the-movie-app-git-master-lucashenriquesouza.vercel.app",
    api: {
      urlApi: "https://developer.themoviedb.org/docs",
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
    urlGit: "",
    urlDemo: "",
    descricao: "loresldjhaskjfbk kjhdkja kjahdkja hdkjah kjdhkjhkjhdkjha jkh",
    tecnologias: [{ titulo: "", icon: "" }],
    titulo: "Mergulhe no JavaScript com TypeScript",
  },
  {
    urlGit: "",
    urlDemo: "",
    descricao: "loresldjhaskjfbk kjhdkja kjahdkja hdkjah kjdhkjhkjhdkjha jkh",
    tecnologias: [{ titulo: "", icon: "" }],
    titulo: "Mergulhe no JavaScript com TypeScript",
  },
  {
    urlGit: "",
    urlDemo: "",
    descricao: "loresldjhaskjfbk kjhdkja kjahdkja hdkjah kjdhkjhkjhdkjha jkh",
    tecnologias: [{ titulo: "", icon: "" }],
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
                  api={item.api}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
