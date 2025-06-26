
import React, { useState } from 'react';
import { ArrowLeft, Play, BookOpen, Globe, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const introduction = `
    India is a linguistically diverse country with over 22 official languages.
    These languages are an integral part of Indian heritage and culture.
`;

const languages = [
    {
        name: "Assamese",
        description: "Spoken in Assam, Assamese has a rich literary tradition and is known for its distinctive script. It's the easternmost Indo-Aryan language and has influences from Tibeto-Burman languages.",
        learningLink: "https://youtu.be/f7Bjdf4qCLM?si=y_ILMROsv5EimazF",
        speakers: "15 million",
        family: "Indo-Aryan",
        region: "Assam"
    },
    {
        name: "Bengali",
        description: "With over 100 million speakers, Bengali is one of the most widely spoken Indian languages. It's the official language of West Bengal and Bangladesh and has a rich cultural heritage, including Nobel laureate Rabindranath Tagore's works.",
        learningLink: "https://youtu.be/1cWk05wtoTE?si=Wx5Ls0hfiUDPmfQ0",
        speakers: "100+ million",
        family: "Indo-Aryan",
        region: "West Bengal"
    },
    {
        name: "Bodo",
        description: "Spoken in Assam, Bodo is a Tibeto-Burman language and the largest language in the Bodo family. It's recognized as an official language in India and has a growing literary tradition.",
        learningLink: "https://youtu.be/j4NNwaym8Nc?si=s4KVOybF-dJhADtw",
        speakers: "1.5 million",
        family: "Tibeto-Burman",
        region: "Assam"
    },
    {
        name: "Dogri",
        description: "Spoken in Jammu and Kashmir, Dogri is closely related to Punjabi and has a unique cultural significance in the region. It's recognized as an official language in India and has a growing literary tradition.",
        learningLink: "https://youtu.be/kTexQXILIv0?si=ahyB0g1vgZ7_Tzld",
        speakers: "2.6 million",
        family: "Indo-Aryan",
        region: "Jammu & Kashmir"
    },
    {
        name: "Gujarati",
        description: "With a rich business and trade history, Gujarati is spoken in Gujarat and has a significant diaspora community worldwide. It's known for its distinctive script and literary tradition.",
        learningLink: "https://youtu.be/D__QMtOpAbs?si=TVJx8asYkhzCg_Yl",
        speakers: "56 million",
        family: "Indo-Aryan",
        region: "Gujarat"
    },
    {
        name: "Hindi",
        description: "As the official language of India, Hindi is widely spoken across the country and has a significant presence in media, education, and government. It's a standardized form of Hindustani, which emerged as a lingua franca in northern India.",
        learningLink: "https://youtu.be/BSy-G7kgkQI?si=ByWoQz2vfM4QZKGW",
        speakers: "600+ million",
        family: "Indo-Aryan",
        region: "Pan-India"
    },
    {
        name: "Kannada",
        description: "Spoken in Karnataka, Kannada has a rich literary and cultural heritage, including the works of famous poet Kuvempu. It's known for its distinctive script and has a significant presence in media and education.",
        learningLink: "https://youtu.be/GtAr3YrDVtw?si=fKubBFrfzlc8lCC0",
        speakers: "44 million",
        family: "Dravidian",
        region: "Karnataka"
    },
    {
        name: "Kashmiri",
        description: "Spoken in Jammu and Kashmir, Kashmiri has a unique blend of Indo-Aryan and Iranian influences. It's recognized as an official language in India and has a growing literary tradition.",
        learningLink: "https://youtu.be/ykBnQlUwybY?si=H3CJlOSuyl6kIcG7",
        speakers: "7 million",
        family: "Indo-Aryan",
        region: "Kashmir Valley"
    },
    {
        name: "Konkani",
        description: "Spoken in Goa and coastal Karnataka, Konkani is known for its melodic sound and distinctive script. It's recognized as an official language in India and has a growing literary tradition.",
        learningLink: "https://youtu.be/yqig2w4T9UI?si=uc6JxEDQ6YKg6GIm",
        speakers: "2.5 million",
        family: "Indo-Aryan",
        region: "Goa, Karnataka"
    },
    {
        name: "Maithili",
        description: "Spoken in Bihar and Nepal, Maithili has a rich cultural heritage and is recognized as an official language in India. It's known for its distinctive script and has a growing literary tradition.",
        learningLink: "https://youtu.be/r2FkaXmH7gg?si=vb_znd1QisHb7UE1",
        speakers: "34 million",
        family: "Indo-Aryan",
        region: "Bihar, Nepal"
    },
    {
        name: "Malayalam",
        description: "Spoken in Kerala, Malayalam has a unique script and literary tradition, including the works of famous poet Vallathol Narayana Menon. It's recognized as an official language in India and has a significant presence in media and education.",
        learningLink: "https://youtu.be/b3_2xeuEczA?si=EawdJRJiyyon9mgh",
        speakers: "38 million",
        family: "Dravidian",
        region: "Kerala"
    },
    {
        name: "Manipuri",
        description: "Spoken in Manipur, Manipuri is a Tibeto-Burman language and has a unique cultural significance in the region. It's recognized as an official language in India and has a growing literary tradition.",
        learningLink: "https://youtu.be/2OpBoULi9Go?si=0RT13JIcbCayEX3f",
        speakers: "1.8 million",
        family: "Tibeto-Burman",
        region: "Manipur"
    },
    {
        name: "Marathi",
        description: "Spoken in Maharashtra, Marathi has a rich literary and cultural heritage, including the works of famous poet Tukaram. It's recognized as an official language in India and has a significant presence in media and education.",
        learningLink: "https://youtu.be/sNA0AtMGk9g?si=1MxxCTmJTh9Q9r-5",
        speakers: "83 million",
        family: "Indo-Aryan",
        region: "Maharashtra"
    },
    {
        name: "Nepali",
        description: "Spoken in Nepal and parts of India, Nepali is the official language of Nepal and has a significant presence in media and education. It's known for its distinctive script and literary tradition.",
        learningLink: "https://youtu.be/AATpQ3OR1kI?si=zMqPXysz2ZglhRzk",
        speakers: "16 million",
        family: "Indo-Aryan",
        region: "Nepal, Sikkim"
    },
    {
        name: "Odia",
        description: "Spoken in Odisha, Odia has a rich cultural heritage and is recognized as an official language in India. It's known for its distinctive script and has a growing literary tradition.",
        learningLink: "https://youtu.be/H4YiAIr9Wfw?si=MLtpnN3pBiXdpynt",
        speakers: "42 million",
        family: "Indo-Aryan",
        region: "Odisha"
    },
    {
        name: "Punjabi",
        description: "Spoken in Punjab, Punjabi has a rich cultural heritage and is recognized as an official language in India. It's known for its distinctive script and has a significant presence in media and education.",
        learningLink: "https://youtu.be/gaTNx7pSXr0?si=hKxxlaPRgwQzZwow",
        speakers: "33 million",
        family: "Indo-Aryan",
        region: "Punjab"
    },
    {
        name: "Sanskrit",
        description: "As an ancient language of India, Sanskrit is still used in religious and academic contexts. It's the liturgical language of Hinduism, Buddhism, and Jainism and has had a significant influence on many Indian languages.",
        learningLink: "https://youtu.be/CnAUbMkMAb4?si=9xOf8JH4XTFKf91P",
        speakers: "25,000",
        family: "Indo-Aryan",
        region: "Pan-India"
    },
    {
        name: "Santali",
        description: "Spoken in Jharkhand, Santali is a Munda language and has a unique cultural significance in the region. It's recognized as an official language in India and has a growing literary tradition.",
        learningLink: "https://youtu.be/SmNAbLGi5tQ?si=VgByZn56n7DT7S5G",
        speakers: "7.4 million",
        family: "Austroasiatic",
        region: "Jharkhand"
    },
    {
        name: "Sindhi",
        description: "Spoken in Sindh, Sindhi has a rich cultural heritage and is recognized as an official language in India. It's known for its distinctive script and has a growing literary tradition.",
        learningLink: "https://youtu.be/PDA43Dldk9o?si=TwXMnwZ-8PCADQgb",
        speakers: "2.7 million",
        family: "Indo-Aryan",
        region: "Sindh, Gujarat"
    },
    {
        name: "Tamil",
        description: "As one of the oldest living languages in the world, Tamil has a rich literary tradition and is recognized as an official language in India. It's known for its distinctive script and has a significant presence in media and education.",
        learningLink: "https://youtu.be/R1T1UsGVGL0?si=hM6kKHmTKStSgczF",
        speakers: "75 million",
        family: "Dravidian",
        region: "Tamil Nadu"
    },
    {
        name: "Telugu",
        description: "Spoken in Andhra Pradesh and Telangana, Telugu has a rich literary and cultural heritage. It's recognized as an official language in India and has a significant presence in media and education.",
        learningLink: "https://youtu.be/NkIYFHHEcSw?si=owrDX7d41J9DGFyB",
        speakers: "82 million",
        family: "Dravidian",
        region: "Andhra Pradesh, Telangana"
    },
    {
        name: "Urdu",
        description: "As a descendant of Hindustani, Urdu has a significant presence in India and Pakistan. It's known for its rich literary tradition, including poetry, and is recognized as an official language in India.",
        learningLink: "https://youtu.be/4fzN-RPO15c?si=rEBlowgpdZ0m3ibL",
        speakers: "70 million",
        family: "Indo-Aryan",
        region: "Pan-India"
    },
];

const OfficialLanguages = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<typeof languages[0] | null>(null);
    const [filterFamily, setFilterFamily] = useState<string>('all');

    const languageFamilies = ['all', 'Indo-Aryan', 'Dravidian', 'Tibeto-Burman', 'Austroasiatic'];
    
    const filteredLanguages = filterFamily === 'all' 
        ? languages 
        : languages.filter(lang => lang.family === filterFamily);

    const getFamilyColor = (family: string) => {
        switch (family) {
            case 'Indo-Aryan': return 'bg-blue-100 text-blue-800';
            case 'Dravidian': return 'bg-green-100 text-green-800';
            case 'Tibeto-Burman': return 'bg-purple-100 text-purple-800';
            case 'Austroasiatic': return 'bg-orange-100 text-orange-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50">
            {/* Header */}
            <header className="bg-white/90 backdrop-blur-md border-b border-orange-200/50 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Button 
                                variant="ghost" 
                                onClick={() => window.history.back()}
                                className="hover:bg-orange-100"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back
                            </Button>
                            <h1 className="text-3xl font-bold text-gradient">Official Languages of India</h1>
                        </div>
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                            22 Languages
                        </Badge>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Introduction Section */}
                <div className="text-center mb-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <Globe className="h-12 w-12 text-orange-600" />
                            <Award className="h-12 w-12 text-emerald-600" />
                            <BookOpen className="h-12 w-12 text-blue-600" />
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            India is a linguistically diverse country with over 22 official languages. 
                            These languages are an integral part of Indian heritage and culture.
                        </p>
                    </div>
                </div>

                {/* Filter Tabs */}
                <Tabs value={filterFamily} onValueChange={setFilterFamily} className="mb-8">
                    <TabsList className="grid w-full grid-cols-5 bg-white/80">
                        {languageFamilies.map(family => (
                            <TabsTrigger 
                                key={family} 
                                value={family}
                                className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700"
                            >
                                {family === 'all' ? 'All Languages' : family}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>

                {/* Languages Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredLanguages.map((language, index) => (
                        <Card 
                            key={language.name}
                            className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer bg-white/80 backdrop-blur-sm"
                            onClick={() => setSelectedLanguage(language)}
                        >
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl text-gradient">{language.name}</CardTitle>
                                    <Badge className={getFamilyColor(language.family)}>
                                        {language.family}
                                    </Badge>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <Users className="mr-1 h-4 w-4" />
                                        {language.speakers}
                                    </div>
                                    <div className="flex items-center">
                                        <Globe className="mr-1 h-4 w-4" />
                                        {language.region}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                                    {language.description}
                                </p>
                                <div className="flex space-x-2">
                                    <Button 
                                        size="sm" 
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(language.learningLink, '_blank');
                                        }}
                                    >
                                        <Play className="mr-1 h-3 w-3" />
                                        Learn
                                    </Button>
                                    <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedLanguage(language);
                                        }}
                                    >
                                        Details
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Language Detail Modal */}
                {selectedLanguage && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-2xl text-gradient mb-2">
                                            {selectedLanguage.name}
                                        </CardTitle>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <Badge className={getFamilyColor(selectedLanguage.family)}>
                                                {selectedLanguage.family}
                                            </Badge>
                                            <div className="flex items-center">
                                                <Users className="mr-1 h-4 w-4" />
                                                {selectedLanguage.speakers} speakers
                                            </div>
                                            <div className="flex items-center">
                                                <Globe className="mr-1 h-4 w-4" />
                                                {selectedLanguage.region}
                                            </div>
                                        </div>
                                    </div>
                                    <Button 
                                        variant="ghost" 
                                        onClick={() => setSelectedLanguage(null)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        ✕
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {selectedLanguage.description}
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-1">Language Family</h4>
                                            <p className="text-blue-700">{selectedLanguage.family}</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-lg">
                                            <h4 className="font-semibold text-emerald-800 mb-1">Primary Region</h4>
                                            <p className="text-emerald-700">{selectedLanguage.region}</p>
                                        </div>
                                    </div>
                                    
                                    <Button 
                                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                                        onClick={() => window.open(selectedLanguage.learningLink, '_blank')}
                                    >
                                        <Play className="mr-2 h-4 w-4" />
                                        Start Learning {selectedLanguage.name}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Statistics Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mt-12">
                    <h2 className="text-2xl font-bold text-center mb-8 text-gradient">Language Statistics</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                            <div className="text-3xl font-bold text-blue-600 mb-2">22</div>
                            <div className="text-blue-800 font-medium">Official Languages</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">4</div>
                            <div className="text-emerald-800 font-medium">Language Families</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                            <div className="text-3xl font-bold text-purple-600 mb-2">1.4B+</div>
                            <div className="text-purple-800 font-medium">Total Speakers</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                            <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
                            <div className="text-orange-800 font-medium">Cultural Heritage</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficialLanguages;
