import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from "../../context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  // console.log(form);
  const [done, setDone] = useState(false);
  const empty = useRef();

  const emptyState = () => {
    setDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkj7fkw",
        "template_6q24nba",
        form.current,
        "EeZ52FGBJ76OjQUkj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          empty.current.value = "";
          setTimeout(emptyState, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact Me </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="user"
            ref={empty}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="user"
            ref={empty}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="user"
            ref={empty}
            required
          ></textarea>
          <input type="submit" value="Send" className="button" />

          <span>{done && "Thanks for contancting"}</span>
        </form>
        <div
          className="blur c-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
