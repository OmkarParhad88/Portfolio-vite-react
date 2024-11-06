import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

const Card = ({ emoji, height, heading }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="card"
    >
      <img src={emoji} alt="" height={height} />
      <span>{heading}</span>
      {/* <button className="c-button">Show</button> */}
    </motion.div>
  );
};

export default Card;
