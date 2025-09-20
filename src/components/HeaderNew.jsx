import React from "react";
import { Clock } from "lucide-react";

const Header = ({
  currentTime,
  formatTime,
  formatDate,
  currentSection,
  scrollToSection,
}) => (
  <header className="bg-black text-white sticky top-0 z-50">
    {/* Top Bar */}
    <div className="bg-red-700 text-white text-xs py-1">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <span>🌡️ Dhaka: 28°C | Partly Cloudy</span>
        <span className="flex items-center gap-2">
          <Clock className="w-3 h-3" />
          {formatTime(currentTime)} | {formatDate(currentTime)}
        </span>
        <span className="hidden md:block">
          Breaking: Tech Innovation Surge in Bangladesh
        </span>
      </div>
    </div>

    {/* Main Header */}
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="text-center mb-4">
        <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide">
          THE TECH TRIBUNE
        </h1>
        <p className="text-xs md:text-sm tracking-widest text-gray-300 mt-1">
          BANGLADESH'S PREMIER TECHNOLOGY NEWSPAPER • ESTABLISHED 1985
        </p>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-600 pt-4">
        <div className="flex justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-semibold flex-wrap">
          <button
            onClick={() => scrollToSection("home")}
            className={`hover:text-red-400 transition-colors ${
              currentSection === "home" ? "text-red-400" : ""
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`hover:text-red-400 transition-colors ${
              currentSection === "projects" ? "text-red-400" : ""
            }`}
          >
            TECH NEWS
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className={`hover:text-red-400 transition-colors ${
              currentSection === "achievements" ? "text-red-400" : ""
            }`}
          >
            AWARDS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`hover:text-red-400 transition-colors ${
              currentSection === "about" ? "text-red-400" : ""
            }`}
          >
            TECH ANALYSIS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`hover:text-red-400 transition-colors ${
              currentSection === "contact" ? "text-red-400" : ""
            }`}
          >
            CONTACT
          </button>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
