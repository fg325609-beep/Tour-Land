"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

function Travels() {
  const destinations = [
    { id: 1, img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800', title: 'Xitoy devori' },
    { id: 2, img: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=800', title: 'Panda maskani' },
    { id: 3, img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800', title: 'Yapon saroylari' },
    { id: 4, img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800', title: 'Bali oroli' },
    { id: 5, img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800', title: 'Tokio manzarasi' },
    { id: 6, img: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?q=80&w=800', title: 'Qadimiy ko\'priklar' },
    { id: 7, img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800', title: 'Osiyo shaharlari' },
    { id: 8, img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=800', title: 'Tailand sohili' },
    { id: 9, img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800', title: 'Tog\'li ko\'llar' },
    { id: 10, img: 'https://images.unsplash.com/photo-1528164344705-47542687990d?q=80&w=800', title: 'Kyoto tabiati' },
  ];

  return (
    <section style={{ padding: '60px 0', textAlign: 'center', overflow: 'hidden' }}>
      {/* Sarlavha va matn */}
      <div style={{ maxWidth: '800px', margin: '0 auto 40px auto', padding: '0 20px' }}>
        <h2 style={{width: '100%',g fontSize: '32px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>
          Unutilmas Sayohatlar Uchun Top 10 Go'zal Maskan
        </h2>
        <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '16px' }}>
          Sizni har hafta yangi sotib va tezda sarguzashtlar kutmoqda! Har bir shahar
          o'zining aniq go'zalliklarini ochib, sizga yangi sarguzashtlar sovg'a qiladi. O'zingiz
          shu mo'jizalarning bir qismi deb uning qiling!
        </p>
      </div>

      {/* Swiper Slider */}
      <div style={{ width: '100%', padding: '0 40px' }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={45} // ORASIDAGI MASOFA O'STIRILDI (45px)
          slidesPerView={3.4} // ASL SAYTDAGIDEK O'NG TARAFI YARIM KESILIB TURADI
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 20 },
            640: { slidesPerView: 2.2, spaceBetween: 30 },
            1024: { slidesPerView: 3.4, spaceBetween: 45 },
          }}
        >
          {destinations.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '420px',
                  width: '100%',
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Travels;