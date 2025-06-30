import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Chhattisgarh = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    {
      name: 'Chitrakote Falls',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Chitrakot_waterfalls.JPG',
      description: 'Known as the Niagara of India, majestic waterfall on the Indravati River',
      location: 'Bastar'
    },
    {
      name: 'Barnawapara Wildlife Sanctuary',
      image: 'https://www.chhattisgarhtourism.co.in/photo_gallery/barnawapara_wildlife_sanctuary/05.jpg',
      description: 'Lush forest reserve with leopards, sloth bears and deer species',
      location: 'Mahasamund district'
    },
    {
      name: 'Sirpur Heritage Site',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/7th_-_9th_century_Surang_tila_mandapa_before_shrines%2C_Sirpur_monuments_Chhattisgarh.jpg',
      description: 'Ancient Buddhist, Hindu and Jain archaeological remains',
      location: 'Mahasamund'
    },
    {
      name: 'Kanger Valley National Park',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Kanger_valley_National_Park.png',
      description: 'Dense forest with limestone caves and diverse fauna',
      location: 'Jagdalpur'
    },
    {
      name: 'Dongargarh Temple (Maa Bambleshwari)',
      image: 'https://www.odishavacations.com/chhattisgarhtours.com/assets/image/BIG-06.jpg',
      description: 'Popular hilltop temple dedicated to Goddess Bambleshwari',
      location: 'Rajnandgaon'
    }
  ];

  const economicData = [
    { sector: 'Minerals & Mining', percentage: 35, description: 'Coal, bauxite, iron ore production', color: 'from-gray-700 to-gray-900' },
    { sector: 'Agriculture', percentage: 30, description: 'Paddy, maize, pulses', color: 'from-green-400 to-green-600' },
    { sector: 'Steel & Power', percentage: 15, description: 'Major steel plants and thermal power stations', color: 'from-red-400 to-red-600' },
    { sector: 'Handicrafts & Forest Produce', percentage: 10, description: 'Tendu leaves, lac, tribal crafts', color: 'from-yellow-400 to-yellow-600' },
    { sector: 'Tourism', percentage: 10, description: 'Nature and heritage tourism', color: 'from-blue-400 to-blue-600' }
  ];

  const culturalElements = [
    {
      title: 'Tribal Heritage',
      icon: Users,
      items: ['Gond, Baiga, and Muria Tribes', 'Traditional music and dance', 'Unique rituals and festivals'],
      image: 'https://cgtrti.gov.in/assets/image/tribes/festivals.jpg',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Festivals',
      icon: Star,
      items: ['Bastar Dussehra', 'Hareli', 'Madai Festival'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Bastar_Dusshera_Unexplored_Bastar.jpg/1200px-Bastar_Dusshera_Unexplored_Bastar.jpg',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Traditional Art & Crafts',
      icon: TreePine,
      items: ['Dhokra Art', 'Terracotta', 'Wrought Iron Craft'],
      image: 'https://bastararts.com/cdn/shop/products/BA008d_2048x.jpg?v=1627381983',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Folk Dances',
      icon: Mountain,
      items: ['Panthi', 'Raut Nacha', 'Sua Nacha'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Raut_Nacha.jpg',
      gradient: 'from-purple-400 to-indigo-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'Statehood Status',
      icon: Flag,
      description: 'Carved out from Madhya Pradesh on November 1, 2000',
      details: [
        'Became the 26th state of India',
        'Unicameral legislature with 90 Assembly seats',
        'Chief Minister leads the executive'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Administrative Divisions',
      icon: Building2,
      description: '33 districts as of 2025',
      details: [
        'Key cities: Raipur, Bilaspur, Jagdalpur, Durg',
        '5 Revenue Divisions'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Governance Structure',
      icon: Users2,
      description: 'Follows Indian Constitution and Panchayati Raj system',
      details: [
        'Governor is the constitutional head',
        'Strong tribal self-governance in Fifth Schedule areas',
        'Decentralized local governance'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Electoral System',
      icon: Vote,
      description: 'Direct elections with significant tribal representation',
      details: [
        'Lok Sabha: 11 seats',
        'Rajya Sabha: 5 seats',
        'State Assembly: 90 seats'
      ],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const politicalParties = [
    { name: 'Indian National Congress (INC)', region: 'Leading party (2023)', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Bharatiya Janata Party (BJP)', region: 'Main opposition', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Janta Congress Chhattisgarh (JCC)', region: 'Regional influence', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Bahujan Samaj Party (BSP)', region: 'Dalit support base', color: 'bg-purple-100', textColor: 'text-purple-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Tribal Rights Focus',
      description: 'Special provisions under Fifth Schedule and PESA Act',
      impact: 'Empowered tribal self-rule in forest regions',
      status: 'Actively implemented'
    },
    {
      title: 'Salwa Judum Legacy',
      description: 'State-backed anti-Naxalite movement (controversial)',
      impact: 'Led to displacement and human rights debates',
      status: 'Historical'
    },
    {
      title: 'Naxal-Affected Governance',
      description: 'Affected Bastar, Dantewada and Bijapur regions',
      impact: 'Security and infrastructure challenges',
      status: 'Ongoing operations'
    },
    {
      title: 'Industrial Growth Strategy',
      description: 'State policy for mining and power investment',
      impact: 'Boosted steel, cement and power sectors',
      status: 'Implemented'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Lugda and Kachhora',
      region: 'Tribal Women',
      description: 'Traditional wrap-around saree worn without blouse',
      features: ['Vibrant colors', 'Beads and coin jewelry', 'Handwoven cotton'],
      image: 'https://www.utsavpedia.com/wp-content/uploads/2014/11/1.-httpwww.utsavpedia.comattireswhen-tradition-meets-fashion-kachhora-sari-worn-by-women-of-chhattisgarh.jpg',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      name: 'Dhoti with Angochha',
      region: 'Tribal and Rural Men',
      description: 'Everyday wear for men during farming and festivals',
      features: ['White cotton dhoti', 'Angochha on shoulders', 'Minimal accessories'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwF4GkMzNXGdOIyYsZI-Z2QQJcu6iUSyd5w&s',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Kosa Silk Attire',
      region: 'Bilaspur Region',
      description: 'Luxurious silk known for shine and strength',
      features: ['Golden hues', 'Sarees and kurtas', 'Worn in celebrations'],
      image: 'https://www.indiascarves.com/cdn/shop/collections/kosa-silk_1200x1200.jpg?v=1670931106',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      name: 'Festival Attire (Raut Nacha)',
      region: 'Festive Occasions',
      description: 'Bright cultural costumes for folk dance and rituals',
      features: ['Headgear', 'Mirrored jackets', 'Colorful dhotis'],
      image: 'https://live.staticflickr.com/65535/49661388742_07918e6215.jpg',
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Chhattisgarh
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Heartland of Tribal Culture & Nature's Treasure"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/9/91/Chitrakot_waterfalls.JPG)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-teal-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to the Tribal Heartland of India</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover Chhattisgarh — a land of waterfalls, forests, folk art, and ancient heritage.
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
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Capital</h3>
                  <p className="text-sm text-green-700">Raipur</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-teal-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-teal-800">Population</h3>
                  <p className="text-sm text-teal-700">~32 Million<br />Tribal majority regions</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center">
                    <Mountain className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-emerald-800">Geography</h3>
                  <p className="text-sm text-emerald-700">Dense forests & plateaus<br />135,192 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Languages</h3>
                  <p className="text-sm text-blue-700">Chhattisgarhi, Hindi, Gondi, Halbi</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-teal-600" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌿</div>
                    <h4 className="font-semibold text-green-700 text-lg">Spring</h4>
                    <p className="text-sm text-green-600">Mar-May<br />24-34°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🔥</div>
                    <h4 className="font-semibold text-yellow-700 text-lg">Summer</h4>
                    <p className="text-sm text-yellow-600">Jun-Aug<br />30-45°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-indigo-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-indigo-600">Jul-Sep<br />Heavy Rainfall</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">❄️</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
                    <p className="text-sm text-gray-600">Nov-Feb<br />10-22°C</p>
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
                        src="https://images.unsplash.com/photo-1609267540918-c7cc54b7a175?w=400&h=200&fit=crop" 
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
                  <Building2 className="mr-3 text-teal-600" size={32} />
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

            {/* Administration & Stats */}
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Legislative Assembly (90 Seats)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ Bilaspur High Court</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📋 Strong Panchayat Raj System</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏘️ 33 District Administrations</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~2 Crore</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 90</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 11</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~24,000+</li>
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
                  <Utensils className="mr-3 text-green-600" size={32} />
                  Traditional Cuisine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: 'Chana Samosa', emoji: '🥟' },
                    { name: 'Faraa (Rice Dumpling)', emoji: '🍚' },
                    { name: 'Chousela Roti', emoji: '🫓' },
                    { name: 'Bafauri', emoji: '🥬' },
                    { name: 'Dubki Kadhi', emoji: '🍲' },
                    { name: 'Dehrori (Sweet Dessert)', emoji: '🍮' }
                  ].map((dish, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all hover:scale-105">
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🌾 Paddy (Main crop)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌿 Pulses & Oilseeds</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍠 Kodo, Kutki, Maize</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍌 Banana, Mango, Guava</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍄 Tendu Leaves, Mahua Flowers</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Handicrafts */}
              <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🎨</span>
                    Handicrafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🪓 Bastar Iron Craft</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧵 Dhokra Metal Art</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪵 Bamboo & Cane Items</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪢 Godna & Tribal Paintings</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🎭 Terracotta Figurines</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">⛏️ Mining (Coal, Bauxite, Limestone)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚙️ Steel & Sponge Iron</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Cement & Power Plants</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪡 Forest-Based Small Industries</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🔋 Renewable Energy Projects</li>
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
                    src="https://c2.staticflickr.com/8/7457/16546131225_65d96e485b.jpg" 
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
                          <span className="text-2xl">🐅</span>
                          <p className="text-sm mt-1">Bengal Tiger</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐻</span>
                          <p className="text-sm mt-1">Sloth Bear</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦏</span>
                          <p className="text-sm mt-1">Indian Bison (Gaur)</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦅</span>
                          <p className="text-sm mt-1">Indian Eagle & Hornbills</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌲</span>
                          <p className="text-sm mt-1">Sal & Bamboo Forests</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🍀</span>
                          <p className="text-sm mt-1">Tendu & Mahua Trees</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌼</span>
                          <p className="text-sm mt-1">Palash Flowers</p>
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

              {/* Geographic Features Card */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Chitrakot_waterfalls.JPG" 
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
                      <span>Chhattisgarh Plains & Hills</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                      <span>Maikal & Vindhya Ranges</span>
                    </li>
                    <li className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <span className="w-5 h-5 bg-purple-400 rounded mr-3"></span>
                      <span>Mahanadi & Tributaries</span>
                    </li>
                    <li className="flex items-center p-3 bg-indigo-50 rounded-lg">
                      <span className="w-5 h-5 bg-indigo-400 rounded mr-3"></span>
                      <span>Waterfalls & Caves</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Protected Areas & Parks */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Protected Areas & National Parks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Indravati National Park',
                    'Kanger Valley National Park',
                    'Achanakmar Wildlife Sanctuary',
                    'Udanti-Sitanadi Tiger Reserve',
                    'Guru Ghasidas National Park',
                    'Barnawapara Wildlife Sanctuary'
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
                      <span className="font-bold text-blue-600 text-lg">71.04%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">23.2%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">76.8%</span>
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
                      { name: 'Bastar Dussehra', emoji: '🎉' },
                      { name: 'Hareli Festival', emoji: '🌿' },
                      { name: 'Madai Festival', emoji: '🪘' },
                      { name: 'Goncha Festival', emoji: '🏹' },
                      { name: 'Pola & Navakhai', emoji: '🐂' }
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
                      <li className="bg-white/60 p-2 rounded">Raut Nacha</li>
                      <li className="bg-white/60 p-2 rounded">Panthi & Sua Dance</li>
                      <li className="bg-white/60 p-2 rounded">Karma & Dadariya Songs</li>
                      <li className="bg-white/60 p-2 rounded">Gendi & Danda Nacha</li>
                    </ul>
                  </div>

                  {/* Handicrafts */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Bell Metal (Dhokra Art)</li>
                      <li className="bg-white/60 p-2 rounded">Terracotta & Clay Work</li>
                      <li className="bg-white/60 p-2 rounded">Wood & Bamboo Carving</li>
                      <li className="bg-white/60 p-2 rounded">Tumba Art (gourd craft)</li>
                    </ul>
                  </div>

                  {/* Oral Literature */}
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Oral Literature
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Myths of Bastar Tribes</li>
                      <li className="bg-white/60 p-2 rounded">Lok Kathayen & Ballads</li>
                      <li className="bg-white/60 p-2 rounded">Gond & Halbi Folk Tales</li>
                      <li className="bg-white/60 p-2 rounded">Narratives on Nature & Spirits</li>
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

export default Chhattisgarh;
