import CardAbout from "../Cards/CardAbout";
import Sobre1 from '/public/sobre1.png'
import Sobre2 from '/public/sobre2.png'
import perfil from "/public/perfil.png"
const user = {
  name: "Lucas Souza",
  email: "luca.s.ouza@hotmail.com",
  imageUrl:
    "https://avatars.githubusercontent.com/u/55006206?s=400&u=557df4d972199b2a55c50ed83fa760b7a9da15d4&v=4",
};
export default function About() {
  return (
    <section
      id="sobre"
      className=" flex items-center w-full h-full min-h-screen bg-gray-200 dark:bg-[#1F2326]"
    >
      <div className="relative w-1/2 flex flex-col  items-center">
        <div className="absolute right-3/4 top-[42%]  ml-auto m-2  w-8 h-8 rounded-full bg-red-600"></div>
        <div className="grid grid-cols-2 w-1/2 gap-2">
          <CardAbout mt={2} w={230} h={250} src={perfil} bg="#dc2626" />
          <div>
            <div className=" m-2  w-4 h-4 rounded-full bg-red-600"></div>
            <CardAbout w={200} h={200}  src={user.imageUrl} bg="#dc2626"/>
          </div>

          <div>
            <CardAbout  w={200} h={200} src={Sobre1} bg="#dc2626" />
            <div className=" ml-auto m-2  w-4 h-4 rounded-full bg-red-600"></div>
          </div>
          <CardAbout  w={200} h={250} src={Sobre2} bg="#dc2626" />
        </div>
      </div>
      <div className="w-1/2 font-semibold p-4">
        <h1 className=" text-2xl border-b-2 w-1/4 border-[#dc2626] text-[#dc2626] ">
          Sobre Mim
        </h1>

        <p className=" my-2 font">
          Um Olhar Abrangente sobre a Experiência em Desenvolvimento Front-End e
          Back-End!
        </p>
        <p className=" m-2">
          Olá! Meu nome é Lucas Souza e sou um desenvolvedor web
          <strong className="ml-2">FULL STACK</strong> com experiência em
          front-end e back-end. Ao longo dos últimos três anos, tenho me
          dedicado a aprimorar minhas habilidades no desenvolvimento front-end,
          enquanto também explorei o empolgante mundo do back-end . Estou
          animado em compartilhar um pouco mais sobre minha jornada e as
          tecnologias que utilizei ao longo do caminho.
        </p>

        <p className=" m-2">
          Durante os últimos três anos, meu foco principal tem sido o
          desenvolvimento front-end. Tive a oportunidade de trabalhar com várias
          tecnologias e frameworks populares, incluindo{" "}
          <strong>
            Next.js, React,Sass, Angular.js, Bootstrap e Tailwind CSS
          </strong>{" "}
          . O Next.js se tornou uma das minhas ferramentas favoritas para criar
          aplicativos web modernos e escaláveis. O React é outra tecnologia
          fundamental no meu kit de ferramentas. Para estilização, tenho
          utilizado o Tailwind CSS em conjunto com o Sass. Com sua abordagem
          baseada em classes utilitárias, pude criar estilos de forma rápida e
          consistente. O Tailwind CSS oferece uma grande variedade de classes
          pré-definidas, o que me permitiu criar interfaces elegantes e
          responsivas de maneira eficiente.
        </p>
        <p className=" m-2">
          Um Novo Capítulo de Aprendizado e Crescimento Há aproximadamente um
          ano, decidi expandir minhas habilidades além do front-end e me
          aventurar no desenvolvimento back-end. Durante esse período, explorei
          tecnologias como <strong>Node.js e Nest.js</strong> alem da ORM Prisma
          e me familiarizei com a arquitetura e o funcionamento dos servidores.
          Utilizando o Node.js com Nest.js, pude desenvolver aplicativos
          back-end escaláveis e eficientes. Sua natureza assíncrona e não
          bloqueante foi especialmente útil para lidar com tarefas intensivas de
          I/O, como acesso a bancos de dados e integrações com APIs externas.
          Além disso, o vasto ecossistema de pacotes do Node.js facilitou a
          integração de funcionalidades adicionais em meus projetos. Além do
          Node.js e Nest.js, também adquiri conhecimentos em banco de dados,
          trabalhando com bancos de dados relacionais como o{" "}
          <strong> MySQL e PostgreSQL</strong> e também com bancos de dados não
          relacionais como o MongoDB e utilizando a{" "}
          <strong> ORM Prisma </strong> para automatizar as conecções com os
          bancos de dados almentando a eficiencia. Aprender sobre modelagem de
          dados e consultas me permitiu construir sistemas robustos e
          eficientes.
        </p>
        <p className=" m-2">
          Olhando para o Futuro Estou entusiasmado com a perspectiva de
          continuar aprimorando minhas habilidades em desenvolvimento web, tanto
          no front-end quanto no back-end. Pretendo explorar ainda mais as
          possibilidades e ampliar meus conhecimento na área que me
          <strong> APAIXONEI </strong>a primeira vista!
        </p>
      </div>
    </section>
  );
}
