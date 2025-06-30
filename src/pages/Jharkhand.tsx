import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Jharkhand = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    {
      name: 'Hundru Falls',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/33/37/60/hudru-falls.jpg?w=1200&h=-1&s=1',
      description: 'Scenic waterfall on the Subarnarekha River surrounded by forests',
      location: 'Ranchi'
    },
    {
      name: 'Netarhat',
      image: 'https://thumbs.dreamstime.com/b/magnolia-sunset-point-netarhat-jharkhand-india-magnolia-sunset-point-netarhat-328633686.jpg',
      description: 'Picturesque hill station known as the "Queen of Chotanagpur"',
      location: 'Latehar'
    },
    {
      name: 'Betla National Park',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Entrance_of_Betla_national_park.jpg',
      description: 'Wildlife sanctuary with elephants, tigers, and rich biodiversity',
      location: 'Palamu'
    },
    {
      name: 'Parasnath Hill',
      image: 'https://t3.ftcdn.net/jpg/06/44/90/42/360_F_644904289_NbXKTKISNlcpn6ttB2P3upo1IIPqpeKE.jpg',
      description: 'Sacred Jain pilgrimage site, highest peak in Jharkhand',
      location: 'Giridih'
    },
    {
      name: 'Dassam Falls',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/38/ae/99/dassam-falls.jpg?w=900&h=500&s=1',
      description: 'Stunning ten-streamed waterfall with picnic and scenic views',
      location: 'Near Ranchi'
    }
  ];

  const economicData = [
    { sector: 'Mining & Minerals', percentage: 40, description: 'Coal, iron ore, copper, uranium', color: 'from-yellow-700 to-yellow-900' },
    { sector: 'Industries', percentage: 25, description: 'Steel, power, heavy engineering (Tata, Bokaro)', color: 'from-gray-600 to-gray-800' },
    { sector: 'Agriculture', percentage: 15, description: 'Paddy, pulses, oilseeds', color: 'from-green-500 to-green-700' },
    { sector: 'Forestry & Handicrafts', percentage: 10, description: 'Lac cultivation, bamboo, tribal crafts', color: 'from-green-300 to-green-500' },
    { sector: 'Services & IT', percentage: 10, description: 'Emerging IT hubs and education sector', color: 'from-blue-400 to-blue-600' }
  ];

  const culturalElements = [
    {
      title: 'Folk Dances & Music',
      icon: Music,
      items: ['Chhau', 'Jhumar', 'Paika'],
      image: 'https://i.pinimg.com/736x/70/4c/bb/704cbba5ca73f38b276f8f2ac332b1b6.jpg',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Festivals',
      icon: Star,
      items: ['Sarhul', 'Karma', 'Tusu Parab'],
      image: 'https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2022/04/07080859/Sarhul-Festival-04-1.jpg',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      title: 'Craft & Handicrafts',
      icon: Mountain,
      items: ['Dokra art', 'Bamboo crafts', 'Wood carvings'],
      image: 'https://cdn.shopify.com/s/files/1/1194/1498/files/b9_bfe93869-fcdf-4306-a1f4-ed3bfad82e93_480x480.jpg?v=1713962843',
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Cuisine',
      icon: Utensils,
      items: ['Thekua', 'Dhuska', 'Handia (fermented rice drink)', 'Litti-Chokha'],
      image: 'https://assets.cntraveller.in/photos/656094b7b1b23f6efc757456/16:9/w_1024%2Cc_limit/IMG_6472.jpeg',
      gradient: 'from-brown-500 to-yellow-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'Statehood Status',
      icon: Flag,
      description: 'Carved out of Bihar on November 15, 2000',
      details: [
        '28th state of India',
        'Unicameral legislature with 81 MLAs',
        'Governor and CM as executive heads'
      ],
      color: 'from-green-600 to-green-800'
    },
    {
      title: 'Administrative Divisions',
      icon: Building2,
      description: '24 districts grouped into five divisions',
      details: [
        'Key cities: Ranchi, Dhanbad, Jamshedpur',
        'Tribal districts: Simdega, Gumla, Khunti'
      ],
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Governance Structure',
      icon: Users2,
      description: 'Tribal autonomy and Panchayati Raj system',
      details: [
        'Sixth Schedule for tribal areas',
        'Strong Gram Sabha role under PESA Act'
      ],
      color: 'from-purple-600 to-purple-800'
    },
    {
      title: 'Electoral System',
      icon: Vote,
      description: 'Democratic elections with high tribal participation',
      details: [
        'Lok Sabha: 14 seats',
        'Rajya Sabha: 6 seats',
        'State Assembly: 81 seats'
      ],
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const politicalParties = [
    { name: 'Jharkhand Mukti Morcha (JMM)', region: 'Ruling party (2023)', color: 'bg-green-100', textColor: 'text-green-800' },
    { name: 'Bharatiya Janata Party (BJP)', region: 'Main opposition', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Indian National Congress (INC)', region: 'Alliance with JMM', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'AJSU Party', region: 'Influential in central districts', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Tribal Rights & Autonomy',
      description: 'Issues around land alienation and self-rule',
      impact: 'Protests against land acquisition laws',
      status: 'Implementation of CNT & SPT Acts and PESA'
    },
    {
      title: 'Mining & Land Acquisition',
      description: 'Tensions over displacement from mining zones',
      impact: 'Legal battles and mass movements',
      status: 'Ongoing compensation and rehabilitation policies'
    },
    {
      title: 'Naxal Influence',
      description: 'Presence in remote tribal districts',
      impact: 'Security operations and development focus',
      status: 'Declining influence, but still under monitoring'
    },
    {
      title: 'Urban-Industrial Balance',
      description: 'Conflicts between industrialization and environment',
      impact: 'Citizen protests in Ranchi, Jamshedpur areas',
      status: 'Policy revisions and green clearances'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Panchi & Parhan',
      region: 'Women (Santhal, Oraon)',
      description: 'Handwoven cloth with bright tribal designs',
      features: ['Colorful wrap', 'Beaded jewelry', 'Tribal motifs'],
      image: 'https://www.utsavpedia.com/wp-content/uploads/2013/07/Traditional-Costume-of-Jharkhand3.jpg',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      name: 'Dhoti-Kurta with Gamcha',
      region: 'Men (Tribal and Rural)',
      description: 'Traditional cotton wear with tribal headgear',
      features: ['Light fabric', 'Turban/Head scarf'],
      image: 'https://www.indiatravel.app/wp-content/uploads/2024/10/Bhagwan-and-Dokanda-200x300.png',
      gradient: 'from-yellow-600 to-brown-700'
    },
    {
      name: 'Modern Saree with Tribal Patterns',
      region: 'Urban & Semi-Urban Women',
      description: 'Blend of traditional tribal and modern wear',
      features: ['Tribal embroidery', 'Beaded ornaments'],
      image: 'https://i.pinimg.com/474x/db/45/a0/db45a043f9e1c1ead3dc9e02239a7b56.jpg',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Kurta with Tribal Prints',
      region: 'Youth & Festive Wear',
      description: 'Ethnic wear with tribal motifs for men',
      features: ['Kurta-pajama combo', 'Printed jackets'],
      image: 'https://cdn.shopify.com/s/files/1/0044/1858/4651/files/IMG-20191002-WA0002_1024x1024.jpg',
      gradient: 'from-teal-500 to-blue-600'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-emerald-50 to-green-50">
        <div className="bg-white/90 backdrop-blur-md border-b border-yellow-200/50 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="outline" onClick={() => navigate('/')} className="flex items-center space-x-2 hover:bg-yellow-50">
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </Button>
                <div className="flex items-center space-x-2">
                  <Landmark className="text-green-700" size={28} />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-yellow-700 bg-clip-text text-transparent">
                    Jharkhand
                  </h1>
                </div>
              </div>
              <div className="text-sm text-gray-600 italic">
                "The Land of Forests & Tribal Heritage"
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section with Background Image */}
        <div className="relative h-80 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://trippyhills.in/wp-content/uploads/jet-engine-forms/11/2022/06/Sunrise-Point.jpg.webp)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-yellow-900/70"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to the Tribal Heartland of India</h2>
              <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Discover Jharkhand — where dense forests, waterfalls, and rich heritage thrive in harmony.
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
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-green-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-700 to-yellow-600 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-green-900">Capital</h3>
                    <p className="text-sm text-green-800">Ranchi</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-lime-50 to-lime-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center">
                      <Users className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-lime-800">Population</h3>
                    <p className="text-sm text-lime-700">~39.6 Million<br />Significant tribal population</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-700 rounded-full flex items-center justify-center">
                      <Mountain className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-emerald-800">Geography</h3>
                    <p className="text-sm text-emerald-700">Chotanagpur Plateau, forests<br />79,716 km²</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                      <Star className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-purple-800">Languages</h3>
                    <p className="text-sm text-purple-700">Hindi, Santali, Ho, Mundari, Kurukh</p>
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
                    <div className="text-center p-6 bg-gradient-to-br from-lime-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                      <div className="text-4xl mb-2">🌼</div>
                      <h4 className="font-semibold text-green-700 text-lg">Spring</h4>
                      <p className="text-sm text-green-600">Mar-May<br />20-30°C</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl hover:shadow-lg transition-all">
                      <div className="text-4xl mb-2">🌞</div>
                      <h4 className="font-semibold text-yellow-700 text-lg">Summer</h4>
                      <p className="text-sm text-yellow-600">May-Jun<br />30-45°C</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                      <div className="text-4xl mb-2">🌧️</div>
                      <h4 className="font-semibold text-blue-700 text-lg">Monsoon</h4>
                      <p className="text-sm text-blue-600">Jul-Sep<br />Heavy rainfall, lush greenery</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl hover:shadow-lg transition-all">
                      <div className="text-4xl mb-2">❄️</div>
                      <h4 className="font-semibold text-slate-700 text-lg">Winter</h4>
                      <p className="text-sm text-slate-600">Nov-Feb<br />5-20°C</p>
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
                          src="https://images.unsplash.com/photo-1581938921711-8cd4c1df231d?auto=format&fit=crop&w=800&q=60" 
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
                    <Building2 className="mr-3 text-blue-600" size={32} />
                    Key Political Features & Changes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {keyPoliticalFeatures.map((feature, index) => (
                      <div key={index} className="bg-gradient-to-r from-yellow-50 to-green-100 p-6 rounded-xl">
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
                      <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Legislative Assembly (81 Seats)</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">⚖️ Jharkhand High Court at Ranchi</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">📋 Active Gram Panchayats & Zila Parishads</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🏘️ 24 Districts including Ranchi, Dhanbad, Jamshedpur</li>
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
                      <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~2.6 Crore</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 81</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 14</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~29,000+</li>
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
                      { name: 'Thekua (Sweet Wheat Cookie)', emoji: '🍪' },
                      { name: 'Litti Chokha', emoji: '🥔' },
                      { name: 'Handia (Rice Beer)', emoji: '🍶' },
                      { name: 'Chilka Roti', emoji: '🥞' },
                      { name: 'Rugra (Mushroom Curry)', emoji: '🍄' },
                      { name: 'Malpua (Sweet Pancake)', emoji: '🧁' }
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
                      <li className="flex items-center p-2 bg-white/50 rounded">🌾 Paddy (Major crop)</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🌽 Maize & Pulses</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🥜 Oilseeds – Mustard & Groundnut</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🍠 Vegetables – Potato, Brinjal, Tomato</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🍌 Fruits – Mango, Banana, Guava</li>
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
                      <li className="flex items-center p-2 bg-white/50 rounded">🧺 Bamboo & Cane products</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🪶 Tribal jewelry & beadwork</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🪵 Wood carvings & masks</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🖼️ Sohrai & Kohbar wall paintings</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🧣 Handloom textiles & cotton fabrics</li>
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
                      <li className="flex items-center p-2 bg-white/50 rounded">⛏️ Mining – Coal, Iron Ore, Bauxite</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Steel – Tata Steel (Jamshedpur)</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">⚙️ Heavy Engineering – HEC Ranchi</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">💡 Power – Thermal & Hydro Projects</li>
                      <li className="flex items-center p-2 bg-white/50 rounded">🧵 Handloom & Agro-based industries</li>
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
                      src="https://latehartourism.com/wp-content/uploads/2018/10/maim-59-1024x680.jpg" 
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
                            <p className="text-sm mt-1">Asian Elephants</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <span className="text-2xl">🐅</span>
                            <p className="text-sm mt-1">Bengal Tigers</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <span className="text-2xl">🦌</span>
                            <p className="text-sm mt-1">Spotted Deer & Sambar</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <span className="text-2xl">🦜</span>
                            <p className="text-sm mt-1">Parakeets & Hornbills</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <span className="text-2xl">🌳</span>
                            <p className="text-sm mt-1">Sal & Teak Forests</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <span className="text-2xl">🌿</span>
                            <p className="text-sm mt-1">Medicinal Herbs</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <span className="text-2xl">🌾</span>
                            <p className="text-sm mt-1">Bamboo Groves</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <span className="text-2xl">🍃</span>
                            <p className="text-sm mt-1">Diverse Shrubs & Creepers</p>
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
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c3/cc/4c/dassam-falls.jpg?w=1200&h=-1&s=1" 
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
                        <span>Chota Nagpur Plateau</span>
                      </li>
                      <li className="flex items-center p-3 bg-green-50 rounded-lg">
                        <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                        <span>Forested Hills & Valleys</span>
                      </li>
                      <li className="flex items-center p-3 bg-yellow-50 rounded-lg">
                        <span className="w-5 h-5 bg-yellow-400 rounded mr-3"></span>
                        <span>Rivers – Subarnarekha, Damodar, Koel</span>
                      </li>
                      <li className="flex items-center p-3 bg-indigo-50 rounded-lg">
                        <span className="w-5 h-5 bg-indigo-400 rounded mr-3"></span>
                        <span>Waterfalls – Hundru, Dassam, Jonha</span>
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
                      'Betla National Park',
                      'Dalma Wildlife Sanctuary',
                      'Palamau Tiger Reserve',
                      'Hazaribagh Wildlife Sanctuary',
                      'Palkot Wildlife Sanctuary',
                      'Lawalong Wildlife Sanctuary'
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
                        <span className="font-bold text-blue-600 text-lg">67.6%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                        <span className="flex items-center">
                          <span className="text-xl mr-2">🏙️</span>
                          Urban Population
                        </span>
                        <span className="font-bold text-green-600 text-lg">24.05%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                        <span className="flex items-center">
                          <span className="text-xl mr-2">🌾</span>
                          Rural Population
                        </span>
                        <span className="font-bold text-orange-600 text-lg">75.95%</span>
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
                        { name: 'Sarhul', emoji: '🌿' },
                        { name: 'Karma Puja', emoji: '🪵' },
                        { name: 'Tusu Parab', emoji: '🎊' },
                        { name: 'Jani Shikar (Tribal Festival)', emoji: '🪓' },
                        { name: 'Chhath Puja', emoji: '🌅' }
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
                        <li className="bg-white/60 p-2 rounded">Jhumar & Paika Dance</li>
                        <li className="bg-white/60 p-2 rounded">Chhau Dance (Seraikela)</li>
                        <li className="bg-white/60 p-2 rounded">Santhali Folk Music</li>
                        <li className="bg-white/60 p-2 rounded">Mandar & Nagara Drums</li>
                      </ul>
                    </div>

                    {/* Handicrafts */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                      <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                        <span className="text-2xl mr-2">🎨</span>
                        Handicrafts
                      </h4>
                      <ul className="space-y-2">
                        <li className="bg-white/60 p-2 rounded">Dokra Metal Craft</li>
                        <li className="bg-white/60 p-2 rounded">Terracotta & Bamboo Items</li>
                        <li className="bg-white/60 p-2 rounded">Tribal Jewelry</li>
                        <li className="bg-white/60 p-2 rounded">Wood & Stone Carvings</li>
                      </ul>
                    </div>

                    {/* Oral Literature */}
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                      <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                        <span className="text-2xl mr-2">📚</span>
                        Oral Literature
                      </h4>
                      <ul className="space-y-2">
                        <li className="bg-white/60 p-2 rounded">Santhali & Ho Folk Tales</li>
                        <li className="bg-white/60 p-2 rounded">Local Proverbs & Songs</li>
                        <li className="bg-white/60 p-2 rounded">Myths of Munda Tribes</li>
                        <li className="bg-white/60 p-2 rounded">Heroic Legends & Chants</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Jharkhand;