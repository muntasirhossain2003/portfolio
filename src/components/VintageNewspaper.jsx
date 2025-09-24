import React, { useState, useEffect } from "react";
import NewspaperHeader from "./NewspaperHeader";
import NavigationBar from "./NavigationBar";
import FrontPageSection from "./FrontPageSection";
import PortfolioSection from "./PortfolioSection";
import AchievementsSection from "./AchievementsSection";
import ContactSection from "./ContactSection";
import NewspaperExtras from "./NewspaperExtras";
import NewspaperFooter from "./NewspaperFooter";
import "../styles/vintage-newspaper.css";

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
      <NewspaperHeader currentDate={currentDate} currentTime={currentTime} />
      <NavigationBar scrollToSection={scrollToSection} />

      <main className="newspaper-content">
        <FrontPageSection currentDate={currentDate} skills={skills} />
        <PortfolioSection projects={projects} />
        <AchievementsSection achievements={achievements} />
        <ContactSection />
        <NewspaperExtras />
      </main>

      <NewspaperFooter />
    </div>
  );
};

export default VintageNewspaper;
