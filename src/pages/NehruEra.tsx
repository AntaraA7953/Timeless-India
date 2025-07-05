import React, { useState, useEffect } from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
  styles: any;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, caption, styles }) => (
  <div style={styles.imageCard} className="image-card">
    <img src={src} alt={alt} style={styles.cardImage} />
    <p style={styles.imageCaption}>{caption}</p>
  </div>
);

interface StatCardProps {
  number: string;
  unit: string;
  title: string;
  styles: any;
}

const StatCard: React.FC<StatCardProps> = ({ number, unit, title, styles }) => (
  <div style={styles.statCard}>
    <div style={styles.statNumber}>{number}</div>
    <div style={styles.statUnit}>{unit}</div>
    <h4 style={styles.statTitle}>{title}</h4>
  </div>
);

const NehruEra: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Smooth scroll to top when tab changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeTab]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const styles = {
    root: {
      '--saffron': '#FF9933',
      '--white': '#FFFFFF',
      '--green': '#138808',
      '--blue': '#000080',
      '--text-color': '#333333',
      '--light-bg': '#F9F9F9',
      '--primary-color': 'var(--saffron)',
      '--secondary-color': 'var(--green)',
      '--accent-color': 'var(--blue)',
      '--section-heading': 'var(--blue)',
      '--sub-heading': 'var(--green)',
    } as React.CSSProperties,

    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box' as const,
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'var(--light-bg)',
      color: 'var(--text-color)',
      lineHeight: 1.7,
      minHeight: '100vh',
    },

    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },

    header: {
      background: 'linear-gradient(135deg, var(--saffron), var(--white), var(--green))',
      color: 'var(--blue)',
      padding: '4rem 0',
      textAlign: 'center' as const,
      borderRadius: '0 0 20px 20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
      position: 'relative' as const,
      overflow: 'hidden',
    },

    headerContent: {
      position: 'relative' as const,
      zIndex: 1,
    },

    headerTitle: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      fontWeight: 700,
      color: 'var(--blue)',
      textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
    },

    headerSubtitle: {
      fontSize: '1.4rem',
      maxWidth: '800px',
      margin: '0 auto 1.5rem',
      color: 'var(--blue)',
      fontWeight: 500,
    },

    headerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '2rem',
      flexWrap: 'wrap' as const,
    },

    headerLink: {
      color: 'var(--blue)',
      textDecoration: 'none',
      fontWeight: 600,
      padding: '0.8rem 1.5rem',
      borderRadius: '30px',
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(255,255,255,0.7)',
      border: '2px solid var(--blue)',
    },

    navTabs: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
      gap: '15px',
      marginBottom: '3rem',
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '15px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0,0,0,0.05)',
    },

    navTab: {
      padding: '1rem 2rem',
      backgroundColor: 'var(--white)',
      color: 'var(--blue)',
      border: '2px solid var(--blue)',
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
    },

    navTabActive: {
      backgroundColor: 'var(--blue)',
      color: 'white',
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(0,0,128,0.2)',
    },

    contentSection: {
      display: 'none',
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '3rem',
      marginBottom: '3rem',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0,0,0,0.05)',
    },

    contentSectionActive: {
      display: 'block',
      animation: 'fadeIn 0.7s ease',
    },

    sectionTitle: {
      color: 'var(--section-heading)',
      marginBottom: '2rem',
      fontSize: '2.5rem',
      borderBottom: '3px solid var(--saffron)',
      paddingBottom: '0.8rem',
      fontWeight: 700,
    },

    sectionSubtitle: {
      color: 'var(--sub-heading)',
      margin: '2.5rem 0 1.5rem',
      fontSize: '1.8rem',
      fontWeight: 600,
      position: 'relative' as const,
      paddingLeft: '2rem',
    },

    paragraph: {
      marginBottom: '1.8rem',
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },

    list: {
      marginLeft: '2rem',
      marginBottom: '2.5rem',
      listStyle: 'none',
    },

    listItem: {
      marginBottom: '1.2rem',
      fontSize: '1.1rem',
      position: 'relative' as const,
      paddingLeft: '1.8rem',
    },

    fullWidthImage: {
      width: '100%',
      maxHeight: '500px',
      objectFit: 'cover' as const,
      borderRadius: '12px',
      margin: '3rem 0',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      border: '1px solid rgba(0,0,0,0.05)',
    },

    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'center',
      margin: '3rem 0',
    },

    twoColumnImage: {
      width: '100%',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    },

    twoColumnContent: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
    },

    imageContainer: {
      margin: '3rem 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
    },

    imageCard: {
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s ease',
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.05)',
      cursor: 'pointer',
    },

    cardImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover' as const,
      display: 'block',
    },

    imageCaption: {
      padding: '1.5rem',
      backgroundColor: 'white',
      fontSize: '1rem',
      textAlign: 'center' as const,
      color: 'var(--blue)',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      margin: 0,
      fontWeight: 500,
    },

    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '2rem',
      margin: '3rem 0',
    },

    statCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
      textAlign: 'center' as const,
      borderTop: '4px solid var(--saffron)',
    },

    statTitle: {
      color: 'var(--blue)',
      fontSize: '1.1rem',
      marginBottom: '1rem',
      fontWeight: 600,
    },

    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: 'var(--green)',
      lineHeight: 1,
      marginBottom: '0.5rem',
    },

    statUnit: {
      color: 'var(--blue)',
      fontSize: '1rem',
      marginBottom: '1rem',
    },

    footer: {
      background: 'linear-gradient(135deg, var(--blue), var(--green))',
      color: 'white',
      textAlign: 'center' as const,
      padding: '4rem 0',
      marginTop: '3rem',
      borderRadius: '20px 20px 0 0',
      position: 'relative' as const,
      overflow: 'hidden',
    },

    footerContent: {
      position: 'relative' as const,
      zIndex: 1,
    },

    footerTitle: {
      fontSize: '1.8rem',
      marginBottom: '1rem',
      fontWeight: 600,
    },

    footerText: {
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
    },

    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      margin: '2rem 0',
      flexWrap: 'wrap' as const,
    },

    footerLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
      padding: '0.5rem 1rem',
      borderRadius: '30px',
      backgroundColor: 'rgba(255,255,255,0.15)',
    },

    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '1.5rem',
    },

    socialLink: {
      color: 'white',
      fontSize: '1.5rem',
      transition: 'transform 0.3s ease',
      textDecoration: 'none',
    },

    // Mobile responsive styles
    '@media (max-width: 768px)': {
      headerTitle: {
        fontSize: '2.5rem',
      },
      headerSubtitle: {
        fontSize: '1.2rem',
      },
      headerLinks: {
        flexDirection: 'column' as const,
        gap: '1rem',
        alignItems: 'center',
      },
      navTabs: {
        flexDirection: 'column' as const,
        alignItems: 'center',
      },
      navTab: {
        width: '100%',
        textAlign: 'center' as const,
      },
      contentSection: {
        padding: '2rem',
      },
      twoColumn: {
        gridTemplateColumns: '1fr',
      },
      imageContainer: {
        gridTemplateColumns: '1fr',
      },
      statsContainer: {
        gridTemplateColumns: '1fr',
      },
    },
  };

  const tabsData = [
    { id: 'overview', label: 'Overview' },
    { id: 'nation-building', label: 'Nation Building' },
    { id: 'economy', label: 'Economic Policy' },
    { id: 'foreign-policy', label: 'Foreign Policy' },
    { id: 'society', label: 'Society & Culture' },
    { id: 'legacy', label: 'Legacy' }
  ];

  return (
    <div style={styles.root}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap');
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .content-section h3::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.7em;
            height: 0.4em;
            width: 0.4em;
            background: var(--saffron);
            border-radius: 50%;
          }
          
          .content-section li::before {
            content: "•";
            color: var(--saffron);
            font-weight: bold;
            position: absolute;
            left: 0;
            font-size: 1.4rem;
          }
          
          .image-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(255, 153, 51, 0.2);
          }
          
          .nav-tab:hover {
            background: var(--blue);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,128,0.2);
          }
          
          .header-link:hover {
            background-color: var(--blue);
            color: white;
            transform: translateY(-3px);
          }
          
          .footer-link:hover {
            background-color: rgba(255,255,255,0.3);
            transform: translateY(-2px);
          }
          
          .social-link:hover {
            transform: translateY(-3px);
          }
          
          .header::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://www.cheggindia.com/wp-content/uploads/2024/05/Jawaharlal-Nehru-1024x614.png') center/cover;
            opacity: 0.4;
            z-index: 0;
          }
          
          .footer::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://images.indianexpress.com/2020/08/nehru-independence-1200.jpg') center/cover;
            opacity: 0.1;
            z-index: 0;
          }
          
          @media (max-width: 768px) {
            .header h1 {
              font-size: 2.5rem;
            }
            
            .header p {
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
          }
        `}
      </style>
      
      <div style={styles.body}>
        <header style={styles.header} className="header">
          <div style={{...styles.container, ...styles.headerContent}}>
            <h1 style={styles.headerTitle}>The Nehru Era (1947-1964)</h1>
            <p style={styles.headerSubtitle}>India's foundational years as an independent nation</p>
            <p style={styles.headerSubtitle}>From partition to planning - Building modern India</p>
          </div>
        </header>

        <div style={styles.container}>
          <div style={styles.navTabs}>
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                style={{
                  ...styles.navTab,
                  ...(activeTab === tab.id ? styles.navTabActive : {}),
                }}
                className="nav-tab"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'overview' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>India's Tryst with Destiny</h2>
            <img 
              src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/9/6/1252253835274/Second-world-war-Jawaharl-001.jpg?width=465&dpr=1&s=none&crop=none" 
              alt="Nehru Independence Speech" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              Jawaharlal Nehru's 17-year tenure as India's first Prime Minister shaped the newly independent nation's democratic institutions, economic policies, and international standing.
            </p>
            
            <div style={styles.twoColumn}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHARvKZGsRXNIGCPzxS3NKOZb7BsQHo7Unw&s" 
                alt="Nehru with Gandhi" 
                style={styles.twoColumnImage}
              />
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Key Characteristics</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li">Establishment of parliamentary democracy</li>
                  <li style={styles.listItem} className="content-section li">Mixed economy with five-year plans</li>
                  <li style={styles.listItem} className="content-section li">Non-aligned foreign policy</li>
                  <li style={styles.listItem} className="content-section li">Secular constitution</li>
                  <li style={styles.listItem} className="content-section li">Scientific temper and modernization</li>
                  <li style={styles.listItem} className="content-section li">Integration of princely states</li>
                </ul>
              </div>
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Nehruvian India by Numbers</h3>
            <div style={styles.statsContainer}>
              <StatCard number="17" unit="years" title="As Prime Minister" styles={styles} />
              <StatCard number="3.6%" unit="annual growth" title="Hindu rate of growth" styles={styles} />
              <StatCard number="560+" unit="princely states" title="Integrated into India" styles={styles} />
              <StatCard number="5" unit="IITs established" title="Technical education" styles={styles} />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Historical Moments</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShh6jtJ-CZ91EqHSklq0E3e1Pid92bAw24KA&s"
                alt="Independence Day"
                caption="August 15, 1947 - Independence"
                styles={styles}
              />
              <ImageCard
                src="https://media.istockphoto.com/id/1296965095/photo/selective-focus-on-flag-indian-constitution-or-bharatiya-savidhana-preamble-old-scattered.jpg?s=612x612&w=0&k=20&c=tPCDkcPGUDE9VHwWj_1paZvN-SHHinLiyo_1BYISJ5Q="
                alt="Constitution"
                caption="January 26, 1950 - Republic"
                styles={styles}
              />
              <ImageCard
                src="https://www.fondationlecorbusier.fr/wp-content/uploads/2022/04/realisations-barrage-bhakra-inde-1955-7.jpg"
                alt="Bhakra Dam"
                caption="1963 - Bhakra Dam completed"
                styles={styles}
              />
            </div>
          </section>

          {/* Nation Building Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'nation-building' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>Forging a United India</h2>
            <img 
              src="https://images.livemint.com/img/2019/08/14/original/Plainfacts_India-[Recovered]_web1_(1)_1565804352184.jpg" 
              alt="Indian Map" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              Nehru's government faced immense challenges in unifying a diverse nation ravaged by partition and colonial rule.
            </p>
            
            <div style={styles.twoColumn}>
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Key Achievements</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>Integration of States:</strong> Sardar Patel's efforts</li>
                  <li style={styles.listItem} className="content-section li"><strong>Constitution:</strong> World's longest written constitution</li>
                  <li style={styles.listItem} className="content-section li"><strong>Linguistic Reorganization:</strong> States formed on language basis</li>
                  <li style={styles.listItem} className="content-section li"><strong>Election System:</strong> Universal adult franchise</li>
                  <li style={styles.listItem} className="content-section li"><strong>Secularism:</strong> Equal respect for all religions</li>
                </ul>
              </div>
              <img 
                src="https://cdn.britannica.com/29/259829-050-BBF40CC7/Photolithographic-reproduction-of-the-preamble-to-the-Constitution-of-the-Republic-of-India-January-26-1950.jpg?w=400&h=225&c=crop" 
                alt="Constitution" 
                style={styles.twoColumnImage}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Challenges Faced</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://www.hindustantimes.com/static/partition/assets/img/gallery/515302110.jpg"
                alt="Partition"
                caption="Partition violence (1947)"
                styles={styles}
              />
              <ImageCard
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Kashmir_map.svg"
                alt="Kashmir"
                caption="Kashmir conflict (1947-48)"
                styles={styles}
              />
              <ImageCard
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/Razakar_units_being_trained_from_Muslim_volunteers.jpg"
                alt="Hyderabad"
                caption="Hyderabad police action (1948)"
                styles={styles}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Institutions Established</h3>
            <ul style={styles.list} className="content-section">
              <li style={styles.listItem} className="content-section li">Planning Commission (1950)</li>
              <li style={styles.listItem} className="content-section li">Election Commission (1950)</li>
              <li style={styles.listItem} className="content-section li">Atomic Energy Commission (1948)</li>
              <li style={styles.listItem} className="content-section li">University Grants Commission (1953)</li>
              <li style={styles.listItem} className="content-section li">National Laboratories (CSIR network)</li>
            </ul>
          </section>

          {/* Economic Policy Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'economy' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>Planned Development</h2>
            <img 
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230608155652/Bhakra-Nangal-Dam-.webp" 
              alt="Bhakra Dam" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              Nehru's economic policies emphasized state-led industrialization and agricultural self-sufficiency through five-year plans.
            </p>
            
            <div style={styles.twoColumn}>
              <img 
                src="https://fl-i.thgim.com/public/the-nation/article25401973.ece/alternates/FREE_320/FL23-Nehru-13674" 
                alt="Steel Plant" 
                style={styles.twoColumnImage}
              />
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Key Economic Policies</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>Five-Year Plans:</strong> Soviet-inspired planning</li>
                  <li style={styles.listItem} className="content-section li"><strong>Public Sector:</strong> 'Temples of modern India'</li>
                  <li style={styles.listItem} className="content-section li"><strong>Land Reforms:</strong> Abolition of zamindari</li>
                  <li style={styles.listItem} className="content-section li"><strong>Green Revolution:</strong> Began with agricultural universities</li>
                  <li style={styles.listItem} className="content-section li"><strong>License Raj:</strong> Strict industrial regulations</li>
                </ul>
              </div>
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Industrial Projects</h3>
            <div style={styles.statsContainer}>
              <StatCard number="5" unit="IITs" title="Established 1951-1961" styles={styles} />
              <StatCard number="3" unit="Steel plants" title="Bhilai, Rourkela, Durgapur" styles={styles} />
              <StatCard number="1" unit="Billion tonnes" title="Bhakra Dam capacity" styles={styles} />
              <StatCard number="80%" unit="Rural India" title="Community Development Program" styles={styles} />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Economic Indicators</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2017/10/word-image2.png"
                alt="Industry"
                caption="Industrial growth: 7% annually"
                styles={styles}
              />
              <ImageCard
                src="https://static.theprint.in/wp-content/uploads/2019/07/325278446-1024x576.jpg"
                alt="Food Crisis"
                caption="Food shortages until mid-1960s"
                styles={styles}
              />
              <ImageCard
                src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-2735680,resizemode-75,msid-102718768/news/economy/indicators/independence-day-how-the-rupee-went-from-less-than-4-a-dollar-in-1947-to-83-today.jpg"
                alt="Rupee"
                caption="Stable currency (₹4.76/$ in 1947-66)"
                styles={styles}
              />
            </div>
          </section>

          {/* Foreign Policy Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'foreign-policy' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>Non-Aligned Movement</h2>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Konferencija_Pokreta_nesvrstanih_1961._godine.jpg/500px-Konferencija_Pokreta_nesvrstanih_1961._godine.jpg" 
              alt="NAM Summit" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              Nehru crafted an independent foreign policy that positioned India as a leader of the non-aligned world during the Cold War.
            </p>
            
            <div style={styles.twoColumn}>
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Key Principles</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>Non-Alignment:</strong> Independence from power blocs</li>
                  <li style={styles.listItem} className="content-section li"><strong>Panchsheel:</strong> Peaceful coexistence</li>
                  <li style={styles.listItem} className="content-section li"><strong>Anti-Colonialism:</strong> Support for liberation movements</li>
                  <li style={styles.listItem} className="content-section li"><strong>Asian Unity:</strong> Bandung Conference (1955)</li>
                  <li style={styles.listItem} className="content-section li"><strong>UN Leadership:</strong> Peacekeeping initiatives</li>
                </ul>
              </div>
              <img 
                src="https://pbs.twimg.com/media/FzaLv2lWAAM6COF.jpg" 
                alt="Nehru with Nasser and Tito" 
                style={styles.twoColumnImage}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Major Events</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Indian_soldiers_on_patrol_during_the_1962_Sino-Indian_border_war.jpg"
                alt="China War"
                caption="1962 Sino-Indian War"
                styles={styles}
              />
              <ImageCard
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Belgrade_Conference%2C_1961.jpg"
                alt="NAM"
                caption="1961 NAM founding"
                styles={styles}
              />
              <ImageCard
                src="https://www.india.com/wp-content/uploads/2019/08/United-Nations-IANS.jpg"
                alt="UN"
                caption="Kashmir at UN (1948)"
                styles={styles}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Relationships</h3>
            <ul style={styles.list} className="content-section">
              <li style={styles.listItem} className="content-section li"><strong>USSR:</strong> Growing ties after 1955</li>
              <li style={styles.listItem} className="content-section li"><strong>USA:</strong> Suspicion despite aid</li>
              <li style={styles.listItem} className="content-section li"><strong>China:</strong> Friendship then betrayal</li>
              <li style={styles.listItem} className="content-section li"><strong>Pakistan:</strong> Constant tension</li>
              <li style={styles.listItem} className="content-section li"><strong>Africa/Asia:</strong> Solidarity with new nations</li>
            </ul>
          </section>

          {/* Society & Culture Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'society' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>Social Transformation</h2>
            <img 
              src="https://the-radar.in/en/wp-content/uploads/2021/11/BLINKNEHRUANDCHILDREN.jpg" 
              alt="Nehru with Children" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              The Nehru era witnessed significant social changes through legislation and cultural initiatives.
            </p>
            
            <div style={styles.twoColumn}>
              <img 
                src="https://img1.wsimg.com/isteam/ip/63b04b47-d65a-4207-a58c-3e58f38419ef/SAVE_20210316_233212.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25" 
                alt="Hindu Code Bill" 
                style={styles.twoColumnImage}
              />
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Key Reforms</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>Hindu Code Bills:</strong> Women's rights</li>
                  <li style={styles.listItem} className="content-section li"><strong>Reservations:</strong> For SC/ST in education/jobs</li>
                  <li style={styles.listItem} className="content-section li"><strong>Education:</strong> Expansion of schools</li>
                  <li style={styles.listItem} className="content-section li"><strong>Secularism:</strong> Equal treatment of religions</li>
                  <li style={styles.listItem} className="content-section li"><strong>Scientific Temper:</strong> Promotion of rationality</li>
                </ul>
              </div>
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Cultural Renaissance</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://madrascourier.com/wp-content/uploads/2019/04/Discovery-Of-India-Madras-Courier-02.jpg"
                alt="Nehru's Books"
                caption="Nehru's writings (Discovery of India)"
                styles={styles}
              />
              <ImageCard
                src="https://assets.thehansindia.com/h-upload/feeds/2019/03/26/157193-3.jpg"
                alt="Cultural Events"
                caption="Festivals of India abroad"
                styles={styles}
              />
              <ImageCard
                src="https://i.ytimg.com/vi/38dbFYop4vs/hqdefault.jpg"
                alt="Indian Cinema"
                caption="Golden Age of Indian cinema"
                styles={styles}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Social Indicators</h3>
            <div style={styles.statsContainer}>
              <StatCard number="18%" unit="literacy" title="1947 → 28% in 1961" styles={styles} />
              <StatCard number="42" unit="years" title="Life expectancy (1951)" styles={styles} />
              <StatCard number="5.7" unit="children/woman" title="Fertility rate (1951)" styles={styles} />
              <StatCard number="80%" unit="rural" title="Population in villages" styles={styles} />
            </div>
          </section>

          {/* Legacy Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'legacy' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>Enduring Impact</h2>
            <img 
              src="https://www.financialexpress.com/wp-content/uploads/2023/06/PTI-nehru-ed.jpg" 
              alt="Nehru Memorial" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              Nehru's vision continues to influence India's development trajectory and national identity.
            </p>
            
            <div style={styles.twoColumn}>
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Lasting Contributions</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>Democratic Stability:</strong> Institutional foundations</li>
                  <li style={styles.listItem} className="content-section li"><strong>Scientific Infrastructure:</strong> IITs, ISRO, DRDO</li>
                  <li style={styles.listItem} className="content-section li"><strong>Secular Ethos:</strong> Constitutional principle</li>
                  <li style={styles.listItem} className="content-section li"><strong>Non-Alignment:</strong> Strategic autonomy</li>
                  <li style={styles.listItem} className="content-section li"><strong>Planning Model:</strong> Until 1991 reforms</li>
                </ul>
              </div>
              <img 
                src="https://thestarsuccess.com/assets/img/institute-main/nehru.png" 
                alt="Institutions" 
                style={styles.twoColumnImage}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Contemporary Debates</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://indiabefore91.in/sites/default/files/miscfiles/commercial-banks-nationalized-in-1969.png"
                alt="License Raj"
                caption="Critique of License Raj"
                styles={styles}
              />
              <ImageCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SbxMfQ0Zx6q58vcYmVsQ01gw22HDN-UTyA&s"
                alt="1962 War"
                caption="1962 War failures"
                styles={styles}
              />
              <ImageCard
                src="https://fl-i.thgim.com/public/migration_catalog/article23014285.ece/alternates/LANDSCAPE_1200/FL12NEHRURIOTS"
                alt="Secularism"
                caption="Secularism vs. Hindu nationalism"
                styles={styles}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Nehru's Vision Today</h3>
            <ul style={styles.list} className="content-section">
              <li style={styles.listItem} className="content-section li">Democratic institutions remain strong</li>
              <li style={styles.listItem} className="content-section li">Scientific achievements (space, nuclear)</li>
              <li style={styles.listItem} className="content-section li">Mixed economy legacy</li>
              <li style={styles.listItem} className="content-section li">Non-alignment modified but relevant</li>
              <li style={styles.listItem} className="content-section li">Ongoing debates about his policies</li>
            </ul>
          </section>
        </div>

        <footer style={styles.footer} className="footer">
          <div style={{...styles.container, ...styles.footerContent}}>
            <h3 style={styles.footerTitle}>India's Architect of Modernity</h3>
            <p style={styles.footerText}>
              Jawaharlal Nehru's leadership laid the foundation for India's democratic, secular, and scientific development.
            </p>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink} className="footer-link">Home</a>
              <a href="#" style={styles.footerLink} className="footer-link">Timeline</a>
              <a href="#" style={styles.footerLink} className="footer-link">Civilizations</a>
              <a href="#" style={styles.footerLink} className="footer-link">About</a>
              <a href="#" style={styles.footerLink} className="footer-link">Contact</a>
            </div>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink} className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={styles.socialLink} className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" style={styles.socialLink} className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" style={styles.socialLink} className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <p style={styles.footerText}>&copy; 2023 Timeless India. Celebrating India's civilizational journey.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NehruEra;
