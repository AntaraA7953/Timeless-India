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

const PostNehru: React.FC = () => {
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
      '--primary-color': '#681375',
      '--secondary-color': '#E74C3C',
      '--accent-color': '#F39C12',
      '--text-color': '#34495E',
      '--light-color': '#F9F9F9',
      '--highlight-color': '#3498DB',
      '--dark-color': '#2C3E50',
      '--section-heading': '#9e2690',
      '--sub-heading': '#8daa08',
    } as React.CSSProperties,

    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box' as const,
      fontFamily: "'Merriweather', serif",
      backgroundColor: 'var(--light-color)',
      color: 'var(--text-color)',
      lineHeight: 1.8,
      minHeight: '100vh',
    },

    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },

    header: {
      background: 'linear-gradient(135deg, #8E44AD, #3498DB)',
      color: '#ffffff',
      padding: '3rem 0',
      textAlign: 'center' as const,
      borderRadius: '0 0 20px 20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
      position: 'relative' as const,
      overflow: 'hidden',
    },

    headerContent: {
      position: 'relative' as const,
      zIndex: 1,
    },

    headerTitle: {
      fontSize: '3rem',
      marginBottom: '0.8rem',
      fontWeight: 700,
      textShadow: '4px 4px 8px rgba(0,0,0,0.6)',
      color: '#FFFFFF',
    },

    headerSubtitle: {
      fontSize: '1.3rem',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto 1.2rem',
      textShadow: '4px 4px 8px rgba(0,0,0,0.6)',
      color: '#FFF9F3',
    },

    headerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '1.5rem',
      flexWrap: 'wrap' as const,
    },

    headerLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 500,
      padding: '0.5rem 1rem',
      borderRadius: '30px',
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(255,255,255,0.2)',
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
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    },

    navTab: {
      padding: '1rem 2rem',
      backgroundColor: '#c66dd5',
      color: 'white',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },

    navTabActive: {
      backgroundColor: '#5a0739',
      color: 'white',
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    },

    contentSection: {
      display: 'none',
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '3rem',
      marginBottom: '3rem',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(0,0,0,0.05)',
    },

    contentSectionActive: {
      display: 'block',
      animation: 'fadeIn 0.7s ease',
    },

    sectionTitle: {
      color: 'var(--section-heading)',
      marginBottom: '2rem',
      fontSize: '2.3rem',
      borderBottom: '3px solid var(--accent-color)',
      paddingBottom: '0.8rem',
      fontWeight: 700,
      background: 'linear-gradient(to right, var(--section-heading), var(--highlight-color))',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },

    sectionSubtitle: {
      color: 'var(--sub-heading)',
      margin: '2.5rem 0 1.5rem',
      fontSize: '1.8rem',
      fontWeight: 600,
      position: 'relative' as const,
      paddingLeft: '1.8rem',
    },

    paragraph: {
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },

    list: {
      marginLeft: '2.5rem',
      marginBottom: '2rem',
      listStyle: 'none',
    },

    listItem: {
      marginBottom: '1rem',
      fontSize: '1.1rem',
      position: 'relative' as const,
      paddingLeft: '1.5rem',
    },

    fullWidthImage: {
      width: '100%',
      maxHeight: '500px',
      objectFit: 'cover' as const,
      borderRadius: '12px',
      margin: '2.5rem 0',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      border: '1px solid rgba(0,0,0,0.05)',
    },

    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      alignItems: 'center',
      margin: '2.5rem 0',
    },

    twoColumnImage: {
      width: '100%',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    },

    twoColumnContent: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
    },

    imageContainer: {
      margin: '2.5rem 0',
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
      padding: '1.2rem',
      backgroundColor: 'white',
      fontSize: '1rem',
      textAlign: 'center' as const,
      color: 'var(--dark-color)',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      margin: 0,
    },

    footer: {
      background: 'linear-gradient(135deg, #8E44AD, #3498DB)',
      color: 'white',
      textAlign: 'center' as const,
      padding: '3rem 0',
      marginTop: '3rem',
      borderRadius: '20px 20px 0 0',
      position: 'relative' as const,
      overflow: 'hidden',
    },

    footerContent: {
      position: 'relative' as const,
      zIndex: 1,
    },

    footerText: {
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
    },

    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '1.5rem',
      flexWrap: 'wrap' as const,
    },

    footerLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'opacity 0.3s ease',
      fontSize: '1.1rem',
    },

    // Mobile responsive styles
    '@media (max-width: 768px)': {
      headerTitle: {
        fontSize: '2.2rem',
      },
      headerSubtitle: {
        fontSize: '1.1rem',
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
    },
  };

  const tabsData = [
    { id: 'overview', label: 'Overview' },
    { id: 'shastri', label: 'Shastri Era' },
    { id: 'indira', label: "Indira's Rise" },
    { id: 'emergency', label: 'The Emergency' },
    { id: 'economy', label: 'Economic Shifts' },
    { id: 'aftermath', label: 'Aftermath' }
  ];

  return (
    <div style={styles.root}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap');
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .content-section h3::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.6em;
            height: 0.5em;
            width: 0.5em;
            background: var(--accent-color);
            border-radius: 50%;
            box-shadow: 0 0 0 2px var(--sub-heading);
          }
          
          .content-section li::before {
            content: "•";
            color: var(--highlight-color);
            font-weight: bold;
            position: absolute;
            left: 0;
          }
          
          .image-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(155, 89, 182, 0.25);
          }
          
          .nav-tab:hover {
            background: #5a0739;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          }
          
          .header-link:hover {
            background-color: rgba(255,255,255,0.3);
            transform: translateY(-2px);
          }
          
          .footer-link:hover {
            opacity: 0.8;
            text-decoration: underline;
          }
          
          .header::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://images.firstpost.com/wp-content/uploads/2020/11/indira-gandhi-1280_opt.jpg?im=FitAndFill=(596,336)') center/cover;
            opacity: 0.7;
            z-index: 0;
          }
          
          .footer::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://images.indianexpress.com/2021/05/indira-gandhi-1200.jpg') center/cover;
            opacity: 0.6;
            z-index: 0;
          }
          
          @media (max-width: 768px) {
            .header h1 {
              font-size: 2.2rem;
            }
            
            .header p {
              font-size: 1.1rem;
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
            
            .image-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
      
      <div style={styles.body}>
        <header style={styles.header} className="header">
          <div style={{...styles.container, ...styles.headerContent}}>
            <h1 style={styles.headerTitle}>Post-Nehru to Emergency Era (1964-1984)</h1>
            <p style={styles.headerSubtitle}>India's turbulent transition through leadership changes, economic challenges, and democratic crisis</p>
            <p style={styles.headerSubtitle}>From Shastri to Indira Gandhi to the Emergency - A nation tested</p>
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
            <h2 style={styles.sectionTitle}>India After Nehru (1964-1984)</h2>
            <img 
              src="https://resize.indiatvnews.com/en/resize/oldbucket/1200_-/politicsnational/At-a-glance-Las10346.jpg" 
              alt="Nehru's Funeral" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              The post-Nehru era witnessed India's difficult transition from its founding vision through political instability, economic challenges, the rise of Indira Gandhi, and the controversial Emergency period that tested India's democratic foundations.
            </p>
            
            <div style={styles.twoColumn}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUf3FvfFrFN6CcPSKl3tzxhA7VQNFu370Jg&s" 
                alt="Indira Gandhi" 
                style={styles.twoColumnImage}
              />
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Key Periods</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>1964-1966:</strong> Lal Bahadur Shastri's leadership</li>
                  <li style={styles.listItem} className="content-section li"><strong>1966-1975:</strong> Indira Gandhi's consolidation of power</li>
                  <li style={styles.listItem} className="content-section li"><strong>1975-1977:</strong> The Emergency - democratic suspension</li>
                  <li style={styles.listItem} className="content-section li"><strong>1977-1980:</strong> Janata Party interregnum</li>
                  <li style={styles.listItem} className="content-section li"><strong>1980-1984:</strong> Indira's return and assassination</li>
                </ul>
              </div>
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Defining Characteristics</h3>
            <p style={styles.paragraph}>This era was marked by:</p>
            <ul style={styles.list} className="content-section">
              <li style={styles.listItem} className="content-section li">Transition from Nehruvian idealism to realpolitik</li>
              <li style={styles.listItem} className="content-section li">Economic crises and food shortages</li>
              <li style={styles.listItem} className="content-section li">Rise of regional political forces</li>
              <li style={styles.listItem} className="content-section li">Unprecedented centralization of power</li>
              <li style={styles.listItem} className="content-section li">Confrontation between government and judiciary</li>
              <li style={styles.listItem} className="content-section li">Green Revolution transforming agriculture</li>
              <li style={styles.listItem} className="content-section li">Democratic institutions tested but surviving</li>
            </ul>
            
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://s02.sgp1.cdn.digitaloceanspaces.com/book/42656-rdyzhtkapn-1475398937.jpg"
                alt="Lal Bahadur Shastri"
                caption="Lal Bahadur Shastri - Nehru's successor (1964-66)"
                styles={styles}
              />
              <ImageCard
                src="https://static.toiimg.com/photo/69940481.cms?imgsize=516364"
                alt="Emergency Protest"
                caption="Emergency protests - Democratic rights suspended"
                styles={styles}
              />
              <ImageCard
                src="https://images.indianexpress.com/2023/10/indira-assassination-indian-express.jpg"
                alt="Indira's Death"
                caption="1984: Indira Gandhi assassinated"
                styles={styles}
              />
            </div>
          </section>

          {/* Shastri Era Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'shastri' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>Lal Bahadur Shastri (1964-1966)</h2>
            <img 
              src="https://lh3.googleusercontent.com/proxy/phrnIG3Jv2z6arEKd8R_BVxkHv7TLX5oHRhTrLwEvmuZw3zlALJqhRSPiz7TWY0rfKlzk4mEolOPT_m1AhIBjYOhn8lNHEHsGG3OQblQ_xVyJ6z2" 
              alt="Shastri at Tashkent" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              Lal Bahadur Shastri, Nehru's unassuming successor, provided steady leadership during a difficult transition period, though his term was cut short by his mysterious death in Tashkent.
            </p>
            
            <div style={styles.twoColumn}>
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Key Contributions</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>1965 War with Pakistan:</strong> Led India to military success</li>
                  <li style={styles.listItem} className="content-section li"><strong>"Jai Jawan Jai Kisan":</strong> Iconic slogan honoring soldiers and farmers</li>
                  <li style={styles.listItem} className="content-section li"><strong>Food Crisis Management:</strong> Promoted Green Revolution</li>
                  <li style={styles.listItem} className="content-section li"><strong>White Revolution:</strong> Supported dairy cooperatives</li>
                  <li style={styles.listItem} className="content-section li"><strong>Anti-Corruption:</strong> Maintained simple, honest lifestyle</li>
                </ul>
              </div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ed/1965_Indo-Pak_War_DestroyedShermanTank.jpg" 
                alt="1965 War" 
                style={styles.twoColumnImage}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">1965 India-Pakistan War</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/09/18/Pictures/_2310e646-5dec-11e5-bd1b-52cbbb8abfd4.jpg"
                alt="Shastri with Army"
                caption="Major tank battles in Punjab - India gained upper hand"
                styles={styles}
              />
              <ImageCard
                src="https://edukemy.com/blog/wp-content/uploads/2024/02/Modern-history-95.png"
                alt="Tashkent Agreement"
                caption="Tashkent Agreement - Signed day before Shastri's death"
                styles={styles}
              />
              <ImageCard
                src="https://www.advantour.com/img/uzbekistan/tashkent/shastri.jpg"
                alt="Shastri Memorial"
                caption="Mysterious death in Tashkent - Still raises questions"
                styles={styles}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Transition to Indira Gandhi</h3>
            <p style={styles.paragraph}>After Shastri's sudden death in 1966:</p>
            <ul style={styles.list} className="content-section">
              <li style={styles.listItem} className="content-section li">Congress faced leadership crisis</li>
              <li style={styles.listItem} className="content-section li">Indira Gandhi elected as compromise candidate</li>
              <li style={styles.listItem} className="content-section li">Initially perceived as weak ("Goongi Gudiya")</li>
              <li style={styles.listItem} className="content-section li">Quickly established independent authority</li>
              <li style={styles.listItem} className="content-section li">Marked beginning of Gandhi family dominance</li>
            </ul>
          </section>

          {/* Indira's Rise Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'indira' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>Indira Gandhi's Ascent (1966-1975)</h2>
            <img 
              src="https://images.news18.com/ibnlive/uploads/2018/11/Pandit-Jawaharlal-Nehru-with-his-daughter-Indira-Gandhi.jpg" 
              alt="Young Indira" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              Indira Gandhi transformed from a reluctant heir to India's most powerful leader, centralizing authority and reshaping Indian politics through bold moves and populist policies.
            </p>
            
            <div style={styles.twoColumn}>
              <img 
                src="https://www.magnumphotos.com/wp-content/uploads/2017/11/cortex/par472558.jpg" 
                alt="Indira Campaigning" 
                style={styles.twoColumnImage}
              />
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Consolidation of Power</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>1969 Congress Split:</strong> Divided party into Congress(R) and Congress(O)</li>
                  <li style={styles.listItem} className="content-section li"><strong>1971 Election:</strong> "Garibi Hatao" landslide victory</li>
                  <li style={styles.listItem} className="content-section li"><strong>1971 War:</strong> Creation of Bangladesh - India's greatest military victory</li>
                  <li style={styles.listItem} className="content-section li"><strong>Bank Nationalization (1969):</strong> Took control of 14 major banks</li>
                  <li style={styles.listItem} className="content-section li"><strong>Abolition of Privy Purses:</strong> Ended royal privileges</li>
                </ul>
              </div>
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">1971 Bangladesh Liberation War</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://static.theprint.in/wp-content/uploads/2017/12/GettyImages-667530591-e1519099452276.jpg"
                alt="1971 War"
                caption="Decisive victory in just 13 days"
                styles={styles}
              />
              <ImageCard
                src="https://tds-images.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2022/12/15/mukti-bahini-real-heroes.jpg"
                alt="Mukti Bahini"
                caption="Support for Mukti Bahini freedom fighters"
                styles={styles}
              />
              <ImageCard
                src="https://i0.wp.com/asiatimes.com/wp-content/uploads/2018/07/Simla-Agreement-Bhutto-Gandhi.jpg?fit=422%2C294"
                alt="Shimla Agreement"
                caption="Shimla Agreement (1972) with Pakistan"
                styles={styles}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Growing Opposition (1973-75)</h3>
            <p style={styles.paragraph}>By mid-1970s, Indira faced:</p>
            <ul style={styles.list} className="content-section">
              <li style={styles.listItem} className="content-section li">Economic crisis from oil shock and inflation</li>
              <li style={styles.listItem} className="content-section li">JP Movement led by Jayaprakash Narayan</li>
              <li style={styles.listItem} className="content-section li">Massive railway strike (1974) showing labor unrest</li>
              <li style={styles.listItem} className="content-section li">Allahabad HC verdict against her election</li>
              <li style={styles.listItem} className="content-section li">Increasing calls for resignation nationwide</li>
              <li style={styles.listItem} className="content-section li">Set stage for Emergency declaration</li>
            </ul>
          </section>

          {/* Emergency Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'emergency' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>The Emergency (1975-1977)</h2>
            <img 
              src="https://th-i.thgim.com/public/migration_catalog/article10439361.ece/alternates/LANDSCAPE_1200/EMERGENCY1" 
              alt="Emergency Declaration" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              The 21-month Emergency period remains India's most controversial democratic suspension, with civil liberties revoked, opposition jailed, and press censored.
            </p>
            
            <div style={styles.twoColumn}>
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Key Features</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>June 25, 1975:</strong> Emergency declared</li>
                  <li style={styles.listItem} className="content-section li"><strong>Mass Arrests:</strong> 100,000+ opposition leaders jailed</li>
                  <li style={styles.listItem} className="content-section li"><strong>Press Censorship:</strong> Newspapers pre-censored</li>
                  <li style={styles.listItem} className="content-section li"><strong>Forced Sterilizations:</strong> Sanjay Gandhi's population control</li>
                  <li style={styles.listItem} className="content-section li"><strong>Constitutional Changes:</strong> 42nd Amendment</li>
                  <li style={styles.listItem} className="content-section li"><strong>Turkman Gate:</strong> Violent slum clearance</li>
                </ul>
              </div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrj8kzrxK_4aN-EJ7ofOzM3ueCzKLKVkIbBw&s" 
                alt="Emergency Protests" 
                style={styles.twoColumnImage}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Major Events</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://static.openthemagazine.com/fit-in/713x475/filters:quality(80)/wp-content/uploads/2021/03/Emergency4.jpeg"
                alt="Arrests"
                caption="Opposition leaders like JP, Morarji Desai arrested"
                styles={styles}
              />
              <ImageCard
                src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-91123392/91123392.jpg"
                alt="Turkman Gate"
                caption="Turkman Gate demolitions in Delhi"
                styles={styles}
              />
              <ImageCard
                src="https://images.indianexpress.com/2018/06/express7591.jpg"
                alt="Censored Newspaper"
                caption="Blank spaces in censored newspapers"
                styles={styles}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Key Figures</h3>
            <ul style={styles.list} className="content-section">
              <li style={styles.listItem} className="content-section li"><strong>Indira Gandhi:</strong> Prime Minister who declared Emergency</li>
              <li style={styles.listItem} className="content-section li"><strong>Sanjay Gandhi:</strong> Unofficial power center</li>
              <li style={styles.listItem} className="content-section li"><strong>Jayaprakash Narayan:</strong> Opposition leader jailed</li>
              <li style={styles.listItem} className="content-section li"><strong>Justice Jagmohanlal Sinha:</strong> Delivered verdict against Indira</li>
              <li style={styles.listItem} className="content-section li"><strong>MN Buch:</strong> Delhi Development Authority head</li>
            </ul>
          </section>

          {/* Economic Shifts Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'economy' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>Economic Transformation</h2>
            <img 
              src="https://i0.wp.com/edgeeffects.net/wp-content/uploads/2018/01/Norman-Borlaug-Sonora-64-flickr.jpg" 
              alt="Green Revolution" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              This era saw both economic crises and important reforms that laid foundations for future growth while struggling with the License Raj system.
            </p>
            
            <div style={styles.twoColumn}>
              <img 
                src="https://vajiramandravi.com/upsc-exam/wp-content/uploads/2025/01/data-4.png" 
                alt="MS Swaminathan" 
                style={styles.twoColumnImage}
              />
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Agricultural Revolution</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>Green Revolution:</strong> High-yield wheat/rice varieties</li>
                  <li style={styles.listItem} className="content-section li"><strong>Food Self-Sufficiency:</strong> Ended "ship-to-mouth" existence</li>
                  <li style={styles.listItem} className="content-section li"><strong>White Revolution:</strong> Operation Flood dairy cooperatives</li>
                  <li style={styles.listItem} className="content-section li"><strong>Rural Inequality:</strong> Benefits unevenly distributed</li>
                </ul>
              </div>
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Industrial & Economic Policies</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://miro.medium.com/v2/resize:fit:680/1*cECR3tJlO0JvAMX6TBufYw.jpeg"
                alt="Bank Nationalization"
                caption="1969 Bank Nationalization - 14 major banks taken over"
                styles={styles}
              />
              <ImageCard
                src="https://vajiramandravi.com/current-affairs/wp-content/uploads/2025/03/what_is_the_coal_mines_nationalisation_act_1973.jpg"
                alt="Coal Mines"
                caption="1973 Coal Mines Nationalization"
                styles={styles}
              />
              <ImageCard
                src="https://imgv2-1-f.scribdassets.com/img/document/572943976/original/2b5ffb5715/1?v=1"
                alt="LIC"
                caption="Expansion of public sector (LIC, FCI, etc.)"
                styles={styles}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Challenges</h3>
            <ul style={styles.list} className="content-section">
              <li style={styles.listItem} className="content-section li">1973 Oil Crisis - Fuel prices skyrocketed</li>
              <li style={styles.listItem} className="content-section li">High inflation and unemployment</li>
              <li style={styles.listItem} className="content-section li">License Raj became more entrenched</li>
              <li style={styles.listItem} className="content-section li">Public sector inefficiencies grew</li>
              <li style={styles.listItem} className="content-section li">Balance of payments problems</li>
              <li style={styles.listItem} className="content-section li">Widespread strikes and labor unrest</li>
            </ul>
          </section>

          {/* Aftermath Section */}
          <section
            style={{
              ...styles.contentSection,
              ...(activeTab === 'aftermath' ? styles.contentSectionActive : {}),
            }}
            className="content-section"
          >
            <h2 style={styles.sectionTitle}>Emergency Aftermath & Legacy</h2>
            <img 
              src="https://images.indianexpress.com/2018/12/forty-years-ago-759.jpg?w=640?w=414" 
              alt="Janata Government" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              The Emergency's end and subsequent developments reshaped Indian politics permanently, with lasting consequences still visible today.
            </p>
            
            <div style={styles.twoColumn}>
              <div style={styles.twoColumnContent}>
                <h3 style={styles.sectionSubtitle} className="content-section h3">Immediate Aftermath</h3>
                <ul style={styles.list} className="content-section">
                  <li style={styles.listItem} className="content-section li"><strong>1977 Elections:</strong> Janata Party victory</li>
                  <li style={styles.listItem} className="content-section li"><strong>Morarji Desai:</strong> First non-Congress PM</li>
                  <li style={styles.listItem} className="content-section li"><strong>Shah Commission:</strong> Investigated Emergency excesses</li>
                  <li style={styles.listItem} className="content-section li"><strong>Media Freedom Restored:</strong> Censorship ended</li>
                  <li style={styles.listItem} className="content-section li"><strong>1979:</strong> Janata government collapsed</li>
                </ul>
              </div>
              <img 
                src="https://images.indianexpress.com/2020/01/forty-years-ago-759-1.jpg?w=650?w=414" 
                alt="Indira's Return" 
                style={styles.twoColumnImage}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Long-Term Impact</h3>
            <div style={styles.imageContainer}>
              <ImageCard
                src="https://www.theindianpanorama.news/wp-content/uploads/2022/10/ass.jpg"
                alt="Indira's Death"
                caption="1984: Indira assassinated by Sikh bodyguards"
                styles={styles}
              />
              <ImageCard
                src="https://api-timescontent.timesofindia.com/api/v1/image-path/view/jpg/386226"
                alt="1984 Riots"
                caption="Anti-Sikh riots following assassination"
                styles={styles}
              />
              <ImageCard
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOh9YfQSOOF7ImbWWgtSDP8c4kEHh0cx5Ug&s"
                alt="Rajiv Gandhi"
                caption="Rajiv Gandhi became next PM - New generation"
                styles={styles}
              />
            </div>
            
            <h3 style={styles.sectionSubtitle} className="content-section h3">Historical Assessment</h3>
            <ul style={styles.list} className="content-section">
              <li style={styles.listItem} className="content-section li">Democratic institutions tested but survived</li>
              <li style={styles.listItem} className="content-section li">Created permanent distrust of authoritarianism</li>
              <li style={styles.listItem} className="content-section li">Media became more assertive post-Emergency</li>
              <li style={styles.listItem} className="content-section li">Judiciary more protective of civil liberties</li>
              <li style={styles.listItem} className="content-section li">Economic foundations laid despite challenges</li>
              <li style={styles.listItem} className="content-section li">Political culture transformed permanently</li>
            </ul>
          </section>
        </div>

        <footer style={styles.footer} className="footer">
          <div style={{...styles.container, ...styles.footerContent}}>
            <p style={styles.footerText}>Explore more about India's rich history on Timeless India</p>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink} className="footer-link">Home</a>
              <a href="#" style={styles.footerLink} className="footer-link">Timeline</a>
              <a href="#" style={styles.footerLink} className="footer-link">Civilizations</a>
              <a href="#" style={styles.footerLink} className="footer-link">About</a>
              <a href="#" style={styles.footerLink} className="footer-link">Contact</a>
            </div>
            <p style={styles.footerText}>&copy; 2025 Timeless India. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PostNehru;
