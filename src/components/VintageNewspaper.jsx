import React, { useState, useEffect } from "react";

const VintageNewspaper = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Waste Zero Bangladesh",
      subtitle: "Environmental Sustainability Platform",
      description:
        "A comprehensive waste management application combining artificial intelligence with gamification to create an unprecedented recycling ecosystem. Features advanced mapping technology for locating recycling centers and competitive leaderboard system for community engagement.",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
      tech: [
        "React",
        "AI Integration",
        "Maps API",
        "Authentication",
        "Admin Dashboard",
      ],
      status: "Live Platform",
    },
    {
      title: "Protilipi AI Platform",
      subtitle: "Bangla Language Technology",
      description:
        "Revolutionary web application featuring real-time Bangla translation capabilities and advanced speech-to-text chatbot system. The platform's rich editor supports collaborative writing in Bengali for multiple simultaneous users.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      tech: [
        "React",
        "AI/ML",
        "Speech Recognition",
        "Real-time Collaboration",
        "Rich Text Editor",
      ],
      status: "Production Ready",
    },
    {
      title: "EduSIS University Management",
      subtitle: "Academic Administration System",
      description:
        "Comprehensive university management application built with React Native. Seamlessly integrates enrollment processes, video conferencing through Jitsi Meet, and intelligent chatbot for handling academic inquiries.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      tech: [
        "React Native",
        "Jitsi Meet Integration",
        "AI Chatbot",
        "Enrollment System",
      ],
      status: "Deployed",
    },
    {
      title: "LockIN Productivity App",
      subtitle: "Developer Efficiency Platform",
      description:
        "Project tracking application utilizing Google's Gemini AI API for intelligent roadmap generation and coding snippet recommendations. Features AsyncStorage implementation for cross-session data persistence.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: [
        "React Native",
        "Gemini AI API",
        "AsyncStorage",
        "AI Roadmaps",
        "Code Snippets",
      ],
      status: "Active Development",
    },
    {
      title: "JobSpring Career Platform",
      subtitle: "Career Guidance & Recruitment",
      description:
        "Full-stack career guidance and recruitment platform built with Spring Boot and React. Offers personalized career path recommendations, extensive job listings, and revolutionary AI-based CV analysis.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      tech: [
        "Spring Boot",
        "React",
        "AI CV Analysis",
        "Job Matching",
        "Interview Prep",
      ],
      status: "Enterprise Solution",
    },
    {
      title: "Unisphere Campus Platform",
      subtitle: "Award-Winning Campus Management",
      description:
        "Comprehensive campus management platform featuring JWT/OAuth authentication, real-time chat capabilities, 2D map navigation, and intelligent bus tracking system. First place winner at MIST INVENTIOUS 4.1.",
      image:
        "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=400&h=300&fit=crop",
      tech: [
        "React",
        "JWT/OAuth",
        "Real-time Chat",
        "2D Maps",
        "GPS Tracking",
        "Chatbot",
      ],
      status: "Award Winner",
    },
  ];

  const achievements = [
    {
      title: "MIST INVENTIOUS 4.1",
      position: "Champion",
      details: "1st place among 44 competing teams",
      year: "2024",
      category: "Technology Innovation",
    },
    {
      title: "Project Showcase Competition",
      position: "Champion",
      details: "1st place among 75 teams",
      year: "2024",
      category: "Academic Excellence",
    },
    {
      title: "Bangladesh Waste Management Challenge",
      position: "4th Runner Up",
      details: "Environmental technology category",
      year: "2024",
      category: "Environmental Innovation",
    },
    {
      title: "IUT ICT Fest Hackathon",
      position: "Finalist",
      details: "Top 10 finalist position",
      year: "2024",
      category: "Software Development",
    },
    {
      title: "KUET BitFest Hackathon",
      position: "Finalist",
      details: "Advanced to final round",
      year: "2024",
      category: "Programming Competition",
    },
    {
      title: "KUET Project Showcase",
      position: "Top 5",
      details: "Selected among top 5 projects",
      year: "2024",
      category: "Innovation Showcase",
    },
  ];

  const skills = {
    "Programming Languages": [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "TypeScript",
    ],
    "Frontend Development": [
      "React",
      "React Native",
      "HTML5",
      "CSS3",
      "Material-UI",
    ],
    "Backend Development": [
      "Node.js",
      "Spring Boot",
      "Express.js",
      "REST APIs",
    ],
    "Database Technologies": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    "AI & Machine Learning": [
      "TensorFlow",
      "OpenAI API",
      "Gemini AI",
      "Natural Language Processing",
    ],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Google Cloud", "Jitsi Meet"],
  };

  // Page Content Components
  const FrontPage = () => (
    <main className="newspaper-content">
      <div className="front-page">
        {/* Personal Photo and Main Article */}
        <div className="main-story">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
              alt="Siyam Bhuiyan"
              className="portrait-photo"
            />
            <div className="photo-caption">
              Siyam Bhuiyan, Computer Science Student at Islamic University of
              Technology
            </div>
          </div>

          <div className="story-content">
            <h1 className="main-headline">
              Local Developer Shapes Bangladesh's Tech Future
            </h1>
            <h2 className="sub-headline">
              Computer Science Student from Gazipur Focuses on Innovation and
              Problem-Solving
            </h2>

            <div className="article-text">
              <p>
                BOARDBAZAR, GAZIPUR — Siyam Bhuiyan, a Computer Science student
                at Islamic University of Technology, has been actively
                contributing to Bangladesh's technology landscape through
                innovative software solutions and academic excellence.
              </p>

              <p>
                The 22-year-old developer from Boardbazar, Gazipur, currently
                pursues his studies in Computer Science and Engineering while
                developing applications that address real-world challenges
                across various sectors including environmental sustainability,
                education technology, and artificial intelligence.
              </p>

              <p>
                Bhuiyan specializes in full-stack development with expertise
                spanning multiple programming languages and frameworks. His
                technical toolkit includes JavaScript, Python, Java, and modern
                web technologies such as React and Node.js.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="section-headline">Technical Expertise Overview</h3>
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

        {/* Brief Bio */}
        <div className="bio-section">
          <h3 className="section-headline">Academic Background & Focus</h3>
          <div className="bio-content">
            <p>
              Currently enrolled in the Computer Science and Engineering program
              at Islamic University of Technology, Bhuiyan maintains focus on
              emerging technologies including artificial intelligence, machine
              learning, and full-stack web development.
            </p>

            <p>
              His academic journey combines theoretical computer science
              foundations with practical application development, resulting in
              projects that demonstrate both technical proficiency and
              real-world problem-solving capabilities.
            </p>

            <p>
              Beyond individual development work, Bhuiyan actively participates
              in technology competitions and collaborative projects,
              contributing to the broader tech community in Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </main>
  );

  const ProjectsPage = () => (
    <main className="newspaper-content">
      <div className="projects-page">
        <h1 className="page-headline">Technology Portfolio</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-article">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-status">{project.status}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>

                <div className="project-description">{project.description}</div>

                <div className="project-tech">
                  <strong>Technologies:</strong>
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );

  const AchievementsPage = () => (
    <main className="newspaper-content">
      <div className="achievements-page">
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
                <div className="achievement-category">
                  {achievement.category}
                </div>
                <div className="achievement-details">{achievement.details}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievement-summary">
          <h3>Competition Summary</h3>
          <p>Total competitions participated: 6 major events</p>
          <p>Championship titles: 2 first place victories</p>
          <p>Overall performance: Consistent finalist and top-5 placements</p>
        </div>
      </div>
    </main>
  );

  const ContactPage = () => (
    <main className="newspaper-content">
      <div className="contact-page">
        <h1 className="page-headline">Professional Contact Information</h1>

        <div className="contact-grid">
          <div className="contact-section">
            <h3>Primary Contact</h3>
            <div className="contact-item">
              <strong>Email:</strong> siyambhuiyan@iut-dhaka.edu
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> +880 1752982995
            </div>
            <div className="contact-item">
              <strong>Location:</strong> Boardbazar, Gazipur, Bangladesh
            </div>
          </div>

          <div className="contact-section">
            <h3>Academic Information</h3>
            <div className="contact-item">
              <strong>Institution:</strong> Islamic University of Technology
            </div>
            <div className="contact-item">
              <strong>Department:</strong> Computer Science and Engineering
            </div>
            <div className="contact-item">
              <strong>Status:</strong> Undergraduate Student
            </div>
          </div>

          <div className="contact-section">
            <h3>Professional Links</h3>
            <div className="contact-item">
              <strong>GitHub:</strong> Available upon request
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong> Professional networking platform
            </div>
            <div className="contact-item">
              <strong>Portfolio:</strong> This newspaper format portfolio
            </div>
          </div>

          <div className="contact-section">
            <h3>Areas of Interest</h3>
            <div className="contact-item">Full Stack Web Development</div>
            <div className="contact-item">Mobile Application Development</div>
            <div className="contact-item">
              Artificial Intelligence Integration
            </div>
            <div className="contact-item">
              Environmental Technology Solutions
            </div>
          </div>
        </div>

        <div className="availability-notice">
          <h3>Availability</h3>
          <p>
            Open to collaboration opportunities, internship positions, and
            technology discussions. Best reached via email for project inquiries
            or academic collaboration.
          </p>
        </div>
      </div>
    </main>
  );

  return (
    <div className="newspaper">
      {/* Header */}
      <header className="newspaper-header">
        <h1 className="newspaper-title">THE DEVELOPER CHRONICLE</h1>
        <div className="newspaper-subtitle">
          Bangladesh Technology Times • Special Portfolio Edition • Est. 1985
        </div>
        <div className="header-info">
          <span>📍 Boardbazar, Gazipur</span>
          <span>{currentDate}</span>
          <span>🕐 {currentTime}</span>
          <span>📧 siyambhuiyan@iut-dhaka.edu</span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-links">
          <button
            className={currentPage === 1 ? "nav-active" : ""}
            onClick={() => setCurrentPage(1)}
          >
            FRONT PAGE
          </button>
          <button
            className={currentPage === 2 ? "nav-active" : ""}
            onClick={() => setCurrentPage(2)}
          >
            TECH PORTFOLIO
          </button>
          <button
            className={currentPage === 3 ? "nav-active" : ""}
            onClick={() => setCurrentPage(3)}
          >
            ACHIEVEMENTS
          </button>
          <button
            className={currentPage === 4 ? "nav-active" : ""}
            onClick={() => setCurrentPage(4)}
          >
            CONTACT
          </button>
        </div>
        <div className="page-indicator">Page {currentPage} of 4</div>
      </nav>

      {/* Page Content */}
      {currentPage === 1 && <FrontPage />}
      {currentPage === 2 && <ProjectsPage />}
      {currentPage === 3 && <AchievementsPage />}
      {currentPage === 4 && <ContactPage />}

      {/* Footer */}
      <footer className="newspaper-footer">
        <div>
          © 2024 The Developer Chronicle • Professional Portfolio Edition
        </div>
        <div className="footer-motto">
          "Innovation Through Code, Progress Through Technology"
        </div>
      </footer>
    </div>
  );
};

export default VintageNewspaper;
