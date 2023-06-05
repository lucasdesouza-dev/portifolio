import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface Props {
  src: string;
  w: number;
  h: number;
  mt?: number;
  ml?: number;
}
export default function CardAbout({ src, w, h, mt, ml }: Props) {
  return (
    <div className=" ">
      <Image
        width={w}
        height={h}
        src={src}
        alt=""
        className={classNames(
          mt ? `	mt-${mt}` : "",
          ml ? `ml-${ml}` : "",
          "rounded-xl"
        )}
      />
    </div>
  );
}
