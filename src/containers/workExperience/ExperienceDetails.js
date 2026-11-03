import React, {useContext} from "react";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./ExperienceDetails.scss";

export default function ExperienceDetails({experienceIndex}) {
  const {isDark} = useContext(StyleContext);
  const experience = workExperiences.experience[experienceIndex];

  if (!experience) {
    return (
      <main className={isDark ? "experience-details dark-mode" : "experience-details"}>
        <button
          type="button"
          className="experience-details-back"
          onClick={() => {
            window.location.hash = "";
          }}
        >
          ← Back to experiences
        </button>
        <p>That experience could not be found.</p>
      </main>
    );
  }

  return (
    <main className={isDark ? "experience-details dark-mode" : "experience-details"}>
      <button
        type="button"
        className="experience-details-back"
        onClick={() => {
          window.location.hash = "";
        }}
      >
        ← Back to experiences
      </button>
      <article className="experience-details-card">
        <img
          className="experience-details-logo"
          src={experience.companylogo}
          alt={`${experience.company} logo`}
        />
        <p className="experience-details-date">{experience.date}</p>
        <h1>{experience.role}</h1>
        <h2>{experience.company}</h2>
        <p className="experience-details-description">{experience.desc}</p>
        {experience.descBullets && (
          <ul>
            {experience.descBullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </article>
    </main>
  );
}
