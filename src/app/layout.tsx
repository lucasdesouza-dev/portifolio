import Sidebar from "@/components/Sidebar";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portifólio Lucas Souza",
  description: "Portifólio  Pessoal Lucas Souza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <section className="w-screen h-screen ">
          <Sidebar />
        </section>
        {children}
      </body>
    </html>
  );
}
