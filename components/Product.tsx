import { ReactNode } from "react";
import Image from "./ui/Image/Image";
import ImageOverlay from "./ui/Image/ImageOverlay";
import { Badge } from "./ui/badge";
import ImageFooter from "./ui/Image/ImageFooter";

interface IProductProps {
  children?: ReactNode;
  price: number;
  imgSrc: string;
  offerPrice?: number;
  title: string;
}
function Product({
  imgSrc,
  price,
  children,
  offerPrice,
  title,
}: IProductProps) {
  return (
    <div className="flex flex-col border-accent border-[0.05em] rounded-[0.5em] p-1 pb-2 bg-secondary/4">
      <Image src={imgSrc} className="text-[1.4em] max-sm:text-[1em]">
        {/* <ImageFooter variant="like" /> */}
        <ImageOverlay />
        {/* <Badge className="absolute text-[0.5em] top-[1em] left-[1em] bg-secondary text-primary">
          Hello
        </Badge> */}
      </Image>
      <h2 className="mt-[0.6em] text-[1em] max-sm:text-[0.8em] max-sm:indent-2 font-medium line-clamp-1 text-secondary indent-3">
        {title}
      </h2>
      <span className="text-accent text-[0.7em] max-sm:text-[0.5em] max-sm:indent-2 mt-[0.4em] indent-3">
        ${price}
      </span>
    </div>
  );
}

export default Product;
