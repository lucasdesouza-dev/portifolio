import CardEducation from "../Cards/CardEducation";

const educacao = [
  {
    titulo: "Análise e Desenvolvimento de Sistemas",
    descricao:
      "Análise e Desenvolvimento de Sistemas é a área da tecnologia responsável por projetar, desenvolver e implementar softwares para atender as necessidades das empresas, utilizando técnicas de programação e gestão de projetos para criar soluções inovadoras e eficientes.",
    periodo: {
      inicial: "2021",
      termino: "2023",
    },
  },
  {
    titulo: "Desenvolvimento Front-End",
    descricao:
      "O profissional desenvolvedor front-end é o responsável por colocar em prática, através de códigos, o design de um site ou interface. Enquanto o web design projeta o visual de um site, o desenvolvimento front-end implementa esse design através de códigos, como HTML, CSS e JavaScript e suas Frameworks.",
    periodo: {
      inicial: "2021",
      termino: "2023",
    },
  },
  {
    titulo: "Desenvolvimento Back-End",
    descricao:
      "O desenvolvedor back-end trabalha na parte de “trás” da aplicação. Ele é o responsável, em termos gerais, pela implementação da regra de negócio. Em uma aplicação web, este desenvolvedor, quando focado, não toca na parte visual da aplicação.",
    periodo: {
      inicial: "2021",
      termino: "2023",
    },
  },
];
export default function Skills() {
  return (
    <section
      id="skills"
      className=" flex items-center w-full h-full min-h-screen"
    >
      <div className="w-1/2 flex flex-col  items-center justify-center">
        <div className="flex flex-wrap gap-2">
          {educacao.map((item: any, i: number) => {
            return (
              <div key={i}>
                <CardEducation
                  titulo={item.titulo}
                  descricao={item.descricao}
                  periodo={item.periodo}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-1/2 font-semibold p-4"></div>
    </section>
  );
}
