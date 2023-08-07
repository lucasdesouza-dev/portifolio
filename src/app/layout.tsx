"use client";
import Sidebar from "@/components/Sidebar";
import "./globals.scss";
import { Inter } from "next/font/google";
import DarkMode from "@/components/darkMode";
import { useState } from "react";
import { classNames } from "../services/Methods.service";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle, setTogglePai] = useState<boolean>(false);

  function valorToggle(valor: boolean) {
    setTogglePai(!valor);
    
  }

  return (
    <html lang="en" className={classNames(toggle ? "dark" : "")}>
      <body className={`${inter.className}  w-screen h-screen flex `}>
        {/* <DarkMode valorToggle={valorToggle} size={32} /> */}
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
