import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Clock, Palette, Camera, Trophy, Users, Star, Eye, Utensils, Sparkles, Newspaper, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import InteractiveMap from '@/components/InteractiveMap';
import Timeline from '@/components/Timeline';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [peekOpen, setPeekOpen] = useState(false);
  const peekRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'map', 'timeline'];
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (peekRef.current && !peekRef.current.contains(event.target as Node)) {
        setPeekOpen(false);
      }
    }
    if (peekOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [peekOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/1d0c929a-51e7-44af-abd2-a6405a92a7e2.png" 
                alt="Timeless India Logo" 
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-2xl font-bold text-gradient">Timeless India</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home', icon: Star, action: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) },
                { id: 'map', label: 'Explore', icon: MapPin, action: () => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' }) },
                { id: 'timeline', label: 'Timeline', icon: Clock, action: () => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' }) },
                { id: 'arts', label: 'Arts', icon: Palette, action: () => window.location.href = '/arts' },
                { id: 'games', label: 'Games', icon: Trophy, action: () => window.location.href = '/games' },
                { id: 'vr', label: 'VR/AR', icon: Camera, action: () => window.location.href = '/vr' }
              ].map(({ id, label, icon: Icon, action }) => (
                <button
                  key={id}
                  onClick={action}
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
              <a
                href="/stories"
                className="flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 text-gray-600 hover:text-saffron-600 hover:bg-saffron-50"
              >
                <Users size={16} />
                <span className="text-sm font-medium">Stories</span>
              </a>
              {/* Peek Button and Dropdown */}
              <div ref={peekRef} className="relative">
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-saffron-400 to-emerald-400 text-white shadow-lg hover:scale-110 transition-all border-2 border-white"
                  onClick={() => setPeekOpen((open) => !open)}
                  aria-label="Peek"
                  type="button"
                >
                  <Eye size={20} />
                </button>
                {peekOpen && (
                  <div
                    className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-orange-100 z-50 animate-fade-in-up"
                    style={{ minWidth: 220 }}
                  >
                    {/* Triangle pointer */}
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-orange-100 rotate-45 z-10"></div>
                    <button
                      className="flex items-center gap-3 w-full text-left px-5 py-3 rounded-t-xl hover:bg-gradient-to-r hover:from-saffron-100 hover:to-emerald-50 transition-all font-medium text-gray-700"
                      onClick={() => { navigate('/quisine/QuisineCorner'); setPeekOpen(false); }}
                    >
                      <Utensils size={18} className="text-saffron-500" />
                      Quisine Corner
                    </button>
                    <button
                      className="flex items-center gap-3 w-full text-left px-5 py-3 hover:bg-gradient-to-r hover:from-saffron-100 hover:to-emerald-50 transition-all font-medium text-gray-700"
                      onClick={() => { navigate('/quisine/QuisineCorner'); setPeekOpen(false); }}
                    >
                      <Sparkles size={18} className="text-emerald-500" />
                      Festival Fiesta
                    </button>
                    <button
                      className="flex items-center gap-3 w-full text-left px-5 py-3 hover:bg-gradient-to-r hover:from-saffron-100 hover:to-emerald-50 transition-all font-medium text-gray-700"
                      onClick={() => { /* Add routing if needed */ setPeekOpen(false); }}
                    >
                      <Newspaper size={18} className="text-orange-500" />
                      Daily Echoes
                    </button>
                    <button
                      className="flex items-center gap-3 w-full text-left px-5 py-3 rounded-b-xl hover:bg-gradient-to-r hover:from-saffron-100 hover:to-emerald-50 transition-all font-medium text-gray-700"
                      onClick={() => { /* Add routing if needed */ setPeekOpen(false); }}
                    >
                      <ShoppingBag size={18} className="text-pink-500" />
                      Made in My India
                    </button>
                  </div>
                )}
              </div>
              {/* End Peek Button */}
              <Button className="bg-gradient-to-r from-saffron-500 to-emerald-500 hover:from-saffron-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300">
                <Users className="mr-2 h-4 w-4" />
                Join Community
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-saffron-600 focus:outline-none" aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
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

      {/* Quick Access Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Explore More
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deeper into India's rich heritage through interactive experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Arts & Culture</h3>
                <p className="text-gray-600 mb-4">Discover traditional dance, music, and visual arts</p>
                <Button 
                  onClick={() => window.location.href = '/arts'}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                >
                  Explore Arts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Games</h3>
                <p className="text-gray-600 mb-4">Learn through fun quizzes and challenges</p>
                <Button 
                  onClick={() => window.location.href = '/games'}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                >
                  Play Games
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Camera className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">VR/AR Experience</h3>
                <p className="text-gray-600 mb-4">Immersive virtual tours of monuments</p>
                <Button 
                  onClick={() => window.location.href = '/vr'}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                >
                  Experience VR
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/1d0c929a-51e7-44af-abd2-a6405a92a7e2.png" 
                  alt="Timeless India Logo" 
                  className="w-12 h-12 rounded-full"
                />
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
                <li><a href="/arts" className="hover:text-yellow-300 transition-colors">Art Forms</a></li>
                <li><a href="/games" className="hover:text-yellow-300 transition-colors">Interactive Games</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-300">Experience</h4>
              <ul className="space-y-2 text-orange-200">
                <li><a href="/vr" className="hover:text-yellow-300 transition-colors">VR Monuments</a></li>
                <li><a href="/vr" className="hover:text-yellow-300 transition-colors">AR Experiences</a></li>
                <li><a href="/vr" className="hover:text-yellow-300 transition-colors">Virtual Tours</a></li>
                <li><a href="/vr" className="hover:text-yellow-300 transition-colors">Digital Museum</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-300">Connect</h4>
              <ul className="space-y-2 text-orange-200">
                <li><a href="/stories" className="hover:text-yellow-300 transition-colors">Share Stories</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Community</a></li>
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

/* Add this animation to your global CSS or in a <style> tag:
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in-up {
  animation: fade-in-up 0.25s ease;
}
*/
