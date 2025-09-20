import React from "react";
import { User, GraduationCap, MapPin, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white border-b-4 border-double border-gray-800">
      <div className="px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Story - Left Column */}
          <div className="lg:col-span-2">
            <div className="article-box">
              <h3 className="article-headline text-2xl mb-4">
                EXCLUSIVE: The Mind Behind Revolutionary Applications
              </h3>
              <div className="article-byline">
                By Sarah Johnson, Technology Reporter | Special Correspondent
              </div>

              <div className="body-font text-gray-800 leading-relaxed space-y-4">
                <p className="text-lg">
                  <span className="drop-cap">I</span>n an exclusive interview
                  with our technology correspondent, Mr. Siyam Bhuiyan, a
                  promising Computer Science student at Islamic University of
                  Technology, shares insights into his remarkable journey from
                  student to hackathon champion.
                </p>

                <p>
                  "Innovation drives everything I do," states Bhuiyan, whose
                  recent victory at MIST INVENTIOUS 4.1 saw him defeat 44
                  competing teams with his groundbreaking AI-powered waste
                  management system. "Whether it's developing platforms that
                  solve environmental challenges or creating tools that bridge
                  language barriers, technology should solve real-world
                  problems."
                </p>

                <p>
                  Currently pursuing his Bachelor of Science in Computer Science
                  and Engineering (2022-Present), Bhuiyan has already
                  established himself as a formidable force in the development
                  community. His expertise spans across React Native, MERN
                  stack, Spring Boot, and Machine Learning technologies, making
                  him a versatile full-stack developer.
                </p>

                <p>
                  "The future belongs to those who can adapt and innovate,"
                  Bhuiyan reflects. "Every line of code I write is an
                  opportunity to make someone's life better, whether it's
                  through environmental sustainability or educational
                  advancement."
                </p>
              </div>

              <div className="ornament mt-6"></div>

              <div className="mt-6 bg-gray-50 p-4 border-l-4 border-gray-800">
                <h4 className="headline-font font-bold text-gray-800 mb-2">
                  FAST FACTS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <strong>Age:</strong> 22 years
                  </div>
                  <div>
                    <strong>Specialization:</strong> Full Stack Development
                  </div>
                  <div>
                    <strong>Languages:</strong> Bangla, English
                  </div>
                  <div>
                    <strong>Focus Areas:</strong> AI, Sustainability, Education
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Profile Photo and Basic Info */}
            <div className="article-box text-center">
              <div className="mb-4">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded border-4 border-gray-800 newspaper-image flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
                <div className="image-caption">
                  Siyam Bhuiyan at his workspace, Islamic University of
                  Technology
                </div>
              </div>

              <h4 className="headline-font text-2xl font-bold text-gray-900 mb-2">
                SIYAM BHUIYAN
              </h4>
              <p className="text-gray-700 italic mb-4">
                Full Stack Developer & AI Enthusiast
              </p>

              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Computer Science & Engineering</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Islamic University of Technology</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Code className="w-4 h-4" />
                  <span>React Native | MERN | Spring Boot</span>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="article-box">
              <h4 className="article-headline text-lg mb-4">
                EDUCATION CHRONICLE
              </h4>

              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-gray-300 pl-4">
                  <div className="font-bold text-gray-800">2022 - Present</div>
                  <div className="text-gray-700">
                    B.Sc. Computer Science & Engineering
                  </div>
                  <div className="text-gray-600 italic">
                    Islamic University of Technology
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-4">
                  <div className="font-bold text-gray-800">2021</div>
                  <div className="text-gray-700">
                    Higher Secondary Certificate
                  </div>
                  <div className="text-gray-600 italic">
                    Govt. Science College (GPA: 5.00)
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-4">
                  <div className="font-bold text-gray-800">2019</div>
                  <div className="text-gray-700">
                    Secondary School Certificate
                  </div>
                  <div className="text-gray-600 italic">
                    Devgram Pilot High School (GPA: 5.00)
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="article-box bg-gray-50">
              <h4 className="article-headline text-lg mb-4">BY THE NUMBERS</h4>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-3 border border-gray-300">
                  <div className="headline-font text-2xl font-bold text-blue-600">
                    6+
                  </div>
                  <div className="text-xs text-gray-600">Major Projects</div>
                </div>
                <div className="bg-white p-3 border border-gray-300">
                  <div className="headline-font text-2xl font-bold text-green-600">
                    5+
                  </div>
                  <div className="text-xs text-gray-600">Hackathon Wins</div>
                </div>
                <div className="bg-white p-3 border border-gray-300">
                  <div className="headline-font text-2xl font-bold text-purple-600">
                    10+
                  </div>
                  <div className="text-xs text-gray-600">Tech Stacks</div>
                </div>
                <div className="bg-white p-3 border border-gray-300">
                  <div className="headline-font text-2xl font-bold text-red-600">
                    2+
                  </div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-8 bg-gray-100 border-l-4 border-gray-800 p-6">
          <blockquote className="text-center">
            <p className="text-xl italic text-gray-800 mb-4">
              "Code is poetry, and every project tells a story of innovation. My
              goal is to write stories that change the world, one algorithm at a
              time."
            </p>
            <footer className="text-gray-600">
              — Siyam Bhuiyan, in an exclusive interview with The Developer
              Times
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;
