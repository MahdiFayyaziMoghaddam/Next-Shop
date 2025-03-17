import React from "react";
import Like from "../Like";

interface IImageFooterProps {
  variant: "simple" | "like";
}

function ImageFooter({ variant }: IImageFooterProps) {
  return (
    <div
      className={`flex justify-between items-center absolute -bottom-[1.6em] w-full bg-light-gray/60 h-[1.6em] ${
        variant === "like" ? "px-[1em]" : ""
      } gap-[0.9em] duration-400!`}
    >
      <button
        className={`${
          variant === "like" ? "text-left" : "text-center"
        } font-semibold text-[0.4em] grow cursor-pointer h-full`}
      >
        ADD TO CART
      </button>
      {variant === "like" ? <Like className="text-[0.75em]" /> : null}
    </div>
  );
}

export default ImageFooter;
