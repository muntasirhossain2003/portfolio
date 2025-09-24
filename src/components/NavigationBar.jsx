import React from "react";

const NavigationBar = ({ scrollToSection }) => {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <button onClick={() => scrollToSection("front-page")}>
          FRONT PAGE
        </button>
        <button onClick={() => scrollToSection("portfolio")}>TECHNOLOGY</button>
        <button onClick={() => scrollToSection("achievements")}>
          SPORTS & AWARDS
        </button>
        <button onClick={() => scrollToSection("contact")}>CLASSIFIEDS</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
