"use client";
import { useTheme } from "@/context/ThemeContext";
import L from "next/link";
import React from "react";

interface ILinkProps {
  children?: React.ReactNode;
  variant: "icon" | "text";
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Link({
  children,
  variant,
  href = "/",
  className,
  disabled,
  onClick,
}: ILinkProps) {
  const { theme } = useTheme();
  return (
    <L
      href={href}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        }
        if (onClick) {
          onClick();
        }
      }}
      className={`flex-center text-dark-gray duration-400! ${
        variant === "text"
          ? " hover:text-secondary active:text-secondary/30"
          : `rounded-full p-[0.3em] ${
              theme === "dark"
                ? "hover:text-secondary active:text-secondary/30 hover:bg-primary/30"
                : "hover:text-secondary active:text-secondary/30 hover:bg-secondary/15 "
            }`
      } ${className}`}
    >
      {children}
    </L>
  );
}

export default Link;
