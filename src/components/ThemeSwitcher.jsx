import { useState } from "react";
import './ThemeSwitcher.css'

function ThemeSwitcher({ onThemeChange }) {
  const [isDark, setIsDark] = useState(true);
  const [themeColor, setThemeColor] = useState("#ffa500"); // default orange

  // Toggle dark/light background
  const toggleBackground = () => {
    setIsDark(!isDark);
    document.body.style.backgroundColor = !isDark ? "#fff" : "#121212";
    document.body.style.color = !isDark ? "#000" : "#fff";
  };

  // Change theme color
  const changeColor = (e) => {
    const color = e.target.value;
    setThemeColor(color);
    if (onThemeChange) onThemeChange(color);
  };

  return (
    <div className="theme-switcher">
      {/* Background toggle button */}
      <button className="switch-btn" onClick={toggleBackground}>
        {isDark ? "🌙" : "☀️"}
      </button>

      {/* Theme color picker */}
      <input
        type="color"
        value={themeColor}
        onChange={changeColor}
        className="color-picker"
      />
    </div>
  );
}

export default ThemeSwitcher;
