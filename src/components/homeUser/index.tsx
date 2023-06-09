"use client";
import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";

interface User {
  name: string;
  imageUrl: string;
  email: string;
}
export default function HomeUser({ name, imageUrl, email }: User) {
  return (
    <section
      id="home"
      className="relative w-full h-full min-h-screen flex overflow-hidden "
    >
      <div className="font-semibold w-1/2 p-14 flex flex-col justify-center">
        <h1 className="my-4 text-2xl">Olá, bem vindo ao meu portifólio! </h1>
        <div className="h-2/5 flex flex-col justify-between">
          <h2 className="text-xl my-2">
            Meu nome é<br />
            <span className="font-bold text-7xl">{name}</span> <br /> e sou um
            desenvolvedor <strong>FULL STACK</strong>
          </h2>
          <p>
            Especialista em <strong>FRONT END</strong> Next.js e React.js.
          </p>

          <p>
            Eu projeto e desenvolvo serviços para clientes de todos os tamanhos,
            <br />
            especializado na criação de sites elegantes e modernos, serviços da
            web e lojas online.
          </p>
          <Button
            href="
          /CurriculoLucas.pdf"
          >
            Donwload CV
          </Button>
        </div>
      </div>
      <div className="absolute top-[-10rem] right-[-12rem] w-[60rem] h-[60rem] rounded-full bg-[#1F2326] opacity-30"></div>
      <motion.div
        animate={{ x: [0, 50, 100, 0], repeatDur: 10 }}
        className="  w-1/2 flex justify-center items-center"
      >
        <Image
          className="rounded-full border-4 border-white z-10"
          src={imageUrl}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </motion.div>
    </section>
  );
}
