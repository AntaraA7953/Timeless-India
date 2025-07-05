import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Article {
  urlToImage: string;
  title: string;
  description: string;
  publishedAt: string;
  source: {
    name: string;
  };
  url: string;
}

interface NewsCardProps {
  article: Article;
  styles: any;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, styles }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
  };

  const handleCardClick = () => {
    window.open(article.url, "_blank");
  };

  return (
    <div style={styles.card} onClick={handleCardClick}>
      <div style={styles.cardHeader}>
        <img 
          src={article.urlToImage} 
          alt="news-image" 
          style={styles.cardImage}
        />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.newsTitle}>{article.title}</h3>
        <h6 style={styles.newsSource}>
          {article.source.name} · {formatDate(article.publishedAt)}
        </h6>
        <p style={styles.newsDesc}>{article.description}</p>
      </div>
    </div>
  );
};

const DailyEchoes: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = "61c4fb46541b4a08b86d3f02877d34d7";
  const url = `https://newsapi.org/v2/everything?q=`;

  const fetchNews = async (query: string) => {
    setLoading(true);
    try {
      const res = await fetch(url + query + "&apiKey=" + API_KEY);
      const data = await res.json();
      const filteredArticles = data.articles?.filter((article: Article) => article.urlToImage) || [];
      setArticles(filteredArticles);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews("India");
  }, []);

  const handleNavClick = (id: string) => {
    fetchNews(id);
    setActiveNav(id);
    setSearchQuery('');
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    fetchNews(searchQuery);
    setActiveNav(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const navItems = [
    { id: 'ipl', label: 'IPL' },
    { id: 'finance', label: 'Finance' },
    { id: 'politics', label: 'Politics' },
    { id: 'science', label: 'Science' },
    { id: 'technology', label: 'Technology' },
    { id: 'health', label: 'Health' }
  ];

  const styles = {
    root: {
      '--primary-color': '#0F4C5C',
      '--accent-color': '#FF6B6B',
      '--text-color': '#1A1A1A',
      '--muted-color': '#6c757d',
      '--bg-color': '#F9FAFB',
      '--card-bg': '#ffffff',
    } as React.CSSProperties,

    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box' as const,
      fontFamily: '"Poppins", sans-serif',
      color: 'var(--text-color)',
      backgroundColor: 'var(--bg-color)',
      minHeight: '100vh',
    },

    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
    },

    nav: {
      backgroundColor: 'var(--card-bg)',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
      position: 'fixed' as const,
      width: '100%',
      top: 0,
      zIndex: 1000,
    },

    mainNav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      flexWrap: 'wrap' as const,
      gap: '12px',
    },

    brandTitle: {
      fontFamily: '"Great Vibes", cursive',
      fontSize: '2.5rem',
      color: 'var(--primary-color)',
      margin: 0,
    },

    navLinks: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap' as const,
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },

    navItem: {
      cursor: 'pointer',
      color: 'var(--primary-color)',
      fontSize: '1rem',
      transition: 'color 0.3s',
      fontWeight: 500,
      padding: '4px 8px',
      borderRadius: '4px',
    },

    navItemActive: {
      color: 'var(--accent-color)',
      fontWeight: 'bold',
    },

    searchBar: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
    },

    newsInput: {
      padding: '8px 12px',
      borderRadius: '6px',
      border: '2px solid #cbd5e1',
      outline: 'none',
      fontFamily: '"Roboto", sans-serif',
      fontSize: '14px',
      minWidth: '150px',
    },

    searchButton: {
      padding: '8px 20px',
      backgroundColor: 'var(--accent-color)',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 500,
      transition: 'background-color 0.3s ease',
      fontSize: '14px',
    },

    main: {
      marginTop: '100px',
      padding: '30px 0',
    },

    cardsContainer: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '24px',
      justifyContent: 'center',
      minHeight: '200px',
    },

    card: {
      width: '340px',
      backgroundColor: 'var(--card-bg)',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.07)',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
    },

    cardHeader: {
      width: '100%',
      height: '180px',
      overflow: 'hidden',
    },

    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      display: 'block',
    },

    cardContent: {
      padding: '16px',
    },

    newsTitle: {
      fontSize: '1.2rem',
      marginBottom: '10px',
      color: 'var(--primary-color)',
      fontWeight: 600,
      lineHeight: 1.4,
    },

    newsSource: {
      fontSize: '0.85rem',
      marginBottom: '10px',
      color: '#999',
      fontWeight: 400,
    },

    newsDesc: {
      fontSize: '1rem',
      fontFamily: '"Roboto", sans-serif',
      color: 'var(--muted-color)',
      lineHeight: 1.6,
      margin: 0,
    },

    loading: {
      textAlign: 'center' as const,
      fontSize: '1.2rem',
      color: 'var(--primary-color)',
      padding: '40px',
    },

    noResults: {
      textAlign: 'center' as const,
      fontSize: '1.1rem',
      color: 'var(--muted-color)',
      padding: '40px',
    },

    // Mobile responsive styles
    '@media (max-width: 768px)': {
      mainNav: {
        flexDirection: 'column' as const,
        alignItems: 'flex-start',
        gap: '12px',
      },
      navLinks: {
        flexWrap: 'wrap' as const,
        gap: '10px',
      },
      searchBar: {
        width: '100%',
      },
      newsInput: {
        flex: 1,
        width: '100%',
      },
      cardsContainer: {
        flexDirection: 'column' as const,
        alignItems: 'center',
      },
    },
  };

  return (
    <div style={styles.root}>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@500&family=Roboto:wght@400;500&display=swap");
          
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(255, 107, 107, 0.2);
          }
          
          .nav-item:hover {
            color: var(--accent-color);
          }
          
          .search-button:hover {
            background-color: #e05656;
          }
          
          @media (max-width: 768px) {
            .main-nav {
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
            }
            
            .nav-links {
              flex-wrap: wrap;
              gap: 10px;
            }
            
            .search-bar {
              width: 100%;
            }
            
            .news-input {
              flex: 1;
              width: 100%;
            }
            
            .cards-container {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
      
      <div style={styles.body}>
        <nav style={styles.nav}>
          <div style={{...styles.container, ...styles.mainNav}}>
            <h1 style={styles.brandTitle}>Daily Echoes</h1>
            
            <ul style={styles.navLinks}>
              {navItems.map((item) => (
                <li
                  key={item.id}
                  style={{
                    ...styles.navItem,
                    ...(activeNav === item.id ? styles.navItemActive : {}),
                  }}
                  className="nav-item"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
            
            <div style={styles.searchBar} className="search-bar">
              <input
                type="text"
                style={styles.newsInput}
                className="news-input"
                placeholder="e.g. Science"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                style={styles.searchButton}
                className="search-button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </nav>

        <main style={styles.main}>
          <div style={{...styles.container, ...styles.cardsContainer}} className="cards-container">
            {loading && (
              <div style={styles.loading}>Loading news...</div>
            )}
            
            {!loading && articles.length === 0 && (
              <div style={styles.noResults}>No articles found. Try a different search term.</div>
            )}
            
            {!loading && articles.map((article, index) => (
              <NewsCard key={index} article={article} styles={styles} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DailyEchoes;
