import React from "react";
import user from "../../services/User.service";
import RedesSociais from "../RedesSociais";
import Versao from "../Versao";

export default function Footer() {
  return (
    <div className="relative flex flex-col justify-center items-center dark:bg-[#10101a] w-full min-h-[30vh] ">
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

      <div className="w-36">
        <RedesSociais open={true} redesSociais={user.userRedesSociais} />
      </div>

      <Versao versao={0.1} />
    </div>
  );
}
