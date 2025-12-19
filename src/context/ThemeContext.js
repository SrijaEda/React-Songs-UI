import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div
        style={{
          background: dark ? "#121212" : "#ffffff",
          color: dark ? "#ffffff" : "#000000",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
