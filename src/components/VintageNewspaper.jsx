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

  const projects = [
    {
      title: "Waste Zero Bangladesh Wins Environmental Innovation Award",
      byline: "By Tech Reporter | Environmental Technology",
      content:
        "DHAKA — A groundbreaking waste management application has revolutionized environmental sustainability across Bangladesh. The 'Waste Zero Bangladesh' platform combines artificial intelligence with gamification to create an unprecedented recycling ecosystem. The system features advanced mapping technology that helps users locate nearby recycling centers, while a competitive leaderboard system encourages community participation.",
      tech: [
        "React",
        "AI Integration",
        "Maps API",
        "Authentication",
        "Admin Dashboard",
      ],
    },
    {
      title: "Revolutionary Bangla AI Platform Breaks Language Barriers",
      byline: "By AI Correspondent | Technology Innovation",
      content:
        "BANGLADESH — The innovative 'Protilipi' platform is transforming how Bengali speakers interact with artificial intelligence. This cutting-edge web application features real-time Bangla translation capabilities and an advanced speech-to-text chatbot system. The platform's rich editor supports collaborative writing in Bengali, enabling multiple users to work simultaneously on documents.",
      tech: [
        "React",
        "AI/ML",
        "Speech Recognition",
        "Real-time Collaboration",
        "Rich Text Editor",
      ],
    },
    {
      title:
        "University Management System Revolutionizes Academic Administration",
      byline: "By Education Writer | Academic Technology",
      content:
        "ACADEMIC SECTOR — The education technology landscape has been transformed with the introduction of EduSIS, a comprehensive university management application. Built with React Native, the platform seamlessly integrates enrollment processes, video conferencing through Jitsi Meet, and an intelligent chatbot for handling frequently asked questions.",
      tech: [
        "React Native",
        "Jitsi Meet Integration",
        "AI Chatbot",
        "Enrollment System",
      ],
    },
    {
      title: "LockIN Productivity App Boosts Developer Efficiency by 40%",
      byline: "By Tech Analyst | Productivity Technology",
      content:
        "TECH INDUSTRY — The productivity landscape for developers has been enhanced with the launch of LockIN, an innovative project tracking application. Utilizing Google's Gemini AI API, the platform generates intelligent roadmaps and provides coding snippets for enhanced productivity. The app's AsyncStorage implementation ensures data persistence across sessions.",
      tech: [
        "React Native",
        "Gemini AI API",
        "AsyncStorage",
        "AI Roadmaps",
        "Code Snippets",
      ],
    },
    {
      title: "JobSpring Platform Revolutionizes Career Guidance Industry",
      byline: "By Business Reporter | Career Technology",
      content:
        "EMPLOYMENT SECTOR — The job search landscape has been transformed with the introduction of JobSpring, a comprehensive career guidance and recruitment platform. Built with Spring Boot and React, the full-stack solution offers personalized career path recommendations, extensive job and internship listings, and revolutionary AI-based CV analysis.",
      tech: [
        "Spring Boot",
        "React",
        "AI CV Analysis",
        "Job Matching",
        "Interview Prep",
      ],
    },
    {
      title: "Unisphere Campus Platform Captures National Championship",
      byline: "By Competition Reporter | Academic Innovation",
      content:
        "DHAKA — The Unisphere campus management platform has achieved national recognition by securing first place among 44 competing teams at MIST INVENTIOUS 4.1. The comprehensive solution features JWT/OAuth authentication, real-time chat capabilities, 2D map navigation, and intelligent bus tracking system.",
      tech: [
        "React",
        "JWT/OAuth",
        "Real-time Chat",
        "2D Maps",
        "GPS Tracking",
        "Chatbot",
      ],
    },
  ];

  const achievements = [
    "MIST INVENTIOUS 4.1 - Champion (1st place among 44 teams)",
    "Project Showcase Competition - Champion (1st place among 75 teams)",
    "Bangladesh Waste Management Challenge - 4th Runner Up",
    "IUT ICT Fest Hackathon - Finalist",
    "KUET BitFest Hackathon - Finalist",
    "KUET Project Showcase - Top 5",
  ];

  return (
    <div className="newspaper">
      {/* Header */}
      <header className="newspaper-header">
        <h1 className="newspaper-title">THE DEVELOPER TIMES</h1>
        <div className="newspaper-subtitle">
          Bangladesh's Premier Technology Chronicle • Est. 1985 • Special
          Portfolio Edition
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
          <a href="#home">FRONT PAGE</a>
          <a href="#projects">TECH NEWS</a>
          <a href="#achievements">SPORTS & AWARDS</a>
          <a href="#contact">CLASSIFIEDS</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="newspaper-content">
        {/* Breaking News */}
        <div className="breaking-news">
          ⚡ BREAKING: Local Developer Siyam Bhuiyan Wins Multiple National
          Championships
        </div>

        {/* Main Headline */}
        <h1 className="main-headline">
          Rising Tech Star Dominates Bangladesh's Innovation Landscape
        </h1>
        <h2 className="sub-headline">
          Computer Science Student from IUT Continues Winning Streak with
          Revolutionary Applications
        </h2>

        {/* Main Story */}
        <div className="article">
          <div className="article-text">
            In a remarkable display of technical innovation and entrepreneurial
            spirit, Siyam Bhuiyan, a Computer Science student at Islamic
            University of Technology, has emerged as one of Bangladesh's most
            promising technology developers. The 22-year-old developer from
            Boardbazar, Gazipur, recently captured national attention by winning
            the prestigious MIST INVENTIOUS 4.1 hackathon, defeating 44
            competing teams with his revolutionary "Unisphere" campus management
            platform. His portfolio spans diverse domains including
            environmental sustainability, education technology, and artificial
            intelligence applications. Each project demonstrates a unique blend
            of cutting-edge technology and practical problem-solving that has
            caught the attention of industry leaders and academic institutions
            across the country. "What distinguishes Siyam's work is not just
            technical excellence, but his ability to identify real-world
            problems and create scalable solutions," says Dr. Rahman Ahmed,
            Professor of Computer Science at IUT.
          </div>
        </div>

        {/* Projects Section - Two Columns */}
        <div className="columns">
          <div className="column">
            {projects.slice(0, 3).map((project, index) => (
              <div key={index} className="article">
                <h3 className="article-headline">{project.title}</h3>
                <div className="article-byline">{project.byline}</div>
                <div className="article-text">{project.content}</div>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="column">
            {projects.slice(3, 6).map((project, index) => (
              <div key={index} className="article">
                <h3 className="article-headline">{project.title}</h3>
                <div className="article-byline">{project.byline}</div>
                <div className="article-text">{project.content}</div>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Box */}
        <div className="contact-box">
          <h3>🏆 Championship Record & Awards</h3>
          {achievements.map((achievement, index) => (
            <div key={index} style={{ margin: "8px 0", fontSize: "0.9rem" }}>
              • {achievement}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="contact-box">
          <h3>📞 Professional Contact</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <div>📧 siyambhuiyan@iut-dhaka.edu</div>
            <div>📱 +880 1752982995</div>
            <div>🎓 Islamic University of Technology</div>
            <div>💻 Full Stack Developer</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="newspaper-footer">
        <div>© 2024 The Developer Times • All Rights Reserved</div>
        <div style={{ marginTop: "10px", fontSize: "0.7rem", opacity: "0.8" }}>
          "All the Code That's Fit to Print" • Portfolio Special Edition
        </div>
      </footer>
    </div>
  );
};

export default VintageNewspaper;
