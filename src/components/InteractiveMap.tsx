
import React, { useState } from 'react';
import { MapPin, Info, Camera, Music, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const states = [
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      position: { top: '35%', left: '15%' },
      culture: 'Desert Culture & Royal Heritage',
      highlights: ['Palaces', 'Folk Music', 'Handicrafts'],
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 'kerala',
      name: 'Kerala',
      position: { top: '70%', left: '12%' },
      culture: 'Backwaters & Spice Heritage',
      highlights: ['Kathakali', 'Ayurveda', 'Spices'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'punjab',
      name: 'Punjab',
      position: { top: '20%', left: '25%' },
      culture: 'Sikh Heritage & Agriculture',
      highlights: ['Bhangra', 'Golden Temple', 'Farming'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'bengal',
      name: 'West Bengal',
      position: { top: '40%', left: '70%' },
      culture: 'Literature & Arts',
      highlights: ['Durga Puja', 'Literature', 'Sweets'],
      color: 'from-pink-400 to-purple-500'
    },
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      position: { top: '75%', left: '25%' },
      culture: 'Temple Architecture & Classical Arts',
      highlights: ['Bharatanatyam', 'Temples', 'Silk'],
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Explore Cultural India
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Click on different states to discover their unique cultural heritage, traditions, and stories
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Interactive Map */}
        <div className="relative">
          <div className="relative w-full h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl border-4 border-saffron-200 overflow-hidden shadow-2xl">
            {/* India outline - simplified representation */}
            <div className="absolute inset-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border-2 border-emerald-200">
              
              {/* State markers */}
              {states.map((state) => (
                <button
                  key={state.id}
                  onClick={() => setSelectedState(state)}
                  className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${state.color} 
                    animate-pulse hover:scale-150 transition-all duration-300 cursor-pointer
                    ${selectedState?.id === state.id ? 'scale-150 animate-glow' : ''}
                  `}
                  style={state.position}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                    bg-white px-2 py-1 rounded text-xs font-medium shadow-lg opacity-0 
                    hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {state.name}
                  </div>
                </button>
              ))}
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-saffron-300">
                <MapPin size={24} className="animate-float" />
              </div>
              <div className="absolute bottom-4 left-4 text-emerald-300">
                <Palette size={20} className="animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Interactive Cultural Map of India
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-3 h-3 bg-gradient-to-r from-saffron-400 to-orange-500 rounded-full mr-2 animate-pulse"></div>
                Cultural Hotspots
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mr-2 animate-pulse"></div>
                Heritage Sites
              </div>
            </div>
          </div>
        </div>

        {/* State Information Panel */}
        <div className="space-y-6">
          {selectedState ? (
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-orange-50 animate-slide-in-right">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gradient flex items-center">
                  <MapPin className="mr-2 text-saffron-500" />
                  {selectedState.name}
                </CardTitle>
                <p className="text-gray-600 font-medium">{selectedState.culture}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Palette className="mr-2 text-emerald-500" size={16} />
                      Cultural Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedState.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-saffron-100 to-orange-100 
                            text-saffron-700 rounded-full text-sm font-medium border border-saffron-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <Button 
                      variant="outline" 
                      className="hover-scale border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      View Gallery
                    </Button>
                    <Button 
                      variant="outline"
                      className="hover-scale border-saffron-200 text-saffron-700 hover:bg-saffron-50"
                    >
                      <Music className="mr-2 h-4 w-4" />
                      Listen Music
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-saffron-500 to-orange-600 
                    hover:from-saffron-600 hover:to-orange-700 text-white hover-scale">
                    <Info className="mr-2 h-4 w-4" />
                    Explore {selectedState.name} Heritage
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-amber-50">
              <CardContent className="py-12 text-center">
                <MapPin className="mx-auto mb-4 text-saffron-400 animate-float" size={48} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Select a State to Explore
                </h3>
                <p className="text-gray-600">
                  Click on any highlighted region on the map to discover its unique cultural heritage
                </p>
              </CardContent>
            </Card>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { number: "28", label: "States", icon: MapPin },
              { number: "1000+", label: "Traditions", icon: Palette },
              { number: "500+", label: "Languages", icon: Music }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-4 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50 hover-scale">
                <stat.icon className="mx-auto mb-2 text-emerald-500 animate-float" size={24} />
                <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
