import React, { useState } from "react";
import "./coupon.css";

const Coupon = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCouponClick = () => {
    setShowPopup(true);
  };

  const handleYesClick = () => {
    window.location.href = "/login"; // 로그인 페이지 URL을 적절히 변경하세요.
  };

  const handleNoClick = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* 쿠폰 이미지 버튼 */}
      <div className="coupon-container">
        <button className="coupon-button" onClick={handleCouponClick}>
          쿠폰 이미지
        </button>
      </div>

      {/* 팝업 창 */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <p>쿠폰을 사용하려면 로그인이 필요한 기능입니다.</p>
            <div className="popup-buttons">
              <button onClick={handleYesClick}>예</button>
              <button onClick={handleNoClick}>아니오</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupon;
