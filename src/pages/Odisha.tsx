import React, { useState } from "react";
import { ArrowLeft, MapPin, Landmark, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, Building2, Waves, Mountain, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Odisha = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    { 
      name: 'Konark Sun Temple', 
      image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=300&fit=crop', 
      description: 'UNESCO World Heritage Site known for its architectural grandeur',
      location: 'Konark'
    },
    { 
      name: 'Jagannath Temple', 
      image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=400&h=300&fit=crop', 
      description: 'Famous Hindu temple dedicated to Lord Jagannath',
      location: 'Puri'
    },
    { 
      name: 'Chilika Lake', 
      image: 'https://images.unsplash.com/photo-1632495287245-2aa9e0f59e82?w=400&h=300&fit=crop', 
      description: 'Asia\'s largest brackish water lagoon with Irrawaddy dolphins',
      location: 'Spread across three districts'
    },
    { 
      name: 'Udayagiri and Khandagiri Caves', 
      image: 'https://images.unsplash.com/photo-1623058455776-6a7a0f8a3d9d?w=400&h=300&fit=crop', 
      description: 'Ancient Jain rock-cut caves with intricate carvings',
      location: 'Bhubaneswar'
    },
    { 
      name: 'Dhauli Hills', 
      image: 'https://images.unsplash.com/photo-1630157846155-4d81b4b1e3b5?w=400&h=300&fit=crop', 
      description: 'Peace pagoda and site of Kalinga War where Emperor Ashoka embraced Buddhism',
      location: 'Near Bhubaneswar'
    },
    { 
      name: 'Simlipal National Park', 
      image: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?w=400&h=300&fit=crop', 
      description: 'UNESCO Biosphere Reserve with tigers, elephants and waterfalls',
      location: 'Mayurbhanj district'
    }
  ];

  const economicData = [
    { sector: 'Agriculture', percentage: 35, description: 'Rice, pulses, oilseeds, jute', color: 'from-green-400 to-green-600' },
    { sector: 'Industry', percentage: 30, description: 'Steel, aluminum, power, textiles', color: 'from-purple-400 to-purple-600' },
    { sector: 'Services', percentage: 25, description: 'IT, tourism, banking', color: 'from-emerald-400 to-emerald-600' },
    { sector: 'Mining', percentage: 8, description: 'Coal, iron ore, bauxite', color: 'from-blue-400 to-blue-600' },
    { sector: 'Fisheries', percentage: 2, description: 'Marine and inland fishing', color: 'from-orange-400 to-orange-600' }
  ];

  const culturalElements = [
    { 
      title: 'Performing Arts', 
      icon: Music, 
      items: ['Odissi dance', 'Gotipua', 'Chhau dance', 'Pala and Daskathia'],
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=300&h=200&fit=crop',
      gradient: 'from-red-400 to-pink-500'
    },
    { 
      title: 'Festivals', 
      icon: Calendar, 
      items: ['Ratha Yatra', 'Durga Puja', 'Makar Mela', 'Konark Dance Festival'],
      image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=300&h=200&fit=crop',
      gradient: 'from-green-400 to-teal-500'
    },
    { 
      title: 'Cuisine', 
      icon: Utensils, 
      items: ['Pakhala Bhata', 'Chhena Poda', 'Dalma', 'Rasagola'],
      image: 'https://images.unsplash.com/photo-1630910392197-8a1e4a5b3b1f?w=300&h=200&fit=crop',
      gradient: 'from-yellow-400 to-amber-500'
    },
    { 
      title: 'Handicrafts', 
      icon: Star, 
      items: ['Pattachitra', 'Silver filigree', 'Stone carving', 'Palm leaf engravings'],
      image: 'https://images.unsplash.com/photo-1630157846155-4d81b4b1e3b5?w=300&h=200&fit=crop',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'State Government',
      icon: Building2,
      description: 'Parliamentary system of government',
      details: ['Governor as constitutional head', 'Chief Minister as executive head', 'Unicameral legislature (147 seats)'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Administrative Divisions',
      icon: MapPin,
      description: '30 districts with strong panchayati raj system',
      details: ['Bhubaneswar', 'Cuttack', 'Puri', 'Sambalpur', 'Berhampur', 'Rourkela'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Local Governance',
      icon: Users,
      description: 'Three-tier panchayati raj system',
      details: ['Zilla Parishad', 'Panchayat Samiti', 'Gram Panchayat', 'Urban Municipal Corporations'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Electoral System',
      icon: Star,
      description: 'Multi-party democracy',
      details: ['Lok Sabha: 21 seats', 'Legislative Assembly: 147 seats', 'High voter turnout'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const politicalParties = [
    { name: 'Biju Janata Dal', region: 'Statewide', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Bharatiya Janata Party', region: 'Statewide', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Indian National Congress', region: 'Statewide', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Communist Party of India', region: 'Western Odisha', color: 'bg-red-100', textColor: 'text-red-700' },
    { name: 'Aam Aadmi Party', region: 'Urban areas', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Industrial Development',
      description: 'Focus on steel, aluminum and power sectors',
      impact: 'Rapid industrialization in Angul-Jharsuguda belt',
      status: 'Progressing'
    },
    {
      title: 'Tribal Welfare',
      description: 'Special programs for tribal communities',
      impact: 'Improved education and healthcare in tribal areas',
      status: 'Active'
    },
    {
      title: 'Disaster Management',
      description: 'Cyclone preparedness programs',
      impact: 'Reduced casualties during natural disasters',
      status: 'Ongoing'
    },
    {
      title: 'Tourism Promotion',
      description: 'Development of Buddhist and heritage circuits',
      impact: 'Increased tourist arrivals',
      status: 'Developing'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Sambalpuri Saree',
      region: 'Western Odisha',
      description: 'Traditional handwoven ikat saree',
      features: ['Distinct geometric patterns', 'Natural dyes', 'Tie-dye technique', 'Worn during festivals'],
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=300&fit=crop',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      name: 'Kotpad Fabric',
      region: 'Koraput district',
      description: 'Tribal textile with organic colors',
      features: ['Eco-friendly production', 'Traditional motifs', 'Made by tribal weavers', 'Geographical Indication tagged'],
      image: 'https://images.unsplash.com/photo-1561526116-e2460f4d40a8?w=400&h=300&fit=crop',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      name: 'Pattachitra',
      region: 'Puri and surrounding areas',
      description: 'Traditional cloth-based scroll painting',
      features: ['Mythological themes', 'Natural colors', 'Intricate details', 'Used in rituals'],
      image: 'https://images.unsplash.com/photo-1578301978018-0d1c7b5b5b5b?w=400&h=300&fit=crop',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      name: 'Tribal Jewelry',
      region: 'Kandha and Santhal tribes',
      description: 'Traditional metal and bead ornaments',
      features: ['Silver and brass materials', 'Beadwork', 'Distinct tribal designs', 'Worn during ceremonies'],
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
      gradient: 'from-yellow-400 to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white-50 to-orange-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-blue-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:bg-blue-50"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Waves className="text-blue-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  Odisha
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "The Soul of Incredible India"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&h=400&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-orange-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Discover Odisha's Heritage</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore ancient temples, vibrant culture, and breathtaking landscapes
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 bg-white/70 backdrop-blur-sm h-auto p-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Overview</TabsTrigger>
              <TabsTrigger value="politics" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Politics</TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Culture</TabsTrigger>
              <TabsTrigger value="economy" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Economy</TabsTrigger>
              <TabsTrigger value="tourism" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Tourism</TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Nature</TabsTrigger>
              <TabsTrigger value="society" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Society</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Capital</h3>
                  <p className="text-sm text-blue-600">Bhubaneswar<br/>"Temple City of India"</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white-50 to-white-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white-400 to-white-600 rounded-full flex items-center justify-center">
                    <Users className="text-gray-800" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Population</h3>
                  <p className="text-sm text-gray-600">46 Million<br/>62 distinct tribal groups</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Landmark className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-orange-800">Geography</h3>
                  <p className="text-sm text-orange-600">Eastern India<br/>155,707 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Languages</h3>
                  <p className="text-sm text-purple-600">Odia (official)<br/>21 tribal languages</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-blue-500" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌞</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Summer</h4>
                    <p className="text-sm text-blue-600">Mar-Jun<br/>25-45°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-green-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-green-600">Jun-Sep<br/>Heavy rainfall</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🍂</div>
                    <h4 className="font-semibold text-orange-700 text-lg">Autumn</h4>
                    <p className="text-sm text-orange-600">Oct-Nov<br/>Pleasant weather</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">❄️</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
                    <p className="text-sm text-gray-600">Dec-Feb<br/>10-28°C</p>
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
                        src="https://images.unsplash.com/photo-1623058455776-6a7a0f8a3d9d?w=400&h=200&fit=crop" 
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
                            <Building2 size={16} className="mr-3 text-blue-400 flex-shrink-0" />
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
                  <Users className="mr-3 text-orange-500" size={32} />
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
                  <Factory className="mr-3 text-indigo-500" size={32} />
                  Key Political Features & Policies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyPoliticalFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Ongoing' ? 'bg-blue-200 text-blue-700' :
                          feature.status === 'Active' ? 'bg-green-200 text-green-700' :
                          feature.status === 'Progressing' ? 'bg-yellow-200 text-yellow-700' :
                          'bg-purple-200 text-purple-700'
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
              <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Current Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Parliamentary System</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ High Court at Cuttack</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Strong Panchayati Raj</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📋 Special Tribal Provisions</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~32 Million</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 147</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 21</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~37,000</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Parties: 20+</li>
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
                  Traditional Dresses & Textiles
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
                  <Utensils className="mr-3 text-orange-500" size={32} />
                  Traditional Cuisine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: 'Pakhala Bhata', emoji: '🍚' },
                    { name: 'Chhena Poda', emoji: '🧀' },
                    { name: 'Dalma', emoji: '🥘' },
                    { name: 'Rasagola', emoji: '🍡' },
                    { name: 'Chingudi Jhola', emoji: '🍤' },
                    { name: 'Manda Pitha', emoji: '🥮' }
                  ].map((dish, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                      <div className="text-3xl mb-2">{dish.emoji}</div>
                      <h4 className="font-semibold text-orange-700 text-lg">{dish.name}</h4>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🍚 Rice (Staple crop)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌽 Maize</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🫚 Ginger</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🟨 Turmeric</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🎋 Jute</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏭</span>
                    Major Industries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🛠️ Steel (Rourkela)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🔩 Aluminum (Angul)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚡ Power Generation</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧶 Textiles</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🛢️ Petroleum Refining</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏗️</span>
                    Infrastructure Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🛣️ Coastal Highway</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">✈️ Biju Patnaik Airport</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚡ Green Energy Parks</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Industrial Corridors</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🚢 Paradip Port Expansion</li>
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
              <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-blue-200 border-2">
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
                    src="https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?w=400&h=200&fit=crop" 
                    alt="Wildlife"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Flora & Fauna</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg flex items-center">
                        <span className="text-2xl mr-2">🦅</span>
                        Wildlife
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐅</span>
                          <p className="text-sm mt-1">Royal Bengal Tiger</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐘</span>
                          <p className="text-sm mt-1">Asian Elephant</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐬</span>
                          <p className="text-sm mt-1">Irrawaddy Dolphin</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦚</span>
                          <p className="text-sm mt-1">Peafowl</p>
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
                          <span className="text-2xl">🌴</span>
                          <p className="text-sm mt-1">Palm Trees</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌳</span>
                          <p className="text-sm mt-1">Sal Forests</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌸</span>
                          <p className="text-sm mt-1">Orchids</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌿</span>
                          <p className="text-sm mt-1">Mangroves</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1632495287245-2aa9e0f59e82?w=400&h=200&fit=crop" 
                    alt="Waterbodies"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Waves className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Natural Wonders</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Waves size={20} className="mr-3 text-blue-500" />
                      <span>Chilika Lake (Asia's largest brackish water lagoon)</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                      <span>Simlipal National Park (UNESCO Biosphere Reserve)</span>
                    </li>
                    <li className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="w-5 h-5 bg-yellow-400 rounded mr-3"></span>
                      <span>Bhitarkanika Mangroves (2nd largest in India)</span>
                    </li>
                    <li className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <span className="w-5 h-5 bg-purple-400 rounded mr-3"></span>
                      <span>Barehipani Falls (2nd highest in India)</span>
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
                    'Simlipal National Park',
                    'Bhitarkanika National Park',
                    'Chilika Wildlife Sanctuary',
                    'Nandankanan Zoological Park',
                    'Satkosia Tiger Reserve',
                    'Gahirmatha Marine Sanctuary'
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
                      <span className="font-bold text-blue-600 text-lg">72.87%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">16.69%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">83.31%</span>
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
                      { name: 'Ratha Yatra', emoji: '🛕' },
                      { name: 'Durga Puja', emoji: '🪔' },
                      { name: 'Makar Mela', emoji: '🏊' },
                      { name: 'Konark Dance Festival', emoji: '💃' },
                      { name: 'Nuakhai', emoji: '🌾' }
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
                  Tribal Structure & Social Life
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-indigo-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">👥</span>
                      Tribal Communities
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">62 Scheduled Tribes</li>
                      <li className="bg-white/60 p-2 rounded">Santals, Kondhs, Bonda</li>
                      <li className="bg-white/60 p-2 rounded">Distinct languages/customs</li>
                      <li className="bg-white/60 p-2 rounded">Traditional governance</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Art & Craft
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Pattachitra paintings</li>
                      <li className="bg-white/60 p-2 rounded">Silver filigree work</li>
                      <li className="bg-white/60 p-2 rounded">Stone carving</li>
                      <li className="bg-white/60 p-2 rounded">Dhokra metal casting</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🛐</span>
                      Religion & Values
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">94% Hindu</li>
                      <li className="bg-white/60 p-2 rounded">Tribal animist traditions</li>
                      <li className="bg-white/60 p-2 rounded">Jagannath cult</li>
                      <li className="bg-white/60 p-2 rounded">Strong community bonds</li>
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

export default Odisha;