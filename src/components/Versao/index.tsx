import React from "react";
interface Props {
  versao: number;
}
export default function Versao({ versao }: Props) {
  return (
    <div className="absolute right-6 bottom-1 text-sm">
      <strong>V{versao}</strong>{" "}
    </div>
  );
}
