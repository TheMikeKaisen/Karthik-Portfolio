"use client";
import { ThemeContext, useTheme } from "@/context/theme-context";
import React, { useContext, useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";


const ThemeSwitch = () => {
  const {toggleTheme, theme} = useTheme()
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] flex items-center justify-center h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full  hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
