import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

// Add missing Landmark component as a simple icon replacement
const Landmark = ({ className, size }: { className?: string; size?: number }) => (
  <Building2 className={className} size={size} />
);

const Haryana = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState<any>(null);

  const attractions = [
    {
      name: 'Sultanpur National Park',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Sultanpur_Bird_Sanctuary%2C_Gurgaon.jpg',
      description: 'Popular bird sanctuary with migratory birds and wetlands',
      location: 'Gurgaon District'
    },
    {
      name: 'Kurukshetra',
      image: 'https://t4.ftcdn.net/jpg/02/51/00/69/360_F_251006953_LFeVCrQ2VyRHx3G97etUMKLpzQK7LQmX.jpg',
      description: 'Mythological battlefield of Mahabharata with historical temples and sarovars',
      location: 'Kurukshetra'
    },
    {
      name: 'Kingdom of Dreams',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Culture_Gully_and_Nautanki_Mahal_auditorium%2C_Kingdom_of_Dreams%2C_Gurgaon.jpg',
      description: 'India\'s first live entertainment, theatre and leisure destination',
      location: 'Gurugram'
    },
    {
      name: 'Morni Hills',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/58/ae/62/morni-hills.jpg?w=1200&h=-1&s=1',
      description: 'Scenic hill station with lakes, hiking trails and greenery',
      location: 'Panchkula'
    },
    {
      name: 'Panipat War Memorial',
      image: 'https://images.wanderon.in/blogs/new/2024/08/explore-panipat-battlefield-memorial.jpg',
      description: 'Memorial honoring the historic battles of Panipat',
      location: 'Panipat'
    }
  ];

  const economicData = [
    { sector: 'Agriculture', percentage: 35, description: 'Wheat, rice, sugarcane, dairy', color: 'from-green-400 to-yellow-500' },
    { sector: 'Industry', percentage: 30, description: 'Textiles, auto parts, light engineering', color: 'from-gray-500 to-gray-800' },
    { sector: 'IT & Services', percentage: 15, description: 'Gurgaon as a corporate and tech hub', color: 'from-blue-500 to-indigo-600' },
    { sector: 'Real Estate', percentage: 10, description: 'Rapid urbanization around NCR', color: 'from-orange-400 to-pink-500' },
    { sector: 'Tourism & Heritage', percentage: 10, description: 'Historical and spiritual tourism', color: 'from-purple-400 to-purple-600' }
  ];

  const culturalElements = [
    {
      title: 'Folk Traditions',
      icon: Music,
      items: ['Ragini singing', 'Saang (folk theatre)', 'Dhamal dance'],
      image: 'https://www.gosahin.com/go/p/e/1541274609_Saang-Dance1.jpg',
      gradient: 'from-yellow-600 to-red-500'
    },
    {
      title: 'Festivals',
      icon: Star,
      items: ['Teej', 'Holi', 'Gita Jayanti'],
      image: 'https://cdn.shopify.com/s/files/1/0597/5592/1540/files/teej_celebration_1024x1024.jpg?v=1722581693',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      title: 'Crafts & Handlooms',
      icon: Utensils,
      items: ['Phulkari embroidery', 'Handwoven dhurries', 'Terracotta ware'],
      image: 'https://miro.medium.com/max/1000/1*fQtB756C-SfRU57LiA1l7g.jpeg',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Cuisine',
      icon: Utensils,
      items: ['Bajre ki roti', 'Lassi', 'Churma', 'Kadhi'],
      image: 'https://hashtagmagazine.in/wp-content/uploads/2022/04/local-food-of-haryana.png',
      gradient: 'from-orange-500 to-yellow-600'
    }
  ];

  const politicalStructure = [
    {
      title: 'Statehood Status',
      icon: Flag,
      description: 'Formed on November 1, 1966 after bifurcation from Punjab',
      details: [
        'One of the newest states in North India',
        'Unicameral legislature with 90 MLAs',
        'Chief Minister leads executive'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Administrative Divisions',
      icon: Building2,
      description: '22 districts with focus on NCR belt',
      details: [
        'Major cities: Chandigarh (shared), Gurgaon, Faridabad',
        'Subdivisions: Tehsils and Blocks'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Governance Structure',
      icon: Users2,
      description: 'Democratic framework under Indian Constitution',
      details: [
        'Governor as ceremonial head',
        'District-level Zila Parishads & Municipal bodies',
        'Efficient bureaucratic machinery'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Electoral System',
      icon: Vote,
      description: 'First-past-the-post system with active participation',
      details: [
        'Lok Sabha: 10 seats',
        'Rajya Sabha: 5 seats',
        'Assembly: 90 seats'
      ],
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const politicalParties = [
    { name: 'Bharatiya Janata Party (BJP)', region: 'Ruling party (2023)', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Indian National Congress (INC)', region: 'Main opposition', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Jannayak Janta Party (JJP)', region: 'Coalition partner (2023)', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Indian National Lok Dal (INLD)', region: 'Regional influence', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Farmers\' Protest Impact',
      description: 'Mass mobilization against central farm laws',
      impact: 'Political churn and shift in rural vote base',
      status: 'Laws repealed; tension persists'
    },
    {
      title: 'Land Acquisition Issues',
      description: 'Concerns over industrial and real estate expansion',
      impact: 'Farmer agitations and legal battles',
      status: 'Under negotiation and revision'
    },
    {
      title: 'Reservation Demands',
      description: 'Jat community demands OBC reservation',
      impact: 'Protests and social tensions',
      status: 'Under review by courts and commissions'
    },
    {
      title: 'Urban-Rural Development Gap',
      description: 'Growth in NCR vs neglect of rural areas',
      impact: 'Policy shifts and electoral campaigns',
      status: 'Addressed in state budget allocations'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Damaan, Kurti & Chunder',
      region: 'Haryanvi Women',
      description: 'Traditional three-piece attire with dupatta',
      features: ['Bright colors', 'Embroidery work', 'Silver ornaments'],
      image: 'https://5.imimg.com/data5/SELLER/PDFImage/2024/2/386783329/CD/QL/GA/7262992/haryanvi-dress-costume.png',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      name: 'Ghagra & Odhni',
      region: 'Rural women',
      description: 'Worn with nose rings and bangles during festivals',
      features: ['Colorful fabric', 'Worn with jewelry and anklets'],
      image: 'https://www.holidify.com/images/cmsuploads/compressed/village-india-201753_960_720_20170824121858.jpg',
      gradient: 'from-orange-400 to-yellow-500'
    },
    {
      name: 'Dhoti & Kurta',
      region: 'Traditional Men',
      description: 'Classic attire in rural areas',
      features: ['White or earthy colors', 'Paired with turban or pagri'],
      image: 'https://thumbs.dreamstime.com/b/faridabad-haryana-india-february-portrait-male-artists-performing-folk-dance-ethnic-dress-turban-302243296.jpg',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      name: 'Kurta-Pyjama with Nehru Jacket',
      region: 'Modern/urban Men',
      description: 'Common ceremonial and political wear',
      features: ['Linen or cotton', 'Worn during weddings and functions'],
      image: 'https://www.manyavar.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw97501dda/A%20Breakdown%20of%20Regional%20Indian%20Fashion%20Trends%20for%20Men_Blog%202.jpg',
      gradient: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50">
      <div className="bg-white/90 backdrop-blur-md border-b border-green-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/')} className="flex items-center space-x-2 hover:bg-green-50">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Landmark className="text-green-700" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  Haryana
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "The Land of Rotis, Wrestlers & Revolutions"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://www.nativeplanet.com/photos/412x309x100/2018/08/photo-92-162506-4.JPG)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-emerald-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to the Heartland of India</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover Haryana — where ancient epics, folk traditions, and modern enterprise blend into one.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 bg-white/70 backdrop-blur-sm h-auto p-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Overview</TabsTrigger>
              <TabsTrigger value="politics" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Politics</TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Culture</TabsTrigger>
              <TabsTrigger value="economy" className="data-[state=active]:bg-green-700 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Economy</TabsTrigger>
              <TabsTrigger value="tourism" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Tourism</TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Nature</TabsTrigger>
              <TabsTrigger value="society" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Society</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-lime-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Capital</h3>
                  <p className="text-sm text-green-700">Chandigarh (shared with Punjab)</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-lime-50 to-emerald-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-700 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-emerald-800">Population</h3>
                  <p className="text-sm text-emerald-700">~2.9 Crores<br />High rural density</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Mountain className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-yellow-800">Geography</h3>
                  <p className="text-sm text-yellow-700">Alluvial plains, Aravalli foothills<br />~44,212 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Languages</h3>
                  <p className="text-sm text-blue-700">Hindi, Haryanvi, Punjabi, English</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-green-600" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-lime-100 to-lime-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌸</div>
                    <h4 className="font-semibold text-lime-700 text-lg">Spring</h4>
                    <p className="text-sm text-lime-600">Feb-Mar<br />16–25°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🔥</div>
                    <h4 className="font-semibold text-yellow-700 text-lg">Summer</h4>
                    <p className="text-sm text-yellow-600">Apr-Jun<br />30–45°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-blue-600">Jul-Sep<br />Moderate rainfall</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">❄️</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
                    <p className="text-sm text-gray-600">Dec-Jan<br />5–20°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Politics Tab */}
          <TabsContent value="politics" className="space-y-6">
            {/* Political Structure Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {politicalStructure.map((structure, index) => {
                const IconComponent = structure.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <div className={`h-32 bg-gradient-to-r ${structure.color} relative`}>
                      <img 
                        src="https://images.unsplash.com/photo-1559294093-b79e4d1cf4c8?w=400&h=200&fit=crop" 
                        alt={structure.title}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="text-white" size={48} />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{structure.title}</CardTitle>
                      <p className="text-gray-600">{structure.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {structure.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center p-2 bg-gray-50 rounded-lg">
                            <Flag size={16} className="mr-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Major Political Parties */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users2 className="mr-3 text-green-600" size={32} />
                  Major Political Parties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {politicalParties.map((party, index) => (
                    <div key={index} className={`${party.color} p-4 rounded-xl hover:shadow-lg transition-all hover:scale-105`}>
                      <h4 className={`font-semibold text-lg mb-2 ${party.textColor}`}>{party.name}</h4>
                      <p className={`text-sm ${party.textColor} opacity-80`}>{party.region}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Political Features */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Building2 className="mr-3 text-orange-600" size={32} />
                  Key Political Features & Changes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyPoliticalFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-lime-100 p-6 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Historical' ? 'bg-gray-200 text-gray-700' :
                          feature.status === 'Implemented' ? 'bg-blue-200 text-blue-700' :
                          'bg-yellow-200 text-yellow-700'
                        }`}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{feature.description}</p>
                      <p className="text-sm text-gray-500 italic">Impact: {feature.impact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Administration & Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-green-50 to-lime-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Current Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">👤 Governor: Appointed by President</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Legislative Assembly (90 Seats)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ Punjab & Haryana High Court</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📋 Active Zila Parishads & Panchayats</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏘️ 22 Districts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    Electoral Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~1.84 Crores</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 90</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 10</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~20,000+</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Political Parties: 15+</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Culture Tab */}
          <TabsContent value="culture" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {culturalElements.map((element, index) => {
                const IconComponent = element.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <div className={`h-32 bg-gradient-to-r ${element.gradient} relative`}>
                      <img 
                        src={element.image} 
                        alt={element.title}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="text-white" size={48} />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{element.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {element.items.map((item, idx) => (
                          <li key={idx} className="flex items-center p-2 bg-gray-50 rounded-lg">
                            <Star size={16} className="mr-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Traditional Dresses Section */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <span className="text-2xl mr-3">👘</span>
                  Traditional Dresses & Attire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {traditionalDresses.map((dress, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                      <div className={`h-32 bg-gradient-to-r ${dress.gradient} relative`}>
                        <img 
                          src={dress.image} 
                          alt={dress.name}
                          className="w-full h-full object-cover opacity-40"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{dress.name}</CardTitle>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {dress.region}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{dress.description}</p>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-800">Key Features:</h5>
                          <ul className="grid grid-cols-2 gap-2">
                            {dress.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Utensils className="mr-3 text-green-600" size={32} />
                  Traditional Cuisine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: 'Bajre ki Roti & Sarson da Saag', emoji: '🌾' },
                    { name: 'Kadhi Pakora', emoji: '🍲' },
                    { name: 'Besan Masala Roti', emoji: '🥘' },
                    { name: 'Churma & Lassi', emoji: '🥣' },
                    { name: 'Ghevar (Festive Sweet)', emoji: '🍯' },
                    { name: 'Hara Dhania Cholia', emoji: '🌿' }
                  ].map((dish, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-lime-100 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                      <div className="text-3xl mb-2">{dish.emoji}</div>
                      <h4 className="font-semibold text-green-700 text-lg">{dish.name}</h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Economy Tab */}
          <TabsContent value="economy" className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Coins className="mr-3 text-green-500" size={32} />
                  Economic Sectors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {economicData.map((sector, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-lg">{sector.sector}</div>
                        <div className="font-bold text-xl">{sector.percentage}%</div>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-6 mb-2">
                        <div 
                          className={`bg-gradient-to-r ${sector.color} h-6 rounded-full transition-all duration-1000 flex items-center justify-end pr-2`}
                          style={{ width: `${sector.percentage}%` }}
                        >
                          <span className="text-white text-xs font-bold">{sector.percentage}%</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{sector.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Agricultural Products */}
              <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🌾</span>
                    Agricultural Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🌾 Wheat & Rice (Staple crops)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌽 Maize & Bajra</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🥬 Mustard & Barley</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍅 Vegetables & Fruits (especially Guava & Citrus)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🐄 Dairy & Livestock Products</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Handicrafts */}
              <Card className="border-0 bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🧵</span>
                    Handicrafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🪢 Phulkari Embroidery</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪔 Terracotta & Clay Pottery</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪑 Wood Carving & Furniture</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧣 Traditional Weaving & Durries</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🎭 Folk Toys & Puppets</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Industries */}
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏭</span>
                    Industries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🚗 Automobile & Auto Components (e.g., Maruti Suzuki)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Manufacturing & Engineering</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">💻 IT & Electronics (Gurugram hub)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📦 Logistics & Warehousing</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚡ Renewable Energy & Power</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tourism Tab */}
          <TabsContent value="tourism" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map((attraction, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden group"
                  onClick={() => setSelectedAttraction(attraction)}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-xl">{attraction.name}</h3>
                      <p className="text-sm opacity-90 flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {attraction.location}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4 bg-gradient-to-br from-white to-gray-50">
                    <p className="text-gray-600">{attraction.description}</p>
                    <div className="mt-3 flex justify-end">
                      <Camera className="text-blue-500" size={20} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedAttraction && (
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center text-2xl">
                      <Camera className="mr-3 text-blue-500" size={32} />
                      {selectedAttraction.name}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedAttraction(null)}
                      className="hover:bg-blue-100"
                    >
                      Close
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={selectedAttraction.image} 
                        alt={selectedAttraction.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 mb-4 text-lg">{selectedAttraction.description}</p>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <span className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                          <MapPin size={16} className="mr-2" />
                          {selectedAttraction.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Nature Tab */}
          <TabsContent value="nature" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Flora & Fauna Card */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-green-400 to-emerald-500 relative overflow-hidden">
                  <img 
                    src="https://haryanatourism.gov.in/wp-content/uploads/2024/07/bird_pic2.jpg" 
                    alt="Wildlife"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TreePine className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Flora & Fauna</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg">Wildlife</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦆</span>
                          <p className="text-sm mt-1">Migratory Birds (Sultanpur)</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦌</span>
                          <p className="text-sm mt-1">Blackbuck & Neelgai</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐍</span>
                          <p className="text-sm mt-1">Monitor Lizard & Snakes</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐒</span>
                          <p className="text-sm mt-1">Langurs & Monkeys</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌳</span>
                          <p className="text-sm mt-1">Peepal & Banyan Trees</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌿</span>
                          <p className="text-sm mt-1">Herbal & Medicinal Plants</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌻</span>
                          <p className="text-sm mt-1">Seasonal Flowers</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌾</span>
                          <p className="text-sm mt-1">Grasses & Agro Species</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Geographic Features Card */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                  <img 
                    src="https://media.istockphoto.com/id/648001532/photo/farmer-walking-in-the-field-in-the-morning.jpg?s=612x612&w=0&k=20&c=6-CO0VC6jSGcUc_xyh2bzzY5tj8ICDaxclZBzzK6fzI=" 
                    alt="Geography"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mountain className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Geographic Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Mountain size={20} className="mr-3 text-blue-500" />
                      <span>Shivalik Hills (North Haryana)</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                      <span>Alluvial Plains & Agricultural Fields</span>
                    </li>
                    <li className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="w-5 h-5 bg-yellow-400 rounded mr-3"></span>
                      <span>Yamuna & Ghaggar Rivers</span>
                    </li>
                    <li className="flex items-center p-3 bg-indigo-50 rounded-lg">
                      <span className="w-5 h-5 bg-indigo-400 rounded mr-3"></span>
                      <span>Aravalli Ranges (South Haryana)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Protected Areas & Parks */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Protected Areas & Wildlife Sanctuaries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Sultanpur National Park',
                    'Kalesar National Park',
                    'Bir Shikargah Wildlife Sanctuary',
                    'Bhindawas Bird Sanctuary',
                    'Abubshehar Wildlife Sanctuary',
                    'Chhilchhila Wildlife Sanctuary'
                  ].map((park, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
                      <span className="text-2xl mb-2 block">🌿</span>
                      <span className="text-green-700 font-medium">{park}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Society Tab */}
          <TabsContent value="society" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Demographics Card */}
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="mr-3 text-blue-500" size={28} />
                    Demographics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">📚</span>
                        Literacy Rate
                      </span>
                      <span className="font-bold text-blue-600 text-lg">76.6%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">34.8%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">65.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Major Festivals Card */}
              <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Calendar className="mr-3 text-purple-500" size={28} />
                    Major Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { name: 'Surajkund Mela', emoji: '🎨' },
                      { name: 'Holi & Diwali', emoji: '🪔' },
                      { name: 'Baisakhi', emoji: '🌾' },
                      { name: 'Teej', emoji: '🌸' },
                      { name: 'Lohri', emoji: '🔥' }
                    ].map((festival, index) => (
                      <li key={index} className="flex items-center p-3 bg-white/70 rounded-lg">
                        <span className="text-xl mr-3">{festival.emoji}</span>
                        <span>{festival.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Traditional Arts & Crafts Card */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Music className="mr-3 text-indigo-500" size={32} />
                  Traditional Arts & Crafts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Music & Dance */}
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-indigo-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎵</span>
                      Music & Dance
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Ragini Folk Songs</li>
                      <li className="bg-white/60 p-2 rounded">Phag & Dhamal Dances</li>
                      <li className="bg-white/60 p-2 rounded">Jhumar & Loor</li>
                      <li className="bg-white/60 p-2 rounded">Been & Dholak Music</li>
                    </ul>
                  </div>

                  {/* Handicrafts */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Phulkari Embroidery</li>
                      <li className="bg-white/60 p-2 rounded">Clay Pottery</li>
                      <li className="bg-white/60 p-2 rounded">Wooden Furniture & Toys</li>
                      <li className="bg-white/60 p-2 rounded">Woven Durries & Baskets</li>
                    </ul>
                  </div>

                  {/* Oral Literature */}
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Oral Literature
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Haryanvi Proverbs</li>
                      <li className="bg-white/60 p-2 rounded">Folktales & Rural Legends</li>
                      <li className="bg-white/60 p-2 rounded">Folk Songs on Harvest & Heroes</li>
                      <li className="bg-white/60 p-2 rounded">Jaat & Pehlwan Narratives</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Haryana;