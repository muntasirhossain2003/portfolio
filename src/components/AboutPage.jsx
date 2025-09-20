import React from "react";
import { ChevronRight, GraduationCap } from "lucide-react";

const AboutPage = ({ techStack }) => (
  <section id="about" className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2 border-b-4 border-black inline-block pb-2">
        TECHNICAL ANALYSIS
      </h1>
      <p className="text-gray-600 text-lg mt-4">
        Comprehensive Technology Stack Overview
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 mb-12">
      {Object.entries(techStack).map(([category, skills], index) => (
        <div
          key={category}
          className="bg-white border-4 border-black shadow-lg"
        >
          <div className="bg-red-600 text-white p-4">
            <h3 className="text-xl font-bold font-serif">{category}</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-red-600" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Education Section */}
    <div className="bg-white border-4 border-black shadow-lg p-8">
      <h2 className="text-3xl font-bold font-serif text-center mb-8 border-b-2 border-gray-300 pb-4">
        EDUCATIONAL BACKGROUND
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gray-50 border-2 border-gray-300">
          <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <GraduationCap className="w-12 h-12 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold mb-2">Current Education</h3>
          <p className="text-gray-600 mb-2">Bachelor of Science</p>
          <p className="text-sm text-gray-500">
            Computer Science & Engineering
          </p>
          <p className="text-sm text-gray-500">
            Islamic University of Technology
          </p>
          <p className="text-xs text-gray-400 mt-2">2022 - Present</p>
        </div>

        <div className="text-center p-6 bg-gray-50 border-2 border-gray-300">
          <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <GraduationCap className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-lg font-bold mb-2">Higher Secondary</h3>
          <p className="text-gray-600 mb-2">Science Group</p>
          <p className="text-sm text-gray-500">Govt. Science College</p>
          <p className="text-sm font-semibold text-green-600">GPA: 5.00/5.00</p>
        </div>

        <div className="text-center p-6 bg-gray-50 border-2 border-gray-300">
          <div className="w-24 h-24 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <GraduationCap className="w-12 h-12 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold mb-2">Secondary School</h3>
          <p className="text-gray-600 mb-2">Science Group</p>
          <p className="text-sm text-gray-500">Devgram Pilot High School</p>
          <p className="text-sm font-semibold text-purple-600">
            GPA: 5.00/5.00
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPage;
