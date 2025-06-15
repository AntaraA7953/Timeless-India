
import React, { useState } from 'react';
import { Camera, VrHeadset, Smartphone, Eye, Download, Share } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VRExperience = () => {
  const [activeExperience, setActiveExperience] = useState('vr');

  const vrExperiences = [
    {
      id: 'taj-mahal',
      title: 'Taj Mahal Virtual Tour',
      description: 'Walk through the marble corridors and witness the architectural marvel up close',
      image: '🕌',
      duration: '15-20 min',
      rating: 4.9,
      downloads: '50K+',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'golden-temple',
      title: 'Golden Temple Experience',
      description: 'Experience the spiritual serenity and golden architecture of Amritsar',
      image: '🏛️',
      duration: '12-15 min',
      rating: 4.8,
      downloads: '35K+',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'ajanta-caves',
      title: 'Ajanta Caves Exploration',
      description: 'Discover ancient Buddhist cave paintings and sculptures',
      image: '🏔️',
      duration: '25-30 min',
      rating: 4.7,
      downloads: '28K+',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const arExperiences = [
    {
      id: 'heritage-ar',
      title: 'Heritage AR Scanner',
      description: 'Point your camera at monuments to reveal hidden stories and information',
      image: '📱',
      features: ['Real-time Recognition', 'Audio Guides', 'Historical Facts'],
      color: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'cultural-ar',
      title: 'Cultural AR Lens',
      description: 'See traditional costumes, dances, and festivals come to life around you',
      image: '🎭',
      features: ['3D Animations', 'Interactive Elements', 'Social Sharing'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'art-ar',
      title: 'Art Form AR Studio',
      description: 'Learn and practice traditional art forms with AR guidance',
      image: '🎨',
      features: ['Step-by-step Guides', 'Progress Tracking', 'Video Recording'],
      color: 'from-rose-400 to-red-500'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Immersive VR & AR Experiences
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Step into history with cutting-edge virtual and augmented reality experiences
        </p>
      </div>

      {/* Experience Type Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveExperience('vr')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeExperience === 'vr'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <VrHeadset size={20} />
              <span>Virtual Reality</span>
            </button>
            <button
              onClick={() => setActiveExperience('ar')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeExperience === 'ar'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <Smartphone size={20} />
              <span>Augmented Reality</span>
            </button>
          </div>
        </div>
      </div>

      {/* VR Experiences */}
      {activeExperience === 'vr' && (
        <div className="space-y-8 animate-fade-in-up">
          <div className="grid md:grid-cols-3 gap-6">
            {vrExperiences.map((experience, index) => (
              <Card 
                key={experience.id}
                className="border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 
                  bg-gradient-to-br from-white to-blue-50 overflow-hidden group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${experience.color} 
                    flex items-center justify-center mb-4 group-hover:animate-float text-4xl`}>
                    {experience.image}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {experience.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed text-center">
                    {experience.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium text-gray-700">{experience.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Rating:</span>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-1">{experience.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Eye key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Downloads:</span>
                      <span className="font-medium text-gray-700">{experience.downloads}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      className={`flex-1 bg-gradient-to-r ${experience.color} 
                        text-white hover:opacity-90 hover-scale`}
                    >
                      <VrHeadset className="mr-2 h-4 w-4" />
                      Enter VR
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* VR Requirements */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <CardContent className="py-8">
              <div className="text-center mb-6">
                <VrHeadset className="mx-auto mb-3 animate-float" size={48} />
                <h3 className="text-2xl font-bold mb-2">VR Requirements</h3>
                <p className="opacity-90">
                  Compatible with major VR headsets and mobile VR solutions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">PC VR</h4>
                  <p className="text-sm opacity-90">Oculus Rift, HTC Vive, Windows Mixed Reality</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Mobile VR</h4>
                  <p className="text-sm opacity-90">Google Cardboard, Samsung Gear VR</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Standalone</h4>
                  <p className="text-sm opacity-90">Oculus Quest, Pico Neo series</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* AR Experiences */}
      {activeExperience === 'ar' && (
        <div className="space-y-8 animate-fade-in-up">
          <div className="grid md:grid-cols-3 gap-6">
            {arExperiences.map((experience, index) => (
              <Card 
                key={experience.id}
                className="border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 
                  bg-gradient-to-br from-white to-emerald-50 overflow-hidden group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${experience.color} 
                    flex items-center justify-center mb-4 group-hover:animate-float text-4xl`}>
                    {experience.image}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {experience.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed text-center">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-center">Features:</h4>
                    <div className="space-y-2">
                      {experience.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center">
                          <span className="px-3 py-1 bg-gradient-to-r from-saffron-100 to-orange-100 
                            text-saffron-700 rounded-full text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      className={`flex-1 bg-gradient-to-r ${experience.color} 
                        text-white hover:opacity-90 hover-scale`}
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      Try AR
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AR App Download */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
            <CardContent className="py-8">
              <div className="text-center mb-6">
                <Smartphone className="mx-auto mb-3 animate-float" size={48} />
                <h3 className="text-2xl font-bold mb-2">Download AR App</h3>
                <p className="opacity-90">
                  Available for iOS and Android devices with AR support
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 hover-scale"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 hover-scale"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default VRExperience;
