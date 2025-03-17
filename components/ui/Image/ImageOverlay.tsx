import React from "react";
import Like from "../Like";
import Link from "../Link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

function ImageOverlay() {
  return (
    <div className="absolute w-full h-full flex-center gap-[0.7em] bg-light-gray/60 opacity-0 duration-400!">
      <Link href="/" variant="icon" className="text-[0.9em]">
        <AiOutlineShoppingCart />
      </Link>
      <Link href="/" variant="icon" className="text-[0.9em]">
        <IoEyeOutline />
      </Link>
      <Link href="/" variant="icon" className="text-[0.9em]" disabled>
        <Like />
      </Link>
    </div>
  );
}

export default ImageOverlay;
