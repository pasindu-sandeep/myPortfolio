import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

function ProjectImageCarousel({images, projectName}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  const currentImage = images[activeIndex];
  const imageSource =
    typeof currentImage === "string" ? currentImage : currentImage.src;
  const imageAlt =
    typeof currentImage === "string"
      ? `${projectName} screenshot ${activeIndex + 1}`
      : currentImage.alt || `${projectName} screenshot ${activeIndex + 1}`;

  return (
    <div
      className="project-image"
      role="group"
      aria-label={`${projectName} images`}
    >
      <div className="project-image-frame">
        <img src={imageSource} alt={imageAlt} className="card-image" />
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="project-image-control project-image-previous"
              aria-label={`Previous image for ${projectName}`}
              onClick={() =>
                setActiveIndex(index =>
                  (index - 1 + images.length) % images.length
                )
              }
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="project-image-control project-image-next"
              aria-label={`Next image for ${projectName}`}
              onClick={() =>
                setActiveIndex(index => (index + 1) % images.length)
              }
            >
              <span aria-hidden="true">›</span>
            </button>
            <div
              className="project-image-indicators"
              role="group"
              aria-label={`${projectName} image selection`}
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className={
                    index === activeIndex
                      ? "project-image-dot active"
                      : "project-image-dot"
                  }
                  aria-label={`Show image ${index + 1} of ${images.length}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              const projectImages =
                project.images && project.images.length
                  ? project.images
                  : project.image
                    ? [project.image]
                    : [];

              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  <ProjectImageCarousel
                    images={projectImages}
                    projectName={project.projectName}
                  />
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
