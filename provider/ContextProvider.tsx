"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import { ReactNode } from "react";

function ContextProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default ContextProvider;
