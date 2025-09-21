import React, { useState, useEffect } from "react";
import profile from '../assets/profile.png';

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
        {/* Issue info bar */}
        <div className="issue-info">
          <span className="volume-info">Volume XLVII, No. 123</span>
          <span className="price-tag">৳5.00</span>
          <span className="edition-info">MORNING EDITION</span>
        </div>

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

        {/* Barcode and publication info */}
        <div className="publication-info">
          <div className="barcode">
            <div className="barcode-lines">
              |||| || |||| | |||||| ||| ||||| ||
            </div>
            <div className="barcode-number">9 788801 234567</div>
          </div>
          <div className="circulation-info">
            <div>Circulation: 50,000</div>
            <div>Printed in Gazipur</div>
          </div>
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
          {/* Page number and section marker */}
          <div className="page-marker">
            <span className="page-number">A1</span>
            <span className="section-name">FRONT PAGE | LOCAL NEWS</span>
          </div>

          {/* Breaking News Banner */}
          <div className="breaking-news">
            ⚡ PORTFOLIO: Computer Science Student Documents Personal Projects
          </div>

          {/* Main Story with Photo */}
          <div className="main-story">
            <div className="story-image">
              <img
                src={profile}
                alt="Siyam Bhuiyan"
                className="portrait-photo"
              />
              <div className="photo-caption">
                <strong>Siyam Bhuiyan</strong>, Computer Science student at
                Islamic University of Technology, at his workspace in
                Boardbazar, Gazipur.
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
                  live in Boardbazar, Gazipur, and I have been working on
                  various software development projects during my university
                  years.
                </p>

                <p>
                  I started programming during my early university days when I
                  became interested in solving problems through technology. I
                  have developed several applications focusing on different
                  areas including environmental issues, education systems, and
                  AI integration.
                </p>

                <p>
                  My technical skills include programming languages like
                  JavaScript, Python, Java, and C++. I work with web
                  technologies such as React and Node.js, and I have experience
                  with mobile development using React Native. I also work with
                  various databases and cloud platforms.
                </p>

                <p>
                  I am currently in my undergraduate program at IUT, where I
                  balance my coursework with personal projects. I participate in
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
            <div className="article-text">
              <p>
                I am pursuing my Bachelor's degree in Computer Science and
                Engineering at Islamic University of Technology. My coursework
                covers fundamental areas like algorithms, data structures,
                software engineering, and database systems.
              </p>

              <p>
                I have taken courses in artificial intelligence, machine
                learning, and web development. These subjects have helped me
                understand both theoretical concepts and practical
                implementation techniques that I apply in my personal projects.
              </p>

              <p>
                Apart from regular classes, I participate in coding
                competitions, attend tech events, and work on collaborative
                projects with fellow students. These activities help me stay
                updated with current technologies and improve my problem-solving
                abilities.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY PORTFOLIO SECTION */}
        <section id="portfolio" className="newspaper-section">
          {/* Page number and section marker */}
          <div className="page-marker">
            <span className="page-number">B2</span>
            <span className="section-name">TECHNOLOGY | BUSINESS</span>
          </div>

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
            <h3>My Competition Experience</h3>
            <div className="article-text single-column">
              <p>
                Over the past year, I have participated in six major technology
                competitions across Bangladesh. I have achieved two championship
                titles, multiple finalist positions, and recognition in
                specialized categories such as environmental innovation and
                academic excellence.
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

        {/* Enhanced Newspaper Extras Section */}
        <div className="newspaper-extras">
          {/* Enhanced Weather Box */}
          <div className="weather-box">
            <h4>5-Day Weather Forecast</h4>
            <div className="weather-days">
              <div className="weather-day">
                <div className="day">MON</div>
                <div className="weather-icon">☀️</div>
                <div className="temp">32°C</div>
              </div>
              <div className="weather-day">
                <div className="day">TUE</div>
                <div className="weather-icon">⛅</div>
                <div className="temp">29°C</div>
              </div>
              <div className="weather-day">
                <div className="day">WED</div>
                <div className="weather-icon">🌧️</div>
                <div className="temp">26°C</div>
              </div>
              <div className="weather-day">
                <div className="day">THU</div>
                <div className="weather-icon">⛈️</div>
                <div className="temp">24°C</div>
              </div>
              <div className="weather-day">
                <div className="day">FRI</div>
                <div className="weather-icon">🌤️</div>
                <div className="temp">28°C</div>
              </div>
            </div>
            <div className="weather-location">
              Gazipur, Bangladesh • Humidity: 75%
            </div>
          </div>

          {/* Tech Stock Market */}
          <div className="stocks-box">
            <h4>Tech Stock Market</h4>
            <div className="stock-listings">
              <div className="stock-item">
                <span className="stock-name">APPLE</span>
                <span className="stock-price">$175.43</span>
                <span className="stock-change up">+2.1%</span>
              </div>
              <div className="stock-item">
                <span className="stock-name">MSFT</span>
                <span className="stock-price">$378.85</span>
                <span className="stock-change up">+1.3%</span>
              </div>
              <div className="stock-item">
                <span className="stock-name">GOOGLE</span>
                <span className="stock-price">$138.21</span>
                <span className="stock-change down">-0.8%</span>
              </div>
            </div>
          </div>

          {/* Mini Tech Crossword */}
          <div className="crossword-box">
            <h4>Mini Tech Crossword</h4>
            <div className="crossword-grid">
              <div className="crossword-row">
                <div className="cell">J</div>
                <div className="cell">A</div>
                <div className="cell">V</div>
                <div className="cell">A</div>
              </div>
              <div className="crossword-row">
                <div className="cell">S</div>
                <div className="cell black"></div>
                <div className="cell black"></div>
                <div className="cell">P</div>
              </div>
              <div className="crossword-row">
                <div className="cell">O</div>
                <div className="cell">H</div>
                <div className="cell">T</div>
                <div className="cell">I</div>
              </div>
            </div>
            <div className="crossword-clues">
              <div>
                <strong>1A:</strong> Coffee language (4)
              </div>
              <div>
                <strong>2D:</strong> Web standard (4)
              </div>
            </div>
          </div>

          {/* Tech Horoscope */}
          <div className="horoscope-box">
            <h4>Tech Career Horoscope</h4>
            <div className="horoscope-item">
              <strong>PROGRAMMER:</strong> Debug carefully today. Lucky syntax:
              try-catch
            </div>
            <div className="horoscope-item">
              <strong>DEVELOPER:</strong> New framework awaits. Read docs
              thoroughly
            </div>
          </div>

          {/* Enhanced Classified Tech Ads */}
          <div className="classifieds-box">
            <h4>Technology Classifieds</h4>
            <div className="classified-ad">
              <strong>FOR SALE:</strong> Vintage Nokia 5110. Snake game
              included. Perfect condition. Call 555-RETRO
            </div>
            <div className="classified-ad">
              <strong>WANTED:</strong> Python developer for startup. Must love
              coffee. Remote OK. Email: jobs@startup.com
            </div>
            <div className="classified-ad">
              <strong>SERVICES:</strong> Professional web development • Modern
              responsive designs • Contact: webdev@email.com
            </div>
          </div>

          {/* Comic Strip */}
          <div className="comics-box">
            <h4>Binary & Byte Adventures</h4>
            <div className="comic-strip">
              <div className="comic-panel">💭 "Great app idea!"</div>
              <div className="comic-panel">😺 "Facebook for cats!"</div>
              <div className="comic-panel">🤔 "...with blockchain!"</div>
            </div>
          </div>

          {/* Public Notices */}
          <div className="notices-box">
            <h4>Public Tech Notices</h4>
            <div className="notice-item">
              <strong>UPDATE:</strong> Browser security patches available.
              Update recommended.
            </div>
            <div className="notice-item">
              <strong>OUTAGE:</strong> Sector 7 WiFi disruption. Est. fix: 2
              hours.
            </div>
          </div>

          {/* Sports Section */}
          <div className="sports-box">
            <h4>Sports Brief</h4>
            <div className="sports-score">
              🏏 Bangladesh vs Sri Lanka: 247/5
            </div>
            <div className="sports-score">⚽ Dhaka Abahani 2-1 Chittagong</div>
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
