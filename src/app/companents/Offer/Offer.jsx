"use client";

import React from 'react';

function Offer() {
  return (
    <section className="offer-section">
      {/* Sarlavha va Tavsif */}
      <div className="offer-header">
        <h2 className="offer-title">
          Ushbu manzillarga eksklyuziv sayohatlar taklif qilamiz!
        </h2>
        <p className="offer-subtitle">
          Xitoy shaharlarga siz uchun qulay va xavfsiz sayohatlar tashkil etamiz!
        </p>
      </div>

      {/* Kartochka Bloqi */}
      <div className="offer-content">
        <div className="offer-card">
          <img
            src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800"
            alt="Xitoy sayohati"
            className="card-image"
          />
          {/* Rasm ustidagi xira (glassmorphism) badge */}
          <div className="card-badge">
            Yangi manzillar tez kunda...
          </div>
        </div>
      </div>

      {/* CSS Stillari va Responsivlik */}
      <style jsx>{`
        .offer-section {
          width: 100%;
          padding: 60px 20px;
          text-align: center;
          box-sizing: border-box;
        }

        .offer-header {
          width: 100%;
          max-width: 900px;
          margin: 0 auto 40px auto;
        }

        .offer-title {
          width: 100%;
          font-size: 36px;
          font-weight: 800;
          color: #222222;
          line-height: 1.25;
          margin-bottom: 12px;
          text-align: center;
          letter-spacing: -0.5px;
        }

        .offer-subtitle {
          width: 100%;
          font-size: 16px;
          font-weight: 400;
          color: #888888;
          text-align: center;
          margin: 0 auto;
        }

        .offer-content {
          display: flex;
          justify-content: flex-start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .offer-card {
          position: relative;
          width: 380px;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Rasm ustidagi xira overlay text (Badge) */
        .card-badge {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 82%;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 12px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* RESPONSIV SOZLAMALAR */

        @media (max-width: 1024px) {
          .offer-title {
            font-size: 30px;
          }
          .offer-subtitle {
            font-size: 15px;
          }
          .offer-card {
            width: 340px;
            height: 340px;
          }
        }

        @media (max-width: 768px) {
          .offer-section {
            padding: 40px 16px;
          }
          .offer-content {
            justify-content: center; /* Mobil/planshetda kartochka markazga o'tadi */
          }
          .offer-title {
            font-size: 24px;
          }
          .offer-subtitle {
            font-size: 14px;
          }
          .offer-card {
            width: 100%;
            max-width: 360px;
            height: 320px;
          }
          .card-badge {
            font-size: 14px;
            padding: 10px 14px;
          }
        }

        @media (max-width: 480px) {
          .offer-title {
            font-size: 20px;
          }
          .offer-subtitle {
            font-size: 13px;
          }
          .offer-card {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
}

export default Offer;