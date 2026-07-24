

'use client';

import React from 'react';

export default function Tickets() {
  
  // Tugma bosilganda Footer qismiga avtomatik va silliq scroll qilish funksiyasi
  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Agar #footer id-li element topilmasa, sahifaning eng pastiga scroll qiladi
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const ticketsData = [
    {
      id: 1,
      title: "Temir Yo'l Biletleri Biz Bilan",
      subtitle: "Butun dunyo bo'ylab",
      description: "Temir yo'l orqali biz bilan sarguzashtlarni kashf eting! Baland tog'larni, betakror tabiat manzalarini, qadimiy va navqiron shaharlarni, takrorlanmas landshaftlarni biz bilan birga toping. Qiziqarlimi? Biz bilan bog'laning.",
      image: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=800&auto=format&fit=crop",
      buttonText: "Ko'proq Bilish"
    },
    {
      id: 2,
      title: "Aviabiletlar Biz Bilan Arzon",
      subtitle: "Jahon bo'ylab Manzillar",
      description: "Eng arzon, qulay, xavfsiz aviabiletlar biz bilan! Bizga bog'laning, biz sizga eng maqbul bo'ladigan aviabilerni topib beramiz",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
      buttonText: "Ko'proq Bilish"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white font-sans text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Biz Bilan Chiptalarni Arzon va Oson Toping.
          </h2>
          <p className="text-blue-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Har bir shaharda eng yaxshi temir yo'l va aviachipta biletlarini biz bilan toping
          </p>
        </div>

        {/* Tickets Cards List */}
        <div className="space-y-12">
          {ticketsData.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10 pb-12 border-b border-gray-100 last:border-b-0"
            >
             
              <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-56 sm:h-64 md:h-68 object-cover rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                  loading={item.id === 1 ? "eager" : "lazy"}
                />
              </div>

        
              <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-between pt-1">
                <div>
                  {/* Title and Action Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <button 
                      onClick={scrollToFooter}
                      className="self-start sm:self-auto bg-[#9ed0f0] hover:bg-[#83c0e8] active:scale-95 text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      {item.buttonText}
                    </button>
                  </div>

                  {/* Subtitle */}
                  <p className="text-gray-400 text-sm mb-4">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}