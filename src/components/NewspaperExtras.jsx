import React from "react";

const NewspaperExtras = () => {
  return (
    <div className="newspaper-extras">
      {/* 90s Tech Advertisements */}
      <div className="tech-ads-section">
        <h4>TECHNOLOGY MARKETPLACE</h4>
        <div className="ad-grid">
          <div className="tech-ad">
            <div className="ad-header">COMPAQ PRESARIO</div>
            <div className="ad-content">
              New Pentium 133MHz!
              <br />
              16MB RAM, 1.6GB HDD
              <br />
              Windows 95 Pre-installed
              <br />
              <strong>Only $2,499!</strong>
            </div>
          </div>
          <div className="tech-ad">
            <div className="ad-header">DIAL-UP INTERNET</div>
            <div className="ad-content">
              Connect at 28.8k!
              <br />
              Unlimited Hours*
              <br />
              Free Email Account
              <br />
              <strong>$19.95/month</strong>
            </div>
          </div>
          <div className="tech-ad">
            <div className="ad-header">SOFTWARE DEPOT</div>
            <div className="ad-content">
              Microsoft Office 97
              <br />
              Netscape Navigator
              <br />
              WinZip - Norton Antivirus
              <br />
              <strong>Best Prices!</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Weather Box */}
      <div className="weather-box">
        <h4>5-Day Weather Forecast</h4>
        <div className="weather-days">
          <div className="weather-day">
            <div className="day">MON</div>
            <div className="weather-icon">☀️</div>
            <div className="temp">32°C</div>
          </div>
          <div className="weather-day">
            <div className="day">TUE</div>
            <div className="weather-icon">⛅</div>
            <div className="temp">29°C</div>
          </div>
          <div className="weather-day">
            <div className="day">WED</div>
            <div className="weather-icon">🌧️</div>
            <div className="temp">26°C</div>
          </div>
          <div className="weather-day">
            <div className="day">THU</div>
            <div className="weather-icon">⛈️</div>
            <div className="temp">24°C</div>
          </div>
          <div className="weather-day">
            <div className="day">FRI</div>
            <div className="weather-icon">🌤️</div>
            <div className="temp">28°C</div>
          </div>
        </div>
        <div className="weather-location">
          Gazipur, Bangladesh • Humidity: 75%
        </div>
      </div>

      {/* Tech Stock Market */}
      <div className="stocks-box">
        <h4>Tech Stock Market</h4>
        <div className="stock-listings">
          <div className="stock-item">
            <span className="stock-name">APPLE</span>
            <span className="stock-price">$175.43</span>
            <span className="stock-change up">+2.1%</span>
          </div>
          <div className="stock-item">
            <span className="stock-name">MSFT</span>
            <span className="stock-price">$378.85</span>
            <span className="stock-change up">+1.3%</span>
          </div>
          <div className="stock-item">
            <span className="stock-name">GOOGLE</span>
            <span className="stock-price">$138.21</span>
            <span className="stock-change down">-0.8%</span>
          </div>
        </div>
      </div>

      {/* Mini Tech Crossword */}
      <div className="crossword-box">
        <h4>Mini Tech Crossword</h4>
        <div className="crossword-grid">
          <div className="crossword-row">
            <div className="cell">J</div>
            <div className="cell">A</div>
            <div className="cell">V</div>
            <div className="cell">A</div>
          </div>
          <div className="crossword-row">
            <div className="cell">S</div>
            <div className="cell black"></div>
            <div className="cell black"></div>
            <div className="cell">P</div>
          </div>
          <div className="crossword-row">
            <div className="cell">O</div>
            <div className="cell">H</div>
            <div className="cell">T</div>
            <div className="cell">I</div>
          </div>
        </div>
        <div className="crossword-clues">
          <div>
            <strong>1A:</strong> Coffee language (4)
          </div>
          <div>
            <strong>2D:</strong> Web standard (4)
          </div>
        </div>
      </div>

      {/* Tech Horoscope */}
      <div className="horoscope-box">
        <h4>Tech Career Horoscope</h4>
        <div className="horoscope-item">
          <strong>PROGRAMMER:</strong> Debug carefully today. Lucky syntax:
          try-catch
        </div>
        <div className="horoscope-item">
          <strong>DEVELOPER:</strong> New framework awaits. Read docs thoroughly
        </div>
      </div>

      {/* Enhanced Classified Tech Ads */}
      <div className="classifieds-box">
        <h4>Technology Classifieds</h4>
        <div className="classified-ad">
          <strong>FOR SALE:</strong> Vintage Nokia 5110. Snake game included.
          Perfect condition. Call 555-RETRO
        </div>
        <div className="classified-ad">
          <strong>WANTED:</strong> Python developer for startup. Must love
          coffee. Remote OK. Email: jobs@startup.com
        </div>
        <div className="classified-ad">
          <strong>SERVICES:</strong> Professional web development • Modern
          responsive designs • Contact: webdev@email.com
        </div>
      </div>

      {/* Comic Strip */}
      <div className="comics-box">
        <h4>Binary & Byte Adventures</h4>
        <div className="comic-strip">
          <div className="comic-panel">💭 "Great app idea!"</div>
          <div className="comic-panel">😺 "Facebook for cats!"</div>
          <div className="comic-panel">🤔 "...with blockchain!"</div>
        </div>
      </div>

      {/* Public Notices */}
      <div className="notices-box">
        <h4>Public Tech Notices</h4>
        <div className="notice-item">
          <strong>UPDATE:</strong> Browser security patches available. Update
          recommended.
        </div>
        <div className="notice-item">
          <strong>OUTAGE:</strong> Sector 7 WiFi disruption. Est. fix: 2 hours.
        </div>
      </div>

      {/* Sports Section */}
      <div className="sports-box">
        <h4>Sports Brief</h4>
        <div className="sports-score">🏏 Bangladesh vs Sri Lanka: 247/5</div>
        <div className="sports-score">⚽ Dhaka Abahani 2-1 Chittagong</div>
      </div>
    </div>
  );
};

export default NewspaperExtras;
