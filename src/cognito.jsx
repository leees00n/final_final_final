import React, { useState, useEffect } from 'react';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import axios from 'axios';

const CouponCount = () => {
  const [couponCount, setCouponCount] = useState(0);

  useEffect(() => {
    // 사용자가 로그인한 경우에만 쿠폰 갯수 조회
    const fetchCouponCount = async () => {
      const userPoolId = 'ap-northeast-2_lfsZk3nCz' ;
      const clientId = '1hpc7kfo21nnjl58mb4fpota5e';
      const userPool = new CognitoUserPool({
        UserPoolId: userPoolId,
        ClientId: clientId,
      });

      const cognitoUser = userPool.getCurrentUser();
      if (!cognitoUser) {
        console.log('User not logged in.');
        return;
      }

      try {
        const accessToken = await getAccessToken(cognitoUser);
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.get('  https://8er8x4evak.execute-api.ap-northeast-2.amazonaws.com/Cognito-Coupon  ', config);
        setCouponCount(response.data.coupon_count);
      } catch (error) {
        console.log('Error fetching coupon count:', error);
      }
    };
    fetchCouponCount();
  }, []);

  const getAccessToken = (cognitoUser) => {
    return new Promise((resolve, reject) => {
      cognitoUser.getSession((err, session) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(session.getIdToken().getJwtToken());
      });
    });
  };

  return (
    <div>
      <h1>쿠폰 갯수 조회</h1>
      <p>사용자의 쿠폰 갯수: {couponCount}</p>
    </div>
  );
};

export default CouponCount;