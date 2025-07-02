import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Uttarakhand = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    { 
      name: 'Valley of Flowers', 
      image: 'https://images.prismic.io/indiahike/ZidYsPPdc1huKsSI_ValleyOfFlowers-PavanJain-Bloomingflowersofthevalley.jpg?auto=compress,format&rect=0,49,1600,800&w=1200&h=600', 
      description: 'UNESCO World Heritage Site with alpine flowers',
      location: 'Chamoli'
    },
    { 
      name: 'Kedarnath Temple', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/960px-Kedarnath_Temple_in_Rainy_season.jpg', 
      description: 'Sacred Hindu shrine dedicated to Lord Shiva',
      location: 'Rudraprayag'
    },
    { 
      name: 'Mussoorie', 
      image: 'https://travelchardham.com/sites/default/files/2024-12/Mall%20Road%20Mussoorie.jpg', 
      description: 'Queen of the Hills with panoramic views',
      location: 'Dehradun'
    },
    { 
      name: 'Nainital', 
      image: 'https://uttarakhandguide.com/wp-content/uploads/2023/04/nainital.jpg', 
      description: 'Picturesque lake town in the Kumaon hills',
      location: 'Nainital'
    },
    { 
      name: 'Jim Corbett National Park', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Bengal-Tiger_Corbett_Uttarakhand_Dec-2013.jpg', 
      description: 'India\'s oldest national park and tiger reserve',
      location: 'Nainital'
    },
    { 
      name: 'Haridwar', 
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/ganga-ghat-haridwar1-attr-hero?qlt=82&ts=1726645870499', 
      description: 'Holy city where Ganges enters plains',
      location: 'Haridwar'
    }
  ];

  const economicData = [
    { sector: 'Tourism', percentage: 28, description: 'Pilgrimage and adventure tourism', color: 'from-blue-400 to-blue-600' },
    { sector: 'Agriculture', percentage: 22, description: 'Basmati rice, fruits, herbs', color: 'from-green-400 to-green-600' },
    { sector: 'Hydropower', percentage: 18, description: 'Major hydroelectric projects', color: 'from-indigo-400 to-indigo-600' },
    { sector: 'Forestry', percentage: 15, description: 'Timber and forest products', color: 'from-emerald-400 to-emerald-600' },
    { sector: 'Handicrafts', percentage: 17, description: 'Wood carvings, woolens', color: 'from-purple-400 to-purple-600' }
  ];

  const culturalElements = [
    { 
      title: 'Garhwali Culture', 
      icon: Mountain, 
      items: ['Langvir Nritya', 'Jhora Dance', 'Traditional folk songs'],
      image: 'https://stagebuzz.in/wp-content/uploads/2021/12/0696a56e1441ff33eca4daa0c87398bd.jpg',
      gradient: 'from-orange-400 to-red-500'
    },
    { 
      title: 'Kumaoni Heritage', 
      icon: TreePine, 
      items: ['Chholiya Dance', 'Hill Jatra festival', 'Aipan art'],
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/Aipan-dehradun-uttarakhand-craft-hero?qlt=82&ts=1726641510222',
      gradient: 'from-emerald-400 to-teal-500'
    },
    { 
      title: 'Spiritual Traditions', 
      icon: Star, 
      items: ['Char Dham Yatra', 'Ganga Aarti', 'Yoga capital Rishikesh'],
      image: 'https://raftingcampingrishikesh.com/images/triveni-ghat.jpg',
      gradient: 'from-amber-400 to-yellow-500'
    },
    { 
      title: 'Tribal Communities', 
      icon: Users, 
      items: ['Bhotiya tribe', 'Jaunsari people', 'Tharu culture'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Jaunsari_Garhwali_Harul_dance.jpg/500px-Jaunsari_Garhwali_Harul_dance.jpg',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'State Government',
      icon: Flag,
      description: 'Elected state government since 2000',
      details: ['Chief Minister as Head', 'Governor as Constitutional Head', 'Unicameral Legislature'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Administrative Divisions',
      icon: Building2,
      description: '13 Districts across 2 divisions',
      details: ['Garhwal Division', 'Kumaon Division', 'Proposed Uttarkashi Division'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Governance Structure',
      icon: Users2,
      description: 'Parliamentary System',
      details: ['Council of Ministers', 'Legislative Assembly (70 seats)', 'Special category status'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Electoral System',
      icon: Vote,
      description: 'Democratic representation',
      details: ['Lok Sabha: 5 seats', 'Legislative Assembly: 70 seats', 'Panchayati Raj Institutions'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const politicalParties = [
    { name: 'Bharatiya Janata Party (BJP)', region: 'State-dominant', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Indian National Congress', region: 'Traditional base', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Uttarakhand Kranti Dal', region: 'Regional party', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Aam Aadmi Party', region: 'Emerging presence', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'State Formation',
      description: 'Carved out of Uttar Pradesh in 2000',
      impact: 'Better governance for hilly regions',
      status: 'Historical'
    },
    {
      title: 'Disaster Management',
      description: 'Response to 2013 floods',
      impact: 'Improved infrastructure resilience',
      status: 'Ongoing'
    },
    {
      title: 'Char Dham Road Project',
      description: 'Infrastructure for pilgrimage sites',
      impact: 'Improved connectivity to holy sites',
      status: 'Ongoing'
    },
    {
      title: 'Uniform Civil Code',
      description: 'First state to implement UCC',
      impact: 'Common personal laws for all',
      status: 'Implemented'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Garhwali Pichhaura',
      region: 'Garhwal',
      description: 'Traditional women\'s attire with red dupatta',
      features: ['Red and gold colors', 'Heavy jewelry', 'Woolen fabric', 'Worn with ghagra'],
      image: 'https://www.himalayanbuzz.com/wp-content/uploads/2016/10/wedcover.jpg',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Kumaoni Topi',
      region: 'Kumaon',
      description: 'Traditional cap for men',
      features: ['Black color', 'Gold embroidery', 'Woolen material', 'Symbol of identity'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/CH/SY/YA/62382801/jet-black-500x500.jpg',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      name: 'Bhotiya Woolens',
      region: 'Tribal Areas',
      description: 'Traditional woolen garments',
      features: ['Handwoven', 'Natural dyes', 'Geometric patterns', 'Warm for winters'],
      image: 'https://www.uttarakhandi.com/wp-content/uploads/bhotia-min-1140x445.png',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      name: 'Panghat Saree',
      region: 'All Regions',
      description: 'Traditional hill saree',
      features: ['Cotton fabric', 'Simple design', 'Bright colors', 'Everyday wear'],
      image: 'https://static.wixstatic.com/media/910b6a_0854e4c849e84a018b21320b62aac61f~mv2.jpg/v1/fill/w_980,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/910b6a_0854e4c849e84a018b21320b62aac61f~mv2.jpg',
      gradient: 'from-purple-400 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-green-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:bg-green-50"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Mountain className="text-green-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Uttarakhand
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Devbhumi - Land of the Gods"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.prismic.io/indiahike/ZidYsPPdc1huKsSI_ValleyOfFlowers-PavanJain-Bloomingflowersofthevalley.jpg?auto=compress,format&rect=0,49,1600,800&w=1200&h=600)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-teal-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Explore the Abode of Gods</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover the spiritual heritage, breathtaking landscapes, and rich culture of Uttarakhand
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
              <TabsTrigger value="economy" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Economy</TabsTrigger>
              <TabsTrigger value="tourism" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Tourism</TabsTrigger>
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
                  <h3 className="font-bold text-lg mb-2 text-green-800">Capitals</h3>
                  <p className="text-sm text-green-600">Dehradun (Winter)<br/>Gairsain (Summer)</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Population</h3>
                  <p className="text-sm text-blue-600">10 Million<br/>Multi-ethnic</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-teal-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                    <Mountain className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-teal-800">Geography</h3>
                  <p className="text-sm text-teal-600">Himalayan Region<br/>53,483 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Languages</h3>
                  <p className="text-sm text-purple-600">Hindi, Garhwali<br/>Kumaoni, Jaunsari</p>
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
                    <div className="text-4xl mb-2">🌸</div>
                    <h4 className="font-semibold text-green-700 text-lg">Spring</h4>
                    <p className="text-sm text-green-600">Mar-May<br/>15-25°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">☀️</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Summer</h4>
                    <p className="text-sm text-blue-600">Jun-Aug<br/>20-30°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🍂</div>
                    <h4 className="font-semibold text-orange-700 text-lg">Autumn</h4>
                    <p className="text-sm text-orange-600">Sep-Nov<br/>10-20°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">❄️</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
                    <p className="text-sm text-gray-600">Dec-Feb<br/>-5-10°C</p>
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
                        src="https://www.shutterstock.com/image-vector/politics-concept-web-template-illustration-260nw-2489852537.jpg" 
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
                          feature.status === 'Ongoing' ? 'bg-blue-200 text-blue-700' :
                          'bg-green-200 text-green-700'
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
              <Card className="border-0 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Current Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Parliamentary System</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ High Court at Nainital</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Election Commission Oversight</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📋 State Government Control</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏘️ District Administration</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~8 Million</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 70</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 5</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~11,000</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Parties: 50+</li>
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
                    { name: 'Kafuli', emoji: '🥬' },
                    { name: 'Bhatt Ki Churdkani', emoji: '🍲' },
                    { name: 'Gahat Ki Dal', emoji: '🥣' },
                    { name: 'Arsa', emoji: '🍘' },
                    { name: 'Bal Mithai', emoji: '🍫' },
                    { name: 'Singori', emoji: '🍡' }
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🍚 Basmati Rice</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍎 Apples</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌿 Medicinal Herbs</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍯 Honey</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌰 Walnuts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">⚡</span>
                    Hydropower Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">Tehri Dam</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">Vishnuprayag</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">Maneri Bhali</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">Srinagar</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">Tapovan Vishnugad</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🎨</span>
                    Handicrafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🪵 Wood Carving</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧶 Woolens</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧿 Metalwork</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧵 Handloom</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏺 Pottery</li>
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
              <Card className="bg-gradient-to-r from-green-50 to-teal-50 border-green-200 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center text-2xl">
                      <Camera className="mr-3 text-green-500" size={32} />
                      {selectedAttraction.name}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedAttraction(null)}
                      className="hover:bg-green-100"
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
                        <span className="flex items-center bg-green-100 px-3 py-1 rounded-full">
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
                    src="https://www.trawell.in/images/pics/uttarakhand_nw_main.jpg" 
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
                      <h4 className="font-semibold text-green-700 mb-3 text-lg flex items-center">
                        <span className="text-2xl mr-2">🐾</span>
                        Wildlife
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐅</span>
                          <p className="text-sm mt-1">Bengal Tiger</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦌</span>
                          <p className="text-sm mt-1">Himalayan Tahr</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐻</span>
                          <p className="text-sm mt-1">Himalayan Black Bear</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦅</span>
                          <p className="text-sm mt-1">Himalayan Monal</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg flex items-center">
                        <span className="text-2xl mr-2">🌿</span>
                        Flora
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌲</span>
                          <p className="text-sm mt-1">Deodar</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌸</span>
                          <p className="text-sm mt-1">Brahma Kamal</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌺</span>
                          <p className="text-sm mt-1">Rhododendron</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌱</span>
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
                    src="https://specialplacesofindia.com/wp-content/uploads/2023/10/Trishul-Mountain.jpg" 
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
                      <span>Greater Himalayas</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                      <span>Ganga River Basin</span>
                    </li>
                    <li className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <span className="w-5 h-5 bg-purple-400 rounded mr-3"></span>
                      <span>Valley of Flowers</span>
                    </li>
                    <li className="flex items-center p-3 bg-orange-50 rounded-lg">
                      <span className="w-5 h-5 bg-orange-400 rounded mr-3"></span>
                      <span>Terai Region</span>
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
                    'Jim Corbett National Park',
                    'Valley of Flowers National Park',
                    'Nanda Devi National Park',
                    'Rajaji National Park',
                    'Gangotri National Park',
                    'Govind Pashu Vihar'
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
                      <span className="font-bold text-blue-600 text-lg">78.82%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">30.23%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">69.77%</span>
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
                      { name: 'Kumbh Mela', emoji: '🕉️' },
                      { name: 'Nanda Devi Raj Jat', emoji: '🏔️' },
                      { name: 'Phool Dei', emoji: '🌸' },
                      { name: 'Harela', emoji: '🌱' },
                      { name: 'Ghee Sankranti', emoji: '🧈' }
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
                      <li className="bg-white/60 p-2 rounded">Jhora Dance</li>
                      <li className="bg-white/60 p-2 rounded">Chholiya Dance</li>
                      <li className="bg-white/60 p-2 rounded">Langvir Nritya</li>
                      <li className="bg-white/60 p-2 rounded">Folk Songs</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Wood Carving</li>
                      <li className="bg-white/60 p-2 rounded">Woolen Shawls</li>
                      <li className="bg-white/60 p-2 rounded">Ringal Craft</li>
                      <li className="bg-white/60 p-2 rounded">Aipan Art</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Literature
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Garhwali Poetry</li>
                      <li className="bg-white/60 p-2 rounded">Kumaoni Folk Tales</li>
                      <li className="bg-white/60 p-2 rounded">Spiritual Texts</li>
                      <li className="bg-white/60 p-2 rounded">Modern Literature</li>
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

export default Uttarakhand;
