
import React, { useState } from 'react';
import { MapPin, Info, ExternalLink, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InteractiveMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const territories = [
    {
      id: 'jammu-kashmir',
      name: 'Jammu & Kashmir',
      path: '/jammu-kashmir',
      description: 'Known for its stunning valleys and rich cultural heritage',
      position: { x: 200, y: 120 },
      color: '#8B5CF6'
    },
    {
      id: 'delhi',
      name: 'Delhi',
      path: '/delhi',
      description: 'The capital territory with rich history and modern governance',
      position: { x: 280, y: 200 },
      color: '#EF4444'
    },
    {
      id: 'chandigarh',
      name: 'Chandigarh',
      path: '/chandigarh',
      description: 'The beautifully planned city and joint capital',
      position: { x: 260, y: 180 },
      color: '#F59E0B'
    },
    {
      id: 'puducherry',
      name: 'Puducherry',
      path: '/puducherry',
      description: 'Former French colony with unique cultural blend',
      position: { x: 350, y: 420 },
      color: '#10B981'
    },
    {
      id: 'andaman-nicobar',
      name: 'Andaman & Nicobar',
      path: '/andaman-and-nicobar-islands',
      description: 'Tropical islands with pristine beaches and tribal heritage',
      position: { x: 450, y: 350 },
      color: '#06B6D4'
    },
    {
      id: 'lakshadweep',
      name: 'Lakshadweep',
      path: '/lakshadweep',
      description: 'Coral islands with marine biodiversity',
      position: { x: 200, y: 380 },
      color: '#3B82F6'
    },
    {
      id: 'dadra-daman-diu',
      name: 'Dadra & Nagar Haveli and Daman & Diu',
      path: '/dadra-and-nagar-haveli-and-daman-and-diu',
      description: 'Coastal territories with Portuguese colonial heritage',
      position: { x: 220, y: 300 },
      color: '#EC4899'
    },
    {
      id: 'ladakh',
      name: 'Ladakh',
      path: '/ladakh',
      description: 'High-altitude desert with Buddhist culture',
      position: { x: 240, y: 100 },
      color: '#F97316'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Explore India's Union Territories
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Click on any territory to discover its unique culture, heritage, and attractions
        </p>
        
        {/* Add Official Languages Button */}
        <div className="flex justify-center mb-8">
          <Button 
            onClick={() => window.location.href = '/official-languages'}
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-3 text-lg"
          >
            <Globe className="mr-2 h-5 w-5" />
            Explore India's 22 Official Languages
          </Button>
        </div>
      </div>

      <div className="relative">
        {/* Map Container */}
        <div className="relative bg-gradient-to-br from-emerald-100 to-blue-200 rounded-3xl p-8 min-h-[600px] overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
          </div>

          {/* Map Outline (Simplified India) */}
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 w-full h-full"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
          >
            {/* Simplified India outline */}
            <path
              d="M200 100 L300 80 L380 120 L420 200 L400 280 L380 360 L350 420 L300 450 L250 460 L200 450 L150 420 L120 380 L100 320 L110 260 L130 200 L160 150 Z"
              fill="rgba(255,255,255,0.3)"
              stroke="rgba(255,165,0,0.6)"
              strokeWidth="3"
              className="animate-pulse"
            />
          </svg>

          {/* Territory Markers */}
          {territories.map((territory) => (
            <div
              key={territory.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${territory.position.x}px`,
                top: `${territory.position.y}px`,
              }}
              onMouseEnter={() => setHoveredRegion(territory)}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => setSelectedRegion(territory)}
            >
              <div
                className="w-6 h-6 rounded-full border-3 border-white shadow-lg transform transition-all duration-300 group-hover:scale-150 group-hover:shadow-xl"
                style={{ backgroundColor: territory.color }}
              >
                <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: territory.color, opacity: 0.4 }}></div>
              </div>
              
              {/* Territory Label */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {territory.name}
              </div>
            </div>
          ))}

          {/* Hover Tooltip */}
          {hoveredRegion && (
            <div 
              className="absolute z-10 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-orange-200 max-w-xs transform -translate-x-1/2 transition-all duration-300"
              style={{
                left: `${hoveredRegion.position.x}px`,
                top: `${hoveredRegion.position.y - 80}px`,
              }}
            >
              <h3 className="font-bold text-gray-800 mb-2">{hoveredRegion.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{hoveredRegion.description}</p>
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              >
                <Info className="mr-1 h-3 w-3" />
                Explore
              </Button>
            </div>
          )}
        </div>

        {/* Territory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {territories.map((territory) => (
            <Card 
              key={territory.id}
              className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer bg-white/80 backdrop-blur-sm"
              onClick={() => window.location.href = territory.path}
            >
              <CardContent className="p-6 text-center">
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: territory.color }}
                >
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{territory.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{territory.description}</p>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                >
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Discover
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Region Modal */}
        {selectedRegion && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="max-w-md w-full">
              <CardContent className="p-6">
                <div className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: selectedRegion.color }}
                  >
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedRegion.name}</h3>
                  <p className="text-gray-600 mb-6">{selectedRegion.description}</p>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                      onClick={() => {
                        window.location.href = selectedRegion.path;
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Explore {selectedRegion.name}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setSelectedRegion(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
