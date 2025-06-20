
import React, { useState } from 'react';
import { MapPin, Info, Camera, Music, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const states = [
    // Northern States - Repositioned accurately
    {
      id: 'jammu-kashmir',
      name: 'Jammu & Kashmir',
      capital: 'Srinagar (Summer), Jammu (Winter)',
      position: { top: '15%', left: '25%' },
      culture: 'Himalayan Culture & Sufi Heritage',
      highlights: ['Kashmiri Handicrafts', 'Sufi Music', 'Alpine Beauty'],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'ladakh',
      name: 'Ladakh',
      capital: 'Leh',
      position: { top: '18%', left: '35%' },
      culture: 'Buddhist Monasteries & High Altitude Culture',
      highlights: ['Monasteries', 'Buddhist Art', 'Mountain Culture'],
      color: 'from-purple-400 to-blue-500'
    },
    {
      id: 'himachal-pradesh',
      name: 'Himachal Pradesh',
      capital: 'Shimla',
      position: { top: '22%', left: '30%' },
      culture: 'Hill Station Heritage & Pahari Culture',
      highlights: ['Hill Stations', 'Folk Dance', 'Apple Orchards'],
      color: 'from-green-400 to-teal-500'
    },
    {
      id: 'punjab',
      name: 'Punjab',
      capital: 'Chandigarh',
      position: { top: '25%', left: '28%' },
      culture: 'Sikh Heritage & Agricultural Prosperity',
      highlights: ['Bhangra', 'Golden Temple', 'Farming Culture'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'haryana',
      name: 'Haryana',
      capital: 'Chandigarh',
      position: { top: '28%', left: '30%' },
      culture: 'Ancient Civilization & Modern Agriculture',
      highlights: ['Kurukshetra', 'Wrestling', 'Folk Music'],
      color: 'from-amber-400 to-yellow-500'
    },
    {
      id: 'uttarakhand',
      name: 'Uttarakhand',
      capital: 'Dehradun',
      position: { top: '25%', left: '33%' },
      culture: 'Spiritual Centers & Mountain Culture',
      highlights: ['Yoga Centers', 'Pilgrimage Sites', 'Hill Culture'],
      color: 'from-emerald-400 to-green-500'
    },
    {
      id: 'uttar-pradesh',
      name: 'Uttar Pradesh',
      capital: 'Lucknow',
      position: { top: '32%', left: '35%' },
      culture: 'Mughal Heritage & Spiritual Centers',
      highlights: ['Taj Mahal', 'Lucknowi Culture', 'Classical Music'],
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 'delhi',
      name: 'Delhi',
      capital: 'New Delhi',
      position: { top: '29%', left: '31%' },
      culture: 'Capital Heritage & Cosmopolitan Culture',
      highlights: ['Red Fort', 'Street Food', 'Modern Arts'],
      color: 'from-red-400 to-pink-500'
    },

    // Eastern States - Repositioned accurately
    {
      id: 'bihar',
      name: 'Bihar',
      capital: 'Patna',
      position: { top: '36%', left: '43%' },
      culture: 'Ancient Learning & Buddhist Heritage',
      highlights: ['Nalanda', 'Madhubani Art', 'Buddhist Sites'],
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 'jharkhand',
      name: 'Jharkhand',
      capital: 'Ranchi',
      position: { top: '42%', left: '43%' },
      culture: 'Tribal Heritage & Mineral Wealth',
      highlights: ['Tribal Art', 'Folk Dance', 'Handicrafts'],
      color: 'from-teal-400 to-cyan-500'
    },
    {
      id: 'west-bengal',
      name: 'West Bengal',
      capital: 'Kolkata',
      position: { top: '38%', left: '48%' },
      culture: 'Literature & Intellectual Renaissance',
      highlights: ['Durga Puja', 'Literature', 'Sweets'],
      color: 'from-pink-400 to-purple-500'
    },
    {
      id: 'odisha',
      name: 'Odisha',
      capital: 'Bhubaneswar',
      position: { top: '45%', left: '45%' },
      culture: 'Temple Architecture & Classical Dance',
      highlights: ['Jagannath Temple', 'Odissi Dance', 'Sand Art'],
      color: 'from-indigo-400 to-purple-500'
    },

    // Northeastern States - Repositioned accurately
    {
      id: 'sikkim',
      name: 'Sikkim',
      capital: 'Gangtok',
      position: { top: '30%', left: '50%' },
      culture: 'Buddhist Culture & Organic Farming',
      highlights: ['Monasteries', 'Organic Produce', 'Mountain Culture'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 'assam',
      name: 'Assam',
      capital: 'Dispur',
      position: { top: '33%', left: '55%' },
      culture: 'Tea Gardens & Assamese Culture',
      highlights: ['Tea Culture', 'Bihu Dance', 'Silk Weaving'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'arunachal-pradesh',
      name: 'Arunachal Pradesh',
      capital: 'Itanagar',
      position: { top: '27%', left: '60%' },
      culture: 'Tribal Diversity & Buddhist Influence',
      highlights: ['Tribal Culture', 'Buddhist Monasteries', 'Handicrafts'],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'nagaland',
      name: 'Nagaland',
      capital: 'Kohima',
      position: { top: '32%', left: '58%' },
      culture: 'Warrior Tribes & Hornbill Festival',
      highlights: ['Hornbill Festival', 'Tribal Art', 'Warrior Culture'],
      color: 'from-red-400 to-orange-500'
    },
    {
      id: 'manipur',
      name: 'Manipur',
      capital: 'Imphal',
      position: { top: '35%', left: '58%' },
      culture: 'Classical Dance & Martial Arts',
      highlights: ['Manipuri Dance', 'Polo Sport', 'Handloom'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'mizoram',
      name: 'Mizoram',
      capital: 'Aizawl',
      position: { top: '38%', left: '56%' },
      culture: 'Mizo Culture & Bamboo Crafts',
      highlights: ['Bamboo Crafts', 'Folk Songs', 'Mizo Culture'],
      color: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'tripura',
      name: 'Tripura',
      capital: 'Agartala',
      position: { top: '40%', left: '53%' },
      culture: 'Royal Heritage & Tribal Culture',
      highlights: ['Ujjayanta Palace', 'Tribal Dance', 'Handloom'],
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 'meghalaya',
      name: 'Meghalaya',
      capital: 'Shillong',
      position: { top: '35%', left: '53%' },
      culture: 'Living Root Bridges & Matrilineal Society',
      highlights: ['Living Bridges', 'Music Culture', 'Matrilineal Society'],
      color: 'from-teal-400 to-green-500'
    },

    // Western States - Repositioned accurately
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      capital: 'Jaipur',
      position: { top: '32%', left: '25%' },
      culture: 'Desert Culture & Royal Heritage',
      highlights: ['Palaces', 'Folk Music', 'Desert Culture'],
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 'gujarat',
      name: 'Gujarat',
      capital: 'Gandhinagar',
      position: { top: '38%', left: '22%' },
      culture: 'Business Acumen & Gandhian Philosophy',
      highlights: ['Garba Dance', 'Business Culture', 'Handicrafts'],
      color: 'from-yellow-400 to-amber-500'
    },
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      capital: 'Mumbai',
      position: { top: '45%', left: '28%' },
      culture: 'Bollywood & Marathi Heritage',
      highlights: ['Bollywood', 'Ganpati Festival', 'Marathi Theatre'],
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 'goa',
      name: 'Goa',
      capital: 'Panaji',
      position: { top: '52%', left: '26%' },
      culture: 'Portuguese Heritage & Beach Culture',
      highlights: ['Portuguese Architecture', 'Beach Culture', 'Carnival'],
      color: 'from-cyan-400 to-blue-500'
    },

    // Central States - Repositioned accurately
    {
      id: 'madhya-pradesh',
      name: 'Madhya Pradesh',
      capital: 'Bhopal',
      position: { top: '40%', left: '33%' },
      culture: 'Heart of India & Ancient Temples',
      highlights: ['Khajuraho Temples', 'Tribal Art', 'Wildlife'],
      color: 'from-green-400 to-teal-500'
    },
    {
      id: 'chhattisgarh',
      name: 'Chhattisgarh',
      capital: 'Raipur',
      position: { top: '43%', left: '38%' },
      culture: 'Tribal Heritage & Folk Arts',
      highlights: ['Tribal Dance', 'Folk Music', 'Handicrafts'],
      color: 'from-emerald-400 to-green-500'
    },

    // Southern States - Repositioned accurately
    {
      id: 'telangana',
      name: 'Telangana',
      capital: 'Hyderabad',
      position: { top: '50%', left: '34%' },
      culture: 'Nizami Heritage & IT Hub',
      highlights: ['Nizami Culture', 'Biryani', 'IT Culture'],
      color: 'from-purple-400 to-indigo-500'
    },
    {
      id: 'andhra-pradesh',
      name: 'Andhra Pradesh',
      capital: 'Amaravati',
      position: { top: '55%', left: '36%' },
      culture: 'Classical Dance & Coastal Heritage',
      highlights: ['Kuchipudi Dance', 'Coastal Culture', 'Spicy Cuisine'],
      color: 'from-orange-400 to-yellow-500'
    },
    {
      id: 'karnataka',
      name: 'Karnataka',
      capital: 'Bengaluru',
      position: { top: '55%', left: '30%' },
      culture: 'Garden City & Carnatic Music',
      highlights: ['Classical Music', 'Silk Sarees', 'IT Capital'],
      color: 'from-red-400 to-pink-500'
    },
    {
      id: 'kerala',
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      position: { top: '62%', left: '28%' },
      culture: 'Backwaters & Spice Heritage',
      highlights: ['Kathakali', 'Ayurveda', 'Spices'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      capital: 'Chennai',
      position: { top: '60%', left: '33%' },
      culture: 'Temple Architecture & Classical Arts',
      highlights: ['Bharatanatyam', 'Temples', 'Classical Literature'],
      color: 'from-blue-400 to-indigo-500'
    },

    // Union Territories - Repositioned accurately
    {
      id: 'andaman-nicobar',
      name: 'Andaman & Nicobar',
      capital: 'Port Blair',
      position: { top: '70%', left: '55%' },
      culture: 'Island Culture & Marine Heritage',
      highlights: ['Island Culture', 'Marine Life', 'Tribal Heritage'],
      color: 'from-cyan-400 to-teal-500'
    },
    {
      id: 'lakshadweep',
      name: 'Lakshadweep',
      capital: 'Kavaratti',
      position: { top: '65%', left: '20%' },
      culture: 'Coral Islands & Marine Culture',
      highlights: ['Coral Reefs', 'Island Life', 'Marine Culture'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'puducherry',
      name: 'Puducherry',
      capital: 'Puducherry',
      position: { top: '58%', left: '34%' },
      culture: 'French Colonial Heritage',
      highlights: ['French Architecture', 'Spiritual Centers', 'Colonial Culture'],
      color: 'from-pink-400 to-purple-500'
    },
    {
      id: 'dadra-nagar-haveli',
      name: 'Dadra & Nagar Haveli',
      capital: 'Silvassa',
      position: { top: '42%', left: '25%' },
      culture: 'Tribal Culture & Nature Heritage',
      highlights: ['Tribal Art', 'Nature Reserves', 'Folk Culture'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'daman-diu',
      name: 'Daman & Diu',
      capital: 'Daman',
      position: { top: '40%', left: '23%' },
      culture: 'Portuguese Heritage & Coastal Culture',
      highlights: ['Portuguese Forts', 'Beach Culture', 'Colonial Architecture'],
      color: 'from-amber-400 to-orange-500'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Interactive Cultural Map of India
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore all 28 states and 8 union territories of India. Click on any region to discover its capital, culture, and heritage
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Interactive Map */}
        <div className="relative">
          <div className="relative w-full h-[600px] bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl border-4 border-saffron-200 overflow-hidden shadow-2xl">
            {/* India outline - SVG based map */}
            <div className="absolute inset-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border-2 border-emerald-200 relative overflow-hidden">
              
              {/* SVG India Map */}
              <svg 
                viewBox="0 0 400 500" 
                className="absolute inset-0 w-full h-full"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              >
                {/* India Outline Path */}
                <path
                  d="M200 50 L230 60 L250 45 L280 55 L320 70 L340 90 L350 120 L360 150 L350 180 L340 200 L320 220 L300 240 L280 260 L260 280 L240 300 L220 320 L200 340 L180 360 L160 370 L140 365 L120 355 L100 340 L85 320 L75 300 L70 280 L65 260 L60 240 L55 220 L50 200 L45 180 L50 160 L60 140 L75 120 L90 105 L110 90 L130 80 L150 70 L170 60 Z"
                  fill="url(#indiaGradient)"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="50%" stopColor="#fed7aa" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                
                {/* Decorative Border Pattern */}
                <circle cx="50" cy="100" r="3" fill="#f97316" opacity="0.3" />
                <circle cx="350" cy="150" r="3" fill="#10b981" opacity="0.3" />
                <circle cx="180" cy="400" r="3" fill="#3b82f6" opacity="0.3" />
              </svg>
              
              {/* State/UT markers - Now properly positioned */}
              {states.map((state) => (
                <button
                  key={state.id}
                  onClick={() => setSelectedState(state)}
                  className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${state.color} 
                    animate-pulse hover:scale-150 transition-all duration-300 cursor-pointer z-10
                    border-2 border-white shadow-lg
                    ${selectedState?.id === state.id ? 'scale-150 animate-ping' : ''}
                  `}
                  style={state.position}
                >
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 
                    bg-white px-3 py-2 rounded-lg text-xs font-medium shadow-xl opacity-0 
                    hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20
                    border border-gray-200">
                    <div className="font-semibold text-gray-800">{state.name}</div>
                    <div className="text-gray-600 text-xs">{state.capital}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                      w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </button>
              ))}
              
              {/* Region labels - repositioned */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-600 bg-white/80 px-3 py-1 rounded-full">
                Northern India
              </div>
              <div className="absolute top-1/3 right-4 text-sm font-semibold text-gray-600 bg-white/80 px-3 py-1 rounded-full transform rotate-90 origin-center">
                Eastern India
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-600 bg-white/80 px-3 py-1 rounded-full">
                Southern India
              </div>
              <div className="absolute top-1/2 left-4 text-sm font-semibold text-gray-600 bg-white/80 px-3 py-1 rounded-full transform -rotate-90 origin-center">
                Western India
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Complete Interactive Map of India - 28 States & 8 Union Territories
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-3 h-3 bg-gradient-to-r from-saffron-400 to-orange-500 rounded-full mr-2 animate-pulse"></div>
                States
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mr-2 animate-pulse"></div>
                Union Territories
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2 animate-pulse"></div>
                Cultural Regions
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
                <div className="space-y-1">
                  <p className="text-gray-600 font-medium">{selectedState.culture}</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Capital:</span> {selectedState.capital}
                  </p>
                </div>
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
                      Cultural Music
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
                  Explore India's Diverse States
                </h3>
                <p className="text-gray-600 mb-4">
                  Click on any state or union territory to discover its capital, culture, and unique heritage
                </p>
                <div className="text-sm text-gray-500">
                  <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
                    <div>📍 28 States</div>
                    <div>🏛️ 8 Union Territories</div>
                    <div>🎭 Rich Cultural Heritage</div>
                    <div>🏰 Historic Capitals</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { number: "28", label: "States", icon: MapPin },
              { number: "8", label: "Union Territories", icon: Palette },
              { number: "22", label: "Official Languages", icon: Music }
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
