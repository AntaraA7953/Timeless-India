import React, { useState } from 'react';
import { Clock, ChevronRight, Star, Crown, Building2, Scroll, Sword, Globe, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Timeline = () => {
  const [selectedEra, setSelectedEra] = useState(0);
  const navigate = useNavigate();

  const eras = [
    {
      period: "3300-1300 BCE",
      title: "Indus Valley Civilization",
      description: "One of the world's earliest urban civilizations with advanced drainage systems, standardized weights, and sophisticated city planning.",
      highlights: ["Harappa & Mohenjo-daro", "Urban Planning", "Trade Networks"],
      icon: Building2,
      color: "from-amber-400 to-orange-500",
       route: "/indus-valley"
    },
    {
      period: "1500-500 BCE",
      title: "Vedic Period",
      description: "Foundation of Hindu philosophy with composition of the Vedas, establishment of social systems, and emergence of Sanskrit literature.",
      highlights: ["Rigveda Composition", "Sanskrit Literature", "Philosophical Schools"],
      icon: Scroll,
      color: "from-emerald-400 to-teal-500",
      route: "/vedic-period"
    },

    {
      period: "600-321 BCE",
      title: "Mahajanapadas & Early Kingdoms",
      description: "Rise of 16 powerful kingdoms with flourishing urbanization, trade, and emergence of Buddhism and Jainism as reformist movements.",
      highlights: ["16 Mahajanapadas", "Buddha & Mahavira", "Urban Growth"],
      icon: Crown,
      color: "from-purple-400 to-indigo-500",
      route: "/mahajanapadas"
    },
    {
      period: "321-185 BCE",
      title: "Mauryan Empire",  
      description: "First pan-Indian empire under Chandragupta Maurya and Ashoka's Buddhist propagation across Asia.",
      highlights: ["Ashoka's Edicts", "Buddhist Spread", "Administrative System"],
      icon: Crown,
      color: "from-blue-400 to-indigo-500",
      route: "/mauryan-empire"
    },
    {
      period: "185 BCE-319 CE",
      title: "Post-Maurya Period",
      description: "Era of fragmentation with foreign influences from Indo-Greeks, Kushans, and Shakas. Increased trade with Rome and Central Asia.",
      highlights: ["Cultural Exchange", "Gandhara Art", "Mahayana Buddhism"],
      icon: Globe,
      color: "from-cyan-400 to-blue-500",
      route: "/post-maurya"
    },
    {
      period: "320-550 CE",
      title: "Gupta Golden Age",
      description: "Period of unprecedented peace, prosperity, and cultural achievements in art, science, literature, and mathematics.",
      highlights: ["Scientific Advances", "Classical Arts", "Literary Works"],
      icon: Star,
      color: "from-yellow-400 to-amber-500",
      route: "/gupta-empire"
    },
    {
      period: "550-1206 CE",
      title: "Post-Gupta / Early Medieval",
      description: "Political fragmentation with rise of regional kingdoms and devotional movements. Development of temple architecture and regional languages.",
      highlights: ["Temple Architecture", "Regional Languages", "Bhakti Movement"],
      icon: Building2,
      color: "from-rose-400 to-pink-500",
      route: "/post-gupta"
    },
    {
      period: "1206-1526 CE",
      title: "Delhi Sultanate",
      description: "Turkish and Afghan rulers established Islamic rule with five successive dynasties introducing new architecture and Indo-Islamic culture.",
      highlights: ["Qutub Minar", "Indo-Islamic Culture", "Iqta System"],
      icon: Sword,
      color: "from-green-400 to-emerald-500",
      route: "/delhi-sultanate"
    },
    {
      period: "1526-1857 CE",
      title: "Mughal Era",
      description: "Islamic empire creating architectural marvels and fostering cultural synthesis between Hindu and Islamic traditions.",
      highlights: ["Taj Mahal", "Cultural Fusion", "Administrative Reforms"],
      icon: Crown,
      color: "from-red-400 to-orange-500",
      route: "/mughal-empire"
    },
    {
      period: "1700s-1857 CE",
      title: "Regional Kingdoms & European Arrival",
      description: "Decline of Mughals led to rise of Marathas, Sikhs, and Nawabs while Europeans competed for territorial control.",
      highlights: ["Battle of Plassey", "East India Company", "Regional Powers"],
      icon: Globe,
      color: "from-indigo-400 to-purple-500",
      route: "/regional-kingdoms"
    },
    {
      period: "1858-1947 CE",
      title: "British Colonial Rule",
      description: "Direct British Crown control after 1857 Revolt. Era of exploitation but also modern education and freedom movement emergence.",
      highlights: ["Freedom Movement", "INC Formation", "Civil Disobedience"],
      icon: Users,
      color: "from-gray-400 to-slate-500",
      route: "/british-colonial-rule"
    },
    {
      period: "1947 CE",
      title: "Independence & Partition",
      description: "India gained freedom but was divided into India and Pakistan, leading to massive migration and communal violence.",
      highlights: ["Independence Day", "Partition", "Constitution Making"],
      icon: Star,
      color: "from-saffron-400 to-emerald-500",
      route: "/independence-partition"
    },
    {
      period: "1947-1964 CE",
      title: "Nehru Era",
      description: "Foundation of modern secular democracy with focus on planned industrialization, science, education, and non-alignment.",
      highlights: ["Five-Year Plans", "Non-Alignment", "Institution Building"],
      icon: Building2,
      color: "from-blue-400 to-cyan-500",
      route: "/nehru-era"
    },
    {
      period: "1964-1977 CE",
      title: "Post-Nehru to Emergency",
      description: "Political instability, wars with neighbors, Green Revolution, and controversial Emergency period suspending democratic rights.",
      highlights: ["Green Revolution", "1971 War", "Emergency Period"],
      icon: Zap,
      color: "from-orange-400 to-red-500",
      route: "/post-nehru"
    },
    {
      period: "1977-1991 CE",
      title: "Post-Emergency to Liberalization",
      description: "Coalition politics and economic crisis leading to landmark liberalization reforms opening India to global markets.",
      highlights: ["End of License Raj", "Economic Opening", "Regional Politics"],
      icon: Globe,
      color: "from-teal-400 to-green-500",
      route: "/post-emergency"
    },
    {
      period: "1991-2014 CE",
      title: "Post-Liberalization India",
      description: "Rapid economic growth, IT revolution, nuclear tests, and coalition governments reshaping modern India's global presence.",
      highlights: ["IT Revolution", "Nuclear Tests", "Economic Growth"],
      icon: Zap,
      color: "from-purple-400 to-pink-500",
      route: "/post-liberalization"
    },
    {
      period: "2014-Present",
      title: "Contemporary India",
      description: "Digital transformation era with infrastructure development, strong governance, and active global diplomacy in space and technology.",
      highlights: ["Digital India", "Space Missions", "Global Diplomacy"],
      icon: Star,
      color: "from-saffron-400 to-emerald-500",
      route: "/contemporary-india"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Journey Through Time
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore India's comprehensive chronological heritage from ancient civilizations to the digital age
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-saffron-200 via-emerald-200 to-blue-200 rounded-full"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {eras.map((era, index) => {
            const Icon = era.icon;
            const isSelected = selectedEra === index;
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <button
                    onClick={() => setSelectedEra(index)}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${era.color} 
                      flex items-center justify-center text-white shadow-lg hover:scale-110 
                      transition-all duration-300 ${isSelected ? 'scale-110 animate-glow' : ''}`}
                  >
                    <Icon size={24} />
                  </button>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                  <Card 
                    className={`border-0 shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-105
                      ${isSelected ? 'animate-slide-in-right bg-gradient-to-br from-white to-orange-50' : 'bg-white hover:shadow-2xl'}`}
                    onClick={() => setSelectedEra(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${era.color} 
                          flex items-center justify-center text-white mr-4 md:hidden`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-saffron-600 mb-1">
                            {era.period}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {era.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {era.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 flex items-center">
                          <Clock className="mr-2 text-emerald-500" size={16} />
                          Key Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {era.highlights.map((highlight, highlightIndex) => (
                            <span
                              key={highlightIndex}
                              className="px-3 py-1 bg-gradient-to-r from-saffron-100 to-orange-100 
                                text-saffron-700 rounded-full text-sm font-medium border border-saffron-200"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {isSelected && (
                        <div className="mt-4 animate-fade-in-up">
                          <Button
                            className="bg-gradient-to-r from-saffron-500 to-orange-600 
                              hover:from-saffron-600 hover:to-orange-700 text-white hover-scale"
                            onClick={() => {
                              const eraRoute = era.route;
                              if (eraRoute) {
                                navigate(eraRoute);
                              }
                              // You can add more conditions for other eras if needed
                            }}
                          >
                            Explore This Era
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-12 flex justify-center flex-wrap gap-2">
        {eras.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedEra(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedEra === index
                ? 'bg-saffron-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
