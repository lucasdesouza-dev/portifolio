
import {
  SiCreatereactapp,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import moviesLibGif from "../../public/Movies-Lib.gif";
import Gtr6 from "../../public/GTR6.gif";
import SecretWordGif from "../../public/SecretWord.gif";
import Calculadora from "../../public/calculadora.gif";
import BarbeariaAluraGif from "../../public/BarbeariaAlura.gif";
import ValoranteUI from "../../public/ValoranteUI.gif"
import BackendNest from "../../public/BackendNest.jpeg"

const cards = [
  {
    urlGit: "https://github.com/lucasdesouza-dev/The-Movie-App",
    urlDemo: "https://the-movie-app-git-master-lucashenriquesouza.vercel.app",
    referencias: null,
    descricao:
      "Aplicação com intuito de mostrar informações atualizadas de filmes , utizando a api da themoviedb para fornecer informações, ",
    tecnologias: [
      { titulo: "React.js", icon: SiReact },
      { titulo: "Vite.js", icon: SiVite },
      { titulo: "Css3", icon: SiCss3 },
      { titulo: "Typescript", icon: SiTypescript },
    ],
    titulo: "MoviesLib",
    image: moviesLibGif,
  }
  ,
  {
    urlGit: "https://github.com/lucasdesouza-dev/ValoranteUI/tree/main",
    urlDemo: "https://valorante-ui.vercel.app",
    descricao:
      "Projeto onde desenvolvo um layout basico dos agentes armas e maaps do jogo Valorant da Riot !",
    tecnologias: [
      { titulo: "React.js", icon: SiReact },
      { titulo: "Vite.js", icon: SiVite },
      { titulo: "Css3", icon: SiCss3 },
      { titulo: "Typescript", icon: SiTypescript },
      { titulo: "Graphql", icon: SiGraphql },
      { titulo: "Tailwind", icon: SiTailwindcss },
    ],

    titulo: "ValorantUI",
    image: ValoranteUI,
  }
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
  //}
  , {
    urlGit: "https://github.com/lucasdesouza-dev/backend-nest.js",
    urlDemo:
      "https://nestjs.lucasdesouzadev.online/api/doc",
    descricao:
      "Projeto onde desenvolvo uma api com autenticaçao, envio de email e criaçao de usuario !",
    tecnologias: [
      { titulo: "Nest.js", icon: SiNestjs },
      { titulo: "Prista", icon: SiPrisma },
      { titulo: "Typescript", icon: SiTypescript },
      { titulo: "Nestjs Mailer Module", icon: SiNestjs },

    ],
    titulo: "BackEnd com Nest.js",
    image: BackendNest,
  },
  {
    urlGit: "https://github.com/lucasdesouza-dev/Barbearia-Alura-Lucas",
    urlDemo: "https://lucasdesouza-dev.github.io/Barbearia-Alura-Lucas/",
    descricao:
      "Aplicaçao de uma Barbearia   contruida no curso de Front-End Da Alura",
    tecnologias: [
      { titulo: "HTML5", icon: SiHtml5 },
      { titulo: "Css3", icon: SiCss3 },
      {
        titulo: "Javascript", icon: SiJavascript
      },
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
      { titulo: "React.js", icon: SiReact },
      { titulo: "Create React App", icon: SiCreatereactapp },
      { titulo: "Css3", icon: SiCss3 },
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
      { titulo: "HTML5", icon: SiHtml5 },
      { titulo: "Css3", icon: SiCss3 },
      { titulo: "Javascript.JS", icon: SiJavascript },
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
      { titulo: "React.js", icon: SiReact },
      { titulo: "Vite.js", icon: SiVite },
      { titulo: "Css3", icon: SiCss3 },
      {
        titulo: "Typescript", icon: SiTypescript
      },
      ,
    ],
    titulo: "Calculadora Apple React.Js",
    image: Calculadora,
  },
]
export { cards }