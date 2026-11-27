import React, {useContext} from "react";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./ExperienceDetails.scss";

export default function ExperienceDetails({experienceIndex}) {
  const {isDark} = useContext(StyleContext);
  const experience = workExperiences.experience[experienceIndex];

  const goBackToExperiences = () => {
    window.location.hash = "";
  };

  if (!experience) {
    return (
      <main
        className={
          isDark ? "experience-details dark-mode" : "experience-details"
        }
      >
        <button
          type="button"
          className="experience-details-back"
          onClick={goBackToExperiences}
          aria-label="Back to all experiences"
        >
          <span aria-hidden="true">←</span> Back to experiences
        </button>
        <div className="experience-details-empty" role="alert">
          <h1>Experience not found</h1>
          <p>This experience may no longer be available.</p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={isDark ? "experience-details dark-mode" : "experience-details"}
    >
      <button
        type="button"
        className="experience-details-back"
        onClick={goBackToExperiences}
        aria-label="Back to all experiences"
      >
        <span aria-hidden="true">←</span> Back to experiences
      </button>
      <article className="experience-details-card">
        <header className="experience-details-header">
          <img
            className="experience-details-logo"
            src={experience.companylogo}
            alt={`${experience.company} logo`}
          />
          <div className="experience-details-heading">
            <p className="experience-details-date">{experience.date}</p>
            <h1>{experience.role}</h1>
            <p className="experience-details-company">{experience.company}</p>
          </div>
        </header>

        {experience.responsibilities &&
          experience.responsibilities.length > 0 && (
            <section
              className="experience-description-bullets"
              aria-labelledby="responsibilities-heading"
            >
              <h2 id="responsibilities-heading">Responsibilities</h2>
              <ul>
                {experience.responsibilities.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </section>
          )}

        {experience.techstack && experience.techstack.length > 0 && (
          <section
            className="experience-details-skills"
            aria-labelledby="technologies-heading"
          >
            <h2 id="technologies-heading">Technologies</h2>
            <ul className="dev-icons experience-card-skills">
              {experience.techstack.map((skills, i) => (
                <li
                  key={`${skills.skillName}-${i}`}
                  className="software-skill-inline"
                  name={skills.skillName}
                  data-skill={skills.skillName}
                >
                  <i
                    className={skills.fontAwesomeClassname}
                    aria-hidden="true"
                  ></i>
                  <p>{skills.skillName}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}
