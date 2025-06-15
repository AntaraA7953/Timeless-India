
import React, { useState } from 'react';
import { Clock, ChevronRight, Star, Crown, Temple, Scroll } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Timeline = () => {
  const [selectedEra, setSelectedEra] = useState(0);

  const eras = [
    {
      period: "3300-1300 BCE",
      title: "Indus Valley Civilization",
      description: "One of the world's earliest urban civilizations with advanced drainage systems and standardized weights.",
      highlights: ["Harappa & Mohenjo-daro", "Urban Planning", "Trade Networks"],
      icon: Temple,
      color: "from-amber-400 to-orange-500"
    },
    {
      period: "1500-500 BCE",
      title: "Vedic Period",
      description: "Foundation of Hindu philosophy, with the composition of the Vedas and establishment of caste system.",
      highlights: ["Rigveda Composition", "Sanskrit Literature", "Philosophical Schools"],
      icon: Scroll,
      color: "from-emerald-400 to-teal-500"
    },
    {
      period: "321-185 BCE",
      title: "Mauryan Empire",
      description: "First pan-Indian empire under Chandragupta Maurya and Ashoka's Buddhist propagation.",
      highlights: ["Ashoka's Edicts", "Buddhist Spread", "Administrative System"],
      icon: Crown,
      color: "from-blue-400 to-indigo-500"
    },
    {
      period: "320-550 CE",
      title: "Gupta Golden Age",
      description: "Period of peace, prosperity, and cultural achievements in art, science, and literature.",
      highlights: ["Scientific Advances", "Classical Arts", "Literary Works"],
      icon: Star,
      color: "from-purple-400 to-pink-500"
    },
    {
      period: "1526-1857 CE",
      title: "Mughal Era",
      description: "Islamic empire that created architectural marvels and fostered cultural synthesis.",
      highlights: ["Taj Mahal", "Indo-Islamic Art", "Cultural Fusion"],
      icon: Crown,
      color: "from-red-400 to-orange-500"
    },
    {
      period: "1947 CE",
      title: "Modern India",
      description: "Independence from British rule and emergence as a democratic republic with rich diversity.",
      highlights: ["Independence", "Democracy", "Cultural Revival"],
      icon: Star,
      color: "from-saffron-400 to-emerald-500"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Journey Through Time
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore India's rich chronological heritage from ancient civilizations to modern times
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
      <div className="mt-12 flex justify-center space-x-2">
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
