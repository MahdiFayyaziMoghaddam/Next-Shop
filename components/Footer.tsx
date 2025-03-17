import React from "react";
import Input from "./ui/Input";
import { MdArrowRightAlt } from "react-icons/md";
import Link from "./ui/Link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Button from "./ui/Button/Button";

function Footer() {
  return (
    <div className="relative bottom-0 flex flex-col gap-[2.5em] w-full border-t border-dark-gray text-center mt-7 pt-[2em] pb-[1em] max-lg:pt-[1.5em] max-lg:pb-[0.8em] max-lg:gap-[2.2em] max-md:gap-[1.6em] max-md:pt-[1.2em] max-md:pb-[0.6em] max-sm:gap-[1.2em]">
      <div className="flex justify-between w-full">
        <div className="flex gap-[3em] max-lg:gap-[2em] max-md:gap-[1em] max-sm:gap-[0.95em] max-xs:gap-[0.6em]">
          <Link
            variant="text"
            className="decoration-solid! shrink-0 text-[0.85em] max-lg:text-[0.7em] max-md:text-[0.6em] max-sm:text-[0.38em] max-xs:w-[7.5em] max-xs:text-[0.28em]"
          >
            CONTACT
          </Link>
          <Link
            variant="text"
            className="decoration-solid! shrink-0 text-[0.85em] max-lg:text-[0.7em] max-md:text-[0.6em] max-sm:text-[0.38em] max-xs:w-[7.5em] max-xs:text-[0.28em]"
          >
            TERMS OF SERVICES
          </Link>
          <Link
            variant="text"
            className="decoration-solid! shrink-0 text-[0.85em] max-lg:text-[0.7em] max-md:text-[0.6em] max-sm:text-[0.38em] max-xs:w-[7.5em] max-xs:text-[0.28em]"
          >
            SHIPPING AND RETURNS
          </Link>
        </div>
        <Input
          placeholder="Give an email, get the newsletter."
          className="text-[0.8em] w-[28em]! max-lg:text-[0.6em] max-lg:w-[25em]! max-md:text-[0.55em] max-md:w-[23em]! max-sm:w-[20em]! max-sm:text-[0.45em]"
        >
          <Button
            variant="none"
            className="absolute right-0 text-dark-gray top-[0.1em] text-[1.2em] max-lg:top-[0.09em] max-lg:text-[0.9em] max-md:top-[0.09em] max-md:text-[0.8em]"
          >
            <MdArrowRightAlt />
          </Button>
        </Input>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-dark-gray text-[0.8em] max-lg:text-[0.6em] max-sm:text-[0.47em]">
          <span className="text-accent font-semibold">© 2025 Next Shop. </span>
          Terms of use and privacy policy.
        </p>
        <div className="flex gap-[1em] max-lg:gap-[0.8em] max-md:gap-[0.6em] max-sm:gap-[0.3em]">
          <Link variant="icon" href="#">
            <FaLinkedinIn className="text-[1em] max-lg:text-[0.8em] max-sm:text-[0.65em]" />
          </Link>
          <Link variant="icon" href="#">
            <FaFacebookF className="text-[1em] max-lg:text-[0.8em] max-sm:text-[0.65em]" />
          </Link>
          <Link variant="icon" href="#">
            <FaInstagram className="text-[1em] max-lg:text-[0.8em] max-sm:text-[0.65em]" />
          </Link>
          <Link variant="icon" href="#">
            <FaTwitter className="text-[1em] max-lg:text-[0.8em] max-sm:text-[0.65em]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
