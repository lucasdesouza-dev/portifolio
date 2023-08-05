"use client";
import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";
import profilePic from '/public/perfil.png'
interface User {
  name: string;
  imageUrl: string;
  email: string;
}
export default function HomeUser({ name, imageUrl, email }: User) {
  return (
    <section
      id="home"
      className="   w-full h-full min-h-screen flex flex-col  justify-evenly"
    >
      <div className=" font-semibold  p-2 flex flex-col  ">
        <h1 className="my-4 text-xl">Olá, bem vindo ao meu portifólio! </h1>
        <div className=" flex flex-col justify-between ">
          <h2 className="text-xl my-2">
            Meu nome é<br />
            <span className="font-bold text-5xl">{name}</span> <br /> sou
            desenvolvedor <strong>FULL STACK</strong>
          </h2>
          <p>
            Especialista em <strong>FRONT END</strong> <br/> Next.js e React.js.
          </p>

          <p>
            Eu projeto e desenvolvo serviços para clientes de todos os tamanhos,
            <br />
            especializado na criação de sites elegantes e modernos, serviços da
            web.
          </p>
          <Button
            href="
          /CurriculoLucas.pdf"
          >
            Donwload CV
          </Button>
        </div>
      </div>
      {/* <motion.div
        animate={{ y: [-50, 0, 50, 0, -50], x: [0,50, 120, 0] }}
        transition={{ ease: "linear", duration: 3, repeat: Infinity }}
        className="  w-1/2 flex justify-center items-center"
      >
        <Image
          className=" bg-[#dc2626] rounded-full h-[500px] object-contain border-4 border-white z-10"
          src={profilePic}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </motion.div> */}
    <div className="w-full flex items-center justify-center overflow-hidden">
      <Image
          className=" bg-[#dc2626] rounded-full h-[360px] object-contain border-4 border-white "
          src={profilePic}
          width={360}
          height={300}
          alt="Picture of the author"
        />
        </div>
        
    </section>
  );
}
