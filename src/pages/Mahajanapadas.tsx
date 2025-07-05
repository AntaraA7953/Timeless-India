import React, { useState } from 'react';

const Mahajanapadas: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEra, setSelectedEra] = useState<any>(null);

  const ancientEras = [
    {
      title: "Vedic Age Foundations",
      period: "1500-600 BCE",
      description: "The Vedic period laid the cultural and political foundations for later Indian civilization. As Indo-Aryan tribes migrated across northern India, they established tribal kingdoms and developed the Vedic religious traditions. The later Vedic period saw the emergence of early states and the beginnings of urbanization along the Ganges plain.",
      shortDesc: "The foundation of Indian civilization with tribal kingdoms and Vedic traditions evolving into early states.",
      events: [
        "1500 BCE: Indo-Aryan migrations into northwest India",
        "1200 BCE: Composition of the Rigveda begins",
        "1000 BCE: Iron technology spreads in northern India",
        "900 BCE: Development of early Janapadas (territorial kingdoms)",
        "800 BCE: Later Vedic texts composed (Brahmanas, Aranyakas)",
        "600 BCE: Emergence of 16 major Mahajanapadas"
      ],
      color: "#8B7355",
      secondaryColor: "#6B5B45",
      textColor: "#4a3a1a",
      accentColor: "#A67C52",
      symbol: "📜",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(235,225,205,0.9) 0%, rgba(210,195,160,0.9) 100%)",
        bookSide: "linear-gradient(to right, #6B5B45, #8B7355)",
        spine: "linear-gradient(to bottom, #5D4A2A, #7B6845)",
        titleColor: "#4a3a1a",
        periodColor: "#5E2C04",
        contentColor: "#5e4a21",
        borderColor: "rgba(166, 124, 82, 0.3)",
        modalBorder: "#8B7355",
        modalHeader: "#6B5B45",
        modalAccent: "#A67C52",
        modalEventBullet: "#8B4513"
      }
    },
    {
      title: "The Sixteen Mahajanapadas",
      period: "600-300 BCE",
      description: "This period saw the flourishing of sixteen major kingdoms and republics across northern India, marking the transition to full statehood. Powerful states like Magadha, Kosala, and Vatsa competed for dominance through warfare and diplomacy. Urban centers grew rapidly, trade expanded, and new religious movements like Buddhism and Jainism emerged challenging Vedic orthodoxy.",
      shortDesc: "Sixteen powerful kingdoms and republics competed for dominance as urban centers flourished.",
      events: [
        "600 BCE: Emergence of the 16 Mahajanapadas",
        "563 BCE: Birth of Siddhartha Gautama (Buddha)",
        "540 BCE: Birth of Mahavira (Jainism founder)",
        "500 BCE: Magadha begins its rise to dominance",
        "400 BCE: Nanda dynasty establishes first large empire",
        "327 BCE: Alexander's invasion reaches northwest India"
      ],
      color: "#8B4513",
      secondaryColor: "#6B3513",
      textColor: "#4a2c0e",
      accentColor: "#CD853F",
      symbol: "🏛️",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(240,220,190,0.9) 0%, rgba(210,180,140,0.9) 100%)",
        bookSide: "linear-gradient(to right, #6B3513, #8B4513)",
        spine: "linear-gradient(to bottom, #5D2A0A, #7B3A1A)",
        titleColor: "#5E2C04",
        periodColor: "#8B4513",
        contentColor: "#5e3a21",
        borderColor: "rgba(205, 133, 63, 0.3)",
        modalBorder: "#8B4513",
        modalHeader: "#6B3513",
        modalAccent: "#CD853F",
        modalEventBullet: "#8B4513"
      }
    },
    {
      title: "Magadha Ascendancy",
      period: "543-321 BCE",
      description: "The kingdom of Magadha emerged as the dominant power in northern India through strategic conquests and administrative innovations. Under the Haryanka and Shishunaga dynasties, Magadha established the first Indian empire. The later Nanda dynasty created a vast centralized state with powerful armies and efficient taxation systems that would pave the way for the Mauryas.",
      shortDesc: "Magadha rose to become the first great Indian empire through military and administrative innovations.",
      events: [
        "543 BCE: Haryanka dynasty founded by Bimbisara",
        "492 BCE: Ajatashatru expands Magadha's power",
        "413 BCE: Shishunaga dynasty takes over Magadha",
        "364 BCE: Nanda dynasty establishes centralized rule",
        "350 BCE: Magadha controls entire Ganges plain",
        "321 BCE: Nandas overthrown by Chandragupta Maurya"
      ],
      color: "#5E2C04",
      secondaryColor: "#4A1C00",
      textColor: "#3a1c0e",
      accentColor: "#8B4513",
      symbol: "⚔️",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(230,210,180,0.9) 0%, rgba(190,160,130,0.9) 100%)",
        bookSide: "linear-gradient(to right, #4A1C00, #5E2C04)",
        spine: "linear-gradient(to bottom, #3A1C00, #5A2C04)",
        titleColor: "#5E2C04",
        periodColor: "#8B4513",
        contentColor: "#5e3a21",
        borderColor: "rgba(139, 69, 19, 0.3)",
        modalBorder: "#5E2C04",
        modalHeader: "#4A1C00",
        modalAccent: "#8B4513",
        modalEventBullet: "#5E2C04"
      }
    },
    {
      title: "Mauryan Empire",
      period: "322-185 BCE",
      description: "The Mauryan Empire became India's first pan-Indian empire under Chandragupta, Bindusara, and Ashoka. Ashoka's conversion to Buddhism after the Kalinga war transformed the empire into a vehicle for spreading Buddhist ideals across Asia. The Mauryas developed sophisticated administrative systems and built infrastructure that unified much of the subcontinent.",
      shortDesc: "India's first pan-Indian empire that spread Buddhist ideals through sophisticated administration.",
      events: [
        "322 BCE: Chandragupta Maurya founds the empire",
        "305 BCE: Seleucid-Mauryan war ends in treaty",
        "268 BCE: Ashoka ascends the throne",
        "260 BCE: Kalinga war and Ashoka's conversion",
        "250 BCE: Buddhist missions sent across Asia",
        "185 BCE: Last Mauryan ruler assassinated"
      ],
      color: "#556B2F",
      secondaryColor: "#3D4A21",
      textColor: "#2a3a0e",
      accentColor: "#6B8E23",
      symbol: "🦚",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(220,230,190,0.9) 0%, rgba(190,210,160,0.9) 100%)",
        bookSide: "linear-gradient(to right, #3D4A21, #556B2F)",
        spine: "linear-gradient(to bottom, #2D3A11, #4D5B2F)",
        titleColor: "#3a4a1a",
        periodColor: "#556B2F",
        contentColor: "#4a5a21",
        borderColor: "rgba(107, 142, 35, 0.3)",
        modalBorder: "#556B2F",
        modalHeader: "#3D4A21",
        modalAccent: "#6B8E23",
        modalEventBullet: "#556B2F"
      }
    },
    {
      title: "Post-Mauryan Kingdoms",
      period: "200 BCE-300 CE",
      description: "After the Mauryan collapse, regional kingdoms like the Shungas, Satavahanas, and Kushans dominated different parts of India. This period saw flourishing trade along the Silk Road, the development of classical Sanskrit literature, and the emergence of Hindu temple architecture. The northwest became a cultural crossroads under Indo-Greek and Kushan rule.",
      shortDesc: "Regional kingdoms flourished as India became a hub of international trade and cultural exchange.",
      events: [
        "185 BCE: Shunga dynasty takes power in Magadha",
        "150 BCE: Indo-Greek kingdoms in northwest",
        "100 BCE: Satavahanas dominate Deccan",
        "78 CE: Kushan Empire begins under Kujula Kadphises",
        "150 CE: Gandhara art flourishes under Kushans",
        "240 CE: Satavahana dynasty declines"
      ],
      color: "#9370DB",
      secondaryColor: "#7B58C3",
      textColor: "#4a3a6e",
      accentColor: "#BA55D3",
      symbol: "🏺",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(240,230,250,0.9) 0%, rgba(220,210,240,0.9) 100%)",
        bookSide: "linear-gradient(to right, #7B58C3, #9370DB)",
        spine: "linear-gradient(to bottom, #5B38A3, #7B50CB)",
        titleColor: "#5a4a8e",
        periodColor: "#9370DB",
        contentColor: "#6a5a9e",
        borderColor: "rgba(186, 85, 211, 0.3)",
        modalBorder: "#9370DB",
        modalHeader: "#7B58C3",
        modalAccent: "#BA55D3",
        modalEventBullet: "#9370DB"
      }
    }
  ];

  const hexToRgb = (hex: string) => {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };

  const openModal = (era: any) => {
    setSelectedEra(era);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEra(null);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap');
        
        :root {
          --ochre: #CC7722;
          --indigo: #4B0082;
          --terracotta: #E2725B;
          --gold: #D4AF37;
          --text-color: #333333;
          --light-bg: #F5F5DC;
          --primary-color: var(--ochre);
          --secondary-color: var(--indigo);
          --accent-color: var(--gold);
          --section-heading: var(--indigo);
          --sub-heading: var(--terracotta);
        }

        .mahajanapadas-component {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: var(--light-bg);
          color: var(--text-color);
          line-height: 1.7;
        }

        .mahajanapadas-component * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .header {
          background: linear-gradient(135deg, var(--ochre), var(--light-bg), var(--indigo));
          color: var(--indigo);
          padding: 4rem 0;
          text-align: center;
          border-radius: 0 0 20px 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://cdn.sanity.io/images/nlpqts3z/production/ea7daa9113c38f01376166a8ee6a648a3d9255c5-1024x578.jpg') center/cover;
          opacity: 0.4;
          z-index: 0;
        }

        .header .container {
          position: relative;
          z-index: 1;
        }

        .header h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          color: var(--indigo);
          text-shadow: 2px 2px 4px rgba(255,255,255,0.5);
        }

        .header p {
          font-size: 1.4rem;
          max-width: 800px;
          margin: 0 auto 1.5rem;
          color: var(--indigo);
          font-weight: 500;
        }

        .nav-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 3rem;
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .nav-tab {
          padding: 1rem 2rem;
          background: var(--light-bg);
          color: var(--indigo);
          border: 2px solid var(--indigo);
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }

        .nav-tab:hover, .nav-tab.active {
          background: var(--indigo);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(75,0,130,0.2);
        }

        .content-section {
          display: none;
          background-color: white;
          border-radius: 15px;
          padding: 3rem;
          margin-bottom: 3rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          animation: fadeIn 0.7s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .content-section.active {
          display: block;
        }

        .content-section h2 {
          color: var(--section-heading);
          margin-bottom: 2rem;
          font-size: 2.5rem;
          border-bottom: 3px solid var(--ochre);
          padding-bottom: 0.8rem;
          font-weight: 700;
        }

        .content-section h3 {
          color: var(--sub-heading);
          margin: 2.5rem 0 1.5rem;
          font-size: 1.8rem;
          font-weight: 600;
          position: relative;
          padding-left: 2rem;
        }

        .content-section h3::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.7em;
          height: 0.4em;
          width: 0.4em;
          background: var(--ochre);
          border-radius: 50%;
        }

        .content-section p {
          margin-bottom: 1.8rem;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .content-section ul, .content-section ol {
          margin-left: 2rem;
          margin-bottom: 2.5rem;
        }

        .content-section li {
          margin-bottom: 1.2rem;
          font-size: 1.1rem;
          position: relative;
          padding-left: 1.8rem;
        }

        .content-section li::before {
          content: "•";
          color: var(--ochre);
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.4rem;
        }

        .content-section ol li::before {
          content: none;
        }

        .image-container {
          margin: 3rem 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .image-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          background: white;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .image-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(204, 119, 34, 0.2);
        }

        .image-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        .image-card p {
          padding: 1.5rem;
          background: white;
          font-size: 1rem;
          text-align: center;
          color: var(--indigo);
          border-top: 1px solid rgba(0,0,0,0.05);
          margin: 0;
          font-weight: 500;
        }

        .full-width-image {
          width: 100%;
          max-height: 500px;
          object-fit: cover;
          border-radius: 12px;
          margin: 3rem 0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          margin: 3rem 0;
        }

        .two-column img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .two-column div {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          text-align: center;
          border-top: 4px solid var(--ochre);
        }

        .stat-card h4 {
          color: var(--indigo);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .stat-card .number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--terracotta);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-card .unit {
          color: var(--indigo);
          font-size: 1rem;
        }
        footer {
            background: linear-gradient(135deg, var(--indigo), var(--ochre));
            color: white;
            text-align: center;
            padding: 4rem 0;
            margin-top: 3rem;
            border-radius: 20px 20px 0 0;
            position: relative;
            overflow: hidden;
        }

        footer::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Chandragupta_Maurya_Empire.gif/1200px-Chandragupta_Maurya_Empire.gif') center/cover;
            opacity: 0.1;
            z-index: 0;
        }

        footer .container {
            position: relative;
            z-index: 1;
        }

        footer p {
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 2rem 0;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            font-size: 1.1rem;
            padding: 0.5rem 1rem;
            border-radius: 30px;
            background-color: rgba(255,255,255,0.15);
        }

        .footer-links a:hover {
            background-color: rgba(255,255,255,0.3);
            transform: translateY(-2px);
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 1.5rem;
        }

        .social-links a {
            color: white;
            font-size: 1.5rem;
            transition: transform 0.3s ease;
        }

        .social-links a:hover {
            transform: translateY(-3px);
        }


        .bookshelf {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 900px;
          margin: 0 auto;
          gap: 20px;
          padding: 30px 0;
        }

        .book {
          width: 120px;
          height: 170px;
          position: relative;
          perspective: 1000px;
          cursor: pointer;
          transition: all 0.4s ease;
          filter: drop-shadow(2px 4px 4px rgba(0,0,0,0.2));
        }

        .book:hover {
          transform: translateY(-10px) rotate(2deg);
          filter: drop-shadow(3px 5px 6px rgba(0,0,0,0.3));
        }

        .book-cover {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateY(0deg);
          transition: transform 0.5s ease;
        }

        .book:hover .book-cover {
          transform: rotateY(-25deg);
        }

        .book-front, .book-side, .book-pages {
          position: absolute;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 2px 6px 6px 2px;
          box-shadow: inset 0 0 15px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.1);
        }

        .book-front {
          width: calc(100% - 8px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          padding: 15px 12px;
          transform: translateZ(10px);
          font-weight: bold;
          background-blend-mode: overlay;
          left: 0;
          overflow: hidden;
        }

        .book-side {
          width: 18px;
          transform: rotateY(90deg) translateX(calc(100% - 8px));
          right: 0;
        }

        .book-pages {
          width: 6px;
          background: repeating-linear-gradient(
            to right,
            #f5f5f5,
            #f5f5f5 1px,
            #e0e0e0 1px,
            #e0e0e0 2px
          );
          right: 8px;
          transform: translateZ(-4px);
          border-radius: 2px 0 0 2px;
        }

        .book-spine {
          position: absolute;
          left: 0;
          top: 0;
          width: 15px;
          height: 100%;
          transform: translateZ(-5px);
          border-radius: 2px 0 0 2px;
          color: #e8d9b5;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          letter-spacing: 1px;
          text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
          box-shadow: inset -2px 0 4px rgba(0,0,0,0.2);
        }

        .book-title {
          font-size: 14px;
          margin-bottom: 4px;
          font-weight: 700;
          line-height: 1.2;
          position: relative;
          padding-bottom: 5px;
          z-index: 2;
        }

        .book-period {
          font-size: 11px;
          font-weight: normal;
          font-style: italic;
          margin-bottom: 8px;
          z-index: 2;
        }

        .book-content {
          font-size: 9px;
          line-height: 1.4;
          margin: 8px 0;
          text-align: center;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          line-clamp: 5;
          -webkit-box-orient: vertical;
          position: relative;
          padding: 0 5px;
          z-index: 2;
        }

        .book-footer {
          font-size: 8px;
          font-style: italic;
          margin-top: auto;
          z-index: 2;
        }

        .book-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          background-size: contain;
          background-repeat: no-repeat;
          opacity: 0.8;
          z-index: 1;
        }

        .corner-tl { top: 0; left: 0; transform: rotate(0deg); }
        .corner-tr { top: 0; right: 0; transform: rotate(90deg); }
        .corner-bl { bottom: 0; left: 0; transform: rotate(270deg); }
        .corner-br { bottom: 0; right: 0; transform: rotate(180deg); }

        .book-border {
          position: absolute;
          border-radius: 2px;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          pointer-events: none;
          z-index: 1;
          border: 1px solid rgba(0,0,0,0.1);
        }

        .book-seal {
          position: absolute;
          width: 30px;
          height: 30px;
          background-size: contain;
          background-repeat: no-repeat;
          opacity: 0.6;
          bottom: 20px;
          right: 20px;
          z-index: 1;
        }

        .modal {
          display: ${modalOpen ? 'flex' : 'none'};
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
          z-index: 100;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(3px);
        }

        .modal-content {
          background: #f9f5e9;
          padding: 40px;
          border-radius: 8px;
          max-width: 700px;
          width: 85%;
          position: relative;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          background-image: 
            linear-gradient(to bottom, rgba(249, 245, 233, 0.9), rgba(240, 230, 204, 0.9)),
            url('https://i.imgur.com/YQzGkfL.png');
          background-size: 300px;
          background-repeat: no-repeat;
          background-position: right bottom;
          background-blend-mode: overlay;
          overflow: hidden;
          animation: fadeIn 0.4s ease-out;
        }

        .modal-header {
          position: relative;
          padding-bottom: 15px;
          margin-bottom: 25px;
        }

        .modal-title {
          font-family: 'Times New Roman', serif;
          font-size: 2.2rem;
          margin: 0 0 8px 0;
          letter-spacing: 1px;
          position: relative;
          display: inline-block;
        }

        .modal-period {
          font-style: italic;
          font-size: 1.2rem;
          margin: 0;
          font-weight: 500;
        }

        .modal-description {
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 30px;
          padding: 20px;
          border-left: 4px solid;
          position: relative;
          border-radius: 0 5px 5px 0;
        }

        .modal-description:before {
          content: """;
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 70px;
          font-family: Georgia, serif;
          line-height: 1;
          opacity: 0.2;
        }

        .modal-events {
          background: rgba(255,255,255,0.7);
          padding: 25px;
          border-radius: 5px;
          position: relative;
          margin-top: 20px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
        }

        .modal-events h3 {
          font-family: 'Times New Roman', serif;
          font-size: 1.4rem;
          margin: 5px 0 20px 0;
          padding-bottom: 8px;
          border-bottom: 1px dashed;
          display: inline-block;
        }

        .modal-events ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          column-count: 2;
          column-gap: 30px;
        }

        .modal-events li {
          padding: 10px 0;
          position: relative;
          padding-left: 30px;
          font-size: 1rem;
          break-inside: avoid;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .modal-events li:hover {
          transform: translateX(5px);
        }

        .modal-events li:before {
          content: "❖";
          font-size: 16px;
          position: absolute;
          left: 5px;
          top: 10px;
        }

        .close {
          position: absolute;
          top: 15px;
          right: 25px;
          font-size: 28px;
          cursor: pointer;
          transition: all 0.3s;
          background: rgba(255,255,255,0.7);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .close:hover {
          transform: rotate(90deg);
        }

        .era-symbol {
          font-size: 24px;
          margin-bottom: 15px;
          display: inline-block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          text-align: center;
          background: rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2.5rem;
          }
          
          .header p {
            font-size: 1.2rem;
          }
          
          .nav-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .nav-tab {
            width: 100%;
            text-align: center;
          }
          
          .content-section {
            padding: 2rem;
          }
          
          .two-column {
            grid-template-columns: 1fr;
          }
          
          .image-container, .stats-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="mahajanapadas-component">
        <header className="header">
          <div className="container">
            <h1>Mahajanapadas & Early Kingdoms</h1>
            <p>The emergence of India's first major states (600 BCE - 300 BCE)</p>
            <p>From tribal republics to powerful monarchies that shaped ancient India</p>
          </div>
        </header>

        <div className="container">
          <div className="nav-tabs">
            <button 
              className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`nav-tab ${activeTab === 'mahajanapadas' ? 'active' : ''}`}
              onClick={() => setActiveTab('mahajanapadas')}
            >
              16 Mahajanapadas
            </button>
            <button 
              className={`nav-tab ${activeTab === 'magadha' ? 'active' : ''}`}
              onClick={() => setActiveTab('magadha')}
            >
              Rise of Magadha
            </button>
            <button 
              className={`nav-tab ${activeTab === 'republics' ? 'active' : ''}`}
              onClick={() => setActiveTab('republics')}
            >
              Republics
            </button>
            <button 
              className={`nav-tab ${activeTab === 'society' ? 'active' : ''}`}
              onClick={() => setActiveTab('society')}
            >
              Society & Economy
            </button>
            <button 
              className={`nav-tab ${activeTab === 'legacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('legacy')}
            >
              Legacy
            </button>
          </div>

          {/* Overview Section */}
          <section className={`content-section ${activeTab === 'overview' ? 'active' : ''}`}>
            <h2>The Age of Mahajanapadas</h2>
            <img 
              src="https://img.latestgkgs.com/2019/08/16/ancient-history-1565966183.jpg" 
              alt="Map of Mahajanapadas" 
              className="full-width-image"
            />
            
            <p>The Mahajanapadas (600-300 BCE) were the sixteen great kingdoms and republics that emerged in ancient India during the second urbanization period, marking the transition from tribal societies to organized states.</p>
            
            <div className="two-column">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/28/Mahajanapadas_%28c._500_BCE%29.png" 
                alt="Mahajanapadas Map"
              />
              <div>
                <h3>Key Characteristics</h3>
                <ul>
                  <li>Emergence of urban centers and trade routes</li>
                  <li>Development of administrative systems</li>
                  <li>Use of iron technology and coinage</li>
                  <li>Rise of Buddhism and Jainism</li>
                  <li>Conflict between monarchies and republics</li>
                  <li>Foundation for Mauryan Empire</li>
                </ul>
              </div>
            </div>
            
            <h3>Historical Context</h3>
            <div className="stats-container">
              <div className="stat-card">
                <div className="number">600-300</div>
                <div className="unit">BCE</div>
                <h4>Time Period</h4>
              </div>
              <div className="stat-card">
                <div className="number">16</div>
                <div className="unit">major states</div>
                <h4>Mahajanapadas</h4>
              </div>
              <div className="stat-card">
                <div className="number">2</div>
                <div className="unit">types</div>
                <h4>Monarchies & Republics</h4>
              </div>
              <div className="stat-card">
                <div className="number">6</div>
                <div className="unit">cities</div>
                <h4>Great Ancient Cities</h4>
              </div>
            </div>
          <h3 style={{ textAlign: 'center', fontSize: '2.2rem', color: '#5d4a6e', fontFamily: 'Times New Roman, serif', marginBottom: '20px' }}>
            Mahajanapadas & Early Kingdoms of Ancient India
          </h3>
            <div className="bookshelf">
              {ancientEras.map((era, index) => (
                <div 
                  key={index}
                  className="book" 
                  style={{transform: `rotate(${Math.random() * 6 - 3}deg)`}}
                  onClick={() => openModal(era)}
                >
                  <div className="book-cover">
                    <div 
                      className="book-front" 
                      style={{
                        background: era.theme.bookBg,
                        color: era.textColor,
                      }}
                    >
                      <div className="book-corner corner-tl"></div>
                      <div className="book-corner corner-tr"></div>
                      <div className="book-corner corner-bl"></div>
                      <div className="book-corner corner-br"></div>
                      <div className="book-border" style={{borderColor: era.theme.borderColor}}></div>
                      <div className="book-seal"></div>
                      
                      <div className="book-title" style={{color: era.theme.titleColor}}>{era.title}</div>
                      <div className="book-period" style={{color: era.theme.periodColor}}>{era.period}</div>
                      <div className="book-content" style={{color: era.textColor}}>
                        <div style={{fontSize:'16px', marginBottom:'5px'}}>{era.symbol}</div>
                        {era.shortDesc}
                      </div>
                      <div className="book-footer" style={{color: era.theme.periodColor}}>Click to explore</div>
                    </div>
                    <div className="book-pages"></div>
                    <div className="book-side" style={{background: era.theme.bookSide}}></div>
                    <div className="book-spine" style={{background: era.theme.spine}}>
                      {era.title.split(' ')[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3>Historical Sources</h3>
            <div className="image-container">
              <div className="image-card">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/Illustrated_Sinhalese_covers_%28inside%29_showing_the_events_Wellcome_L0031774.jpg" 
                  alt="Buddhist Texts"
                />
                <p>Buddhist texts like Anguttara Nikaya</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1200/1*HP7TqUqaQDIhem_p2rCxmQ.jpeg" 
                  alt="Arthashastra"
                />
                <p>Kautilya's Arthashastra</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Page_of_Text%2C_Folio_from_a_Bhagavata_Purana_%28Ancient_Stories_of_the_Lord%29_LACMA_M.82.62.1_%281_of_2%29.jpg" 
                  alt="Puranas"
                />
                <p>Puranic literature</p>
              </div>
            </div>
          </section>

          {/* 16 Mahajanapadas Section */}
          <section className={`content-section ${activeTab === 'mahajanapadas' ? 'active' : ''}`}>
            <h2>The Sixteen Great Realms</h2>
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgF3Oo2P9O_FRrtLFYRmVI5-TJOGj4D4UUqlWJ0aP1tvEhdGKP7KYHJ4Q6rBGYjhqzUWIXiME27Yj8ZWZa5OsbRplfrer6R1JrfAd5-Z1L57gds6XtLgsl0mCyYrxocVpkuhqHdqv8_83cZ/s1600/Mahajanapadas.jpg" 
              alt="16 Mahajanapadas Map" 
              className="full-width-image"
            />
            
            <p>The Buddhist text Anguttara Nikaya lists sixteen great states (Mahajanapadas) that existed in ancient India prior to the rise of Buddhism.</p>
            
            <div className="two-column">
              <div>
                <h3>The 16 Mahajanapadas</h3>
                <ol>
                  <li>Magadha - Most powerful, modern Bihar</li>
                  <li>Kosala - Northern India, Ayodhya capital</li>
                  <li>Vatsa - Central India, Kaushambi capital</li>
                  <li>Avanti - Western India, Ujjain capital</li>
                  <li>Gandhara - Northwest, Taxila capital</li>
                  <li>Kamboja - Northwest frontier</li>
                  <li>Kuru - Delhi region, ancient Vedic center</li>
                  <li>Panchala - Western UP, two divisions</li>
                  <li>Matsya - Rajasthan, Viratanagar capital</li>
                  <li>Chedi - Bundelkhand region</li>
                  <li>Surasena - Mathura region</li>
                  <li>Assaka - Southern Deccan</li>
                  <li>Anga - Eastern Bihar, Bengal</li>
                  <li>Vrijji - Republican confederation</li>
                  <li>Malla - Republican state, two capitals</li>
                  <li>Machcha - Central Indian kingdom</li>
                </ol>
              </div>
              <img 
                src="https://i.pinimg.com/736x/ac/8f/44/ac8f447c2f3419aa04a793ce2ec2e655.jpg" 
                alt="Mahajanapadas Map"
              />
            </div>
            
            <h3>Major Cities</h3>
            <ul>
              <li><strong>Rajagriha:</strong> Capital of Magadha</li>
              <li><strong>Champa:</strong> Capital of Anga</li>
              <li><strong>Kaushambi:</strong> Capital of Vatsa</li>
              <li><strong>Shravasti:</strong> Capital of Kosala</li>
              <li><strong>Ujjain:</strong> Capital of Avanti</li>
              <li><strong>Taxila:</strong> Capital of Gandhara</li>
            </ul>
            
            <h3>Political Systems</h3>
            <div className="image-container">
              <div className="image-card">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Silver_coins_from_different_sultanates_and_princely_states_of_India%2C_photographed_from_a_personal_collection_in_West_Bengal%2C_India%2C_May_7%2C_2024.jpg/250px-Silver_coins_from_different_sultanates_and_princely_states_of_India%2C_photographed_from_a_personal_collection_in_West_Bengal%2C_India%2C_May_7%2C_2024.jpg" 
                  alt="Ancient Coins"
                />
                <p>Early coinage systems</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://sothebys-md.brightspotcdn.com/dims4/default/2978ce3/2147483647/strip/true/crop/1498x2000+0+0/resize/1024x1367!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F12%2F67%2F885177164b638ba0c138d9e3181c%2F053n10749-b7xk8-1.jpg" 
                  alt="Gandhara Art"
                />
                <p>Gandhara Buddhist art</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ellora_Cave_16_si0308.jpg/330px-Ellora_Cave_16_si0308.jpg" 
                  alt="Ancient Architecture"
                />
                <p>Ancient architectural remains</p>
              </div>
            </div>
          </section>

          {/* Rise of Magadha Section */}
          <section className={`content-section ${activeTab === 'magadha' ? 'active' : ''}`}>
            <h2>The Rise of Magadha</h2>
            <img 
              src="https://cdn-images.prepp.in/public/image/102c5a5abfebf6968598cdc49abe770d.png?tr=w-400,h-337,c-force" 
              alt="Magadha Empire" 
              className="full-width-image"
            />
            
            <p>Magadha emerged as the most powerful Mahajanapada, laying the foundation for India's first empire under the Mauryas.</p>
            
            <div className="two-column">
              <img 
                src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/06/a3be23e41d0daa6591db01182322ede8_1000x1000.jpg" 
                alt="Rajgir Fort"
              />
              <div>
                <h3>Advantages of Magadha</h3>
                <ul>
                  <li>Strategic location in fertile Ganges plain</li>
                  <li>Rich iron ore deposits for weapons</li>
                  <li>River transport for trade and military</li>
                  <li>Strong fortified capitals (Rajagriha, Pataliputra)</li>
                  <li>Efficient administrative system</li>
                  <li>Professional standing army</li>
                </ul>
              </div>
            </div>
            
            <h3>Key Rulers</h3>
            <div className="image-container">
              <div className="image-card">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTJOEpyAIwmDPwcOL9rxjuL15ZV3h0CwvYg&s" 
                  alt="Bimbisara"
                />
                <p>Bimbisara (544-492 BCE) - Founded Haryanka dynasty</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://cdn-images.prepp.in/public/image/5a22e96133495f7187c92bdbbee862e7.jpeg?tr=w-383,h-331,c-force" 
                  alt="Ajatashatru"
                />
                <p>Ajatashatru (492-460 BCE) - Expanded Magadhan power</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://dsqe6ephsjxi.cloudfront.net/cms/kingdoms_2023-1-16-10:7:17_img.jpg" 
                  alt="Nanda Dynasty"
                />
                <p>Nanda Dynasty (345-321 BCE) - First pan-Indian empire</p>
              </div>
            </div>
          </section>

          {/* Republics Section */}
          <section className={`content-section ${activeTab === 'republics' ? 'active' : ''}`}>
            <h2>Republican States</h2>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Amshuverma_of_Nepal.jpg/960px-Amshuverma_of_Nepal.jpg" 
              alt="Licchavi Coin" 
              className="full-width-image"
            />
            
            <p>Alongside monarchies, several republican states (ganasanghas) flourished during this period, particularly in the Himalayan foothills.</p>
            
            <div className="two-column">
              <div>
                <h3>Characteristics of Republics</h3>
                <ul>
                  <li>Collective leadership by assemblies</li>
                  <li>Democratic decision-making processes</li>
                  <li>Tribal confederations and alliances</li>
                  <li>Strong local governance traditions</li>
                  <li>Resistance to monarchical expansion</li>
                  <li>Cultural and religious autonomy</li>
                </ul>
              </div>
              <img 
                src="https://www.studento.co.in/ancient-indian-history/aih-images/coins-issued-by-mahajanpadas.jpeg" 
                alt="Republican Coins"
              />
            </div>
            
            <h3>Major Republics</h3>
            <div className="image-container">
              <div className="image-card">
                <img 
                  src="https://www.themysteriousindia.net/wp-content/uploads/Ruins-of-Vaishali-1.jpg" 
                  alt="Vaishali"
                />
                <p>Vrijji Confederacy - World's first republic at Vaishali</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/de/Gana_Sanghas_%28c._500_BCE%29.jpg" 
                  alt="Malla Republic"
                />
                <p>Malla Republic - Twin capitals at Kushinagar and Pava</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://www.worldhistory.org/uploads/images/2187.jpg" 
                  alt="Shakya Republic"
                />
                <p>Shakya Republic - Buddha's birthplace at Kapilavastu</p>
              </div>
            </div>
          </section>

          {/* Society & Economy Section */}
          <section className={`content-section ${activeTab === 'society' ? 'active' : ''}`}>
            <h2>Society & Economy</h2>
            <img 
              src="https://lh4.googleusercontent.com/proxy/dytTCGSG0pQ3VH8i0EH3sHLhF38cxc6n7Bxg4Hr6j1MmC6b6E7tvQnDRsLi40USupA5TZPnz5c4wOiJLinT8kQ-NESc0IHJ1PNoZ9UurMvAAVmu5H1BrbL5am9eb_6WwBJ143DrLDMlOyFXafNSQHzKeGm0JQcp4vA" 
              alt="Trade Routes" 
              className="full-width-image"
            />
            
            <p>The Mahajanapada period witnessed significant social and economic transformations with the rise of urban centers, trade networks, and new religious movements.</p>
            
            <div className="two-column">
              <div>
                <h3>Social Structure</h3>
                <ul>
                  <li>Crystallization of varna system</li>
                  <li>Rise of merchant className (vaishyas)</li>
                  <li>Professional guilds and corporations</li>
                  <li>Urban vs rural social dynamics</li>
                  <li>Emergence of new religious sects</li>
                  <li>Women's roles in society and religion</li>
                </ul>
              </div>
              <img 
                src="https://99notes.in/wp-content/uploads/2022/10/Mahajanapadas.jpg" 
                alt="Ancient Economy"
              />
            </div>
            
            <h3>Economic Developments</h3>
            <div className="image-container">
              <div className="image-card">
                <img 
                  src="https://s3-ap-southeast-1.amazonaws.com/mint-news/silver-punch-marked-coin-of-ashmaka-janapada.jpg" 
                  alt="Punch Marked Coins"
                />
                <p>Introduction of punch-marked silver coins</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://selfstudyhistory.com/wp-content/uploads/2015/03/1e4b9-northern2bblack2bpolished2bware.jpg" 
                  alt="Iron Tools"
                />
                <p>Advanced iron technology and tools</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://selfstudyhistory.com/wp-content/uploads/2020/07/trade-routes.jpg" 
                  alt="Trade Goods"
                />
                <p>Extensive trade in luxury goods</p>
              </div>
            </div>
          </section>

          {/* Legacy Section */}
          <section className={`content-section ${activeTab === 'legacy' ? 'active' : ''}`}>
            <h2>Legacy</h2>
            <img 
              src="https://www.worldhistory.org/img/c/p/1200x627/15895.png" 
              alt="Mauryan Empire" 
              className="full-width-image"
            />
            
            <p>The Mahajanapadas laid the foundation for subsequent Indian empires and established patterns of governance, culture, and society that would endure for centuries.</p>
            
            <div className="two-column">
              <div>
                <h3>Political Legacy</h3>
                <ul>
                  <li>Foundation for Mauryan Empire</li>
                  <li>Administrative systems and bureaucracy</li>
                  <li>Concepts of sovereignty and taxation</li>
                  <li>Military organization and strategy</li>
                  <li>Diplomatic relations between states</li>
                  <li>Legal and judicial frameworks</li>
                </ul>
              </div>
              <img 
                src="https://animedevta.com/cdn/shop/articles/4019153174_7921af15b5_b.jpg?v=1689582095&width=2048" 
                alt="Ashoka Chakra"
              />
            </div>
            
            <h3>Cultural and Religious Impact</h3>
            <div className="image-container">
              <div className="image-card">
                <img 
                  src="https://cdn1.knowledgeboat.com/img/thc9/buddha-mahavira-total-history-civics-solutions-class-9-icse-913x739.jpg" 
                  alt="Buddhism"
                />
                <p>Rise of Buddhism and Jainism</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://www.indianetzone.com/public/admin/uploadImage/1_Panini_Sanskrit_Literature.jpg" 
                  alt="Sanskrit Literature"
                />
                <p>Development of Sanskrit literature</p>
              </div>
              <div className="image-card">
                <img 
                  src="https://cdn.britannica.com/96/153496-004-F0FD91AA.jpg" 
                  alt="Art and Architecture"
                />
                <p>Early Indian art and architecture</p>
              </div>
            </div>
          </section>
        </div>
            <footer>
        <div className="container">
            <h3>India's Ancient Foundations</h3>
            <p>The Mahajanapada period represents the crucial transition from tribal societies to organized states, setting the stage for India's classical civilizations.</p>
            <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">Timeline</a>
                <a href="#">Civilizations</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className="social-links">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <p>&copy; 2023 Timeless India. Celebrating India's civilizational journey.</p>
        </div>
    </footer>


        {/* Modal */}
        {modalOpen && selectedEra && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span 
                className="close" 
                style={{
                  color: selectedEra.theme.modalHeader,
                  borderColor: selectedEra.theme.modalBorder,
                }}
                onClick={closeModal}
              >
                &times;
              </span>
              <div 
                className="modal-header" 
                style={{
                  borderBottomColor: selectedEra.theme.modalBorder,
                }}
              >
                <div 
                  className="era-symbol" 
                  style={{
                    background: `rgba(${hexToRgb(selectedEra.theme.modalAccent)}, 0.2)`,
                    color: selectedEra.theme.modalHeader,
                  }}
                >
                  {selectedEra.symbol}
                </div>
                <h2 
                  className="modal-title" 
                  style={{
                    color: selectedEra.theme.modalHeader,
                  }}
                >
                  {selectedEra.title}
                </h2>
                <p 
                  className="modal-period" 
                  style={{
                    color: selectedEra.theme.modalAccent,
                  }}
                >
                  {selectedEra.period}
                </p>
              </div>
              <p 
                className="modal-description" 
                style={{
                  color: selectedEra.textColor,
                  borderLeftColor: selectedEra.theme.modalBorder,
                  background: 'rgba(255,255,255,0.6)',
                }}
              >
                {selectedEra.description}
              </p>
              <div 
                className="modal-events" 
                style={{
                  background: 'rgba(255,255,255,0.7)',
                }}
              >
                <h3 
                  style={{
                    color: selectedEra.theme.modalHeader,
                    borderBottomColor: selectedEra.theme.modalBorder,
                  }}
                >
                  Key Historical Events
                </h3>
                <ul>
                  {selectedEra.events.map((event: string, index: number) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Mahajanapadas;
