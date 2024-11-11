// ReferralBanner.jsx
import React from 'react';

const ReferralBanner = () => {
  return (
    <div className="referral-banner">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>USE YOUR REFERRAL LINK TO MULTIPLY GAINS</h1>
          <button className="referral-button">YOUR REFERRAL LINK</button>
        </div>
      </div>
      <style>{`
        .referral-banner {
          position: relative;
          width: 100%;
          height: 100vh;
          background-image: url('/path-to-your-background-image.jpg');
          background-size: cover;
          background-position: center;
          background-color: #000;
          display: flex;
          align-items: center;
          padding: 0 5%;
        }

        .referral-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .text-content {
          max-width: 600px;
        }

        h1 {
          color: #ffffff;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 2rem;
          text-transform: uppercase;
          font-family: 'Arial', sans-serif;
        }

        .referral-button {
          background-color: #ff0000;
          color: #ffffff;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-transform: uppercase;
        }

        .referral-button:hover {
          background-color: #cc0000;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }

          .referral-button {
            padding: 0.8rem 1.6rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ReferralBanner;