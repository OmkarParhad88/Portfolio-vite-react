import React from 'react'
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
          <div className="n-name">Omkar</div>
        </Link>

        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            <Link spy={true} to="Skill" smooth={true} activeClass="activeClass">
              <li>Skill</li>
            </Link>

            <Link
              spy={true}
              to="Education"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Education</li>
            </Link>

            <Link
              spy={true}
              to="Project"
              smooth={true}
              activeClass="activeClass"
            >
              {" "}
              <li>Projects</li>
            </Link>
            <Link spy={true} to="about" smooth={true} activeClass="activeClass">
              {" "}
              <li>About</li>
            </Link>
          </ul>
        </div>

        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button n-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar
