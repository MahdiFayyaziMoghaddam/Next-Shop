"use client";

import * as R from "react";

type TTheme = "light" | "dark";

interface IThemeContext {
  theme: TTheme;
  setTheme: R.Dispatch<R.SetStateAction<TTheme>>;
  toggleTheme: () => void;
}

const ThemeContext = R.createContext<IThemeContext | {}>({});

export const ThemeProvider = ({ children }: { children: R.ReactNode }) => {
  const [theme, setTheme] = R.useState<TTheme>("light");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  R.useEffect(() => {
    const theme = localStorage.getItem("next-shop-theme") as TTheme | null;
    if (theme) {
      setTheme(theme);
    }
  }, []);

  R.useEffect(() => {
    const black = getComputedStyle(document.documentElement).getPropertyValue(
      "--black"
    );
    const white = getComputedStyle(document.documentElement).getPropertyValue(
      "--white"
    );

    document.documentElement.style.setProperty(
      "--primary",
      theme === "light" ? white : black
    );
    document.documentElement.style.setProperty(
      "--secondary",
      theme === "light" ? black : white
    );
    localStorage.setItem("next-shop-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return R.useContext(ThemeContext as R.Context<IThemeContext>);
};
