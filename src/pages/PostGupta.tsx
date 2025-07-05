import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "kingdoms", label: "Regional Kingdoms" },
  { id: "culture", label: "Cultural Developments" },
  { id: "religion", label: "Religious Changes" },
  { id: "architecture", label: "Architecture" },
  { id: "legacy", label: "Legacy" },
];

const PostGupta = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vedic Period | Timeless India</title>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"/>
        <style>{`
          :root {
            /* Refined Royal & Earthy Palette */
            --primary-color: #8E6C88;    /* Regal purple */
            --secondary-color: #D4B483;  /* Warm gold */
            --accent-color: #A5C4D4;    /* Soft teal */
            --text-color: #3A2E2A;       /* Dark charcoal */
            --light-color: #F5F0E6;      /* Cream parchment */
            --highlight-color: #C17C74;  /* Terracotta */
            --dark-color: #4A3C31;       /* Rich brown */
        }

* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Merriweather', serif;
        }

        body {
            background-color: var(--light-color);
            color: var(--text-color);
            line-height: 1.8;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            background: linear-gradient(135deg, #8E6C88, #6A4A7C);
            color: #ffffff;
            padding: 3rem 0;
            text-align: center;
            border-radius: 0 0 20px 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
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
            background: url('https://www.civilsdaily.com/wp-content/uploads/2016/12/filevirupaksha-temple-at-pattadakal-jpg.jpeg') center/cover;
            opacity: 0.5;
            z-index: 0;
        }

        header .container {
            position: relative;
            z-index: 1;
        }

        header h1 {
            font-size: 3rem;
            margin-bottom: 0.8rem;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            color: #FFFFFF;
        }

        header p {
            font-size: 1.3rem;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto 1.2rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            color: #FFF9F3;
        }

        /* Navigation */
        .nav-tabs {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 3rem;
            background: rgba(255, 255, 255, 0.9);
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
            backdrop-filter: blur(5px);
        }

        .nav-tab {
            padding: 1rem 2rem;
            background: var(--secondary-color);
            color: var(--dark-color);
            border: none;
            border-radius: 30px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 1.1rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .nav-tab:hover, .nav-tab.active {
            background: var(--primary-color);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(142, 108, 136, 0.3);
        }

        /* Content Sections */
        .content-section {
            display: none;
            background-color: rgba(255, 255, 255, 0.92);
            border-radius: 15px;
            padding: 3rem;
            margin-bottom: 3rem;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
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
            color: var(--primary-color);
            margin-bottom: 2rem;
            font-size: 2.3rem;
            border-bottom: 3px solid var(--highlight-color);
            padding-bottom: 0.8rem;
            font-weight: 700;
        }

        .content-section h3 {
            color: var(--secondary-color);
            margin: 2.5rem 0 1.5rem;
            font-size: 1.8rem;
            font-weight: 600;
            position: relative;
            padding-left: 1.5rem;
        }

        .content-section h3::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.6em;
            height: 0.5em;
            width: 0.5em;
            background: var(--highlight-color);
            border-radius: 50%;
        }

        .content-section p {
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
            line-height: 1.8;
        }

        .content-section ul, .content-section ol {
            margin-left: 2.5rem;
            margin-bottom: 2rem;
        }

        .content-section li {
            margin-bottom: 1rem;
            font-size: 1.1rem;
            position: relative;
            padding-left: 1.5rem;
        }

        .content-section li::before {
            content: "•";
            color: var(--highlight-color);
            font-weight: bold;
            position: absolute;
            left: 0;
        }

        /* Image Styles */
        .image-container {
            margin: 2.5rem 0;
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
            position: relative;
        }

        .image-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(142, 108, 136, 0.25);
        }

        .image-card::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%);
            z-index: 1;
        }

        .image-card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
        }

        .image-card:hover img {
            transform: scale(1.05);
        }

        .image-card p {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1.5rem;
            background: transparent;
            font-size: 1rem;
            text-align: center;
            color: white;
            z-index: 2;
            margin: 0;
            font-weight: 500;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
        }

        .full-width-image {
            width: 100%;
            max-height: 500px;
            object-fit: cover;
            border-radius: 12px;
            margin: 2.5rem 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border: 1px solid rgba(0,0,0,0.05);
        }

        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: center;
            margin: 2.5rem 0;
        }

        .two-column img {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }

        .two-column img:hover {
            transform: scale(1.02);
        }

        .two-column div {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        /* Footer */
        footer {
            background: linear-gradient(135deg, #8E6C88, #5D3F6A);
            color: white;
            text-align: center;
            padding: 3rem 0;
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
            background: url('') center/cover;
            opacity: 0.4;
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
            margin-top: 1.5rem;
        }

        .footer-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            font-size: 1.1rem;
            padding: 0.5rem 1rem;
            border-radius: 20px;
        }

        .footer-links a:hover {
            background-color: rgba(255,255,255,0.15);
            text-decoration: none;
        }

        /* Decorative Elements */
        .decorative-border {
            height: 4px;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color), var(--highlight-color));
            margin: 2rem 0;
            border-radius: 2px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2.2rem;
            }
            
            header p {
                font-size: 1.1rem;
            }
            
            .nav-tabs {
                flex-direction: column;
                align-items: center;
                backdrop-filter: none;
                background: white;
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
        `}</style>
      </Helmet>
      <header>
        <div className="container">
          <h1>Post-Gupta Period</h1>
            <p>Exploring the regional kingdoms and cultural transformations after the Gupta Empire</p>
            <p>550 CE - 1200 CE | The Age of Regional Powers</p>
        </div>
      </header>
      <div className="container">
        <div className="nav-tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              aria-label={tab.label}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Sections */}
        <section id="overview" className={`content-section${activeTab === "overview" ? " active" : ""}`}>
        <h2>The Post-Gupta Period</h2>
            <img src="https://www.insightsonindia.com/wp-content/uploads/2022/07/harshawardhan.png" alt="Post-Gupta India Map" className="full-width-image"/>
            
            <p>The Post-Gupta period (550-1200 CE) saw the fragmentation of the Gupta Empire into numerous regional kingdoms, each developing distinct political and cultural identities. This era witnessed both the continuation of Gupta cultural achievements and new innovations in art, literature, and religion.</p>
            
            <div className="decorative-border"></div>
            
            <div className="two-column">
                <img src="https://pbs.twimg.com/media/E7mMJLNVcAI3MWG.jpg" alt="Harsha's Empire"/>
                <div>
                    <h3>Chronology</h3>
                    <ul>
                        <li><strong>Early Post-Gupta (550-750 CE):</strong> Rise of regional powers like the Maukharis, Pushyabhutis, and Chalukyas</li>
                        <li><strong>Middle Period (750-1000 CE):</strong> Dominance of the Pala, Pratihara, and Rashtrakuta empires</li>
                        <li><strong>Late Period (1000-1200 CE):</strong> Arrival of Turkic invaders and decline of classical Hindu kingdoms</li>
                    </ul>
                </div>
            </div>
            
            <h3>Political Landscape</h3>
            <p>After the Gupta collapse, India saw the rise of several powerful regional dynasties that competed for dominance in the subcontinent. Unlike the centralized Gupta Empire, this period was characterized by:</p>
            <ul>
                <li>Multiple competing power centers</li>
                <li>Complex feudal relationships</li>
                <li>Frequent warfare between regional powers</li>
                <li>Emergence of new administrative systems</li>
            </ul>
            
            <div className="image-container">
                <div className="image-card">
                    <img src="https://www.nextias.com/blog/wp-content/uploads/2024/09/222.png" alt="Harsha's Empire"/>
                    <p>Harsha's Empire (606-647 CE) - The last major empire before complete regionalization</p>
                </div>
                <div className="image-card">
                    <img src="https://theindosphere.com/wp-content/uploads/2025/01/image-1.png" alt="Tripartite Struggle"/>
                    <p>The Tripartite Struggle (8th-10th century) between Palas, Pratiharas and Rashtrakutas</p>
                </div>
                <div className="image-card">
                    <img src="https://i0.wp.com/glimpsesofhistory.com/wp-content/uploads/2020/08/chola-dynasty-map.jpg?fit=800%2C512&ssl=1" alt="Chola Empire"/>
                    <p>Chola Empire (9th-13th century) - Dominant power in the south</p>
                </div>
            </div>
        </section>


        <section id="kingdoms" className={`content-section${activeTab === "kingdoms" ? " active" : ""}`}>
          <h2>Regional Kingdoms</h2>
            <img src="https://99notes.in/wp-content/uploads/2022/10/image1-12.jpg" alt="Regional Kingdoms" className="full-width-image"/>
            
            <p>The political fragmentation after the Guptas led to the rise of powerful regional dynasties that dominated different parts of the subcontinent, each contributing to India's cultural mosaic.</p>
            
            <div className="two-column">
                <div>
                    <h3>Major Dynasties</h3>
                    <ul>
                        <li><strong>Pushyabhuti/Vardhana (Harsha's Empire):</strong> North India (606-647 CE)</li>
                        <li><strong>Pala Empire:</strong> Bengal and Bihar (8th-12th century)</li>
                        <li><strong>Pratihara Empire:</strong> Western and Northern India (6th-11th century)</li>
                        <li><strong>Rashtrakuta Empire:</strong> Deccan (8th-10th century)</li>
                        <li><strong>Chalukyas of Badami:</strong> Central and Southern India (6th-8th century)</li>
                        <li><strong>Pallavas:</strong> Tamil Nadu (3rd-9th century)</li>
                        <li><strong>Cholas:</strong> Tamil Nadu (9th-13th century)</li>
                    </ul>
                </div>
                <img src="https://pbs.twimg.com/media/Eb6AExvU8AAn9gt.jpg" alt="Kingdoms Map"/>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Notable Rulers</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://cdn-images.prepp.in/public/image/457cf42a2bb33e60949f675d75f2c05f.png?tr=w-300,h-232,c-force" alt="Harsha"/>
                    <p>Harshavardhana (606-647 CE) - Last great ruler of northern India</p>
                </div>
                <div className="image-card">
                    <img src="https://www.india-a2z.com/images/xTipu.jpg.pagespeed.ic.CImOl3atgR.jpg" alt="Dharmapala"/>
                    <p>Dharmapala (Pala ruler) - Patron of Buddhism and Nalanda</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Wall_paintings_depicted_in_the_cloister_Mandapa%2C_Big_Temple%2C_Thanjavur_-_3.JPG" alt="Rajaraja Chola"/>
                    <p>Rajaraja Chola I - Builder of the Brihadeeswarar Temple</p>
                </div>
            </div>
        </section>


        <section id="culture" className={`content-section${activeTab === "culture" ? " active" : ""}`}>
        <h2>Cultural Developments</h2>
            <img src="https://blogs.loc.gov/international-collections/files/2018/01/Image-2-Bhagavad-Gita-1024x728.jpg" alt="Sanskrit Manuscript" className="full-width-image"/>
            
            <p>The Post-Gupta period saw both the continuation of classical traditions and the emergence of new cultural forms that reflected regional identities and changing social conditions.</p>
            
            <div className="two-column">
                <div>
                    <h3>Literature</h3>
                    <ul>
                        <li><strong>Sanskrit:</strong> Continued as language of elite culture (Bana's Harshacharita)</li>
                        <li><strong>Regional Languages:</strong> Emergence of literary traditions in Prakrits, Tamil, Kannada, etc.</li>
                        <li><strong>Historical Writings:</strong> Biographies like Harshacharita and travel accounts</li>
                        <li><strong>Scientific Works:</strong> Continued production of texts on medicine, astronomy</li>
                    </ul>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFkHwd1KG8RpNxNCSgTNRazkMpZgz4b_ihQ&s" alt="Banabhatta"/>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Artistic Achievements</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Elephanta%20sculptures%20Expedition--bc5c7a.jpg" alt="Elephanta Caves"/>
                    <p>Elephanta Caves - Magnificent rock-cut Shiva temple</p>
                </div>
                <div className="image-card">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI_iGXyD9E-MZl_1zmkRdoyzriFYPfCFrqinECerp036BiDxANGuzTjo4e6n3L0tZmsMvbGEtqxdJzmJj7DN8LiRNyyIId-IiIVx1hmy4NJ5jpEqOplR45MsB3gtgxqKpAYF1aTFdEsaGo/s1600/tara.jpg" alt="Pala Art"/>
                    <p>Pala School of Art - Influential Buddhist art style</p>
                </div>
                <div className="image-card">
                    <img src="https://c9admin.cottage9.com/uploads/2504/The-reasons-behind-the-enduring-appeal-of-Chola-bronze-statues.jpg" alt="Chola Bronze"/>
                    <p>Chola Bronzes - Masterpieces of metal sculpture</p>
                </div>
            </div>
        </section>


        <section id="religion" className={`content-section${activeTab === "religion" ? " active" : ""}`}>
        <h2>Religious Changes</h2>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/b9/82/5f/nalanda-university-ruins.jpg?w=900&h=500&s=1" alt="Nalanda Ruins" className="full-width-image"/>
            
            <p>The Post-Gupta period witnessed significant transformations in India's religious landscape, with the decline of Buddhism, the rise of devotional Hinduism, and the arrival of Islam.</p>
            
            <div className="two-column">
                <img src="https://sannidhi.net/wp-content/uploads/2023/05/shankaracharya_new.jpeg" alt="Adi Shankara"/>
                <div>
                    <h3>Hindu Revival</h3>
                    <ul>
                        <li><strong>Bhakti Movement:</strong> Growth of devotional worship of Vishnu and Shiva</li>
                        <li><strong>Advaita Vedanta:</strong> Philosophical system established by Adi Shankara</li>
                        <li><strong>Temple Building:</strong> Construction of grand temples as religious and economic centers</li>
                        <li><strong>Puranas:</strong> Final compilation of major Hindu texts</li>
                    </ul>
                </div>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Buddhism's Decline</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://news.biharprabha.com/wp-content/uploads/2012/01/vikramshilajpg.jpg" alt="Vikramashila"/>
                    <p>Vikramashila University - Last great Buddhist center in India</p>
                </div>
                <div className="image-card">
                    <img src="https://ancientindians.org/wp-content/uploads/2024/12/Temple_No.-_3_Nalanda_Archaeological_Site.jpg" alt="Nalanda"/>
                    <p>Nalanda University - Destroyed by Bakhtiyar Khilji in 1200 CE</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Chakrasamvara_and_Vajravarahi_%28cropped%29.jpg/250px-Chakrasamvara_and_Vajravarahi_%28cropped%29.jpg" alt="Vajrayana"/>
                    <p>Vajrayana Buddhism - Final development before disappearance from India</p>
                </div>
            </div>
        </section>

       
        <section id="architecture" className={`content-section${activeTab === "architecture" ? " active" : ""}`}>
            <h2>Architectural Marvels</h2>
            <img src="https://cdn.britannica.com/66/250066-050-B34A9532/Brihadishvara-Temple-Thanjavur-Tamil-Nadu-India.jpg" alt="Brihadeeswarar Temple" className="full-width-image"/>
            
            <p>The Post-Gupta period produced some of India's most magnificent architectural achievements, with regional styles evolving from the Gupta classical tradition.</p>
            
            <div className="two-column">
                <div>
                    <h3>Architectural Styles</h3>
                    <ul>
                        <li><strong>Nagara (North Indian):</strong> Curvilinear shikharas</li>
                        <li><strong>Dravida (South Indian):</strong> Pyramidal vimanas</li>
                        <li><strong>Vesara (Deccani):</strong> Hybrid style</li>
                        <li><strong>Cave Architecture:</strong> Continued development</li>
                    </ul>
                </div>
                <img src="https://theindosphere.com/wp-content/uploads/2024/08/image-4.jpg" alt="Khajuraho"/>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Notable Structures</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://static.wixstatic.com/media/35364f_5b5ce4ffb5684f46922e67664a63fe93~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/35364f_5b5ce4ffb5684f46922e67664a63fe93~mv2.jpg" alt="Brihadeeswarar"/>
                    <p>Brihadeeswarar Temple (1010 CE) - Chola masterpiece</p>
                </div>
                <div className="image-card">
                    <img src="https://plus.unsplash.com/premium_photo-1697730370661-51bf72769ff6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2hhanVyYWhvfGVufDB8fDB8fHww" alt="Khajuraho"/>
                    <p>Khajuraho Temples (10th century) - Chandela dynasty</p>
                </div>
                <div className="image-card">
                    <img src="https://vedicfeed.com/wp-content/uploads/2020/04/Inside-Ellora-Kailasa-Temple.jpg" alt="Kailasa"/>
                    <p>Kailasa Temple, Ellora (8th century) - Rashtrakuta achievement</p>
                </div>
            </div>
        </section>


        <section id="legacy" className={`content-section${activeTab === "legacy" ? " active" : ""}`}>
        <h2>Legacy of the Post-Gupta Period</h2>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSnfrm3M8MjnJfr2scsu7xbjhI4Vp2HNbTHU6l8SUCPaMeZTzWUgA5qhi5TtEFnXvckt81aolj29b7PEn142N1JqAk8gUtMpuG-Zeb0M7BY067_zhcJbpLknLW9V2uHLrxWAPLMkTH1HY/w1200-h630-p-k-no-nu/East-Hem_1100ad+Kalachuri.jpg" alt="Medieval India" className="full-width-image"/>
            
            <p>The Post-Gupta period laid the foundations for medieval India, with developments that would influence the subcontinent for centuries to come.</p>
            
            <div className="two-column">
                <div>
                    <h3>Enduring Contributions</h3>
                    <ul>
                        <li><strong>Regional Cultures:</strong> Establishment of distinct regional identities</li>
                        <li><strong>Temple Architecture:</strong> Styles that would dominate medieval period</li>
                        <li><strong>Literary Traditions:</strong> Beginnings of regional language literatures</li>
                        <li><strong>Religious Practices:</strong> Bhakti traditions that continue today</li>
                        <li><strong>Administrative Systems:</strong> Models for later Hindu and Muslim states</li>
                    </ul>
                </div>
                <img src="https://observervoice.com/wp-content/uploads/2025/01/The-Chola-Dynasty-A-Legacy-of-Power-and-Culture.jpg" alt="Chola Legacy"/>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Transition to Medieval India</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b7/1f/31/qutab-minar.jpg?w=1200&h=1200&s=1" alt="Qutb Minar"/>
                    <p>Delhi Sultanate (1206 CE) - Beginning of Indo-Islamic era</p>
                </div>
                <div className="image-card">
                    <img src="https://www.travelure.in/wp-content/uploads/2022/06/Part-2-3.jpg" alt="Vijayanagara"/>
                    <p>Vijayanagara Empire (14th century) - Last great Hindu kingdom</p>
                </div>
            </div>
        </section>
    </div>
      <footer>
        <div className="container">
          <p>Explore more about India's rich history on Timeless India</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/civilizations">Civilizations</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p>© 2025 Timeless India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PostGupta;
