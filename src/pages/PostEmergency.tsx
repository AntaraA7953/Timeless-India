import React, { useState, useEffect } from 'react';

const PostEmergency_Interactive: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [selectedEra, setSelectedEra] = useState<any>(null);

  const postEmergencyEras = [
    {
      title: "Janata Government",
      period: "1977-1980",
      description: "The first non-Congress government at the center came to power after the Emergency, led by Morarji Desai. This period saw the reversal of many Emergency-era policies, the establishment of civil liberties, and the beginning of political fragmentation that would characterize Indian politics in the coming decades.",
      shortDesc: "India's first non-Congress government reversed Emergency excesses but fell to internal conflicts.",
      events: [
        "1977: Janata Party wins historic election",
        "Repeal of 42nd Amendment (undoing Emergency changes)",
        "Morarji Desai becomes PM",
        "1978: Mandal Commission established",
        "1979: Charan Singh becomes PM",
        "1980: Government collapses, Indira returns"
      ],
      color: "#4a6baf",
      secondaryColor: "#3a5b9f",
      textColor: "#1a3e72",
      accentColor: "#6a8bcf",
      symbol: "🗳️",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(235, 240, 255, 0.9) 0%, rgba(210, 220, 245, 0.9) 100%)",
        bookSide: "linear-gradient(to right, #3a5b9f, #4a6baf)",
        spine: "linear-gradient(to bottom, #2a4b8f, #4a6baf)",
        titleColor: "#1a3e72",
        periodColor: "#4a6baf",
        contentColor: "#3a4b6e",
        borderColor: "rgba(74, 107, 175, 0.3)",
        modalBorder: "#4a6baf",
        modalHeader: "#3a5b9f",
        modalAccent: "#6a8bcf",
        modalEventBullet: "#4a6baf"
      }
    },
    {
      title: "Indira's Return",
      period: "1980-1984",
      description: "Indira Gandhi returned to power with a Congress victory in 1980, but faced growing regional tensions, economic challenges, and the Khalistan movement in Punjab. This period culminated in Operation Blue Star and Indira's assassination, marking a turning point in Indian politics.",
      shortDesc: "Indira's final term saw growing tensions culminating in Operation Blue Star and her assassination.",
      events: [
        "1980: Congress returns to power",
        "1982: Asian Games in Delhi",
        "1983: India wins Cricket World Cup",
        "1984: Operation Blue Star",
        "June 1984: Operation Meghdoot (Siachen)",
        "Oct 1984: Indira Gandhi assassinated"
      ],
      color: "#af4a4a",
      secondaryColor: "#9f3a3a",
      textColor: "#721a1a",
      accentColor: "#cf6a6a",
      symbol: "⚔️",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(255, 235, 235, 0.9) 0%, rgba(245, 210, 210, 0.9) 100%)",
        bookSide: "linear-gradient(to right, #9f3a3a, #af4a4a)",
        spine: "linear-gradient(to bottom, #8f2a2a, #af4a4a)",
        titleColor: "#721a1a",
        periodColor: "#af4a4a",
        contentColor: "#6e3a3a",
        borderColor: "rgba(175, 74, 74, 0.3)",
        modalBorder: "#af4a4a",
        modalHeader: "#9f3a3a",
        modalAccent: "#cf6a6a",
        modalEventBullet: "#af4a4a"
      }
    },
    {
      title: "Rajiv Gandhi Era",
      period: "1984-1989",
      description: "Rajiv Gandhi's government began with a massive mandate but faced challenges from corruption scandals, regional conflicts, and the beginnings of Hindu nationalist mobilization. This period saw technological modernization, the Shah Bano controversy, and India's growing involvement in Sri Lanka.",
      shortDesc: "Rajiv's government mixed technological modernization with growing political challenges.",
      events: [
        "1984: Anti-Sikh riots",
        "1985: Assam Accord signed",
        "1986: Shah Bano case controversy",
        "1987: Bofors scandal emerges",
        "1987-90: IPKF in Sri Lanka",
        "1989: Congress loses majority"
      ],
      color: "#4aaf8b",
      secondaryColor: "#3a9f7b",
      textColor: "#1a7254",
      accentColor: "#6acfab",
      symbol: "💻",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(235, 255, 248, 0.9) 0%, rgba(210, 245, 230, 0.9) 100%)",
        bookSide: "linear-gradient(to right, #3a9f7b, #4aaf8b)",
        spine: "linear-gradient(to bottom, #2a8f6b, #4aaf8b)",
        titleColor: "#1a7254",
        periodColor: "#4aaf8b",
        contentColor: "#3a6e5a",
        borderColor: "rgba(74, 175, 139, 0.3)",
        modalBorder: "#4aaf8b",
        modalHeader: "#3a9f7b",
        modalAccent: "#6acfab",
        modalEventBullet: "#4aaf8b"
      }
    },
    {
      title: "Coalition Politics",
      period: "1989-1991",
      description: "The era of unstable coalition governments began with V.P. Singh's National Front government, implementing the Mandal Commission recommendations and facing the Ram Janmabhoomi movement. This turbulent period ended with Rajiv Gandhi's assassination and the economic crisis that paved the way for reforms.",
      shortDesc: "Unstable coalitions implemented Mandal while facing the Ram Janmabhoomi movement.",
      events: [
        "1989: V.P. Singh becomes PM",
        "1990: Mandal Commission implemented",
        "1990: Rath Yatra by L.K. Advani",
        "1990: Kashmir insurgency begins",
        "1991: Gulf War impacts economy",
        "May 1991: Rajiv Gandhi assassinated"
      ],
      color: "#af8b4a",
      secondaryColor: "#9f7b3a",
      textColor: "#72541a",
      accentColor: "#cfab6a",
      symbol: "🤝",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(255, 248, 235, 0.9) 0%, rgba(245, 230, 210, 0.9) 100%)",
        bookSide: "linear-gradient(to right, #9f7b3a, #af8b4a)",
        spine: "linear-gradient(to bottom, #8f6b2a, #af8b4a)",
        titleColor: "#72541a",
        periodColor: "#af8b4a",
        contentColor: "#6e5a3a",
        borderColor: "rgba(175, 139, 74, 0.3)",
        modalBorder: "#af8b4a",
        modalHeader: "#9f7b3a",
        modalAccent: "#cfab6a",
        modalEventBullet: "#af8b4a"
      }
    },
    {
      title: "Economic Crisis & Reforms",
      period: "1991",
      description: "The balance of payments crisis forced India to pledge gold reserves and accept IMF conditions, leading to Manmohan Singh's historic budget that dismantled the License Raj. These reforms marked the beginning of India's economic liberalization and integration with the global economy.",
      shortDesc: "The 1991 crisis led to landmark economic reforms ending the License Raj.",
      events: [
        "1991: Gold pledged to Bank of England",
        "June 1991: P.V. Narasimha Rao becomes PM",
        "July 1991: Manmohan Singh presents reform budget",
        "Devaluation of rupee",
        "Abolition of License Raj",
        "Opening to foreign investment"
      ],
      color: "#6b4aaf",
      secondaryColor: "#5b3a9f",
      textColor: "#3e1a72",
      accentColor: "#8b6acf",
      symbol: "💹",
      theme: {
        bookBg: "linear-gradient(135deg, rgba(240, 235, 255, 0.9) 0%, rgba(220, 210, 245, 0.9) 100%)",
        bookSide: "linear-gradient(to right, #5b3a9f, #6b4aaf)",
        spine: "linear-gradient(to bottom, #4b2a8f, #6b4aaf)",
        titleColor: "#3e1a72",
        periodColor: "#6b4aaf",
        contentColor: "#5a3a6e",
        borderColor: "rgba(107, 74, 175, 0.3)",
        modalBorder: "#6b4aaf",
        modalHeader: "#5b3a9f",
        modalAccent: "#8b6acf",
        modalEventBullet: "#6b4aaf"
      }
    }
  ];

  const handleBookClick = (era: any) => {
    setSelectedEra(era);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEra(null);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showModal && (event.target as HTMLElement).classList.contains('modal')) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showModal]);

  const hexToRgb = (hex: string) => {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --democracy-blue: #0056b3;
          --socialist-red: #d73027;
          --economic-green: #2e8b57;
          --reform-orange: #ff8c00;
          --text-color: #2c3e50;
          --light-bg: #f8f9fa;
        }

        body {
          font-family: 'Poppins', 'Arial', sans-serif;
          line-height: 1.6;
          color: var(--text-color);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        header {
          background: linear-gradient(135deg, var(--democracy-blue), var(--socialist-red));
          color: white;
          text-align: center;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
          border-radius: 0 0 30px 30px;
          margin-bottom: 2rem;
        }

        header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://media.assettype.com/barandbench%2F2020-06%2Fdda747ca-de17-4580-8d9d-3ca4843aa4ca%2FEmergency.jpg') center/cover;
          opacity: 0.4;
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
          animation: fadeInUp 1s ease-out;
        }

        header p {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          font-weight: 300;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Navigation */
        .nav-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .nav-tab {
          background: white;
          border: 2px solid var(--democracy-blue);
          color: var(--democracy-blue);
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-tab:hover,
        .nav-tab.active {
          background: var(--democracy-blue);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,86,179,0.3);
        }

        /* Content Sections */
        .content-section {
          background: white;
          margin: 2rem 0;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          display: none;
          animation: fadeIn 0.5s ease-out;
        }

        .content-section.active {
          display: block;
        }

        .content-section h2 {
          color: var(--democracy-blue);
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
          position: relative;
          font-weight: 700;
        }

        .content-section h2::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: var(--reform-orange);
          border-radius: 2px;
        }

        .content-section h3 {
          color: var(--socialist-red);
          font-size: 1.8rem;
          margin: 2rem 0 1rem 0;
          position: relative;
          padding-left: 20px;
        }

        .content-section h3::before {
          content: "◆";
          position: absolute;
          left: 0;
          color: var(--reform-orange);
          font-size: 1.2rem;
        }

        .content-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .content-section ul,
        .content-section ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }

        .content-section li {
          margin-bottom: 0.8rem;
          position: relative;
          padding-left: 10px;
        }

        .content-section li::before {
          content: "▸";
          position: absolute;
          left: -15px;
          color: var(--economic-green);
          font-weight: bold;
        }

        /* Image Styles */
        .image-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .image-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .image-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,86,179,0.2);
        }

        .image-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-card:hover img {
          transform: scale(1.05);
        }

        .image-card p {
          padding: 1rem;
          text-align: center;
          font-weight: 600;
          color: var(--democracy-blue);
          margin: 0;
        }

        .full-width-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 15px;
          margin: 2rem 0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
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
          height: 250px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
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
          border-top: 4px solid var(--reform-orange);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-card h4 {
          color: var(--democracy-blue);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .stat-card .number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--economic-green);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-card .unit {
          color: var(--democracy-blue);
          font-size: 1rem;
        }

        /* Political Timeline Bookshelf */
        .political-timeline-container {
          background: #f0f2f5;
          padding: 2rem;
          border-radius: 15px;
          margin: 2rem 0;
        }

        .timeline-title {
          text-align: center;
          color: #1a3e72;
          font-family: 'Helvetica', sans-serif;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 15px;
          border-radius: 8px;
          max-width: 800px;
          margin: 20px auto;
          font-size: 2.2rem;
          letter-spacing: 1px;
          border-bottom: 3px solid #1a3e72;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .bookshelf {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1000px;
          margin: 0 auto;
          gap: 25px;
          padding: 30px 0;
        }

        .book {
          width: 140px;
          height: 190px;
          position: relative;
          perspective: 1000px;
          cursor: pointer;
          transition: all 0.4s ease;
          filter: drop-shadow(2px 4px 4px rgba(0,0,0,0.2));
          transform: ${Math.random() > 0.5 ? 'rotate(2deg)' : 'rotate(-2deg)'};
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
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.1);
        }

        .book-front {
          width: calc(100% - 8px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          padding: 15px 10px;
          transform: translateZ(10px);
          font-weight: bold;
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
          font-size: 10px;
          line-height: 1.4;
          margin: 8px 0;
          text-align: center;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
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

        .modern-icon {
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

        /* Modal styles */
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
          background: white;
          padding: 30px;
          border-radius: 8px;
          max-width: 800px;
          width: 85%;
          position: relative;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
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
          margin-bottom: 20px;
        }

        .modal-title {
          font-family: 'Helvetica', sans-serif;
          font-size: 2rem;
          margin: 0 0 8px 0;
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
          margin-bottom: 25px;
          padding: 20px;
          border-left: 4px solid;
          position: relative;
          border-radius: 0 5px 5px 0;
          background: #f9f9f9;
        }

        .modal-events {
          background: #f5f7fa;
          padding: 20px;
          border-radius: 5px;
          position: relative;
          margin-top: 20px;
        }

        .modal-events h3 {
          font-family: 'Helvetica', sans-serif;
          font-size: 1.3rem;
          margin: 5px 0 15px 0;
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
          content: "•";
          color: inherit;
          font-size: 20px;
          position: absolute;
          left: 5px;
          top: 7px;
        }

        .close {
          position: absolute;
          top: 15px;
          right: 25px;
          font-size: 28px;
          cursor: pointer;
          transition: all 0.3s;
          background: white;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #ddd;
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

        /* Footer */
        footer {
          background: linear-gradient(135deg, var(--democracy-blue), var(--socialist-red));
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
          background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Indian_economy_growth.jpg/1200px-Indian_economy_growth.jpg') center/cover;
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
            font-size: 1.1rem;
          }
          
          .nav-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .nav-tab {
            width: 200px;
          }
          
          .content-section {
            padding: 2rem 1rem;
          }
          
          .two-column {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .image-container,
          .stats-container {
            grid-template-columns: 1fr;
          }

          .modal-events ul {
            column-count: 1;
          }
        }
      `}</style>

      <div>
        <header>
          <div className="container">
            <h1>Post-Emergency to Liberalization</h1>
            <p>1977-1991: India's Transition to Economic Reforms</p>
            <p>From the Janata Party government to the watershed economic reforms of 1991</p>
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
              className={`nav-tab ${activeTab === 'politics' ? 'active' : ''}`}
              onClick={() => handleTabClick('politics')}
            >
              Political Changes
            </button>
            <button 
              className={`nav-tab ${activeTab === 'economy' ? 'active' : ''}`}
              onClick={() => handleTabClick('economy')}
            >
              Economic Policy
            </button>
            <button 
              className={`nav-tab ${activeTab === 'foreign' ? 'active' : ''}`}
              onClick={() => handleTabClick('foreign')}
            >
              Foreign Relations
            </button>
            <button 
              className={`nav-tab ${activeTab === 'culture' ? 'active' : ''}`}
              onClick={() => handleTabClick('culture')}
            >
              Society & Culture
            </button>
            <button 
              className={`nav-tab ${activeTab === 'reforms' ? 'active' : ''}`}
              onClick={() => handleTabClick('reforms')}
            >
              1991 Reforms
            </button>
          </div>

          {/* Overview Section */}
          <section id="overview" className={`content-section ${activeTab === 'overview' ? 'active' : ''}`}>
            <h2>India's Transition Period</h2>
            <img src="https://www.legalbites.in/wp-content/uploads/2020/06/National-Emergency.jpg" alt="Indian Parliament" className="full-width-image" />
            
            <p>The period from 1977 to 1991 witnessed India's transition from the post-Emergency political upheaval to the economic liberalization that would transform the nation's development trajectory.</p>
            
            <div className="two-column">
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201704/647_041017012724.jpg?size=1200:675" alt="Morarji Desai" />
              <div>
                <h3>Transition Highlights</h3>
                <ul>
                  <li><strong>Political Freedom:</strong> End of Emergency rule</li>
                  <li><strong>Economic Challenges:</strong> License Raj constraints</li>
                  <li><strong>Social Changes:</strong> Growing middle class</li>
                  <li><strong>Regional Politics:</strong> Rise of state parties</li>
                  <li><strong>Crisis & Reform:</strong> 1991 turning point</li>
                </ul>
              </div>
            </div>
            
            <h3>Period by Numbers</h3>
            <div className="stats-container">
              <div className="stat-card">
                <div className="number">14</div>
                <div className="unit">years</div>
                <h4>Transition Period</h4>
              </div>
              <div className="stat-card">
                <div className="number">6</div>
                <div className="unit">governments</div>
                <h4>Political instability</h4>
              </div>
              <div className="stat-card">
                <div className="number">3.5%</div>
                <div className="unit">avg growth</div>
                <h4>Hindu rate</h4>
              </div>
              <div className="stat-card">
                <div className="number">1991</div>
                <div className="unit">crisis year</div>
                <h4>Reform catalyst</h4>
              </div>
            </div>
            
            <h3>Historical Moments</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://images.indianexpress.com/2025/06/raj-narain-1600-emergency-series.jpg?w=414" alt="Janata Victory" />
                <p>Janata Party Victory 1977</p>
              </div>
              <div className="image-card">
                <img src="https://www.thoughtco.com/thmb/PE7NX-WgsRGkluBMKBxtM6KR_gE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IndiraGandhi1983HultonGetty-56a042a63df78cafdaa0b882.jpg" alt="Indira Return" />
                <p>Indira's Return 1980</p>
              </div>
              <div className="image-card">
                <img src="https://images.yourstory.com/cs/wordpress/2016/09/Manmohan-Singh.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75" alt="1991 Reforms" />
                <p>1991 Economic Reforms</p>
              </div>
            </div>
          </section>

          {/* Political Changes Section */}
          <section id="politics" className={`content-section ${activeTab === 'politics' ? 'active' : ''}`}>
            <h2>Political Transformation</h2>
            <img src="https://mediaswaraj.com/wp-content/uploads/2020/06/25June_1975_Delhi_rally-1.jpg" alt="Janata Party Rally" className="full-width-image" />
            
            <p>The period saw dramatic shifts in India's political landscape with the first non-Congress government and the rise of regional parties.</p>
            
            <div className="two-column">
              <div>
                <h3>Political Changes</h3>
                <ul>
                  <li><strong>Anti-Congressism:</strong> Emergence of viable opposition</li>
                  <li><strong>Regionalism:</strong> Rise of state-based parties</li>
                  <li><strong>Coalition Politics:</strong> End of single-party dominance</li>
                  <li><strong>Mandal Politics:</strong> OBC reservation implemented</li>
                  <li><strong>Communalism:</strong> Babri Masjid-Ram Janmabhoomi movement</li>
                </ul>
              </div>
              <img src="https://images.livemint.com/img/2019/08/14/original/Plainfacts_India-[Recovered]_web3_1565804277508.jpg" alt="Political Map" />
            </div>

            <div className="political-timeline-container">
              <h1 className="timeline-title">Timeline of Political Changes</h1>
              <div className="bookshelf">
                {postEmergencyEras.map((era, index) => (
                  <div 
                    key={index}
                    className="book" 
                    onClick={() => handleBookClick(era)}
                    style={{
                      transform: `rotate(${Math.random() * 6 - 3}deg)`
                    }}
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
                        <div className="book-border" style={{ borderColor: era.theme.borderColor }}></div>
                        <div className="modern-icon"></div>
                        
                        <div className="book-title" style={{ color: era.theme.titleColor }}>{era.title}</div>
                        <div className="book-period" style={{ color: era.theme.periodColor }}>{era.period}</div>
                        <div className="book-content" style={{ color: era.textColor }}>
                          <div style={{ fontSize: '16px', marginBottom: '5px' }}>{era.symbol}</div>
                          {era.shortDesc}
                        </div>
                        <div className="book-footer" style={{ color: era.theme.periodColor }}>Click to explore</div>
                      </div>
                      <div className="book-pages"></div>
                      <div className="book-side" style={{ background: era.theme.bookSide }}></div>
                      <div className="book-spine" style={{ background: era.theme.spine }}>
                        {era.title.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <h3>Key Political Figures</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201704/647_041017012724.jpg?size=1200:675" alt="Morarji Desai" />
                <p>Morarji Desai (Janata)</p>
              </div>
              <div className="image-card">
                <img src="https://www.thoughtco.com/thmb/PE7NX-WgsRGkluBMKBxtM6KR_gE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IndiraGandhi1983HultonGetty-56a042a63df78cafdaa0b882.jpg" alt="Indira Gandhi" />
                <p>Indira Gandhi (Congress)</p>
              </div>
              <div className="image-card">
                <img src="https://res.cloudinary.com/dkplc2mbj/image/upload/v1661750871/Rajiv_Gandhi_Congress_Sandesh_8a39aec172.jpg" alt="Rajiv Gandhi" />
                <p>Rajiv Gandhi (Congress)</p>
              </div>
            </div>
          </section>

          {/* Economy Section */}
          <section id="economy" className={`content-section ${activeTab === 'economy' ? 'active' : ''}`}>
            <h2>Economic Stagnation to Crisis</h2>
            <img src="https://images.cnbctv18.com/wp-content/uploads/2019/05/2019-05-02T050319Z_1_LYNXNPEF4103L_RTROPTP_4_INDIA-ECONOMY-RATES.jpg?impolicy=website&width=400&height=225" alt="Indian Factory" className="full-width-image" />
            
            <p>The Indian economy struggled with slow growth, fiscal deficits, and balance of payments problems before the 1991 reforms.</p>
            
            <div className="two-column">
              <img src="https://i.ebayimg.com/images/g/LeUAAOSwoDhlq3TE/s-l1200.jpg" alt="Indian Rupee" />
              <div>
                <h3>Economic Challenges</h3>
                <ul>
                  <li><strong>License Raj:</strong> Restrictive industrial policies</li>
                  <li><strong>Public Sector:</strong> Inefficient state enterprises</li>
                  <li><strong>Fiscal Deficit:</strong> Growing government debt</li>
                  <li><strong>Trade Deficit:</strong> Import restrictions failing</li>
                  <li><strong>Oil Shocks:</strong> 1979 and 1990 crises</li>
                  <li><strong>Forex Crisis:</strong> 1991 reserves collapse</li>
                </ul>
              </div>
            </div>
            
            <h3>Economic Indicators</h3>
            <div className="stats-container">
              <div className="stat-card">
                <div className="number">3.5%</div>
                <div className="unit">avg growth</div>
                <h4>1970s-1980s</h4>
              </div>
              <div className="stat-card">
                <div className="number">8.5%</div>
                <div className="unit">fiscal deficit</div>
                <h4>of GDP (1991)</h4>
              </div>
              <div className="stat-card">
                <div className="number">$1.2B</div>
                <div className="unit">forex reserves</div>
                <h4>June 1991</h4>
              </div>
              <div className="stat-card">
                <div className="number">200%</div>
                <div className="unit">debt-to-GDP</div>
                <h4>External debt (1991)</h4>
              </div>
            </div>
            
            <h3>Economic Policy Changes</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://www.policycircle.org/wp-content/uploads/2021/10/industrial-policy-100.jpg" alt="Indian Industry" />
                <p>Industrial Sector</p>
              </div>
              <div className="image-card">
                <img src="https://static.pib.gov.in/WriteReadData/userfiles/image/image0025ZGD.png" alt="Indian Agriculture" />
                <p>Agriculture</p>
              </div>
              <div className="image-card">
                <img src="https://m.economictimes.com/photo/53407959.cms" alt="Indian Bank" />
                <p>Banking Sector</p>
              </div>
            </div>
          </section>

          {/* Foreign Relations Section */}
          <section id="foreign" className={`content-section ${activeTab === 'foreign' ? 'active' : ''}`}>
            <h2>Changing Foreign Policy</h2>
            <img src="https://img.sputnikimages.com/images/vol1%2Fmedia%2Foriginal%2Fold%2F76%2F44%2F764457_hires_0%3A0%3A0%3A0_1400x1000_80_10_1_WXVyeWkgQWJyYW1vY2hraW4gIzc2NDQ1Nw%3D%3D_116%3A95_764457-eng_sputnik-764457-preview_faac92b6baae185c9c7d2249d45db059.jpg" alt="Indira with Brezhnev" className="full-width-image" />
            
            <p>India navigated the Cold War while developing relations with both superpowers and neighboring countries.</p>
            
            <div className="two-column">
              <div>
                <h3>Key Foreign Policy Events</h3>
                <ul>
                  <li><strong>Non-Alignment:</strong> Continued Cold War balancing</li>
                  <li><strong>Soviet Ties:</strong> Strong relations with USSR</li>
                  <li><strong>US Relations:</strong> Improving but complex</li>
                  <li><strong>SAARC:</strong> Founded in 1985</li>
                  <li><strong>Peacekeeping:</strong> Active UN role</li>
                  <li><strong>Neighborhood:</strong> Tensions with Pakistan, China</li>
                </ul>
              </div>
              <img src="https://pbs.twimg.com/media/ETI6OBvUEAET_Xx.jpg" alt="SAARC Summit" />
            </div>
            
            <h3>Major Diplomatic Events</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://cdn.imago-images.com/bild/st/0054099595/s.jpg" alt="Indira-Brezhnev" />
                <p>Soviet Relations</p>
              </div>
              <div className="image-card">
                <img src="https://i.ytimg.com/vi/0nhbe5Sv4hs/sddefault.jpg" alt="Rajiv-Reagan" />
                <p>US Relations</p>
              </div>
              <div className="image-card">
                <img src="https://indiafoundation.in/wp-content/uploads/2022/07/10.-Picture-for-AS-Kalkat-Article-1568x878.png" alt="IPKF" />
                <p>Sri Lanka Intervention</p>
              </div>
            </div>
          </section>

          {/* Society & Culture Section */}
          <section id="culture" className={`content-section ${activeTab === 'culture' ? 'active' : ''}`}>
            <h2>Social Transformations</h2>
            <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2016/10/28/Photos/Processed/ddshows-kzAD--621x414@LiveMint.jpg" alt="Doordarshan" className="full-width-image" />
            
            <p>Indian society underwent significant changes with the spread of television, rise of middle class, and social movements.</p>
            
            <div className="two-column">
              <img src="https://d3pc1xvrcw35tl.cloudfront.net/sm/images/686x514/ramanand-sagar-ramayan-telecast-on-tv-from-july-3_202306270709.jpg" alt="Ramayan TV" />
              <div>
                <h3>Cultural Developments</h3>
                <ul>
                  <li><strong>Television:</strong> Doordarshan expansion</li>
                  <li><strong>Cinema:</strong> Parallel cinema movement</li>
                  <li><strong>Literature:</strong> Regional language growth</li>
                  <li><strong>Music:</strong> Cassette culture revolution</li>
                  <li><strong>Sports:</strong> Cricket mania grows</li>
                  <li><strong>Fashion:</strong> Western influences</li>
                </ul>
              </div>
            </div>
            
            <h3>Social Changes</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://th-i.thgim.com/public/incoming/ynhjir/article69159058.ece/alternates/FREE_1200/iStock-1293831268.jpg" alt="Middle Class" />
                <p>Growing Middle Class</p>
              </div>
              <div className="image-card">
                <img src="https://vintageindianclothing.com/wp-content/uploads/2012/10/tumblr_mblznpilgj1ry4cywo1_1280.jpg" alt="Women" />
                <p>Changing Women's Roles</p>
              </div>
              <div className="image-card">
                <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb58ded0f-4007-4abb-9311-9a32a7e4a82b_5013x3342.jpeg" alt="Youth" />
                <p>Youth Culture</p>
              </div>
            </div>
          </section>

          {/* 1991 Reforms Section */}
          <section id="reforms" className={`content-section ${activeTab === 'reforms' ? 'active' : ''}`}>
            <h2>The 1991 Economic Reforms</h2>
            <img src="https://images.yourstory.com/cs/wordpress/2016/09/Manmohan-Singh.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75" alt="Manmohan Singh" className="full-width-image" />
            
            <p>The 1991 economic crisis became the catalyst for transformative reforms that opened India's economy to the world.</p>
            
            <div className="two-column">
              <div>
                <h3>Key Reform Measures</h3>
                <ul>
                  <li><strong>Liberalization:</strong> Reduced license requirements</li>
                  <li><strong>Privatization:</strong> Reduced public sector role</li>
                  <li><strong>Globalization:</strong> Opened to foreign investment</li>
                  <li><strong>Fiscal Reforms:</strong> Reduced deficits</li>
                  <li><strong>Trade Reforms:</strong> Lowered tariffs</li>
                  <li><strong>Financial Reforms:</strong> Banking sector changes</li>
                </ul>
              </div>
              <img src="https://indiabefore91.in/sites/default/files/miscfiles/indias-gdp-at-factor-cost.jpg" alt="Economic Growth" />
            </div>
            
            <h3>Reform Impact</h3>
            <div className="stats-container">
              <div className="stat-card">
                <div className="number">7%</div>
                <div className="unit">avg GDP growth</div>
                <h4>Post-reform period</h4>
              </div>
              <div className="stat-card">
                <div className="number">300%</div>
                <div className="unit">increase</div>
                <h4>Foreign investment</h4>
              </div>
              <div className="stat-card">
                <div className="number">50%</div>
                <div className="unit">reduction</div>
                <h4>Poverty rates</h4>
              </div>
              <div className="stat-card">
                <div className="number">$600B</div>
                <div className="unit">GDP</div>
                <h4>By 2000</h4>
              </div>
            </div>
            
            <h3>Reform Architects</h3>
            <div className="image-container">
              <div className="image-card">
                <img src="https://images.moneycontrol.com/static-mcnews/2018/06/PV-Narasimha-rao.jpg?impolicy=website&width=1600&height=900" alt="Narasimha Rao" />
                <p>P.V. Narasimha Rao</p>
              </div>
              <div className="image-card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/676d87bbba1fe-manmohan-singh-served-as-prime-minister-from-2004-to-2014-264333889-16x9.jpg" alt="Manmohan Singh" />
                <p>Manmohan Singh</p>
              </div>
              <div className="image-card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66f2b40f6d1b4-montek-singh-ahluwalia--former-deputy-chairman-of-the-planning-commission-24435870-16x9.jpg?size=1200:675" alt="Montek Ahluwalia" />
                <p>Montek Ahluwalia</p>
              </div>
            </div>
          </section>
        </div>

        <footer>
          <div className="container">
            <h3>India's Economic Transformation</h3>
            <p>The period from 1977 to 1991 set the stage for India's emergence as a global economic power in the 21st century.</p>
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">Timeline</a>
              <a href="#">Economy</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <p>&copy; 2023 Modern India. Documenting India's journey since independence.</p>
          </div>
        </footer>

        {/* Modal */}
        {showModal && selectedEra && (
          <div className="modal">
            <div className="modal-content">
              <span 
                className="close" 
                onClick={closeModal}
                style={{
                  color: selectedEra.theme.modalHeader,
                  borderColor: selectedEra.theme.modalBorder,
                }}
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
                  background: 'rgba(255,255,255,0.8)',
                }}
              >
                {selectedEra.description}
              </p>
              <div 
                className="modal-events"
                style={{
                  background: 'rgba(255,255,255,0.9)',
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
                    <li 
                      key={index}
                      style={{
                        borderBottomColor: `rgba(${hexToRgb(selectedEra.theme.modalBorder)}, 0.3)`,
                        color: selectedEra.textColor,
                      }}
                    >
                      {event}
                    </li>
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

export default PostEmergency_Interactive;
