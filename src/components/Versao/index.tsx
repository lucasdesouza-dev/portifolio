import React from "react";
interface Props {
  versao: number;
}
export default function Versao({ versao }: Props) {
  return (
    <div className="absolute right-2 bottom-2 text-sm" >
      <strong>V{versao}</strong>{" "}
    </div>
  );
}
