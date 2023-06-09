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
};
export default user;
