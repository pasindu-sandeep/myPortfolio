import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          const className = isDark
            ? "dark-mode certificate-tag"
            : "certificate-tag";

          return v.url ? (
            <a
              key={`${v.name}-${i}`}
              className={className}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${v.name}: ${cardInfo.title}`}
            >
              {v.name}
            </a>
          ) : (
            <span key={`${v.name}-${i}`} className={className}>
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
