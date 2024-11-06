// import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import textutil from "../../img/textutil.png";
import newsapp from "../../img/newsapp.png";
import { themeContext } from "../../context";
import { useContext } from "react";
const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="project" id="Project">
    <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
    <Swiper
     spaceBetween={30}
     slidesPerView={2}
     grabCursor={true}
     className="project-slider"
    >
     <SwiperSlide>
      <a href="https://omkarparhad88.github.io/omkar-app/" target="_blank">
       <img src={textutil} alt="" />
      </a>
     </SwiperSlide>
     <SwiperSlide>
      <a href="https://omkarparhad88.github.io/newsapp/" target="_blank">
       <img src={newsapp} alt="" />
      </a>
     </SwiperSlide>
     
    </Swiper>
   </div>
  );
};

export default Project;
