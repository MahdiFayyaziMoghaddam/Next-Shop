import React from "react";
import Image from "./ui/Image/Image";
import Link from "./ui/Link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import ToggleTheme from "./ToggleTheme";

function Header() {
  return (
    <div className="flex justify-between items-center w-full border-b border-dark-gray pb-[0.4em] pt-[0.8em] max-md:pt-[0.6em] max-md:pb-[0.3em] max-sm:pt-[0.4em] max-sm:pb-[0.2em]">
      <Link variant="text" href="/">
        <Image
          src="./image/logo.png"
          className="w-[9em]! max-md:w-[7em]! max-sm:w-[5em]! rounded-none"
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-[1.8em] max-xl:gap-[1.2em] max-lg:gap-[0.9em] max-md:gap-[0.7em] max-sm:gap-[0.5em]">
        <div className="flex gap-[1.8em] max-lg:gap-[1.6em] max-md:gap-[1.1em] max-sm:gap-[0.8em]">
          <Link
            variant="text"
            className="text-[0.9em] max-md:text-[0.7em] max-sm:text-[0.45em]"
          >
            Shop
          </Link>
          <Link
            variant="text"
            className="text-[0.9em] max-md:text-[0.7em] max-sm:text-[0.45em]"
          >
            Blog
          </Link>
          <Link
            variant="text"
            className="text-[0.9em] max-md:text-[0.7em] max-sm:text-[0.45em]"
          >
            Our Story
          </Link>
        </div>
        <hr className="border-none h-[1em] w-[2px] max-md:w-[1px] max-md:h-[0.9em] max-sm:h-[0.7em] max-sm:w-[0.5px] bg-normal-gray" />
        <div className="flex items-center gap-[0.8em] max-xl:gap-[0.6em] max-lg:gap-[0.4em] max-md:gap-[0.2em] max-sm:gap-[0.1em]">
          <ToggleTheme />
          <Link
            variant="icon"
            className="text-[1.3em] max-lg:text-[1.1em] max-md:text-[0.9em] max-sm:text-[0.7em]"
          >
            <IoIosSearch />
          </Link>
          <Link
            variant="icon"
            className="text-[1.3em] max-lg:text-[1.1em] max-md:text-[0.9em] max-sm:text-[0.7em]"
          >
            <AiOutlineShoppingCart />
          </Link>
          <Link
            variant="icon"
            className="text-[1.3em] max-lg:text-[1.1em] max-md:text-[0.9em] max-sm:text-[0.7em]"
          >
            <HiOutlineUser />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
