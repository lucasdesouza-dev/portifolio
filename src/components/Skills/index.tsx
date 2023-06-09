import "react-circular-progressbar/dist/styles.css";
import {
  FaReact,
  FaSass,
  FaAngular,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";
import user from "@/services/User.service";
import CardEducation from "../Cards/CardEducation";
import CircleProgress from "../CircleProgess";
import "react-circular-progressbar/dist/styles.css";

const skillsFront = [
  {
    titulo: "React.JS",
    valor: 80,
    icon: <FaReact size={55} color="#5ED3F2" />,

    text: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
  },
  {
    titulo: "Next.JS",
    valor: 80,
    icon: <SiNextdotjs size={55} color="#2D3748" />,

    text: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.",
  },
  {
    titulo: "Tailwind CSS",
    valor: 80,
    icon: <SiTailwindcss size={55} color="#3FB0CD" />,

    text: "Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.",
  },
  {
    titulo: "Sass",
    valor: 80,
    icon: <FaSass size={55} color="#c66494" />,

    text: "Sass é uma linguagem de script de pré-processador que é interpretada ou compilada em Cascading Style Sheets. SassScript é a própria linguagem de script. Sass consiste em duas sintaxes. A sintaxe original, chamada de 'sintaxe recuada', usa uma sintaxe semelhante à Haml. ",
  },
  {
    titulo: "Angular.JS",
    valor: 80,
    icon: <FaAngular size={55} color="#d6002f" />,

    text: "AngularJS é um framework JavaScript código aberto, mantido pelo Google, que auxilia na execução de single-page applications.",
  },
  {
    titulo: "HTML5",
    valor: 80,
    icon: <SiHtml5 size={55} color="#DD4B24" />,

    text: "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML",
  },
  {
    titulo: "CSS3",
    valor: 80,
    icon: <FaCss3Alt size={55} color="#2261AE" />,

    text: "CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.",
  },
  {
    titulo: "Javascript",
    valor: 80,
    icon: <SiJavascript size={55} color="#EFD81E" />,
    text: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
  },

  {
    titulo: "Typescript",
    valor: 80,
    icon: <SiTypescript size={55} color="#3178C6" />,
  },
  {
    titulo: "Git",
    valor: 80,
    icon: <FaGitAlt size={55} color="#F0502F" />,
  },
];
const skillsBack = [
  {
    titulo: "NODE.JS",
    valor: 80,
    icon: <SiNodedotjs size={55} color="#7BB73F" />,
    text: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.",
  },
  {
    titulo: "NEST.JS",
    valor: 80,
    icon: <SiNestjs size={55} color="#E0234E" />,
    text: "NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor. Foi criado por Kamil Mysliwiec e lançado em 2017. Sob o capô, por padrão, o NestJS faz uso do framework Express.js, sendo também compatível com o Fastify. Sua arquitetura é fortemente inspirada no Angular.",
  },
  {
    titulo: "Prisma.JS",
    valor: 80,
    icon: <SiPrisma size={55} color="#2D3748" />,
    text: "O Prisma é um ORM (Object-Relational Mapping) que ajuda os desenvolvedores a criar aplicações mais rapidamente e cometer menos erros com um kit de ferramentas de banco de dados opensource, como PostgreSQL e MySQL. Além disso, o Prisma também suporta as seguintes linguagens: Javascript e Typescript.",
  },
  {
    titulo: "DOCKER",
    valor: 80,
    icon: <SiDocker size={55} color="#3897E5" />,
    text: "O Docker é uma ferramenta usada para automatizar a implantação de aplicativos em contêineres leves, para que os aplicativos funcionem com eficiência em diferentes ambientes.",
  },
  {
    titulo: "POSTGRESQL",
    valor: 80,
    icon: <SiPostgresql size={55} color="#31648D" />,
    text: "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className=" flex items-center w-full h-full min-h-screen"
    >
      <div className="w-1/2 flex flex-col  items-center justify-center">
        <div className="flex flex-wrap gap-2 justify-center">
          {user.educacao.map((item: any, i: number) => {
            return (
              <div key={i}>
                <CardEducation
                  titulo={item.titulo}
                  descricao={item.descricao}
                  periodo={item.periodo}
                  href={item.href}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-1/2 font-semibold p-4">
        <h1 className="text-2xl border-b-2 w-1/4 border-red-600 text-red-600 ">
          Minhas Skills
        </h1>

        <div className="flex flex-wrap gap-4 p-4 ">
          {skillsFront.map((item, i) => {
            return (
              <div key={i}>
                {/* <MouseOverPopover text={item.text} id={i}> */}
                <CircleProgress
                  titulo={item.titulo}
                  valor={item.valor}
                  icon={item.icon}
                />
                {/* </MouseOverPopover> */}
              </div>
            );
          })}
          {skillsBack.map((item, i) => {
            return (
              <div key={i}>
                {/* <MouseOverPopover text={item.text} id={i}> */}
                <CircleProgress
                  titulo={item.titulo}
                  valor={item.valor}
                  icon={item.icon}
                />
                {/* </MouseOverPopover> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
