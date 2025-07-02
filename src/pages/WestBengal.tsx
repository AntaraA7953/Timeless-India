import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const WestBengal = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    { 
      name: 'Victoria Memorial', 
      image: 'https://images.unsplash.com/photo-1651651166379-06540f274707?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmljdG9yaWElMjBtZW1vcmlhbHxlbnwwfHwwfHx8MA%3D%3D', 
      description: 'Iconic marble building dedicated to Queen Victoria',
      location: 'Kolkata'
    },
    { 
      name: 'Sundarbans', 
      image: 'https://www.holidify.com/images/bgImages/SUNDARBAN-NATIONAL-PARK.jpg', 
      description: 'Largest mangrove forest and tiger reserve',
      location: 'South 24 Parganas'
    },
    { 
      name: 'Darjeeling', 
      image: 'https://hikerwolf.com/wp-content/uploads/2020/04/Darjeeling-toy-train-route.jpg', 
      description: 'Famous for tea gardens and Himalayan views',
      location: 'Darjeeling District'
    },
    { 
      name: 'Dakshineswar Kali Temple', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Dakhineshwar_Temple_beside_the_Hoogly%2C_West_Bengal.JPG/960px-Dakhineshwar_Temple_beside_the_Hoogly%2C_West_Bengal.JPG', 
      description: 'Sacred Hindu temple on the Ganges',
      location: 'Kolkata'
    },
    { 
      name: 'Bishnupur Terracotta Temples', 
      image: 'https://www.team-bhp.com/forum/attachments/travelogues/114876d1237741112-terracotta-temples-bishnupur-shyamrai1.jpg', 
      description: 'Ancient temples with intricate terracotta artwork',
      location: 'Bankura District'
    },
    { 
      name: 'Shantiniketan', 
      image: 'https://th-i.thgim.com/public/news/national/or8s0e/article67318727.ece/alternates/LANDSCAPE_1200/santiniketan.jpg', 
      description: 'Rabindranath Tagore\'s university town',
      location: 'Birbhum District'
    }
  ];

  const economicData = [
    { sector: 'Agriculture', percentage: 28, description: 'Rice, jute, tea, potatoes', color: 'from-green-400 to-green-600' },
    { sector: 'Industry', percentage: 22, description: 'Steel, chemicals, textiles', color: 'from-blue-400 to-blue-600' },
    { sector: 'Services', percentage: 50, description: 'IT, finance, tourism', color: 'from-purple-400 to-purple-600' }
  ];

  const culturalElements = [
    { 
      title: 'Bengali Renaissance', 
      icon: Users, 
      items: ['Rabindranath Tagore', 'Bankim Chandra Chatterjee', 'Satyajit Ray'],
      image: 'https://southasia.berkeley.edu/sites/default/files/styles/panopoly_image_original/public/portrait_of_rabindranath_tagore_photographed_during_bengali_wikipedia_10th_anniversary_celebration_jadavpur_university_campus5887.jpg?itok=FhcUEY-u&timestamp=1720543332',
      gradient: 'from-orange-400 to-red-500'
    },
    { 
      title: 'Durga Puja', 
      icon: Star, 
      items: ['UNESCO Heritage Festival', 'Pandal Hopping', 'Traditional Dhak'],
      image: 'https://english.cdn.zeenews.com/sites/default/files/2021/10/12/978709-durga-ranchi.jpg',
      gradient: 'from-emerald-400 to-teal-500'
    },
    { 
      title: 'Folk Traditions', 
      icon: Mountain, 
      items: ['Baul Music', 'Chhau Dance', 'Jatra Theater'],
      image: 'https://cdn.yehaindia.com/wp-content/uploads/2022/06/Chhau-cover.jpg',
      gradient: 'from-amber-400 to-yellow-500'
    },
    { 
      title: 'Literary Heritage', 
      icon: TreePine, 
      items: ['Nobel Laureates', 'Bengali Literature', 'Poetry Movements'],
      image: 'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/news/images/a_noobs_guide_to_bangla_literature_2.jpg',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'State Government',
      icon: Flag,
      description: 'Parliamentary system of government',
      details: ['Chief Minister as Head', 'Governor as Constitutional Head', 'Unicameral Legislature (294 seats)'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Administrative Divisions',
      icon: Building2,
      description: '23 Districts across 5 divisions',
      details: ['Presidency Division', 'Burdwan Division', 'Medinipur Division', 'Malda Division', 'Jalpaiguri Division'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Local Governance',
      icon: Users2,
      description: 'Three-tier Panchayati Raj system',
      details: ['Gram Panchayat (Village level)', 'Panchayat Samiti (Block level)', 'Zila Parishad (District level)'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Electoral System',
      icon: Vote,
      description: 'Democratic representation',
      details: ['Lok Sabha: 42 seats', 'Legislative Assembly: 294 seats', 'Rajya Sabha: 16 seats'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const politicalParties = [
    { name: 'All India Trinamool Congress (TMC)', region: 'State-wide', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Bharatiya Janata Party (BJP)', region: 'State-wide', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Communist Party of India (Marxist)', region: 'State-wide', color: 'bg-red-100', textColor: 'text-red-700' },
    { name: 'Indian National Congress', region: 'State-wide', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Revolutionary Socialist Party', region: 'State-wide', color: 'bg-purple-100', textColor: 'text-purple-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Left Front Rule',
      description: 'Longest elected communist government in world history',
      impact: 'Land reforms and panchayati raj system',
      status: 'Historical (1977-2011)'
    },
    {
      title: 'TMC Dominance',
      description: 'Current ruling party since 2011',
      impact: 'Welfare schemes and development projects',
      status: 'Current'
    },
    {
      title: 'BJP Expansion',
      description: 'Significant growth since 2014',
      impact: 'Changed political dynamics',
      status: 'Recent'
    },
    {
      title: 'Land Acquisition',
      description: 'Sensitive political issue',
      impact: 'Farmers movements and policy changes',
      status: 'Ongoing'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Bengali Saree',
      region: 'State-wide',
      description: 'Traditional attire for women with distinct draping style',
      features: ['White with red border', 'Cotton or silk', 'Baluchari/Kantha work', 'Worn with traditional jewelry'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/11/466674583/SD/KZ/HX/18526633/bengali-taussar-saree-500x500.jpg',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Dhoti-Panjabi',
      region: 'State-wide',
      description: 'Traditional attire for men',
      features: ['White dhoti', 'Kurta or panjabi', 'Often worn with shawl', 'Common in cultural events'],
      image: 'https://i.pinimg.com/736x/0e/7a/80/0e7a809eefdfede52f51260abfec2cb4.jpg',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      name: 'Tribal Attire',
      region: 'Jalpaiguri, Alipurduar',
      description: 'Traditional wear of tribal communities',
      features: ['Colorful fabrics', 'Beaded jewelry', 'Distinct headgear', 'Handwoven textiles'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUTAfaLD4w7VBB35CHSzttCckUIba1bd7vBA1zCKhzZ2gh1_8Cztofv9ZwiLu27qdVAo&usqp=CAU',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      name: 'Jamdani',
      region: 'Murshidabad, Nadia',
      description: 'Fine muslin textile with geometric patterns',
      features: ['Delicate weaving', 'Traditional motifs', 'Lightweight fabric', 'Heritage craft'],
      image: 'https://media.istockphoto.com/id/872166732/photo/an-intangible-cultural-heritage-of-humanity.jpg?s=612x612&w=0&k=20&c=4Kzv8GTUEbwqicLdgNaVgSbJCq-LnAsDq-8pAp9Lf9w=',
      gradient: 'from-purple-400 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
                <Mountain className="text-blue-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  West Bengal
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "The Sweetest Part of India"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://victoriamemorial-cal.org/media/2024/04/Victoria-Memorial-Hall-Kolkata.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Explore the Cultural Capital of India</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover the rich heritage, artistic traditions, and diverse landscapes of West Bengal
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 bg-white/70 backdrop-blur-sm h-auto p-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Overview</TabsTrigger>
              <TabsTrigger value="politics" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Politics</TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Culture</TabsTrigger>
              <TabsTrigger value="economy" className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Economy</TabsTrigger>
              <TabsTrigger value="tourism" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Tourism</TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Nature</TabsTrigger>
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
                  <p className="text-sm text-blue-600">Kolkata<br/>Cultural & Commercial Hub</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Population</h3>
                  <p className="text-sm text-green-600">91.3 Million<br/>2nd most populous state</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Mountain className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Geography</h3>
                  <p className="text-sm text-purple-600">Ganges Delta<br/>88,752 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-yellow-800">Languages</h3>
                  <p className="text-sm text-yellow-600">Bengali (Official)<br/>Hindi, English, Urdu</p>
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
                    <div className="text-4xl mb-2">🌸</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Winter</h4>
                    <p className="text-sm text-blue-600">Dec-Feb<br/>12-23°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">☀️</div>
                    <h4 className="font-semibold text-green-700 text-lg">Summer</h4>
                    <p className="text-sm text-green-600">Mar-Jun<br/>24-40°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-orange-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-orange-600">Jun-Sep<br/>Heavy rainfall</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🍂</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Autumn</h4>
                    <p className="text-sm text-gray-600">Oct-Nov<br/>Pleasant weather</p>
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
                          feature.status === 'Current' ? 'bg-green-200 text-green-700' :
                          feature.status === 'Recent' ? 'bg-blue-200 text-blue-700' :
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Chief Minister: Mamata Banerjee</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ High Court at Kolkata</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~66 Million</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 294</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 42</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~78,000</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Parties: 100+</li>
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
                    { name: 'Macher Jhol', emoji: '🐟' },
                    { name: 'Mishti Doi', emoji: '🍮' },
                    { name: 'Rasgulla', emoji: '🍡' },
                    { name: 'Shorshe Ilish', emoji: '🥘' },
                    { name: 'Luchi-Alur Dom', emoji: '🍛' },
                    { name: 'Sandesh', emoji: '🍬' }
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🌾 Rice (Major producer)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🎋 Jute (Golden fiber)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍵 Tea (Darjeeling famous)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🥔 Potatoes (2nd largest producer)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍊 Fruits (Mango, litchi)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏭</span>
                    Industries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Steel (Durgapur, Burnpur)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧵 Jute Textiles</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚡ Power (Thermal, Hydro)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">💊 Pharmaceuticals</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🖥️ IT (Salt Lake, New Town)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🛍️</span>
                    Trade & Commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🛒 Kolkata Port (Major trade hub)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📦 Haldia Port (Petrochemicals)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Financial Services</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🛒 Retail Sector (Growing)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">✈️ Tourism (Significant)</li>
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
                    src="https://www.wildbengal.com/images/slider/01.jpg" 
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
                          <p className="text-sm mt-1">Royal Bengal Tiger</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐊</span>
                          <p className="text-sm mt-1">Saltwater Crocodile</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦅</span>
                          <p className="text-sm mt-1">Fish Eagle</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦌</span>
                          <p className="text-sm mt-1">Spotted Deer</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌴</span>
                          <p className="text-sm mt-1">Sundari Trees</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌿</span>
                          <p className="text-sm mt-1">Mangrove Forests</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌸</span>
                          <p className="text-sm mt-1">Orchids</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌲</span>
                          <p className="text-sm mt-1">Sal Trees</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                  <img 
                    src="https://media.istockphoto.com/id/1164517176/photo/historic-howrah-bridge-with-boat-on-river-ganges-at-kolkata-india.jpg?s=612x612&w=0&k=20&c=aZX8zvFV5O1qtoWnv-gPtiW1eRPlUHeK_vjh87qLMU8=" 
                    alt="Rivers"
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
                      <span className="w-5 h-5 bg-blue-400 rounded mr-3"></span>
                      <span>Ganges Delta (Sundarbans)</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                      <span>Darjeeling Himalayas</span>
                    </li>
                    <li className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <span className="w-5 h-5 bg-purple-400 rounded mr-3"></span>
                      <span>Rarh Region</span>
                    </li>
                    <li className="flex items-center p-3 bg-orange-50 rounded-lg">
                      <span className="w-5 h-5 bg-orange-400 rounded mr-3"></span>
                      <span>Coastal Plains</span>
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
                    'Sundarbans National Park',
                    'Buxa Tiger Reserve',
                    'Gorumara National Park',
                    'Neora Valley National Park',
                    'Singalila National Park',
                    'Jaldapara National Park'
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
                      <span className="font-bold text-blue-600 text-lg">77.08%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">31.89%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">68.11%</span>
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
                      { name: 'Durga Puja', emoji: '🪔' },
                      { name: 'Kali Puja', emoji: '🖤' },
                      { name: 'Poila Boishakh', emoji: '🎉' },
                      { name: 'Christmas', emoji: '🎄' },
                      { name: 'Eid', emoji: '🌙' }
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
                      <li className="bg-white/60 p-2 rounded">Baul Music</li>
                      <li className="bg-white/60 p-2 rounded">Rabindra Sangeet</li>
                      <li className="bg-white/60 p-2 rounded">Chhau Dance</li>
                      <li className="bg-white/60 p-2 rounded">Gambhira</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Terracotta</li>
                      <li className="bg-white/60 p-2 rounded">Kantha Embroidery</li>
                      <li className="bg-white/60 p-2 rounded">Dokra Metal Craft</li>
                      <li className="bg-white/60 p-2 rounded">Conch Shell Carving</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Literature
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Rabindranath Tagore</li>
                      <li className="bg-white/60 p-2 rounded">Bankim Chandra</li>
                      <li className="bg-white/60 p-2 rounded">Sarat Chandra</li>
                      <li className="bg-white/60 p-2 rounded">Modern Bengali Writers</li>
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

export default WestBengal;
