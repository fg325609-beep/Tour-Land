import React from 'react';

export default function Interesting() {
  const factsData = [
    {
      id: 1,
      title: "Tea culture",
      subtitle: "Chinese Tea Culture",
      description: "Chinese tea culture has developed over centuries and is one of the oldest traditions in the world. Drinking tea has become an integral part of daily life for the Chinese people, and this culture reflects not only the method of preparing the beverage but also the respect for health and spirit.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
      population: "8.66 M",
      area: "41.290 km²",
      price: "$400"
    },
    {
      id: 2,
      title: "The Middle Kingdom",
      subtitle: "China, The Middle Kingdom",
      description: "(In Chinese, Tiānxià — 天下) is a concept of great significance in Chinese culture and history. This ancient phrase is used to describe China and the worldview associated with it. The concept of the Middle Kingdom developed during the imperial era of China, where it was seen as the place ruled by Heaven (Tian), and this rule was considered to extend to everything on Earth.",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop",
      population: "44.48 M",
      area: "275.400 km²",
      price: "$946"
    },
    {
      id: 3,
      title: "Chinese cuisine",
      subtitle: "The Diversity of Chinese Cuisine",
      description: "Chinese cuisine is famous worldwide for its diversity of dishes. Each region is known for its unique dishes, for example, Sichuan cuisine is known for its spiciness, while Beijing is famous for Peking duck.",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop",
      population: "67.41 M",
      area: "551.500 km²",
      price: "$425"
    },
    {
      id: 4,
      title: "The homeland of pandas",
      subtitle: "Pandas — A Diplomatic Symbol of China",
      description: "Giant pandas play an important role in Chinese diplomacy. China has temporarily leased its pandas to other countries to strengthen diplomatic relations. This is known as panda diplomacy and is used to enhance China's relationships with international partners. The leased pandas can be seen in various zoos around the world, many of them in the USA, Japan, and European countries.",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?q=80&w=800&auto=format&fit=crop",
      population: "44.48 M",
      area: "275.400 km²",
      price: "$546"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white font-sans text-gray-800" id="info">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Interesting facts about China
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl leading-relaxed">
            China has a unique garden culture and history. In this section, we will provide you with Interesting Information.
          </p>
        </div>

        {/* Content List */}
        <div className="space-y-16">
          {factsData.map((item) => (
            <div 
              key={item.id}
              className="border-b border-gray-200 pb-12 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
                
                {/* Image */}
                <div className="w-full md:w-5/12 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 sm:h-72 object-cover rounded-3xl shadow-sm"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-1">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <button className="self-start sm:self-auto bg-[#9ed0f0] hover:bg-[#83c0e8] text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm">
                        Explore More
                      </button>
                    </div>

                    <p className="text-gray-400 text-sm mb-4">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Info stats bar */}
                  <div className="flex items-center gap-6 text-gray-400 text-xs sm:text-sm pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <span>👤</span>
                      <span>{item.population}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>🌐</span>
                      <span>{item.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>🏷️</span>
                      <span>{item.price}</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Need Directions link */}
              <div className="mt-6">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[#80c3ec] hover:text-[#52a6de] font-semibold text-sm transition-colors"
                >
                  Need Directions ? <span>→</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}