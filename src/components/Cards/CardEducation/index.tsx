import { classNames } from "../../../services/Methods.service";

interface Props {
  titulo: string;
  descricao: string;
  href: string;
  periodo: {
    inicial: string;
    termino: string;
  };
}
export default function CardEducation({
  href,
  titulo,
  descricao,
  periodo,
}: Props) {
  return (
    <div className="w-full h-56">
      <a
        href={href}
        className="block max-w-xl h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#1F2326] dark:border-[#1F2326] dark:hover:bg-[#333a3f] "
      >
        {periodo && (
          <div className="text-center text-white mt-2 w-1/4 rounded-e-lg bg-[#dc2626]">
            <p>
              {periodo.inicial}-{periodo.termino}
            </p>
          </div>
        )}
        <div className="p-4">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {titulo}
          </h1>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {descricao}
          </p>
        </div>
      </a>
    </div>
  );
}
