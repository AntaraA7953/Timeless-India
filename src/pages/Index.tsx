
import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Clock, Palette, Camera, Trophy, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import InteractiveMap from '@/components/InteractiveMap';
import Timeline from '@/components/Timeline';
import ArtForms from '@/components/ArtForms';
import GameSection from '@/components/GameSection';
import VRExperience from '@/components/VRExperience';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'map', 'timeline', 'arts', 'games', 'vr'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-saffron-500 to-emerald-500 rounded-full animate-glow"></div>
              <h1 className="text-2xl font-bold text-gradient">Timeless India</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home', icon: Star },
                { id: 'map', label: 'Explore', icon: MapPin },
                { id: 'timeline', label: 'Timeline', icon: Clock },
                { id: 'arts', label: 'Arts', icon: Palette },
                { id: 'games', label: 'Games', icon: Trophy },
                { id: 'vr', label: 'VR/AR', icon: Camera }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-saffron-100 text-saffron-700 scale-105'
                      : 'text-gray-600 hover:text-saffron-600 hover:bg-saffron-50'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-saffron-500 to-emerald-500 hover:from-saffron-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300">
              <Users className="mr-2 h-4 w-4" />
              Join Community
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <Hero />
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="py-20">
        <InteractiveMap />
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <Timeline />
      </section>

      {/* Art Forms Section */}
      <section id="arts" className="py-20">
        <ArtForms />
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <GameSection />
      </section>

      {/* VR/AR Experience Section */}
      <section id="vr" className="py-20">
        <VRExperience />
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-emerald-400 rounded-full animate-glow"></div>
                <h3 className="text-xl font-bold">Timeless India</h3>
              </div>
              <p className="text-orange-200">
                Celebrating the rich cultural heritage and timeless traditions of India through interactive experiences.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-300">Explore</h4>
              <ul className="space-y-2 text-orange-200">
                <li><a href="#map" className="hover:text-yellow-300 transition-colors">Cultural Map</a></li>
                <li><a href="#timeline" className="hover:text-yellow-300 transition-colors">Heritage Timeline</a></li>
                <li><a href="#arts" className="hover:text-yellow-300 transition-colors">Art Forms</a></li>
                <li><a href="#games" className="hover:text-yellow-300 transition-colors">Interactive Games</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-300">Experience</h4>
              <ul className="space-y-2 text-orange-200">
                <li><a href="#vr" className="hover:text-yellow-300 transition-colors">VR Monuments</a></li>
                <li><a href="#vr" className="hover:text-yellow-300 transition-colors">AR Experiences</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Virtual Tours</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Digital Museum</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-300">Connect</h4>
              <ul className="space-y-2 text-orange-200">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Share Stories</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Cultural Events</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-orange-800 text-center text-orange-300">
            <p>&copy; 2025 Timeless India. Preserving heritage, inspiring futures.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
