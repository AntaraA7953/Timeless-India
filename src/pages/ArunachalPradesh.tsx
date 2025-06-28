import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag,  Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const ArunachalPradesh = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    {
      name: 'Tawang Monastery',
      image: 'https://cdn.pixabay.com/photo/2022/01/01/15/08/tawang-monastery-6907759_1280.jpg',
      description: 'Largest monastery in India with serene Himalayan views',
      location: 'Tawang'
    },
    {
      name: 'Ziro Valley',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/A_cross_section_of_luch_green_valley_of_Ziro.jpg',
      description: 'Lush green valley known for Apatani culture and music festivals',
      location: 'Lower Subansiri'
    },
    {
      name: 'Namdapha National Park',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Forest_snow_Namdapha_IMG_3373_04.jpg',
      description: 'Diverse flora and fauna in a dense rainforest ecosystem',
      location: 'Changlang'
    },
    {
      name: 'Sela Pass',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Tawang_Gate.jpg',
      description: 'Stunning snow-covered mountain pass',
      location: 'Tawang'
    },
    {
      name: 'Itanagar Fort',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/ita-fort-itanagar-arunachal-pradesh-1-attr-hero?qlt=82&ts=1726743110286',
      description: 'Historical fort built by the Ahom dynasty',
      location: 'Itanagar'
    }
  ];

  const economicData = [
    { sector: 'Agriculture', percentage: 35, description: 'Rice, maize, pulses', color: 'from-green-400 to-green-600' },
    { sector: 'Tourism', percentage: 15, description: 'Cultural and eco-tourism hotspots', color: 'from-blue-400 to-blue-600' },
    { sector: 'Handicrafts', percentage: 10, description: 'Bamboo & cane products', color: 'from-purple-400 to-purple-600' },
    { sector: 'Horticulture', percentage: 20, description: 'Orchards, ginger, oranges', color: 'from-orange-400 to-orange-600' },
    { sector: 'Services', percentage: 20, description: 'Public services & education', color: 'from-indigo-400 to-indigo-600' }
  ];

  const culturalElements = [
    {
      title: 'Tribal Traditions',
      icon: Users,
      items: ['Apatani Nose Plugs', 'Nyishi Headgear', 'Galo Folk Songs'],
      image: 'https://www.holidify.com/images/cmsuploads/articles/259.jpg',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'Festivals & Rituals',
      icon: Star,
      items: ['Losar', 'Solung', 'Dree Festival'],
      image: 'https://www.tourmyindia.com/states/arunachalpradesh/images/dree-festival1.jpg',
      gradient: 'from-pink-400 to-purple-500'
    },
    {
      title: 'Buddhist Influence',
      icon: Mountain,
      items: ['Monpa Culture', 'Tibetan Buddhism', 'Gompas'],
      image: 'https://media.istockphoto.com/id/1272154351/photo/buddhist-prayer-wheels-in-tawang.jpg?s=612x612&w=0&k=20&c=2lAwieuW7y8vVombMKnn3SsJaFXTtmhb6CC6HDZClUE=',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Handicrafts',
      icon: TreePine,
      items: ['Bamboo & Cane Weaving', 'Wood Carving', 'Handloom Textiles'],
      image: 'https://www.shutterstock.com/image-photo/old-vietnamese-female-craftsman-making-260nw-735770407.jpg',
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  const politicalStructure = [
  {
    title: 'Statehood Status',
    icon: Flag,
    description: 'Achieved full statehood on February 20, 1987',
    details: [
      'Governor appointed by President of India',
      'Legislative Assembly with 60 seats',
      'Chief Minister leads executive council'
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'Administrative Divisions',
    icon: Building2,
    description: '26 districts as of 2025',
    details: [
      'Divided into 2 divisions',
      'Western and Eastern zones',
      'District HQs include Itanagar, Tawang, Ziro, etc.'
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Governance Structure',
    icon: Users2,
    description: 'Democratic state government',
    details: [
      'Governor is constitutional head',
      'Council of Ministers led by CM',
      'Independent judiciary and bureaucracy'
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Electoral System',
    icon: Flag,
    description: 'Representative democracy',
    details: [
      'Lok Sabha: 2 seats',
      'Rajya Sabha: 1 seat',
      'Legislative Assembly: 60 seats'
    ],
    color: 'from-orange-400 to-orange-600'
  }
];


  const politicalParties = [
  { name: 'Bharatiya Janata Party (BJP)', region: 'Ruling party', color: 'bg-orange-100', textColor: 'text-orange-700' },
  { name: 'Indian National Congress (INC)', region: 'Opposition presence', color: 'bg-blue-100', textColor: 'text-blue-700' },
  { name: 'National People’s Party (NPP)', region: 'Allied party', color: 'bg-purple-100', textColor: 'text-purple-700' },
  { name: 'Janata Dal (United)', region: 'Regional player', color: 'bg-green-100', textColor: 'text-green-700' },
  { name: 'People’s Party of Arunachal (PPA)', region: 'State-based', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
];


  const keyPoliticalFeatures = [
  {
    title: 'Inner Line Permit (ILP)',
    description: 'Mandatory for outsiders to enter the state',
    impact: 'Protects tribal cultures and land rights',
    status: 'Implemented'
  },
  {
    title: 'Autonomous Tribal Status',
    description: 'Special provisions under Article 371(H)',
    impact: 'Governor empowered with key decisions',
    status: 'Active'
  },
  {
    title: 'Peace & Insurgency-Free',
    description: 'Minimal insurgency compared to NE neighbors',
    impact: 'Stable political climate',
    status: 'Current'
  },
  {
    title: 'North East Council Membership',
    description: 'Active member of NEC & DoNER initiatives',
    impact: 'Receives special development assistance',
    status: 'Ongoing'
  }
];


  const traditionalDresses = [
    {
      name: 'Pehkan, Traditional woven dresses',
      region: 'Sherdukpen',
      description: 'Handwoven attire with silver jewelry',
      features: ['Geometric woven patterns', 'colorful designs', 'traditional hats'],
      image: 'https://www.indiatravel.app/wp-content/uploads/2024/09/Sherdukpen-Tribe.png',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      name: 'Chuba & Pangden',
      region: 'Monpa Tribe',
      description: 'Woolen robe with colorful apron',
      features: ['Warm wool fabric', 'Colorful striped patterns', 'Tibetan influence'],
      image: 'https://www.indiatravel.app/wp-content/uploads/2024/09/Monpa-Tribe-Traditional-Attire.png',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Wancho Dress',
      region: 'Wancho Tribe',
      description: 'Feathered headgear and body tattoos',
      features: ['Warrior attire', 'Feathers and beads', 'Distinctive tattoos'],
      image: 'https://www.indiatravel.app/wp-content/uploads/2024/09/Wancho-Tribe-768x509.png',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Tangsa Costume',
      region: 'Tangsa Tribe',
      description: 'Colorful garments with brass jewelry',
      features: ['Vibrant wrap-around skirts', 'Torso cloths', 'Jewelry'],
      image: 'https://arunachallivingheritage.com/uploads/images/1663062602Tangsa_Attire_26.jpg',
      gradient: 'from-purple-400 to-indigo-500'
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="bg-white/90 backdrop-blur-md border-b border-green-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/')} className="flex items-center space-x-2 hover:bg-green-50">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Mountain className="text-green-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Arunachal Pradesh
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Land of the Dawn-lit Mountains"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
<div className="relative h-80 overflow-hidden">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/01/01/07/18/sela-pass-6907061_1280.jpg)'
    }}
  ></div>
  <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-blue-900/70"></div>
  <div className="relative container mx-auto px-4 h-full flex items-center">
    <div className="max-w-2xl text-white">
      <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to the Dawn-lit Mountains</h2>
      <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Experience Arunachal Pradesh — land of tribal traditions, scenic beauty, and untouched nature.
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
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Capital</h3>
                  <p className="text-sm text-green-600">Itanagar</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Population</h3>
                  <p className="text-sm text-blue-600">1.6 Million<br/>Tribal majority</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Mountain className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Geography</h3>
                  <p className="text-sm text-purple-600">Eastern Himalayas<br/>83,743 km²</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-yellow-800">Languages</h3>
                  <p className="text-sm text-yellow-600">Nyishi, Adi, Apatani, Hindi</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-green-500" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌱</div>
                    <h4 className="font-semibold text-green-700 text-lg">Spring</h4>
                    <p className="text-sm text-green-600">Mar-May<br/>15-25°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">☀️</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Summer</h4>
                    <p className="text-sm text-blue-600">Jun-Aug<br/>20-30°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🍁</div>
                    <h4 className="font-semibold text-orange-700 text-lg">Autumn</h4>
                    <p className="text-sm text-orange-600">Sep-Nov<br/>10-20°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">❄️</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
                    <p className="text-sm text-gray-600">Dec-Feb<br/>0-15°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Politics Tab */}
<TabsContent value="politics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {politicalStructure.map((structure, index) => {
                const IconComponent = structure.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <div className={`h-32 bg-gradient-to-r ${structure.color} relative`}>
                      <img 
                        src="https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=200&fit=crop" 
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
                            <Flag size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users2 className="mr-3 text-purple-500" size={32} />
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

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Building2 className="mr-3 text-indigo-500" size={32} />
                  Key Political Features & Changes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyPoliticalFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Historical' ? 'bg-gray-200 text-gray-700' :
                          feature.status === 'Completed 2022' ? 'bg-green-200 text-green-700' :
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

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Current Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">👤 Governor: Appointed by President</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👨‍⚖️ High Court: Itanagar Bench</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ State Election Commission Oversight</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📋 Tribal and Rural Administration</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏘️ District-level Governance (26 districts)</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~8 Lakh</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 60</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 2</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~2,200</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Political Parties: 20+</li>
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
      <Utensils className="mr-3 text-red-500" size={32} />
      Traditional Cuisine
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid md:grid-cols-3 gap-4">
      {[
        { name: 'Thukpa', emoji: '🍜' },
        { name: 'Apong (Rice Beer)', emoji: '🍶' },
        { name: 'Bamboo Shoot Curry', emoji: '🎋' },
        { name: 'Pika Pila (Apatani Pickle)', emoji: '🥒' },
        { name: 'Smoked Meat with Yam', emoji: '🥩' },
        { name: 'Marua (Finger Millet Food)', emoji: '🌾' }
      ].map((dish, index) => (
        <div key={index} className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition-all hover:scale-105">
          <div className="text-3xl mb-2">{dish.emoji}</div>
          <h4 className="font-semibold text-red-700 text-lg">{dish.name}</h4>
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
  <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all">
    <CardHeader>
      <CardTitle className="text-lg flex items-center">
        <span className="text-2xl mr-2">🌾</span>
        Agricultural Products
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center p-2 bg-white/50 rounded">🌾 Rice (Jhum & Paddy)</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🌽 Maize & Millets</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🎋 Bamboo Shoots</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🍌 Banana & Pineapple</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🌱 Organic Tea</li>
      </ul>
    </CardContent>
  </Card>

  <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all">
    <CardHeader>
      <CardTitle className="text-lg flex items-center">
        <span className="text-2xl mr-2">🎨</span>
        Handicrafts
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center p-2 bg-white/50 rounded">🧵 Cane & Bamboo Weaving</li>
        <li className="flex items-center p-2 bg-white/50 rounded">👗 Traditional Tribal Attire</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🪡 Beadwork Jewelry</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🪵 Wood Carving</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🎒 Handmade Bags</li>
      </ul>
    </CardContent>
  </Card>

  <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
    <CardHeader>
      <CardTitle className="text-lg flex items-center">
        <span className="text-2xl mr-2">🏭</span>
        Industries
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center p-2 bg-white/50 rounded">⚡ Hydropower Projects</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Infrastructure & Roads</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🍃 Organic Farming Initiatives</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🧵 Textile & Handloom</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🌿 Medicinal Herb Processing</li>
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
    <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
      <div className="h-32 bg-gradient-to-r from-green-400 to-emerald-500 relative overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/Beauty-of-nature-in-arunachal-pradesh-itanagar.jpg" 
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
                <span className="text-2xl">🐘</span>
                <p className="text-sm mt-1">Asian Elephant</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🐅</span>
                <p className="text-sm mt-1">Clouded Leopard</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🐒</span>
                <p className="text-sm mt-1">Hoolock Gibbon</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🦜</span>
                <p className="text-sm mt-1">Hornbill</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌺</span>
                <p className="text-sm mt-1">Orchids</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌳</span>
                <p className="text-sm mt-1">Bamboo Groves</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌸</span>
                <p className="text-sm mt-1">Rhododendron</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌿</span>
                <p className="text-sm mt-1">Medicinal Herbs</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
      <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1604973048444-19123d6e70ae?w=400&h=200&fit=crop" 
          alt="Mountains"
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
            <span>Eastern Himalayas</span>
          </li>
          <li className="flex items-center p-3 bg-green-50 rounded-lg">
            <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
            <span>Siang & Kameng Valleys</span>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg">
            <span className="w-5 h-5 bg-purple-400 rounded mr-3"></span>
            <span>Tropical Rainforests</span>
          </li>
          <li className="flex items-center p-3 bg-indigo-50 rounded-lg">
            <span className="w-5 h-5 bg-indigo-400 rounded mr-3"></span>
            <span>Alpine Meadows & Snow Caps</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>

  <Card className="border-0 bg-white/80 backdrop-blur-sm">
    <CardHeader>
      <CardTitle className="text-2xl">Protected Areas & National Parks</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          'Namdapha National Park',
          'Mouling National Park',
          'Pakke Tiger Reserve',
          'Dibang Wildlife Sanctuary',
          'Eaglenest Wildlife Sanctuary',
          'Mehao Wildlife Sanctuary'
        ].map((park, index) => (
          <div key={index} className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
            <span className="text-2xl mb-2 block">🏞️</span>
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
            <span className="font-bold text-blue-600 text-lg">65.38%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
            <span className="flex items-center">
              <span className="text-xl mr-2">🏙️</span>
              Urban Population
            </span>
            <span className="font-bold text-green-600 text-lg">22.43%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
            <span className="flex items-center">
              <span className="text-xl mr-2">🌾</span>
              Rural Population
            </span>
            <span className="font-bold text-orange-600 text-lg">77.57%</span>
          </div>
        </div>
      </CardContent>
    </Card>

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
            { name: 'Solung (Adi Tribe)', emoji: '🌾' },
            { name: 'Nyokum Yullo (Nyishi)', emoji: '🌿' },
            { name: 'Losar (Monpa)', emoji: '🏔️' },
            { name: 'Dree Festival (Apatani)', emoji: '🥬' },
            { name: 'Reh Festival (Idu Mishmi)', emoji: '🌀' }
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

  <Card className="border-0 bg-white/80 backdrop-blur-sm">
    <CardHeader>
      <CardTitle className="flex items-center text-2xl">
        <Music className="mr-3 text-indigo-500" size={32} />
        Traditional Arts & Crafts
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
          <h4 className="font-semibold text-indigo-700 mb-4 text-lg flex items-center">
            <span className="text-2xl mr-2">🎵</span>
            Music & Dance
          </h4>
          <ul className="space-y-2">
            <li className="bg-white/60 p-2 rounded">Ponung Dance</li>
            <li className="bg-white/60 p-2 rounded">Lion Dance (Monpa)</li>
            <li className="bg-white/60 p-2 rounded">Buiya Dance</li>
            <li className="bg-white/60 p-2 rounded">Tribal Folk Songs</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
          <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
            <span className="text-2xl mr-2">🎨</span>
            Handicrafts
          </h4>
          <ul className="space-y-2">
            <li className="bg-white/60 p-2 rounded">Bamboo & Cane Weaving</li>
            <li className="bg-white/60 p-2 rounded">Beaded Jewelry</li>
            <li className="bg-white/60 p-2 rounded">Tribal Attire Design</li>
            <li className="bg-white/60 p-2 rounded">Wood & Horn Carvings</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
          <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
            <span className="text-2xl mr-2">📚</span>
            Oral Literature
          </h4>
          <ul className="space-y-2">
            <li className="bg-white/60 p-2 rounded">Tribal Mythologies</li>
            <li className="bg-white/60 p-2 rounded">Folk Narratives</li>
            <li className="bg-white/60 p-2 rounded">Ritual Chants</li>
            <li className="bg-white/60 p-2 rounded">Indigenous Proverbs</li>
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

export default ArunachalPradesh;
