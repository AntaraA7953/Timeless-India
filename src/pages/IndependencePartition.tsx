import React, { useState, useEffect } from 'react';

const IndependencePartition: React.FC = () => {
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
      '--primary-color': '#0D47A1',
      '--secondary-color': '#E53935',
      '--accent-color': '#00ffe1',
      '--text-color': '#212121',
      '--light-color': '#F5F5F5',
      '--highlight-color': '#1E88E5',
      '--dark-color': '#263238',
      '--subheading-primary': '#1565C0',
      '--subheading-secondary': '#C62828',
      '--subheading-accent': '#ffc800',
    } as React.CSSProperties,
    
    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box' as const,
      fontFamily: "'Merriweather', serif",
      backgroundColor: 'var(--light-color)',
      color: 'var(--text-color)',
      lineHeight: 1.8,
    },

    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },

    header: {
      backgroundColor: 'var(--primary-color)',
      color: 'white',
      padding: '3rem 0',
      textAlign: 'center' as const,
      borderRadius: '0 0 20px 20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
      position: 'relative' as const,
      overflow: 'hidden' as const,
    },

    headerBefore: {
      content: '""',
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "url('https://i.pinimg.com/736x/0b/c5/27/0bc527eeae12292757e2215d6ebf58db.jpg') center/cover",
      opacity: 0.6,
      zIndex: 0,
    },

    headerContainer: {
      position: 'relative' as const,
      zIndex: 1,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },

    headerH1: {
      fontSize: '3rem',
      marginBottom: '0.8rem',
      fontWeight: 700,
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      margin: '0 0 0.8rem 0',
    },

    headerP: {
      fontSize: '1.3rem',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto 1.2rem',
      color: 'rgba(255, 255, 255, 0.9)',
    },

    navTabs: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
      gap: '15px',
      marginBottom: '3rem',
      background: 'white',
      padding: '1.5rem',
      borderRadius: '15px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    },

    navTab: {
      padding: '1rem 2rem',
      background: 'var(--accent-color)',
      color: 'var(--text-color)',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },

    navTabActive: {
      background: 'var(--subheading-secondary)',
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
      animation: 'fadeIn 0.7s ease',
    },

    contentSectionActive: {
      display: 'block',
    },

    sectionH2: {
      color: 'var(--primary-color)',
      marginBottom: '2rem',
      fontSize: '2.3rem',
      borderBottom: '3px solid var(--accent-color)',
      paddingBottom: '0.8rem',
      fontWeight: 700,
      margin: '0 0 2rem 0',
    },

    sectionH3: {
      color: 'var(--subheading-primary)',
      margin: '2.5rem 0 1.5rem',
      fontSize: '1.8rem',
      fontWeight: 600,
      position: 'relative' as const,
      paddingLeft: '1.5rem',
    },

    sectionH3Before: {
      content: '""',
      position: 'absolute' as const,
      left: 0,
      top: '0.6em',
      height: '0.5em',
      width: '0.5em',
      background: 'var(--subheading-accent)',
      borderRadius: '50%',
    },

    sectionP: {
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },

    sectionUl: {
      marginLeft: '2.5rem',
      marginBottom: '2rem',
      listStyle: 'none',
    },

    sectionLi: {
      marginBottom: '1rem',
      fontSize: '1.1rem',
      position: 'relative' as const,
      paddingLeft: '1.5rem',
    },

    sectionLiBefore: {
      content: '"•"',
      color: 'var(--highlight-color)',
      fontWeight: 'bold',
      position: 'absolute' as const,
      left: 0,
    },

    imageContainer: {
      margin: '2.5rem 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
    },

    imageCard: {
      borderRadius: '12px',
      overflow: 'hidden' as const,
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s ease',
      background: 'white',
      border: '1px solid rgba(0,0,0,0.05)',
      cursor: 'pointer',
    },

    imageCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(13, 71, 161, 0.25)',
    },

    imageCardImg: {
      width: '100%',
      height: '250px',
      objectFit: 'cover' as const,
      display: 'block',
    },

    imageCardP: {
      padding: '1.2rem',
      background: 'white',
      fontSize: '1rem',
      textAlign: 'center' as const,
      color: 'var(--dark-color)',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      margin: 0,
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

    twoColumnImg: {
      width: '100%',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    },

    twoColumnDiv: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
    },

    footer: {
      backgroundColor: 'var(--primary-color)',
      color: 'white',
      textAlign: 'center' as const,
      padding: '3rem 0',
      marginTop: '3rem',
      borderRadius: '20px 20px 0 0',
      position: 'relative' as const,
      overflow: 'hidden' as const,
    },

    footerBefore: {
      content: '""',
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "url('') center/cover",
      opacity: 0.4,
      zIndex: 0,
    },

    footerContainer: {
      position: 'relative' as const,
      zIndex: 1,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },

    footerP: {
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
      color: 'rgba(255, 255, 255, 0.9)',
    },

    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: '1.5rem',
    },

    footerLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'opacity 0.3s ease',
      fontSize: '1.1rem',
    },

    '@media (max-width: 768px)': {
      headerH1: {
        fontSize: '2.2rem',
      },
      headerP: {
        fontSize: '1.1rem',
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

  const ImageCard: React.FC<{ src: string; alt: string; caption: string }> = ({ src, alt, caption }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        style={{
          ...styles.imageCard,
          ...(isHovered ? styles.imageCardHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={src} alt={alt} style={styles.imageCardImg} />
        <p style={styles.imageCardP}>{caption}</p>
      </div>
    );
  };

  const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 style={styles.sectionH3}>
      <span style={{
        position: 'absolute',
        left: 0,
        top: '0.6em',
        height: '0.5em',
        width: '0.5em',
        background: 'var(--subheading-accent)',
        borderRadius: '50%',
        display: 'inline-block'
      }}></span>
      {children}
    </h3>
  );

  const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li style={styles.sectionLi}>
      <span style={{
        color: 'var(--highlight-color)',
        fontWeight: 'bold',
        position: 'absolute',
        left: 0,
      }}>•</span>
      {children}
    </li>
  );

  return (
    <div style={styles.root}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap');
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          :root {
            --primary-color: #0D47A1;
            --secondary-color: #E53935;
            --accent-color: #00ffe1;
            --text-color: #212121;
            --light-color: #F5F5F5;
            --highlight-color: #1E88E5;
            --dark-color: #263238;
            --subheading-primary: #1565C0;
            --subheading-secondary: #C62828;
            --subheading-accent: #ffc800;
          }
          
          @media (max-width: 768px) {
            .two-column {
              grid-template-columns: 1fr !important;
            }
            .image-container {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
      
      <div style={styles.body}>
        <header style={styles.header}>
          <div style={styles.headerBefore}></div>
          <div style={styles.headerContainer}>
            <h1 style={styles.headerH1}>Indian Independence & Partition</h1>
            <p style={styles.headerP}>The triumph of freedom and the tragedy of division - August 1947</p>
            <p style={styles.headerP}>"Long years ago we made a tryst with destiny..." - Jawaharlal Nehru</p>
          </div>
        </header>

        <div style={styles.container}>
          <div style={styles.navTabs}>
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'freedom-struggle', label: 'Freedom Struggle' },
              { id: 'partition', label: 'Partition' },
              { id: 'leaders', label: 'Key Leaders' },
              { id: 'aftermath', label: 'Aftermath' },
              { id: 'legacy', label: 'Legacy' }
            ].map(tab => (
              <button
                key={tab.id}
                style={{
                  ...styles.navTab,
                  ...(activeTab === tab.id ? styles.navTabActive : {})
                }}
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
              ...(activeTab === 'overview' ? styles.contentSectionActive : {})
            }}
          >
            <h2 style={styles.sectionH2}>Road to Independence</h2>
            <img 
              src="https://media.assettype.com/theleaflet/import/wp-content/uploads/2022/08/Inddian-Independence.png?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" 
              alt="Indian Independence" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.sectionP}>
              After nearly 200 years of British rule, India gained independence on August 15, 1947, 
              but was simultaneously partitioned into two nations - India and Pakistan.
            </p>
            
            <div style={styles.twoColumn} className="two-column">
              <img 
                src="https://www.pbs.org/thestoryofindia/images/gallery/indian_national_congress.jpg" 
                alt="Indian National Congress" 
                style={styles.twoColumnImg}
              />
              <div style={styles.twoColumnDiv}>
                <SectionHeader>Key Events</SectionHeader>
                <ul style={styles.sectionUl}>
                  <ListItem><strong>1885:</strong> Indian National Congress founded</ListItem>
                  <ListItem><strong>1919:</strong> Jallianwala Bagh massacre</ListItem>
                  <ListItem><strong>1930:</strong> Salt March by Gandhi</ListItem>
                  <ListItem><strong>1942:</strong> Quit India Movement</ListItem>
                  <ListItem><strong>1947:</strong> Independence and Partition</ListItem>
                </ul>
              </div>
            </div>
            
            <SectionHeader>The Partition Plan</SectionHeader>
            <div style={styles.imageContainer} className="image-container">
              <ImageCard
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201608/border-line_647_081716105940.jpg?VersionId=FXyQmfTSprFGweH6harIJDHdDnjFmjhq"
                alt="Radcliffe Line"
                caption="Radcliffe Line - Drawn in just 5 weeks"
              />
              <ImageCard
                src="https://tehelka.com/media/2022/06/Lord-Mountbatten-Nehru-and-Jinnah.jpg"
                alt="Mountbatten with leaders"
                caption="Mountbatten with Jinnah and Nehru"
              />
              <ImageCard
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Partition_of_India_1947_en.svg/500px-Partition_of_India_1947_en.svg.png"
                alt="Partition Map"
                caption="Partition map showing new borders"
              />
            </div>
          </section>

          {/* Freedom Struggle Section */}
          <section 
            style={{
              ...styles.contentSection,
              ...(activeTab === 'freedom-struggle' ? styles.contentSectionActive : {})
            }}
          >
            <h2 style={styles.sectionH2}>The Freedom Struggle</h2>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Marche_sel.jpg" 
              alt="Dandi March" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.sectionP}>
              Decades of non-violent resistance and political negotiations led to India's independence.
            </p>
            
            <div style={styles.twoColumn} className="two-column">
              <div style={styles.twoColumnDiv}>
                <SectionHeader>Major Movements</SectionHeader>
                <ul style={styles.sectionUl}>
                  <ListItem><strong>Non-Cooperation Movement (1920-22):</strong> First mass movement led by Gandhi</ListItem>
                  <ListItem><strong>Civil Disobedience (1930-34):</strong> Salt Satyagraha and protests</ListItem>
                  <ListItem><strong>Quit India (1942):</strong> "Do or Die" call for immediate independence</ListItem>
                  <ListItem><strong>Royal Indian Navy Mutiny (1946):</strong> Last major rebellion</ListItem>
                </ul>
              </div>
              <img 
                src="https://s7ap1.scene7.com/is/image/incredibleindia/jallianwala-bagh-amritsar-punjab-3-attr-hero?qlt=82&ts=1726662293255" 
                alt="Jallianwala Bagh" 
                style={styles.twoColumnImg}
              />
            </div>
            
            <SectionHeader>Turning Points</SectionHeader>
            <div style={styles.imageContainer} className="image-container">
              <ImageCard
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gandhi_spinning.jpg/2560px-Gandhi_spinning.jpg"
                alt="Gandhi spinning"
                caption="Gandhi's spinning wheel - Symbol of self-reliance"
              />
              <ImageCard
                src="https://images.indianexpress.com/2017/08/ina-trials-10.jpg"
                alt="INA Trials"
                caption="INA Trials - Galvanized public opinion"
              />
            </div>
          </section>

          {/* Partition Section */}
          <section 
            style={{
              ...styles.contentSection,
              ...(activeTab === 'partition' ? styles.contentSectionActive : {})
            }}
          >
            <h2 style={styles.sectionH2}>The Partition</h2>
            <img 
              src="https://www.abirpothi.com/wp-content/uploads/2024/02/Partition.jpg" 
              alt="Partition Refugees" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.sectionP}>
              The division of British India along religious lines created one of the largest mass migrations 
              in history and unprecedented violence.
            </p>
            
            <div style={styles.twoColumn} className="two-column">
              <img 
                src="https://media.npr.org/assets/img/2017/08/11/ap_470919014_wide-75d671ef05e778952f5b87078bcab741f75cd371.jpg?s=1400&c=100&f=jpeg" 
                alt="Partition Train" 
                style={styles.twoColumnImg}
              />
              <div style={styles.twoColumnDiv}>
                <SectionHeader>Key Facts</SectionHeader>
                <ul style={styles.sectionUl}>
                  <ListItem><strong>14-15 million</strong> people displaced</ListItem>
                  <ListItem><strong>1 million</strong> estimated deaths</ListItem>
                  <ListItem><strong>75,000 women</strong> abducted or assaulted</ListItem>
                  <ListItem>New borders drawn by <strong>Cyril Radcliffe</strong></ListItem>
                </ul>
              </div>
            </div>
            
            <SectionHeader>Human Cost</SectionHeader>
            <div style={styles.imageContainer} className="image-container">
              <ImageCard
                src="https://static01.nyt.com/images/2017/08/18/opinion/18ashraf-inyt/18ashraf-inyt-superJumbo.jpg"
                alt="Partition Violence"
                caption="Communal violence during Partition"
              />
              <ImageCard
                src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2017/03/15/Pictures/_89c57a92-097f-11e7-ba13-f6aef3964879.jpg"
                alt="Refugee Camp"
                caption="Refugee camps housed millions"
              />
            </div>
          </section>

          {/* Key Leaders Section */}
          <section 
            style={{
              ...styles.contentSection,
              ...(activeTab === 'leaders' ? styles.contentSectionActive : {})
            }}
          >
            <h2 style={styles.sectionH2}>Key Leaders</h2>
            <img 
              src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/10/pjimage-3-3.jpg?resize=696%2C392&ssl=1" 
              alt="Netaji with Azad Hind Fauj" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.sectionP}>
              The independence movement was led by visionary leaders with different approaches.
            </p>
            
            <div style={styles.twoColumn} className="two-column">
              <div style={styles.twoColumnDiv}>
                <SectionHeader>Major Figures</SectionHeader>
                <ul style={styles.sectionUl}>
                  <ListItem><strong>Mahatma Gandhi:</strong> Non-violent resistance</ListItem>
                  <ListItem><strong>Jawaharlal Nehru:</strong> First Prime Minister</ListItem>
                  <ListItem><strong>Sardar Patel:</strong> Unified princely states</ListItem>
                  <ListItem><strong>M.A. Jinnah:</strong> Founder of Pakistan</ListItem>
                  <ListItem><strong>Subhas Chandra Bose:</strong> Armed resistance</ListItem>
                </ul>
              </div>
              <img 
                src="https://www.thebeacon.in/wp-content/uploads/2019/03/Nehru_gandhi.jpg" 
                alt="Gandhi and Nehru" 
                style={styles.twoColumnImg}
              />
            </div>
            
            <SectionHeader>Leadership Styles</SectionHeader>
            <div style={styles.imageContainer} className="image-container">
              <ImageCard
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Marche_sel.jpg"
                alt="Gandhi Salt March"
                caption="Gandhi's mass mobilization"
              />
              <ImageCard
                src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/9/6/1252253835274/Second-world-war-Jawaharl-001.jpg?width=465&dpr=1&s=none&crop=none"
                alt="Nehru Independence Day"
                caption={`Nehru's "Tryst with Destiny" speech`}
              />
              <ImageCard
                src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/12/24/thumbs_b_c_2cf5773728648682392ffc53634e3777.jpg?v=115934"
                alt="Jinnah"
                caption="M.A. Jinnah - Pakistan's founder"
              />
            </div>
          </section>

          {/* Aftermath Section */}
          <section 
            style={{
              ...styles.contentSection,
              ...(activeTab === 'aftermath' ? styles.contentSectionActive : {})
            }}
          >
            <h2 style={styles.sectionH2}>Immediate Aftermath</h2>
            <img 
              src="https://www.redcross.org.uk/-/media/feature/projectred/16x9/aaa-stories-and-other/india-partition-refugees-arriving-in-lahore.jpg?sc_lang=en&mh=402&la=en&h=402&w=716&mw=716&hash=5FB4768567AA4FA9A13AAAAEC19AA323" 
              alt="Refugee Arrival" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.sectionP}>
              The sudden partition created enormous challenges for both new nations.
            </p>
            
            <div style={styles.twoColumn} className="two-column">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/da/Jammu_and_Kashmir_in_1946_map_of_India_by_National_Geographic.jpg" 
                alt="Kashmir Map" 
                style={styles.twoColumnImg}
              />
              <div style={styles.twoColumnDiv}>
                <SectionHeader>Major Issues</SectionHeader>
                <ul style={styles.sectionUl}>
                  <ListItem><strong>Refugee Crisis:</strong> Millions homeless</ListItem>
                  <ListItem><strong>Kashmir Conflict:</strong> Disputed territory</ListItem>
                  <ListItem><strong>Economic Disruption:</strong> Divided resources</ListItem>
                  <ListItem><strong>Communal Tensions:</strong> Lasting divisions</ListItem>
                </ul>
              </div>
            </div>
            
            <SectionHeader>Nation Building</SectionHeader>
            <div style={styles.imageContainer} className="image-container">
              <ImageCard
                src="https://assets.architecturaldigest.in/photos/65b21f5c16a0485c9a117ece/4:3/w_1440,h_1080,c_limit/republic%20day.png"
                alt="Constitution Signing"
                caption="Adoption of Indian Constitution (1950)"
              />
              <ImageCard
                src="https://give.do/blog/wp-content/uploads/2023/11/Childrens-Day-Jawaharlal-Nehrus-legacy-of-learning-and-leadership.jpg"
                alt="Nehru with children"
                caption="Nehru's vision for modern India"
              />
            </div>
          </section>

          {/* Legacy Section */}
          <section 
            style={{
              ...styles.contentSection,
              ...(activeTab === 'legacy' ? styles.contentSectionActive : {})
            }}
          >
            <h2 style={styles.sectionH2}>Lasting Legacy</h2>
            <img 
              src="https://www.fabhotels.com/blog/wp-content/uploads/2019/06/India-Gate_1400.jpg" 
              alt="India Gate" 
              style={styles.fullWidthImage}
            />
            
            <p style={styles.sectionP}>
              Independence and Partition continue to shape South Asia today.
            </p>
            
            <div style={styles.twoColumn} className="two-column">
              <div style={styles.twoColumnDiv}>
                <SectionHeader>Positive Outcomes</SectionHeader>
                <ul style={styles.sectionUl}>
                  <ListItem>World's largest democracy</ListItem>
                  <ListItem>Economic growth and development</ListItem>
                  <ListItem>Cultural renaissance</ListItem>
                  <ListItem>Non-aligned foreign policy</ListItem>
                </ul>
                
                <SectionHeader>Ongoing Challenges</SectionHeader>
                <ul style={styles.sectionUl}>
                  <ListItem>India-Pakistan tensions</ListItem>
                  <ListItem>Communal divisions</ListItem>
                  <ListItem>Refugee descendants' issues</ListItem>
                </ul>
              </div>
              <img 
                src="https://media.istockphoto.com/id/1396103141/photo/grunge-flags-of-india-and-pakistan-divided-by-barb-wire-illustration.jpg?s=612x612&w=0&k=20&c=aeO_aYueb05oB-84J5R66PK7WAX9yeGUecNE4Ca9HcY=" 
                alt="India Pakistan Flags" 
                style={styles.twoColumnImg}
              />
            </div>
            
            <SectionHeader>Modern Reflections</SectionHeader>
            <p style={styles.sectionP}>
              The events of 1947 remain deeply embedded in national memory and continue to influence 
              politics, culture and international relations.
            </p>
          </section>
        </div>

        <footer style={styles.footer}>
          <div style={styles.footerBefore}></div>
          <div style={styles.footerContainer}>
            <p style={styles.footerP}>Explore more about India's journey to independence on Timeless India</p>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>Home</a>
              <a href="#" style={styles.footerLink}>Timeline</a>
              <a href="#" style={styles.footerLink}>Civilizations</a>
              <a href="#" style={styles.footerLink}>About</a>
              <a href="#" style={styles.footerLink}>Contact</a>
            </div>
            <p style={styles.footerP}>&copy; 2025 Timeless India. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default IndependencePartition;
