import Image from "next/image";

interface User {
  name: string;
  imageUrl: string;
  email: string;
}
export default function HomeUser({ name, imageUrl, email }: User) {
  return (
    <div className="relative w-full h-full flex overflow-hidden">
      <div className="font-semibold w-1/2 p-10 flex flex-col justify-center">
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
          <a
            href="#_"
            className="w-40 my-4 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Donwload CV
            </span>
          </a>
        </div>
      </div>
      <div className="absolute top-[-10rem] right-[-12rem] w-[60rem] h-[60rem] rounded-full bg-black opacity-20"></div>
      <div className="  w-1/2 flex justify-center items-center">
        <Image
          className="rounded-full border-4 border-white z-10"
          src={imageUrl}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
