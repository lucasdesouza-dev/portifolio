import Projetos from "@/components/Projetos";
import Skills from "@/components/Skills";
import About from "@/components/about";
import Footer from "@/components/footer";
import HomeUser from "@/components/homeUser";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import user from "../services/User.service";
export const metadata: Metadata = {
  title: "Portifólio Lucas Souza",
  description: "Portifólio  Pessoal Lucas Souza",
};

export default function Home() {
  return (
    <main className=" dark:bg-[#10101a] dark:text-white scroll-smooth w-full h-full flex flex-col overflow-auto">
      <Suspense fallback={<Loading />}>
        <HomeUser
          name={user.name}
          email={user.email}
          imageUrl={user.imageUrl}
        />
        <About />
        <Skills />
        <Projetos />
        <Footer />
      </Suspense>
    </main>
  );
}
