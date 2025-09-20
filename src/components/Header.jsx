import React, { useState, useEffect } from "react";
import { Github, Mail, Phone, MapPin } from "lucide-react";

const Header = () => {
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

  return (
    <header>
      {/* Breaking News Bar */}
      <div
        style={{
          background: "var(--accent-red)",
          color: "var(--aged-white)",
          padding: "8px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{ fontSize: "12px", fontWeight: "bold", letterSpacing: "1px" }}
        >
          ★ BREAKING: Local Developer Wins Multiple National Hackathons ★
        </div>
      </div>

      {/* Main Masthead */}
      <div className="masthead">
        {/* Publication Details */}
        <div className="publication-info">
          <div>
            <div style={{ fontSize: "11px" }}>Vol. MMXXIV, No. 365</div>
            <div style={{ fontSize: "10px" }}>Est. 2022</div>
          </div>
          <div>
            <div style={{ fontSize: "11px" }}>{currentDate}</div>
            <div style={{ fontSize: "10px" }}>{currentTime}</div>
          </div>
          <div>
            <div style={{ fontSize: "11px" }}>DHAKA EDITION</div>
            <div style={{ fontSize: "10px" }}>Price: Free</div>
          </div>
        </div>

        {/* Main Title */}
        <h1>THE DEVELOPER TIMES</h1>
        <div className="tagline">"All the Code That's Fit to Print"</div>

        {/* Main Headlines */}
        <div style={{ margin: "30px 0", textAlign: "center" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "var(--accent-red)",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            EXCLUSIVE INTERVIEW
          </div>
          <h2
            className="main-headline"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", margin: "10px 0" }}
          >
            RISING TECH STAR DOMINATES
            <br />
            COMPETITIVE PROGRAMMING SCENE
          </h2>
          <p className="sub-headline">
            Siyam Bhuiyan Secures Multiple Championship Victories in National
            Hackathons
          </p>
          <div
            style={{
              fontSize: "11px",
              color: "var(--newspaper-gray)",
              fontStyle: "italic",
              marginTop: "10px",
            }}
          >
            By Tech Correspondent Sarah Johnson | Special Coverage from Dhaka
          </div>
        </div>

        {/* Contact Bar */}
        <div className="info-bar">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              fontSize: "13px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Mail size={14} />
              <span>siyambhuiyan@iut-dhaka.edu</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Phone size={14} />
              <span>+880 1752982995</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <MapPin size={14} />
              <span>Boardbazar, Gazipur, Bangladesh</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Github size={14} />
              <span>github.com/siyam-bhuiyan</span>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0",
            marginTop: "20px",
            fontSize: "11px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              borderRight: "1px solid var(--border-color)",
              padding: "10px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>FRONT PAGE</div>
            <div style={{ color: "var(--newspaper-gray)" }}>Hero Story</div>
          </div>
          <div
            style={{
              borderRight: "1px solid var(--border-color)",
              padding: "10px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>TECHNOLOGY</div>
            <div style={{ color: "var(--newspaper-gray)" }}>Projects</div>
          </div>
          <div
            style={{
              borderRight: "1px solid var(--border-color)",
              padding: "10px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>EXPERTISE</div>
            <div style={{ color: "var(--newspaper-gray)" }}>Skills</div>
          </div>
          <div
            style={{
              borderRight: "1px solid var(--border-color)",
              padding: "10px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>AWARDS</div>
            <div style={{ color: "var(--newspaper-gray)" }}>Achievements</div>
          </div>
          <div style={{ padding: "10px" }}>
            <div style={{ fontWeight: "bold" }}>CONTACT</div>
            <div style={{ color: "var(--newspaper-gray)" }}>Connect</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
