import React from 'react';
// Swiper React komponentlari va stillarini import qilamiz
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper stillari
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Travels() {
  // 10 ta rasm va ular haqidagi ma'lumotlar ro'yxati
  const destinations = [
    { id: 1, img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800', title: 'Xitoy ibodatxonalari' },
    { id: 2, img: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?q=80&w=800', title: 'Panda maskani' },
    { id: 3, img: 'https://images.unsplash.com/photo-1528164344705-47542687990d?q=80&w=800', title: 'Yapon saroylari' },
    { id: 4, img: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?q=80&w=800', title: 'Qadimiy ko\'priklar' },
    { id: 5, img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800', title: 'Tokio manzarasi' },
    { id: 6, img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800', title: 'Kyoto tabiati' },
    { id: 7, img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800', title: 'Osiyo shaharlari' },
    { id: 8, img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800', title: 'Bali oroli' },
    { id: 9, img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=800', title: 'Tailand sohili' },
    { id: 10, img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800', title: 'Tog\'li ko\'llar' },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', textAlign: 'center' }}>
      {/* Sarlavha va matn */}
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '15px' }}>
        Unutilmas Sayohatlar Uchun Top 10 Go'zal Maskan
      </h2>
      <p style={{ maxWidth: '700px', margin: '0 auto 30px auto', color: '#4a5568', lineHeight: '1.6', fontSize: '16px' }}>
        Sizni har hafta yangi sotib va tezda sarguzashtlar kutmoqda! Har bir shahar
        o'zining aniq go'zalliklarini ochib, sizga yangi sarguzashtlar sovg'a qiladi. O'zingiz
        shu mo'jizalarning bir qismi deb uning qiling!
      </p>

      {/* Slider Qismi */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        style={{ paddingBottom: '40px' }}
      >
        {destinations.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                height: '380px',
                position: 'relative'
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Travels;