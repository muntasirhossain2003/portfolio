import React from "react";
import profile from "../assets/profile.png";

const FrontPageSection = ({ currentDate, skills }) => {
  return (
    <section id="front-page" className="newspaper-section">
      {/* Breaking News Banner */}
      <div className="breaking-news">
        ⚡ PORTFOLIO: Computer Science Student Documents Personal Projects
      </div>

      {/* Main Story with Photo */}
      <div className="main-story">
        <div className="story-image">
          <img src={profile} alt="Siyam Bhuiyan" className="portrait-photo" />
          <div className="photo-caption">
            <strong>Siyam Bhuiyan</strong>, Computer Science student at Islamic
            University of Technology, at his workspace in Boardbazar, Gazipur.
            <br />
            <em>Photo by Staff Photographer</em>
          </div>
        </div>

        <div className="story-content">
          {/* Byline and Dateline */}
          <div className="byline-section">
            <div className="byline">By Staff Reporter</div>
            <div className="dateline">GAZIPUR — {currentDate}</div>
          </div>

          <h1 className="main-headline">My Journey in Computer Science</h1>
          <h2 className="sub-headline">
            Personal Portfolio and Academic Progress Documentation
          </h2>

          <div className="article-text single-column">
            <p>
              My name is Siyam Bhuiyan, and I am currently studying Computer
              Science and Engineering at Islamic University of Technology. I
              live in Boardbazar, Gazipur, and I have been working on various
              software development projects during my university years.
            </p>

            <p>
              I started programming during my early university days when I
              became interested in solving problems through technology. Unlike
              the early computing era of floppy disks and dial-up connections of
              the 1990s, today's development environment provides instant access
              to vast resources and cloud-based solutions. I have developed
              several applications focusing on different areas including
              environmental issues, education systems, and AI integration.
            </p>

            <p>
              My technical skills include programming languages like JavaScript,
              Python, Java, and C++. I work with web technologies such as React,
              NextJS and Node.js, and I have experience with mobile development
              using React Native. While early developers relied on CD-ROM
              software packages and Windows 95 development tools, modern
              development leverages cloud platforms and continuous integration.
              <em>(Continued on Page B3)</em>
            </p>

            {/* Pull Quote */}
            <div className="pull-quote">
              <blockquote>
                "Technology has evolved from floppy disks to cloud computing,
                but the core principles of problem-solving through code remain
                timeless."
              </blockquote>
              <cite>— Siyam Bhuiyan, Computer Science Student</cite>
            </div>

            <p>
              During my studies, I have worked on various projects including
              environmental applications, educational platforms, and competitive
              programming solutions. Each project has taught me valuable lessons
              about software architecture, user experience design, and the
              importance of clean, maintainable code.
            </p>

            <p>
              I am currently 3rd year 2nd semester student in my undergraduate
              program at IUT, where I balance my coursework with personal
              projects. Already completed DSA, Database, Networkign, Machine
              learning, Web Developemt and Achitecture courses. I participate in
              programming competitions and technology events to improve my
              skills and learn from other developers.
            </p>

            {/* Jump line simulation */}
            <div className="jump-line">
              <em>Continued on Page A3, Column 2</em>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Overview */}
      <div className="skills-section">
        <h3 className="section-headline">My Technical Skills</h3>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, techs], index) => (
            <div key={index} className="skill-category">
              <h4 className="skill-category-title">{category}</h4>
              <div className="skill-tags">
                {techs.map((tech, i) => (
                  <span key={i} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Background */}
      <div className="bio-section">
        <h3 className="section-headline">My Academic Background</h3>
        <div className="article-text three-column">
          <p>
            I am pursuing my Bachelor's degree in Computer Science and
            Engineering at Islamic University of Technology. My coursework
            covers fundamental areas like algorithms, data structures, software
            engineering, and database systems.
          </p>

          <p>
            I have taken courses in artificial intelligence, machine learning,
            and web development. These subjects have helped me understand both
            theoretical concepts and practical implementation techniques that I
            apply in my personal projects.
          </p>

          <p>
            Apart from regular classes, I participate in coding competitions,
            attend tech events, and work on collaborative projects with fellow
            students. These activities help me stay updated with current
            technologies and improve my problem-solving abilities.
          </p>

          {/* Editor's Note */}
          <div className="editors-note">
            <strong>EDITOR'S NOTE:</strong> This portfolio represents work
            completed during 2024. For complete project documentation and
            technical specifications, visit the student's GitHub repository.
            Additional coverage of the MIST INVENTIOUS victory can be found in
            our Technology section, Page B4.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontPageSection;
