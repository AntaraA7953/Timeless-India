import React, { useState, useEffect } from 'react';

interface MughalEra {
  title: string;
  period: string;
  description: string;
  shortDesc: string;
  events: string[];
  color: string;
  symbol: string;
}

const MughalEmpire: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEra, setSelectedEra] = useState<MughalEra | null>(null);

  const mughalEras: MughalEra[] = [
    {
      title: "Foundation Era",
      period: "1526-1556 CE",
      description: "The dawn of Mughal rule in India began with Babur's decisive victory at Panipat. This turbulent period established Mughal dominance in North India while artfully blending Central Asian and Indian traditions. The empire's foundations were laid through brilliant military conquests and innovative administrative systems that would shape South Asia for centuries.",
      shortDesc: "The dawn of Mughal rule began with Babur's victory at Panipat, establishing a new empire blending Central Asian and Indian traditions.",
      events: [
        "1526: First Battle of Panipat - Babur defeats Ibrahim Lodi",
        "1527: Battle of Khanwa against Rana Sanga",
        "1530: Death of Babur, Humayun ascends to throne",
        "1540: Sher Shah Suri defeats Humayun",
        "1555: Humayun miraculously regains Delhi",
        "1556: Young Akbar becomes emperor at just 13"
      ],
      color: "#D4A762",
      symbol: "⚔️"
    },
    {
      title: "Akbar's Golden Age",
      period: "1556-1605 CE",
      description: "Akbar's visionary reign transformed the Mughal Empire into a multicultural powerhouse of art, science, and governance. His revolutionary policies of religious tolerance and administrative efficiency created unprecedented stability across the subcontinent. Under his patronage, the empire flourished artistically and intellectually, becoming the world's wealthiest and most sophisticated kingdom of its time.",
      shortDesc: "Akbar's reign transformed the empire through religious tolerance and administrative genius, creating a multicultural golden age.",
      events: [
        "1562: Abolition of Jizya tax on non-Muslims",
        "1571: Founding of Fatehpur Sikri as imperial capital",
        "1575: Establishment of Ibadat Khana for interfaith dialogue",
        "1582: Introduction of Din-i-Ilahi syncretic philosophy",
        "1601: Annexation of Khandesh and Berar",
        "1605: Death of Akbar after 49-year reign"
      ],
      color: "#B8860B",
      symbol: "👑"
    },
    {
      title: "Jahangir & Shah Jahan",
      period: "1605-1658 CE",
      description: "This magnificent era saw the Mughal Empire reach its aesthetic zenith under two remarkable rulers. While Jahangir focused on natural history and painting, Shah Jahan became history's greatest imperial builder. Their reigns produced timeless architectural marvels like the Taj Mahal, though the empire's vast construction projects began straining its legendary wealth.",
      shortDesc: "The empire's aesthetic peak produced timeless architectural marvels like the Taj Mahal.",
      events: [
        "1611: Nur Jahan marries Jahangir, becoming influential empress",
        "1627: Death of Jahangir, Shah Jahan ascends the Peacock Throne",
        "1631: Mumtaz Mahal dies, Taj Mahal construction begins",
        "1636: Formalization of Deccan policy",
        "1648: Completion of Delhi's Red Fort and Jama Masjid",
        "1657: Devastating war of succession begins"
      ],
      color: "#CD853F",
      symbol: "🏰"
    },
    {
      title: "Aurangzeb's Expansion",
      period: "1658-1707 CE",
      description: "Aurangzeb expanded the empire to its greatest territorial extent through relentless military campaigns. His orthodox Islamic policies and endless wars drained the imperial treasury and alienated many subjects. Despite his personal austerity and devotion, his 49-year reign marked the beginning of the empire's gradual decline, sowing seeds that would eventually lead to fragmentation.",
      shortDesc: "Aurangzeb expanded the empire to its greatest size, but planted seeds of decline.",
      events: [
        "1669: Controversial temple destruction orders issued",
        "1675: Execution of Sikh Guru Tegh Bahadur",
        "1686-87: Annexation of Bijapur and Golconda sultanates",
        "1699: Reintroduction of Jizya tax on non-Muslims",
        "1707: Death of Aurangzeb at age 89 after 49-year reign",
        "1707: Empire begins rapid fragmentation after his death"
      ],
      color: "#8B4513",
      symbol: "🕌"
    },
    {
      title: "Decline & Fall",
      period: "1707-1857 CE",
      description: "After Aurangzeb's death, the mighty empire fragmented rapidly under a series of weak successors. Regional powers like the Marathas and European trading companies filled the growing power vacuum. The last Mughals became British puppets before the dynasty's formal end following the failed 1857 Rebellion, marking the close of a glorious 331-year chapter in Indian history.",
      shortDesc: "Weak successors led to fragmentation, with the British eventually ending Mughal rule.",
      events: [
        "1739: Catastrophic sack of Delhi by Nadir Shah",
        "1761: Third Battle of Panipat halts Maratha expansion",
        "1765: Grant of Diwani rights to British East India Company",
        "1803: British occupation of Delhi begins",
        "1857: Last Mughal emperor Bahadur Shah II exiled after failed rebellion",
        "1858: British Crown formally assumes control of India"
      ],
      color: "#5E2C04",
      symbol: "🏴"
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
  };

  const handleBookClick = (era: MughalEra) => {
    setSelectedEra(era);
  };

  const closeModal = () => {
    setSelectedEra(null);
  };

  useEffect(() => {
    if (selectedEra) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEra]);

  return (
    <div className="mughal-empire">
      <style>{`
        :root {
          --mogul-red: #800020;
          --jade-green: #00A86B;
          --gold-leaf: #D4AF37;
          --lapis-blue: #26619C;
          --text-color: #333333;
          --light-bg: #F8F4E9;
          --primary-color: var(--mogul-red);
          --secondary-color: var(--jade-green);
          --accent-color: var(--gold-leaf);
          --section-heading: var(--lapis-blue);
          --sub-heading: var(--mogul-red);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .mughal-empire {
          font-family: 'Poppins', 'Open Sans', sans-serif;
          background-color: var(--light-bg);
          color: var(--text-color);
          line-height: 1.7;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        /* Header Styles */
        .header {
          background: linear-gradient(135deg, var(--mogul-red), var(--gold-leaf), var(--jade-green));
          color: white;
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
          background: url('https://t3.ftcdn.net/jpg/06/75/24/26/360_F_675242606_LzN99fbAsPnOPRnkT5ILQCzSVxg1Zak0.jpg') center/cover;
          opacity: 0.5;
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
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .header p {
          font-size: 1.4rem;
          max-width: 800px;
          margin: 0 auto 1.5rem;
          color: white;
          font-weight: 500;
        }

        /* Navigation Tabs */
        .nav-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .nav-tab {
          padding: 1rem 2rem;
          background: white;
          border: 2px solid var(--mogul-red);
          color: var(--mogul-red);
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-tab:hover,
        .nav-tab.active {
          background: var(--mogul-red);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(128, 0, 32, 0.3);
        }

        /* Content Sections */
        .content-section {
          display: none;
          padding: 3rem;
          animation: fadeIn 0.5s ease-in-out;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          margin: 2rem 0;
          position: relative;
          overflow: hidden;
        }

        .content-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--mogul-red), var(--gold-leaf), var(--jade-green));
          border-radius: 20px 20px 0 0;
        }

        .content-section.active {
          display: block;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .content-section h2 {
          color: var(--section-heading);
          font-size: 2.8rem;
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
          height: 4px;
          background: linear-gradient(135deg, var(--gold-leaf), var(--jade-green));
          border-radius: 2px;
        }

        .content-section h3 {
          color: var(--sub-heading);
          font-size: 1.8rem;
          margin: 2rem 0 1rem 0;
          position: relative;
          padding-left: 2rem;
        }

        .content-section h3::before {
          content: "❖";
          position: absolute;
          left: 0;
          color: var(--gold-leaf);
          font-size: 1.5rem;
        }

        .content-section p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          text-align: justify;
        }

        .content-section ul,
        .content-section ol {
          margin-left: 2rem;
          margin-bottom: 1.5rem;
        }

        .content-section li {
          margin-bottom: 0.8rem;
          position: relative;
          padding-left: 1rem;
        }

        .content-section li::before {
          content: "→";
          position: absolute;
          left: -1rem;
          color: var(--jade-green);
          font-weight: bold;
        }

        /* Image Styles */
        .full-width-image {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 15px;
          margin: 2rem 0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin: 3rem 0;
          align-items: center;
          background: rgba(255, 255, 255, 0.6);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(212, 175, 55, 0.1);
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

        .image-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .image-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid rgba(212, 175, 55, 0.15);
          backdrop-filter: blur(5px);
        }

        .image-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(128,0,32,0.2);
          border-color: rgba(212, 175, 55, 0.4);
        }

        .image-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .image-card p {
          padding: 1rem;
          margin: 0;
          font-weight: 600;
          color: var(--mogul-red);
          text-align: center;
        }

        /* Stats Cards */
        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          text-align: center;
          border-top: 4px solid var(--gold-leaf);
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(212, 175, 55, 0.15);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          border-color: rgba(212, 175, 55, 0.4);
        }

        .stat-card h4 {
          color: var(--mogul-red);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .stat-card .number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--jade-green);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-card .unit {
          color: var(--mogul-red);
          font-size: 1rem;
        }

        /* Book Chronicles Section */
        .chronicles-header {
          text-align: center;
          margin-bottom: 2rem;
          padding: 2rem;
          background: rgba(255,255,255,0.95);
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(212, 175, 55, 0.15);
        }

        .chronicles-header h1 {
          color: #4a3a1a;
          font-family: 'Times New Roman', serif;
          text-shadow: 1px 1px 2px rgba(255,255,255,0.5);
          font-size: 2.2rem;
          letter-spacing: 1px;
          border-bottom: 3px solid #d4b872;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }

        .bookshelf {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 30px 0;
          margin: 2rem 0;
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

        .book-front,
        .book-side,
        .book-pages {
          position: absolute;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 2px 6px 6px 2px;
          box-shadow: inset 0 0 15px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.1);
        }

        .book-front {
          width: calc(100% - 8px);
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.9) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          padding: 15px 12px;
          transform: translateZ(10px);
          color: #3a2c0e;
          font-weight: bold;
          background-blend-mode: overlay;
          left: 0;
          overflow: hidden;
        }

        .book-side {
          background: linear-gradient(to right, #2c1d07, #4a3a1a);
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
          background: linear-gradient(to bottom, #2c1d07, #4a3a1a);
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
          color: #5E2C04;
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
          background: linear-gradient(to right, transparent, #d4b872, transparent);
        }

        .book-period {
          font-size: 11px;
          font-weight: normal;
          font-style: italic;
          color: #8B4513;
          margin-bottom: 8px;
          z-index: 2;
        }

        .book-content {
          font-size: 9px;
          line-height: 1.4;
          color: #5e4a21;
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
          color: #8B4513;
          font-style: italic;
          margin-top: auto;
          z-index: 2;
        }

        .era-symbol {
          font-size: 16px;
          margin-bottom: 5px;
        }

        /* Modal Styles */
        .modal {
          display: ${selectedEra ? 'flex' : 'none'};
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
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          border: 1px solid #d4b872;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          background-image: 
            linear-gradient(to bottom, rgba(249, 245, 233, 0.9), rgba(240, 230, 204, 0.9)),
            url('https://i.imgur.com/YQzGkfL.png');
          background-size: 300px;
          background-repeat: no-repeat;
          background-position: right bottom;
          background-blend-mode: overlay;
          animation: fadeIn 0.4s ease-out;
        }

        .modal-header {
          position: relative;
          padding-bottom: 15px;
          margin-bottom: 25px;
          border-bottom: 2px solid #d4b872;
        }

        .modal-header:after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100px;
          height: 3px;
          background: #8B4513;
        }

        .modal-title {
          color: #5E2C04;
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
          background: linear-gradient(to right, #d4b872, transparent);
        }

        .modal-period {
          color: #8B4513;
          font-style: italic;
          font-size: 1.2rem;
          margin: 0;
          font-weight: 500;
        }

        .modal-description {
          line-height: 1.8;
          font-size: 1.1rem;
          color: #3a2c0e;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(255,255,255,0.6);
          border-left: 4px solid #d4b872;
          position: relative;
          border-radius: 0 5px 5px 0;
        }

        .modal-description:before {
          content: """;
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 70px;
          color: rgba(212, 184, 114, 0.2);
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
          background: linear-gradient(to right, #8B4513, #d4b872, #8B4513);
        }

        .modal-events h3 {
          color: #5E2C04;
          font-family: 'Times New Roman', serif;
          font-size: 1.4rem;
          margin: 5px 0 20px 0;
          padding-bottom: 8px;
          border-bottom: 1px dashed #d4b872;
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
          border-bottom: 1px solid rgba(212, 184, 114, 0.3);
          position: relative;
          padding-left: 30px;
          font-size: 1rem;
          break-inside: avoid;
          transition: all 0.3s ease;
        }

        .modal-events li:hover {
          background: rgba(212, 184, 114, 0.1);
          transform: translateX(5px);
        }

        .modal-events li:before {
          content: "❖";
          color: #8B4513;
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
          color: #8B4513;
          transition: all 0.3s;
          background: rgba(255,255,255,0.7);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #d4b872;
        }

        .close:hover {
          transform: rotate(90deg);
          color: #5E2C04;
          background: rgba(212, 184, 114, 0.3);
        }

        .era-symbol-modal {
          font-size: 24px;
          margin-bottom: 15px;
          display: inline-block;
          background: rgba(212, 184, 114, 0.2);
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          text-align: center;
        }

        /* Footer */
        .footer {
          background: linear-gradient(135deg, var(--mogul-red), var(--lapis-blue));
          color: white;
          text-align: center;
          padding: 4rem 0;
          margin-top: 3rem;
          border-radius: 20px 20px 0 0;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Red_Fort_in_Delhi_03-2016_img3.jpg/1200px-Red_Fort_in_Delhi_03-2016_img3.jpg') center/cover;
          opacity: 0.1;
          z-index: 0;
        }

        .footer .container {
          position: relative;
          z-index: 1;
        }

        .footer p {
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

        /* Responsive Design */
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
            padding: 2rem 0;
          }
          
          .two-column {
            grid-template-columns: 1fr;
          }
          
          .image-container,
          .stats-container {
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

      <header className="header">
        <div className="container">
          <h1>The Mughal Empire</h1>
          <p>1526-1857: India's Islamic Golden Age</p>
          <p>From Babur's conquest to British takeover - 331 years of splendor</p>
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
            className={`nav-tab ${activeTab === 'emperors' ? 'active' : ''}`}
            onClick={() => handleTabClick('emperors')}
          >
            Great Emperors
          </button>
          <button 
            className={`nav-tab ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => handleTabClick('architecture')}
          >
            Architecture
          </button>
          <button 
            className={`nav-tab ${activeTab === 'culture' ? 'active' : ''}`}
            onClick={() => handleTabClick('culture')}
          >
            Art & Culture
          </button>
          <button 
            className={`nav-tab ${activeTab === 'economy' ? 'active' : ''}`}
            onClick={() => handleTabClick('economy')}
          >
            Economy
          </button>
          <button 
            className={`nav-tab ${activeTab === 'legacy' ? 'active' : ''}`}
            onClick={() => handleTabClick('legacy')}
          >
            Legacy
          </button>
        </div>

        {/* Overview Section */}
        <section id="overview" className={`content-section ${activeTab === 'overview' ? 'active' : ''}`}>
          <h2>India Under Mughal Rule</h2>
          <img src="https://static.memorients.com/assets/images/mughal/mughal-map1200w.jpg" alt="Mughal Empire Map" className="full-width-image" />
          
          <p>The Mughal Empire was an early modern Islamic empire that ruled most of the Indian subcontinent from 1526 to 1857, known for its administrative efficiency, cultural achievements, and architectural wonders.</p>
          
          <div className="two-column">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/The_Padshahnama%2C_imperial_court_guards_and_nobles.jpg/250px-The_Padshahnama%2C_imperial_court_guards_and_nobles.jpg" alt="Mughal Army" />
            <div>
              <h3>Key Features</h3>
              <ul>
                <li>Advanced administrative system</li>
                <li>Religious tolerance under Akbar</li>
                <li>Architectural innovations</li>
                <li>Cultural synthesis</li>
                <li>Economic prosperity</li>
              </ul>
            </div>
          </div>
          
          <h3>Empire by Numbers</h3>
          <div className="stats-container">
            <div className="stat-card">
              <div className="number">331</div>
              <div className="unit">years</div>
              <h4>Empire Duration</h4>
            </div>
            <div className="stat-card">
              <div className="number">4M</div>
              <div className="unit">km²</div>
              <h4>Peak Territory</h4>
            </div>
            <div className="stat-card">
              <div className="number">158M</div>
              <div className="unit">people</div>
              <h4>Peak Population</h4>
            </div>
            <div className="stat-card">
              <div className="number">25%</div>
              <div className="unit">global GDP</div>
              <h4>Economic Share</h4>
            </div>
          </div>
          
          <h3>Historical Sources</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Basawan_-_The_Young_Emperor_Akbar_Arrests_the_Insolent_Shah_Abu%E2%80%99l-Maali%2C_page_from_a_manuscript_of_the_Akbarnama_-_1919.898_-_Art_Institute_of_Chicago.jpg" alt="Ain-i-Akbari" />
              <p>Ain-i-Akbari (Administrative record)</p>
            </div>
            <div className="image-card">
              <img src="https://www.shutterstock.com/image-photo/babar-nama-book-great-mughal-600nw-2378693569.jpg" alt="Baburnama" />
              <p>Baburnama (Babur's memoirs)</p>
            </div>
          </div>
        </section>

        {/* Great Emperors Section */}
        <section id="emperors" className={`content-section ${activeTab === 'emperors' ? 'active' : ''}`}>
          <h2>The Great Mughals</h2>
          <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/Mughal_emperors.jpeg?VersionId=m7oeNhZeSqbMpe2pI6WCX4.x3vyCyjak" alt="Mughal Emperors" className="full-width-image" />
          
          <p>The "Great Mughals" were the six most effective emperors who built and sustained the empire at its height.</p>
          
          <div className="two-column">
            <div>
              <h3>Major Rulers</h3>
              <ol>
                <li>Babur (1526-1530) - Founder</li>
                <li>Humayun (1530-1556) - Struggle & Recovery</li>
                <li>Akbar (1556-1605) - The Great</li>
                <li>Jahangir (1605-1627) - Patron of Arts</li>
                <li>Shah Jahan (1628-1658) - Builder</li>
                <li>Aurangzeb (1658-1707) - Expansion</li>
              </ol>
            </div>
            <img src="https://i.redd.it/5txm3lqtgkic1.png" alt="Mughal Family Tree" />
          </div>
          
          <div className="chronicles-header">
            <h1>The Mughal Empire Chronicles</h1>
          </div>
          
          <div className="bookshelf">
            {mughalEras.map((era, index) => (
              <div 
                key={index}
                className="book" 
                onClick={() => handleBookClick(era)}
                style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
              >
                <div className="book-cover">
                  <div 
                    className="book-front" 
                    style={{ backgroundColor: era.color }}
                  >
                    <div className="book-title">{era.title}</div>
                    <div className="book-period">{era.period}</div>
                    <div className="book-content">
                      <div className="era-symbol">{era.symbol}</div>
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
          
          <h3>Mughal Treasures</h3>
          <div className="two-column">
            <div>
              <h4>The Peacock Throne</h4>
              <p>Commissioned by Shah Jahan in 1635, this magnificent throne took 7 years to build. It featured:</p>
              <ul>
                <li>Gold platform with 12 emerald pillars</li>
                <li>1300kg of gold and 230kg of precious stones</li>
                <li>Two peacock statues with jeweled tails</li>
                <li>The famous Kohinoor diamond in one peacock's head</li>
                <li>Looted by Persian invader Nadir Shah in 1739</li>
              </ul>
              
              <h4>The Kohinoor Diamond</h4>
              <p>Originally mined in India, this legendary diamond:</p>
              <ul>
                <li>Weighed 793 carats in its uncut form</li>
                <li>Passed through Mughal, Persian, Afghan, and Sikh rulers</li>
                <li>Acquired by British in 1849 after Anglo-Sikh wars</li>
                <li>Now part of British Crown Jewels (cut to 105.6 carats)</li>
              </ul>
            </div>
            <div>
              <h4>Other Famous Valuables</h4>
              <ul>
                <li><strong>Timur Ruby:</strong> 352-carat spinel now in British Crown</li>
                <li><strong>Darya-i-Noor:</strong> 182-carat pink diamond from Peacock Throne</li>
                <li><strong>Shah Diamond:</strong> 88.7-carat diamond with engraved names of Mughal rulers</li>
                <li><strong>Jahangir's Jade Cup:</strong> Carved from single jade block with floral designs</li>
                <li><strong>Golden Thrones:</strong> Several ornate thrones used by different emperors</li>
                <li><strong>Treasury:</strong> Estimated worth $1 trillion at peak (adjusted for inflation)</li>
              </ul>
              
              <div className="image-card" style={{ marginTop: '20px' }}>
                <img src="https://historified.in/wp-content/uploads/2024/01/d45de226924d96a78fa3ff901a869b43-736x560.jpg" alt="Peacock Throne Reconstruction" />
                <p>Reconstruction of the Peacock Throne</p>
              </div>
            </div>
          </div>
          
          <h3>Emperor Portraits</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://www.dailypioneer.com/uploads/2018/story/images/big/revisiting-the-ways-of-akbar-2018-10-07.jpg" alt="Akbar" />
              <p>Akbar the Great</p>
            </div>
            <div className="image-card">
              <img src="https://gowithharry.com/wp-content/uploads/2024/05/Shah-Jahan-Madras-Courier-06.jpg" alt="Shah Jahan" />
              <p>Shah Jahan</p>
            </div>
            <div className="image-card">
              <img src="https://assets.telegraphindia.com/telegraph/2025/Mar/1742308201_aurangzeb.jpg" alt="Aurangzeb" />
              <p>Aurangzeb</p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className={`content-section ${activeTab === 'architecture' ? 'active' : ''}`}>
          <h2>Architectural Marvels</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg" alt="Taj Mahal" className="full-width-image" />
          
          <p>Mughal architecture represents the zenith of Indo-Islamic design, blending Persian, Indian and Central Asian elements.</p>
          
          <div className="two-column">
            <img src="https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2023/08/red-fort.jpg" alt="Red Fort" />
            <div>
              <h3>Key Features</h3>
              <ul>
                <li><strong>Char Bagh:</strong> Symmetrical gardens</li>
                <li><strong>Chhatris:</strong> Dome-shaped pavilions</li>
                <li><strong>Pietra Dura:</strong> Inlaid stonework</li>
                <li><strong>Jali:</strong> Ornamental screens</li>
                <li><strong>Bulbous Domes:</strong> Onion-shaped domes</li>
                <li><strong>Minarets:</strong> Tall slender towers</li>
              </ul>
            </div>
          </div>
          
          <h3>Iconic Structures</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://media.architecturaldigest.com/photos/67acb9b0339bcbaaadeb91b5/1:1/w_4000,h_4000,c_limit/GettyImages-873536102.jpg" alt="Taj Mahal" />
              <p>Taj Mahal (Agra)</p>
            </div>
            <div className="image-card">
              <img src="https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg" alt="Red Fort" />
              <p>Red Fort (Delhi)</p>
            </div>
            <div className="image-card">
              <img src="https://d37rmf1ynyg9aw.cloudfront.net/fit-in/1280x1280/data/v4/resources/images/328fc4ee-b6d6-4882-9e87-d7342b1b15bb.jpg" alt="Fatehpur Sikri" />
              <p>Fatehpur Sikri</p>
            </div>
          </div>
          
          <h3>Architectural Evolution</h3>
          <ul>
            <li><strong>Early Phase:</strong> Babur's gardens in Kabul style</li>
            <li><strong>Akbari Style:</strong> Red sandstone with Hindu elements</li>
            <li><strong>Shahjahani Style:</strong> White marble perfection</li>
            <li><strong>Aurangzeb Period:</strong> More austere designs</li>
            <li><strong>Provincial Styles:</strong> Bengal, Deccan variations</li>
          </ul>
        </section>

        {/* Art & Culture Section */}
        <section id="culture" className={`content-section ${activeTab === 'culture' ? 'active' : ''}`}>
          <h2>Cultural Synthesis</h2>
          <img src="https://www.getty.edu/360/event_images/mughal_lovers.jpg" alt="Mughal Painting" className="full-width-image" />
          
          <p>The Mughal court became a cosmopolitan center that patronized arts, literature and cultural exchange.</p>
          
          <div className="two-column">
            <div>
              <h3>Artistic Achievements</h3>
              <ul>
                <li><strong>Miniature Painting:</strong> Persian-inspired court scenes</li>
                <li><strong>Calligraphy:</strong> Quranic verses in architecture</li>
                <li><strong>Music:</strong> Development of Hindustani classical</li>
                <li><strong>Literature:</strong> Persian and regional languages</li>
                <li><strong>Cuisine:</strong> Royal Mughlai dishes</li>
                <li><strong>Textiles:</strong> Fine muslins and brocades</li>
              </ul>
            </div>
            <img src="https://nazmiyalantiquerugs.com/wp-content/uploads/2016/01/antique-17th-century-mughal-rug-8036-detail.jpg" alt="Mughal Carpet" />
          </div>
          
          <h3>Cultural Highlights</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/127026/294017/handmade%2Fdownscaled%2Fh_cdr4gx4lzq_2000x2000__31973.1711442958.jpg?c=2" alt="Miniature Painting" />
              <p>Miniature paintings</p>
            </div>
            <div className="image-card">
              <img src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/6057940598001/e8f8f249-1b63-48b2-b6e3-ff9032aae441/3e4bb294-e563-4ddf-a8e4-db65164f8bed/1280x720/match/image.jpg" alt="Mughal Jewelry" />
              <p>Exquisite jewelry</p>
            </div>
            <div className="image-card">
              <img src="https://preview.redd.it/mughal-emperor-akbars-armour-5000x5000-v0-be7z95u6jvra1.jpg?width=1080&crop=smart&auto=webp&s=b3b56fed6812a51e9bbd95e4270bc0009989a2dd" alt="Mughal Armor" />
              <p>Decorated arms and armor</p>
            </div>
          </div>
          
          <h3>Language & Literature</h3>
          <ul>
            <li>Persian as court language</li>
            <li>Development of Urdu</li>
            <li>Translation projects (Mahabharata, Ramayana)</li>
            <li>Historical chronicles (Akbarnama, etc.)</li>
            <li>Poetry in Persian and regional languages</li>
          </ul>
        </section>

        {/* Economy Section */}
        <section id="economy" className={`content-section ${activeTab === 'economy' ? 'active' : ''}`}>
          <h2>Economic Powerhouse</h2>
          <img src="https://i.etsystatic.com/17965841/r/il/657097/1778437746/il_fullxfull.1778437746_t72j.jpg" alt="Mughal Market" className="full-width-image" />
          
          <p>The Mughal Empire became the world's leading economic power, producing about 25% of global GDP.</p>
          
          <div className="two-column">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Avery_Chasing_the_Great_Mughal%27s_Ship.jpg" alt="Mughal Ship" />
            <div>
              <h3>Economic Features</h3>
              <ul>
                <li><strong>Agriculture:</strong> Cash crops like cotton, indigo</li>
                <li><strong>Manufacturing:</strong> Textiles, steel, shipbuilding</li>
                <li><strong>Trade:</strong> Exports to Europe, Middle East</li>
                <li><strong>Coinage:</strong> Standardized silver rupee</li>
                <li><strong>Taxation:</strong> Zabt system under Akbar</li>
                <li><strong>Infrastructure:</strong> Roads, caravanserais</li>
              </ul>
            </div>
          </div>
          
          <h3>Economic Indicators</h3>
          <div className="stats-container">
            <div className="stat-card">
              <div className="number">25%</div>
              <div className="unit">global GDP</div>
              <h4>Largest economy</h4>
            </div>
            <div className="stat-card">
              <div className="number">110M</div>
              <div className="unit">population</div>
              <h4>Under Akbar</h4>
            </div>
            <div className="stat-card">
              <div className="number">30%</div>
              <div className="unit">urbanization</div>
              <h4>Higher than Europe</h4>
            </div>
            <div className="stat-card">
              <div className="number">1.2M</div>
              <div className="unit">tonnes cotton</div>
              <h4>Annual production</h4>
            </div>
          </div>
          
          <h3>Trade Goods</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://media.licdn.com/dms/image/v2/C511BAQH4nK_KOsIaZg/company-background_10000/company-background_10000/0/1587189713396/mughal_textile_industries_cover?e=2147483647&v=beta&t=c7R80PgLrG5ktHystZrBGIsgFkA_k7VmuoUbEe31j6o" alt="Mughal Textiles" />
              <p>Fine textiles</p>
            </div>
            <div className="image-card">
              <img src="https://www.alphonsostories.com/AlphonSoStoriesImages/downloads/Indigo-Dyeing-Tradition-5.jpg" alt="Indigo" />
              <p>Indigo dye</p>
            </div>
            <div className="image-card">
              <img src="https://cdn.shopify.com/s/files/1/0030/9759/1872/files/1_ef009113-4a03-4e50-96df-a6650a8d540c.png?v=1640239161" alt="Spices" />
              <p>Spices</p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section id="legacy" className={`content-section ${activeTab === 'legacy' ? 'active' : ''}`}>
          <h2>Enduring Influence</h2>
          <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2019/07/Humayun-Tomb-Delhi.jpg" alt="Modern India" className="full-width-image" />
          
          <p>The Mughal legacy profoundly shaped modern South Asian culture, politics and identity.</p>
          
          <div className="two-column">
            <div>
              <h3>Lasting Contributions</h3>
              <ul>
                <li><strong>Administration:</strong> District governance model</li>
                <li><strong>Language:</strong> Development of Urdu/Hindi</li>
                <li><strong>Cuisine:</strong> Mughlai food traditions</li>
                <li><strong>Art:</strong> Miniature painting schools</li>
                <li><strong>Architecture:</strong> National symbols</li>
                <li><strong>Gardens:</strong> Char bagh landscaping</li>
              </ul>
            </div>
            <img src="https://cdn.thedecorjournalindia.com/wp-content/uploads/2024/08/1-8.jpg?strip=all&lossy=1&resize=1500%2C1000&ssl=1" alt="Modern Architecture" />
          </div>
          
          <h3>Modern Recognition</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://imagesvs.oneindia.com/img/2022/09/taj-mahal-1664353849.jpg" alt="Taj Visitors" />
              <p>Taj Mahal - Most visited site</p>
            </div>
            <div className="image-card">
              <img src="https://www.indiastrategic.in/wp-content/uploads/2024/08/FILE-PHOTO_PIC-46.jpg" alt="Military Ceremony" />
              <p>Red Fort - Independence Day venue</p>
            </div>
            <div className="image-card">
              <img src="https://thedispatch.blob.core.windows.net/thedispatchimages/2024/03/65e697c601c94-65e697c601c97Art-architecture-and-music-under-Sultan-and-Mughal-The-Dispatch.jpg.jpg" alt="Modern Art" />
              <p>Continued artistic influences</p>
            </div>
          </div>
          
          <h3>Decline Factors</h3>
          <ul>
            <li>Aurangzeb's religious policies</li>
            <li>Maratha and Sikh rebellions</li>
            <li>Nadir Shah's 1739 invasion</li>
            <li>British East India Company expansion</li>
            <li>1857 Rebellion and British takeover</li>
          </ul>
        </section>
      </div>

      <footer className="footer">
        <div className="container">
          <h3>India's Islamic Golden Age</h3>
          <p>The Mughal Empire left an indelible mark on Indian civilization, creating a cultural synthesis that defines modern South Asia.</p>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Timeline</a>
            <a href="#">Civilizations</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Twitter">📱</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">📺</a>
          </div>
          <p>&copy; 2023 Timeless India. Celebrating India's civilizational journey.</p>
        </div>
      </footer>

      {/* Modal */}
      {selectedEra && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-header">
              <div className="era-symbol-modal">{selectedEra.symbol}</div>
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
  );
};

export default MughalEmpire;
