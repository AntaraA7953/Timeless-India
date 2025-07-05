import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "empire", label: "Maratha Empire" },
  { id: "kingdoms", label: "Southern Kingdoms" },
  { id: "europe", label: "European Arrival" },
  { id: "british", label: "British Expansion" },
  { id: "legacy", label: "Legacy" },
];

const RegionalKingdoms = () => {
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
            /* Elegant Historical Theme */
            --primary-color: #5D4037;  /* Rich brown (earth tones) */
            --secondary-color: #3E2723;  /* Deep brown (Maratha royalty) */
            --accent-color: #8D6E63;  /* Warm terracotta */
            --text-color: #3E2723;  /* Dark brown */
            --light-color: #EFEBE9;  /* Soft parchment */
            --highlight-color: #6D4C41;  /* Muted clay */
            --dark-color: #1A1A1A;  /* Near-black */

            /* Subheading colors */
            --subheading-primary: #5D4037;  /* Earth brown */
            --subheading-secondary: #4E342E;  /* Darker brown */
            --subheading-accent: #A1887F;  /* Soft clay */
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
            background-color: var(--secondary-color); /* Solid deep brown */
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
            background: url('https://img.freepik.com/premium-photo/explore-ancient-medieval-map-europe-kingdoms-borders-revealed_1326450-1361.jpg') center/cover;
            opacity: 0.3;
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
            color: #FFF8E1;
        }

        header p {
            font-size: 1.3rem;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto 1.2rem;
            color: #FFF8E1;
        }

        .header-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1.5rem;
        }

        .header-links a {
            color: #FFF8E1;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 30px;
            transition: all 0.3s ease;
            background-color: rgba(255, 255, 255, 0.1);
        }

        .header-links a:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        /* Navigation */
        .nav-tabs {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 3rem;
            background: white;
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }

        .nav-tab {
            padding: 1rem 2rem;
            background: var(--accent-color);
            color: white;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 1.1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .nav-tab:hover, .nav-tab.active {
            background: var(--subheading-secondary);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        /* Content Sections */
        .content-section {
            display: none;
            background-color: white;
            border-radius: 15px;
            padding: 3rem;
            margin-bottom: 3rem;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
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
            color: var(--subheading-primary);
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
            background: var(--subheading-accent);
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
        }

        .image-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(93, 64, 55, 0.25);
        }

        .image-card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            display: block;
        }

        .image-card p {
            padding: 1.2rem;
            background: white;
            font-size: 1rem;
            text-align: center;
            color: var(--dark-color);
            border-top: 1px solid rgba(0,0,0,0.05);
            margin: 0;
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
        }

        .two-column div {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        /* Footer */
        footer {
            background-color: var(--secondary-color);
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
            opacity: 0.3;
            z-index: 0;
        }

        footer .container {
            position: relative;
            z-index: 1;
        }

        footer p {
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
            color: #FFF8E1;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1.5rem;
        }

        .footer-links a {
            color: #FFF8E1;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s ease;
            font-size: 1.1rem;
        }

        .footer-links a:hover {
            opacity: 0.8;
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            header h1 {
                font-size: 2.2rem;
            }
            
            header p {
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
        `}</style>
      </Helmet>
      <header>
        <div className="container">
          <h1>Regional Kingdoms & European Arrival</h1>
            <p>From the Marathas to the British Raj: India's transformation under regional powers and colonial rule</p>
            <p>16th - 19th Century | The rise of new empires and foreign dominance</p>
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
        <h2>Regional Powers & Colonialism</h2>
            <img src="https://preview.redd.it/mpw9uj07dje71.jpg?width=1080&crop=smart&auto=webp&s=7172178beca6db53fa19476f99cc4878b8fa59cb" alt="India 1700-1905" className="full-width-image"/>
            
            <p>After the decline of the Mughal Empire, regional kingdoms like the Marathas, Sikhs, and Rajputs rose to power. Simultaneously, European trading companies established footholds, leading to British colonial dominance.</p>
            
            <div className="two-column">
                <img src="https://m.media-amazon.com/images/I/61Gcq2mPzgL._UF1000,1000_QL80_.jpg" alt="Shivaji"/>
                <div>
                    <h3>Key Periods</h3>
                    <ul>
                        <li><strong>Maratha Ascendancy (1674-1818):</strong> Dominated central and western India</li>
                        <li><strong>Sikh Empire (1799-1849):</strong> Ruled Punjab under Maharaja Ranjit Singh</li>
                        <li><strong>European Trading Posts (1500s-1700s):</strong> Portuguese, Dutch, French, and British</li>
                        <li><strong>British Raj (1858-1947):</strong> Direct colonial rule after the 1857 Rebellion</li>
                    </ul>
                </div>
            </div>
            
            <h3>Major Kingdoms</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://cdn.britannica.com/11/1611-050-2479867F/India-1805.jpg" alt="Marathas"/>
                    <p>Maratha Empire - Dominated post-Mughal India</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Sikh_Empire.png" alt="Sikh Empire"/>
                    <p>Sikh Empire - Ruled Punjab under Ranjit Singh</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Indian_Mysore_Kingdom_1784_map.svg/330px-Indian_Mysore_Kingdom_1784_map.svg.png" alt="Mysore"/>
                    <p>Kingdom of Mysore - Resisted British under Tipu Sultan</p>
                </div>
            </div>
            
            <h3>European Influence</h3>
            <p>Portugal, the Netherlands, France, and Britain established trading posts, leading to political interference and eventual British dominance.</p>
        </section>


        <section id="empire" className={`content-section${activeTab === "empire" ? " active" : ""}`}>
          <h2>The Maratha Empire</h2>
            <img src="https://theindosphere.com/wp-content/uploads/2024/09/image-26-3.jpg" alt="Maratha Empire Map" className="full-width-image"/>
            
            <p>The Marathas, under Shivaji and later the Peshwas, created a powerful Hindu empire that challenged Mughal and British dominance.</p>
            
            <div className="two-column">
                <div>
                    <h3>Key Rulers</h3>
                    <ul>
                        <li><strong>Shivaji (1674-1680):</strong> Founder of the Maratha Empire</li>
                        <li><strong>Peshwa Bajirao I (1720-1740):</strong> Expanded Maratha power</li>
                        <li><strong>Peshwa Madhavrao (1761-1772):</strong> Stabilized after Panipat</li>
                    </ul>
                </div>
                <img src="https://i.pinimg.com/564x/20/7a/d2/207ad2e11e81b9edf9fe35552cb18272.jpg" alt="Shivaji"/>
            </div>
            
            <h3>Military & Administration</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://i.pinimg.com/736x/90/78/22/9078228d5ec164f0bab07cb99a3b6456.jpg" alt="Maratha Cavalry"/>
                    <p>Light cavalry - Guerilla warfare tactics</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nagarkhana%2C_Raigad_Fort%2C_India.jpg/1200px-Nagarkhana%2C_Raigad_Fort%2C_India.jpg" alt="Raigad Fort"/>
                    <p>Raigad Fort - Shivaji's capital</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Peshwa_Bajirao_Warrior_New.jpg" alt="Peshwa Bajirao"/>
                    <p>Peshwa Bajirao I - Greatest Maratha general</p>
                </div>
            </div>
            
            <h3>Decline</h3>
            <p>Defeated by the British in the Anglo-Maratha Wars (1775-1818), leading to British dominance.</p>
        </section>



        <section id="kingdoms" className={`content-section${activeTab === "kingdoms" ? " active" : ""}`}>
        <h2>Southern Kingdoms</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Map_of_Peninsular_India_to_Illustrate_the_History_of_Mysore.jpg/1100px-Map_of_Peninsular_India_to_Illustrate_the_History_of_Mysore.jpg" alt="South India Map" className="full-width-image"/>
            
            <p>South India saw powerful kingdoms like Mysore, Travancore, and the Vijayanagara successors resisting European influence.</p>
            
            <div className="two-column">
                <img src="https://i.pinimg.com/474x/74/39/57/743957ff51a80ce8a6d3f8a8da98ec15.jpg" alt="Tipu Sultan"/>
                <div>
                    <h3>Key Rulers</h3>
                    <ul>
                        <li><strong>Tipu Sultan (1782-1799):</strong> "Tiger of Mysore" who fought the British</li>
                        <li><strong>Krishnadevaraya (1509-1529):</strong> Vijayanagara’s golden age</li>
                        <li><strong>Martanda Varma (1729-1758):</strong> Built Travancore’s power</li>
                    </ul>
                </div>
            </div>
            
            <h3>Cultural & Military Achievements</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://s7ap1.scene7.com/is/image/incredibleindia/tipu-sultans-summer-palace-bengaluru-karnataka-2-musthead-hero?qlt=82&ts=1726718251779" alt="Tipu's Palace"/>
                    <p>Tipu Sultan’s Summer Palace - Blend of Indo-Islamic style</p>
                </div>
                <div className="image-card">
                    <img src="https://diveintothelab.wordpress.com/wp-content/uploads/2018/09/fort.jpeg?w=485&h=327" alt="Srirangapatna"/>
                    <p>Srirangapatna Fort - Tipu’s capital</p>
                </div>
            </div>
        </section>


        <section id="europe" className={`content-section${activeTab === "europe" ? " active" : ""}`}>
        <h2>European Arrival</h2>
            <img src="https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/portrait-of-vasco-da-gama?_a=BAVAZGDX0" alt="Vasco da Gama" className="full-width-image"/>
            
            <p>Portugal, the Dutch, French, and British established trade networks, leading to political control.</p>
            
            <div className="two-column">
                <div>
                    <h3>Key Events</h3>
                    <ul>
                        <li><strong>1498:</strong> Vasco da Gama reaches Calicut</li>
                        <li><strong>1600:</strong> British East India Company founded</li>
                        <li><strong>1757:</strong> Battle of Plassey - British dominance begins</li>
                    </ul>
                </div>
                <img src="https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2017June/battle-of-plassey-2_062317111628.jpg" alt="Battle of Plassey"/>
            </div>
            
            <h3>European Forts & Trade</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://as1.ftcdn.net/jpg/02/92/98/68/1000_F_292986817_VVU7B3sqkYRgTMEilBrnyFBlH6X1TpJp.jpg" alt="Portuguese Fort"/>
                    <p>Portuguese forts - Early European strongholds</p>
                </div>
                <div className="image-card">
                    <img src="https://media.istockphoto.com/id/172472689/photo/one-pound-on-white-background.jpg?s=612x612&w=0&k=20&c=cfo_0_fLnXfdE88kMzcWtv55CEbBkKp48JsnfZUbSYI=" alt="British Coin"/>
                    <p>British East India Company - Corporate colonialism</p>
                </div>
            </div>
        </section>


       
        <section id="british" className={`content-section${activeTab === "british" ? " active" : ""}`}>
            <h2>British Expansion</h2>
            <img src="https://nzhistory.govt.nz/sites/default/files/styles/wide/public/India_1000.jpg?itok=SjLr1GNw" alt="British India Map" className="full-width-image"/>
            
            <p>After defeating regional powers, the British established direct rule over India.</p>
            
            <div className="two-column">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Robert_Clive%2C_1st_Baron_Clive_by_Nathaniel_Dance%2C_%28later_Sir_Nathaniel_Dance-Holland%2C_Bt%29.jpg/960px-Robert_Clive%2C_1st_Baron_Clive_by_Nathaniel_Dance%2C_%28later_Sir_Nathaniel_Dance-Holland%2C_Bt%29.jpg" alt="Robert Clive"/>
                <div>
                    <h3>Key Events</h3>
                    <ul>
                        <li><strong>1757:</strong> Battle of Plassey</li>
                        <li><strong>1857:</strong> Indian Rebellion (First War of Independence)</li>
                        <li><strong>1858:</strong> British Crown takes direct control</li>
                    </ul>
                </div>
            </div>
            
            <h3>Colonial Impact</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://warfarehistorynetwork.com/wp-content/uploads/2015/11/M-IndianMut-Lead-4C-Feb05-2000x1142.jpg" alt="1857 Rebellion"/>
                    <p>1857 Rebellion - Turning point in colonial rule</p>
                </div>
                <div className="image-card">
                    <img src="https://media.iwm.org.uk/ciim5/391/653/large_000000.jpg" alt="British Indian Army"/>
                    <p>British Indian Army - Key to colonial control</p>
                </div>
            </div>
        </section>


        <section id="legacy" className={`content-section${activeTab === "legacy" ? " active" : ""}`}>
            <h2>Legacy of Regional Kingdoms & Colonialism</h2>
            <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/08/15/538c794e3cca3fda73d3a59401638aad_original.jpg?impolicy=abp_cdn&imwidth=640" alt="Indian Independence" className="full-width-image"/>
            
            <p>The regional kingdoms and European rule shaped modern India’s political and cultural landscape.</p>
            
            <div className="two-column">
                <div>
                    <h3>Enduring Influences</h3>
                    <ul>
                        <li><strong>Maratha Confederacy:</strong> Inspired modern Maharashtra</li>
                        <li><strong>Sikh Empire:</strong> Foundation of Punjab’s identity</li>
                        <li><strong>British Raj:</strong> Administrative, legal, and educational systems</li>
                    </ul>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/1st_INC1885.jpg" alt="Indian National Congress"/>
            </div>
            
            <h3>Modern India</h3>
            <p>The resistance against colonialism laid the foundation for India’s independence movement.</p>
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

export default RegionalKingdoms;
