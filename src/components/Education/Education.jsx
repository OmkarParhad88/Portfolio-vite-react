import React from "react";
import "./Education.css";
import education from "../../img/education.png";
import { themeContext } from "../../context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Education = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   <div className="education" id="Education">
    <span style={{ color: darkMode ? "white" : "" }}>
     Education <img src={education} alt="" />
    </span>
    {/* <div
        className="blur e-blur1"
        style={{ backgroundColor: "rgb(63 172 195 / 87%" }}
      ></div> */}
    <div className="academic ">
     <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
       duration: 0.8,
       ease: [0, 0.71, 0.2, 1.01],
      }}
      className="pos edu1"
     >
      <span>Masters Of Computer Science</span>
      <span>DY Patil collage lehegaon ,PUNE </span>
      <span>CGPA : 8.0</span>
     </motion.div>

     <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
       duration: 0.8,
       ease: [0, 0.71, 0.2, 1.01],
      }}
      cla
      className="pos edu2"
     >
      <span>Bachelor Of Computer Science</span>
      <span>BJS collage Wagholi,PUNE </span>
      <span>CGPA : 7.5 </span>
     </motion.div>
     <div
      className="blur e-blur2"
      style={{ background: "rgb(213 143 255)" }}
     ></div>
    </div>
   </div>
  );
};

export default Education;
