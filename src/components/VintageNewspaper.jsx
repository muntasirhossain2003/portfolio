import React, { useState, useEffect } from "react";

const VintageNewspaper = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

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

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  return (
    <div className="newspaper">
      {/* Authentic Newspaper Header */}
      <header className="newspaper-header">
        <h1 className="newspaper-title">THE BANGLADESH HERALD</h1>
        <div className="newspaper-subtitle">
          Technology Chronicle • Portfolio Special Edition • Established 1952
        </div>
        <div className="header-info">
          <span>📍 Boardbazar, Gazipur District</span>
          <span>{currentDate}</span>
          <span>🕐 {currentTime}</span>
          <span>📰 Morning Edition</span>
          <span>📧 siyambhuiyan@iut-dhaka.edu</span>
          <span>💰 Price: 5 Taka</span>
        </div>
      </header>

      {/* Navigation Bar - Newspaper Sections */}
      <nav className="nav-bar">
        <div className="nav-links">
          <button onClick={() => scrollToSection("front-page")}>
            FRONT PAGE
          </button>
          <button onClick={() => scrollToSection("portfolio")}>
            TECHNOLOGY
          </button>
          <button onClick={() => scrollToSection("achievements")}>
            SPORTS & AWARDS
          </button>
          <button onClick={() => scrollToSection("contact")}>
            CLASSIFIEDS
          </button>
        </div>
      </nav>

      {/* Main Newspaper Content - Single Scrolling Layout */}
      <main className="newspaper-content">
        {/* FRONT PAGE SECTION */}
        <section id="front-page" className="newspaper-section">
          {/* Breaking News Banner */}
          <div className="breaking-news">
            ⚡ BREAKING: Local Computer Science Student Develops Revolutionary
            Applications
          </div>

          {/* Main Story with Photo */}
          <div className="main-story">
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Siyam Bhuiyan"
                className="portrait-photo"
              />
              <div className="photo-caption">
                <strong>Siyam Bhuiyan</strong>, 22, Computer Science student at
                Islamic University of Technology, photographed at his workspace
                in Boardbazar, Gazipur. (Photo by Staff Photographer)
              </div>
            </div>

            <div className="story-content">
              <h1 className="main-headline">
                Young Developer Transforms Bangladesh's Digital Landscape
              </h1>
              <h2 className="sub-headline">
                IUT Student Creates Six Major Applications, Wins National
                Championships in Technology Innovation
              </h2>

              <div className="article-text single-column">
                <p>
                  BOARDBAZAR, GAZIPUR — In the quiet streets of Boardbazar, a
                  22-year-old Computer Science student has been quietly
                  revolutionizing Bangladesh's technology sector. Siyam Bhuiyan,
                  currently pursuing his degree at the prestigious Islamic
                  University of Technology, has developed six groundbreaking
                  applications that address critical challenges across
                  environmental sustainability, education, and artificial
                  intelligence.
                </p>

                <p>
                  Born and raised in Gazipur, Bhuiyan's journey into technology
                  began during his early university years. "I saw problems
                  around me and realized technology could provide solutions," he
                  explained during an interview at his modest workspace. His
                  approach combines cutting-edge programming techniques with
                  practical problem-solving, resulting in applications that have
                  garnered national attention.
                </p>

                <p>
                  The young developer's expertise spans multiple programming
                  languages including JavaScript, Python, Java, and C++. He
                  specializes in full-stack development, utilizing modern
                  frameworks like React and Node.js to create sophisticated web
                  applications. His recent work with artificial intelligence
                  integration has positioned him as one of Bangladesh's emerging
                  tech talents.
                </p>

                <p>
                  Currently enrolled in the Computer Science and Engineering
                  program at Islamic University of Technology, Bhuiyan maintains
                  an impressive balance between academic excellence and
                  practical application development. His professors describe him
                  as a student who consistently bridges theoretical knowledge
                  with real-world implementation.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div className="skills-section">
            <h3 className="section-headline">Technical Expertise Profile</h3>
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
            <h3 className="section-headline">Educational Background</h3>
            <div className="article-text">
              <p>
                Bhuiyan's academic journey at Islamic University of Technology
                reflects a commitment to both theoretical understanding and
                practical application. The Computer Science and Engineering
                program has provided him with a strong foundation in algorithms,
                data structures, and software engineering principles.
              </p>

              <p>
                His coursework encompasses diverse areas including artificial
                intelligence, machine learning, database systems, and software
                engineering methodologies. This comprehensive academic
                background enables him to approach complex problems with both
                technical rigor and innovative thinking.
              </p>

              <p>
                Beyond classroom learning, Bhuiyan actively participates in
                technology competitions, collaborative projects, and open-source
                development. This involvement has helped him develop not only
                technical skills but also project management and team
                collaboration capabilities essential in modern software
                development.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY PORTFOLIO SECTION */}
        <section id="portfolio" className="newspaper-section">
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

                  <div className="project-description">
                    {project.description}
                  </div>

                  <div className="project-tech">
                    <strong>Technology Stack:</strong>
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
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="newspaper-section">
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
                  <div className="achievement-details">
                    {achievement.details}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="achievement-summary">
            <h3>Championship Summary</h3>
            <div className="article-text single-column">
              <p>
                Over the past year, Bhuiyan has participated in six major
                technology competitions across Bangladesh, achieving remarkable
                consistency in performance. His track record includes two
                championship titles, multiple finalist positions, and
                recognition in specialized categories such as environmental
                innovation and academic excellence.
              </p>

              <p>
                The most notable victory came at MIST INVENTIOUS 4.1, where his
                "Unisphere" campus management platform defeated 44 competing
                teams. This achievement highlighted his ability to create
                comprehensive solutions that address real-world challenges while
                incorporating cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT/CLASSIFIEDS SECTION */}
        <section id="contact" className="newspaper-section">
          <h1 className="page-headline">Professional Directory</h1>

          <div className="contact-grid">
            <div className="contact-section">
              <h3>Primary Contact Information</h3>
              <div className="contact-item">
                <strong>Email:</strong> siyambhuiyan@iut-dhaka.edu
              </div>
              <div className="contact-item">
                <strong>Telephone:</strong> +880 1752982995
              </div>
              <div className="contact-item">
                <strong>Address:</strong> Boardbazar, Gazipur, Bangladesh
              </div>
              <div className="contact-item">
                <strong>Postal Code:</strong> 1704
              </div>
            </div>

            <div className="contact-section">
              <h3>Academic Affiliation</h3>
              <div className="contact-item">
                <strong>Institution:</strong> Islamic University of Technology
              </div>
              <div className="contact-item">
                <strong>Department:</strong> Computer Science and Engineering
              </div>
              <div className="contact-item">
                <strong>Academic Status:</strong> Undergraduate Student
              </div>
              <div className="contact-item">
                <strong>Expected Graduation:</strong> 2025
              </div>
            </div>

            <div className="contact-section">
              <h3>Professional Services</h3>
              <div className="contact-item">Full Stack Web Development</div>
              <div className="contact-item">Mobile Application Development</div>
              <div className="contact-item">
                AI Integration & Machine Learning
              </div>
              <div className="contact-item">Database Design & Management</div>
              <div className="contact-item">Technical Consultation</div>
            </div>

            <div className="contact-section">
              <h3>Availability & Rates</h3>
              <div className="contact-item">
                <strong>Project Consultation:</strong> Available
              </div>
              <div className="contact-item">
                <strong>Collaboration:</strong> Open to partnerships
              </div>
              <div className="contact-item">
                <strong>Internship:</strong> Seeking opportunities
              </div>
              <div className="contact-item">
                <strong>Response Time:</strong> 24-48 hours
              </div>
            </div>
          </div>

          <div className="availability-notice">
            <h3>Professional Opportunities</h3>
            <div className="article-text single-column">
              <p>
                Currently accepting inquiries for collaboration opportunities,
                internship positions, and technology consultation projects.
                Particular interest in environmental technology solutions,
                educational applications, and artificial intelligence
                integration projects.
              </p>

              <p>
                Available for freelance development work, open-source
                contributions, and academic research collaboration. Best reached
                via email for detailed project discussions and technical
                requirements analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Weather & Small Ads */}
        <div className="newspaper-extras">
          <div className="weather-box">
            <h4>Today's Weather</h4>
            <p>Gazipur: Partly Cloudy, 28°C</p>
            <p>Humidity: 75% | Wind: 15 km/h</p>
          </div>

          <div className="small-ads">
            <h4>Technology Services</h4>
            <p>• Web Development: Modern & Responsive</p>
            <p>• AI Integration: Smart Solutions</p>
            <p>• Mobile Apps: Cross-Platform</p>
            <p>Contact: siyambhuiyan@iut-dhaka.edu</p>
          </div>
        </div>
      </main>

      {/* Authentic Newspaper Footer */}
      <footer className="newspaper-footer">
        <div className="footer-content">
          <div>© 2024 The Bangladesh Herald • Portfolio Special Edition</div>
          <div>Printed in Gazipur • Circulation: 50,000</div>
          <div className="footer-motto">
            "Progress Through Technology, Innovation Through Code"
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VintageNewspaper;
