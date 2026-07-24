

import React from 'react'

function Tickets() {
  const ticketsData = [
    {
      id: 1,
      title: "Temir Yo'l Biletleri Biz Bilan",
      subtitle: "Butun dunyo bo'ylab",
      description: "Temir yo'l orqali biz bilan sarguzashtlarni kashf eting! Baland tog'larni, betakror tabiat manzalarini, qadimiy va navqiron shaharlarni, takrorlanmas landshaftlarni biz bilan birga toping. Qiziqarlimi? Biz bilan bog'laning.",
      image: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=800&auto=format&fit=crop", // Poezd rasmi
      buttonText: "Ko'proq Bilish"
    },
    {
      id: 2,
      title: "Aviabiletslar Biz Bilan Arzon",
      subtitle: "Jahon bo'ylab Manzillar",
      description: "Eng arzon, qulay, xavfsiz aviabiletlar biz bilan! Bizga bog'laning, biz sizga eng maqbul bo'ladigan aviabilerni topib beramiz",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop", // Samolyot rasmi
      buttonText: "Ko'proq Bilish"
    }
  ];

  return (
    <section className="py-12 bg-white font-sans text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sarlavha qismi */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Biz Bilan Chiptalarni Arzon va Oson Toping.
          </h2>
          <p className="text-blue-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Har bir shaharda eng yaxshi temir yo'l va aviachipta biletlarini biz bilan toping
          </p>
        </div>

        {/* Kartalar ro'yxati */}
        <div className="space-y-10">
          {ticketsData.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8 pb-10 border-b border-gray-100 last:border-b-0"
            >
              {/* Rasm */}
              <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-sm"
                />
              </div>

              {/* Kontent */}
              <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <button className="self-start sm:self-auto bg-[#9ed0f0] hover:bg-[#82c1eb] text-gray-800 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                      {item.buttonText}
                    </button>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">
                    {item.subtitle}
                  </p>

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
  )
}

export default Tickets