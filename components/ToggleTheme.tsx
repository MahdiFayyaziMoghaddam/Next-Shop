"use client";
import { useTheme } from "@/context/ThemeContext";
import React, { useEffect } from "react";
import Link from "./ui/Link";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Button from "./ui/Button/Button";
import { TbMoon, TbSun, TbSunHigh } from "react-icons/tb";
import useToast from "@/hook/useToast";

function ToggleTheme() {
  const { toggleTheme, theme } = useTheme();
  const toast = useToast();
  return (
    <>
      <Link
        variant="icon"
        className="transition-none text-[1.3em] max-lg:text-[1.1em] max-md:text-[0.9em] max-sm:text-[0.7em] text-secondary"
        disabled
        onClick={() => {
          toggleTheme();
          toast("Successfully Changed Theme!", "info");
        }}
      >
        {theme === "dark" ? <TbSunHigh /> : <TbMoon />}
      </Link>
    </>
  );
}

export default ToggleTheme;
