import React from "react";
import { Monitor, Server, Database, Code, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      description: "Modern user interface technologies",
      skills: [
        "React.js",
        "React Native",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
      proficiency: "Expert",
      color: "blue",
    },
    {
      title: "Backend Systems",
      icon: <Server className="w-6 h-6" />,
      description: "Server-side architecture and APIs",
      skills: [
        "Spring Boot Java",
        "Node.js",
        "Express.js",
        "Socket.IO",
        "REST APIs",
        "GraphQL",
      ],
      proficiency: "Advanced",
      color: "green",
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      description: "Core programming fundamentals",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++"],
      proficiency: "Expert",
      color: "purple",
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      description: "Data storage and retrieval systems",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Neon", "Firebase", "SQLite"],
      proficiency: "Advanced",
      color: "orange",
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      description: "Artificial intelligence and data science",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "NLP",
        "Computer Vision",
      ],
      proficiency: "Intermediate",
      color: "red",
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      description: "Essential development utilities",
      skills: ["Git", "Docker", "Postman", "CI/CD", "Pinecone", "AWS"],
      proficiency: "Advanced",
      color: "gray",
    },
  ];

  const certifications = [
    { name: "React Native Certified Developer", issuer: "Meta", year: "2024" },
    { name: "Spring Boot Professional", issuer: "Oracle", year: "2023" },
    { name: "Machine Learning Fundamentals", issuer: "Google", year: "2023" },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      year: "2022",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "border-blue-300 bg-blue-50 text-blue-800",
      green: "border-green-300 bg-green-50 text-green-800",
      purple: "border-purple-300 bg-purple-50 text-purple-800",
      orange: "border-orange-300 bg-orange-50 text-orange-800",
      red: "border-red-300 bg-red-50 text-red-800",
      gray: "border-gray-300 bg-gray-50 text-gray-800",
    };
    return colors[color] || colors.gray;
  };

  return (
    <section className="bg-white border-b-4 border-double border-gray-800">
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="section-headline">TECHNICAL EXPERTISE</h2>
          <p className="sub-headline">
            Comprehensive Skill Portfolio Across Modern Technology Stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="article-box">
              <header className="border-b-2 border-gray-300 mb-4 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`p-2 rounded ${getColorClasses(
                      category.color
                    )} border`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="headline-font text-lg font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <div
                      className={`text-xs font-semibold ${
                        category.proficiency === "Expert"
                          ? "text-green-600"
                          : category.proficiency === "Advanced"
                          ? "text-blue-600"
                          : "text-orange-600"
                      }`}
                    >
                      {category.proficiency} Level
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {category.description}
                </p>
              </header>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`tech-tag text-center ${getColorClasses(
                        category.color
                      )}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <footer className="mt-4 pt-3 border-t border-gray-200">
                <div className="text-xs text-gray-600 text-center">
                  {category.skills.length} Technologies Mastered
                </div>
              </footer>
            </div>
          ))}
        </div>

        {/* Proficiency Overview */}
        <div className="mb-12 bg-gray-100 p-6 border-2 border-gray-300">
          <h3 className="headline-font text-xl font-bold text-gray-900 mb-6 text-center">
            PROFICIENCY BREAKDOWN
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white p-4 border border-green-300">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-bold text-green-600 text-lg">
                Expert Level
              </div>
              <div className="text-sm text-gray-600">
                Frontend & Programming
              </div>
              <div className="text-xs text-gray-500 mt-1">
                React, JavaScript, Java
              </div>
            </div>
            <div className="text-center bg-white p-4 border border-blue-300">
              <div className="text-3xl mb-2">⭐</div>
              <div className="font-bold text-blue-600 text-lg">
                Advanced Level
              </div>
              <div className="text-sm text-gray-600">Backend & Database</div>
              <div className="text-xs text-gray-500 mt-1">
                Spring Boot, Node.js, SQL
              </div>
            </div>
            <div className="text-center bg-white p-4 border border-orange-300">
              <div className="text-3xl mb-2">📈</div>
              <div className="font-bold text-orange-600 text-lg">Growing</div>
              <div className="text-sm text-gray-600">AI & Machine Learning</div>
              <div className="text-xs text-gray-500 mt-1">
                TensorFlow, PyTorch, NLP
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="article-box">
            <h3 className="article-headline mb-4">
              PROFESSIONAL CERTIFICATIONS
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 border-l-4 border-blue-500"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 border">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200">
              <div className="text-center text-sm text-blue-800">
                <strong>4 Professional Certifications</strong> earned from
                industry leaders
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="article-box">
            <h3 className="article-headline mb-4">CONTINUOUS LEARNING</h3>

            <div className="body-font text-gray-800 space-y-4">
              <p>
                <span className="drop-cap">T</span>echnology evolves rapidly,
                and staying current requires dedicated continuous learning. My
                approach combines hands-on project development with formal
                certification programs.
              </p>

              <div className="bg-gray-50 p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Current Learning Goals
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Advanced Machine Learning algorithms</li>
                  <li>• Cloud architecture with AWS/Azure</li>
                  <li>• Mobile app optimization techniques</li>
                  <li>• DevOps and containerization</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 italic">
                "Every new technology mastered opens doors to solving previously
                impossible problems."
              </p>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center bg-gray-900 text-white p-8">
          <h3 className="headline-font text-2xl font-bold mb-4">
            TECHNICAL ARSENAL SUMMARY
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-400">20+</div>
              <div className="text-sm">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">6</div>
              <div className="text-sm">Skill Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">4</div>
              <div className="text-sm">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">2+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
