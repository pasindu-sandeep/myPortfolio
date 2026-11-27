import React, {useContext, useEffect, useRef, useState} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import Build from "../../assets/lottie/build";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const barsRef = useRef(null);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const node = barsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBars(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!skillsSection.display) {
    return null;
  }

  const skillBars = skillsSection.skillBars || [];

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-wrapper">
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
          {skillsSection.title}
        </h1>

        <div className="skills-main-div">
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/developerActivity.svg")}
                />
              )}
            </div>
          </Fade>

          <Fade right duration={1000}>
            <div className="skills-text-div">
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text-subtitle"
                    : "subTitle skills-text-subtitle"
                }
              >
                {skillsSection.subTitle}
              </p>

              <div ref={barsRef} className="skill-bars-container">
                {skillBars.map((skill, index) => (
                  <div className="skill-bar-item" key={skill.name}>
                    <div className="skill-bar-header">
                      <span
                        className={
                          isDark ? "skill-bar-name dark" : "skill-bar-name"
                        }
                      >
                        {skill.name}
                      </span>
                      <span className="skill-bar-percent">{skill.level}%</span>
                    </div>
                    <div
                      className={
                        isDark ? "skill-bar-track dark" : "skill-bar-track"
                      }
                    >
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: animateBars ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 90}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>

        <div className="skills-icons-bottom">
          <SoftwareSkill />
        </div>
      </div>
    </div>
  );
}
