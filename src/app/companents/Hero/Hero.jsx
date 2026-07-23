import React from 'react';

function Hero() {
  return (
    <div
      className="swiper-slide swiper-slide-active swiper-slide-next flex flex-col items-center justify-center w-full h-full bg-slate-600 bg-cover bg-center bg-no-repeat filter brightness-75 contrast-125"
      style={{
        backgroundImage: "url('/assets/xitoy2-CZ6SZdr1.jpg')",
      }}
      data-swiper-slide-index="0"
    >
      <h2 className="text-white text-[20px] md:text-[24px]">
        Sharqning go'zalliklarini biz bilan birgalikda his eting!
      </h2>
      <h1 className="text-white text-[32px] sm:text-[43px] md:text-[63px] font-bold my-3">
        Xitoy
      </h1>
      <button className="bg-main rounded-3xl text-[14px] h-[47px] px-10 font-semibold mb-14 md:mb-28 hover:bg-white hover:text-main hover:border-main hover:border-[1px] transition-colors duration-500 btncolor">
        Biz bilan bog'laning
      </button>
    </div>
  );
}

export default Hero;