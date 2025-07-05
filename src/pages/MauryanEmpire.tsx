import React, { useState, useEffect } from 'react';

interface Era {
  title: string;
  period: string;
  description: string;
  shortDesc: string;
  events: string[];
  color: string;
  symbol: string;
}

const MauryanEmpire: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEra, setSelectedEra] = useState<Era | null>(null);
  const [showModal, setShowModal] = useState(false);

  const mauryanEras: Era[] = [
    {
      title: "Founding of the Empire",
      period: "322-298 BCE",
      description: "Chandragupta Maurya, with the guidance of Chanakya, overthrew the Nanda dynasty and established the Mauryan Empire after defeating Seleucus I. The empire's foundations were built on sophisticated administrative systems described in the Arthashastra, including a vast spy network and centralized bureaucracy.",
      shortDesc: "Chandragupta Maurya establishes India's first pan-Indian empire with Chanakya's guidance.",
      events: [
        "322 BCE: Chandragupta overthrows the Nanda dynasty",
        "305 BCE: Defeats Seleucus I, gains territories",
        "298 BCE: Chandragupta abdicates, becomes Jain monk",
        "Establishes capital at Pataliputra",
        "Creates centralized bureaucracy",
        "Develops extensive spy network"
      ],
      color: "#4a7c4a",
      symbol: "👑"
    },
    {
      title: "Bindusara's Reign",
      period: "298-273 BCE",
      description: "Bindusara, known as 'Amitraghata' (slayer of enemies), expanded the empire southward while maintaining diplomatic relations with Hellenistic kingdoms. The empire prospered through trade routes connecting with the Mediterranean world.",
      shortDesc: "Bindusara expands the empire southward while maintaining Hellenistic connections.",
      events: [
        "Expands empire to Deccan plateau",
        "Maintains Greek diplomatic relations",
        "Develops trade with Hellenistic world",
        "Suppresses revolts in Taxila",
        "Patronizes Ajivika sect",
        "Prepares Ashoka as successor"
      ],
      color: "#5a8c5a",
      symbol: "⚔️"
    },
    {
      title: "Ashoka the Great",
      period: "268-232 BCE",
      description: "After the brutal Kalinga war, Ashoka embraced Buddhism and transformed the empire into a vehicle for dharma. His rock and pillar edicts spread moral principles across Asia, while his efficient administration maintained peace across the subcontinent.",
      shortDesc: "Ashoka's conversion after Kalinga war leads to Buddhist propagation across Asia.",
      events: [
        "261 BCE: Kalinga war - turning point",
        "Converts to Buddhism",
        "Establishes Dhamma Mahamattas",
        "Erects pillars with edicts",
        "Sends Buddhist missions abroad",
        "Develops extensive infrastructure"
      ],
      color: "#3a5c3a",
      symbol: "☸️"
    },
    {
      title: "Administrative Zenith",
      period: "322-185 BCE",
      description: "The Mauryas developed one of antiquity's most sophisticated administrations, with a complex bureaucracy, standardized weights, and irrigation projects. The empire was divided into provinces with viceroys, while an extensive spy network maintained control.",
      shortDesc: "Sophisticated bureaucracy with provinces, spies, and standardized systems.",
      events: [
        "Centralized taxation system",
        "Five major provinces with viceroys",
        "Standardized weights and measures",
        "Extensive irrigation projects",
        "Organized spy network",
        "Developed trade routes"
      ],
      color: "#2d5c2d",
      symbol: "📜"
    },
    {
      title: "Decline & Legacy",
      period: "232-185 BCE",
      description: "After Ashoka's death, the empire gradually fragmented due to weak successors and external pressures. The last Mauryan ruler was assassinated by his general Pushyamitra Shunga, but the empire's administrative systems influenced later Indian states.",
      shortDesc: "Empire fragments but leaves enduring administrative and cultural legacy.",
      events: [
        "232 BCE: Ashoka dies",
        "Growing provincial autonomy",
        "Economic difficulties emerge",
        "185 BCE: Brihadratha assassinated",
        "Shunga dynasty takes power",
        "Legacy influences later empires"
      ],
      color: "#1a4a1a",
      symbol: "🏛️"
    }
  ];

  const darkenColor = (color: string, percent: number): string => {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    
    return `#${(
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1)}`;
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleEraClick = (era: Era) => {
    setSelectedEra(era);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEra(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('eraModal');
      if (event.target === modal) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      <style>{`
        :root {
          --mauryan-red: #8B0000;
          --sandstone: #D2B48C;
          --forest-green: #228B22;
          --gold: #D4AF37;
          --text-color: #333333;
          --light-bg: #FAF0E6;
          --primary-color: var(--mauryan-red);
          --secondary-color: var(--forest-green);
          --accent-color: var(--gold);
          --section-heading: var(--mauryan-red);
          --sub-heading: var(--forest-green);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          background-color: var(--light-bg);
          color: var(--text-color);
          line-height: 1.7;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        header {
          background: linear-gradient(135deg, var(--mauryan-red), var(--sandstone), var(--forest-green));
          color: white;
          padding: 4rem 0;
          text-align: center;
          border-radius: 0 0 20px 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://www.insightsonindia.com/wp-content/uploads/2022/07/Mauryan-Age_5.png') center/cover;
          opacity: 0.5;
          z-index: 0;
        }

        header .container {
          position: relative;
          z-index: 1;
        }

        header h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        header p {
          font-size: 1.4rem;
          max-width: 800px;
          margin: 0 auto 1.5rem;
          color: white;
          font-weight: 500;
        }

        .nav-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .nav-tab {
          background: white;
          border: 2px solid var(--mauryan-red);
          color: var(--mauryan-red);
          padding: 0.8rem 1.5rem;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }

        .nav-tab:hover, .nav-tab.active {
          background: var(--mauryan-red);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(139,0,0,0.3);
        }

        .content-section {
          display: none;
          opacity: 0;
          animation: fadeIn 0.5s ease-in-out forwards;
          padding: 3rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .content-section.active {
          display: block;
        }

        .content-section h2 {
          color: var(--section-heading);
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
          position: relative;
          padding-bottom: 1rem;
        }

        .content-section h2::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: var(--gold);
        }

        .content-section h3 {
          font-weight: 600;
          position: relative;
          padding-left: 2rem;
          color: var(--sub-heading);
          margin: 2rem 0 1rem 0;
          font-size : 1.8rem
        }

        .content-section h3::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.7em;
          height: 0.4em;
          width: 0.4em;
          background: var(--gold);
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
          font-size: 1.2rem;
          position: relative;
          padding-left: 1.8rem;
        }

        .content-section li::before {
          content: "•";
          color: var(--gold);
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.4rem;
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
          box-shadow: 0 15px 30px rgba(139,0,0,0.2);
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
          font-size: 1.1rem;
          text-align: center;
          color: var(--mauryan-red);
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
          border-top: 4px solid var(--gold);
        }

        .stat-card h4 {
          color: var(--mauryan-red);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .stat-card .number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--forest-green);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-card .unit {
          color: var(--mauryan-red);
          font-size: 1rem;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .admin-table th {
          background-color: var(--mauryan-red);
          color: white;
          padding: 12px;
          text-align: left;
          font-weight: 600;
        }

        .admin-table td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }

        .admin-table tr:hover {
          background-color: rgba(139,0,0,0.05);
        }

        footer {
          background: linear-gradient(135deg, var(--mauryan-red), var(--forest-green));
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
          background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ashoka_Pillar.jpg/1200px-Ashoka_Pillar.jpg') center/cover;
          opacity: 0.1;
          z-index: 0;
        }

        footer .container {
          position: relative;
          z-index: 1;
        }

        footerTitle: {
      fontSize: '1.8rem',
      marginBottom: '1rem',
      fontWeight: 600,
    },

    footerText: {
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
    },
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

        /* Interactive Timeline Styles */
        .interactive-timeline {
          background: #f5f2e9;
          padding: 40px 20px;
          border-radius: 15px;
          margin: 3rem 0;
        }

        .timeline-title {
          text-align: center;
          color: #2d5c2d;
          font-family: 'Times New Roman', serif;
          text-shadow: 1px 1px 2px rgba(255,255,255,0.5);
          background-color: rgba(232, 245, 232, 0.8);
          padding: 15px;
          border-radius: 8px;
          max-width: 600px;
          margin: 20px auto;
          font-size: 2.2rem;
          letter-spacing: 1px;
          border-bottom: 3px solid #5a8c5a;
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
          background: linear-gradient(135deg, rgba(240,248,240,0.9) 0%, rgba(220,235,220,0.9) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          padding: 15px 12px;
          transform: translateZ(10px);
          color: #2d5c2d;
          font-weight: bold;
          background-blend-mode: overlay;
          left: 0;
          overflow: hidden;
        }

        .book-side {
          background: linear-gradient(to right, #3a5c3a, #5a8c5a);
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
          background: linear-gradient(to bottom, #2d5c2d, #4a7c4a);
          transform: translateZ(-5px);
          border-radius: 2px 0 0 2px;
          color: #e8f5e8;
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
          color: #2d5c2d;
          position: relative;
          padding-bottom: 5px;
          z-index: 2;
        }

        .book-title:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 25%;
          width: 50%;
          height: 1px;
          background: linear-gradient(to right, transparent, #5a8c5a, transparent);
        }

        .book-period {
          font-size: 11px;
          font-weight: normal;
          font-style: italic;
          color: #5a8c5a;
          margin-bottom: 8px;
          z-index: 2;
        }

        .book-content {
          font-size: 9px;
          line-height: 1.4;
          color: #4a6c4a;
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
          color: #5a8c5a;
          font-style: italic;
          margin-top: auto;
          z-index: 2;
        }

        .book-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100,0 L60,40 L40,60 L0,100 L0,0 Z' fill='%235a8c5a' fill-opacity='0.15'/%3E%3C/svg%3E");
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
          border: 1px solid rgba(90, 140, 90, 0.3);
          border-radius: 2px;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          pointer-events: none;
          z-index: 1;
        }

        .ashoka-chakra {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 30px;
          height: 30px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='%233a5c3a' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%233a5c3a' stroke-width='1'/%3E%3Cpath d='M50,10 L50,90 M10,50 L90,50 M25,25 L75,75 M25,75 L75,25' stroke='%233a5c3a' stroke-width='2'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          opacity: 0.6;
          z-index: 1;
        }

        .modal {
          display: ${showModal ? 'flex' : 'none'};
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
          background: #f0f8f0;
          padding: 40px;
          border-radius: 8px;
          max-width: 700px;
          width: 85%;
          position: relative;
          border: 1px solid #5a8c5a;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          background-image: 
            linear-gradient(to bottom, rgba(240, 248, 240, 0.9), rgba(220, 235, 220, 0.9)),
            url('https://i.imgur.com/YQzGkfL.png');
          background-size: 300px;
          background-repeat: no-repeat;
          background-position: right bottom;
          background-blend-mode: overlay;
          overflow: hidden;
          animation: fadeIn 0.4s ease-out;
          max-height: 90vh;
          overflow-y: auto;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .modal-header {
          position: relative;
          padding-bottom: 15px;
          margin-bottom: 25px;
          border-bottom: 2px solid #5a8c5a;
        }

        .modal-header:after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100px;
          height: 3px;
          background: #3a5c3a;
        }

        .modal-title {
          color: #2d5c2d;
          font-family: 'Times New Roman', serif;
          font-size: 2.2rem;
          margin: 0 0 8px 0;
          letter-spacing: 1px;
          position: relative;
          display: inline-block;
        }

        .modal-title:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 50%;
          height: 2px;
          background: linear-gradient(to right, #5a8c5a, transparent);
        }

        .modal-period {
          color: #5a8c5a;
          font-style: italic;
          font-size: 1.2rem;
          margin: 0;
          font-weight: 500;
        }

        .modal-description {
          line-height: 1.8;
          font-size: 1.1rem;
          color: #3a5c3a;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(255,255,255,0.6);
          border-left: 4px solid #5a8c5a;
          position: relative;
          border-radius: 0 5px 5px 0;
        }

        .modal-description:before {
          content: """;
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 70px;
          color: rgba(90, 140, 90, 0.2);
          font-family: Georgia, serif;
          line-height: 1;
        }

        .modal-events {
          background: rgba(255,255,255,0.7);
          padding: 25px;
          border-radius: 5px;
          position: relative;
          margin-top: 20px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
        }

        .modal-events:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, #3a5c3a, #5a8c5a, #3a5c3a);
        }

        .modal-events h3 {
          color: #2d5c2d;
          font-family: 'Times New Roman', serif;
          font-size: 1.4rem;
          margin: 5px 0 20px 0;
          padding-bottom: 8px;
          border-bottom: 1px dashed #5a8c5a;
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
          border-bottom: 1px solid rgba(90, 140, 90, 0.3);
          position: relative;
          padding-left: 30px;
          font-size: 1rem;
          break-inside: avoid;
          transition: all 0.3s ease;
          color: #3a5c3a;
        }

        .modal-events li:hover {
          background: rgba(90, 140, 90, 0.1);
          transform: translateX(5px);
        }

        .modal-events li:before {
          content: "❖";
          color: #3a5c3a;
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
          color: #3a5c3a;
          transition: all 0.3s;
          background: rgba(255,255,255,0.7);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #5a8c5a;
        }

        .close:hover {
          transform: rotate(90deg);
          color: #2d5c2d;
          background: rgba(90, 140, 90, 0.3);
        }

        .era-symbol {
          font-size: 24px;
          margin-bottom: 15px;
          display: inline-block;
          background: rgba(90, 140, 90, 0.2);
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          text-align: center;
        }

        @media (max-width: 768px) {
          header h1 {
            font-size: 2.2rem;
          }
          
          header p {
            font-size: 1.1rem;
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

          .modal-events ul {
            column-count: 1;
          }

          .bookshelf {
            gap: 15px;
          }

          .book {
            width: 100px;
            height: 140px;
          }
        }
      `}</style>

      <div>
        <header>
          <div className="container">
            <h1>The Mauryan Empire</h1>
            <p>India's First Imperial Power (322 BCE - 185 BCE)</p>
            <p>From Chandragupta's conquests to Ashoka's Dharma</p>
          </div>
        </header>

        <div className="container">
          <div className="nav-tabs">
            {['overview', 'foundation', 'ashoka', 'administration', 'economy', 'legacy'].map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
          </div>

          {/* Overview Section */}
          <section id="overview" className={`content-section ${activeTab === 'overview' ? 'active' : ''}`}>
            <h2>India's First Empire</h2>
            <img src="https://fotisedu.com/wp-content/uploads/2024/02/image-96.png" alt="Mauryan Empire Map" className="full-width-image" />
            
            <p>The Mauryan Empire (322-185 BCE) was the first pan-Indian empire that covered most of the Indian subcontinent, establishing centralized rule and sophisticated administrative systems.</p>
            
            <div className="two-column">
              <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/05/1bcf5bd215ee827c8fab70ed812b8d51_1000x1000.jpg" alt="Ashoka Pillar" />
              <div>
                <h3>Key Features</h3>
                <ul>
                  <li>Largest empire in Indian history at its time</li>
                  <li>Highly centralized administration</li>
                  <li>Extensive trade networks</li>
                  <li>Remarkable art and architecture</li>
                  <li>Spread of Buddhism under Ashoka</li>
                  <li>Detailed records in Arthashastra</li>
                </ul>
              </div>
            </div>
            
            <h3>Empire at a Glance</h3>
            <div className="stats-container">
              <div className="stat-card">
                <div className="number">322-185</div>
                <div className="unit">BCE</div>
                <h4>Duration</h4>
              </div>
              <div className="stat-card">
                <div className="number">5M+</div>
                <div className="unit">km²</div>
                <h4>Territory at peak</h4>
              </div>
              <div className="stat-card">
                <div className="number">50M+</div>
                <div className="unit">people</div>
                <h4>Population</h4>
              </div>
              <div className="stat-card">
                <div className="number">9</div>
                <div className="unit">emperors</div>
                <h4>Chandragupta to Brihadratha</h4>
              </div>
            </div>
            
            <h3>Historical Sources</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://www.indica.today/wp-content/uploads/2019/09/s11-1.jpg" alt="Arthashastra" />
                <p>Kautilya's Arthashastra</p>
              </div>
              <div className="image-card">
                <img src="https://mapacademy.io/wp-content/uploads/2022/09/ashoka-edicts-2m.jpg" alt="Ashoka's Edicts" />
                <p>Ashoka's Edicts</p>
              </div>
              <div className="image-card">
                <img src="https://cdn.kobo.com/book-images/e12399bc-a179-4553-8949-c651a9b0cffe/1200/1200/False/megasthenes-indica.jpg" alt="Indica" />
                <p>Megasthenes' Indica</p>
              </div>
            </div>
          </section>

          {/* Foundation Section */}
          <section id="foundation" className={`content-section ${activeTab === 'foundation' ? 'active' : ''}`}>
            <h2>Rise of the Mauryas</h2>
            <img src="https://www.worldhistory.org/img/c/p/1600x900/2125.jpg" alt="Chandragupta Maurya" className="full-width-image" />
            
            <p>The Mauryan Empire was founded by Chandragupta Maurya in 322 BCE with the guidance of his mentor Chanakya (Kautilya), overthrowing the Nanda Dynasty.</p>
            
            <div className="two-column">
              <div>
                <h3>Key Events in Foundation</h3>
                <ul>
                  <li><strong>322 BCE:</strong> Chandragupta overthrows Nandas</li>
                  <li><strong>305 BCE:</strong> Defeats Seleucus Nicator</li>
                  <li><strong>298 BCE:</strong> Chandragupta abdicates, becomes Jain monk</li>
                  <li><strong>297 BCE:</strong> Bindusara succeeds to throne</li>
                  <li><strong>273 BCE:</strong> Ashoka succeeds after succession war</li>
                </ul>
              </div>
              <img src="https://i.pinimg.com/736x/88/4b/50/884b505d55bf593db0bbf09cdf29e082.jpg" alt="Chanakya" />
            </div>

            {/* Interactive Timeline */}
            <div className="interactive-timeline">
              <h1 className="timeline-title">The Mauryan Empire Chronicles</h1>
              <div className="bookshelf">
                {mauryanEras.map((era, index) => (
                  <div
                    key={index}
                    className="book"
                    onClick={() => handleEraClick(era)}
                    style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                  >
                    <div className="book-cover">
                      <div className="book-front" style={{ backgroundColor: era.color }}>
                        <div className="book-corner corner-tl"></div>
                        <div className="book-corner corner-tr"></div>
                        <div className="book-corner corner-bl"></div>
                        <div className="book-corner corner-br"></div>
                        <div className="book-border"></div>
                        <div className="ashoka-chakra"></div>
                        
                        <div className="book-title">{era.title}</div>
                        <div className="book-period">{era.period}</div>
                        <div className="book-content">
                          <div style={{ fontSize: '16px', marginBottom: '5px' }}>{era.symbol}</div>
                          {era.shortDesc}
                        </div>
                        <div className="book-footer">Click to explore</div>
                      </div>
                      <div className="book-pages"></div>
                      <div className="book-side"></div>
                      <div
                        className="book-spine"
                        style={{
                          background: `linear-gradient(to bottom, ${darkenColor(era.color, 30)}, ${darkenColor(era.color, 10)})`
                        }}
                      >
                        {era.title.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <h3>Founding Figures</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://www.worldhistory.org/img/c/p/1600x900/2125.jpg" alt="Chandragupta" />
                <p>Chandragupta Maurya (Founder)</p>
              </div>
              <div className="image-card">
                <img src="https://www.prabhatkhabar.com/wp-content/uploads/2025/04/chanakya-niti-for-success-4.jpg" alt="Chanakya" />
                <p>Chanakya (Prime Minister)</p>
              </div>
              <div className="image-card">
                <img src="https://dsqe6ephsjxi.cloudfront.net/cms/warriors_2023-5-22-15:51:52_img.jpg" alt="Bindusara" />
                <p>Bindusara (Second Emperor)</p>
              </div>
            </div>
          </section>

          {/* Ashoka's Reign Section */}
          <section id="ashoka" className={`content-section ${activeTab === 'ashoka' ? 'active' : ''}`}>
            <h2>Ashoka the Great</h2>
            <img src="https://thumbs.dreamstime.com/b/ashok-stambh-india-lion-capital-ashoka-sculpture-four-asiatic-lions-standing-back-to-back-also-called-as-ashok-253089251.jpg" alt="Ashoka's Lion Capital" className="full-width-image" />
            
            <p>Ashoka (268-232 BCE), the most famous Mauryan emperor, transformed after the Kalinga War into a patron of Buddhism and propagator of Dharma.</p>
            
            <div className="two-column">
              <img src="https://mapacademy.io/wp-content/uploads/2022/09/ashoka-edicts-2m.jpg" alt="Ashoka's Edict" />
              <div>
                <h3>Ashoka's Contributions</h3>
                <ul>
                  <li><strong>Dhamma:</strong> Moral code for governance</li>
                  <li><strong>Edicts:</strong> Inscriptions across empire</li>
                  <li><strong>Buddhist Missions:</strong> Spread to Sri Lanka, Central Asia</li>
                  <li><strong>Public Works:</strong> Hospitals, roads, rest houses</li>
                  <li><strong>Animal Welfare:</strong> Banned sacrifices, promoted vegetarianism</li>
                </ul>
              </div>
            </div>
            
            <h3>Major Rock Edict Contents</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://static.toiimg.com/thumb/imgsize-23456,msid-114880352,width-600,resizemode-4/114880352.jpg" alt="Rock Edict" />
                <p>Prohibition of animal sacrifices</p>
              </div>
              <div className="image-card">
                <img src="https://mediaindia.eu/wp-content/uploads/2016/12/images-1-1.jpg" alt="Pillar Edict" />
                <p>Religious tolerance principles</p>
              </div>
              <div className="image-card">
                <img src="https://live.staticflickr.com/3800/19625968475_8fac207a26_b.jpg" alt="Kalinga Edict" />
                <p>Remorse after Kalinga War</p>
              </div>
            </div>
            
            <h3>Ashokan Architecture</h3>
            <ul>
              <li><strong>Pillars:</strong> Polished sandstone with animal capitals</li>
              <li><strong>Stupas:</strong> Sanchi, Bharhut, Sarnath</li>
              <li><strong>Rock-cut Architecture:</strong> Barabar caves</li>
              <li><strong>Symbolism:</strong> Lion capital as national emblem</li>
            </ul>
          </section>

          {/* Administration Section */}
          <section id="administration" className={`content-section ${activeTab === 'administration' ? 'active' : ''}`}>
            <h2>Imperial Administration</h2>
            <img src="https://www.indica.today/wp-content/uploads/2019/09/s11-1.jpg" alt="Arthashastra" className="full-width-image" />
            
            <p>The Mauryan Empire developed one of the most sophisticated administrative systems of the ancient world, as detailed in Kautilya's Arthashastra.</p>
            
            <div className="two-column">
              <div>
                <h3>Administrative Structure</h3>
                <ul>
                  <li><strong>Central Government:</strong> King with council of ministers</li>
                  <li><strong>Provinces:</strong> 5 major provinces under viceroys</li>
                  <li><strong>Districts:</strong> Headed by Rajukas</li>
                  <li><strong>Villages:</strong> Gramika as village head</li>
                  <li><strong>Specialized Departments:</strong> 30+ including treasury, trade, agriculture</li>
                </ul>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Mauryan_Empire_Map.gif" alt="Administrative Map" />
            </div>
            
            <h3>Key Officials</h3>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mantriparishad</td>
                  <td>Council of ministers advising king</td>
                </tr>
                <tr>
                  <td>Samaharta</td>
                  <td>Chief revenue collector</td>
                </tr>
                <tr>
                  <td>Sannidhata</td>
                  <td>Treasury officer</td>
                </tr>
                <tr>
                  <td>Durgapala</td>
                  <td>Fort commander</td>
                </tr>
                <tr>
                  <td>Antapala</td>
                  <td>Frontier governor</td>
                </tr>
                <tr>
                  <td>Pradeshika</td>
                  <td>District administrator</td>
                </tr>
              </tbody>
            </table>
            
            <h3>Spy Network</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://www.themysteriousindia.net/wp-content/uploads/Maurya_Map-1.png" alt="Spy System" />
                <p>Elaborate espionage system</p>
              </div>
              <div className="image-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWQ_XSz9Ri0UEHFJr6qC5pIAx8GZgUfRHDQ&s" alt="Arthashastra Spies" />
                <p>Detailed in Arthashastra</p>
              </div>
              <div className="image-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Mauryan_Empire._Circa_late_4th-2nd_century_BC.jpg" alt="Secret Codes" />
                <p>Used secret codes and disguises</p>
              </div>
            </div>
          </section>

          {/* Economy & Society Section */}
          <section id="economy" className={`content-section ${activeTab === 'economy' ? 'active' : ''}`}>
            <h2>Economy & Society</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Mauryan_empire_trade_en.jpg" alt="Mauryan Trade" className="full-width-image" />
            
            <p>The Mauryan Empire witnessed economic prosperity through agriculture, crafts, and extensive trade networks across Asia.</p>
            
            <div className="two-column">
              <div>
                <h3>Economic Features</h3>
                <ul>
                  <li><strong>Agriculture:</strong> Main economic activity with irrigation</li>
                  <li><strong>Crafts:</strong> Guild system for artisans</li>
                  <li><strong>Mining:</strong> Gold, iron, copper mines</li>
                  <li><strong>Trade:</strong> Internal and external networks</li>
                  <li><strong>Currency:</strong> Punch-marked coins</li>
                  <li><strong>Taxation:</strong> 1/6th of produce as land tax</li>
                </ul>
              </div>
              <div>
                <h3>Social Structure</h3>
                <ul>
                  <li>Continued varna system</li>
                  <li>Merchant class gained importance</li>
                  <li>Improved status of women</li>
                  <li>Slaves existed but with rights</li>
                  <li>Religious tolerance</li>
                </ul>
              </div>
            </div>
            
            <h3>Trade & Commerce</h3>
            <div className="stats-container">
              <div className="stat-card">
                <div className="number">4</div>
                <div className="unit">major trade routes</div>
                <h4>Connecting subcontinent</h4>
              </div>
              <div className="stat-card">
                <div className="number">6</div>
                <div className="unit">types of coins</div>
                <h4>Silver, copper, etc.</h4>
              </div>
              <div className="stat-card">
                <div className="number">20+</div>
                <div className="unit">craft guilds</div>
                <h4>Textiles, metalwork, etc.</h4>
              </div>
              <div className="stat-card">
                <div className="number">3</div>
                <div className="unit">continents</div>
                <h4>Trade with Asia, Europe, Africa</h4>
              </div>
            </div>
            
            <h3>Urban Centers</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://i.pinimg.com/736x/1d/80/e0/1d80e071cb916ef6f62739efc422b68e.jpg" alt="Pataliputra" />
                <p>Pataliputra - Imperial capital</p>
              </div>
              <div className="image-card">
                <img src="https://lh3.googleusercontent.com/p/AF1QipNXxZ2uuC8003owlIF-hZRZHa5Dei_wvgjf_mSu=h2172-w1082" alt="Taxila" />
                <p>Taxila - Northwestern trade hub</p>
              </div>
              <div className="image-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ujjain_statioin.jpg/250px-Ujjain_statioin.jpg" alt="Ujjain" />
                <p>Ujjain - Western commercial center</p>
              </div>
            </div>
          </section>

          {/* Legacy Section */}
          <section id="legacy" className={`content-section ${activeTab === 'legacy' ? 'active' : ''}`}>
            <h2>Enduring Legacy</h2>
            <img src="https://www.shutterstock.com/image-photo/leh-india-04-july-2022-260nw-2177623309.jpg" alt="Lion Capital" className="full-width-image" />
            
            <p>The Mauryan Empire's influence persisted long after its decline in 185 BCE, shaping India's political, cultural, and religious landscape.</p>
            
            <div className="two-column">
              <img src="https://www.presentations.gov.in/wp-content/uploads/2020/01/NE_Preview1.png" alt="Indian Emblem" />
              <div>
                <h3>Lasting Contributions</h3>
                <ul>
                  <li><strong>Political Unity:</strong> First pan-Indian empire</li>
                  <li><strong>Administrative Models:</strong> Centralized governance</li>
                  <li><strong>Buddhist Expansion:</strong> Across Asia</li>
                  <li><strong>Art & Architecture:</strong> Pillars, stupas, caves</li>
                  <li><strong>National Symbols:</strong> Lion Capital as emblem</li>
                  <li><strong>Historical Records:</strong> Edicts and texts</li>
                </ul>
              </div>
            </div>
            
            <h3>Modern Recognition</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://www.studyiq.com/articles/wp-content/uploads/2023/01/20162158/National-Emblem-of-india.jpg" alt="National Emblem" />
                <p>Lion Capital as national emblem</p>
              </div>
              <div className="image-card">
                <img src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/08/03185014/How-many-Spokes-are-there-in-Ashoka-Chakra-1.jpg" alt="Ashoka Chakra" />
                <p>Ashoka Chakra on Indian flag</p>
              </div>
              <div className="image-card">
                <img src="https://www.silaii.com/cdn/shop/files/Ashoka_Pillar_1_2048x.jpg?v=1722940975" alt="Modern Pillar" />
                <p>Reproduced pillars nationwide</p>
              </div>
            </div>
            
            <h3>Decline Factors</h3>
            <ul>
              <li>Weak successors after Ashoka</li>
              <li>Financial crisis due to heavy expenditure</li>
              <li>Decentralization of power</li>
              <li>Foreign invasions (Bactrian Greeks)</li>
              <li>Revival of regional powers</li>
              <li>Last emperor Brihadratha assassinated 185 BCE</li>
            </ul>
          </section>
        </div>

        <footer>
          <div className="container">
            <h3>India's First Imperial Age</h3>
            <p>The Mauryan Empire established patterns of governance and cultural unity that would influence Indian civilization for millennia.</p>
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
        {showModal && selectedEra && (
          <div className="modal" id="eraModal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <div className="modal-header">
                <div className="era-symbol">{selectedEra.symbol}</div>
                <h2 className="modal-title">{selectedEra.title}</h2>
                <p className="modal-period">{selectedEra.period}</p>
              </div>
              <p className="modal-description">{selectedEra.description}</p>
              <div className="modal-events">
                <h3>Key Historical Events</h3>
                <ul>
                  {selectedEra.events.map((event, index) => (
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

export default MauryanEmpire;
