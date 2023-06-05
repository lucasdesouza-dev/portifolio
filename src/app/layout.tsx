"use client";
import Sidebar from "@/components/Sidebar";
import "./globals.scss";
import { Inter } from "next/font/google";
import DarkMode from "@/components/darkMode";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle, setTogglePai] = useState<boolean>(false);

  function valorToggle(valor: boolean) {
    setTogglePai(!valor);
    console.log("pai", valor);
  }

  return (
    <html
      lang="en"
      className={classNames(toggle ? "dark" : "", "scroll-smooth")}
    >
      <body className={`${inter.className} w-screen h-screen flex`}>
        <DarkMode valorToggle={valorToggle} size={35} />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
