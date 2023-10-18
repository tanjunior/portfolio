import React, { useEffect, useState } from "react";
import { Toggle } from "@/ui/toggle";

import { Icons } from "../icons";

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
      setDarkMode(true);
      document.documentElement.classList.add(theme);
    } else if (theme == "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = (e: boolean) => {
    if (!e) {
      setDarkMode(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (e) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <Toggle
      pressed={darkMode}
      onPressedChange={toggleDarkMode}
      variant={"outline"}
      className="border bg-accent"
    >
      {darkMode ? <Icons.moon /> : <Icons.sun />}
    </Toggle>
  );
}
