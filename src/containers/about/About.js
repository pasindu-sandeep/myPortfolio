import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./About.scss";
import StyleContext from "../../contexts/StyleContext";
import {about} from "../../portfolio";

export default function About() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="about">
      <div className="about-main-div">
        <Fade left duration={1000}>
          <div className="about-image-div">
            <img
              src={about.profile}
              alt="Pasindu Sandeep"
              className="about-profile-image"
            />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="about-text-div">
            <h1 className={isDark ? "dark-mode about-title" : "about-title"}>
              About Me
            </h1>
            <div className={isDark ? "dark-mode about-text" : "about-text"}>
              {about.description.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
