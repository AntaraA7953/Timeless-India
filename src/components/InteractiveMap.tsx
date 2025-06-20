import React, { useState } from 'react';
import indiaSvg from './india.svg'; // You'll import the SVG file
import { MapPin, Info, Camera, Music, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stateMeta = {
  'jammu-and-kashmir': {
    name: 'Jammu & Kashmir',
    capital: 'Srinagar (Summer), Jammu (Winter)',
    culture: 'Himalayan Culture & Sufi Heritage',
    highlights: ['Kashmiri Handicrafts', 'Sufi Music', 'Alpine Beauty'],
  },
  'ladakh': {
    name: 'Ladakh',
    capital: 'Leh',
    culture: 'Buddhist Monasteries & High Altitude Culture',
    highlights: ['Monasteries', 'Buddhist Art', 'Mountain Culture'],
  },
  'uttar-pradesh': {
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    culture: 'Mughal Heritage & Spiritual Centers',
    highlights: ['Taj Mahal', 'Lucknowi Culture', 'Classical Music'],
  },
  'maharashtra': {
    name: 'Maharashtra',
    capital: 'Mumbai',
    culture: 'Bollywood & Marathi Heritage',
    highlights: ['Bollywood', 'Ganpati Festival', 'Marathi Theatre'],
  },
  // Add other states similarly...
};

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleClick = (evt) => {
    const id = evt.target.id;
    const meta = stateMeta[id];
    if (meta) {
      setSelectedState({ id, ...meta });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gradient">Interactive Cultural Map of India</h2>
        <p className="text-xl text-gray-600">
          Click on any state to discover its capital, culture, and heritage.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="relative w-full h-[600px]">
          <img
            src={indiaSvg}
            alt="India Map"
            className="w-full h-full object-contain shadow-lg"
            onClick={handleClick}
          />
          {/* You could still layer animated markers here if desired */}
        </div>

        <div className="space-y-6">
          {selectedState ? (
            <Card className="shadow-2xl bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 text-saffron-600" />
                  {selectedState.name}
                </CardTitle>
                <p className="text-gray-600 font-medium">{selectedState.culture}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Capital:</span> {selectedState.capital}
                </p>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                    <Palette className="mr-2 text-emerald-500" size={16} />
                    Cultural Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedState.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm border border-orange-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mb-4">
                    <Button variant="outline" className="flex-1 border-emerald-200 text-emerald-700">
                      <Camera className="mr-2 h-4 w-4" />
                      View Gallery
                    </Button>
                    <Button variant="outline" className="flex-1 border-saffron-200 text-saffron-700">
                      <Music className="mr-2 h-4 w-4" />
                      Cultural Music
                    </Button>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-saffron-500 to-orange-600 text-white">
                    <Info className="mr-2 h-4 w-4" />
                    Explore {selectedState.name} Heritage
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl bg-gradient-to-br from-white to-amber-50 text-center py-12">
              <MapPin className="mx-auto mb-4 text-saffron-400 animate-float" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore India's Diverse States</h3>
              <p className="text-gray-600 mb-4">
                Click on a state on the map to see its capital, culture, and highlights.
              </p>
              <div className="text-sm text-gray-500 grid grid-cols-2 gap-2 max-w-sm mx-auto">
                <div>📍 28 States</div>
                <div>🏛️ 8 Union Territories</div>
                <div>🎭 Rich Cultural Heritage</div>
                <div>🏰 Historic Capitals</div>
              </div>
            </Card>
          )}

          <div className="grid grid-cols-3 gap-4">
            {[
              { num: 28, label: 'States', Icon: MapPin },
              { num: 8, label: 'Union Territories', Icon: Palette },
              { num: 22, label: 'Official Languages', Icon: Music },
            ].map(({ num, label, Icon }) => (
              <Card key={label} className="text-center p-4 shadow-lg bg-gradient-to-br from-white to-emerald-50">
                <Icon className="mx-auto mb-2 text-emerald-500 animate-float" size={24} />
                <div className="text-2xl font-bold text-gradient">{num}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
