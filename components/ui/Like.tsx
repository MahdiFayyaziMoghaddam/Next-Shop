"use client";
import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface ILike {
  className?: string;
  onClick?: (favored?: boolean) => void;
  favored?: boolean;
  locked?: boolean;
}

const Like = ({
  className = "",
  onClick = () => null,
  favored = false,
  locked = false,
}: ILike) => {
  const [isHeartFilled, setIsHeartFilled] = useState(favored);

  return (
    <div
      className={`
        flex-center
        size-auto
        ${!locked ? "cursor-pointer" : "cursor-not-allowed"}
        ${className}
      `}
      onClick={() => {
        if (!locked) {
          setIsHeartFilled((prev) => !prev);
          onClick(!isHeartFilled);
        }
      }}
    >
      <div
        className={`
          absolute
          ${isHeartFilled ? "scale-120 opacity-100" : "opacity-0 scale-100"}
          text-error
        `}
      >
        <IoMdHeart />
      </div>
      <div
        className={`
          ${isHeartFilled ? "opacity-0 scale-120" : "scale-100 opacity-100"}
          text-dark-300
        `}
      >
        <IoMdHeartEmpty />
      </div>
    </div>
  );
};

export default Like;
