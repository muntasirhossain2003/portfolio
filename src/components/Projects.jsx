import React from "react";
import {
  ExternalLink,
  Github,
  Award,
  Lightbulb,
  Users,
  Globe,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Waste Zero Bangladesh",
      headline: "AI-POWERED PLATFORM TACKLES NATIONAL WASTE CRISIS",
      description:
        "Revolutionary waste management web application featuring AI integration, interactive mapping, gamified recycling system with leaderboards, comprehensive market system, and advanced admin dashboard. Winner of multiple hackathons for its innovative approach to environmental sustainability.",
      tech: [
        "React",
        "AI Integration",
        "Maps API",
        "Clerk Authentication",
        "Node.js",
      ],
      category: "Environmental Technology",
      impact: "Addressing Bangladesh's waste management challenges",
      image: "🌱",
      achievements: [
        "Champion - MIST INVENTIOUS 4.1",
        "44 competing teams defeated",
      ],
      featured: true,
    },
    {
      title: "Protilipi",
      headline: "BREAKTHROUGH IN BANGLA LANGUAGE TECHNOLOGY",
      description:
        "Comprehensive Bangla AI platform featuring real-time Bangla translation services, advanced speech-to-text chatbot capabilities, and collaborative rich text editor. Pioneering natural language processing for the Bengali language with cutting-edge AI integration.",
      tech: [
        "React",
        "AI/NLP",
        "Real-time Processing",
        "Speech Recognition",
        "WebRTC",
      ],
      category: "Language Technology",
      impact: "Bridging language barriers for 300M+ Bengali speakers",
      image: "🗣️",
      achievements: ["Innovation in Language Tech", "Real-time processing"],
    },
    {
      title: "EduSIS",
      headline: "UNIVERSITY MANAGEMENT REVOLUTIONIZED",
      description:
        "Multi-role React Native application streamlining university operations through integrated enrollment systems, Jitsi-powered video calling, intelligent FAQ chatbots, and comprehensive announcement management. A complete digital transformation solution for educational institutions.",
      tech: [
        "React Native",
        "Jitsi Meet",
        "AI Chatbot",
        "Push Notifications",
        "SQLite",
      ],
      category: "Educational Platform",
      impact: "Streamlining education for thousands of students",
      image: "🎓",
      achievements: [
        "Complete university digitization",
        "Multi-platform support",
      ],
    },
    {
      title: "LockIN",
      headline: "PRODUCTIVITY REDEFINED WITH AI ROADMAPS",
      description:
        "Advanced React Native productivity application featuring AsyncStorage for project tracking, Gemini API integration for AI-generated learning roadmaps, and comprehensive coding practice modules. Personalizes the learning journey for developers at all levels.",
      tech: [
        "React Native",
        "Gemini API",
        "AsyncStorage",
        "AI Roadmaps",
        "Local Storage",
      ],
      category: "Productivity Tool",
      impact: "Enhancing developer productivity and learning",
      image: "🚀",
      achievements: ["AI-powered learning", "Personalized roadmaps"],
    },
    {
      title: "JobSpring",
      headline: "CAREER PLATFORM TRANSFORMS JOB HUNTING",
      description:
        "Full-stack career guidance and recruitment platform built with Spring Boot and React. Features personalized career path recommendations, comprehensive job and internship listings, AI-powered CV analysis, and interactive interview preparation tools.",
      tech: [
        "Spring Boot",
        "React",
        "AI Analysis",
        "PostgreSQL",
        "JWT Authentication",
      ],
      category: "Career Platform",
      impact: "Connecting talent with opportunities nationwide",
      image: "💼",
      achievements: ["Full-stack architecture", "AI-powered matching"],
    },
    {
      title: "Unisphere",
      headline: "SMART CAMPUS CONNECTS UNIVERSITY COMMUNITY",
      description:
        "Comprehensive campus platform featuring JWT/OAuth authentication, real-time chat systems, innovative 2D map navigation, live bus tracking, and intelligent chatbots. Creating a connected campus ecosystem for enhanced student experience.",
      tech: [
        "React",
        "Real-time Chat",
        "Maps Integration",
        "JWT/OAuth",
        "WebSocket",
      ],
      category: "Campus Solution",
      impact: "Enhancing campus life for university students",
      image: "🏫",
      achievements: ["Real-time connectivity", "Campus digitization"],
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section className="bg-white border-b-4 border-double border-gray-800">
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <div className="breaking-news mb-4">★ TECHNOLOGY PORTFOLIO ★</div>
          <h2 className="section-headline">INNOVATION SHOWCASE</h2>
          <p className="sub-headline">
            Six Revolutionary Applications Changing Industries Across Bangladesh
          </p>
        </div>

        {/* Featured Project - Full Width */}
        {featuredProject && (
          <div className="mb-12">
            <div className="bg-yellow-50 border-4 border-yellow-400 vintage-shadow p-8">
              <div className="text-center mb-6">
                <div className="text-yellow-600 font-bold text-sm mb-2 tracking-widest">
                  🏆 FEATURED PROJECT - AWARD WINNER 🏆
                </div>
                <h3 className="headline-font text-3xl font-bold text-gray-900 mb-2">
                  {featuredProject.headline}
                </h3>
                <div className="text-lg text-gray-700 mb-4">
                  {featuredProject.title} - {featuredProject.category}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="text-8xl text-center mb-4">
                    {featuredProject.image}
                  </div>
                  <p className="body-font text-gray-800 leading-relaxed text-lg mb-6">
                    <span className="drop-cap">T</span>
                    {featuredProject.description.substring(1)}
                  </p>

                  <div className="bg-white p-4 border-2 border-yellow-300 mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">
                      🎯 PROJECT IMPACT
                    </h4>
                    <p className="text-gray-700">{featuredProject.impact}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 border-2 border-yellow-300">
                    <h4 className="font-bold text-gray-800 mb-3">
                      🏆 ACHIEVEMENTS
                    </h4>
                    {featuredProject.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm text-gray-700">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-4 border-2 border-yellow-300">
                    <h4 className="font-bold text-gray-800 mb-3">
                      ⚡ TECHNOLOGIES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tech.map((tech) => (
                        <span key={tech} className="newspaper-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {regularProjects.map((project, index) => (
            <article key={index} className="article-box">
              <header className="border-b-2 border-gray-300 mb-4 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="newspaper-badge text-xs">
                    {project.category}
                  </span>
                  <div className="text-3xl">{project.image}</div>
                </div>
                <h3 className="headline-font text-xl font-bold text-gray-900 mb-2">
                  {project.headline}
                </h3>
                <div className="text-gray-600 text-sm font-medium">
                  {project.title}
                </div>
              </header>

              <div className="body-font text-gray-800 text-sm leading-relaxed mb-4">
                <p>{project.description}</p>
              </div>

              <div className="bg-gray-50 p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-yellow-600" />
                  <span className="font-semibold text-gray-800 text-sm">
                    Impact:
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{project.impact}</p>
              </div>

              <footer className="border-t-2 border-gray-300 pt-4">
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">
                    Key Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-600">
                    {project.achievements[0]}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800">
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </button>
                    <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800">
                      <ExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Technical Innovation Summary */}
        <div className="mt-12 bg-gray-100 p-6 border-2 border-gray-300">
          <h3 className="headline-font text-xl font-bold text-gray-900 mb-4 text-center">
            TECHNICAL INNOVATION SUMMARY
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-4 border border-gray-300">
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-bold text-gray-800">6 Major Projects</div>
              <div className="text-sm text-gray-600">
                Across Multiple Industries
              </div>
            </div>
            <div className="bg-white p-4 border border-gray-300">
              <div className="text-2xl mb-2">🧠</div>
              <div className="font-bold text-gray-800">AI Integration</div>
              <div className="text-sm text-gray-600">
                Machine Learning & NLP
              </div>
            </div>
            <div className="bg-white p-4 border border-gray-300">
              <div className="text-2xl mb-2">🌍</div>
              <div className="font-bold text-gray-800">Real Impact</div>
              <div className="text-sm text-gray-600">Solving Real Problems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
