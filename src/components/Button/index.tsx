"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  return (
    <div className="">
      <Link href={href} >
        <button className="border  w-40 my-4  relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#dc2626] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-[#1F2326] transition-colors duration-300 ease-in-out group-hover:text-white">
            {children}
          </span>
        </button>
      </Link>
    </div>
  );
}
