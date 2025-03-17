"use client";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import Link from "./ui/Link";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Button from "./ui/Button/Button";
import { TbMoon, TbSun, TbSunHigh } from "react-icons/tb";

function ToggleTheme() {
  const { toggleTheme, theme } = useTheme();

  return (
    <>
      <Button
        variant="none"
        className="transition-none text-[1.3em] max-lg:text-[1.1em] max-md:text-[0.9em] max-sm:text-[0.7em] text-secondary"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <TbSunHigh /> : <TbMoon />}
      </Button>
    </>
  );
}

export default ToggleTheme;
