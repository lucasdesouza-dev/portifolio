import Image, { StaticImageData } from "next/image";
import { classNames } from "../../../services/Methods.service";

interface Props {
  src: string|StaticImageData
  w: number;
  h: number;
  mt?: number;
  ml?: number;
  bg?:string
  hc?:number
}
export default function CardAbout({ src, w, h, mt, ml ,bg,hc}: Props) {
  return (
    <div className={classNames(
      
      `rounded-xl  bg-[${bg}]  overflow-hidden  `
    )}>
          
      <Image
        width={w}
        height={h}
        src={src}
        alt=""
        className={classNames(
          mt ? `	mt-${mt}` : "",
          ml ? `ml-${ml}` : "",
          `rounded-xl  bg-[${bg}] h-full object-cover `
        )}
      />
    </div>
  );
}
