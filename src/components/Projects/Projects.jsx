import React from "react";
import "./Projects.css";
import resume from "../../doc/Omkar Resume.pdf";
import testUtil from "../../img/text.png";
import news from "../../img/news-icon.ico";

const Projects = () => {
  return (
    <div className="projects">
      {/* left side */}
      <div className="awesome project">
        <span>My Awesome Projects</span>
        <span>
          Html, Css, JavaScript,
          <br />
          RectJS
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Exercitationem doloremque molestias quidem illo earum.
        </span>
        <a href={resume} style={{ width: "8em" }} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ backgroundColor: "rgb(63 172 195 / 87%" }}
        ></div>
      </div>

      <div className="p-right">
        <div className="p-mainCircle">
          <div className="p-secCircle">
            <img src={testUtil} alt="" />
          </div>
          <div className="p-secCircle">
            <img src={news} alt="" />
          </div>
          <div className="p-secCircle">
            <span>Projects</span>
          </div>
        </div>
        <div className="p-backCircle blueCircle"></div>
        <div className="p-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Projects;
