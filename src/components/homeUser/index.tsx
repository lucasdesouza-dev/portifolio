"use client";
import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";
import profilePic from "/public/perfil.png";
interface User {
  name: string;
  imageUrl: string;
  email: string;
}
export default function HomeUser({ name, imageUrl, email }: User) {
  return (
    <section
      id="home"
      className=" relative overflow-hidden  w-full h-full min-h-screen flex flex-col lg:flex-row  justify-evenly max-w-full">
      <div className=" hidden lg:block absolute top-[-10rem] right-[-12rem] w-[60rem] h-[60rem] rounded-full bg-black opacity-20"></div>

      <div className=" font-semibold  p-2 flex flex-col  lg:justify-center lg:p-4 ">
        <h1 className="my-4 text-xl">Olá, bem vindo ao meu portifólio! </h1>
        <div className=" flex flex-col justify-between ">
          <h2 className="text-xl my-2">
            Meu nome é<br />
            <span className="font-bold text-5xl">{name}</span> <br /> sou
            desenvolvedor <strong>FULL STACK</strong>
          </h2>
          <p>
            Especialista em <strong>FRONT END</strong> <br /> Next.js,
            React.js e Angular.js
          </p>

          <p>
            Eu projeto e desenvolvo serviços para clientes de todos os tamanhos,
            <br />
            especializado na criação de sites elegantes e modernos, serviços da
            web.
          </p>
          <Button
            href="
          /CurriculoLucas.pdf">
            Donwload CV
          </Button>
        </div>
      </div>
      <motion.div
        animate={{ y: [-40, 0, 50, 0, -40], x: [-50, 30, 50, -50] }}
        transition={{ ease: "linear", duration: 3, repeat: Infinity }}
        className="  w-1/2  justify-center items-center hidden lg:flex">
        <Image
          className=" bg-[#dc2626] rounded-full h-[500px] object-contain border-4 border-white z-10"
          src={profilePic}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </motion.div>
    </section>
  );
}
