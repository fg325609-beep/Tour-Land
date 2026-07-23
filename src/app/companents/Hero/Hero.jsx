'use client';

import React, { useState, useEffect } from 'react';

function Hero() {
  const slides = [
    {
      id: 1,
      title: "Xitoy",
      subtitle: "Sharqning go'zalliklarini biz bilan birgalikda his eting!",
      bgImage: "https://tourland.uz/assets/xitoy2-CZ6SZdr1.jpg",
    },
    {
      id: 2,
      title: "Maldiv Orollari",
      subtitle: "Moviy okean va musaffo plyajlarda unutilmas hordiq!",
      bgImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Yaponiya",
      subtitle: "Zamonaviylik va qadimiy an'analar uyg'unligini kashf eting!",
      bgImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920&auto=format&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden group">
      <div
        className="flex flex-col items-center justify-center w-full h-full bg-slate-800 bg-cover bg-center bg-no-repeat filter brightness-90 contrast-110 transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url('${slides[currentIndex].bgImage}')`,
        }}
      >
        <h2 className="text-white text-[20px] md:text-[24px] text-center px-4 drop-shadow-md">
          {slides[currentIndex].subtitle}
        </h2>
        <h1 className="text-white text-[32px] sm:text-[43px] md:text-[63px] font-bold my-3 drop-shadow-md">
          {slides[currentIndex].title}
        </h1>

        <button className="bg-[#5d9bec] text-white rounded-3xl text-[14px] h-[47px] px-10 font-semibold mb-14 md:mb-28 hover:bg-white hover:text-[#5d9bec] hover:border-[#5d9bec] border border-transparent transition-all duration-500 shadow-lg cursor-pointer">
          Biz bilan bog'laning
        </button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-80 group-hover:opacity-100 z-10 cursor-pointer"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-80 group-hover:opacity-100 z-10 cursor-pointer"
      >
        ❯
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === index
                ? 'w-8 bg-white'
                : 'w-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;