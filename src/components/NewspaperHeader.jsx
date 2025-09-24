import React from "react";

const NewspaperHeader = ({ currentDate, currentTime }) => {
  return (
    <header className="newspaper-header">
      {/* Issue info bar */}
      <div className="issue-info">
        <span className="volume-info">Volume XLVII, No. 123</span>
        <span className="price-tag">৳5.00</span>
        <span className="edition-info">MORNING EDITION</span>
      </div>

      <h1 className="newspaper-title">THE BANGLADESH HERALD</h1>
      <div className="newspaper-subtitle">
        Technology Chronicle • Portfolio Special Edition • Established 1952
      </div>
      <div className="header-info">
        <span>📍 Boardbazar, Gazipur District</span>
        <span>{currentDate}</span>
        <span>🕐 {currentTime}</span>
        <span>📰 Morning Edition</span>
        <span>📧 siyambhuiyan@iut-dhaka.edu</span>
        <span>💰 Price: 5 Taka</span>
      </div>
    </header>
  );
};

export default NewspaperHeader;
