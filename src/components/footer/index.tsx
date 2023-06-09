import React from "react";
import user from "../../services/User.service";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1F2326] w-full min-h-[30vh] text-white">
      <p className="text-xl">
        Portifolio desenvolvido por{" "}
        <strong>
          <a href="https://www.linkedin.com/in/lucasdesouza-dev/">
            Lucas Souza
          </a>
        </strong>
      </p>

      <div>
        <p>Entre em contato por uma rede para mais informações </p>
      </div>

      <div className="flex gap-2 m-2">
        {user.userRedesSociais.map((item) => (
          <div
            style={{
              transitionDelay: `300ms`,
              transition: "1s",
              transform: " translate(1rem)",
            }}
            key={item.name}
            className={
              "hover:text-red-600 flex w-full  text-xl text-white justify-center"
            }
          >
            <a href={item.href} className="cursor-pointer">
              {React.createElement(item?.icon, { size: "20" })}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
