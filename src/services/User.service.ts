import { BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const user = {
  name: "Lucas Souza",
  email: "luca.s.ouza@hotmail.com",
  imageUrl:
    "https://avatars.githubusercontent.com/u/55006206?s=400&u=557df4d972199b2a55c50ed83fa760b7a9da15d4&v=4",

  userRedesSociais: [
    {
      icon: FaLinkedinIn,
      name: "Linkdin",
      href: "https://www.linkedin.com/in/lucasdesouza-dev/",
    },
    {
      icon: BsGithub,
      name: "Github",
      href: "https://github.com/lucasdesouza-dev",
    },
    {
      icon: BsInstagram,
      name: "Instagram",
      href: "https://www.instagram.com/luccashsouza/",
    },
    {
      icon: BsWhatsapp,
      name: "Whatsapp",
      href: "https://wa.me/message/RL35SYK4U4T7I1",
    },
  ],
  educacao: [
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
      titulo: "Cursos Alura - Front-end e Back-End",
      href: "https://cursos.alura.com.br/user/lucasdesouza-dev-bit/fullCertificate/16bd499032e4f1a47bc0a2ec21c97be3",
      descricao:
        "Cursos profissionalizantes concluidos em uma das maiores plataformas digitais de cursos de programação, Front-end, Back-end,  Segurança de software com OWASP entre outros.",
      periodo: {
        inicial: "2021",
        termino: "2023",
      },
    },
  ],
};
export default user;
