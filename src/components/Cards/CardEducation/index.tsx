import { classNames } from "../../../services/Methods.service";

interface Props {
  titulo: string;
  descricao: string;
  periodo: {
    inicial: string;
    termino: string;
  };
}
export default function CardEducation({ titulo, descricao, periodo }: Props) {
  return (
    <div className="w-full ">
      <a
        href="#"
        className="block max-w-xl  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="text-center text-white mt-2 w-1/4 rounded-e-lg bg-red-600">
          <p>
            {periodo.inicial}-{periodo.termino}
          </p>
        </div>
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
