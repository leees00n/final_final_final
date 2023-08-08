import React, { useEffect, useState } from 'react';
import './BlinkingImage.css';

const BlinkingImage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 이미지 깜빡거리기
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="blinking-image-container">
      {isVisible ? ( // isVisible 값에 따라 이미지를 보여주도록 수정
        <img className="blinking-image" src="../live.png" alt="Live Image" />
      ) : null}
    </div>
  );
};

export default BlinkingImage;
