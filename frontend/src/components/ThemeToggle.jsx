
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ReactSwitch from 'react-switch' 
const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
  
     <ReactSwitch onChange={toggle} checked={mode === "dark"}/>

  );
};

export default DarkModeToggle;
