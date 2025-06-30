import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const HimachalPradesh = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    {
      name: 'Shimla Ridge',
      image: 'https://shimlatourism.co.in/images//tourist-places/the-ridge-shimla/the-ridge-shimla-india-tourism-history.jpg',
      description: 'Historic open space with colonial charm and scenic views',
      location: 'Shimla'
    },
    {
      name: 'Rohtang Pass',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/rohtang-pass-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726730701545',
      description: 'High mountain pass known for snow and adventure sports',
      location: 'Near Manali'
    },
    {
      name: 'Dal Lake & McLeod Ganj',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Dal_lake_dharamshala.jpg',
      description: 'Sacred lake and hill station with Tibetan influence',
      location: 'Dharamshala'
    },
    {
      name: 'Kullu Valley',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Himalayas_from_Kullu_Valley%2C_Himachal_Pradesh.jpg',
      description: 'Lush valley known for temples, apple orchards, and festivals',
      location: 'Kullu'
    },
    {
      name: 'Great Himalayan National Park',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Himalayn_National_Park_01.jpg',
      description: 'UNESCO World Heritage park rich in flora and fauna',
      location: 'Kullu region'
    }
  ];

  const economicData = [
    { sector: 'Tourism', percentage: 35, description: 'Hill stations, spiritual and eco-tourism', color: 'from-blue-400 to-indigo-600' },
    { sector: 'Agriculture & Horticulture', percentage: 25, description: 'Apples, vegetables, and floriculture', color: 'from-green-400 to-green-600' },
    { sector: 'Hydropower', percentage: 20, description: 'Hydroelectric projects across rivers', color: 'from-cyan-500 to-blue-700' },
    { sector: 'Handicrafts & Wool Industry', percentage: 10, description: 'Woolen shawls, carpets, and crafts', color: 'from-pink-400 to-red-500' },
    { sector: 'IT & Services', percentage: 10, description: 'Emerging IT parks and education sector', color: 'from-purple-500 to-indigo-500' }
  ];

  const culturalElements = [
    {
      title: 'Folk Dances & Music',
      icon: Music,
      items: ['Nati', 'Chamba Rumal dance', 'Laman songs'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Kinnauri_Nati_dance.jpg',
      gradient: 'from-yellow-500 to-pink-500'
    },
    {
      title: 'Festivals',
      icon: Star,
      items: ['Kullu Dussehra', 'Shimla Summer Festival', 'Losar (Tibetan New Year)'],
      image: 'https://thetravellertrails.in/wp-content/uploads/2019/06/shimla-summer-festival.jpg',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Craft & Handicrafts',
      icon: Mountain,
      items: ['Kullu shawls', 'Chamba embroidery', 'Wood carvings'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/GW/DK/NO/117116792/kullu-shawls-500x500.jpg',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      title: 'Cuisine',
      icon: Utensils,
      items: ['Dham (feast)', 'Siddu', 'Madra', 'Chana Madra'],
      image: 'https://www.fabhotels.com/blog/wp-content/uploads/2022/07/600X400-Food-Banner-min.jpg',
      gradient: 'from-red-400 to-yellow-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'Statehood Status',
      icon: Flag,
      description: 'Achieved full statehood on January 25, 1971',
      details: [
        '18th state of India',
        'Unicameral legislature with 68 MLAs',
        'Governor as head of state, CM heads government'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Administrative Divisions',
      icon: Building2,
      description: '12 districts with diverse geographical zones',
      details: [
        'Key towns: Shimla, Manali, Dharamshala',
        'Tribal districts: Lahaul-Spiti, Kinnaur'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Governance Structure',
      icon: Users2,
      description: 'Democratic system with Panchayati Raj institutions',
      details: [
        'Active village panchayats',
        'Decentralized governance model',
        'Strong local representation'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Electoral System',
      icon: Vote,
      description: 'Regular democratic elections with high turnout',
      details: [
        'Lok Sabha: 4 seats',
        'Rajya Sabha: 3 seats',
        'State Assembly: 68 seats'
      ],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const politicalParties = [
    { name: 'Indian National Congress (INC)', region: 'Ruling party (2023)', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Bharatiya Janata Party (BJP)', region: 'Main opposition', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'CPM', region: 'Minor presence in tribal areas', color: 'bg-red-100', textColor: 'text-red-700' },
    { name: 'Independent Candidates', region: 'Influential in local bodies', color: 'bg-gray-100', textColor: 'text-gray-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Ecological Concerns',
      description: 'Deforestation and hydropower project impacts',
      impact: 'Activism and court interventions on environmental grounds',
      status: 'Policy reforms under discussion'
    },
    {
      title: 'Tourism Regulation',
      description: 'Need to balance ecology and tourism growth',
      impact: 'Infrastructure strain in peak seasons',
      status: 'Eco-tourism policies being formulated'
    },
    {
      title: 'Tribal Welfare',
      description: 'Focus on development in Lahaul-Spiti and Kinnaur',
      impact: 'Special grants and rights recognition',
      status: 'Ongoing state and central initiatives'
    },
    {
      title: 'Water Rights & River Disputes',
      description: 'Sharing Sutlej and Ravi water with neighboring states',
      impact: 'Political tension with Punjab and Haryana',
      status: 'Negotiations and court monitoring ongoing'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Reshta / Ghagra-Choli',
      region: 'Women (Kullu & Kangra)',
      description: 'Colorful dresses with wool shawls and silver jewelry',
      features: ['Bright skirts', 'Ornate headscarves', 'Heavy wool shawls'],
      image: 'https://www.goddesskurukulla.com/wp-content/uploads/2015/10/parampra.jpg',
      gradient: 'from-pink-500 to-red-600'
    },
    {
      name: 'Chola-Dora',
      region: 'Tribal Women (Spiti & Lahaul)',
      description: 'Long woolen robe with sash belt',
      features: ['High-altitude insulation', 'Layered wool fabric'],
      image: 'https://www.esamskriti.com/photograph/man1-lahaul-valley-photographs.jpg?202562713472',
      gradient: 'from-gray-500 to-indigo-600'
    },
    {
      name: 'Kurta with Sash & Wool Cap',
      region: 'Men (Kullu, Shimla)',
      description: 'Woollen kurtas paired with distinctive caps and sashes',
      features: ['Worn during festivals', 'Cultural symbol of Himachal'],
      image: 'https://bhutticoshawls.com/cdn/shop/files/SAVE-20240910_231320.jpg?v=1726893971',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      name: 'Churidar Pyjama & Woolen Shawl',
      region: 'Formal Male Attire',
      description: 'Traditional winter wear with handwoven shawls',
      features: ['Comfort & elegance', 'Often with Himachali cap'],
      image: 'https://c8.alamy.com/comp/EFP857/a-himachal-traditional-dance-being-performed-at-the-mall-shimla-himachal-EFP857.jpg',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-green-50">
      <div className="bg-white/90 backdrop-blur-md border-b border-blue-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/')} className="flex items-center space-x-2 hover:bg-blue-50">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Mountain className="text-green-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Himachal Pradesh
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Land of the Gods & Dev Bhumi"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1726730693575)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-blue-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to the Himalayan Abode of Serenity</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore Himachal Pradesh — where snow-capped peaks, temples, and traditions await.
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
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Capital</h3>
                  <p className="text-sm text-green-700">Shimla (Summer), Dharamshala (Winter)</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-indigo-800">Population</h3>
                  <p className="text-sm text-indigo-700">~7.4 Million<br />Scattered hill population</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Mountain className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Geography</h3>
                  <p className="text-sm text-blue-700">Himalayan terrain, deep valleys<br />55,673 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Languages</h3>
                  <p className="text-sm text-purple-700">Hindi, Pahari, Punjabi, Tibetan</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-blue-600" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌸</div>
                    <h4 className="font-semibold text-green-700 text-lg">Spring</h4>
                    <p className="text-sm text-green-600">Mar-May<br />15-25°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌞</div>
                    <h4 className="font-semibold text-yellow-700 text-lg">Summer</h4>
                    <p className="text-sm text-yellow-600">May-Jul<br />22-35°C (Lower Hills)</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-blue-600">Jul-Sep<br />Rainfall & landslides</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">❄️</div>
                    <h4 className="font-semibold text-slate-700 text-lg">Winter</h4>
                    <p className="text-sm text-slate-600">Nov-Feb<br />0-15°C (Snow in Upper Hills)</p>
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
                        src="https://images.unsplash.com/photo-1608534506998-f88e7058dcec?w=400&h=200&fit=crop" 
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
                  <Building2 className="mr-3 text-blue-600" size={32} />
                  Key Political Features & Changes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyPoliticalFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-green-100 p-6 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Historical' ? 'bg-gray-200 text-gray-700' :
                          feature.status === 'Implemented' ? 'bg-green-200 text-green-700' :
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Legislative Assembly (68 Seats)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ Himachal Pradesh High Court</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📋 Panchayati Raj institutions active</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏘️ 12 Districts including Shimla, Kangra, Mandi</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~55 Lakh</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 68</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 4</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~7,900+</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Political Parties: 12+</li>
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
                    { name: 'Dham (Festive Platter)', emoji: '🍱' },
                    { name: 'Siddu (Stuffed Bread)', emoji: '🥟' },
                    { name: 'Madra (Chickpea Yogurt Curry)', emoji: '🍲' },
                    { name: 'Chha Gosht (Mutton Curry)', emoji: '🍖' },
                    { name: 'Babru (Stuffed Kachori)', emoji: '🥠' },
                    { name: 'Mittha (Sweet Rice with Dry Fruits)', emoji: '🍚' }
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🍎 Apple (Major fruit crop)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍑 Stone fruits – Plum, Apricot, Peach</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🥔 Potato & off-season vegetables</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌽 Maize & Wheat</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🫘 Pulses & Barley in higher regions</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🧣 Woolen shawls & Kullu caps</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪡 Chamba & Kangra embroidery</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪵 Wooden carvings & temples</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🎨 Pahari miniature paintings</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪔 Metal crafts & bells</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🧪 Pharmaceuticals (Baddi hub)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚡ Hydroelectric Power Projects</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍏 Horticulture-based processing</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧵 Handloom & Wool industry</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏕️ Eco-tourism & hospitality ventures</li>
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
                    src="https://i0.wp.com/stampedmoments.com/wp-content/uploads/2023/05/gushaini-himalayan-national-park.jpg?fit=1024%2C768&ssl=1" 
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
                          <span className="text-2xl">🐻</span>
                          <p className="text-sm mt-1">Himalayan Black Bear</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐆</span>
                          <p className="text-sm mt-1">Snow Leopard</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦌</span>
                          <p className="text-sm mt-1">Musk Deer & Goral</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦅</span>
                          <p className="text-sm mt-1">Monal & Himalayan Griffon</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌲</span>
                          <p className="text-sm mt-1">Deodar & Pine Forests</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌸</span>
                          <p className="text-sm mt-1">Rhododendrons</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌿</span>
                          <p className="text-sm mt-1">Herbs & Alpine Shrubs</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌼</span>
                          <p className="text-sm mt-1">Meadow Flowers</p>
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
                    src="https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg" 
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
                      <span>Himalayan Mountain Ranges</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                      <span>Valleys – Kullu, Spiti, Chamba</span>
                    </li>
                    <li className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="w-5 h-5 bg-yellow-400 rounded mr-3"></span>
                      <span>Sutlej, Beas & Ravi Rivers</span>
                    </li>
                    <li className="flex items-center p-3 bg-indigo-50 rounded-lg">
                      <span className="w-5 h-5 bg-indigo-400 rounded mr-3"></span>
                      <span>Glacial Lakes & High Passes</span>
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
                    'Great Himalayan National Park',
                    'Pin Valley National Park',
                    'Khirganga National Park',
                    'Chail Wildlife Sanctuary',
                    'Renuka Wildlife Sanctuary',
                    'Simbalbara Wildlife Sanctuary'
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
                      <span className="font-bold text-blue-600 text-lg">83.8%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">10.04%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">89.96%</span>
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
                      { name: 'Kullu Dussehra', emoji: '🎉' },
                      { name: 'Lohri', emoji: '🔥' },
                      { name: 'Phulaich (Flower Festival)', emoji: '🌸' },
                      { name: 'Halda (Lahaul Festival)', emoji: '✨' },
                      { name: 'Minjar Fair (Chamba)', emoji: '🎊' }
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
                      <li className="bg-white/60 p-2 rounded">Nati Dance (Kullu)</li>
                      <li className="bg-white/60 p-2 rounded">Chamba Rumal Songs</li>
                      <li className="bg-white/60 p-2 rounded">Lahauli Folk Tunes</li>
                      <li className="bg-white/60 p-2 rounded">Dhol, Nagara & Shehnai</li>
                    </ul>
                  </div>

                  {/* Handicrafts */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Chamba Rumal Embroidery</li>
                      <li className="bg-white/60 p-2 rounded">Kullu Woolen Shawls</li>
                      <li className="bg-white/60 p-2 rounded">Wood Carvings & Silverwork</li>
                      <li className="bg-white/60 p-2 rounded">Bamboo Items & Paintings</li>
                    </ul>
                  </div>

                  {/* Oral Literature */}
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Oral Literature
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Folk Tales of Kullu & Kangra</li>
                      <li className="bg-white/60 p-2 rounded">Local Proverbs & Legends</li>
                      <li className="bg-white/60 p-2 rounded">Songs of Tribal Communities</li>
                      <li className="bg-white/60 p-2 rounded">Historical Ballads & Myths</li>
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

export default HimachalPradesh;