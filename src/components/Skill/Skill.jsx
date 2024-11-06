import React from "react";
import "./Skill.css";
import html from "../../img/html.png";
import css from "../../img/css.png";
import reactjs from "../../img/reactjs.png";
import js from "../../img/js.png";
import Card from "../Card/Card";
import resume from "../../doc/Omkar's Resume.pdf";
import python from "../../img/python.png";
import java from "../../img/java.png";
import bootstrap from "../../img/bootstrap.png";
import github from "../../img/github2.png";
import { themeContext } from "../../context";
import { useContext } from "react";

const Skill = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="skill" id="Skill">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skill's</span>
        <span>
          These skills equip you with a solid <br />
          foundation in web development, programming,
          <br /> and collaboration through platforms like GitHub.
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ backgroundColor: "rgb(63 172 195 / 87%" }}
        ></div>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{ left: "7rem", top: "-6rem" }}>
          <Card emoji={html} heading={"Html"} height={"50"} />
        </div>
        <div style={{ left: "19rem", top: "-4rem" }}>
          <Card emoji={css} heading={"Css"} height={"50"} />
        </div>
        <div style={{ left: "7rem", top: "1rem" }}>
          <Card emoji={js} heading={"Java Script"} height={"50"} />
        </div>
        <div style={{ left: "19rem", top: "3rem" }}>
          <Card emoji={reactjs} heading={"React JS"} height={"50"} />
        </div>
        <div style={{ left: "7rem", top: "8rem" }}>
          <Card emoji={python} heading={"Python"} height={"50"} />
        </div>
        <div style={{ left: "19rem", top: "10rem" }}>
          <Card emoji={java} heading={"Java"} height={"50"} />
        </div>
        <div style={{ left: "7rem", top: "15rem" }}>
          <Card emoji={bootstrap} heading={"Bootstrap"} height={"50"} />
        </div>
        <div style={{ left: "19rem", top: "17rem" }}>
          <Card emoji={github} heading={"Github"} height={"50"} />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "rgb(213 143 255)" }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
