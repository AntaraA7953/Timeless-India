
import React, { useState } from 'react';
import { MapPin, Info, Camera, Music, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stateMeta = {
  'jammu-and-kashmir': {
    name: 'Jammu & Kashmir',
    capital: 'Srinagar (Summer), Jammu (Winter)',
    culture: 'Himalayan Culture & Sufi Heritage',
    highlights: ['Kashmiri Handicrafts', 'Sufi Music', 'Alpine Beauty'],
    position: { top: '15%', left: '25%' }
  },
  'ladakh': {
    name: 'Ladakh',
    capital: 'Leh',
    culture: 'Buddhist Monasteries & High Altitude Culture',
    highlights: ['Monasteries', 'Buddhist Art', 'Mountain Culture'],
    position: { top: '10%', left: '35%' }
  },
  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    culture: 'Hill Station Culture & Pahari Traditions',
    highlights: ['Hill Stations', 'Pahari Culture', 'Adventure Sports'],
    position: { top: '20%', left: '30%' }
  },
  'punjab': {
    name: 'Punjab',
    capital: 'Chandigarh',
    culture: 'Sikh Heritage & Punjabi Culture',
    highlights: ['Golden Temple', 'Bhangra', 'Punjabi Cuisine'],
    position: { top: '22%', left: '28%' }
  },
  'haryana': {
    name: 'Haryana',
    capital: 'Chandigarh',
    culture: 'Agricultural Heritage & Folk Traditions',
    highlights: ['Folk Music', 'Wrestling', 'Agriculture'],
    position: { top: '25%', left: '30%' }
  },
  'rajasthan': {
    name: 'Rajasthan',
    capital: 'Jaipur',
    culture: 'Royal Heritage & Desert Culture',
    highlights: ['Royal Palaces', 'Desert Safari', 'Folk Dance'],
    position: { top: '30%', left: '22%' }
  },
  'gujarat': {
    name: 'Gujarat',
    capital: 'Gandhinagar',
    culture: 'Gujarati Heritage & Business Culture',
    highlights: ['Navratri', 'Handicrafts', 'Business Hub'],
    position: { top: '35%', left: '18%' }
  },
  'maharashtra': {
    name: 'Maharashtra',
    capital: 'Mumbai',
    culture: 'Bollywood & Marathi Heritage',
    highlights: ['Bollywood', 'Ganpati Festival', 'Marathi Theatre'],
    position: { top: '42%', left: '25%' }
  },
  'madhya-pradesh': {
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    culture: 'Central Indian Heritage & Tribal Culture',
    highlights: ['Khajuraho', 'Tribal Art', 'Wildlife'],
    position: { top: '40%', left: '32%' }
  },
  'uttar-pradesh': {
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    culture: 'Mughal Heritage & Spiritual Centers',
    highlights: ['Taj Mahal', 'Lucknowi Culture', 'Classical Music'],
    position: { top: '32%', left: '35%' }
  },
  'bihar': {
    name: 'Bihar',
    capital: 'Patna',
    culture: 'Ancient Heritage & Buddhist Culture',
    highlights: ['Nalanda', 'Buddhist Sites', 'Madhubani Art'],
    position: { top: '38%', left: '40%' }
  },
  'jharkhand': {
    name: 'Jharkhand',
    capital: 'Ranchi',
    culture: 'Tribal Heritage & Mining Culture',
    highlights: ['Tribal Dance', 'Handicrafts', 'Natural Beauty'],
    position: { top: '45%', left: '40%' }
  },
  'west-bengal': {
    name: 'West Bengal',
    capital: 'Kolkata',
    culture: 'Bengali Heritage & Literary Culture',
    highlights: ['Durga Puja', 'Literature', 'Sweets'],
    position: { top: '45%', left: '45%' }
  },
  'odisha': {
    name: 'Odisha',
    capital: 'Bhubaneswar',
    culture: 'Temple Architecture & Classical Dance',
    highlights: ['Jagannath Temple', 'Odissi Dance', 'Temple Art'],
    position: { top: '50%', left: '42%' }
  },
  'chhattisgarh': {
    name: 'Chhattisgarh',
    capital: 'Raipur',
    culture: 'Tribal Heritage & Folk Traditions',
    highlights: ['Tribal Culture', 'Folk Dance', 'Handicrafts'],
    position: { top: '48%', left: '35%' }
  },
  'telangana': {
    name: 'Telangana',
    capital: 'Hyderabad',
    culture: 'Nizami Heritage & IT Culture',
    highlights: ['Charminar', 'Biryani', 'IT Hub'],
    position: { top: '55%', left: '32%' }
  },
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    culture: 'Telugu Heritage & Classical Arts',
    highlights: ['Kuchipudi', 'Tirupati', 'Spicy Cuisine'],
    position: { top: '58%', left: '35%' }
  },
  'karnataka': {
    name: 'Karnataka',
    capital: 'Bengaluru',
    culture: 'Tech Hub & Kannada Heritage',
    highlights: ['IT Capital', 'Classical Music', 'Mysore Palace'],
    position: { top: '60%', left: '28%' }
  },
  'goa': {
    name: 'Goa',
    capital: 'Panaji',
    culture: 'Portuguese Heritage & Beach Culture',
    highlights: ['Beaches', 'Carnival', 'Portuguese Architecture'],
    position: { top: '57%', left: '22%' }
  },
  'kerala': {
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    culture: 'Backwaters & Ayurvedic Heritage',
    highlights: ['Backwaters', 'Ayurveda', 'Kathakali'],
    position: { top: '68%', left: '28%' }
  },
  'tamil-nadu': {
    name: 'Tamil Nadu',
    capital: 'Chennai',
    culture: 'Dravidian Heritage & Temple Culture',
    highlights: ['Temples', 'Bharatanatyam', 'Tamil Literature'],
    position: { top: '68%', left: '32%' }
  },
  'assam': {
    name: 'Assam',
    capital: 'Dispur',
    culture: 'Tea Gardens & Assamese Culture',
    highlights: ['Tea Gardens', 'Bihu Festival', 'Silk'],
    position: { top: '38%', left: '55%' }
  },
  'arunachal-pradesh': {
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    culture: 'Tribal Heritage & Mountain Culture',
    highlights: ['Tribal Diversity', 'Monasteries', 'Natural Beauty'],
    position: { top: '32%', left: '60%' }
  },
  'nagaland': {
    name: 'Nagaland',
    capital: 'Kohima',
    culture: 'Naga Heritage & Warrior Culture',
    highlights: ['Hornbill Festival', 'Tribal Culture', 'Handicrafts'],
    position: { top: '40%', left: '58%' }
  },
  'manipur': {
    name: 'Manipur',
    capital: 'Imphal',
    culture: 'Manipuri Dance & Martial Arts',
    highlights: ['Manipuri Dance', 'Martial Arts', 'Loktak Lake'],
    position: { top: '42%', left: '58%' }
  },
  'mizoram': {
    name: 'Mizoram',
    capital: 'Aizawl',
    culture: 'Mizo Heritage & Bamboo Culture',
    highlights: ['Bamboo Dance', 'Tribal Culture', 'Hills'],
    position: { top: '45%', left: '57%' }
  },
  'tripura': {
    name: 'Tripura',
    capital: 'Agartala',
    culture: 'Bengali & Tribal Mix Culture',
    highlights: ['Ujjayanta Palace', 'Tribal Dance', 'Handicrafts'],
    position: { top: '47%', left: '55%' }
  },
  'meghalaya': {
    name: 'Meghalaya',
    capital: 'Shillong',
    culture: 'Khasi Heritage & Matrilineal Society',
    highlights: ['Living Bridges', 'Matrilineal Culture', 'Music'],
    position: { top: '40%', left: '55%' }
  },
  'sikkim': {
    name: 'Sikkim',
    capital: 'Gangtok',
    culture: 'Buddhist Heritage & Mountain Culture',
    highlights: ['Monasteries', 'Organic Farming', 'Mountain Views'],
    position: { top: '35%', left: '48%' }
  },
  'delhi': {
    name: 'Delhi',
    capital: 'New Delhi',
    culture: 'Mughal Heritage & Modern Capital',
    highlights: ['Red Fort', 'India Gate', 'Street Food'],
    position: { top: '28%', left: '32%' }
  }
};

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (stateId) => {
    const meta = stateMeta[stateId];
    if (meta) {
      setSelectedState({ id: stateId, ...meta });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-saffron-600 to-emerald-600 bg-clip-text text-transparent">
          Interactive Cultural Map of India
        </h2>
        <p className="text-xl text-gray-600 mt-4">
          Click on any state marker to discover its capital, culture, and heritage.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Map Container */}
        <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/lovable-uploads/0cdd8dc8-3510-4a1b-86ea-768b4c952447.png"
            alt="India Map"
            className="w-full h-full object-contain"
          />
          
          {/* State Markers */}
          {Object.entries(stateMeta).map(([stateId, state]) => (
            <button
              key={stateId}
              onClick={() => handleStateClick(stateId)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{
                top: state.position.top,
                left: state.position.left
              }}
            >
              <div className="relative">
                <div className="w-4 h-4 bg-saffron-500 rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-all duration-300 group-hover:bg-emerald-500"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  {state.name}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Info Panel */}
        <div className="space-y-6">
          {selectedState ? (
            <Card className="shadow-2xl bg-gradient-to-br from-white to-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="mr-2 text-saffron-600" />
                  {selectedState.name}
                </CardTitle>
                <p className="text-gray-600 font-medium text-lg">{selectedState.culture}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Capital:</span> {selectedState.capital}
                </p>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-gray-800 flex items-center mb-3">
                    <Palette className="mr-2 text-emerald-500" size={16} />
                    Cultural Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedState.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm border border-orange-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mb-4">
                    <Button variant="outline" className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                      <Camera className="mr-2 h-4 w-4" />
                      View Gallery
                    </Button>
                    <Button variant="outline" className="flex-1 border-saffron-200 text-saffron-700 hover:bg-saffron-50">
                      <Music className="mr-2 h-4 w-4" />
                      Cultural Music
                    </Button>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-saffron-500 to-orange-600 text-white hover:from-saffron-600 hover:to-orange-700">
                    <Info className="mr-2 h-4 w-4" />
                    Explore {selectedState.name} Heritage
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl bg-gradient-to-br from-white to-amber-50 text-center py-12 border-amber-200">
              <MapPin className="mx-auto mb-4 text-saffron-400 animate-pulse" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore India's Diverse States</h3>
              <p className="text-gray-600 mb-4">
                Click on any state marker on the map to discover its capital, culture, and highlights.
              </p>
              <div className="text-sm text-gray-500 grid grid-cols-2 gap-2 max-w-sm mx-auto">
                <div>📍 28 States</div>
                <div>🏛️ 8 Union Territories</div>
                <div>🎭 Rich Cultural Heritage</div>
                <div>🏰 Historic Capitals</div>
              </div>
            </Card>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: 28, label: 'States', Icon: MapPin },
              { num: 8, label: 'Union Territories', Icon: Palette },
              { num: 22, label: 'Official Languages', Icon: Music },
            ].map(({ num, label, Icon }) => (
              <Card key={label} className="text-center p-4 shadow-lg bg-gradient-to-br from-white to-emerald-50 border-emerald-200">
                <Icon className="mx-auto mb-2 text-emerald-500 animate-pulse" size={24} />
                <div className="text-2xl font-bold bg-gradient-to-r from-saffron-600 to-emerald-600 bg-clip-text text-transparent">{num}</div>
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
