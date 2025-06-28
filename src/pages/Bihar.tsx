import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2,Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Bihar = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
  {
    name: 'Mahabodhi Temple',
    image: 'https://media.istockphoto.com/id/618355052/photo/mahabodhi-temple-bodh-gaya-india.jpg?s=612x612&w=0&k=20&c=KF732WEK2FfzQqBdr64blyklhxL3C5GmTioNNvEMgmo=',
    description: 'UNESCO World Heritage Site where Lord Buddha attained enlightenment',
    location: 'Bodh Gaya'
  },
  {
    name: 'Nalanda University Ruins',
    image: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/06/18140833/Nalanda-3.jpg',
    description: 'Ancient learning center and one of the world’s oldest universities',
    location: 'Nalanda'
  },
  {
    name: 'Vikramshila University Ruins',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Vikramshila-7.jpg',
    description: 'Historic Buddhist monastic university from the Pala period',
    location: 'Bhagalpur'
  },
  {
    name: 'Patna Sahib Gurudwara',
    image: 'https://cdnbbsr.s3waas.gov.in/s337d097caf1299d9aa79c2c2b843d2d78/uploads/2023/01/2023012060.jpg',
    description: 'One of the five Takhts of Sikhism, birthplace of Guru Gobind Singh',
    location: 'Patna'
  },
  {
    name: 'Rajgir',
    image: 'https://www.buddhisttourism.online/assets/images/rajgir-banner4.webp',
    description: 'Ancient city with hot springs, ropeway and Buddhist sites',
    location: 'Nalanda district'
  }
];



  const economicData = [
  { sector: 'Agriculture', percentage: 44, description: 'Paddy, wheat, sugarcane', color: 'from-green-400 to-green-600' },
  { sector: 'Dairy & Livestock', percentage: 18, description: 'Dairy farming and fisheries', color: 'from-yellow-400 to-yellow-600' },
  { sector: 'Textiles & Handlooms', percentage: 10, description: 'Bhagalpuri silk, handwoven fabrics', color: 'from-purple-400 to-purple-600' },
  { sector: 'Construction & Infrastructure', percentage: 14, description: 'Highways, urban development projects', color: 'from-blue-400 to-blue-600' },
  { sector: 'Tourism', percentage: 14, description: 'Religious and heritage tourism', color: 'from-red-400 to-red-600' }
];



  const culturalElements = [
  {
    title: 'Classical Heritage',
    icon: Users,
    items: ['Madhubani Art', 'Bihar School of Yoga', 'Bhojpuri Folk'],
    image: 'https://c9admin.cottage9.com/uploads/2611/exploring-the-elegance-of-eadha-krishna-in-madhubani-paintings.jpg',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Festivals',
    icon: Star,
    items: ['Chhath Puja', 'Sonepur Mela', 'Makar Sankranti'],
    image: 'https://www.livehindustan.com/lh-img/smart/img/2024/11/06/1200x900/chhath_puja_1730853769169_1730853769372.jpeg',
    gradient: 'from-red-400 to-pink-500'
  },
  {
    title: 'Buddhist Influence',
    icon: Mountain,
    items: ['Bodh Gaya culture', 'Ashokan heritage', 'Nalanda legacy'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Great_Buddha_Statue%2C_Bodh_Gaya.jpg',
    gradient: 'from-indigo-400 to-blue-500'
  },
  {
    title: 'Folk Crafts',
    icon: TreePine,
    items: ['Sikki Grass Work', 'Tikuli Art', 'Terracotta Pottery'],
    image: 'https://d2vbj8g7upsspg.cloudfront.net/filters:format(webp)/30-stades/media/post_attachments/rbWg0uHZslWxseijkZlt.jpg',
    gradient: 'from-green-400 to-teal-500'
  }
];

  const politicalStructure = [
  {
    title: 'Statehood Status',
    icon: Flag,
    description: 'Formed on March 22, 1912 (separated from Bengal)',
    details: [
      'Became a separate state post-independence in 1950',
      'Bicameral legislature with 243 Assembly seats',
      'Chief Minister leads the executive branch'
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'Administrative Divisions',
    icon: Building2,
    description: '38 districts as of 2025',
    details: [
      'Key cities: Patna, Gaya, Bhagalpur, Muzaffarpur',
      'Divided into 9 administrative divisions'
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Governance Structure',
    icon: Users2,
    description: 'Parliamentary system within Indian Constitution',
    details: [
      'Governor as constitutional head',
      'Panchayati Raj system active in rural areas',
      'Dual Houses: Vidhan Sabha and Vidhan Parishad'
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Electoral System',
    icon: Vote,
    description: 'Regular direct elections and upper house nominations',
    details: [
      'Lok Sabha: 40 seats',
      'Rajya Sabha: 16 seats',
      'Legislative Assembly: 243 seats'
    ],
    color: 'from-orange-400 to-orange-600'
  }
];


  const politicalParties = [
  { name: 'Janata Dal (United)', region: 'Leading party', color: 'bg-green-100', textColor: 'text-green-700' },
  { name: 'Bharatiya Janata Party (BJP)', region: 'Coalition partner', color: 'bg-orange-100', textColor: 'text-orange-700' },
  { name: 'Rashtriya Janata Dal (RJD)', region: 'Major opposition', color: 'bg-red-100', textColor: 'text-red-700' },
  { name: 'Indian National Congress (INC)', region: 'Opposition ally', color: 'bg-blue-100', textColor: 'text-blue-700' },
  { name: 'Communist Parties', region: 'Left bloc in select regions', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
];



  const keyPoliticalFeatures = [
  {
    title: 'Land Reforms',
    description: 'Redistribution policies post-independence',
    impact: 'Addressed land inequality and zamindari abolition',
    status: 'Partially successful'
  },
  {
    title: 'Caste-Based Politics',
    description: 'Dominant factor in electoral mobilization',
    impact: 'Leads to strong identity-based voting blocs',
    status: 'Ongoing and significant'
  },
  {
    title: 'Naxalite Influence',
    description: 'Affected south-central regions historically',
    impact: 'Law-and-order challenge & tribal mobilization',
    status: 'Declining but present'
  },
  {
    title: 'Nitish Governance Model',
    description: 'Focused on law, infrastructure & education',
    impact: 'Improved public services and reduced crime',
    status: 'Widely noted across India'
  }
];



  const traditionalDresses = [
  {
    name: 'Dhoti-Kurta with Angavastram',
    region: 'Bihari Men',
    description: 'Traditional ceremonial and everyday attire',
    features: ['White cotton dhoti', 'Kurta shirt', 'Angavastram (scarf)'],
    image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29209252/2024/4/26/21792023-604f-4e37-a4d7-748597936fe81714126931861MensSolidColorKurtaSet1.jpg',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'Saree with Seedha Aanchal',
    region: 'Bihari Women',
    description: 'Worn in the regional draping style',
    features: ['Silk or cotton saree', 'Front pallu drape', 'Decorative blouse'],
    image: 'https://i.pinimg.com/736x/2a/5b/d4/2a5bd4e80f883cb9390271e17231a11d.jpg',
    gradient: 'from-pink-400 to-red-500'
  },
  {
    name: 'Bhagalpuri Silk Attire',
    region: 'Bhagalpur Region',
    description: 'Famous for elegant handloom silk fabrics',
    features: ['Glossy finish', 'Floral or tribal motifs', 'Unisex usage'],
    image: 'https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/8/5837sr06-7406.jpg',
    gradient: 'from-purple-400 to-indigo-500'
  },
  {
    name: 'Tribal Attire (Santhal, Oraon)',
    region: 'Southern Bihar Tribes',
    description: 'Vibrant clothing for festivals and daily use',
    features: ['Woven skirts', 'Ornamental jewelry', 'Colorful headwear'],
    image: 'https://vajiramandravi.com/current-affairs/wp-content/uploads/2025/04/santhal_tribal_community.webp',
    gradient: 'from-blue-400 to-indigo-500'
  }
];



  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="bg-white/90 backdrop-blur-md border-b border-orange-200/50 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="outline" onClick={() => navigate('/')} className="flex items-center space-x-2 hover:bg-orange-50">
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </Button>
                <div className="flex items-center space-x-2">
                  <Landmark className="text-orange-600" size={28} />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Bihar
                  </h1>
                </div>
              </div>
              <div className="text-sm text-gray-600 italic">
                "Land of Ancient Wisdom & Enlightenment"
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section with Background Image */}
        <div className="relative h-80 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://media.istockphoto.com/id/923634730/photo/the-side-view-of-the-stupa-at-mahabodhi-temple-complex-in-bodh-gaya-india-the-mahabodhi-vihar.jpg?s=612x612&w=0&k=20&c=IbaYAayHYmoqshQUoXM5HVbMzos6glaj-kjvWQQvWZQ=)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/70"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to the Land of Buddha & Culture</h2>
              <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Explore Bihar — cradle of civilization, spirituality, and timeless traditions.
              </p>
            </div>
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
    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
          <MapPin className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-orange-800">Capital</h3>
        <p className="text-sm text-orange-600">Patna</p>
      </CardContent>
    </Card>

    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-red-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
          <Users className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-red-800">Population</h3>
        <p className="text-sm text-red-600">Over 124 Million<br />Dense and diverse</p>
      </CardContent>
    </Card>

    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
          <Mountain className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-yellow-800">Geography</h3>
        <p className="text-sm text-yellow-700">Indo-Gangetic Plain<br />94,163 km²</p>
      </CardContent>
    </Card>

    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
          <Star className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-purple-800">Languages</h3>
        <p className="text-sm text-purple-600">Hindi, Maithili, Bhojpuri, Urdu</p>
      </CardContent>
    </Card>
  </div>

  <Card className="border-0 bg-white/80 backdrop-blur-sm">
    <CardHeader>
      <CardTitle className="flex items-center text-2xl">
        <Thermometer className="mr-3 text-red-500" size={32} />
        Climate & Seasons
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">🌱</div>
          <h4 className="font-semibold text-green-700 text-lg">Spring</h4>
          <p className="text-sm text-green-600">Mar-May<br />20-30°C</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">☀️</div>
          <h4 className="font-semibold text-blue-700 text-lg">Summer</h4>
          <p className="text-sm text-blue-600">Jun-Aug<br />28-40°C</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">🍁</div>
          <h4 className="font-semibold text-orange-700 text-lg">Autumn</h4>
          <p className="text-sm text-orange-600">Sep-Nov<br />22-32°C</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">❄️</div>
          <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
          <p className="text-sm text-gray-600">Dec-Feb<br />8-20°C</p>
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
              src="https://images.unsplash.com/photo-1589287703449-9261b0dceae4?w=400&h=200&fit=crop" 
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

  {/* Key Political Features */}
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

  {/* Administration & Stats */}
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
          <li className="flex items-center p-2 bg-white/50 rounded">👤 Governor: Appointed by President</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Bihar Legislative Assembly (243 Seats)</li>
          <li className="flex items-center p-2 bg-white/50 rounded">⚖️ Patna High Court</li>
          <li className="flex items-center p-2 bg-white/50 rounded">📋 Panchayati Raj Institutions</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏘️ 38 District Administrations</li>
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
          <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~7.3 Crore</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 243</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 40</li>
          <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~72,000+</li>
          <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Political Parties: 50+</li>
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
        { name: 'Litti Chokha', emoji: '🔥' },
        { name: 'Sattu Paratha', emoji: '🌾' },
        { name: 'Khaja (Crispy Sweet)', emoji: '🍬' },
        { name: 'Thekua (Festive Cookie)', emoji: '🍪' },
        { name: 'Dal Pitha', emoji: '🥟' },
        { name: 'Kadhi-Bari', emoji: '🍲' }
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
        <li className="flex items-center p-2 bg-white/50 rounded">🌾 Paddy (Kharif & Rabi)</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🌿 Wheat & Maize</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🥔 Potatoes, Onions & Pulses</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🍌 Banana, Mango & Litchi</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🧄 Garlic & Oilseeds</li>
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
        <li className="flex items-center p-2 bg-white/50 rounded">🧵 Madhubani Painting (Mithila Art)</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🪡 Sikki Grass Craft</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🪵 Bamboo & Cane Weaving</li>
        <li className="flex items-center p-2 bg-white/50 rounded">👜 Lacquerware & Terracotta Items</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🎭 Sujni & Applique Work</li>
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
        <li className="flex items-center p-2 bg-white/50 rounded">🌾 Agro-based Industries (Sugar, Rice Mills)</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🧵 Handloom & Khadi Production</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Cement & Construction Materials</li>
        <li className="flex items-center p-2 bg-white/50 rounded">🛠️ Leather & Footwear Manufacturing</li>
        <li className="flex items-center p-2 bg-white/50 rounded">💡 Renewable Energy & Small Power Projects</li>
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
          src="https://upload.wikimedia.org/wikipedia/commons/3/32/Valmiki_National_Park_Tiger_Reserve.jpg" 
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
                <span className="text-2xl">🐘</span>
                <p className="text-sm mt-1">Indian Elephant</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🦌</span>
                <p className="text-sm mt-1">Spotted Deer</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🐊</span>
                <p className="text-sm mt-1">Gharial</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌴</span>
                <p className="text-sm mt-1">Sal & Teak Trees</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌸</span>
                <p className="text-sm mt-1">Water Lilies & Lotuses</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🍃</span>
                <p className="text-sm mt-1">Bamboo Groves</p>
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
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/Patna%2C_Bihar_1.jpg" 
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
            <span>Indo-Gangetic Plains</span>
          </li>
          <li className="flex items-center p-3 bg-green-50 rounded-lg">
            <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
            <span>Chotanagpur Plateau (Southern Edge)</span>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg">
            <span className="w-5 h-5 bg-purple-400 rounded mr-3"></span>
            <span>River Ganga & Tributaries</span>
          </li>
          <li className="flex items-center p-3 bg-indigo-50 rounded-lg">
            <span className="w-5 h-5 bg-indigo-400 rounded mr-3"></span>
            <span>Fertile Alluvial Soil</span>
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
          'Valmiki National Park',
          'Gautam Buddha Wildlife Sanctuary',
          'Kaimur Wildlife Sanctuary',
          'Bhimbandh Wildlife Sanctuary',
          'Vikramshila Gangetic Dolphin Sanctuary',
          'Kanwar Lake Bird Sanctuary'
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
            <span className="font-bold text-blue-600 text-lg">63.8%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
            <span className="flex items-center">
              <span className="text-xl mr-2">🏙️</span>
              Urban Population
            </span>
            <span className="font-bold text-green-600 text-lg">11.3%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
            <span className="flex items-center">
              <span className="text-xl mr-2">🌾</span>
              Rural Population
            </span>
            <span className="font-bold text-orange-600 text-lg">88.7%</span>
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
            { name: 'Chhath Puja', emoji: '🌅' },
            { name: 'Makar Sankranti', emoji: '🔥' },
            { name: 'Sama-Chakeva', emoji: '🎭' },
            { name: 'Eid & Holi', emoji: '🕌' },
            { name: 'Buddha Purnima', emoji: '🪷' }
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
            <li className="bg-white/60 p-2 rounded">Jat-Jatin</li>
            <li className="bg-white/60 p-2 rounded">Bidesia Folk Theatre</li>
            <li className="bg-white/60 p-2 rounded">Kajari & Chhath Songs</li>
            <li className="bg-white/60 p-2 rounded">Domkach & Sohar</li>
          </ul>
        </div>

        {/* Handicrafts */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
          <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
            <span className="text-2xl mr-2">🎨</span>
            Handicrafts
          </h4>
          <ul className="space-y-2">
            <li className="bg-white/60 p-2 rounded">Madhubani Paintings</li>
            <li className="bg-white/60 p-2 rounded">Sikki Grass Work</li>
            <li className="bg-white/60 p-2 rounded">Lac Bangles & Jewelry</li>
            <li className="bg-white/60 p-2 rounded">Tikuli Art</li>
          </ul>
        </div>

        {/* Oral Literature */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
          <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
            <span className="text-2xl mr-2">📚</span>
            Oral Literature
          </h4>
          <ul className="space-y-2">
            <li className="bg-white/60 p-2 rounded">Folk Tales (Birbal, Bhikhari Thakur)</li>
            <li className="bg-white/60 p-2 rounded">Folk Proverbs & Songs</li>
            <li className="bg-white/60 p-2 rounded">Bhojpuri & Maithili Literature</li>
            <li className="bg-white/60 p-2 rounded">Epic Recitations (Ramayana, Mahabharata)</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>



        </Tabs>
      </div>
    </>
  );
};
