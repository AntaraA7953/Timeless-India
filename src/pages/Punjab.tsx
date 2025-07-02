import React, { useState } from 'react';
import { ArrowLeft, MapPin, Wheat, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePalm, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Punjab = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    { 
      name: 'Golden Temple', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg', 
      description: 'Holiest Gurdwara of Sikhism',
      location: 'Amritsar'
    },
    { 
      name: 'Jallianwala Bagh', 
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/jallianwala-bagh-amritsar-punjab-5-musthead-hero?qlt=82&ts=1726662282486', 
      description: 'Historic memorial of 1919 massacre',
      location: 'Amritsar'
    },
    { 
      name: 'Wagah Border', 
      image: 'https://s3.ap-south-1.amazonaws.com/static.dynamitenews.com/wp-content/uploads/2018/08/01/new-gates-soon-at-attari-wagah-border/5b619699d8df7.jpeg', 
      description: 'India-Pakistan border ceremony',
      location: 'Amritsar'
    },
    { 
      name: 'Anandpur Sahib', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/1_Sri_Kesgarh_Takhat_Anandpur_Sahib_Khalsa_birthplace_Punjab_India.jpg', 
      description: 'Holy city of Sikhs',
      location: 'Rupnagar'
    },
    { 
      name: 'Sheesh Mahal', 
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/sheesh-mahal-patiala-punjab-1-attr-hero?qlt=82&ts=1726661804953', 
      description: 'Palace of Mirrors',
      location: 'Patiala'
    },
    { 
      name: 'Rock Garden', 
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/chandigarh-rock-garden-cover.jpg', 
      description: 'Unique sculpture garden',
      location: 'Chandigarh'
    }
  ];

  const economicData = [
    { sector: 'Agriculture', percentage: 28, description: 'Wheat, rice, sugarcane', color: 'from-green-400 to-green-600' },
    { sector: 'Industry', percentage: 25, description: 'Textiles, machinery, auto parts', color: 'from-blue-400 to-blue-600' },
    { sector: 'Services', percentage: 47, description: 'IT, tourism, banking', color: 'from-purple-400 to-purple-600' }
  ];

  const culturalElements = [
    { 
      title: 'Sikh Heritage', 
      icon: Star, 
      items: ['Gurdwaras', 'Gatka Martial Arts', 'Gurbani Kirtan'],
      image: 'https://www.shutterstock.com/image-photo/golden-temple-amritsar-punjab-india-260nw-613195721.jpg',
      gradient: 'from-orange-400 to-red-500'
    },
    { 
      title: 'Punjabi Folk Culture', 
      icon: Music, 
      items: ['Bhangra Dance', 'Giddha Dance', 'Punjabi Folk Songs'],
      image: 'https://www.ancientbharat.com/wp-content/uploads/2022/02/Bhangra-640x348.png',
      gradient: 'from-emerald-400 to-teal-500'
    },
    { 
      title: 'Cuisine', 
      icon: Utensils, 
      items: ['Sarson da Saag', 'Makki di Roti', 'Butter Chicken', 'Lassi'],
      image: 'https://c.ndtvimg.com/2022-07/g2rnr1u_saag_120x90_08_July_22.png',
      gradient: 'from-amber-400 to-yellow-500'
    },
    { 
      title: 'Festivals', 
      icon: Calendar, 
      items: ['Baisakhi', 'Lohri', 'Gurpurab', 'Teej'],
      image: 'https://static.toiimg.com/thumb/msid-90802194,width-1280,height-720,resizemode-4/90802194.jpg',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'State Government',
      icon: Flag,
      description: 'Elected state government with Chief Minister',
      details: ['Legislative Assembly (117 seats)', 'Governor as constitutional head', 'High Court in Chandigarh'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Administrative Divisions',
      icon: Building2,
      description: '23 districts across 5 divisions',
      details: ['Patiala Division', 'Faridkot Division', 'Ferozepur Division', 'Jalandhar Division', 'Rupnagar Division'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Local Governance',
      icon: Users2,
      description: 'Three-tier Panchayati Raj system',
      details: ['Zila Parishads', 'Panchayat Samitis', 'Gram Panchayats'],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const politicalParties = [
    { name: 'Aam Aadmi Party (AAP)', region: 'Pan-Punjab', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Shiromani Akali Dal (SAD)', region: 'Punjab-based', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Indian National Congress', region: 'Pan-Punjab', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Bharatiya Janata Party (BJP)', region: 'Urban areas', color: 'bg-red-100', textColor: 'text-red-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Punjab Accord',
      description: '1985 agreement between Rajiv Gandhi and Sant Longowal',
      impact: 'Resolved some demands of Punjab',
      status: 'Historical'
    },
    {
      title: 'Agricultural Laws Repeal',
      description: 'Farmers protest led to repeal of farm laws',
      impact: 'Major victory for Punjab farmers',
      status: '2021'
    },
    {
      title: 'Water Sharing Disputes',
      description: 'Ongoing disputes with neighboring states',
      impact: 'Affects agriculture and economy',
      status: 'Ongoing'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Punjabi Suit',
      region: 'Women',
      description: 'Colorful traditional attire with dupatta',
      features: ['Salwar Kameez', 'Bright colors', 'Phulkari embroidery', 'Chunni'],
      image: 'https://cdn0.weddingwire.in/article/3443/3_2/1280/jpg/63443-ladiespunjabidress-kirandeepphotography-lead.webp',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Kurta Pajama',
      region: 'Men',
      description: 'Traditional outfit with turban',
      features: ['Loose fitting', 'Cotton fabric', 'Often white', 'Pagri (turban)'],
      image: 'https://i.pinimg.com/736x/5d/63/f2/5d63f22730ef3ea060d361d5a59b907c.jpg',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      name: 'Phulkari',
      region: 'Women',
      description: 'Traditional embroidery work',
      features: ['Floral patterns', 'Bright threads', 'Shawls and dupattas', 'Heritage craft'],
      image: 'https://itokri.com/cdn/shop/articles/Phulkari_Banner_Image_d72efdd2-9104-4456-a3c1-622ee5637d39.jpg?v=1748412731&width=1500',
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-orange-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:bg-orange-50"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Wheat className="text-orange-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Punjab
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Land of Five Rivers"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://bega-static.s3.us-east-2.amazonaws.com/userfiles/images/03_Projects/pj_harmandir_01.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Explore the Heart of India</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover the vibrant culture, rich history, and agricultural abundance of Punjab
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 bg-white/70 backdrop-blur-sm h-auto p-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Overview</TabsTrigger>
              <TabsTrigger value="politics" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Politics</TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Culture</TabsTrigger>
              <TabsTrigger value="economy" className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Economy</TabsTrigger>
              <TabsTrigger value="tourism" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Tourism</TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Nature</TabsTrigger>
              <TabsTrigger value="society" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Society</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-orange-800">Capital</h3>
                  <p className="text-sm text-orange-600">Chandigarh<br/>(Shared with Haryana)</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Population</h3>
                  <p className="text-sm text-green-600">27.7 Million<br/>Punjabi majority</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Wheat className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Geography</h3>
                  <p className="text-sm text-blue-600">Fertile plains<br/>50,362 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-yellow-800">Languages</h3>
                  <p className="text-sm text-yellow-600">Punjabi (official)<br/>Hindi, English</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-orange-500" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌸</div>
                    <h4 className="font-semibold text-orange-700 text-lg">Spring</h4>
                    <p className="text-sm text-orange-600">Feb-Mar<br/>15-25°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-red-100 to-red-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">☀️</div>
                    <h4 className="font-semibold text-red-700 text-lg">Summer</h4>
                    <p className="text-sm text-red-600">Apr-Jun<br/>30-45°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-green-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-green-600">Jul-Sep<br/>25-35°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">❄️</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
                    <p className="text-sm text-gray-600">Oct-Jan<br/>5-20°C</p>
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
                        src="https://thumbs.dreamstime.com/b/activists-protest-political-riot-sign-banners-people-holding-protests-placards-manifestation-banner-jobs-activist-strike-138923436.jpg"
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
                          feature.status === '2021' ? 'bg-green-200 text-green-700' :
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
              <Card className="border-0 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Current Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 AAP Government</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ High Court at Chandigarh</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Election Commission</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~2.1 Crore</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 117</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 13</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~24,000</li>
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
                    { name: 'Sarson da Saag', emoji: '🥬' },
                    { name: 'Makki di Roti', emoji: '🫓' },
                    { name: 'Butter Chicken', emoji: '🍗' },
                    { name: 'Chole Bhature', emoji: '🥘' },
                    { name: 'Amritsari Kulcha', emoji: '🧅' },
                    { name: 'Lassi', emoji: '🥛' }
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🌾 Wheat & Rice</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌽 Maize & Barley</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍯 Sugarcane</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🥜 Cotton & Oilseeds</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🧵 Textiles</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚡ Power Generation</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🚗 Auto Parts</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍶 Dairy Products</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">💼</span>
                    Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏦 Banking & Finance</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏨 Tourism</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">💻 IT Services</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🚚 Logistics</li>
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
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center text-2xl">
                      <Camera className="mr-3 text-orange-500" size={32} />
                      {selectedAttraction.name}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedAttraction(null)}
                      className="hover:bg-orange-100"
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
                        <span className="flex items-center bg-orange-100 px-3 py-1 rounded-full">
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
                    src="https://www.shutterstock.com/image-photo/maze-field-punjab-260nw-1117406792.jpg" 
                    alt="Wildlife"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TreePalm className="text-white" size={48} />
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
                          <span className="text-2xl">🐆</span>
                          <p className="text-sm mt-1">Blackbuck</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦌</span>
                          <p className="text-sm mt-1">Sambar Deer</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐻</span>
                          <p className="text-sm mt-1">Sloth Bear</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦅</span>
                          <p className="text-sm mt-1">Peacock</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌾</span>
                          <p className="text-sm mt-1">Wheat Fields</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌿</span>
                          <p className="text-sm mt-1">Mustard Fields</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌳</span>
                          <p className="text-sm mt-1">Shisham Trees</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌻</span>
                          <p className="text-sm mt-1">Sunflower Fields</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584890769337-4ccd5aec09bb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHB1bmphYnxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Rivers"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🌊</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Rivers & Wetlands</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-xl mr-3">🌊</span>
                      <span>Five Rivers (Beas, Sutlej, Ravi, Chenab, Jhelum)</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-xl mr-3">🦆</span>
                      <span>Harike Wetland</span>
                    </li>
                    <li className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-xl mr-3">🏞️</span>
                      <span>Kanjli Wetland</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Protected Areas & Wildlife Sanctuaries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Harike Wildlife Sanctuary',
                    'Abohar Wildlife Sanctuary',
                    'Bir Moti Bagh Wildlife Sanctuary',
                    'Bir Gurdialpura Wildlife Sanctuary',
                    'Jhajjar Bacholi Wildlife Sanctuary',
                    'Kathlaur Kushlian Wildlife Sanctuary'
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
                      <span className="font-bold text-blue-600 text-lg">75.84%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">37.48%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">62.52%</span>
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
                      { name: 'Baisakhi', emoji: '🌾' },
                      { name: 'Lohri', emoji: '🔥' },
                      { name: 'Gurpurab', emoji: '🕉️' },
                      { name: 'Hola Mohalla', emoji: '⚔️' },
                      { name: 'Teej', emoji: '💃' }
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
                      <li className="bg-white/60 p-2 rounded">Bhangra</li>
                      <li className="bg-white/60 p-2 rounded">Giddha</li>
                      <li className="bg-white/60 p-2 rounded">Dhadi</li>
                      <li className="bg-white/60 p-2 rounded">Folk Songs</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Phulkari Embroidery</li>
                      <li className="bg-white/60 p-2 rounded">Jutti Making</li>
                      <li className="bg-white/60 p-2 rounded">Punjabi Paranda</li>
                      <li className="bg-white/60 p-2 rounded">Woodwork</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Literature
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Punjabi Poetry</li>
                      <li className="bg-white/60 p-2 rounded">Sufi Literature</li>
                      <li className="bg-white/60 p-2 rounded">Folk Tales</li>
                      <li className="bg-white/60 p-2 rounded">Modern Novels</li>
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

export default Punjab;
