import React from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Toogle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <motion.div
        layout
        transition={spring}
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></motion.div>
    </div>
  );
};

export default Toogle;
