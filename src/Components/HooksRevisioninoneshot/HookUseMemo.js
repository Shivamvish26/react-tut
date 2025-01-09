import React, { useMemo, useState } from "react";

export default function HookUseMemo() {
  const [isDarkMode, setIsDarkMode] = useState();

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: isDarkMode ? "black" : "white",
      color: isDarkMode ? "white" : "black",
      padding: "20px",
      textAlign: "center",
      transition: "all 0.3s ease",
    };
  }, [isDarkMode]);

  return (
    <div style={themeStyle}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setIsDarkMode((prevMode) => !prevMode)}>
        Toggle Mode
      </button>
    </div>
  );
}
