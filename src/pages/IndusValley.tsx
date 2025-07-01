import React from 'react';

const IndusValley: React.FC = () => {
  // Main container styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333'
  };

  // Time period header styles
  const timePeriodStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '2rem',
    padding: '1.5rem',
    backgroundColor: '#f5e6c8',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  // Block styles
  const infoBlockStyles: React.CSSProperties = {
    margin: '2rem 0',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const blockHeaderStyles: React.CSSProperties = {
    backgroundColor: '#556b2f',
    color: 'white',
    padding: '1rem 1.5rem'
  };

  const blockContentStyles = (variant?: string): React.CSSProperties => ({
    backgroundColor: variant === 'overview' ? '#f8f4e9' : variant === 'mystery' ? '#e8e8e8' : 'white',
    padding: '1.5rem',
    fontStyle: variant === 'mystery' ? 'italic' : 'normal'
  });

  // City card styles
  const cityCardStyles: React.CSSProperties = {
    margin: '1rem 0',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderLeft: '4px solid #8b4513',
    borderRadius: '4px'
  };

  // Grid layout styles
  const gridLayoutStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  };

  // Achievement card styles
  const achievementCardStyles: React.CSSProperties = {
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    transition: 'transform 0.3s ease'
  };

  const achievementCardHoverStyles: React.CSSProperties = {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)'
  };

  // Text styles
  const h1Styles: React.CSSProperties = {
    fontSize: '2.5rem',
    color: '#8b4513',
    marginBottom: '0.5rem'
  };

  const h2Styles: React.CSSProperties = {
    fontSize: '2rem',
    color: '#556b2f'
  };

  const h3Styles: React.CSSProperties = {
    margin: '0',
    fontSize: '1.5rem'
  };

  const h4Styles = (color: string): React.CSSProperties => ({
    color: color,
    marginTop: '0',
    marginBottom: '0.5rem'
  });

  const iconStyles: React.CSSProperties = {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  };

  // Media query styles would need a CSS-in-JS solution like styled-components,
  // but for simplicity we'll handle responsive via percentage-based widths

  return (
    <div style={containerStyles}>
      <header style={timePeriodStyles}>
        <h1 style={h1Styles}>3300-1300 BCE</h1>
        <h2 style={h2Styles}>Indus Valley Civilization</h2>
      </header>

      <div style={infoBlockStyles}>
        <div style={blockHeaderStyles}>
          <h3 style={h3Styles}>Overview</h3>
        </div>
        <div style={blockContentStyles('overview')}>
          <p>
            One of the world's earliest urban civilizations with:
          </p>
          <ul>
            <li>🏗️ Advanced drainage systems</li>
            <li>⚖️ Standardized weights</li>
            <li>📐 Sophisticated city planning</li>
          </ul>
        </div>
      </div>

      <div style={infoBlockStyles}>
        <div style={blockHeaderStyles}>
          <h3 style={h3Styles}>Major Cities</h3>
        </div>
        <div style={blockContentStyles()}>
          <div style={cityCardStyles}>
            <h4 style={h4Styles('#8b4513')}>Harappa</h4>
            <p>First discovered site with granaries and citadels</p>
          </div>
          <div style={cityCardStyles}>
            <h4 style={h4Styles('#8b4513')}>Mohenjo-daro</h4>
            <p>Famous for the Great Bath and grid layout</p>
          </div>
        </div>
      </div>

      <div style={infoBlockStyles}>
        <div style={blockHeaderStyles}>
          <h3 style={h3Styles}>Key Achievements</h3>
        </div>
        <div style={{ ...blockContentStyles(), ...gridLayoutStyles }}>
          <div 
            style={achievementCardStyles}
            onMouseEnter={e => Object.assign(e.currentTarget.style, achievementCardHoverStyles)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, achievementCardStyles)}
          >
            <div style={iconStyles}>🏙️</div>
            <h4 style={h4Styles('#556b2f')}>Urban Planning</h4>
            <p>Grid-based streets and advanced water management</p>
          </div>
          <div 
            style={achievementCardStyles}
            onMouseEnter={e => Object.assign(e.currentTarget.style, achievementCardHoverStyles)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, achievementCardStyles)}
          >
            <div style={iconStyles}>🧮</div>
            <h4 style={h4Styles('#556b2f')}>Standardization</h4>
            <p>Uniform weights and measurement systems</p>
          </div>
          <div 
            style={achievementCardStyles}
            onMouseEnter={e => Object.assign(e.currentTarget.style, achievementCardHoverStyles)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, achievementCardStyles)}
          >
            <div style={iconStyles}>🚢</div>
            <h4 style={h4Styles('#556b2f')}>Trade Networks</h4>
            <p>Connected with Mesopotamia and other regions</p>
          </div>
        </div>
      </div>

      <div style={infoBlockStyles}>
        <div style={blockHeaderStyles}>
          <h3 style={h3Styles}>The Great Mystery</h3>
        </div>
        <div style={blockContentStyles('mystery')}>
          <p>
            The Indus script remains undeciphered despite numerous attempts.
            Over 400 distinct symbols have been identified, but their meaning
            continues to elude researchers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndusValley;