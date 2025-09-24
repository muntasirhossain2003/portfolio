import React from "react";

const AchievementsSection = ({ achievements }) => {
  return (
    <section id="achievements" className="newspaper-section">
      {/* Page number and section marker */}
      <div className="page-marker">
        <span className="page-number">C3</span>
        <span className="section-name">SPORTS & AWARDS | COMPETITION</span>
      </div>

      <h1 className="page-headline">Competition Results & Recognition</h1>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-article">
            <div className="achievement-badge">
              <div className="badge-year">{achievement.year}</div>
              <div className="badge-position">{achievement.position}</div>
            </div>

            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <div className="achievement-category">{achievement.category}</div>
              <div className="achievement-details">{achievement.details}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="achievement-summary">
        <h3>My Competition Experience</h3>
        <div className="article-text single-column">
          <p>
            Over the past year, I have participated in six major technology
            competitions across Bangladesh. I have achieved two championship
            titles, multiple finalist positions, and recognition in specialized
            categories such as environmental innovation and academic excellence.
          </p>

          <p>
            My most notable victory came at MIST INVENTIOUS 4.1, where my
            "Unisphere" campus management platform won against 44 competing
            teams. This experience taught me how to create comprehensive
            solutions that address real-world challenges while incorporating
            current technology trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
