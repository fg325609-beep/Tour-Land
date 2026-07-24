'use client';

import React from 'react';

export default function Interesting() {
  const factsData = [
    {
      id: 1,
      title: "Choy madaniyati",
      subtitle: "Xitoy Choy Madaniyati",
      description: "Xitoy choy madaniyati asrlar davomida shakllangan bo'lib, dunyodagi eng qadimiy an'analardan biridir. Choy ichish Xitoy xalqi uchun kundalik hayotning ajralmas qismiga aylangan. Bu madaniyat nafaqat ichimlik tayyorlash usulini, balki salomatlik va ruhga bo'lgan hurmatni ham aks ettiradi.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
      population: "8.66 M",
      area: "41.290 km²",
      price: "$400"
    },
    {
      id: 2,
      title: "Osmon ostidagi qirollik",
      subtitle: "Xitoy — Osmon Ostidagi Qirollik",
      description: "(Xitoycha: Tiānxià — 天下) Xitoy madaniyati va tarixida juda katta ahamiyatga ega bo'lgan tushunchadir. Bu qadimiy ibora Xitoyni va u bilan bog'liq dunyoqarashni tasvirlash uchun ishlatiladi. Osmon ostidagi qirollik tushunchasi Xitoy imperiyasi davrida rivojlangan bo'lib, u Osmon (Tian) tomonidan boshqariladigan va Yerdagi barcha narsalarga taalluqli deb hisoblangan.",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop",
      population: "44.48 M",
      area: "275.400 km²",
      price: "$946"
    },
    {
      id: 3,
      title: "Xitoy oshxonasi",
      subtitle: "Xitoy Oshxonasining xilma-xilligi",
      description: "Xitoy oshxonasi o'zining turli-tuman taomlari bilan butun dunyoga mashhur. Har bir hudud o'zining takrorlanmas taomlari bilan ajralib turadi, masalan, Sichuan oshxonasi o'zining achchiqligi bilan tanilgan bo'lsa, Pekin o'rdagi bilan mashhur.",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop",
      population: "67.41 M",
      area: "551.500 km²",
      price: "$425"
    },
    {
      id: 4,
      title: "Pandalar vatani",
      subtitle: "Pandalar — Xitoyning diplomatik ramzi",
      description: "Gigant pandalar Xitoy diplomatiyasida muhim rol o'ynaydi. Xitoy o'z pandalarini boshqa davlatlarga diplomatik munosabatlarni mustahkamlash maqsadida vaqtincha ijaraga berib kelgan. Bu panda diplomatiyasi deb ataladi va Xitoyning xalqaro hamkorlar bilan aloqalarini mustahkamlashda ishlatiladi. Ijaraga olingan pandalar dunyodagi turli hayvonot bog'larida bo'lib, ularning ko'pini AQSh, Yaponiya, va Yevropa davlatlarida ko'rish mumkin.",
      image: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?q=80&w=800&auto=format&fit=crop",
      population: "44.48 mln",
      area: "275.400 km²",
      price: "$546"
    }
  ];

  return (
    <section className="py-12 bg-white font-sans text-gray-800" id="info">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Sarlavha qismi */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Xitoy haqida qiziqarli faktlar
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
            Xitoy noyob bog'dorchilik madaniyati va boy tarixga ega. Ushbu bo'limda sizga eng qiziqarli ma'lumotlarni taqdim etamiz.
          </p>
        </div>

        {/* Faktlar ro'yxati */}
        <div className="space-y-12">
          {factsData.map((item) => (
            <div 
              key={item.id}
              className="border-b border-gray-100 pb-8 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8">
                
                {/* Chap taraf: Rasm (Aynan asl saytdagidek ixcham o'lchamda) */}
                <div className="w-full md:w-[320px] h-[210px] flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover rounded-[22px]"
                  />
                </div>

                {/* O'ng taraf: Barcha kontent va linklar */}
                <div className="w-full md:flex-1 flex flex-col justify-between min-h-[210px]">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <button className="self-start sm:self-auto bg-[#9ed0f0] hover:bg-[#83c0e8] active:scale-95 text-gray-800 px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm">
                        Ko'proq Bilish
                      </button>
                    </div>

                    <p className="text-gray-400 text-xs mb-3">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Statistika ko'rsatkichlari */}
                    <div className="flex items-center gap-8 text-gray-400 text-xs pt-3 border-t border-gray-100 mb-3">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 fill-current text-gray-400" viewBox="0 0 20 20">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                        <span>{item.population}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 fill-current text-gray-400" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.974 5.974 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2v-1.973z" clipRule="evenodd" />
                        </svg>
                        <span>{item.area}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 fill-current text-gray-400" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span>{item.price}</span>
                      </div>
                    </div>

                    {/* "Qiziqarlimi ? →" havolasi */}
                    <div>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-1.5 text-[#80c3ec] hover:text-[#52a6de] font-medium text-xs transition-colors"
                      >
                        Qiziqarlimi ? <span className="text-sm">→</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}