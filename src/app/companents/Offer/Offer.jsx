"use client";

import React from 'react';

function Offer() {
  return (
    <section className="offer-section">
      <div className="offer-container">
        {/* Sarlavha va Kichik Matn */}
        <div className="offer-header">
          <h2 className="offer-title">
            Ushbu manzillarga eksklyuziv sayohatlar taklif qilamiz!
          </h2>
          <p className="offer-subtitle">
            Xitoy shaharlarga siz uchun qulay va xavfsiz sayohatlar tashkil etamiz!
          </p>
        </div>

        {/* Card Qismi */}
        <div className="offer-content">
          <div className="offer-card">
            <img
              src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800"
              alt="Yangi manzillar"
              className="card-img"
            />
            <div className="card-badge">
              Yangi manzillar tez kunda...
            </div>
          </div>
        </div>
      </div>

      {/* 1:1 Pixel Match Stillar */}
      <style jsx>{`
        .offer-section {
          width: 100%;
          padding-top: 90px;
          padding-bottom: 70px;
          background-color: #ffffff;
        }

        .offer-container {
          width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .offer-header {
          text-align: center;
          margin-bottom: 45px;
        }

        .offer-title {
          font-size: 34px;
          font-weight: 800;
          color: #1c1c1c;
          margin-bottom: 14px;
          letter-spacing: -0.3px;
        }

        .offer-subtitle {
          font-size: 15px;
          font-weight: 400;
          color: #999999;
          margin: 0;
        }

        .offer-content {
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }

        .offer-card {
          position: relative;
          width: 360px;
          height: 360px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-badge {
          position: absolute;
          bottom: 35px;
          left: 50%;
          transform: translateX(-50%);
          width: 250px;
          padding: 12px 0;
          background: rgba(35, 35, 35, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 12px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
      `}</style>
    </section>
  );
}

export default Offer;