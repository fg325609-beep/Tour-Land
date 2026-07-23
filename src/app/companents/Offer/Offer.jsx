import React from 'react';

function Offer() {
  return (
    <section className="w-full bg-white pt-[90px] pb-[70px]">
      <div className="w-[1200px] mx-auto box-border">
        
        {/* Sarlavha va Kichik Matn */}
        <div className="text-center mb-[45px]">
          <h2 className="text-[34px] font-extrabold text-[#1c1c1c] mb-[14px] tracking-[-0.3px]">
            Ushbu manzillarga eksklyuziv sayohatlar taklif qilamiz!
          </h2>
          <p className="text-[15px] font-normal text-[#999999] m-0">
            Xitoy shaharlarga siz uchun qulay va xavfsiz sayohatlar tashkil etamiz!
          </p>
        </div>

        {/* Card Qismi (Chap tomonga taqalgan) */}
        <div className="flex justify-start w-full">
          <div className="relative w-[360px] h-[360px] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <img
              src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800"
              alt="Yangi manzillar"
              className="w-full h-full object-cover block"
            />
            {/* Rasm ustidagi xira badge */}
            <div className="absolute bottom-[35px] left-1/2 -translate-x-1/2 w-[250px] py-[12px] bg-[rgba(35,35,35,0.55)] backdrop-blur-[8px] rounded-[12px] color-white text-white text-[15px] font-bold text-center whitespace-nowrap border border-[rgba(255,255,255,0.12)]">
              Yangi manzillar tez kunda...
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Offer;