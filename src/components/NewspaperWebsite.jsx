import React, { useState, useEffect } from "react";
import HeaderNew from "./HeaderNew";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import AchievementsPage from "./AchievementsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import FooterNew from "./FooterNew";

const NewspaperWebsite = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const newsArticles = [
    {
      id: 1,
      headline: "Revolutionary Waste Management System Transforms Bangladesh",
      subheading:
        "AI-Powered Platform 'Waste Zero Bangladesh' Leads Environmental Innovation",
      category: "ENVIRONMENT",
      author: "Tech Reporter",
      date: "December 15, 2024",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop",
      content:
        "DHAKA - A groundbreaking waste management application is revolutionizing environmental sustainability across Bangladesh. The 'Waste Zero Bangladesh' platform combines artificial intelligence with gamification to create an unprecedented recycling ecosystem. The system features advanced mapping technology that helps users locate nearby recycling centers, while a competitive leaderboard system encourages community participation. With integrated Clerk authentication and a comprehensive market system, the platform has attracted over 10,000 active users in its first month.",
      tech: [
        "React",
        "AI Integration",
        "Maps API",
        "Authentication",
        "Admin Dashboard",
      ],
      fullStory:
        "The revolutionary platform addresses one of Bangladesh's most pressing environmental challenges through innovative technology. Users can scan waste items using their smartphones, with AI algorithms identifying recyclable materials and suggesting optimal disposal methods. The gamification system rewards users with points for proper waste disposal, creating a competitive environment that encourages environmental responsibility. The administrative dashboard provides comprehensive analytics on waste patterns, helping municipal authorities optimize collection routes and recycling programs.",
    },
    {
      id: 2,
      headline: "Bangla AI Platform Breaks Language Barriers",
      subheading:
        "Protilipi Introduces Real-Time Speech Recognition for Bengali Language",
      category: "TECHNOLOGY",
      author: "AI Correspondent",
      date: "December 12, 2024",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      content:
        "BANGLADESH - The innovative 'Protilipi' platform is transforming how Bengali speakers interact with artificial intelligence. This cutting-edge web application features real-time Bangla translation capabilities and an advanced speech-to-text chatbot system. The platform's rich editor supports collaborative writing in Bengali, enabling multiple users to work simultaneously on documents. Industry experts praise the platform's accuracy in Bengali language processing, achieving a 95% accuracy rate in speech recognition.",
      tech: [
        "React",
        "AI/ML",
        "Speech Recognition",
        "Real-time Collaboration",
        "Rich Text Editor",
      ],
      fullStory:
        "The platform represents a significant breakthrough in Bengali natural language processing. Traditional speech recognition systems have struggled with the nuances of Bengali pronunciation and dialect variations. Protilipi's advanced neural networks were trained on thousands of hours of Bengali audio data, enabling unprecedented accuracy in speech-to-text conversion. The collaborative writing feature supports real-time synchronization across multiple devices, making it ideal for educational institutions and content creators working on Bengali literature projects.",
    },
    {
      id: 3,
      headline: "University Management Revolution: EduSIS Takes Center Stage",
      subheading:
        "Comprehensive Mobile Solution Streamlines Academic Administration",
      category: "EDUCATION",
      author: "Education Writer",
      date: "December 10, 2024",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=250&fit=crop",
      content:
        "ACADEMIC SECTOR - The education technology landscape has been transformed with the introduction of EduSIS, a comprehensive university management application. Built with React Native, the platform seamlessly integrates enrollment processes, video conferencing through Jitsi Meet, and an intelligent chatbot for handling frequently asked questions. The system has been deployed across multiple universities, serving over 50,000 students and faculty members.",
      tech: [
        "React Native",
        "Jitsi Meet Integration",
        "AI Chatbot",
        "Enrollment System",
        "Multi-platform",
      ],
      fullStory:
        "EduSIS addresses the complex challenges of modern university administration through a unified mobile-first approach. The platform's enrollment system automates course registration, fee payment, and academic record management. The integrated Jitsi Meet functionality enables seamless virtual classrooms and administrative meetings. The AI-powered chatbot handles routine inquiries about schedules, assignments, and university policies, reducing administrative workload by 80%. Students and faculty can access all university services through a single, intuitive interface.",
    },
    {
      id: 4,
      headline: "LockIN Productivity App Boosts Developer Efficiency",
      subheading: "Gemini AI Integration Provides Intelligent Project Roadmaps",
      category: "PRODUCTIVITY",
      author: "Tech Analyst",
      date: "December 8, 2024",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      content:
        "TECH INDUSTRY - The productivity landscape for developers has been enhanced with the launch of LockIN, an innovative project tracking application. Utilizing Google's Gemini AI API, the platform generates intelligent roadmaps and provides coding snippets for enhanced productivity. The app's AsyncStorage implementation ensures data persistence across sessions, while the AI-powered features offer personalized learning paths.",
      tech: [
        "React Native",
        "Gemini AI API",
        "AsyncStorage",
        "AI Roadmaps",
        "Code Snippets",
      ],
      fullStory:
        "LockIN revolutionizes project management for software developers through intelligent automation. The platform analyzes project requirements and automatically generates comprehensive development roadmaps, breaking down complex tasks into manageable milestones. The Gemini AI integration provides context-aware code suggestions and identifies potential bottlenecks before they impact project timelines. Developers report 40% faster project completion rates and significantly improved code quality through the AI-assisted development process.",
    },
    {
      id: 5,
      headline: "JobSpring Platform Revolutionizes Career Guidance",
      subheading:
        "Full-Stack Recruitment Solution Features AI-Powered CV Analysis",
      category: "CAREER",
      author: "Business Reporter",
      date: "December 5, 2024",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      content:
        "EMPLOYMENT SECTOR - The job search landscape has been transformed with the introduction of JobSpring, a comprehensive career guidance and recruitment platform. Built with Spring Boot and React, the full-stack solution offers personalized career path recommendations, extensive job and internship listings, and revolutionary AI-based CV analysis. The platform's interview preparation tools have helped over 5,000 candidates secure positions at top companies.",
      tech: [
        "Spring Boot",
        "React",
        "AI CV Analysis",
        "Job Matching",
        "Interview Prep",
      ],
      fullStory:
        "JobSpring's AI-powered career guidance system analyzes individual skill sets, experience levels, and career aspirations to provide personalized job recommendations. The platform's CV analysis feature uses natural language processing to identify strengths and areas for improvement, suggesting specific enhancements to increase interview callback rates. The interview preparation module includes industry-specific practice questions, video interview simulations, and real-time feedback on communication skills.",
    },
    {
      id: 6,
      headline: "Unisphere Campus Platform Wins National Recognition",
      subheading:
        "Integrated University Solution Captures Championship at MIST INVENTIOUS 4.1",
      category: "AWARDS",
      author: "Competition Reporter",
      date: "December 1, 2024",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=250&fit=crop",
      content:
        "DHAKA - The Unisphere campus management platform has achieved national recognition by securing first place among 44 competing teams at MIST INVENTIOUS 4.1. The comprehensive solution features JWT/OAuth authentication, real-time chat capabilities, 2D map navigation, and intelligent bus tracking system. The platform's chatbot handles campus-related queries with 90% accuracy.",
      tech: [
        "React",
        "JWT/OAuth",
        "Real-time Chat",
        "2D Maps",
        "GPS Tracking",
        "Chatbot",
      ],
      fullStory:
        "Unisphere's victory at MIST INVENTIOUS 4.1 demonstrates the platform's innovative approach to campus management. The solution integrates multiple services into a cohesive ecosystem that enhances student life and administrative efficiency. The real-time bus tracking system uses GPS technology to provide accurate arrival predictions, while the 2D map navigation helps students and visitors navigate large campus areas. The intelligent chatbot handles everything from course information to campus event notifications, creating a seamless digital campus experience.",
    },
  ];

  const achievements = [
    {
      event: "MIST INVENTIOUS 4.1",
      position: "Champion",
      detail: "1st place among 44 teams with Unisphere platform",
    },
    {
      event: "Project Showcase Competition",
      position: "Champion",
      detail: "1st place among 75 teams for technical innovation",
    },
    {
      event: "Bangladesh Waste Management Challenge",
      position: "4th Runner Up",
      detail: "Top 5 position out of 60 competing teams",
    },
    {
      event: "IUT ICT Fest Hackathon",
      position: "Finalist",
      detail: "Selected among top finalists nationwide",
    },
    {
      event: "KUET BitFest Hackathon",
      position: "Finalist",
      detail: "Advanced to final round of national competition",
    },
    {
      event: "KUET Project Showcase",
      position: "Top 5",
      detail: "Received honorable mention for innovation",
    },
  ];

  const techStack = {
    "Frontend Development": [
      "React",
      "React Native",
      "Next.js",
      "HTML/CSS",
      "JavaScript ES6+",
    ],
    "Backend Systems": [
      "Spring Boot (Java)",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "RESTful APIs",
    ],
    "Database Technologies": [
      "PostgreSQL",
      "MongoDB",
      "Neon Cloud",
      "Database Design",
    ],
    "AI & Machine Learning": [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "Gemini AI API",
    ],
    "Development Tools": [
      "Git/GitHub",
      "Docker",
      "CI/CD",
      "Postman",
      "Pinecone Vector DB",
    ],
    "Additional Skills": [
      "Mobile Development",
      "Real-time Systems",
      "Authentication",
      "Cloud Services",
    ],
  };

  return (
    <div
      className="min-h-screen bg-gray-100"
      style={{ fontFamily: 'Times, "Times New Roman", serif' }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:wght@400;600&display=swap');
          
          .font-serif {
            font-family: 'Playfair Display', serif !important;
          }
          
          .newspaper-shadow {
            box-shadow: 0 12px 48px rgba(0,0,0,0.15);
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif !important;
          }
          
          blockquote {
            font-family: 'Crimson Text', serif !important;
          }
        `,
        }}
      />

      <HeaderNew
        currentTime={currentTime}
        formatTime={formatTime}
        formatDate={formatDate}
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      <main className="bg-white newspaper-shadow">
        <HomePage />
        <ProjectsPage newsArticles={newsArticles} />
        <AchievementsPage achievements={achievements} />
        <AboutPage techStack={techStack} />
        <ContactPage scrollToSection={scrollToSection} />
      </main>

      <FooterNew scrollToSection={scrollToSection} />
    </div>
  );
};

export default NewspaperWebsite;
