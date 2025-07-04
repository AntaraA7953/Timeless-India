import React, { useState } from 'react';
import { Music, Palette, Theater, Shirt, Play, Heart, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


const ArtForms = () => {
  const [activeCategory, setActiveCategory] = useState('dance');

  const categories = {
    dance: {
      title: 'Classical & Folk Dances',
      icon: Theater,     
      items: [
        {
          name: 'Bharatanatyam',
          origin: 'Tamil Nadu',
          description: 'Ancient temple dance with intricate hand gestures and facial expressions.',
          color: 'from-pink-400 to-rose-500',
          videoUrl: 'https://youtu.be/JWhA3ldZcyY?si=Sf_dBwZKFU_sbOKj',
          imageUrl: 'https://i.imgur.com/JzV9hWn.jpg'
        },
        {
          name: 'Kathak',
          origin: 'North India',
          description: 'Storytelling dance with graceful spins and rhythmic footwork.',
          color: 'from-blue-400 to-indigo-500',
          videoUrl: 'https://youtu.be/UBYqv21c0Yk?si=pHVYHtt6jECtoEvP',
          imageUrl: 'https://i.imgur.com/5XWQk0L.jpg'
        },
        {
          name: 'Kathakali',
          origin: 'Kerala',
          description: 'Dance-drama with elaborate makeup and martial movements.',
          color: 'from-green-400 to-emerald-500',
          videoUrl: 'https://youtu.be/GBbcYtkqVKQ?si=rwGGkOnK6Z5bHykJE',
          imageUrl: 'https://i.imgur.com/8KjvL2f.jpg'
        },
        {
          name: 'Kuchipudi',
          origin: 'Andhra Pradesh',
          description: 'Graceful dance-drama with storytelling and character portrayal.',
          color: 'from-purple-400 to-violet-500',
          videoUrl: 'https://youtu.be/YbRX_cdTap8?si=mdGU3KboA0DFVIQ8',
          imageUrl: 'https://i.imgur.com/9YQvZ7T.jpg'
        },
        {
          name: 'Manipuri',
          origin: 'Manipur',
          description: 'Lyrical dance depicting Radha-Krishna stories with flowing costumes.',
          color: 'from-teal-400 to-cyan-500',
          videoUrl: 'https://youtu.be/oEOEf7xPD3U?si=bEb7WLn-iFyh9wRM',
          imageUrl: 'https://i.imgur.com/3QvY7hJ.jpg'
        },
        {
          name: 'Odissi',
          origin: 'Odisha',
          description: 'Sculptural dance inspired by temple carvings with tribhanga posture.',
          color: 'from-amber-400 to-orange-500',
          videoUrl: 'https://youtu.be/LUHrTwrC3wU?si=JOYX4mCzST-R2k5P',
          imageUrl: 'https://i.imgur.com/4XvY9kL.jpg'
        },
        {
          name: 'Sattriya',
          origin: 'Assam',
          description: 'Monastic dance tradition with devotional themes.',
          color: 'from-lime-400 to-green-500',
          videoUrl: 'https://youtu.be/eb9jFeNKEQM?si=JYsXJyDJGPlugJx7',
          imageUrl: 'https://i.imgur.com/7KjvL3f.jpg'
        },
        {
          name: 'Mohiniyattam',
          origin: 'Kerala',
          description: 'Feminine lasya-style dance with swaying palm movements.',
          color: 'from-indigo-400 to-blue-500',
          videoUrl: 'https://youtu.be/Dx1hvp8Sr7w?si=ZvppInfxItYghRlF',
          imageUrl: 'https://i.imgur.com/2XvY8kK.jpg'
        },
        {
          name: 'Garba',
          origin: 'Gujarat',
          description: 'Circular dance with dandiya sticks during Navratri festival.',
          color: 'from-orange-400 to-red-500',
          videoUrl: 'https://youtu.be/HQQXY-LMM4M?si=VDDmA2dSj4GNuszE',
          imageUrl: 'https://i.imgur.com/1XvY7kJ.jpg'
        },
        {
          name: 'Bhangra',
          origin: 'Punjab',
          description: 'Energetic harvest dance with jumps and shoulder movements.',
          color: 'from-yellow-400 to-amber-500',
          videoUrl: 'https://youtu.be/pTHfk-HRr7k?si=Z24xkURoB2o_AQtG',
          imageUrl: 'https://i.imgur.com/6KjvL1f.jpg'
        },
        {
          name: 'Lavani',
          origin: 'Maharashtra',
          description: 'Dynamic folk dance with quick footwork to dholki beats.',
          color: 'from-fuchsia-400 to-purple-500',
          videoUrl: 'https://youtu.be/vFgLrr5gof4?si=0p3TrhImVNlky5rS',
          imageUrl: 'https://i.imgur.com/5XvY6kJ.jpg'
        },
        {
          name: 'Ghoomar',
          origin: 'Rajasthan',
          description: 'Graceful circular dance performed by women in flowing ghagras.',
          color: 'from-red-500 to-pink-600',
          videoUrl: 'https://youtu.be/FYiQSI1YA5c?si=lAA4ns28TNKxvTLV',
          imageUrl: 'https://i.imgur.com/4KjvL0f.jpg'
        },
        {
          name: 'Bihu',
          origin: 'Assam',
          description: 'Vibrant harvest dance with rapid hand and foot movements.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://youtu.be/1cGdw8AzVnM?si=NEFYYA31vJU15p2Z',
          imageUrl: 'https://i.imgur.com/3XvY5kJ.jpg'
        },
        {
          name: 'Chhau',
          origin: 'Eastern India',
          description: 'Martial dance with masks and acrobatic movements.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtu.be/-6GvAxdEL5s?si=md2emiOaRPBxYgDe',
          imageUrl: 'https://i.imgur.com/2KjvL9f.jpg'
        },
        {
          name: 'Yakshagana',
          origin: 'Karnataka',
          description: 'Colorful dance-drama with elaborate costumes and makeup.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://youtu.be/poblwP32Z9A?si=bdLXm67p1aE9-rk9',
          imageUrl: 'https://i.imgur.com/1KjvL8f.jpg'
        },
        {
          name: 'Theyyam',
          origin: 'Kerala',
          description: 'Ritual dance form where performers embody deities.',
          color: 'from-orange-500 to-red-600',
          videoUrl: 'https://youtu.be/jqKKxZwwHRY?si=0V-rTvRylE1khiQa',
          imageUrl: 'https://i.imgur.com/0KjvL7f.jpg'
        },
        {
          name: 'Gaudiya Nritya',
          origin: 'West Bengal',
          description: 'Classical dance of Bengal with Vaishnav influences',
          imageUrl: 'https://i.imgur.com/newimage1.jpg',
          videoUrl: 'https://youtu.be/u0Ys1V9FcIk?si=P2fBT_jZUqeeZnCP'
        },
        {
          name: 'Dollu Kunitha',
          origin: 'Karnataka',
          description: 'Vigorous drum dance performed by men',
          imageUrl: 'https://i.imgur.com/newimage2.jpg',
          videoUrl: 'https://youtu.be/3emRzlf4O88?si=ucALhJnQ1U--p_RI'
        }
      ]
    },
    music: {
      title: 'Musical Traditions',
      icon: Music,
      items: [
        {
          name: 'Hindustani Classical',
          origin: 'North India',
          description: 'Raga-based classical music with improvisation and khayal/dhrupad styles.',
          color: 'from-orange-400 to-red-500',
          videoUrl: 'https://youtu.be/5H7sQPoTl_U?si=-CqToTX0441dLqVi',
          imageUrl: 'https://i.imgur.com/JzV9hWn.jpg'
        },
        {
          name: 'Carnatic Classical',
          origin: 'South India',
          description: 'Composition-based classical music with varnam and kriti forms.',
          color: 'from-yellow-400 to-amber-500',
          videoUrl: 'https://youtu.be/c9Cbhpd2zYw?si=2Jo9iiYMTAV9wubX',
          imageUrl: 'https://i.imgur.com/5XWQk0L.jpg'
        },
        {
          name: 'Sitar',
          origin: 'North India',
          description: 'String instrument with sympathetic strings, popular in Hindustani music.',
          color: 'from-amber-400 to-orange-500',
          videoUrl: 'https://youtu.be/KBYSpR8N6pc?si=Hl6Ccs7pPbFwN-bm',
          imageUrl: 'https://i.imgur.com/8KjvL2f.jpg'
        },
        {
          name: 'Veena',
          origin: 'South India',
          description: 'Ancient fretted string instrument, primary in Carnatic music.',
          color: 'from-emerald-400 to-teal-500',
          videoUrl: 'https://youtu.be/eaQvIL-leCo?si=5E7boEJCmUIi4Lb7',
          imageUrl: 'https://i.imgur.com/9YQvZ7T.jpg'
        },
        {
          name: 'Tabla',
          origin: 'North India',
          description: 'Percussion pair with bayan (bass) and dayan (treble) drums.',
          color: 'from-indigo-400 to-purple-500',
          videoUrl: 'https://youtu.be/gQrFbXX-o0E?si=xQqMjfQgWaBBhRf2',
          imageUrl: 'https://i.imgur.com/3QvY7hJ.jpg'
        },
        {
          name: 'Mridangam',
          origin: 'South India',
          description: 'Primary Carnatic percussion instrument with thani avartanam solos.',
          color: 'from-brown-400 to-amber-500',
          videoUrl: 'https://youtu.be/LbGw7tkn6ic?si=f2d0RsYBDJPv4tol',
          imageUrl: 'https://i.imgur.com/4XvY9kL.jpg'
        },
        {
          name: 'Sarod',
          origin: 'North India',
          description: 'Fretless string instrument with deep, resonant sound.',
          color: 'from-gray-400 to-stone-500',
          videoUrl: 'https://youtu.be/aCz4tvuA8iU?si=MJbw-E2cRevT2E64',
          imageUrl: 'https://i.imgur.com/7KjvL3f.jpg'
        },
        {
          name: 'Santoor',
          origin: 'Kashmir',
          description: 'Hammered dulcimer with hundred strings played with delicate mallets.',
          color: 'from-blue-400 to-cyan-500',
          videoUrl: 'https://youtu.be/RvmzqLuBNkc?si=AxbFAcugK_98k1A2',
          imageUrl: 'https://i.imgur.com/2XvY8kK.jpg'
        },
        {
          name: 'Qawwali',
          origin: 'Sufi Tradition',
          description: 'Devotional music with harmonium, tabla and powerful vocals.',
          color: 'from-teal-400 to-cyan-500',
          videoUrl: 'https://youtu.be/Q95dbkmXDv8?si=g2oSHLdGc7CoOI5E',
          imageUrl: 'https://i.imgur.com/1XvY7kJ.jpg'
        },
        {
          name: 'Rabindra Sangeet',
          origin: 'Bengal',
          description: 'Songs by Tagore blending classical and folk traditions.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtu.be/MeczW5Gx4Cw?si=xezRll8fzta7sbXq',
          imageUrl: 'https://i.imgur.com/6KjvL1f.jpg'
        },
        {
          name: 'Baul',
          origin: 'Bengal',
          description: 'Mystic minstrels with ektara and dotara instruments.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://youtu.be/k51d-szCwI4?si=0VbG0koO6qV7Exx0',
          imageUrl: 'https://i.imgur.com/5XvY6kJ.jpg'
        },
        {
          name: 'Lavani',
          origin: 'Maharashtra',
          description: 'Folk music with quick tempo and powerful vocals.',
          color: 'from-pink-500 to-rose-600',
          videoUrl: 'https://youtu.be/iYYYwTdPQXw?si=xbqHDMPl6rl1vGr7',
          imageUrl: 'https://i.imgur.com/4KjvL0f.jpg'
        },
        {
          name: 'Bhavageethe',
          origin: 'Karnataka',
          description: 'Emotional poetry set to music, often with light instrumentation.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://youtu.be/qBAoqZOSMpM?si=28JgDFaNjh6_NaSm',
          imageUrl: 'https://i.imgur.com/3XvY5kJ.jpg'
        },
        {
          name: 'Chhau Music',
          origin: 'Eastern India',
          description: 'Percussive music accompanying the martial dance form.',
          color: 'from-red-500 to-orange-600',
          videoUrl: 'https://youtu.be/p1LVv1mNUQQ?si=shrvOb0FBzytNt-y',
          imageUrl: 'https://i.imgur.com/2KjvL9f.jpg'
        },
        {
          name: 'Pandavani',
          origin: 'Chhattisgarh',
          description: 'Folk singing style narrating Mahabharata episodes.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://youtu.be/q_dShTc_uNk?si=lQGpa3wMLNPd7l5K',
          imageUrl: 'https://i.imgur.com/1KjvL8f.jpg'
        },
        {
          name: 'Dandiya Raas Music',
          origin: 'Gujarat',
          description: 'Energetic folk music played with dandiya sticks.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtu.be/TqfbXRMWcGI?si=a-G-3WCQHykiG_Zj',
          imageUrl: 'https://i.imgur.com/0KjvL7f.jpg'
        },
        {
         name: 'Thumri',
          origin: 'North India',
          description: 'Semi-classical romantic vocal style',
          imageUrl: 'https://i.imgur.com/newimage3.jpg',
          videoUrl: 'https://youtu.be/kfBvz2rG-NI?si=yTrWwjQL_dBUuKjT'
        },
        {
          name: 'Villu Paatu',
          origin: 'Tamil Nadu',
          description: 'Bow-song storytelling tradition',
          imageUrl: 'https://youtu.be/axfBeJusK6g?si=FTKxE0lPVeiuTMBr',
          videoUrl: 'https://youtu.be/newlink4'
        }
      ]
    },
    visual: {
      title: 'Visual Arts',
      icon: Palette,
      items: [
        {
          name: 'Madhubani',
          origin: 'Bihar',
          description: 'Colorful folk paintings with geometric patterns and nature motifs.',
          color: 'from-red-400 to-pink-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/JzV9hWn.jpg'
        },
        {
          name: 'Warli',
          origin: 'Maharashtra',
          description: 'Tribal art with simple geometric forms depicting daily life.',
          color: 'from-amber-400 to-yellow-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/5XWQk0L.jpg'
        },
        {
          name: 'Tanjore Painting',
          origin: 'Tamil Nadu',
          description: 'Richly decorated religious art with gold foil and gems.',
          color: 'from-yellow-400 to-amber-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/8KjvL2f.jpg'
        },
        {
          name: 'Pattachitra',
          origin: 'Odisha',
          description: 'Cloth-based scroll painting with mythological narratives.',
          color: 'from-orange-400 to-red-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/9YQvZ7T.jpg'
        },
        {
          name: 'Kalamkari',
          origin: 'Andhra Pradesh',
          description: 'Hand-painted or block-printed textile art with natural dyes.',
          color: 'from-blue-400 to-indigo-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/3QvY7hJ.jpg'
        },
        {
          name: 'Miniature Paintings',
          origin: 'Rajasthan',
          description: 'Intricate small-scale works from Mughal and Rajput schools.',
          color: 'from-emerald-400 to-teal-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/4XvY9kL.jpg'
        },
        {
          name: 'Gond Art',
          origin: 'Madhya Pradesh',
          description: 'Tribal art with nature themes using dot and line patterns.',
          color: 'from-green-400 to-lime-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/7KjvL3f.jpg'
        },
        {
          name: 'Phad Painting',
          origin: 'Rajasthan',
          description: 'Scroll paintings depicting folk deities and epic narratives.',
          color: 'from-orange-500 to-red-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/2XvY8kK.jpg'
        },
        {
          name: 'Cheriyal Scrolls',
          origin: 'Telangana',
          description: 'Narrative scroll paintings with bold colors and stylized figures.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/1XvY7kJ.jpg'
        },
        {
          name: 'Kalighat Painting',
          origin: 'West Bengal',
          description: 'Watercolor paintings with bold outlines and social commentary.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/6KjvL1f.jpg'
        },
        {
          name: 'Pithora Art',
          origin: 'Gujarat',
          description: 'Ritualistic tribal paintings depicting horses and deities.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/5XvY6kJ.jpg'
        },
        {
          name: 'Saura Art',
          origin: 'Odisha',
          description: 'Tribal art with geometrical patterns and stick figures.',
          color: 'from-red-500 to-orange-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/4KjvL0f.jpg'
        },
        {
          name: 'Mysore Painting',
          origin: 'Karnataka',
          description: 'Delicate paintings with gold leaf and subtle colors.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/3XvY5kJ.jpg'
        },
        {
          name: 'Kerala Mural',
          origin: 'Kerala',
          description: 'Temple art with vibrant colors and mythological themes.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/2KjvL9f.jpg'
        },
        {
          name: 'Chittara Art',
          origin: 'Karnataka',
          description: 'Intricate floor paintings made by the Deewaru community.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/1KjvL8f.jpg'
        },
        {
          name: 'Rogan Art',
          origin: 'Gujarat',
          description: 'Rare craft using castor oil paints on fabric.',
          color: 'from-orange-500 to-red-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/0KjvL7f.jpg'
        },
        {
          name: 'Sanjhi Art',
          origin: 'Uttar Pradesh',
          description: 'Paper stencil art for Krishna rituals',
          imageUrl: 'https://i.imgur.com/newimage5.jpg',
          videoUrl: 'https://youtu.be/newlink5'
        },
        {
          name: 'Lippan Kaam',
          origin: 'Gujarat',
          description: 'Mud and mirror wall art by Rabari tribe',
          imageUrl: 'https://i.imgur.com/newimage6.jpg',
          videoUrl: 'https://youtu.be/newlink6'
        }
      ]
    },
    textile: {
      title: 'Textile Arts',
      icon: Shirt,
      items: [
        {
          name: 'Banarasi Silk',
          origin: 'Varanasi',
          description: 'Luxurious silk sarees with intricate gold/silver brocade.',
          color: 'from-yellow-400 to-amber-500',
          videoUrl: 'https://youtube.com/shorts/4oP6x3wro5I?si=uUUlX9854U2VZy1l',
          imageUrl: 'https://i.imgur.com/JzV9hWn.jpg'
        },
        {
          name: 'Kanjivaram',
          origin: 'Tamil Nadu',
          description: 'Heavy silk sarees with contrast borders and temple designs.',
          color: 'from-rose-400 to-pink-500',
          videoUrl: 'https://youtube.com/shorts/7YfM-jWSUMI?si=eCBJqmR-iHPAiZaG',
          imageUrl: 'https://i.imgur.com/5XWQk0L.jpg'
        },
        {
          name: 'Paithani',
          origin: 'Maharashtra',
          description: 'Precious silk sarees with peacock designs and double-sided borders.',
          color: 'from-purple-400 to-violet-500',
          videoUrl: 'https://youtube.com/shorts/s-8opnSq9ww?si=U2zCyIx26VlJksJt',
          imageUrl: 'https://i.imgur.com/8KjvL2f.jpg'
        },
        {
          name: 'Baluchari',
          origin: 'West Bengal',
          description: 'Silk sarees with elaborate narrative borders depicting epics.',
          color: 'from-red-500 to-pink-600',
          videoUrl: 'https://youtube.com/shorts/RnHB7x43LZw?si=vM8H4pAnVqm9di2O',
          imageUrl: 'https://i.imgur.com/9YQvZ7T.jpg'
        },
        {
          name: 'Mysore Silk',
          origin: 'Karnataka',
          description: 'Soft silk sarees with gold zari and minimal designs.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://youtube.com/shorts/33trRrLNanE?si=l5FqPidwbfXPgJSp',
          imageUrl: 'https://i.imgur.com/3QvY7hJ.jpg'
        },
        {
          name: 'Bandhani',
          origin: 'Gujarat/Rajasthan',
          description: 'Tie-dye technique creating vibrant dot patterns.',
          color: 'from-blue-400 to-cyan-500',
          videoUrl: 'https://youtube.com/shorts/9ZJljhEYgUk?si=7Uw_AXYakN6k0ETO',
          imageUrl: 'https://i.imgur.com/4XvY9kL.jpg'
        },
        {
          name: 'Pochampally Ikat',
          origin: 'Telangana',
          description: 'Tie-dye before weaving creates geometric patterns.',
          color: 'from-orange-400 to-red-500',
          videoUrl: 'https://youtube.com/shorts/xnJROQMY17M?si=WbS697hQ4Yktwhco0',
          imageUrl: 'https://i.imgur.com/7KjvL3f.jpg'
        },
        {
          name: 'Bagru Print',
          origin: 'Rajasthan',
          description: 'Natural dye block printing with geometric patterns.',
          color: 'from-indigo-500 to-purple-600',
          videoUrl: 'https://youtube.com/shorts/jeiPcVdhIKU?si=z0kC4CHjEpwrzZ4q',
          imageUrl: 'https://i.imgur.com/2XvY8kK.jpg'
        },
        {
          name: 'Ajrakh',
          origin: 'Gujarat',
          description: 'Complex resist-dyeing technique with geometric patterns.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtube.com/shorts/ODDrjfETUSc?si=D0uobpz3VSsZx51V',
          imageUrl: 'https://i.imgur.com/1XvY7kJ.jpg'
        },
        {
          name: 'Zardozi',
          origin: 'Mughal Courts',
          description: 'Heavy metal embroidery with gold/silver threads and pearls.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://youtube.com/shorts/rSrNu10DfWI?si=bHS_R9rJEE4zwJxA',
          imageUrl: 'https://i.imgur.com/6KjvL1f.jpg'
        },
        {
          name: 'Kantha',
          origin: 'Bengal',
          description: 'Running stitch embroidery on recycled cloth with folk motifs.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtube.com/shorts/PH34KQRD0sQ?si=SvUQb_jwfOjuvNKd',
          imageUrl: 'https://i.imgur.com/5XvY6kJ.jpg'
        },
        {
          name: 'Chikankari',
          origin: 'Lucknow',
          description: 'Delicate white-on-white shadow work embroidery.',
          color: 'from-white-500 to-gray-600',
          videoUrl: 'https://youtube.com/shorts/muZJb-gXY0I?si=Ul8vLJ-ACyxaUJTl',
          imageUrl: 'https://i.imgur.com/4KjvL0f.jpg'
        },
        {
          name: 'Phulkari',
          origin: 'Punjab',
          description: 'Vibrant floral embroidery traditionally done on shawls.',
          color: 'from-pink-500 to-rose-600',
          videoUrl: 'https://youtube.com/shorts/F9-6X-VQ92U?si=f0cwHSbkEqO1xE7X',
          imageUrl: 'https://i.imgur.com/3XvY5kJ.jpg'
        },
        {
          name: 'Kashmiri Shawl',
          origin: 'Kashmir',
          description: 'Exquisite woolen shawls with intricate embroidery.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://youtube.com/shorts/DOyNGWB_D8o?si=wnr48VHhemm2d-TP',
          imageUrl: 'https://i.imgur.com/2KjvL9f.jpg'
        },
        {
          name: 'Kota Doria',
          origin: 'Rajasthan',
          description: 'Lightweight cotton fabric with square check patterns.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://youtube.com/shorts/AGUPCeyFO3k?si=wVvWk9euVTqbc6QB',
          imageUrl: 'https://i.imgur.com/1KjvL8f.jpg'
        },
        {
          name: 'Tussar Silk',
          origin: 'Eastern India',
          description: 'Wild silk with rich texture and natural gold color.',
          color: 'from-amber-500 to-orange-600',
          videoUrl: 'https://youtube.com/shorts/6a8Y15ZChBw?si=JETLG6qj6SDi2wIJ',
          imageUrl: 'https://i.imgur.com/0KjvL7f.jpg'
        },
        {
          name: 'Kashida Embroidery',
          origin: 'Kashmir',
          description: 'Delicate floral needlework on shawls',
          imageUrl: 'https://i.imgur.com/newimage7.jpg',
          videoUrl: 'https://youtube.com/shorts/bSd4r10toaU?si=x4BVShhlwulVZzyj'
        }
      ]
    },
    architecture: {
      title: 'Architecture',
      icon: Building2,
      items: [
        {
          name: 'Dravidian Style',
          origin: 'South India',
          description: 'Characterized by gopurams and vimanas (Brihadeeswara Temple).',
          color: 'from-orange-400 to-yellow-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/JzV9hWn.jpg'
        },
        {
          name: 'Nagara Style',
          origin: 'North India',
          description: 'Curvilinear towers (shikharas) like Khajuraho temples.',
          color: 'from-red-400 to-orange-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/5XWQk0L.jpg'
        },
        {
          name: 'Vesara Style',
          origin: 'Deccan',
          description: 'Hybrid style blending Dravidian and Nagara elements.',
          color: 'from-purple-400 to-violet-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/8KjvL2f.jpg'
        },
        {
          name: 'Mughal Architecture',
          origin: 'North India',
          description: 'Char bagh gardens and bulbous domes (Taj Mahal, Red Fort).',
          color: 'from-green-400 to-teal-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/9YQvZ7T.jpg'
        },
        {
          name: 'Indo-Islamic',
          origin: 'Delhi Sultanate',
          description: 'Arches, domes and minarets blended with Indian elements.',
          color: 'from-blue-400 to-indigo-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/3QvY7hJ.jpg'
        },
        {
          name: 'Indo-Saracenic',
          origin: 'British India',
          description: 'Blend of Victorian-Gothic with Indian elements.',
          color: 'from-stone-400 to-gray-500',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/4XvY9kL.jpg'
        },
        {
          name: 'Portuguese Colonial',
          origin: 'Goa',
          description: 'Whitewashed churches with Baroque elements and local adaptations.',
          color: 'from-white-500 to-gray-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/7KjvL3f.jpg'
        },
        {
          name: 'Rajput Forts',
          origin: 'Rajasthan',
          description: 'Massive hill forts with intricate jharokhas (Mehrangarh).',
          color: 'from-red-500 to-orange-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/2XvY8kK.jpg'
        },
        {
          name: 'Kerala Architecture',
          origin: 'Kerala',
          description: 'Wooden nalukettu houses with sloping roofs and courtyards.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/1XvY7kJ.jpg'
        },
        {
          name: 'Stepwells',
          origin: 'Western India',
          description: 'Ornate water storage structures (Rani ki Vav).',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/6KjvL1f.jpg'
        },
        {
          name: 'Bamboo Architecture',
          origin: 'Northeast India',
          description: 'Sustainable structures using local bamboo and thatch.',
          color: 'from-lime-500 to-green-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/5XvY6kJ.jpg'
        },
        {
          name: 'Havelis',
          origin: 'North India',
          description: 'Ornate merchant houses with frescoes and jali work.',
          color: 'from-amber-500 to-orange-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/4KjvL0f.jpg'
        },
        {
          name: 'Chettinad Mansions',
          origin: 'Tamil Nadu',
          description: 'Grand houses with Burmese teak and Italian marble.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/3XvY5kJ.jpg'
        },
        {
          name: 'Konkan Houses',
          origin: 'Western Coast',
          description: 'Sloping roofs, verandas and laterite stone construction.',
          color: 'from-red-500 to-pink-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/2KjvL9f.jpg'
        },
        {
          name: 'Monolithic Temples',
          origin: 'Various',
          description: 'Rock-cut temples like Ellora and Mahabalipuram.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/1KjvL8f.jpg'
        },
        {
          name: 'Stupas',
          origin: 'Buddhist Tradition',
          description: 'Dome-shaped monuments containing relics (Sanchi Stupa).',
          color: 'from-stone-500 to-gray-600',
          videoUrl: 'https://www.youtube.com/watch?v=3vqjA2Hl5K0',
          imageUrl: 'https://i.imgur.com/0KjvL7f.jpg'
        }
      ]
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Living Art Forms of India
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the diverse artistic expressions that have flourished across India for centuries
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(categories).map(([key, category]) => {
          const Icon = category.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-saffron-500 to-orange-600 text-white scale-105 shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-saffron-50 hover:text-saffron-600 border border-gray-200'
              }`}
            >
              <Icon size={20} />
              <span>{category.title}</span>
            </button>
          );
        })}
      </div>

      {/* Art Forms Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories[activeCategory].items.map((item, index) => (
          <Card 
            key={index}
            className="border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 
              bg-gradient-to-br from-white to-orange-50 overflow-hidden group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4 relative">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img
  src={item.imageUrl}
  alt={item.name}
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
              </div>
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} 
                flex items-center justify-center shadow-lg`}>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              <CardTitle className="text-lg font-bold text-gray-800 mt-4">
                {item.name}
              </CardTitle>
              <p className="text-sm text-saffron-600 font-medium">{item.origin}</p>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover-scale"
                  onClick={() => window.open(item.videoUrl, '_blank')}
                >
                  <Play className="mr-1 h-3 w-3" />
                  Watch
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-saffron-200 text-saffron-700 hover:bg-saffron-50 hover-scale"
                >
                  <Heart className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-16 text-center">
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-saffron-500 to-orange-600 text-white">
          <CardContent className="py-12">
            <h3 className="text-3xl font-bold mb-4">Experience Art Like Never Before</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Immerse yourself in interactive workshops, virtual performances, and AR experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-saffron-600 hover:bg-gray-100 hover-scale"
              >
                Virtual Workshop
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-saffron-600 hover-scale"
              >
                AR Art Gallery
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArtForms;