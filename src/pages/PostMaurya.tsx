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

const PostMaurya: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEra, setSelectedEra] = useState<Era | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const postMauryanEras: Era[] = [
    {
      title: "Shunga Dynasty",
      period: "185-73 BCE",
      description: "The Shungas overthrew the Mauryans and ruled central and eastern India, reviving Brahmanical traditions while patronizing Buddhist monuments like the Great Stupa at Sanchi. They successfully resisted Greek invasions but gradually lost territory to the Kanvas.",
      shortDesc: "Brahmanical revivalists who protected India from Greek invasions while building Buddhist monuments.",
      events: [
        "185 BCE: Pushyamitra Shunga overthrows Mauryans",
        "Defeats Greek king Demetrius",
        "Revives Vedic sacrifices",
        "Patronizes Sanchi Stupa",
        "Loses western territories",
        "73 BCE: Overthrown by Kanva dynasty"
      ],
      color: "#8b78b5",
      symbol: "🕉️"
    },
    {
      title: "Indo-Greek Kingdoms",
      period: "180 BCE-10 CE",
      description: "Greek rulers like Menander I (Milinda) established kingdoms in northwest India, creating a unique Greco-Buddhist culture evident in Gandhara art. They introduced Hellenistic coinage and architectural elements while adopting local religions.",
      shortDesc: "Greek rulers who created the distinctive Greco-Buddhist culture of Gandhara.",
      events: [
        "180 BCE: Demetrius invades India",
        "155 BCE: Menander I rules Punjab",
        "Creates Gandhara art style",
        "Issues bilingual coins",
        "Adopts Buddhism (Milindapanha)",
        "Gradually absorbed by Scythians"
      ],
      color: "#6a5a8e",
      symbol: "🏺"
    },
    {
      title: "Satavahana Empire",
      period: "100 BCE-225 CE",
      description: "The Satavahanas dominated the Deccan and central India, reviving Vedic traditions while supporting Buddhist centers like Amaravati. Their long-distance trade and distinctive art style influenced southern India's development.",
      shortDesc: "Deccan power that connected north and south India through trade and culture.",
      events: [
        "100 BCE: Establish power in Deccan",
        "Develop Amaravati school of art",
        "Issue punch-marked coins",
        "Frequent conflicts with Western Kshatrapas",
        "Patronize Prakrit literature",
        "225 CE: Empire fragments"
      ],
      color: "#9370db",
      symbol: "🪙"
    },
    {
      title: "Kushan Empire",
      period: "30-375 CE",
      description: "The Kushans created a vast empire from Central Asia to the Ganges, becoming great patrons of Gandhara art and Mahayana Buddhism. Their rule saw flourishing trade along the Silk Road and the development of the Buddha image in art.",
      shortDesc: "Central Asian rulers who made Mathura and Peshawar centers of Buddhist art and trade.",
      events: [
        "78 CE: Kanishka begins his rule",
        "Convenes 4th Buddhist Council",
        "Develops Mathura art style",
        "Issues gold coins with deities",
        "Connects Silk Road trade",
        "375 CE: Overthrown by Gupta and Sassanids"
      ],
      color: "#5d4a7d",
      symbol: "🪔"
    },
    {
      title: "Sangam Age",
      period: "300 BCE-300 CE",
      description: "While not post-Mauryan in the north, the contemporary Sangam period in Tamilakam saw the flourishing of Tamil literature, trade with Rome, and the development of early Dravidian kingdoms like the Cholas, Cheras and Pandyas.",
      shortDesc: "Golden age of Tamil literature and trade with the Roman Empire.",
      events: [
        "Composition of Sangam literature",
        "Thriving Roman trade via ports",
        "Development of Tamil kingdoms",
        "Emergence of Bhakti movement",
        "Construction of early temples",
        "300 CE: Transition to Pallava period"
      ],
      color: "#4a3a6e",
      symbol: "📜"
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

  const handleEraClick = (era: Era) => {
    setSelectedEra(era);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEra(null);
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isModalOpen && (event.target as HTMLElement).className === 'modal') {
        closeModal();
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isModalOpen]);

  const styles = {
    root: {
      '--primary-bg': '#f8f6f3',
      '--text-primary': '#2c2c2c',
      '--indigo': '#4b0082',
      '--terracotta': '#cd853f',
      '--copper': '#b87333',
      '--sage': '#9caf88',
      '--cream': '#f5f2e9',
      '--section-heading': '#5d4e75',
      '--sub-heading': '#7b6d8d'
    } as React.CSSProperties
  };

  return (
    <div style={styles.root}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Open Sans', sans-serif;
          background: linear-gradient(135deg, var(--cream) 0%, #f0ebe5 100%);
          color: var(--text-primary);
          line-height: 1.6;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        header {
          background: linear-gradient(135deg, var(--indigo), var(--terracotta));
          color: white;
          padding: 5rem 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: 0 0 50px 50px;
          margin-bottom: 3rem;
        }

        header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://www.drishtiias.com/images/uploads/1571912707_image7.jpg') center/cover;
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
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          font-family: 'Poppins', sans-serif;
        }

        header p {
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          opacity: 0.95;
          font-weight: 300;
        }

        .header-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .header-links a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          padding: 0.8rem 1.5rem;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 30px;
          background-color: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }

        .header-links a:hover {
          background-color: rgba(255,255,255,0.2);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .nav-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          padding: 1rem;
          background: rgba(255,255,255,0.7);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .nav-tab {
          padding: 1rem 2rem;
          background: white;
          border: 2px solid var(--indigo);
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          color: var(--indigo);
          font-size: 1rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
          border-bottom: 3px solid var(--copper);
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
          background: var(--copper);
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
          color: var(--copper);
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
          box-shadow: 0 15px 30px rgba(75,0,130,0.2);
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
          border-top: 4px solid var(--copper);
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

        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 3rem auto;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: var(--copper);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
          border-radius: 3px;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
          box-sizing: border-box;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 25px;
          height: 25px;
          right: -12px;
          background-color: white;
          border: 4px solid var(--indigo);
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }

        .left {
          left: 0;
        }

        .right {
          left: 50%;
        }

        .left::before {
          content: " ";
          height: 0;
          position: absolute;
          top: 22px;
          width: 0;
          z-index: 1;
          right: 30px;
          border: medium solid var(--indigo);
          border-width: 10px 0 10px 10px;
          border-color: transparent transparent transparent var(--indigo);
        }

        .right::before {
          content: " ";
          height: 0;
          position: absolute;
          top: 22px;
          width: 0;
          z-index: 1;
          left: 30px;
          border: medium solid var(--indigo);
          border-width: 10px 10px 10px 0;
          border-color: transparent var(--indigo) transparent transparent;
        }

        .timeline-content {
          padding: 20px 30px;
          background-color: white;
          position: relative;
          border-radius: 6px;
          border: 1px solid var(--indigo);
        }

        footer {
          background: linear-gradient(135deg, var(--indigo), var(--terracotta));
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
          background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gandhara_Buddha.jpg/1200px-Gandhara_Buddha.jpg') center/cover;
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

        /* Interactive Timeline Styles */
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
          background: linear-gradient(135deg, rgba(250, 245, 255, 0.9) 0%, rgba(235, 230, 245, 0.9) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          padding: 15px 12px;
          transform: translateZ(10px);
          color: #4a3a5e;
          font-weight: bold;
          background-blend-mode: overlay;
          left: 0;
          overflow: hidden;
        }

        .book-side {
          background: linear-gradient(to right, #6a5a8e, #8b78b5);
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
          background: linear-gradient(to bottom, #5d4a7d, #7b68a5);
          transform: translateZ(-5px);
          border-radius: 2px 0 0 2px;
          color: #e8e0f5;
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
          color: #5d4a7d;
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
          background: linear-gradient(to right, transparent, #9370db, transparent);
        }

        .book-period {
          font-size: 11px;
          font-weight: normal;
          font-style: italic;
          color: #8b78b5;
          margin-bottom: 8px;
          z-index: 2;
        }

        .book-content {
          font-size: 9px;
          line-height: 1.4;
          color: #6a5a8e;
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
          color: #8b78b5;
          font-style: italic;
          margin-top: auto;
          z-index: 2;
        }

        .era-symbol {
          font-size: 16px;
          margin-bottom: 5px;
          display: inline-block;
          background: rgba(147, 112, 219, 0.2);
          width: 30px;
          height: 30px;
          line-height: 30px;
          border-radius: 50%;
          text-align: center;
        }

        .modal {
          display: none;
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

        .modal.open {
          display: flex;
        }

        .modal-content {
          background: #f9f5ff;
          padding: 40px;
          border-radius: 8px;
          max-width: 700px;
          width: 85%;
          position: relative;
          border: 1px solid #9370db;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          background-image: 
            linear-gradient(to bottom, rgba(249, 245, 255, 0.9), rgba(240, 235, 250, 0.9)),
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
          border-bottom: 2px solid #9370db;
        }

        .modal-header:after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100px;
          height: 3px;
          background: #6a5a8e;
        }

        .modal-title {
          color: #5d4a7d;
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
          background: linear-gradient(to right, #9370db, transparent);
        }

        .modal-period {
          color: #8b78b5;
          font-style: italic;
          font-size: 1.2rem;
          margin: 0;
          font-weight: 500;
        }

        .modal-description {
          line-height: 1.8;
          font-size: 1.1rem;
          color: #5d4a7d;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(255,255,255,0.6);
          border-left: 4px solid #9370db;
          position: relative;
          border-radius: 0 5px 5px 0;
        }

        .modal-description:before {
          content: """;
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 70px;
          color: rgba(147, 112, 219, 0.2);
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
          background: linear-gradient(to right, #6a5a8e, #9370db, #6a5a8e);
        }

        .modal-events h3 {
          color: #5d4a7d;
          font-family: 'Times New Roman', serif;
          font-size: 1.4rem;
          margin: 5px 0 20px 0;
          padding-bottom: 8px;
          border-bottom: 1px dashed #9370db;
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
          border-bottom: 1px solid rgba(147, 112, 219, 0.3);
          position: relative;
          padding-left: 30px;
          font-size: 1rem;
          break-inside: avoid;
          transition: all 0.3s ease;
        }

        .modal-events li:hover {
          background: rgba(147, 112, 219, 0.1);
          transform: translateX(5px);
        }

        .modal-events li:before {
          content: "❖";
          color: #6a5a8e;
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
          color: #6a5a8e;
          transition: all 0.3s;
          background: rgba(255,255,255,0.7);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #9370db;
        }

        .close:hover {
          transform: rotate(90deg);
          color: #5d4a7d;
          background: rgba(147, 112, 219, 0.3);
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
          
          .timeline::after {
            left: 31px;
          }
          
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          
          .timeline-item::after {
            left: 18px;
          }
          
          .left::before, .right::before {
            left: 60px;
            border: medium solid var(--indigo);
            border-width: 10px 10px 10px 0;
            border-color: transparent var(--indigo) transparent transparent;
          }
          
          .left, .right {
            left: 0;
          }

          .modal-events ul {
            column-count: 1;
          }
        }
      `}</style>

      <header>
        <div className="container">
          <h1>Post-Mauryan India</h1>
          <p>Regional Kingdoms and Cultural Flourishing (200 BCE - 300 CE)</p>
          <p>From the Shungas to the Kushans - An era of transformation</p>
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
            className={`nav-tab ${activeTab === 'dynasties' ? 'active' : ''}`} 
            onClick={() => handleTabClick('dynasties')}
          >
            Major Dynasties
          </button>
          <button 
            className={`nav-tab ${activeTab === 'trade' ? 'active' : ''}`} 
            onClick={() => handleTabClick('trade')}
          >
            Trade & Economy
          </button>
          <button 
            className={`nav-tab ${activeTab === 'culture' ? 'active' : ''}`} 
            onClick={() => handleTabClick('culture')}
          >
            Art & Culture
          </button>
          <button 
            className={`nav-tab ${activeTab === 'religion' ? 'active' : ''}`} 
            onClick={() => handleTabClick('religion')}
          >
            Religious Developments
          </button>
          <button 
            className={`nav-tab ${activeTab === 'legacy' ? 'active' : ''}`} 
            onClick={() => handleTabClick('legacy')}
          >
            Legacy
          </button>
        </div>

        {/* Overview Section */}
        <section className={`content-section ${activeTab === 'overview' ? 'active' : ''}`}>
          <h2>The Post-Mauryan Transition</h2>
          <img src="https://educationprovince.com/wp-content/uploads/2023/02/image-108.png" alt="Post-Mauryan India Map" className="full-width-image" />
          
          <p>After the decline of the Mauryan Empire in 185 BCE, India entered a period of regional kingdoms, foreign invasions, and cultural synthesis that laid foundations for the classical age.</p>
          
          <div className="two-column">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Kunindas_coin_with_Chaitya.jpg/500px-Kunindas_coin_with_Chaitya.jpg" alt="Post-Mauryan Coin" />
            <div>
              <h3>Key Characteristics</h3>
              <ul>
                        <li>Rise of regional powers (Shungas, Satavahanas, etc.)</li>
                        <li>Invasions by foreign groups (Indo-Greeks, Kushans)</li>
                        <li>Flourishing trade along Silk Road</li>
                        <li>Development of distinct art schools</li>
                        <li>Evolution of Hinduism and Buddhism</li>
                        <li>Growth of urban centers and guilds</li>
                    </ul>
            </div>
          </div>
          
          <h3>Period at a Glance</h3>
          <div className="stats-container">
            <div className="stat-card">
              <div className="number">200 BCE</div>
              <div className="unit">to 300 CE</div>
              <h4>Time Period</h4>
            </div>
            <div className="stat-card">
              <div className="number">10+</div>
              <div className="unit">major dynasties</div>
              <h4>Across subcontinent</h4>
            </div>
            <div className="stat-card">
              <div className="number">3</div>
              <div className="unit">continents</div>
              <h4>Trade connections</h4>
            </div>
            <div className="stat-card">
              <div className="number">2</div>
              <div className="unit">great art styles</div>
              <h4>Gandhara & Mathura</h4>
            </div>
          </div>
          
          <h3>Historical Sources</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlKKoa8GWPYg6CGGt0Q_-J5O_3OTKVN2karek0yplGMuorTe78q3FZXtXR3y9WNSdCoNjs8wBdzLZ7hM0WQcPykof45W5li8giuGhmg_weuyWPzTAfn-DxOZicOaPOFxvQ8qG2O0biIXg/s1600/Puranas.jpg" alt="Puranas" />
              <p>Puranic literature</p>
            </div>
            <div className="image-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Periplous_of_the_Erythraean_Sea.svg/1024px-Periplous_of_the_Erythraean_Sea.svg.png" alt="Periplus" />
              <p>Periplus of the Erythraean Sea</p>
            </div>
            <div className="image-card">
              <img src="https://cdn-images.prepp.in/public/image/aed673ab1a13f87fdedcfade0ae41f8b.jpeg?tr=w-,h-,c-force" alt="Inscriptions" />
              <p>Inscriptions and coins</p>
            </div>
          </div>
        </section>

        {/* Major Dynasties Section */}
        <section className={`content-section ${activeTab === 'dynasties' ? 'active' : ''}`}>
          <h2>Regional Powers</h2>
          <img src="https://educationprovince.com/wp-content/uploads/2023/02/image-105.png" alt="Post-Mauryan Dynasties" className="full-width-image" />
          
          <p>The political landscape fragmented into numerous regional kingdoms and foreign-ruled territories after the Mauryan collapse.</p>
          
          <div className="two-column">
            <div>
              <h3>Major Dynasties</h3>
              <ul>
                        <li><strong>Shunga Empire (185-73 BCE):</strong> Central and eastern India</li>
                        <li><strong>Kanva Dynasty (73-28 BCE):</strong> Succeeded Shungas</li>
                        <li><strong>Satavahanas (1st c. BCE-2nd c. CE):</strong> Deccan region</li>
                        <li><strong>Indo-Greeks (2nd-1st c. BCE):</strong> Northwest India</li>
                        <li><strong>Indo-Scythians (1st c. BCE-1st c. CE):</strong> Western India</li>
                        <li><strong>Kushan Empire (1st-3rd c. CE):</strong> Northern India</li>
                    </ul>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Map_of_the_Kushan_Empire.png/330px-Map_of_the_Kushan_Empire.png" alt="Kushan Empire" />
          </div>
          
          <h3>Notable Rulers</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bharhut_Sunga_individual.jpg/960px-Bharhut_Sunga_individual.jpg" alt="Pushyamitra Shunga" />
              <p>Pushyamitra Shunga (Shunga founder)</p>
            </div>
            <div className="image-card">
              <img src="https://i.pinimg.com/736x/d0/a8/4f/d0a84f24cbaa400f60d8de65168f107d.jpg" alt="Gautamiputra Satakarni" />
              <p>Gautamiputra Satakarni (Satavahana)</p>
            </div>
            <div className="image-card">
              <img src="https://historypak.com/wp-content/uploads/2012/08/Kanishka.jpg" alt="Kanishka" />
              <p>Kanishka the Great (Kushan)</p>
            </div>
          </div>
          
          <h3>Foreign Invaders</h3>
          <ul>
            <li><strong>Indo-Greeks:</strong> Introduced Hellenistic art influences</li>
            <li><strong>Sakas (Scythians):</strong> Ruled western India</li>
            <li><strong>Parthians:</strong> Brief rule in northwest</li>
            <li><strong>Kushans:</strong> Created vast Central Asian empire</li>
          </ul>
        </section>

        {/* Trade & Economy Section */}
        <section className={`content-section ${activeTab === 'trade' ? 'active' : ''}`}>
          <h2>Economic Expansion</h2>
          <img src="https://cdn.britannica.com/83/193183-050-A10F4603/Silk-Road.jpg" alt="Silk Road" className="full-width-image" />
          
          <p>This period saw unprecedented growth in trade, both within India and with the Roman world, Central Asia, and Southeast Asia.</p>
          
          <div className="two-column">
            <img src="https://roman12345.weebly.com/uploads/6/3/2/9/63292589/trade-1_orig.jpg" alt="Roman Trade" />
            <div>
              <h3>Trade Features</h3>
              <ul>
                <li><strong>Silk Road:</strong> Overland trade with China</li>
                <li><strong>Roman Trade:</strong> Indian exports to Mediterranean</li>
                <li><strong>Indian Ocean Trade:</strong> Maritime routes to Arabia, Africa</li>
                <li><strong>Major Exports:</strong> Spices, textiles, ivory, pearls</li>
                <li><strong>Major Imports:</strong> Gold, silver, wine, glass</li>
              </ul>
            </div>
          </div>
          
          <h3>Economic Indicators</h3>
          <div className="stats-container">
            <div className="stat-card">
              <div className="number">120+</div>
              <div className="unit">ports</div>
              <h4>Along Indian coast</h4>
            </div>
            <div className="stat-card">
              <div className="number">50M</div>
              <div className="unit">sesterces annually</div>
              <h4>Roman trade deficit</h4>
            </div>
            <div className="stat-card">
              <div className="number">10+</div>
              <div className="unit">types of coins</div>
              <h4>Issued by various rulers</h4>
            </div>
            <div className="stat-card">
              <div className="number">30+</div>
              <div className="unit">craft guilds</div>
              <h4>Textiles, metalwork, etc.</h4>
            </div>
          </div>
          
          <h3>Urban Centers</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://www.worldhistory.org/img/r/p/500x600/3956.jpg?v=1712661963-1435139874" alt="Taxila" />
              <p>Taxila - Gandharan trade hub</p>
            </div>
            <div className="image-card">
              <img src="https://tripxl.com/blog/wp-content/uploads/2024/10/Bhartrihari-Caves-1.jpg" alt="Ujjain" />
              <p>Ujjain - Western commercial center</p>
            </div>
            <div className="image-card">
              <img src="https://media.assettype.com/theceo%2F2024-06%2F411f9007-e82d-4726-a86b-2ec657ce2abf%2Fhistory.jpg" alt="Amaravati" />
              <p>Amaravati - Satavahana capital</p>
            </div>
          </div>
        </section>

        {/* Art & Culture Section */}
        <section className={`content-section ${activeTab === 'culture' ? 'active' : ''}`}>
          <h2>Artistic Flourishing</h2>
          <img src="https://i0.wp.com/farbound.net/wp-content/uploads/2021/08/Farbound.Net-Gandharan-Buddha-Greek-Buddha-2ND-Century-AD-Kushan-Era-Gandharan-School-of-Art-New-Delhi-India.jpg?fit=1500%2C1125&ssl=1" alt="Gandhara Buddha" className="full-width-image" />
          
          <p>This era produced some of India's most remarkable art, blending indigenous styles with foreign influences.</p>
          
          <div className="two-column">
            <div>
              <h3>Major Art Schools</h3>
              <ul>
                <li><strong>Gandhara School:</strong> Greco-Buddhist style</li>
                <li><strong>Mathura School:</strong> Indigenous Indian style</li>
                <li><strong>Amaravati School:</strong> South Indian narrative art</li>
                <li><strong>Early Nagara Style:</strong> Temple architecture begins</li>
              </ul>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Amohaasi_Bodhisattva%2C_Mathura.jpg/330px-Amohaasi_Bodhisattva%2C_Mathura.jpg" alt="Mathura Buddha" />
          </div>
          
          <h3>Architectural Developments</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://xplro.com/wp-content/uploads/2024/07/Xplro-2024-07-02T004212.151.jpg.webp" alt="Sanchi Stupa" />
              <p>Sanchi Stupa - Enhanced under Shungas</p>
            </div>
            <div className="image-card">
              <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/01/e34212796cb5525981c7399f5de4b32b_1000x1000.jpg" alt="Amaravati Stupa" />
              <p>Amaravati Stupa - Satavahana period</p>
            </div>
            <div className="image-card">
              <img src="https://www.holidify.com/images/cmsuploads/compressed/k2_20170821182324.jpg" alt="Karla Caves" />
              <p>Karla Caves - Rock-cut architecture</p>
            </div>
          </div>
          
          <h3>Cultural Synthesis</h3>
          <ul>
            <li>Blending of Indian, Greek, Persian, and Central Asian elements</li>
            <li>Development of Buddha's anthropomorphic representations</li>
            <li>Evolution of temple architecture from stupa to shrine</li>
            <li>Growth of Sanskrit literature and Prakrit poetry</li>
          </ul>
        </section>

        {/* Religious Developments Section */}
        <section className={`content-section ${activeTab === 'religion' ? 'active' : ''}`}>
          <h2>Spiritual Evolution</h2>
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS7upgBZS7MjmTe-4EAjCJwSru5DYGaOyw1HeMaBSmuq6krf5YMPESULB3svdM1cltxZpehn3DVBBGtOsJtlJGYMZ356artR3ewdwmLnLO4m8tlgm0aiERo0aGcFDpJ70ev6n2kShfc0Khj1e9KrKmPB3WZvYMyIf1ttXCyK4i64lX95gEyE7jkxg9psI/s638/buddist_council.jpg" alt="Buddhist Council" className="full-width-image" />
          
          <p>This period saw significant developments in all major Indian religions and the arrival of new traditions.</p>
          
          <div className="two-column">
            <img src="https://www.worldhistory.org/img/r/p/500x600/5003.jpg?v=1733111225" alt="Mahayana Buddhism" />
            <div>
              <h3>Religious Developments</h3>
              <ul>
                <li><strong>Buddhism:</strong> Rise of Mahayana tradition</li>
                <li><strong>Hinduism:</strong> Bhagavatism and temple worship</li>
                <li><strong>Jainism:</strong> Digambara-Svetambara split</li>
                <li><strong>New Deities:</strong> Vishnu, Shiva, Kartikeya gain prominence</li>
                <li><strong>Foreign Cults:</strong> Greek, Persian deities in northwest</li>
              </ul>
            </div>
          </div>
          
          {/* Interactive Timeline Section */}
          <h3 style={{ textAlign: 'center', fontSize: '2.2rem', color: '#5d4a6e', fontFamily: 'Times New Roman, serif', marginBottom: '20px' }}>
            Post-Mauryan Kingdoms (200 BCE - 300 CE)
          </h3>
          <div className="bookshelf">
            {postMauryanEras.map((era, index) => (
              <div 
                key={index}
                className="book" 
                style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                onClick={() => handleEraClick(era)}
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

          <h3>Religious Art</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://www.meisterdrucke.ie/kunstwerke/1260px/Pakistani_School_-_Seated_Buddha_Gandhara_1st-3rd_century_AD_%28schist%29_-_%28MeisterDrucke-432282%29.jpg" alt="Gandhara Buddha" />
              <p>Gandhara Buddha statues</p>
            </div>
            <div className="image-card">
              <img src="https://cdn.britannica.com/57/197557-050-C3C5055A/Vishnu-Shiva-Brahma-Hindu-Trimurti-gods.jpg" alt="Hindu Deities" />
              <p>Early Hindu deity images</p>
            </div>
            <div className="image-card">
              <img src="https://media.istockphoto.com/id/494243298/photo/jain-temple-mahavira-in-jaisalmer-india.jpg?s=612x612&w=0&k=20&c=8BFXcMquvlFvBuySdOpmODqPYQHmDw8nvDYQ-ospP08=" alt="Jain Tirthankara" />
              <p>Jain Tirthankara sculptures</p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className={`content-section ${activeTab === 'legacy' ? 'active' : ''}`}>
          <h2>Enduring Influence</h2>
          <img src="https://cdn.britannica.com/48/27048-050-F8EE0898/Birth-schist-relief-Gandhara-First-Seven-Steps.jpg" alt="Kushan Art Influence" className="full-width-image" />
          
          <p>The Post-Mauryan period laid foundations for India's classical age and influenced Asian civilizations.</p>
          
          <div className="two-column">
            <div>
              <h3>Lasting Contributions</h3>
              <ul>
                <li><strong>Artistic Traditions:</strong> Established Indian iconography</li>
                <li><strong>Religious Forms:</strong> Shaped Mahayana Buddhism</li>
                <li><strong>Trade Networks:</strong> Connected India globally</li>
                <li><strong>Political Models:</strong> Regional kingdom systems</li>
                <li><strong>Cultural Synthesis:</strong> Blended Indian and foreign elements</li>
              </ul>
            </div>
            <img src="https://www.csp.indica.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-11.39.13-e1711159827775.jpeg" alt="Indian Influence" />
          </div>
          
          <h3>Transition to Gupta Age</h3>
          <div className="stats-container">
            <div className="stat-card">
              <div className="number">3rd c.</div>
              <div className="unit">CE</div>
              <h4>Kushan decline begins</h4>
            </div>
            <div className="stat-card">
              <div className="number">4th c.</div>
              <div className="unit">CE</div>
              <h4>Gupta Empire emerges</h4>
            </div>
            <div className="stat-card">
              <div className="number">500+</div>
              <div className="unit">years</div>
              <h4>Of cultural influence</h4>
            </div>
            <div className="stat-card">
              <div className="number">10+</div>
              <div className="unit">countries</div>
              <h4>Impacted by this period</h4>
            </div>
          </div>
          
          <h3>Archaeological Evidence</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://www.coinsstuff.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-07-at-10.33.29-PM.jpeg" alt="Post-Mauryan Coins" />
              <p>Coins showing economic prosperity</p>
            </div>
            <div className="image-card">
              <img src="https://www.sahapedia.org/sites/default/files/styles/sp_page_banner_800x800/public/16.%20The%20GopikaNagarjuni%20Hill%20cave%20inscription%20of%20Maukhari%20king%20Anantavarman_0_0.jpg?itok=5oOLdY-3" alt="Inscriptions" />
              <p>Inscriptions recording donations</p>
            </div>
            <div className="image-card">
              <img src="https://www.shutterstock.com/image-photo/ancient-coin-showing-twoheaded-roman-260nw-2234123173.jpg" alt="Trade Goods" />
              <p>Roman artifacts at Indian sites</p>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="container">
          <h3>The Bridge to Classical India</h3>
          <p>The Post-Mauryan period transformed India from an ancient to classical civilization, setting the stage for the Gupta golden age.</p>
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
      <div className={`modal ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          {selectedEra && (
            <>
              <div className="modal-header">
                <div className="era-symbol" style={{ fontSize: '24px', marginBottom: '15px' }}>
                  {selectedEra.symbol}
                </div>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostMaurya;
