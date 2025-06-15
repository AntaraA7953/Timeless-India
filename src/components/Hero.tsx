
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Journey Through",
      highlight: "Timeless India",
      subtitle: "Discover the rich cultural heritage that spans millennia",
      background: "bg-gradient-to-br from-saffron-400 via-orange-500 to-red-600"
    },
    {
      title: "Experience",
      highlight: "Living Traditions",
      subtitle: "Interactive stories, games, and immersive experiences",
      background: "bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600"
    },
    {
      title: "Explore",
      highlight: "Ancient Wisdom",
      subtitle: "From monuments to music, art to architecture",
      background: "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated pattern */}
      <div className="absolute inset-0 bg-indian-pattern opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-gradient-to-br from-saffron-400 to-emerald-400 rounded-full animate-float opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="text-saffron-500 mr-2 animate-pulse-glow" size={32} />
              <span className="text-saffron-600 font-medium text-lg">Welcome to</span>
              <Sparkles className="text-saffron-500 ml-2 animate-pulse-glow" size={32} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block animate-slide-in-left">
                {slides[currentSlide].title}
              </span>
              <span className="block text-gradient animate-slide-in-right">
                {slides[currentSlide].highlight}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 glow-on-hover"
            >
              <Play className="mr-2 h-5 w-5" />
              Begin Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Explore Heritage
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-saffron-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            {[
              { number: "5000+", label: "Years of Heritage" },
              { number: "500+", label: "Art Forms" },
              { number: "28", label: "States Covered" },
              { number: "1M+", label: "Stories Shared" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-saffron-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-saffron-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
