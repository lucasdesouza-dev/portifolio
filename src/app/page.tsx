import Skills from "@/components/Skills";
import About from "@/components/about";
import HomeUser from "@/components/homeUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portifólio Lucas Souza",
  description: "Portifólio  Pessoal Lucas Souza",
};

const user = {
  name: "Lucas Souza",
  email: "luca.s.ouza@hotmail.com",
  imageUrl:
    "https://avatars.githubusercontent.com/u/55006206?s=400&u=557df4d972199b2a55c50ed83fa760b7a9da15d4&v=4",
};
export default function Home() {
  return (
    <main className=" w-full h-full flex flex-col overflow-auto">
      <HomeUser name={user.name} email={user.email} imageUrl={user.imageUrl} />
      <About />
      <Skills />
    </main>
  );
}
