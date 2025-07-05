import React, { useState, useEffect } from 'react';

const PostLiberalizationInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEra, setSelectedEra] = useState<any>(null);

  const postLiberalizationEras = [
    {
      title: "Economic Reforms Dawn",
      period: "1991-1998 CE",
      description: "The watershed moment when India embraced economic liberalization under Prime Minister P.V. Narasimha Rao and Finance Minister Manmohan Singh. Facing a severe balance of payments crisis, the government dismantled the License Raj, opened markets to foreign investment, and initiated privatization. This bold transformation laid the foundation for India's emergence as a global economic player, though not without significant social and political challenges.",
      shortDesc: "The watershed moment when India embraced liberalization, dismantling the License Raj and opening to global markets.",
      events: [
        "1991: Economic liberalization begins under PM Narasimha Rao",
        "1992: Securities scam rocks Indian stock markets",
        "1994: First mobile phone call in India",
        "1996: India becomes WTO founding member",
        "1997: Economic growth reaches 7.5%, highest in decade",
        "1998: Pokhran-II nuclear tests conducted"
      ],
      color: "#3182ce",
      symbol: "📈"
    },
    {
      title: "IT Revolution & Growth",
      period: "1998-2004 CE",
      description: "This period saw India's meteoric rise as an IT superpower, with Bangalore becoming the 'Silicon Valley of India.' The Y2K crisis created unprecedented opportunities for Indian tech firms, while economic growth accelerated. However, this era also witnessed the Kargil War and increasing tensions with Pakistan, alongside domestic challenges of infrastructure development and rural-urban divides.",
      shortDesc: "India's rise as an IT superpower with Bangalore becoming the 'Silicon Valley of India' during Y2K boom.",
      events: [
        "1999: Kargil War with Pakistan",
        "2000: Dot-com bubble affects Indian IT sector",
        "2001: Parliament attack leads to military standoff",
        "2002: Gujarat riots create national turmoil",
        "2003: Golden Quadrilateral highway project launched",
        "2004: Congress returns to power after 8 years"
      ],
      color: "#4a5568",
      symbol: "💻"
    },
    {
      title: "Rising Global Power",
      period: "2004-2014 CE",
      description: "Under Prime Minister Manmohan Singh's leadership, India achieved unprecedented economic growth rates, signed the landmark Indo-US nuclear deal, and hosted the Commonwealth Games. The period saw massive infrastructure development and social welfare schemes, though it was marred by corruption scandals and policy paralysis in later years. India's soft power grew through Bollywood and cultural exports.",
      shortDesc: "India achieved high growth rates, signed the Indo-US nuclear deal, and expanded its global influence.",
      events: [
        "2005: Right to Information Act passed",
        "2008: Mumbai terror attacks shock nation",
        "2009: India's first lunar mission Chandrayaan-1",
        "2010: Commonwealth Games in Delhi",
        "2012: Delhi gang rape sparks nationwide protests",
        "2013: Mars Orbiter Mission launched"
      ],
      color: "#38a169",
      symbol: "🌏"
    },
    {
      title: "Digital India Era",
      period: "2014-2020 CE",
      description: "The Modi government's first term brought dramatic changes with demonetization, GST implementation, and a push for digital transformation through initiatives like Digital India and Make in India. India became the world's fastest-growing major economy, though debates continued about job creation and social cohesion. Foreign policy became more assertive with surgical strikes and strengthened US ties.",
      shortDesc: "Digital transformation accelerated with demonetization, GST, and initiatives like Digital India.",
      events: [
        "2014: Modi elected with first single-party majority in 30 years",
        "2016: Demonetization of ₹500 and ₹1000 notes",
        "2017: GST implementation unifies Indian tax system",
        "2018: #MeToo movement gains momentum in India",
        "2019: Article 370 revoked in Jammu & Kashmir",
        "2020: COVID-19 pandemic begins, nationwide lockdown"
      ],
      color: "#805ad5",
      symbol: "📱"
    },
    {
      title: "Pandemic & Beyond",
      period: "2020-Present CE",
      description: "India faced its greatest modern challenge with the COVID-19 pandemic, implementing the world's largest lockdown and vaccination drive. The economy showed remarkable resilience, with tech startups achieving unicorn status at record pace. As India celebrates 75 years of independence, it stands at a crossroads between traditional values and modern aspirations, with growing geopolitical significance in a multipolar world.",
      shortDesc: "India navigated the pandemic while its tech startups flourished and geopolitical role expanded.",
      events: [
        "2020: Atmanirbhar Bharat economic package announced",
        "2021: India administers 1 billion COVID vaccine doses",
        "2022: India becomes 5th largest economy",
        "2023: Successful G20 presidency in Delhi",
        "2024: Chandrayaan-3 lands on Moon's south pole",
        "2025: India projected to become 3rd largest economy"
      ],
      color: "#e53e3e",
      symbol: "🩺"
    }
  ];

  const darkenColor = (color: string, percent: number) => {
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

  const handleEraClick = (era: any) => {
    setSelectedEra(era);
    setModalOpen(true);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalOpen && (event.target as Element).classList.contains('modal')) {
        setModalOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [modalOpen]);

  return (
    <>
      <style>{`
        :root {
          --primary-blue: #3498db;
          --secondary-teal: #1abc9c;
          --accent-orange: #f39c12;
          --background-gray: #ecf0f1;
          --text-dark: #2c3e50;
          --text-light: #7f8c8d;
          --success-green: #27ae60;
          --warning-orange: #e67e22;
          --danger-red: #e74c3c;
          --light-blue: #ebf3fd;
          --dark-blue: #2980b9;
          --growth-green: #27ae60;
          --tech-purple: #9b59b6;
          --global-blue: #3498db;
          --urban-orange: #f39c12;
          --section-heading: #2c3e50;
          --sub-heading: #34495e;
          --text-color: #2c3e50;
          --light-bg: #f8f9fa;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Open Sans', sans-serif;
          background: linear-gradient(135deg, var(--light-bg), #e8f4f8);
          color: var(--text-color);
          line-height: 1.6;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        header {
          background: linear-gradient(135deg, var(--growth-green), var(--tech-purple));
          color: white;
          text-align: center;
          padding: 5rem 0;
          margin-bottom: 3rem;
          border-radius: 0 0 30px 30px;
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
          background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BackBay_skyline.jpg/960px-BackBay_skyline.jpg') center/cover;
          opacity: 0.15;
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
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          font-family: 'Poppins', sans-serif;
        }

        header p {
          color: white;
          font-weight: 500;
        }

        .header-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .header-links a {
          color: var(--growth-green);
          text-decoration: none;
          font-weight: 600;
          padding: 0.8rem 1.5rem;
          border-radius: 30px;
          transition: all 0.3s ease;
          background-color: rgba(255,255,255,0.8);
          border: 2px solid var(--growth-green);
        }

        .header-links a:hover {
          background-color: var(--growth-green);
          color: white;
          transform: translateY(-3px);
        }

        /* Navigation */
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
          color: var(--growth-green);
          border: 2px solid var(--growth-green);
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }

        .nav-tab:hover, .nav-tab.active {
          background: var(--growth-green);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(39,174,96,0.2);
        }

        /* Content Sections */
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
          border-bottom: 3px solid var(--tech-purple);
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
          background: var(--tech-purple);
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
          color: var(--tech-purple);
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.4rem;
        }

        /* Image Styles */
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
          box-shadow: 0 15px 30px rgba(39,174,96,0.2);
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
          color: var(--growth-green);
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

        /* Stats Cards */
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
          border-top: 4px solid var(--tech-purple);
        }

        .stat-card h4 {
          color: var(--global-blue);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .stat-card .number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--growth-green);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-card .unit {
          color: var(--global-blue);
          font-size: 1rem;
        }

        /* Timeline Styles */
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
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,245,245,0.95) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          padding: 15px 12px;
          transform: translateZ(10px);
          color: #333;
          font-weight: bold;
          background-blend-mode: overlay;
          left: 0;
          overflow: hidden;
        }

        .book-side {
          background: linear-gradient(to right, #2c5282, #4299e1);
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
          background: linear-gradient(to bottom, #2c5282, #4299e1);
          transform: translateZ(-5px);
          border-radius: 2px 0 0 2px;
          color: white;
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
          color: #2b6cb0;
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
          background: linear-gradient(to right, transparent, #4299e1, transparent);
        }

        .book-period {
          font-size: 11px;
          font-weight: normal;
          font-style: italic;
          color: #4a5568;
          margin-bottom: 8px;
          z-index: 2;
        }

        .book-content {
          font-size: 9px;
          line-height: 1.4;
          color: #4a5568;
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
          color: #718096;
          font-style: italic;
          margin-top: auto;
          z-index: 2;
        }

        .book-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100,0 L60,40 L40,60 L0,100 L0,0 Z' fill='%234299e1' fill-opacity='0.15'/%3E%3C/svg%3E");
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
          border: 1px solid rgba(66, 153, 225, 0.3);
          border-radius: 2px;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          pointer-events: none;
          z-index: 1;
        }

        .book-seal {
          position: absolute;
          width: 30px;
          height: 30px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='%234299e1' stroke-width='2' stroke-opacity='0.5'/%3E%3Cpath d='M50,15 A35,35 0 0,1 85,50 A35,35 0 0,1 50,85 A35,35 0 0,1 15,50 A35,35 0 0,1 50,15 Z' fill='none' stroke='%234299e1' stroke-width='1' stroke-opacity='0.5'/%3E%3C/svg%3E");
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
          background: #ffffff;
          padding: 40px;
          border-radius: 8px;
          max-width: 700px;
          width: 85%;
          position: relative;
          border: 1px solid #4299e1;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          background-image: 
            linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(235, 248, 255, 0.95)),
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
          border-bottom: 2px solid #4299e1;
        }

        .modal-header:after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100px;
          height: 3px;
          background: #2b6cb0;
        }

        .modal-title {
          color: #2b6cb0;
          font-family: 'Helvetica Neue', Arial, sans-serif;
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
          background: linear-gradient(to right, #4299e1, transparent);
        }

        .modal-period {
          color: #4a5568;
          font-style: italic;
          font-size: 1.2rem;
          margin: 0;
          font-weight: 500;
        }

        .modal-description {
          line-height: 1.8;
          font-size: 1.1rem;
          color: #2d3748;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(255,255,255,0.8);
          border-left: 4px solid #4299e1;
          position: relative;
          border-radius: 0 5px 5px 0;
        }

        .modal-description:before {
          content: """;
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 70px;
          color: rgba(66, 153, 225, 0.2);
          font-family: Georgia, serif;
          line-height: 1;
        }

        .modal-events {
          background: rgba(255,255,255,0.9);
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
          background: linear-gradient(to right, #2b6cb0, #4299e1, #2b6cb0);
        }

        .modal-events h3 {
          color: #2b6cb0;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 1.4rem;
          margin: 5px 0 20px 0;
          padding-bottom: 8px;
          border-bottom: 1px dashed #4299e1;
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
          border-bottom: 1px solid rgba(66, 153, 225, 0.3);
          position: relative;
          padding-left: 30px;
          font-size: 1rem;
          break-inside: avoid;
          transition: all 0.3s ease;
        }

        .modal-events li:hover {
          background: rgba(66, 153, 225, 0.1);
          transform: translateX(5px);
        }

        .modal-events li:before {
          content: "•";
          color: #2b6cb0;
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
          color: #2b6cb0;
          transition: all 0.3s;
          background: rgba(255,255,255,0.9);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #4299e1;
        }

        .close:hover {
          transform: rotate(90deg);
          color: #1a365d;
          background: rgba(66, 153, 225, 0.2);
        }

        .era-symbol {
          font-size: 24px;
          margin-bottom: 15px;
          display: inline-block;
          background: rgba(66, 153, 225, 0.2);
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          text-align: center;
        }

        /* Footer */
        footer {
          background: linear-gradient(135deg, var(--growth-green), var(--tech-purple));
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
          background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bangalore_IT_park.jpg/1200px-Bangalore_IT_park.jpg') center/cover;
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

        @media (max-width: 768px) {
          header h1 {
            font-size: 2.5rem;
          }
          
          header p {
            font-size: 1.2rem;
          }
          
          .header-links {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
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
        }
      `}</style>

      <header>
        <div className="container">
          <h1>Post-Liberalization India</h1>
          <p>1991-Present: India's Economic Transformation and Global Rise</p>
          <p>From economic reforms to becoming the world's fastest-growing major economy</p>
        </div>
      </header>

      <div className="container">
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => handleTabClick('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-tab ${activeTab === 'economy' ? 'active' : ''}`}
            onClick={() => handleTabClick('economy')}
          >
            Economic Growth
          </button>
          <button 
            className={`nav-tab ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => handleTabClick('tech')}
          >
            IT Revolution
          </button>
          <button 
            className={`nav-tab ${activeTab === 'politics' ? 'active' : ''}`}
            onClick={() => handleTabClick('politics')}
          >
            Political Landscape
          </button>
          <button 
            className={`nav-tab ${activeTab === 'foreign' ? 'active' : ''}`}
            onClick={() => handleTabClick('foreign')}
          >
            Global India
          </button>
          <button 
            className={`nav-tab ${activeTab === 'society' ? 'active' : ''}`}
            onClick={() => handleTabClick('society')}
          >
            Social Changes
          </button>
        </div>

        {/* Overview Section */}
        <section className={`content-section ${activeTab === 'overview' ? 'active' : ''}`}>
          <h2>India's Economic Transformation</h2>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BackBay_skyline.jpg/960px-BackBay_skyline.jpg" 
            alt="Mumbai Skyline" 
            className="full-width-image"
          />
          
          <p>The post-1991 period witnessed India's remarkable economic transformation from a closed, regulated economy to one of the world's fastest-growing major economies.</p>
          
          <div className="two-column">
            <img 
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/676d87bbba1fe-manmohan-singh-served-as-prime-minister-from-2004-to-2014-264333889-16x9.jpg" 
              alt="Manmohan Singh"
            />
            <div>
              <h3>Key Features</h3>
              <ul>
                <li><strong>Liberalization:</strong> Dismantling of License Raj</li>
                <li><strong>Privatization:</strong> Disinvestment in PSUs</li>
                <li><strong>Globalization:</strong> FDI and international trade</li>
                <li><strong>Technology:</strong> IT services boom</li>
                <li><strong>Infrastructure:</strong> Massive development projects</li>
                <li><strong>Demographics:</strong> Largest young population</li>
              </ul>
            </div>
          </div>
          
          <h3>India by Numbers</h3>
          <div className="stats-container">
            <div className="stat-card">
              <div className="number">6.9%</div>
              <div className="unit">avg GDP growth</div>
              <h4>1991-2020</h4>
            </div>
            <div className="stat-card">
              <div className="number">$3.5T</div>
              <div className="unit">GDP</div>
              <h4>2023 (5th largest)</h4>
            </div>
            <div className="stat-card">
              <div className="number">$700B</div>
              <div className="unit">IT industry</div>
              <h4>2023 valuation</h4>
            </div>
            <div className="stat-card">
              <div className="number">1.4B</div>
              <div className="unit">population</div>
              <h4>World's largest</h4>
            </div>
          </div>
          
          <h3>Transformative Moments</h3>
          <div className="image-container">
            <div className="image-card">
              <img 
                src="https://economics-dictionary.com/wp-content/uploads/2022/06/Economic-Reform-1991-Cover.jpg" 
                alt="1991 Reforms"
              />
              <p>1991 Economic Reforms</p>
            </div>
            <div className="image-card">
              <img 
                src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2016/04/26/Photos/column-khEB--621x414@LiveMint.JPG" 
                alt="IT Boom"
              />
              <p>IT Revolution</p>
            </div>
            <div className="image-card">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVbdNZgWsXD2j3UZKa1VqlQWB-kvLQfvq_w&s" 
                alt="Middle Class"
              />
              <p>Middle Class Expansion</p>
            </div>
          </div>

          <h3>Interactive Timeline</h3>
          <div className="bookshelf">
            {postLiberalizationEras.map((era, index) => (
              <div 
                key={index}
                className="book"
                style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                onClick={() => handleEraClick(era)}
              >
                <div className="book-cover">
                  <div className="book-front" style={{ backgroundColor: era.color }}>
                    <div className="book-corner corner-tl"></div>
                    <div className="book-corner corner-tr"></div>
                    <div className="book-corner corner-bl"></div>
                    <div className="book-corner corner-br"></div>
                    <div className="book-border"></div>
                    <div className="book-seal"></div>
                    
                    <div className="book-title">{era.title}</div>
                    <div className="book-period">{era.period}</div>
                    <div className="book-content">
                      <div style={{fontSize: '16px', marginBottom: '5px'}}>{era.symbol}</div>
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
        </section>

        {/* Economy Section */}
        <section className={`content-section ${activeTab === 'economy' ? 'active' : ''}`}>
          <h2>Economic Growth Story</h2>
          <img 
            src="https://www.researchgate.net/publication/383157292/figure/fig1/AS:11431281271868998@1723806419166/Sensex-from-1991-to-2016-Source-BSE-India-Ltd-Historical-Indices-data.ppm" 
            alt="Stock Market" 
            className="full-width-image"
          />
          
          <p>India's economy transformed from $270 billion in 1991 to $3.5 trillion in 2023, becoming the world's fifth-largest economy.</p>
          
          <div className="two-column">
            <div>
              <h3>Major Economic Developments</h3>
              <ol>
                <li><strong>1991:</strong> Economic liberalization begins</li>
                <li><strong>1993:</strong> Stock exchanges modernize</li>
                <li><strong>2000s:</strong> Service sector boom</li>
                <li><strong>2008:</strong> Global financial crisis impact</li>
                <li><strong>2014:</strong> Make in India initiative</li>
                <li><strong>2017:</strong> GST implementation</li>
                <li><strong>2020:</strong> COVID-19 economic impact</li>
                <li><strong>2023:</strong> World's 5th largest economy</li>
              </ol>
            </div>
            <img 
              src="https://www.researchgate.net/publication/290445137/figure/fig1/AS:613991093129217@1523398292146/Real-GDP-growth-and-per-capita-GDP-1991-2013.png" 
              alt="GDP Growth"
            />
          </div>
          
          <h3>Sectoral Growth</h3>
          <div className="image-container">
            <div className="image-card">
              <img 
                src="https://nishantverma.in/wp-content/uploads/2025/01/Evolution-of-the-Indian-Automobile-Industry-in-a-Globalized-Market.jpg" 
                alt="Automobile"
              />
              <p>Manufacturing Growth</p>
            </div>
            <div className="image-card">
              <img 
                src="https://www.angelone.in/wp-content/uploads/2024/08/Indias-Agricultural-Journey-and-Impact-Carousel-PDF.001.jpeg" 
                alt="Agriculture"
              />
              <p>Agricultural Changes</p>
            </div>
            <div className="image-card">
              <img 
                src="https://static.theprint.in/wp-content/uploads/2021/07/Graphic-scaled.jpg" 
                alt="Retail"
              />
              <p>Consumer Economy</p>
            </div>
          </div>
        </section>

        {/* IT Revolution Section */}
        <section className={`content-section ${activeTab === 'tech' ? 'active' : ''}`}>
          <h2>IT and Digital Revolution</h2>
          <img 
            src="https://www.prestigesouthernstar.info/images/prestige/major-it-parks-in-bangalore.webp" 
            alt="Bangalore IT Park" 
            className="full-width-image"
          />
          
          <p>India's IT sector grew from $150 million in 1991 to $227 billion in 2022, making India the world's back office and digital hub.</p>
          
          <div className="two-column">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Infosys_%284911287704%29.jpg" 
              alt="Infosys Campus"
            />
            <div>
              <h3>Tech Milestones</h3>
              <ul>
                <li><strong>Y2K:</strong> Indian IT gains global recognition</li>
                <li><strong>2000s:</strong> Rise of TCS, Infosys, Wipro</li>
                <li><strong>2010s:</strong> Startup boom (Flipkart, Ola, Paytm)</li>
                <li><strong>2016:</strong> Digital India initiative</li>
                <li><strong>2020s:</strong> World's third-largest startup ecosystem</li>
                <li><strong>2023:</strong> 5G rollout and AI adoption</li>
              </ul>
            </div>
          </div>
          
          <h3>Tech Sector by Numbers</h3>
          <div className="stats-container">
            <div className="stat-card">
              <div className="number">$227B</div>
              <div className="unit">IT industry</div>
              <h4>2022 revenue</h4>
            </div>
            <div className="stat-card">
              <div className="number">5M+</div>
              <div className="unit">employees</div>
              <h4>In IT sector</h4>
            </div>
            <div className="stat-card">
              <div className="number">100+</div>
              <div className="unit">unicorns</div>
              <h4>Indian startups</h4>
            </div>
            <div className="stat-card">
              <div className="number">850M+</div>
              <div className="unit">internet users</div>
              <h4>2023</h4>
            </div>
          </div>
          
          <h3>Tech Leaders</h3>
          <div className="image-container">
            <div className="image-card">
              <img 
                src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/photos/nrn.jpg" 
                alt="Narayana Murthy"
              />
              <p>Narayana Murthy (Infosys)</p>
            </div>
            <div className="image-card">
              <img 
                src="https://artofgiving.in.net/wp-content/uploads/2020/03/Art-of-Giving-by-Azim-Premji-2.jpeg" 
                alt="Azim Premji"
              />
              <p>Azim Premji (Wipro)</p>
            </div>
            <div className="image-card">
              <img 
                src="https://en.wikiflux.org/wiki/images/1/13/Byju-Raveendran.jpg" 
                alt="Byju Raveendran"
              />
              <p>Startup Founders</p>
            </div>
          </div>
        </section>

        {/* Political Landscape Section */}
        <section className={`content-section ${activeTab === 'politics' ? 'active' : ''}`}>
          <h2>Political Evolution</h2>
          <img 
            src="https://i0.wp.com/compass.rauias.com/wp-content/uploads/2023/08/indian-parliament-64eeedd4361f4.webp" 
            alt="Indian Parliament" 
            className="full-width-image"
          />
          
          <p>India's political landscape transformed from single-party dominance to coalition politics and then back to dominant party system.</p>
          
          <div className="two-column">
            <div>
              <h3>Political Timeline</h3>
              <ol>
                <li><strong>1991-96:</strong> Minority Congress government (Rao)</li>
                <li><strong>1996-98:</strong> Coalition experiments</li>
                <li><strong>1998-2004:</strong> NDA government (Vajpayee)</li>
                <li><strong>2004-14:</strong> UPA government (Manmohan Singh)</li>
                <li><strong>2014-present:</strong> BJP majority (Modi)</li>
              </ol>
            </div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Election_dates_of_Indian_general_election%2C_2014.png/330px-Election_dates_of_Indian_general_election%2C_2014.png" 
              alt="Election Map"
            />
          </div>
          
          <h3>Key Political Figures</h3>
          <div className="image-container">
            <div className="image-card">
              <img 
                src="https://images.moneycontrol.com/static-mcnews/2018/06/PV-Narasimha-rao.jpg?impolicy=website&width=1600&height=900" 
                alt="Narasimha Rao"
              />
              <p>P.V. Narasimha Rao</p>
            </div>
            <div className="image-card">
              <img 
                src="https://ddindia.co.in/wp-content/uploads/2023/08/atal-bihari-vajpayee.jpg" 
                alt="Atal Bihari Vajpayee"
              />
              <p>Atal Bihari Vajpayee</p>
            </div>
            <div className="image-card">
              <img 
                src="https://yespunjab.com/wp-content/uploads/2024/10/PM-Narendra-Modi-decision.jpg" 
                alt="Narendra Modi"
              />
              <p>Narendra Modi</p>
            </div>
          </div>
        </section>

        {/* Global India Section */}
        <section className={`content-section ${activeTab === 'foreign' ? 'active' : ''}`}>
          <h2>India on Global Stage</h2>
          <img 
            src="https://etimg.etb2bimg.com/photo/103539585.cms" 
            alt="Modi at G20" 
            className="full-width-image"
          />
          
          <p>From non-alignment to strategic partnerships, India's global stature grew significantly in the post-liberalization era.</p>
          
          <div className="two-column">
            <img 
              src="https://cdn.cfr.org/sites/default/files/styles/open_graph_article/public/image/2025/02/2025-02-07T140244Z_923141797_RC2PPCAVY32R_RTRMADP_3_USA-INDIA-MODI%20%281%29_0.JPG" 
              alt="India-US Relations"
            />
            <div>
              <h3>Foreign Policy Highlights</h3>
              <ul>
                <li><strong>Look East Policy:</strong> Strengthened ASEAN ties</li>
                <li><strong>US Relations:</strong> Civil nuclear deal (2008)</li>
                <li><strong>Neighborhood:</strong> SAARC and BIMSTEC</li>
                <li><strong>Global South:</strong> Leadership role</li>
                <li><strong>G20 Presidency:</strong> 2023 showcase</li>
                <li><strong>Multilateralism:</strong> UNSC aspirations</li>
              </ul>
            </div>
          </div>
          
          <h3>Global Achievements</h3>
          <div className="image-container">
            <div className="image-card">
              <img 
                src="https://cdn1.img.sputniknews.in/img/07e7/08/17/3793339_300:0:1200:675_1920x0_80_0_0_acb421c0004c8d4637f880026c278015.jpg" 
                alt="Moon Mission"
              />
              <p>Space Achievements</p>
            </div>
            <div className="image-card">
              <img 
                src="https://cdn.statcdn.com/Infographic/images/normal/30803.jpeg" 
                alt="Indian Diaspora"
              />
              <p>Global Diaspora</p>
            </div>
            <div className="image-card">
              <img 
                src="https://static.tripclap.com/uploads/story/850X450/1679481899-1679481899-5170e.webp" 
                alt="Culture Festival"
              />
              <p>Soft Power</p>
            </div>
          </div>
        </section>

        {/* Society Changes Section */}
        <section className={`content-section ${activeTab === 'society' ? 'active' : ''}`}>
          <h2>Social Transformations</h2>
          <img 
            src="https://www.constructionweekonline.in/cloud/2023/10/06/forum-mall-1.jpg" 
            alt="Mall Culture" 
            className="full-width-image"
          />
          
          <p>Liberalization brought dramatic social changes - from consumerism to digital connectivity and evolving gender roles.</p>
          
          <div className="two-column">
            <div>
              <h3>Social Changes</h3>
              <ul>
                <li><strong>Consumerism:</strong> Rise of mall culture</li>
                <li><strong>Urbanization:</strong> Growth of megacities</li>
                <li><strong>Education:</strong> Literacy rate reaches 77.7%</li>
                <li><strong>Women:</strong> Changing workforce participation</li>
                <li><strong>Media:</strong> Satellite TV and OTT revolution</li>
                <li><strong>Digital:</strong> Jio digital revolution</li>
              </ul>
            </div>
            <img 
              src="https://www.shutterstock.com/image-photo/portrait-happy-indian-nuclear-family-260nw-2334107419.jpg" 
              alt="Indian Family"
            />
          </div>
          
          <h3>Cultural Shifts</h3>
          <div className="image-container">
            <div className="image-card">
              <img 
                src="https://static.toiimg.com/thumb/msid-112645954,width-1280,height-720,imgsize-113100,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" 
                alt="Bollywood"
              />
              <p>Entertainment Industry</p>
            </div>
            <div className="image-card">
              <img 
                src="https://i0.wp.com/textilelearner.net/wp-content/uploads/2023/02/indian-fashion-show.jpg?fit=600%2C437&ssl=1" 
                alt="Fashion"
              />
              <p>Fashion Evolution</p>
            </div>
            <div className="image-card">
              <img 
                src="https://images.news9live.com/h-upload/2022/08/08/510188-sportsfinalone.jpg?w=1200&enlarge=true" 
                alt="Sports"
              />
              <p>Sports Achievements</p>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
          {selectedEra && (
            <>
              <div className="modal-header">
                <div className="era-symbol">{selectedEra.symbol}</div>
                <h2 className="modal-title">{selectedEra.title}</h2>
                <p className="modal-period">{selectedEra.period}</p>
              </div>
              <p className="modal-description">{selectedEra.description}</p>
              <div className="modal-events">
                <h3>Key Historical Events</h3>
                <ul>
                  {selectedEra.events.map((event: string, index: number) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      <footer>
        <div className="container">
          <h3>India's Growth Story</h3>
          <p>The post-liberalization era transformed India from a struggling economy to a global powerhouse and the world's largest democracy.</p>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Economy</a>
            <a href="#">Politics</a>
            <a href="#">Culture</a>
            <a href="#">Contact</a>
          </div>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          <p>&copy; 2023 Modern India. Documenting India's growth story.</p>
        </div>
      </footer>
    </>
  );
};

export default PostLiberalizationInteractive;
