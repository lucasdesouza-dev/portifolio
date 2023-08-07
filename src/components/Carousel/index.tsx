"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import moviesLibGif from "../../../public/Movies-Lib.gif";
import Gtr6 from "../../../public/GTR6.gif";
import SecretWordGif from "../../../public/SecretWord.gif";
import Calculadora from "../../../public/calculadora.gif";
import BarbeariaAluraGif from "../../../public/BarbeariaAlura.gif";

import CardProjetos from "../Cards/CardProjetos";
import {
  SiCreatereactapp,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiJavascript,
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
      { titulo: "React.js", icon: SiReact  },
      { titulo: "Vite.js", icon:SiVite  },
      { titulo: "Css3", icon: SiCss3  },
      { titulo: "Typescript", icon: SiTypescript  },
    ],
    titulo: "MoviesLib",
    image: moviesLibGif,
  },
  // {
  //   urlGit: "https://github.com/lucasdesouza-dev/Projeto-ignite-Lab",
  //   urlDemo:
  //     "https://projeto-ignite-lab-git-main-lucashenriquesouza.vercel.app",
  //   descricao:
  //     "Projeto onde desenvolvo uma plataforma de eventos  junto com ignite lab da rocketseat implementandoas tecnologias abaixo !",
  //   tecnologias: [
  //     { titulo: "React.js", icon: <SiReact /> },
  //     { titulo: "Vite.js", icon: <SiVite /> },
  //     { titulo: "Css3", icon: <SiCss3 /> },
  //     { titulo: "Typescript", icon: <SiTypescript /> },
  //     { titulo: "Graphql", icon: <SiGraphql /> },
  //   ],
  //   referencias: {
  //     url: "https://www.rocketseat.com.br/ignite",
  //     titulo: "Ignite-Lab Rocketseat",
  //   },
  //   titulo: "Ignite-Lab",
  // },
  {
    urlGit: "https://github.com/lucasdesouza-dev/Barbearia-Alura-Lucas",
    urlDemo: "https://lucasdesouza-dev.github.io/Barbearia-Alura-Lucas/",
    descricao:
      "Aplicaçao de uma Barbearia   contruida no curso de Front-End Da Alura",
    tecnologias: [
      { titulo: "HTML5", icon: SiHtml5  },
      { titulo: "Css3", icon: SiCss3  },
      { titulo: "Javascript", icon: SiJavascript  },
      ,
    ],
    titulo: "Barbearia Alura ",
    image: BarbeariaAluraGif,
  },
  {
    urlGit: "https://github.com/lucasdesouza-dev/secretword",
    urlDemo: "https://lucasdesouza-dev.github.io/secretword/",
    descricao:
      "Projeto desenvolvido no curso React.JS do 0 a Maestria, ministrado pelo Matheus Bathisti , que consiste em adivinhas a palavra escondida com  a dica e limite de erros!",
    tecnologias: [
      { titulo: "React.js", icon: SiReact  },
      { titulo: "Create React App", icon: SiCreatereactapp  },
      { titulo: "Css3", icon: SiCss3  },
    ],
    titulo: "Secret Word",
    image: SecretWordGif,
  },
  {
    urlGit: "https://github.com/lucasdesouza-dev/r6_times-lucas",
    urlDemo: "https://lucasdesouza-dev.github.io/r6_times-lucas/",
    descricao:
      "Projeto no intuito de gerar times Com RRMS proximos para equiparar times e jogar com os amigos na ranquiada, deixando as partidas mais divertidas e competitivas",
    tecnologias: [
      { titulo: "HTML5", icon: SiHtml5  },
      { titulo: "Css3", icon: SiCss3  },
      { titulo: "Javascript.JS", icon: SiJavascript  },
    ],
    titulo: "GTR6- Gerador de Times Raimbow Six Seage",
    image: Gtr6,
  },
  {
    urlGit: "https://github.com/lucasdesouza-dev/Calculadora",
    urlDemo: "https://lucasdesouza-dev.github.io/Calculadora/",
    descricao:
      "Calculadora construida com o layout da apple , calculadora simples ams funcional",
    tecnologias: [
      { titulo: "React.js", icon: SiReact  },
      { titulo: "Vite.js", icon: SiVite  },
      { titulo: "Css3", icon: SiCss3  },
      { titulo: "Typescript", icon: SiTypescript  },
      ,
    ],
    titulo: "Calculadora Apple React.Js",
    image: Calculadora,
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
            const { image, urlGit, urlDemo, descricao, titulo, tecnologias } =
              item;
            return (
              <motion.div key={index} className="w-full">
                <CardProjetos
                  titulo={titulo}
                  urlGit={urlGit}
                  urlDemo={urlDemo}
                  descricao={descricao}
                  tecnologias={tecnologias}
                  referencias={item.referencias}
                  image={image}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
