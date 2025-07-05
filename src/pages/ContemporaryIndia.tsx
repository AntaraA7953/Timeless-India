import React, { useState, useEffect } from 'react';

const ContemporaryIndia: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // CSS Variables as JavaScript objects
  const colors = {
    saffron: '#FF9933',
    white: '#FFFFFF',
    green: '#138808',
    blue: '#000080',
    textColor: '#333333',
    lightBg: '#F9F9F9',
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Poppins', sans-serif",
    },
    body: {
      backgroundColor: colors.lightBg,
      color: colors.textColor,
      lineHeight: '1.7',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box' as const,
    },
    header: {
      background: `linear-gradient(135deg, ${colors.saffron}, ${colors.white}, ${colors.green})`,
      color: colors.blue,
      padding: '4rem 0',
      textAlign: 'center' as const,
      borderRadius: '0 0 20px 20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    headerOverlay: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('https://www.fabhotels.com/blog/wp-content/uploads/2019/06/India-Gate_1400.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.4,
      zIndex: 0,
    },
    headerContent: {
      position: 'relative' as const,
      zIndex: 1,
    },
    headerH1: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      fontWeight: 700,
      color: colors.blue,
      textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
    },
    headerP: {
      fontSize: '1.4rem',
      maxWidth: '800px',
      margin: '0 auto 1.5rem',
      color: colors.blue,
      fontWeight: 500,
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
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0,0,0,0.05)',
    },
    navTab: {
      padding: '1rem 2rem',
      background: colors.white,
      color: colors.blue,
      border: `2px solid ${colors.blue}`,
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
    },
    navTabActive: {
      background: colors.blue,
      color: 'white',
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(0,0,128,0.2)',
    },
    contentSection: {
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '3rem',
      marginBottom: '3rem',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0,0,0,0.05)',
      animation: 'fadeIn 0.7s ease',
    },
    sectionH2: {
      color: colors.blue,
      marginBottom: '2rem',
      fontSize: '2.5rem',
      borderBottom: `3px solid ${colors.saffron}`,
      paddingBottom: '0.8rem',
      fontWeight: 700,
    },
    sectionH3: {
      color: colors.green,
      margin: '2.5rem 0 1.5rem',
      fontSize: '1.8rem',
      fontWeight: 600,
      position: 'relative' as const,
      paddingLeft: '2rem',
    },
    sectionH3Before: {
      content: '""',
      position: 'absolute' as const,
      left: 0,
      top: '0.7em',
      height: '0.4em',
      width: '0.4em',
      background: colors.saffron,
      borderRadius: '50%',
    },
    paragraph: {
      marginBottom: '1.8rem',
      fontSize: '1.1rem',
      lineHeight: '1.8',
    },
    list: {
      marginLeft: '2rem',
      marginBottom: '2.5rem',
    },
    listItem: {
      marginBottom: '1.2rem',
      fontSize: '1.1rem',
      position: 'relative' as const,
      paddingLeft: '1.8rem',
    },
    listItemBefore: {
      content: '"•"',
      color: colors.saffron,
      fontWeight: 'bold',
      position: 'absolute' as const,
      left: 0,
      fontSize: '1.4rem',
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
      background: 'white',
      border: '1px solid rgba(0,0,0,0.05)',
      cursor: 'pointer',
    },
    imageCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(255, 153, 51, 0.2)',
    },
    imageCardImg: {
      width: '100%',
      height: '250px',
      objectFit: 'cover' as const,
      display: 'block',
    },
    imageCardText: {
      padding: '1.5rem',
      background: 'white',
      fontSize: '1rem',
      textAlign: 'center' as const,
      color: colors.blue,
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
      background: 'white',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
      textAlign: 'center' as const,
      borderTop: `4px solid ${colors.saffron}`,
    },
    statCardH4: {
      color: colors.blue,
      fontSize: '1.1rem',
      marginBottom: '1rem',
    },
    statCardNumber: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: colors.green,
      lineHeight: 1,
      marginBottom: '0.5rem',
    },
    statCardUnit: {
      color: colors.blue,
      fontSize: '1rem',
    },
    footer: {
      background: `linear-gradient(135deg, ${colors.blue}, ${colors.green})`,
      color: 'white',
      textAlign: 'center' as const,
      padding: '4rem 0',
      marginTop: '3rem',
      borderRadius: '20px 20px 0 0',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    footerOverlay: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('https://images.indianexpress.com/2023/08/india-map-1200.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1,
      zIndex: 0,
    },
    footerContent: {
      position: 'relative' as const,
      zIndex: 1,
    },
    footerP: {
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
      textDecoration: 'none',
      transition: 'transform 0.3s ease',
    },
    // Responsive styles
    '@media (max-width: 768px)': {
      headerH1: {
        fontSize: '2.5rem',
      },
      headerP: {
        fontSize: '1.2rem',
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

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Smooth scroll to top of content
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
        <p style={styles.imageCardText}>{caption}</p>
      </div>
    );
  };

  const StatCard: React.FC<{ number: string; unit: string; description: string }> = ({ number, unit, description }) => (
    <div style={styles.statCard}>
      <div style={styles.statCardNumber}>{number}</div>
      <div style={styles.statCardUnit}>{unit}</div>
      <h4 style={styles.statCardH4}>{description}</h4>
    </div>
  );

  const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 style={styles.sectionH3}>
      <span style={{
        position: 'absolute',
        left: 0,
        top: '0.7em',
        height: '0.4em',
        width: '0.4em',
        background: colors.saffron,
        borderRadius: '50%',
        content: '""',
        display: 'block',
      }}></span>
      {children}
    </h3>
  );

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerOverlay}></div>
        <div style={{ ...styles.container, ...styles.headerContent }}>
          <h1 style={styles.headerH1}>Contemporary India (2014-Present)</h1>
          <p style={styles.headerP}>India's rise as a global power in the 21st century</p>
          <p style={styles.headerP}>From economic growth to digital revolution to global leadership</p>
        </div>
      </header>

      <div style={styles.container}>
        {/* Navigation Tabs */}
        <div style={styles.navTabs}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'economy', label: 'Economy' },
            { id: 'technology', label: 'Technology' },
            { id: 'infrastructure', label: 'Infrastructure' },
            { id: 'global', label: 'Global India' },
            { id: 'society', label: 'Society & Culture' },
          ].map((tab) => (
            <button
              key={tab.id}
              style={{
                ...styles.navTab,
                ...(activeTab === tab.id ? styles.navTabActive : {}),
              }}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section style={styles.contentSection}>
            <h2 style={styles.sectionH2}>India in the 21st Century</h2>
            <img 
              src="https://www.livemint.com/lm-img/img/2023/09/10/1600x900/INDIA-G20-SUMMIT-368_1694262129978_1694342085008.jpg" 
              style={styles.fullWidthImage}
              alt="G20 Summit"
            />
            
            <p style={styles.paragraph}>
              Contemporary India stands at the cusp of global leadership, combining rapid economic growth with technological innovation, infrastructure development, and increasing geopolitical influence under Prime Minister Narendra Modi's leadership since 2014. The nation has transformed from being perceived as a sluggish economy to becoming the world's fastest-growing major economy.
            </p>
            
            <div style={styles.twoColumn}>
              <img 
                src="https://www.statista.com/graphic/1/263617/gross-domestic-product-gdp-growth-rate-in-india.jpg" 
                alt="India GDP Growth"
                style={styles.twoColumnImage}
              />
              <div>
                <SectionHeading>Key Characteristics</SectionHeading>
                <ul style={styles.list}>
                  {[
                    "Economic Powerhouse: World's fastest-growing major economy (avg. 7%+ GDP growth since 2014)",
                    "Demographic Dividend: Largest population (1.43B) with median age of 28.4 years",
                    "Tech Superpower: Home to world's 3rd largest startup ecosystem and 100+ unicorns",
                    "Global Influence: Key player in G20, QUAD, BRICS and voice of Global South",
                    "Digital Revolution: UPI processes more transactions than all global card networks combined",
                    "Infrastructure Boom: 2.5x increase in national highways since 2014",
                    "Space Leadership: First nation to land on Moon's south pole (Chandrayaan-3)",
                  ].map((item, index) => (
                    <li key={index} style={styles.listItem}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: colors.saffron,
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                      }}>•</span>
                      <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <SectionHeading>India by the Numbers (2023)</SectionHeading>
            <div style={styles.statsContainer}>
              <StatCard number="3.7" unit="trillion USD GDP" description="5th largest economy (from 10th in 2014)" />
              <StatCard number="1.43" unit="billion people" description="Largest population (18% of humanity)" />
              <StatCard number="900M+" unit="internet users" description="2nd largest digital population" />
              <StatCard number="112" unit="unicorns" description="3rd largest unicorn hub" />
              <StatCard number="$777B" unit="forex reserves" description="4th largest globally" />
              <StatCard number="8.9M" unit="km² area" description="7th largest country" />
            </div>
            
            <SectionHeading>Political Landscape</SectionHeading>
            <p style={styles.paragraph}>
              The Bharatiya Janata Party (BJP) under Prime Minister Narendra Modi has dominated Indian politics since 2014, winning consecutive elections in 2014 and 2019 with majority mandates. The party's ideology combines cultural nationalism with economic development, while opposition parties struggle to present a united alternative.
            </p>
            
            <div style={styles.imageContainer}>
              <ImageCard 
                src="https://etimg.etb2bimg.com/photo/96493840.cms"
                alt="Narendra Modi"
                caption="Narendra Modi - Most popular leader with 77% approval (Morning Consult 2023)"
              />
              <ImageCard 
                src="https://cdn.statcdn.com/Infographic/images/normal/32363.jpeg"
                alt="BJP Rally"
                caption="BJP won 303 seats in 2019 Lok Sabha (37.4% vote share)"
              />
              <ImageCard 
                src="https://www.livemint.com/lm-img/img/2023/09/01/1600x900/Opposition-leaders-in-Mumbai---PTI-_1693590656837.jpg"
                alt="Opposition Unity"
                caption="28 opposition parties formed INDIA alliance in 2023"
              />
            </div>
            
            <SectionHeading>Key Government Initiatives</SectionHeading>
            <ul style={styles.list}>
              {[
                "Digital India: 900M+ internet users, 1.2B mobile connections",
                "Make in India: Manufacturing share of GDP increased from 15% to 17%",
                "Swachh Bharat: 110M toilets built, 100% rural sanitation coverage",
                "Ayushman Bharat: World's largest health insurance (500M beneficiaries)",
                "PM Awas Yojana: 40M houses built for poor since 2015",
                "Ujjwala Yojana: 95M LPG connections to rural women",
                "Skill India: 50M+ youth trained since 2015",
              ].map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: colors.saffron,
                    fontWeight: 'bold',
                    fontSize: '1.4rem',
                  }}>•</span>
                  <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Economy Section */}
        {activeTab === 'economy' && (
          <section style={styles.contentSection}>
            <h2 style={styles.sectionH2}>Economic Powerhouse</h2>
            <img 
              src="https://thefinancepoint.com/wp-content/uploads/2021/06/BSE-NSE-1024x569.jpg" 
              alt="Mumbai Financial Capital"
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              India has emerged as the world's fastest-growing major economy with bold reforms, infrastructure push, and focus on manufacturing and self-reliance. From $1.8 trillion in 2014 to $3.7 trillion in 2023, India's economy has doubled in size, overtaking the UK to become the 5th largest.
            </p>
            
            <div style={styles.twoColumn}>
              <div>
                <SectionHeading>Key Economic Reforms</SectionHeading>
                <ul style={styles.list}>
                  {[
                    "GST (2017): Unified 17 taxes into single system, 1.4M monthly taxpayers",
                    "IBC (2016): Resolved ₹3.2 lakh crore of bad loans by 2023",
                    "Make in India: Manufacturing grew from 15% to 17% of GDP",
                    "PLI Schemes: ₹1.97 lakh crore incentives for 14 sectors",
                    "Atmanirbhar Bharat: ₹27.1 lakh crore stimulus during COVID",
                    "Corporate Tax Cut: Reduced from 30% to 22% for existing companies",
                    "Bank Mergers: 27 PSBs consolidated into 12 for efficiency",
                  ].map((item, index) => (
                    <li key={index} style={styles.listItem}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: colors.saffron,
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                      }}>•</span>
                      <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
              <img 
                src="https://images.indianexpress.com/2023/07/gst-1200.jpg"
                alt="GST Rollout"
                style={styles.twoColumnImage}
              />
            </div>
            
            <SectionHeading>Sectoral Growth Highlights</SectionHeading>
            <div style={styles.imageContainer}>
              <ImageCard 
                src="https://jiceias.com/wp-content/uploads/2025/04/Manufacturing-PMI-climbs-to-eight-month-high-of-58.1-in-March.jpg"
                alt="Manufacturing"
                caption="Manufacturing PMI averaged 54.5 since 2014 (25 months >55)"
              />
              <ImageCard 
                src="https://media.licdn.com/dms/image/v2/D5612AQEwkGGSlLYORQ/article-cover_image-shrink_720_1280/B56Ze1RUBkHUAI-/0/1751092905242?e=2147483647&v=beta&t=BQ6iedREesIgKbt1kr4L0qmO1m7XPpGUngZS8ELAIUs"
                alt="Startups"
                caption="112 unicorns worth $350B+ (3rd largest ecosystem)"
              />
              <ImageCard 
                src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Renewable_energy_share_India_2013.png"
                alt="Renewable Energy"
                caption="Renewable capacity up 250% to 179GW (43% of total capacity)"
              />
            </div>
            
            <SectionHeading>Economic Indicators (2023)</SectionHeading>
            <div style={styles.statsContainer}>
              <StatCard number="7.8%" unit="GDP growth (2023-24)" description="Fastest among major economies" />
              <StatCard number="$777B" unit="Foreign reserves" description="4th largest globally" />
              <StatCard number="$100B+" unit="FDI annually" description="Record inflows since 2014" />
              <StatCard number="5th" unit="largest economy" description="From 10th in 2014" />
              <StatCard number="6.6%" unit="CPI inflation" description="Within RBI target band" />
              <StatCard number="$776B" unit="Merchandise exports" description="Record high in 2022-23" />
            </div>
            
            <SectionHeading>Key Economic Achievements</SectionHeading>
            <ul style={styles.list}>
              {[
                "Per capita income doubled from $1,500 (2014) to $3,000 (2023)",
                "Formalized economy: 6.2M new taxpayers added since demonetization",
                "Digital payments grew from ₹1,100 crore (2014) to ₹12,000 crore daily (2023)",
                "India became net exporter of mobile phones (exported $11B in 2022 vs imported $3B in 2014)",
                "Forex reserves grew from $304B (2014) to $777B (2023) - enough to cover 15 months of imports",
                "Fiscal deficit reduced from 4.5% (2014) to 5.9% (2023) despite pandemic spending",
              ].map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: colors.saffron,
                    fontWeight: 'bold',
                    fontSize: '1.4rem',
                  }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technology Section */}
        {activeTab === 'technology' && (
          <section style={styles.contentSection}>
            <h2 style={styles.sectionH2}>Digital Revolution</h2>
            <img 
              src="https://d3npc7zk5gncpv.cloudfront.net/uploads/2017/09/Digital-India.jpg" 
              alt="Digital India"
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              India's tech ecosystem has transformed the nation into a global digital powerhouse with innovative public platforms and thriving startup culture. From being a tech services hub, India has emerged as a product innovation center with globally scalable digital public goods.
            </p>
            
            <div style={styles.twoColumn}>
              <img 
                src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/07/02122925/UPI-Sees-Minor-Dip-in-June-2025-Amidst-Strong-Yearly-Growth.jpg"
                alt="UPI Payments"
                style={styles.twoColumnImage}
              />
              <div>
                <SectionHeading>Digital Public Infrastructure</SectionHeading>
                <ul style={styles.list}>
                  {[
                    "UPI: 10B+ monthly transactions worth ₹18.3 lakh crore (2023)",
                    "Aadhaar: 1.37B enrollments covering 99% adults",
                    "CoWIN: Managed 2.2B+ vaccine doses digitally",
                    "OCEN: $1.1T addressable credit market for MSMEs",
                    "ONDC: 37 network participants, 1M+ transactions/month",
                    "DigiLocker: 150M+ users, 6B+ documents stored",
                    "DIKSHA: 250M+ school enrollments, 6M+ teachers",
                  ].map((item, index) => (
                    <li key={index} style={styles.listItem}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: colors.saffron,
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                      }}>•</span>
                      <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <SectionHeading>Tech Achievements</SectionHeading>
            <div style={styles.imageContainer}>
              <ImageCard 
                src="https://theentrepreneurindia.com/wp-content/uploads/2023/06/unicorn-1.jpg"
                alt="Unicorns"
                caption="112 unicorns worth $350B+ (3rd largest ecosystem)"
              />
              <ImageCard 
                src="https://etimg.etb2bimg.com/photo/88696752.cms"
                alt="Semiconductors"
                caption="₹76,000 crore semiconductor manufacturing incentives"
              />
              <ImageCard 
                src="https://intellisourcetech.net/wp-content/uploads/2023/10/More-Intelligent-Choices.jpg"
                alt="AI Development"
                caption="AI market to reach $17B by 2027 (growing at 25% CAGR)"
              />
            </div>
            
            <SectionHeading>Internet & Mobile Growth</SectionHeading>
            <div style={styles.statsContainer}>
              <StatCard number="900M+" unit="internet users" description="2nd largest userbase" />
              <StatCard number="1.2B" unit="mobile connections" description="2nd highest globally" />
              <StatCard number="$0.17" unit="per GB" description="Cheapest data globally" />
              <StatCard number="$1T+" unit="annual transactions" description="Digital payments volume" />
            </div>
            
            <SectionHeading>Space Technology Milestones</SectionHeading>
            <ul style={styles.list}>
              {[
                "Chandrayaan-3: First to land on Moon's south pole (Aug 2023)",
                "Mangalyaan: Successful Mars mission at $74M (cheapest ever)",
                "Gaganyaan: Human spaceflight program (1st test 2023)",
                "SSLV: Small satellite launch vehicle (maiden flight 2022)",
                "OneWeb: Launched 36 satellites (ISRO's 1st commercial mission)",
                "NavIC: Indigenous GPS alternative with 7 satellites",
              ].map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: colors.saffron,
                    fontWeight: 'bold',
                    fontSize: '1.4rem',
                  }}>•</span>
                  <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Infrastructure Section */}
        {activeTab === 'infrastructure' && (
          <section style={styles.contentSection}>
            <h2 style={styles.sectionH2}>Infrastructure Transformation</h2>
            <img 
              src="https://d3mbwbgtcl4x70.cloudfront.net/Delhi_Mumbai_Expressway_Route_f2bcaa31a4.webp" 
              alt="Expressway"
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              Unprecedented infrastructure development is reshaping India's landscape with world-class highways, railways, airports, and urban systems. Infrastructure investment has increased from ₹1.8 lakh crore (2014) to ₹10 lakh crore (2023) - a 5.5x jump.
            </p>
            
            <div style={styles.twoColumn}>
              <div>
                <SectionHeading>Major Projects</SectionHeading>
                <ul style={styles.list}>
                  {[
                    "Bharatmala: 83,677 km highways (₹5.35 lakh crore)",
                    "Sagarmala: 574 port projects worth ₹6 lakh crore",
                    "Bullet Train: Mumbai-Ahmedabad (508 km, ₹1.1 lakh crore)",
                    "Metro Expansion: 27 cities (859 km operational, 1,000+ km under construction)",
                    "RRTS: Delhi-Meerut (82 km, ₹30,000 crore)",
                    "Dedicated Freight Corridors: 2 routes (3,360 km, ₹1.24 lakh crore)",
                    "Jal Jeevan Mission: 73% rural households with tap water (from 17% in 2019)",
                  ].map((item, index) => (
                    <li key={index} style={styles.listItem}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: colors.saffron,
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                      }}>•</span>
                      <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
              <img 
                src="https://www.passengerterminaltoday.com/wp-content/uploads/2020/12/Perspective-of-City-Side-Elevation.jpg"
                alt="New Airport"
                style={styles.twoColumnImage}
              />
            </div>
            
            <SectionHeading>Infrastructure Highlights</SectionHeading>
            <div style={styles.imageContainer}>
              <ImageCard 
                src="https://blog.civilianz.com/wp-content/uploads/2021/04/20201003125107_Atal-tunnel.jpg"
                alt="Atal Tunnel"
                caption="Atal Tunnel (9.02 km) - World's longest highway tunnel above 10,000 ft"
              />
              <ImageCard 
                src="https://images.indianexpress.com/2021/12/kashi2.jpg"
                alt="Kashi Corridor"
                caption="Kashi Vishwanath Corridor (₹900 crore, 5 lakh sq ft area)"
              />
              <ImageCard 
                src="https://cms.thewire.in/wp-content/uploads/2020/05/A531-HCP-CENTRAL-VISTA-IMAGE-1.jpg"
                alt="Central Vista"
                caption="Central Vista (₹13,450 crore, new Parliament building)"
              />
              <ImageCard 
                src="https://images.cnbctv18.com/uploads/2025/06/chenab-rail-bridge-11-2025-06-1a54101e20f6c1992115f5df93ccd238.jpg"
                alt="Chenab Railway Bridge"
                caption="Chenab Railway Bridge (₹1,486 crore, world's highest railway bridge over Chenab River in Jammu & Kashmir)"
              />
              <ImageCard 
                src="https://swarajya.gumlet.io/swarajya/2022-02/e1caf4d5-210c-40ee-8a3e-bc5e2e9a8fb6/Vande_Bharat_train_image.png?q=25&auto=format,compress&format=webp"
                alt="Vande Bharat Trains"
                caption="Vande Bharat Trains (₹100 crore, semi-high-speed indigenous trains for faster intercity travel)"
              />
            </div>
            
            <SectionHeading>By the Numbers (2014 vs 2023)</SectionHeading>
            <div style={styles.statsContainer}>
              <StatCard number="200%" unit="increase" description="National highways (91,287 km vs 79,116 km)" />
              <StatCard number="148" unit="airports" description="From 74 in 2014 (100% increase)" />
              <StatCard number="52,247" unit="km" description="Railway electrification (94% of broad gauge)" />
              <StatCard number="100%" unit="villages" description="Electrified (from 97% in 2014)" />
              <StatCard number="4.5x" unit="increase" description="Daily flights (1,200 to 5,400)" />
              <StatCard number="2.5x" unit="increase" description="Port capacity (1,500 MTPA to 2,600 MTPA)" />
            </div>
            
            <SectionHeading>Urban Infrastructure</SectionHeading>
            <ul style={styles.list}>
              {[
                "Smart Cities: ₹2 lakh crore for 100 cities (5,151 projects completed)",
                "AMRUT: ₹1.1 lakh crore for urban water supply and sanitation",
                "Metro Rail: 859 km operational (from 248 km in 2014)",
                "RRTS: Regional rapid transit system (82 km Delhi-Meerut phase-1)",
                "Waste Management: 75% waste processing (from 18% in 2014)",
                "Housing: PMAY built 4 crore urban and rural houses",
              ].map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: colors.saffron,
                    fontWeight: 'bold',
                    fontSize: '1.4rem',
                  }}>•</span>
                  <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Global India Section */}
        {activeTab === 'global' && (
          <section style={styles.contentSection}>
            <h2 style={styles.sectionH2}>Global Leadership</h2>
            <img 
              src="https://atta.travel/static/96e2a065-2f90-4b33-b40a840c421abe8a/1500x1000_highestperformance__49ea84f9c2ba/G20-Summit.jpg" 
              alt="G20 Summit"
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              India has emerged as a key global player, balancing relations between major powers while championing the Global South and setting ambitious climate goals. From being a balancing power, India is now seen as a leading power shaping global governance.
            </p>
            
            <div style={styles.twoColumn}>
              <img 
                src="https://carnegie-production-assets.s3.amazonaws.com/static/media/images/GettyImages-8734636104.jpg"
                alt="India-US Relations"
                style={styles.twoColumnImage}
              />
              <div>
                <SectionHeading>Strategic Achievements</SectionHeading>
                <ul style={styles.list}>
                  {[
                    "G20 Presidency: African Union inclusion, LiFE initiative",
                    "QUAD Member: Indo-Pacific security partnership",
                    "UNSC: Non-permanent member 2021-22 (8th term)",
                    "Climate Leadership: Net zero by 2070, 500GW renewables by 2030",
                    "Vaccine Maitri: Supplied 290M doses to 100+ countries",
                    "Solar Alliance: 116 countries joined ISA HQ'd in India",
                    "Arctic Policy: Secured observer status in Arctic Council",
                  ].map((item, index) => (
                    <li key={index} style={styles.listItem}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: colors.saffron,
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                      }}>•</span>
                      <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <SectionHeading>Global Recognition</SectionHeading>
            <div style={styles.imageContainer}>
              <ImageCard 
                src="https://www.hindustantimes.com/ht-img/img/2023/06/22/1600x900/US-India-19_1687465195911_1687465237292.jpg"
                alt="Modi US Congress"
                caption="PM Modi addressed US Congress twice (2016, 2023) - rare honor"
              />
              <ImageCard 
                src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2022/07/16/rmg-orders-fell-down-up-to-30-for-july-to-february.png"
                alt="India-Russia"
                caption="Record $50B trade with Russia in 2022-23 amid Ukraine war"
              />
              <ImageCard 
                src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/08/chandrayaan-3/25055684-1-eng-GB/Chandrayaan-3_pillars.jpg"
                alt="Chandrayaan-3"
                caption="Chandrayaan-3 made India 1st on Moon's south pole (Aug 2023)"
              />
            </div>
            
            <SectionHeading>Global Rankings (2023)</SectionHeading>
            <div style={styles.statsContainer}>
              <StatCard number="5th" unit="largest economy" description="From 10th in 2014" />
              <StatCard number="40th" unit="Global Innovation Index" description="From 81st in 2015" />
              <StatCard number="3rd" unit="startup ecosystem" description="112 unicorns, 100K+ startups" />
              <StatCard number="8th" unit="military strength" description="Global Firepower Index" />
            </div>
            
            <SectionHeading>Soft Power & Diaspora</SectionHeading>
            <ul style={styles.list}>
              {[
                "Yoga Day: Celebrated in 192 UN member states annually",
                "Bollywood: ₹20,000 crore industry reaching 3B+ people",
                "Cuisine: 3rd most popular globally (after Italian, Chinese)",
                "Diaspora: 32M NRIs/PIOs sending $110B remittances (2022)",
                "Tourism: 8.9M foreign tourists in 2022 (pre-pandemic peak was 10.9M)",
                "Education Hub: 50,000+ foreign students in Indian universities",
              ].map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: colors.saffron,
                    fontWeight: 'bold',
                    fontSize: '1.4rem',
                  }}>•</span>
                  <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Society & Culture Section */}
        {activeTab === 'society' && (
          <section style={styles.contentSection}>
            <h2 style={styles.sectionH2}>Society & Culture</h2>
            <img 
              src="https://i0.wp.com/avenuemail.in/wp-content/uploads/2025/02/DALL%C2%B7E-2025-02-27-16.33.23-A-vibrant-collage-representing-Indias-cultural-diversity.-The-image-includes-children-learning-about-Indias-traditions-engaging-in-activities-like-.webp?fit=1792%2C1024&ssl=1" 
              alt="Indian Diversity"
              style={styles.fullWidthImage}
            />
            
            <p style={styles.paragraph}>
              Contemporary Indian society balances rapid modernization with traditional values, witnessing social transformation amid persistent challenges. With 28% urban population and 600,000 villages, India presents a complex tapestry of development and tradition.
            </p>
            
            <div style={styles.twoColumn}>
              <div>
                <SectionHeading>Social Changes</SectionHeading>
                <ul style={styles.list}>
                  {[
                    "Women Empowerment: 33% reservation in legislatures (2023 bill)",
                    "Education: NEP 2020 reforms, GER up to 27.3% (from 23% in 2014)",
                    "Healthcare: Ayushman Bharat covers 500M poor (world's largest)",
                    "Entrepreneurship: 20% of unicorns have women founders",
                    "LGBTQ+ Rights: 377 decriminalized (2018), growing acceptance",
                    "Sanitation: 100% rural sanitation (from 39% in 2014)",
                    "Financial Inclusion: 500M+ Jan Dhan accounts opened since 2014",
                  ].map((item, index) => (
                    <li key={index} style={styles.listItem}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: colors.saffron,
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                      }}>•</span>
                      <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
              <img 
                src="https://kunalbooks.com/wp-content/uploads/2019/11/9788193396230.jpg"
                alt="Women Empowerment"
                style={styles.twoColumnImage}
              />
            </div>
            
            <SectionHeading>Cultural Trends</SectionHeading>
            <div style={styles.imageContainer}>
              <ImageCard 
                src="https://cdn.dnaindia.com/sites/default/files/2023/03/13/2578571-untitled-design-2023-03-13t084643.695.png?im=FitAndFill=(1200,900)"
                alt="Indian Cinema"
                caption="RRR won Oscar (2023), ₹1,200 crore global box office"
              />
              <ImageCard 
                src="https://assets.amazon.science/dims4/default/5338458/2147483647/strip/true/crop/1735x976+1+0/resize/1440x810!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2F70%2Faf%2Fc128584b41a8ae8a7643cf59b7ec%2Fleadimage-booklisticlejune-10.png"
                alt="Indian Literature"
                caption="Indian authors sold 100M+ books globally in 2022"
              />
              <ImageCard 
                src="https://im.indiatimes.in/content/2024/May/Sabyasachi-net-worth_6639e3595db07.jpg?w=1200&h=900&cc=1&webp=1&q=75"
                alt="Indian Fashion"
                caption="Indian designers showcased at Paris, NY, London fashion weeks"
              />
            </div>
            
            <SectionHeading>Social Indicators (2023)</SectionHeading>
            <div style={styles.statsContainer}>
              <StatCard number="70.8" unit="years" description="Life expectancy (from 67.9 in 2014)" />
              <StatCard number="74.4%" unit="literacy rate" description="From 72% in 2011 census" />
              <StatCard number="21.9%" unit="poverty rate" description="From 29.8% in 2011 (NITI Aayog)" />
              <StatCard number="0.633" unit="HDI score" description="Medium human development" />
            </div>
            
            <SectionHeading>Ongoing Challenges</SectionHeading>
            <ul style={styles.list}>
              {[
                "Employment: 7.8% unemployment rate (CMIE 2023)",
                "Inequality: Top 10% hold 77% of national wealth (Oxfam)",
                "Environment: 14 of 20 most polluted cities globally in India",
                "Education Quality: Only 50% of grade 5 students can read grade 2 text",
                "Healthcare Access: 1 doctor per 1,511 people (WHO recommends 1:1,000)",
                "Urban Planning: Only 37% urban sewage treated before disposal",
              ].map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: colors.saffron,
                    fontWeight: 'bold',
                    fontSize: '1.4rem',
                  }}>•</span>
                  <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerOverlay}></div>
        <div style={{ ...styles.container, ...styles.footerContent }}>
          <h3>India's Journey Continues</h3>
          <p style={styles.footerP}>
            As the world's largest democracy enters its Amrit Kaal period towards 2047, it stands poised to reclaim its historic position as a leading global civilization with goals to become a $30 trillion economy and fully developed nation by 2047.
          </p>
          <div style={styles.footerLinks}>
            {['Home', 'Timeline', 'Civilizations', 'About', 'Contact'].map((link) => (
              <a 
                key={link}
                href="#" 
                style={styles.footerLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link}
              </a>
            ))}
          </div>
          <div style={styles.socialLinks}>
            {['twitter', 'facebook', 'instagram', 'youtube'].map((social) => (
              <a 
                key={social}
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <i className={`fab fa-${social}`}></i>
              </a>
            ))}
          </div>
          <p>&copy; 2023 Timeless India. Celebrating India's civilizational journey.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContemporaryIndia;
