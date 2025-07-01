import React, { useState } from 'react';
import { MapPin, Info, Camera, Music, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const stateMeta = {
  'jammu-and-kashmir': {
    name: 'Jammu & Kashmir',
    capital: 'Srinagar (Summer), Jammu (Winter)',
    culture: 'Himalayan Culture & Sufi Heritage',
    highlights: ['Kashmiri Handicrafts', 'Sufi Music', 'Alpine Beauty'],
    position: { top: '14%', left: '28%' }
  },
  'ladakh': {
    name: 'Ladakh',
    capital: 'Leh',
    culture: 'Buddhist Monasteries & High Altitude Culture',
    highlights: ['Monasteries', 'Buddhist Art', 'Mountain Culture'],
    position: { top: '12%', left: '37%' }
  },
  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    culture: 'Hill Station Culture & Pahari Traditions',
    highlights: ['Hill Stations', 'Pahari Culture', 'Adventure Sports'],
    position: { top: '19%', left: '36%' }
  },
  'punjab': {
    name: 'Punjab',
    capital: 'Chandigarh',
    culture: 'Sikh Heritage & Punjabi Culture',
    highlights: ['Golden Temple', 'Bhangra', 'Punjabi Cuisine'],
    position: { top: '22%', left: '30%' }
  },
  'haryana': {
    name: 'Haryana',
    capital: 'Chandigarh',
    culture: 'Agricultural Heritage & Folk Traditions',
    highlights: ['Folk Music', 'Wrestling', 'Agriculture'],
    position: { top: '30%', left: '33%' }
  },
  'rajasthan': {
    name: 'Rajasthan',
    capital: 'Jaipur',
    culture: 'Royal Heritage & Desert Culture',
    highlights: ['Royal Palaces', 'Desert Safari', 'Folk Dance'],
    position: { top: '35%', left: '28%' }
  },
  'gujarat': {
    name: 'Gujarat',
    capital: 'Gandhinagar',
    culture: 'Gujarati Heritage & Business Culture',
    highlights: ['Navratri', 'Handicrafts', 'Business Hub'],
    position: { top: '44%', left: '22%' }
  },
  'maharashtra': {
    name: 'Maharashtra',
    capital: 'Mumbai',
    culture: 'Bollywood & Marathi Heritage',
    highlights: ['Bollywood', 'Ganpati Festival', 'Marathi Theatre'],
    position: { top: '55%', left: '37%' }
  },
  'madhya-pradesh': {
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    culture: 'Central Indian Heritage & Tribal Culture',
    highlights: ['Khajuraho', 'Tribal Art', 'Wildlife'],
    position: { top: '45%', left: '40%' }
  },
  'uttar-pradesh': {
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    culture: 'Mughal Heritage & Spiritual Centers',
    highlights: ['Taj Mahal', 'Lucknowi Culture', 'Classical Music'],
    position: { top: '35%', left: '47%' }
  },
  'bihar': {
    name: 'Bihar',
    capital: 'Patna',
    culture: 'Ancient Heritage & Buddhist Culture',
    highlights: ['Nalanda', 'Buddhist Sites', 'Madhubani Art'],
    position: { top: '37%', left: '59%' }
  },
  'jharkhand': {
    name: 'Jharkhand',
    capital: 'Ranchi',
    culture: 'Tribal Heritage & Mining Culture',
    highlights: ['Tribal Dance', 'Handicrafts', 'Natural Beauty'],
    position: { top: '44%', left: '58%' }
  },
  'west-bengal': {
    name: 'West Bengal',
    capital: 'Kolkata',
    culture: 'Bengali Heritage & Literary Culture',
    highlights: ['Durga Puja', 'Literature', 'Sweets'],
    position: { top: '45%', left: '65%' }
  },
  'odisha': {
    name: 'Odisha',
    capital: 'Bhubaneswar',
    culture: 'Temple Architecture & Classical Dance',
    highlights: ['Jagannath Temple', 'Odissi Dance', 'Temple Art'],
    position: { top: '53%', left: '55%' }
  },
  'chhattisgarh': {
    name: 'Chhattisgarh',
    capital: 'Raipur',
    culture: 'Tribal Heritage & Folk Traditions',
    highlights: ['Tribal Culture', 'Folk Dance', 'Handicrafts'],
    position: { top: '50%', left: '48%' }
  },
  'telangana': {
    name: 'Telangana',
    capital: 'Hyderabad',
    culture: 'Nizami Heritage & IT Culture',
    highlights: ['Charminar', 'Biryani', 'IT Hub'],
    position: { top: '60%', left: '42%' }
  },
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    culture: 'Telugu Heritage & Classical Arts',
    highlights: ['Kuchipudi', 'Tirupati', 'Spicy Cuisine'],
    position: { top: '70%', left: '39%' }
  },
  'karnataka': {
    name: 'Karnataka',
    capital: 'Bengaluru',
    culture: 'Tech Hub & Kannada Heritage',
    highlights: ['IT Capital', 'Classical Music', 'Mysore Palace'],
    position: { top: '70%', left: '31%' }
  },
  'goa': {
    name: 'Goa',
    capital: 'Panaji',
    culture: 'Portuguese Heritage & Beach Culture',
    highlights: ['Beaches', 'Carnival', 'Portuguese Architecture'],
    position: { top: '69%', left: '25%' }
  },
  'kerala': {
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    culture: 'Backwaters & Ayurvedic Heritage',
    highlights: ['Backwaters', 'Ayurveda', 'Kathakali'],
    position: { top: '85%', left: '32%' }
    
  },
  'tamil-nadu': {
    name: 'Tamil Nadu',
    capital: 'Chennai',
    culture: 'Dravidian Heritage & Temple Culture',
    highlights: ['Temples', 'Bharatanatyam', 'Tamil Literature'],
    position: { top: '87%', left: '38%' }
  },
  'assam': {
    name: 'Assam',
    capital: 'Dispur',
    culture: 'Tea Gardens & Assamese Culture',
    highlights: ['Tea Gardens', 'Bihu Festival', 'Silk'],
    position: { top: '35%', left: '74%' }
  },
  'arunachal-pradesh': {
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    culture: 'Tribal Heritage & Mountain Culture',
    highlights: ['Tribal Diversity', 'Monasteries', 'Natural Beauty'],
    position: { top: '27%', left: '85%' }
  },
  'nagaland': {
    name: 'Nagaland',
    capital: 'Kohima',
    culture: 'Naga Heritage & Warrior Culture',
    highlights: ['Hornbill Festival', 'Tribal Culture', 'Handicrafts'],
    position: { top: '35%', left: '86%' }
  },
  'manipur': {
    name: 'Manipur',
    capital: 'Imphal',
    culture: 'Manipuri Dance & Martial Arts',
    highlights: ['Manipuri Dance', 'Martial Arts', 'Loktak Lake'],
    position: { top: '41%', left: '83%' }
  },
  'mizoram': {
    name: 'Mizoram',
    capital: 'Aizawl',
    culture: 'Mizo Heritage & Bamboo Culture',
    highlights: ['Bamboo Dance', 'Tribal Culture', 'Hills'],
    position: { top: '46%', left: '80%' }
  },
  'tripura': {
    name: 'Tripura',
    capital: 'Agartala',
    culture: 'Bengali & Tribal Mix Culture',
    highlights: ['Ujjayanta Palace', 'Tribal Dance', 'Handicrafts'],
    position: { top: '47%', left: '77%' }
  },
  'meghalaya': {
    name: 'Meghalaya',
    capital: 'Shillong',
    culture: 'Khasi Heritage & Matrilineal Society',
    highlights: ['Living Bridges', 'Matrilineal Culture', 'Music'],
    position: { top: '40%', left: '73%' }
  },
  'sikkim': {
    name: 'Sikkim',
    capital: 'Gangtok',
    culture: 'Buddhist Heritage & Mountain Culture',
    highlights: ['Monasteries', 'Organic Farming', 'Mountain Views'],
    position: { top: '33%', left: '67%' }
  },
  // Union Territories
  'andaman-and-nicobar-islands': {
    name: 'Andaman & Nicobar Islands',
    capital: 'Port Blair',
    culture: 'Tribal Culture & Marine Heritage',
    highlights: ['Scuba Diving', 'Tribal Communities', 'Cellular Jail'],
    position: { top: '79%', left: '81%' }
  },
  'chandigarh': {
    name: 'Chandigarh',
    capital: 'Chandigarh',
    culture: 'Modern Urban Planning & Punjabi Heritage',
    highlights: ['Rock Garden', 'Capitol Complex', 'Rose Garden'],
    position: { top: '24%', left: '35%' }
  },
  'dadra-and-nagar-haveli-and-daman-and-diu': {
    name: 'Dadra & Nagar Haveli and Daman & Diu',
    capital: 'Daman',
    culture: 'Portuguese Influence & Tribal Culture',
    highlights: ['Coastal Beauty', 'Heritage Forts', 'Tribal Handicrafts'],
    position: { top: '56%', left: '23%' }
  },
  'delhi': {
    name: 'Delhi',
    capital: 'Delhi',
    culture: 'Historical Capital with Mughal & Modern Fusion',
    highlights: ['Red Fort', 'Qutub Minar', 'India Gate'],
    position: { top: '34%', left: '35%' }
  },
  'lakshadweep': {
    name: 'Lakshadweep',
    capital: 'Kavaratti',
    culture: 'Island Traditions with Arab Influence',
    highlights: ['Coral Reefs', 'Water Sports', 'Seafood Cuisine'],
    position: { top: '82%', left: '20%' }
  },
  'puducherry': {
    name: 'Puducherry',
    capital: 'Puducherry',
    culture: 'French Colonial Heritage & Tamil Culture',
    highlights: ['French Quarters', 'Auroville', 'Beaches'],
    position: { top: '81%', left: '43%' }
  },
  'uttarakhand': {
    name: 'Uttarakhand',
    capital: 'Dehradun',
    culture: 'Himalayan Spirituality & Folk Traditions',
    highlights: ['Char Dham Yatra', 'Ganga Aarti', 'Kumaoni & Garhwali Culture'],
    position: { top: '27%', left: '43%' }
  },
};

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const navigate = useNavigate();

  const handleStateClick = (stateId) => {
    const meta = stateMeta[stateId];
    if (meta) {
      setSelectedState({ id: stateId, ...meta });
    }
  };

  const handleExploreHeritage = () => {
    const routeMap = {
      'jammu-and-kashmir': '/jammu-kashmir',
      'delhi': '/delhi',
      'chandigarh': '/chandigarh',
      'puducherry': '/puducherry',
      'andaman-and-nicobar-islands': '/andaman-and-nicobar-islands',
      'lakshadweep': '/lakshadweep',
      'dadra-and-nagar-haveli-and-daman-and-diu': '/dadra-and-nagar-haveli-and-daman-and-diu',
      'ladakh': '/ladakh',
      'maharashtra': '/maharashtra',
       'karnataka': '/karnataka',
    'kerala': '/kerala',
    'manipur': '/manipur',
    'meghalaya': '/meghalaya',
    'mizoram': '/mizoram',
    'nagaland': '/nagaland',
    'odisha': '/odisha',
    'madhya-pradesh': '/madhya-pradesh',
    'uttar-pradesh': '/uttar-pradesh',
    'bihar': '/bihar',
    'goa': '/goa',
    'gujarat': '/gujarat',
    'haryana': '/haryana',
    'himachal-pradesh': '/himachal-pradesh',
    'jharkhand': '/jharkhand',
    'assam': '/assam',
    'arunachal-pradesh': '/arunachalpradesh',
    'chhattisgarh': '/chhattisgarh',
    'andhra-pradesh': '/andhra-pradesh',
    'uttarkhand': '/uttarkhand',
    'telangana': '/telangana',
    'tamil-nadu': '/tamil-nadu',
    'punjab': '/punjab',
    'west-bengal': '/westbengal',
    'sikkim': '/sikkim',
      'tripura': '/tripura',
      
    };

    const route = routeMap[selectedState?.id];
    if (route) {
      navigate(route);
    } else {
      // For states without dedicated pages yet
      console.log(`Exploring ${selectedState?.name} heritage`);
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="text-center mb-6 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-saffron-600 to-emerald-600 bg-clip-text text-transparent px-2">
          Interactive Cultural Map of India
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-4 px-2">
          Click on any state marker to discover its capital, culture, and heritage.
        </p>
      </div>

      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 lg:gap-12 items-start">
        {/* Map Container */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/lovable-uploads/india.png"
            alt="India Map"
            className="absolute inset-0 w-full h-full object-contain"
          />
          
          {/* State Markers */}
          {Object.entries(stateMeta).map(([stateId, state]) => (
            <button
              key={stateId}
              onClick={() => handleStateClick(stateId)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
              style={{
                top: state.position.top,
                left: state.position.left
              }}
            >
              <div className="relative flex flex-col items-center">
                {/* Orange circular pointer (turns green on hover) */}
                <div className="peer w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-orange-500 rounded-full border-2 border-white shadow-lg hover:scale-125 transition-all duration-300 hover:bg-emerald-500 hover:shadow-xl"></div>
                {/* State name visible only when hovering the dot, black background */}
                <span className="mb-2 px-2 py-0.5 bg-black text-white text-xs sm:text-sm rounded shadow border border-gray-800 whitespace-nowrap z-20 opacity-0 peer-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {state.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Info Panel */}
        <div className="space-y-4 sm:space-y-6 w-full order-1 xl:order-2">
          {selectedState ? (
            <Card className="shadow-2xl bg-gradient-to-br from-white to-orange-50 border-orange-200">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                  <MapPin className="mr-2 text-saffron-600 w-5 h-5 sm:w-6 sm:h-6" />
                  {selectedState.name}
                </CardTitle>
                <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">{selectedState.culture}</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  <span className="font-semibold">Capital:</span> {selectedState.capital}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div>
                  <h4 className="font-semibold text-gray-800 flex items-center mb-3 text-sm sm:text-base">
                    <Palette className="mr-2 text-emerald-500" size={16} />
                    Cultural Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedState.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 sm:px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm border border-orange-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
                    <Button variant="outline" className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-xs sm:text-sm">
                      <Camera className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View Gallery
                    </Button>
                    <Button variant="outline" className="flex-1 border-saffron-200 text-saffron-700 hover:bg-saffron-50 text-xs sm:text-sm">
                      <Music className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Cultural Music
                    </Button>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-saffron-500 to-orange-600 text-white hover:from-saffron-600 hover:to-orange-700 text-xs sm:text-sm"
                    onClick={handleExploreHeritage}
                  >
                    <Info className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Explore {selectedState.name} Heritage
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl bg-gradient-to-br from-white to-amber-50 text-center py-6 sm:py-12 border-amber-200">
              <MapPin className="mx-auto mb-4 text-saffron-400 animate-pulse" size={40} />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 px-2">Explore India's Diverse States</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base px-2">
                Click on any orange marker on the map to discover its capital, culture, and highlights.
              </p>
              <div className="text-xs sm:text-sm text-gray-500 grid grid-cols-2 gap-2 max-w-sm mx-auto px-2">
                <div>📍 28 States</div>
                <div>🏛️ 8 Union Territories</div>
                <div>🎭 Rich Cultural Heritage</div>
                <div>🏰 Historic Capitals</div>
              </div>
            </Card>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
  {[
    { num: 28, label: 'States', Icon: MapPin },
    { num: 8, label: 'Union Territories', Icon: Palette },
    { num: 22, label: 'Official Languages', Icon: Music },
  ].map(({ num, label, Icon }) =>
    label === 'Official Languages' ? (
      <button
        key={label}
        onClick={() => navigate('/official-languages')}
        className="text-center p-2 sm:p-4 shadow-lg bg-gradient-to-br from-white to-emerald-50 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        type="button"
      >
        <Icon className="mx-auto mb-1 sm:mb-2 text-emerald-500 animate-pulse" size={20} />
        <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-saffron-600 to-emerald-600 bg-clip-text text-transparent">{num}</div>
        <div className="text-xs sm:text-sm text-gray-600">{label}</div>
      </button>
    ) : (
      <Card key={label} className="text-center p-2 sm:p-4 shadow-lg bg-gradient-to-br from-white to-emerald-50 border-emerald-200">
        <Icon className="mx-auto mb-1 sm:mb-2 text-emerald-500 animate-pulse" size={20} />
        <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-saffron-600 to-emerald-600 bg-clip-text text-transparent">{num}</div>
        <div className="text-xs sm:text-sm text-gray-600">{label}</div>
      </Card>
    )
  )}
</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
