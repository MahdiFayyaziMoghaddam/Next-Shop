"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import { ReactNode } from "react";
import { Toaster } from "sonner";

function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster
        style={{
          width: "40rem",
          height: "auto",
          position: "fixed",
          bottom: "calc(100% - 8rem)",
          backgroundColor: "pink",
          right: "calc(50% - 20rem)",
          userSelect: "none",
        }}
      />
    </ThemeProvider>
  );
}

export default Provider;
