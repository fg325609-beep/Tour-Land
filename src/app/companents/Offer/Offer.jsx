import React from 'react';

function Offer() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        
        {/* Sarlavha va subtitrit (Title & Subtitle) */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#111827] mb-3 tracking-tight">
            Ushbu manzillarga eksklyuziv sayohatlar taklif qilamiz!
          </h2>
          <p className="text-[15px] font-normal text-[#9ca3af]">
            Xitoy shaharlarga siz uchun qulay va xavfsiz sayohatlar tashkil etamiz!
          </p>
        </div>

        {/* Kartochka joylashuvi */}
        <div className="flex justify-start w-full">
          <div className="relative w-[330px] h-[320px] rounded-[24px] overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800"
              alt="Yangi manzillar"
              className="w-full h-full object-cover block"
            />
            {/* Rasm ustidagi shaffof badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[82%] py-3 px-4 bg-[#262626]/60 backdrop-blur-md rounded-xl text-white text-[15px] font-bold text-center whitespace-nowrap border border-white/10">
              Yangi manzillar tez kunda...
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Offer;