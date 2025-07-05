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
          imageUrl: 'https://media.istockphoto.com/id/870799608/photo/beauty-of-classical-indian-dance-young-woman-dancer-is-performing-indian-dance-bharatanatyam.jpg?s=612x612&w=0&k=20&c=Ve0ap9tWRzhkCUQ9PTuAIlbLc0L6rGkDPJBBDXutoYo='
        },
        {
          name: 'Kathak',
          origin: 'North India',
          description: 'Storytelling dance with graceful spins and rhythmic footwork.',
          color: 'from-blue-400 to-indigo-500',
          videoUrl: 'https://youtu.be/UBYqv21c0Yk?si=pHVYHtt6jECtoEvP',
          imageUrl: 'https://bharatanatyamworld.com/wp-content/uploads/2022/03/kathak-dance.jpg'
        },
        {
          name: 'Kathakali',
          origin: 'Kerala',
          description: 'Dance-drama with elaborate makeup and martial movements.',
          color: 'from-green-400 to-emerald-500',
          videoUrl: 'https://youtu.be/GBbcYtkqVKQ?si=rwGGkOnK6Z5bHykJE',
          imageUrl: 'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fkathakali-classical-artform-1716726714_94ec483526935249eccd.webp&w=3840&q=75'
        },
        {
          name: 'Kuchipudi',
          origin: 'Andhra Pradesh',
          description: 'Graceful dance-drama with storytelling and character portrayal.',
          color: 'from-purple-400 to-violet-500',
          videoUrl: 'https://youtu.be/YbRX_cdTap8?si=mdGU3KboA0DFVIQ8',
          imageUrl: 'https://cdn.britannica.com/99/126699-004-4DF6AC35/performance.jpg'
        },
        {
          name: 'Manipuri',
          origin: 'Manipur',
          description: 'Lyrical dance depicting Radha-Krishna stories with flowing costumes.',
          color: 'from-teal-400 to-cyan-500',
          videoUrl: 'https://youtu.be/oEOEf7xPD3U?si=bEb7WLn-iFyh9wRM',
          imageUrl: 'https://www.india-a2z.com/images/manipuri2.jpg'
        },
        {
          name: 'Odissi',
          origin: 'Odisha',
          description: 'Sculptural dance inspired by temple carvings with tribhanga posture.',
          color: 'from-amber-400 to-orange-500',
          videoUrl: 'https://youtu.be/LUHrTwrC3wU?si=JOYX4mCzST-R2k5P',
          imageUrl: 'https://www.fridaywall.com/wp-content/uploads/2023/12/Odissi.jpeg'
        },
        {
          name: 'Sattriya',
          origin: 'Assam',
          description: 'Monastic dance tradition with devotional themes.',
          color: 'from-lime-400 to-green-500',
          videoUrl: 'https://youtu.be/eb9jFeNKEQM?si=JYsXJyDJGPlugJx7',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Noopurt.jpg'
        },
        {
          name: 'Mohiniyattam',
          origin: 'Kerala',
          description: 'Feminine lasya-style dance with swaying palm movements.',
          color: 'from-indigo-400 to-blue-500',
          videoUrl: 'https://youtu.be/Dx1hvp8Sr7w?si=ZvppInfxItYghRlF',
          imageUrl: 'https://www.culturalindia.net/iliimages/Mohiniattam-1.jpg'
        },
        {
          name: 'Garba',
          origin: 'Gujarat',
          description: 'Circular dance with dandiya sticks during Navratri festival.',
          color: 'from-orange-400 to-red-500',
          videoUrl: 'https://youtu.be/HQQXY-LMM4M?si=VDDmA2dSj4GNuszE',
          imageUrl: 'https://cdn1.img.sputniknews.in/img/07e7/0a/0a/4734093_560:0:2608:2048_1400x0_80_0_0_c097a37f24d3461b1126b035449dd710.jpg'
        },
        {
          name: 'Bhangra',
          origin: 'Punjab',
          description: 'Energetic harvest dance with jumps and shoulder movements.',
          color: 'from-yellow-400 to-amber-500',
          videoUrl: 'https://youtu.be/pTHfk-HRr7k?si=Z24xkURoB2o_AQtG',
          imageUrl: 'https://stagebuzz.in/wp-content/uploads/2021/12/302379e3d60a0271e45bd3e916080171.jpg'
        },
        {
          name: 'Lavani',
          origin: 'Maharashtra',
          description: 'Dynamic folk dance with quick footwork to dholki beats.',
          color: 'from-fuchsia-400 to-purple-500',
          videoUrl: 'https://youtu.be/vFgLrr5gof4?si=0p3TrhImVNlky5rS',
          imageUrl: 'https://s3.ap-south-1.amazonaws.com/production.media.hafla.com/db/product_images/people-and-services/indian-traditional-lavani-dance/ogImage/Lavani-dancer-5.png'
        },
        {
          name: 'Ghoomar',
          origin: 'Rajasthan',
          description: 'Graceful circular dance performed by women in flowing ghagras.',
          color: 'from-red-500 to-pink-600',
          videoUrl: 'https://youtu.be/FYiQSI1YA5c?si=lAA4ns28TNKxvTLV',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ghoomar_dancers_%28Rajasthan%2C_India%2C_2023%29.jpg/1200px-Ghoomar_dancers_%28Rajasthan%2C_India%2C_2023%29.jpg'
        },
        {
          name: 'Bihu',
          origin: 'Assam',
          description: 'Vibrant harvest dance with rapid hand and foot movements.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://youtu.be/1cGdw8AzVnM?si=NEFYYA31vJU15p2Z',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Bihu-Dance-assam.jpg'
        },
        {
          name: 'Chhau',
          origin: 'Eastern India',
          description: 'Martial dance with masks and acrobatic movements.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtu.be/-6GvAxdEL5s?si=md2emiOaRPBxYgDe',
          imageUrl: 'https://ich.unesco.org/img/photo/thumb/03393-BIG.jpg'
        },
        {
          name: 'Yakshagana',
          origin: 'Karnataka',
          description: 'Colorful dance-drama with elaborate costumes and makeup.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://youtu.be/poblwP32Z9A?si=bdLXm67p1aE9-rk9',
          imageUrl: 'https://karnatakatourism.org/wp-content/uploads/2020/05/Yakshagana-2.jpg'
        },
        {
          name: 'Theyyam',
          origin: 'Kerala',
          description: 'Ritual dance form where performers embody deities.',
          color: 'from-orange-500 to-red-600',
          videoUrl: 'https://youtu.be/jqKKxZwwHRY?si=0V-rTvRylE1khiQa',
          imageUrl: 'https://live.staticflickr.com/5704/30718138272_c8f3953952_b.jpg'
        },
        {
          name: 'Gaudiya Nritya',
          origin: 'West Bengal',
          description: 'Classical dance of Bengal with Vaishnav influences',
          imageUrl: 'https://narthaki.com/info/rev20/images/rv2508a.jpg',
          videoUrl: 'https://youtu.be/u0Ys1V9FcIk?si=P2fBT_jZUqeeZnCP'
        },
        {
          name: 'Dollu Kunitha',
          origin: 'Karnataka',
          description: 'Vigorous drum dance performed by men',
          imageUrl: 'https://static.toiimg.com/thumb/51615214/DolluKunitha05.jpg?width=1200&height=900',
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
          imageUrl: 'https://i0.wp.com/riyazapp.com/wp-content/uploads/2023/03/raja-750x430.jpg.webp?fit=750%2C430&ssl=1'
        },
        {
          name: 'Carnatic Classical',
          origin: 'South India',
          description: 'Composition-based classical music with varnam and kriti forms.',
          color: 'from-yellow-400 to-amber-500',
          videoUrl: 'https://youtu.be/c9Cbhpd2zYw?si=2Jo9iiYMTAV9wubX',
          imageUrl: 'https://sc0.blr1.cdn.digitaloceanspaces.com/book/190416-fimiqkuzxt-1684738092.jpeg'
        },
        {
          name: 'Sitar',
          origin: 'North India',
          description: 'String instrument with sympathetic strings, popular in Hindustani music.',
          color: 'from-amber-400 to-orange-500',
          videoUrl: 'https://youtu.be/KBYSpR8N6pc?si=Hl6Ccs7pPbFwN-bm',
          imageUrl: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/12/27/Pictures/_01fa79a8-eaf9-11e7-ba01-0264b08f54bd.jpg'
        },
        {
          name: 'Veena',
          origin: 'South India',
          description: 'Ancient fretted string instrument, primary in Carnatic music.',
          color: 'from-emerald-400 to-teal-500',
          videoUrl: 'https://youtu.be/eaQvIL-leCo?si=5E7boEJCmUIi4Lb7',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Saraswati_veena_%28Indian_long-necked_lute%29.png'
        },
        {
          name: 'Tabla',
          origin: 'North India',
          description: 'Percussion pair with bayan (bass) and dayan (treble) drums.',
          color: 'from-indigo-400 to-purple-500',
          videoUrl: 'https://youtu.be/gQrFbXX-o0E?si=xQqMjfQgWaBBhRf2',
          imageUrl: 'https://surangana.in/wp-content/uploads/2024/02/tabla3-scaled.jpg'
        },
        {
          name: 'Mridangam',
          origin: 'South India',
          description: 'Primary Carnatic percussion instrument with thani avartanam solos.',
          color: 'from-brown-400 to-amber-500',
          videoUrl: 'https://youtu.be/LbGw7tkn6ic?si=f2d0RsYBDJPv4tol',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Wiki-mridangam.jpg'
        },
        {
          name: 'Sarod',
          origin: 'North India',
          description: 'Fretless string instrument with deep, resonant sound.',
          color: 'from-gray-400 to-stone-500',
          videoUrl: 'https://youtu.be/aCz4tvuA8iU?si=MJbw-E2cRevT2E64',
          imageUrl: 'https://m.media-amazon.com/images/I/31-e6tARquL.jpg'
        },
        {
          name: 'Santoor',
          origin: 'Kashmir',
          description: 'Hammered dulcimer with hundred strings played with delicate mallets.',
          color: 'from-blue-400 to-cyan-500',
          videoUrl: 'https://youtu.be/RvmzqLuBNkc?si=AxbFAcugK_98k1A2',
          imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/1/ZY/QW/NB/3194950/santoor.jpg'
        },
        {
          name: 'Qawwali',
          origin: 'Sufi Tradition',
          description: 'Devotional music with harmonium, tabla and powerful vocals.',
          color: 'from-teal-400 to-cyan-500',
          videoUrl: 'https://youtu.be/Q95dbkmXDv8?si=g2oSHLdGc7CoOI5E',
          imageUrl: 'https://www.dailypioneer.com/uploads/2018/story/images/big/keepers-of-tradition-2018-10-06.jpg'
        },
        {
          name: 'Rabindra Sangeet',
          origin: 'Bengal',
          description: 'Songs by Tagore blending classical and folk traditions.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtu.be/MeczW5Gx4Cw?si=xezRll8fzta7sbXq',
          imageUrl: 'https://m.economictimes.com/photo/53577218.cms'
        },
        {
          name: 'Baul',
          origin: 'West Bengal',
          description: 'Mystic minstrels with ektara and dotara instruments.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://youtu.be/k51d-szCwI4?si=0VbG0koO6qV7Exx0',
          imageUrl: 'https://www.eduforum.in/uploadedImages/baul.jpg'
        },
        {
          name: 'Lavani',
          origin: 'Maharashtra',
          description: 'Folk music with quick tempo and powerful vocals.',
          color: 'from-pink-500 to-rose-600',
          videoUrl: 'https://youtu.be/iYYYwTdPQXw?si=xbqHDMPl6rl1vGr7',
          imageUrl: 'https://rollingstoneindia.com/wp-content/uploads/2025/03/Womens-History-Month-IME-Varijashree-Lavanyavati-Wild-Wild-Women.jpg'
        },
        {
          name: 'Bhavageethe',
          origin: 'Karnataka',
          description: 'Emotional poetry set to music, often with light instrumentation.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://youtu.be/qBAoqZOSMpM?si=28JgDFaNjh6_NaSm',
          imageUrl: 'https://i.ytimg.com/vi/u0AbbhaaTWM/maxresdefault.jpg'
        },
        {
          name: 'Chhau Music',
          origin: 'Eastern India',
          description: 'Percussive music accompanying the martial dance form.',
          color: 'from-red-500 to-orange-600',
          videoUrl: 'https://youtu.be/p1LVv1mNUQQ?si=shrvOb0FBzytNt-y',
          imageUrl: 'https://www.puruliachau.com/wp-content/uploads/2019/12/Musical-insrtument.jpg'
        },
        {
          name: 'Pandavani',
          origin: 'Chhattisgarh',
          description: 'Folk singing style narrating Mahabharata episodes.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://youtu.be/q_dShTc_uNk?si=lQGpa3wMLNPd7l5K',
          imageUrl: 'https://www.theartlifegallery.com/blog/wp-content/uploads/2023/07/Image-01-15.jpg'
        },
        {
          name: 'Dandiya Raas Music',
          origin: 'Gujarat',
          description: 'Energetic folk music played with dandiya sticks.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtu.be/TqfbXRMWcGI?si=a-G-3WCQHykiG_Zj',
          imageUrl: 'https://lh6.googleusercontent.com/proxy/TI3eqDmj_gDWBfTgNo88C9srO0u0xZVbQc1dCHIXPib543o8iaZZXWdNffR0uKOqFD992uAWBCRnlTxd_YOheUMt7p-o_MfQRpcycA'
        },
        {
         name: 'Thumri',
          origin: 'North India',
          description: 'Semi-classical romantic vocal style',
          imageUrl: 'https://www.dailypioneer.com/uploads/2018/story/images/big/---thumri-is-all-about-improvisation----2018-09-18.jpg',
          videoUrl: 'https://youtu.be/kfBvz2rG-NI?si=yTrWwjQL_dBUuKjT'
        },
        {
          name: 'Villu Paatu',
          origin: 'Tamil Nadu',
          description: 'Bow-song storytelling tradition',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Villupattu_at_kollam.jpg',
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
          videoUrl: 'https://youtu.be/HP6Ui0bRg6U?si=8KiWQGUkNM251iQ5',
          imageUrl: 'https://d35l77wxi0xou3.cloudfront.net/opencart/image/productFromFeb2020/Traditional%20Madhubani%20Painting1615964610-600x600.jpg'
        },
        {
          name: 'Warli',
          origin: 'Maharashtra',
          description: 'Tribal art with simple geometric forms depicting daily life.',
          color: 'from-amber-400 to-yellow-500',
          videoUrl: 'https://youtu.be/xetipGtr_aw?si=eQE0FJEkF0-YQgYh',
          imageUrl: 'https://www.artisticat.com.au/wp-content/uploads/2023/09/warli-2-1.jpg'
        },
        {
          name: 'Tanjore Painting',
          origin: 'Tamil Nadu',
          description: 'Richly decorated religious art with gold foil and gems.',
          color: 'from-yellow-400 to-amber-500',
          videoUrl: 'https://youtu.be/OS4lmanRbjo?si=445WVhn0AaapBIsB',
          imageUrl: 'https://www.myangadi.com/image/cache/catalog/2024/stock/December/Frames/Classic/pmatp24m12-s3-811-nandi-bagavan-tanjore-painting-550x550w.JPG'
        },
        {
          name: 'Pattachitra',
          origin: 'Odisha',
          description: 'Cloth-based scroll painting with mythological narratives.',
          color: 'from-orange-400 to-red-500',
          videoUrl: 'https://youtu.be/NXSmSMbVMQM?si=vc3jlFU4gI0QdCK6',
          imageUrl: 'https://www.arteastic.in/admin/assets/img/product_image/Pattachitra_Painting_Coronation_of_Ram_v1_PCP-042.jpg'
        },
        {
          name: 'Kalamkari',
          origin: 'Andhra Pradesh',
          description: 'Hand-painted or block-printed textile art with natural dyes.',
          color: 'from-blue-400 to-indigo-500',
          videoUrl: 'https://youtu.be/Hv3MR-Ai0xQ?si=jSZ-Yo-y9EaaVyg3',
          imageUrl: 'https://redearthindia.com/cdn/shop/products/ProductImages29_eca6044f-0dca-4266-8ffd-e793abe8a539_grande.png?v=1594829624'
        },
        {
          name: 'Miniature Paintings',
          origin: 'Rajasthan',
          description: 'Intricate small-scale works from Mughal and Rajput schools.',
          color: 'from-emerald-400 to-teal-500',
          videoUrl: 'https://youtu.be/Vskmx7kncQg?si=fNFavucnAl-KpBa7',
          imageUrl: 'https://cdn.rajasthanstudio.com/wp-content/uploads/2021/12/mp1.jpg'
        },
        {
          name: 'Gond Art',
          origin: 'Madhya Pradesh',
          description: 'Tribal art with nature themes using dot and line patterns.',
          color: 'from-green-400 to-lime-500',
          videoUrl: 'https://youtu.be/trOblPZZrT8?si=ME1ybNOkXPvWhOou',
          imageUrl: 'https://kreateworld.in/cdn/shop/files/birds-gond-art-design-697911_1000x.jpg?v=1717005004'
        },
        {
          name: 'Phad Painting',
          origin: 'Rajasthan',
          description: 'Scroll paintings depicting folk deities and epic narratives.',
          color: 'from-orange-500 to-red-600',
          videoUrl: 'https://youtu.be/UD_Rq3KEECQ?si=LHTP9Wkltkd8Oy_r',
          imageUrl: 'https://i.pinimg.com/736x/ae/22/a6/ae22a63deaab13e14f8c89f46094131b.jpg'
        },
        {
          name: 'Cheriyal Scrolls',
          origin: 'Telangana',
          description: 'Narrative scroll paintings with bold colors and stylized figures.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://youtu.be/-xQ-DmsiOkY?si=9tljC4WlXXMoTzIi',
          imageUrl: 'https://mapacademy.io/wp-content/uploads/2023/04/cheriyal-scroll-painting-9l.jpg'
        },
        {
          name: 'Kalighat Painting',
          origin: 'West Bengal',
          description: 'Watercolor paintings with bold outlines and social commentary.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtu.be/uum5qBoWJqQ?si=6lUIHPvTnaAjOP1n',
          imageUrl: 'https://thestatesquare.com/wp-content/uploads/2023/03/IMG-20220315-WA0002.jpg'
        },
        {
          name: 'Pithora Art',
          origin: 'Gujarat',
          description: 'Ritualistic tribal paintings depicting horses and deities.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://youtu.be/ExZR1iG5u-Y?si=UxpzOlKx9d_77835',
          imageUrl: 'https://gaatha.org/wp-content/uploads/usage_1-37.jpg'
        },
        {
          name: 'Saura Art',
          origin: 'Odisha',
          description: 'Tribal art with geometrical patterns and stick figures.',
          color: 'from-red-500 to-orange-600',
          videoUrl: 'https://youtu.be/8pH2hzgNL54?si=Xu5W5lXS6L-8dux6',
          imageUrl: 'https://cdn-flogk.nitrocdn.com/ntAnZzwBBOxbxtaRuLxzeKNnJkAXwcue/assets/images/optimized/rev-c396f02/www.abirpothi.com/wp-content/uploads/2024/04/Courtesy-Vatsal-Jain-via-Medium-1024x678.jpg'
        },
        {
          name: 'Mysore Painting',
          origin: 'Karnataka',
          description: 'Delicate paintings with gold leaf and subtle colors.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://youtube.com/playlist?list=PLSQsy0TB4pKFhpoOe4oDBYap5YrrXBUsy&si=fv9g6pBqIGe8FFkn',
          imageUrl: 'https://c9admin.cottage9.com/uploads/2098/art-of-mysore-square.jpg'
        },
        {
          name: 'Kerala Mural',
          origin: 'Kerala',
          description: 'Temple art with vibrant colors and mythological themes.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtu.be/Gj_hE2jHK8M?si=hz0TeuiI-Y0NgsNa',
          imageUrl: 'https://sathwikmurals.com/wp-content/uploads/2021/09/Ardhanareeshwara-pixlr-1.jpg'
        },
        {
          name: 'Chittara Art',
          origin: 'Karnataka',
          description: 'Intricate floor paintings made by the Deewaru community.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://youtu.be/XYn1vRYj-3M?si=rLkwuP4dJXrNIkV2',
          imageUrl: 'https://static.wixstatic.com/media/2cea4c_165616ffebab4499a268035245743245~mv2.jpg/v1/fill/w_280,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Archival-geetha-pics%20070.jpg'
        },
        {
          name: 'Rogan Art',
          origin: 'Gujarat',
          description: 'Rare craft using castor oil paints on fabric.',
          color: 'from-orange-500 to-red-600',
          videoUrl: 'https://youtu.be/H3Den05Q_D0?si=rplsqvNL7PvrrZXL',
          imageUrl: 'https://www.gujarattourism.com/content/gujrattourism/en/handicrafts/rogan-painting/_jcr_content/root/responsivegrid/pagebanner.coreimg.jpeg/1594791838578/rogan-work-%281%29.jpeg'
        },
        {
          name: 'Sanjhi Art',
          origin: 'Uttar Pradesh',
          description: 'Paper stencil art for Krishna rituals',
          imageUrl: 'https://static.sadhguru.org/d/46272/1633186657-1633186656749.jpg',
          videoUrl: 'https://youtu.be/A0KpIYWCHi0?si=lkrBV2JVCTtqWvd7'
        },
        {
          name: 'Lippan Art',
          origin: 'Gujarat',
          description: 'Mud and mirror wall art by Rabari tribe',
          imageUrl: 'https://i.etsystatic.com/36943291/r/il/30324e/4790588820/il_1080xN.4790588820_tsti.jpg',
          videoUrl: 'https://youtu.be/stA3PtmRHW8?si=QiRY1y2yHDSsEozM'
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
          imageUrl: 'https://mahavirs.com/cdn/shop/files/768424E9-D5D4-4479-BC8A-DD5AB2536BDC.jpg?v=1735049257'
        },
        {
          name: 'Kanjivaram',
          origin: 'Tamil Nadu',
          description: 'Heavy silk sarees with contrast borders and temple designs.',
          color: 'from-rose-400 to-pink-500',
          videoUrl: 'https://youtube.com/shorts/7YfM-jWSUMI?si=eCBJqmR-iHPAiZaG',
          imageUrl: 'https://fabricbysinghanias.com/cdn/shop/products/2_5_d25123a1-e652-4055-8bfa-5f7e313fa6e5.jpg?v=1750850586&width=1024'
        },
        {
          name: 'Paithani',
          origin: 'Maharashtra',
          description: 'Precious silk sarees with peacock designs and double-sided borders.',
          color: 'from-purple-400 to-violet-500',
          videoUrl: 'https://youtube.com/shorts/s-8opnSq9ww?si=U2zCyIx26VlJksJt',
          imageUrl: 'https://balajicutpiece.com/cdn/shop/files/I1_3bad5cca-3095-4df2-8e91-32e19384ffc5.jpg?v=1721379164'
        },
        {
          name: 'Baluchari',
          origin: 'West Bengal',
          description: 'Silk sarees with elaborate narrative borders depicting epics.',
          color: 'from-red-500 to-pink-600',
          videoUrl: 'https://youtube.com/shorts/RnHB7x43LZw?si=vM8H4pAnVqm9di2O',
          imageUrl: 'https://www.indyvogue.com/cdn/shop/files/navy-blue-color-pure-baluchari-silk-saree-with-meenakari-work.jpg?v=1743639392&width=400'
        },
        {
          name: 'Mysore Silk',
          origin: 'Karnataka',
          description: 'Soft silk sarees with gold zari and minimal designs.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://youtube.com/shorts/33trRrLNanE?si=l5FqPidwbfXPgJSp',
          imageUrl: 'https://houseofsarees.in/cdn/shop/files/SKY_BLUE_MYSORE_SILK_SAREES.jpg?v=1742034781&width=1080'
        },
        {
          name: 'Bandhani',
          origin: 'Gujarat/Rajasthan',
          description: 'Tie-dye technique creating vibrant dot patterns.',
          color: 'from-blue-400 to-cyan-500',
          videoUrl: 'https://youtube.com/shorts/9ZJljhEYgUk?si=7Uw_AXYakN6k0ETO',
          imageUrl: 'https://peachmode.com/cdn/shop/articles/all-you-need-to-know-about-bandhani-peachmode.jpg?v=1668998973&width=1200'
        },
        {
          name: 'Pochampally Ikat',
          origin: 'Telangana',
          description: 'Tie-dye before weaving creates geometric patterns.',
          color: 'from-orange-400 to-red-500',
          videoUrl: 'https://youtube.com/shorts/xnJROQMY17M?si=WbS697hQ4Yktwhco0',
          imageUrl: 'https://myblacktree.com/cdn/shop/files/3E9A8851_bf19447d-e553-460b-ac8c-de6e75d409b1.jpg?v=1730190492&width=1946'
        },
        {
          name: 'Bagru Print',
          origin: 'Rajasthan',
          description: 'Natural dye block printing with geometric patterns.',
          color: 'from-indigo-500 to-purple-600',
          videoUrl: 'https://youtube.com/shorts/jeiPcVdhIKU?si=z0kC4CHjEpwrzZ4q',
          imageUrl: 'https://navyasfashion.com/cdn/shop/files/dsc03519_1.jpg?v=1729105412'
        },
        {
          name: 'Ajrakh',
          origin: 'Gujarat',
          description: 'Complex resist-dyeing technique with geometric patterns.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtube.com/shorts/ODDrjfETUSc?si=D0uobpz3VSsZx51V',
          imageUrl: 'https://myposhaakh.com/cdn/shop/files/IMG_4604_8ad22140-d92b-4f4b-84ec-067af17cf786_1400x.jpg?v=1720327182'
        },
        {
          name: 'Zardozi',
          origin: 'Mughal Courts',
          description: 'Heavy metal embroidery with gold/silver threads and pearls.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://youtube.com/shorts/rSrNu10DfWI?si=bHS_R9rJEE4zwJxA',
          imageUrl: 'https://shobhini.in/wp-content/uploads/2024/01/IMG_2477.jpg'
        },
        {
          name: 'Kantha',
          origin: 'Bengal',
          description: 'Running stitch embroidery on recycled cloth with folk motifs.',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtube.com/shorts/PH34KQRD0sQ?si=SvUQb_jwfOjuvNKd',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0252/7589/1748/files/Screenshot_2021-03-13_at_1.05.25_PM_480x480.png?v=1615620965'
        },
        {
          name: 'Chikankari',
          origin: 'Lucknow',
          description: 'Delicate white-on-white shadow work embroidery.',
          color: 'from-white-500 to-gray-600',
          videoUrl: 'https://youtube.com/shorts/muZJb-gXY0I?si=Ul8vLJ-ACyxaUJTl',
          imageUrl: 'https://lavangi.com/wp-content/uploads/2022/10/Chikankari-Hand-Embroidered-Pink-Floral-Design.jpg'
        },
        {
          name: 'Phulkari',
          origin: 'Punjab',
          description: 'Vibrant floral embroidery traditionally done on shawls.',
          color: 'from-pink-500 to-rose-600',
          videoUrl: 'https://youtube.com/shorts/F9-6X-VQ92U?si=f0cwHSbkEqO1xE7X',
          imageUrl: 'https://www.forsarees.com/cdn/shop/files/Beige-orange-phulkari-dupatta3.jpg?v=1717172645&width=1946'
        },
        {
          name: 'Kashmiri Shawl',
          origin: 'Kashmir',
          description: 'Exquisite woolen shawls with intricate embroidery.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://youtube.com/shorts/DOyNGWB_D8o?si=wnr48VHhemm2d-TP',
          imageUrl: 'https://www.muteyaar.com/wp-content/uploads/2016/10/products-C0643.jpg'
        },
        {
          name: 'Kota Doria',
          origin: 'Rajasthan',
          description: 'Lightweight cotton fabric with square check patterns.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://youtube.com/shorts/AGUPCeyFO3k?si=wVvWk9euVTqbc6QB',
          imageUrl: 'https://fabricdekho.com/cdn/shop/products/059_c72e22a3-5376-4a87-8842-b241925a45b7.jpg?v=1661358024'
        },
        {
          name: 'Tussar Silk',
          origin: 'Eastern India',
          description: 'Wild silk with rich texture and natural gold color.',
          color: 'from-amber-500 to-orange-600',
          videoUrl: 'https://youtube.com/shorts/6a8Y15ZChBw?si=JETLG6qj6SDi2wIJ',
          imageUrl: 'https://ffab.com/cdn/shop/products/75310-20-302_1024x.jpg?v=1649840838'
        },
        {
          name: 'Kashida Embroidery',
          origin: 'Kashmir',
          description: 'Delicate floral needlework on shawls',
          imageUrl: 'https://i.pinimg.com/564x/bd/42/7d/bd427de4122f4f7c0bf9148afd0959c5.jpg',
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
          videoUrl: 'https://youtu.be/7E9Bggq_8Kw?si=0JXJB4WZ3DYvtgcU',
          imageUrl: 'https://cdn.thedecorjournalindia.com/wp-content/uploads/2022/03/Brihadeshwara-Temple-A-structure-conceived-with-grace-and-Magnificence-2.jpg?strip=all&lossy=1&resize=753%2C463&ssl=1'
        },
        {
          name: 'Nagara Style',
          origin: 'North India',
          description: 'Curvilinear towers (shikharas) like Khajuraho temples.',
          color: 'from-red-400 to-orange-500',
          videoUrl: 'https://youtu.be/khNWzFncYrA?si=S27mydingpzw9jeX',
          imageUrl: 'https://thearchitectsdiary.com/wp-content/uploads/2023/12/Nagara-style-temple-Image-01-1024x768.webp'
        },
        {
          name: 'Vesara Style',
          origin: 'Deccan',
          description: 'Hybrid style blending Dravidian and Nagara elements.',
          color: 'from-purple-400 to-violet-500',
          videoUrl: 'https://youtu.be/BFTPtWJRoqc?si=0phP_1rRdFx57ni2',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Nageshvara_%28near%29_and_Chennakeshava_%28far%29_temples_at_Mosale.JPG'
        },
        {
          name: 'Mughal Architecture',
          origin: 'North India',
          description: 'Char bagh gardens and bulbous domes (Taj Mahal, Red Fort).',
          color: 'from-green-400 to-teal-500',
          videoUrl: 'https://youtu.be/zbzo-fmkzLA?si=32gDTVyLBs8PnEtZ',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Taj_Mahal%2C_Agra%2C_India.jpg'
        },
        {
          name: 'Indo-Islamic',
          origin: 'Delhi Sultanate',
          description: 'Arches, domes and minarets blended with Indian elements.',
          color: 'from-blue-400 to-indigo-500',
          videoUrl: 'https://youtu.be/O-mjmMvVH0c?si=GUEGUe8vF3exVW1Z',
          imageUrl: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2020/12/A2483-The-alloyed-facets-of-Indo-Islamic-Architecture-Image-1.jpg?w=999'
        },
        {
          name: 'Indo-Saracenic',
          origin: 'British India',
          description: 'Blend of Victorian-Gothic with Indian elements.',
          color: 'from-stone-400 to-gray-500',
          videoUrl: 'https://youtu.be/kmni5Sz8tL0?si=NKuePNm3BPcwVXW4',
          imageUrl: 'https://abirpothi.com/wp-content/uploads/2024/04/image-260.png'
        },
        {
          name: 'Portuguese Colonial',
          origin: 'Goa',
          description: 'Whitewashed churches with Baroque elements and local adaptations.',
          color: 'from-white-500 to-gray-600',
          videoUrl: 'https://youtube.com/shorts/hAKEERi7bf0?si=RQ245Yo8u1SO4ZSc',
          imageUrl: 'https://www.hisour.com/wp-content/uploads/2018/04/Portuguese-colonial-architecture.jpg'
        },
        {
          name: 'Rajput Forts',
          origin: 'Rajasthan',
          description: 'Massive hill forts with intricate jharokhas (Mehrangarh).',
          color: 'from-red-500 to-orange-600',
          videoUrl: 'https://youtu.be/eEFTIkq9VUA?si=0vL-EsBNE-Pm1qKs',
          imageUrl: 'https://www.iasgyan.in//ig-uploads/images//HM.jpg'
        },
        {
          name: 'Kerala Architecture',
          origin: 'Kerala',
          description: 'Wooden nalukettu houses with sloping roofs and courtyards.',
          color: 'from-green-500 to-emerald-600',
          videoUrl: 'https://youtu.be/mEZOMwXnE6U?si=ug1E3Eerr7e1mSEj',
          imageUrl: 'https://pratheep.com/wp-content/uploads/2013/03/Vadakkunnathan-Temple.jpg'
        },
        {
          name: 'Stepwells',
          origin: 'Western India',
          description: 'Ornate water storage structures (Rani ki Vav).',
          color: 'from-blue-500 to-indigo-600',
          videoUrl: 'https://youtu.be/fbf3NRcocXE?si=Bc50qFuKIp5M2eey',
          imageUrl: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/12/Iconic-step-wells-of-India-feature-1.jpg?tr=w-1200,q-60'
        },
        {
          name: 'Bamboo Architecture',
          origin: 'Northeast India',
          description: 'Sustainable structures using local bamboo and thatch.',
          color: 'from-lime-500 to-green-600',
          videoUrl: 'https://youtu.be/tKcyrlysQwA?si=AWq526BIErtUoOgJ',
          imageUrl: 'https://www.yankodesign.com/images/design_news/2021/04/bamboo-architecture-ds/14-ulaman_ecoresort_yankodesign.jpeg'
        },
        {
          name: 'Havelis',
          origin: 'North India',
          description: 'Ornate merchant houses with frescoes and jali work.',
          color: 'from-amber-500 to-orange-600',
          videoUrl: 'https://youtu.be/4rdx7gUhVho?si=-P25alS--Y89zJkS',
          imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/151218124055-india-haveli3.jpg?q=w_1900,h_1096,x_0,y_0,c_fill'
        },
        {
          name: 'Chettinad Mansions',
          origin: 'Tamil Nadu',
          description: 'Grand houses with Burmese teak and Italian marble.',
          color: 'from-yellow-500 to-amber-600',
          videoUrl: 'https://youtu.be/UHGbaNCqz64?si=2Z8ZLP5F-tt0iix7',
          imageUrl: 'https://sarathavilas.com/wp-content/uploads/elementor/thumbs/093106_SV2-pkg8a04hf223q45tcfn81ni8wv5qxffmv3g3uqt1dk.jpg'
        },
        {
          name: 'Konkan Houses',
          origin: 'Western Coast',
          description: 'Sloping roofs, verandas and laterite stone construction.',
          color: 'from-red-500 to-pink-600',
          videoUrl: 'https://youtube.com/shorts/vHmXEY2TFvE?si=wdvvjrachBsDq-XQ',
          imageUrl: 'https://imgmediagumlet.lbb.in/media/2021/01/5ffe89f276898d3b2880424d_1610516978003.png'
        },
        {
          name: 'Monolithic Temples',
          origin: 'Various',
          description: 'Rock-cut temples like Ellora and Mahabalipuram.',
          color: 'from-purple-500 to-violet-600',
          videoUrl: 'https://youtu.be/_WypT8RPUxg?si=urrQUjDDmsA9K2NZ',
          imageUrl: 'https://assets.telegraphindia.com/telegraph/2022/Aug/1661766229_3.jpg'
        },
        {
          name: 'Stupas',
          origin: 'Buddhist Tradition',
          description: 'Dome-shaped monuments containing relics (Sanchi Stupa).',
          color: 'from-stone-500 to-gray-600',
          videoUrl: 'https://youtu.be/gPDPiEq416w?si=U87Ia8PrPfOzqt43',
          imageUrl: 'https://www.worldhistory.org/img/r/p/500x600/3881.jpg?v=1651466765'
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