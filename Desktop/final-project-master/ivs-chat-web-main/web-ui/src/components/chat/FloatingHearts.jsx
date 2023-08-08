import React, { useState } from "react";
import "./FloatingHearts.css";

const FloatingHearts = () => {
  const [showFloatingHearts, setShowFloatingHearts] = useState(false);

  const handleButtonClick = () => {
    setShowFloatingHearts(true);
    setTimeout(() => {
      setShowFloatingHearts(false);
    }, 4000); // 애니메이션 지속 시간 설정 (3초)
  };

  return (
    <div>
      {/* 글씨와 이미지가 함께 있는 버튼을 추가합니다. */}
      <button
        className="show-floating-hearts-button"
        onClick={handleButtonClick}
      >
        <img className="button-icon" src="nice64.png" alt="Button Icon" />
        <span
          className="button-text"
          style={{
            fontSize: 12,
            whiteSpace: "pre-line",
            marginTop: 4,
          }}
        >
          {"제품이 마음에 드시면\n하트를 날려주세요!!"}
        </span>
      </button>

      {showFloatingHearts && (
        <div className="floating-hearts-container">
          <div className="floating-heart"></div>
          <div className="floating-heart"></div>
          <div className="floating-heart"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingHearts;
