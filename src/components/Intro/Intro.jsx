import React from "react";
import FloatingDiv from "../FloatinDiv/FloatingDiv";
import "./Intro.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import vector1 from "../../img/vector11.png";
import vector2 from "../../img/vector22.png";
import boy from "../../img/boy3-min.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import { themeContext } from "../../context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
function Intro() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="intro" id="Intro">
    <div className="i-left">
     <div className="i-name">
      <span style={{ color: darkMode ? "white" : "" }}>Hy,I Am </span>
      <span>Omkar Parhad</span>
      <span>
       I like to do frontend development with high lavel of interest in web
       <br />
       development ,productions the quality work
      </span>
     </div>
     <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
      <button className="i-button button">Hire me</button>
     </Link>
     <div className="i-icons">
      <a
       href="https://github.com/OmkarParhad88"
       target="_blank"
       rel="noreferrer noopener"
      >
       <img src={github} alt="" />
      </a>
      <a
       href="https://www.linkedin.com/in/omkar-parhad-93537b22a"
       target="_blank"
       rel="noreferrer noopener"
      >
       <img src={linkedin} alt="" />
      </a>
      <a
       href="https://www.instagram.com/omkarparhad.insta/?igsh=dGFjeW53ODA5Nnpz"
       target="_blank"
       rel="noreferrer noopener"
      >
       <img src={instagram} alt="" />
      </a>
     </div>
    </div>
    <div className="i-right">
     <img src={vector1} alt="" />
     <img src={vector2} alt="" />
     <img src={boy} alt="" />
     <motion.img
      initial={{ left: "-36%" }}
      whileInView={{ left: "-23%" }}
      transition={transition}
      src={glassesimoji}
      alt=""
      className="floting-div"
     />
     <motion.div
      initial={{ right: "-12%" }}
      whileInView={{ right: "-4%" }}
      transition={transition}
      className="floting-div"
     >
      <FloatingDiv image={crown} text="Web" text2="Developer" />
     </motion.div>
     <motion.div
      initial={{ left: "-23%" }}
      whileInView={{ left: "-9%" }}
      transition={transition}
      style={{ top: "17rem" }}
     >
      <FloatingDiv image={thumbup} text="Best Design" text2="Award" />
     </motion.div>

     {/* blur divs */}

     <div className="blur"></div>
     <div
      className="blur"
      style={{
       background: "rgb(95 209 231)",
       top: "12rem",
       left: "-8rem",
       width: "17rem",
       height: "10rem",
      }}
     ></div>
    </div>
   </div>
  );
}

export default Intro;
