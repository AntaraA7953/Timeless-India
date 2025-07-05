import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "establishment", label: "Establishment" },
  { id: "administration", label: "Administration" },
  { id: "economy", label: "Economic Impact" },
  { id: "1857", label: "1857 Rebellion" },
  { id: "legacy", label: "Legacy" },
];

const BritishColonialRule = () => {
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
            /* Colonial Era Color Theme */
            --primary-color: #2C3E50;  /* British navy blue */
            --secondary-color: #7B7D7D;  /* Colonial stone */
            --accent-color: #922B21;  /* British red */
            --text-color: #34495E;  /* Dark blue-gray */
            --light-color: #F5F5F5;  /* Off-white parchment */
            --highlight-color: #1A5276;  /* Colonial dark blue */
            --dark-color: #1A1A1A;  /* Near-black */

            /* Subheading colors */
            --subheading-primary: #2C3E50;  /* Navy blue */
            --subheading-secondary: #7B7D7D;  /* Stone gray */
            --subheading-accent: #922B21;  /* British red */
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
            background-color: var(--primary-color);
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
            background: url('https://www.thoughtco.com/thmb/sMGh658DrQFPWUKc4OVZzBy9A78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Madras-Army-gty-56a486ef3df78cf77282d99c.jpg') center/cover;
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
            color: #FFFFFF;
        }

        header p {
            font-size: 1.3rem;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto 1.2rem;
            color: #F5F5F5;
        }

        .header-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1.5rem;
        }

        .header-links a {
            color: white;
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
            background: var(--highlight-color);
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
            box-shadow: 0 15px 30px rgba(44, 62, 80, 0.25);
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
            background-color: var(--primary-color);
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
            color: #F5F5F5;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1.5rem;
        }

        .footer-links a {
            color: #F5F5F5;
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
         <h1>British Colonial Rule in India</h1>
            <p>From trade to empire: The transformation of India under British rule (1757-1947)</p>
            <p>"The sun never sets on the British Empire" - How India became the jewel in the crown</p>
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
        <h2>The British Raj</h2>
            <img src="https://nzhistory.govt.nz/sites/default/files/styles/wide/public/India_1000.jpg?itok=SjLr1GNw" alt="British India Map" className="full-width-image"/>
            
            <p>The British East India Company began as a trading enterprise in 1600 but gradually transformed into a colonial power, ruling India from 1757 until independence in 1947.</p>
            
            <div className="two-column">
                <img src="https://images.indianexpress.com/2020/06/Robert-Clive-759.jpg" alt="Robert Clive"/>
                <div>
                    <h3>Key Periods</h3>
                    <ul>
                        <li><strong>Company Rule (1757-1858):</strong> East India Company governance</li>
                        <li><strong>Crown Rule (1858-1947):</strong> Direct British government control</li>
                        <li><strong>Colonial Economy:</strong> Exploitation of Indian resources</li>
                        <li><strong>Nationalist Movement:</strong> Rise of Indian independence struggle</li>
                    </ul>
                </div>
            </div>
            
            <h3>Territorial Expansion</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://www.britishbattles.com/wp-content/uploads/2018/01/4-AAA-the-battle-plassey-580.jpg" alt="Battle of Plassey"/>
                    <p>Battle of Plassey (1757) - Beginning of British dominance</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Sikh_and_Muslim_soldiers_with_medals%2C_Indian_Army%2C_Beijing%2C_ca.1900.jpg/250px-Sikh_and_Muslim_soldiers_with_medals%2C_Indian_Army%2C_Beijing%2C_ca.1900.jpg" alt="British Indian Army"/>
                    <p>British Indian Army - Instrument of colonial control</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Viceroy%27s_House_India_old.jpg" alt="Viceroy's House"/>
                    <p>Viceroy's House - Symbol of imperial power</p>
                </div>
            </div>
        </section>


        <section id="establishment" className={`content-section${activeTab === "establishment" ? " active" : ""}`}>
          <h2>Establishment of British Rule</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/East_India_House_by_Thomas_Malton_the_Younger.jpg" alt="East India House" className="full-width-image"/>
            
            <p>The British East India Company used military conquest, diplomacy, and economic manipulation to establish control over India.</p>
            
            <div className="two-column">
                <div>
                    <h3>Key Events</h3>
                    <ul>
                        <li><strong>1757:</strong> Battle of Plassey - Robert Clive defeats Siraj-ud-Daulah</li>
                        <li><strong>1764:</strong> Battle of Buxar - Secures Bengal</li>
                        <li><strong>1799:</strong> Defeat of Tipu Sultan</li>
                        <li><strong>1849:</strong> Annexation of Punjab</li>
                    </ul>
                </div>
                <img src="https://rukminim3.flixcart.com/image/850/1000/k6qsn0w0/coin-collection/d/6/h/1835-1862-half-anna-2-different-years-coins-east-india-company-original-imafp4q8afcaeg5g.jpeg?q=90&crop=false" alt="East India Company Coin"/>
            </div>
            
            <h3>Methods of Control</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://i.pinimg.com/736x/55/3d/12/553d1254b7a599fa486a0a60531b8c97.jpg" alt="Doctrine of Lapse"/>
                    <p>Doctrine of Lapse - Annexation strategy</p>
                </div>
                <div className="image-card">
                    <img src="https://24coaches.com/wp-content/uploads/2013/07/Frontier-Mail.jpg" alt="Indian Railways"/>
                    <p>Railways - Built for colonial exploitation</p>
                </div>
            </div>
        </section>


        <section id="administration" className={`content-section${activeTab === "administration" ? " active" : ""}`}>
<h2>Colonial Administration</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Viceroy%27s_House_India_old.jpg" alt="Viceroy's House" className="full-width-image"/>
            
            <p>The British established a sophisticated bureaucracy to govern India, with Indians largely excluded from higher positions.</p>
            
            <div className="two-column">
                <img src="https://i0.wp.com/rotarynewsonline.org/wp-content/uploads/2016/08/India-The-last-batch-of-ICS-officers-in-the-Indian-Civil-Service-Academy-Dehra-Dun-India____4103098574_1ff21830bc_z.jpg?ssl=1" alt="ICS Officers"/>
                <div>
                    <h3>Key Institutions</h3>
                    <ul>
                        <li><strong>Indian Civil Service:</strong> Elite British bureaucracy</li>
                        <li><strong>Police System:</strong> Maintained law and order</li>
                        <li><strong>Legal System:</strong> Introduction of British laws</li>
                        <li><strong>Education:</strong> Macaulay's English education system</li>
                    </ul>
                </div>
            </div>
            
            <h3>Divide and Rule</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/BengalPartition1905_Map.png/1280px-BengalPartition1905_Map.png" alt="Partition of Bengal"/>
                    <p>1905 Partition of Bengal - Communal division</p>
                </div>
                <div className="image-card">
                    <img src="https://www.indianetzone.com/public/admin/uploadImage/01_British_Indian_Army_1.jpg" alt="Indian Sepoys"/>
                    <p>Indian soldiers (sepoys) - Backbone of British military</p>
                </div>
            </div>
        </section>

        <section id="economy" className={`content-section${activeTab === "economy" ? " active" : ""}`}>
        <h2>Economic Exploitation</h2>
            <img src="https://cdn.shopify.com/s/files/1/1150/2764/files/The-Revolution-of-British-textiles_1024x1024.jpg?v=1660383289" alt="Indian Weavers" className="full-width-image"/>
            
            <p>Britain transformed India's economy to serve imperial interests, leading to deindustrialization and famines.</p>
            
            <div className="two-column">
                <div>
                    <h3>Economic Policies</h3>
                    <ul>
                        <li><strong>Land Revenue Systems:</strong> Permanent Settlement, Ryotwari</li>
                        <li><strong>Deindustrialization:</strong> Destruction of Indian textiles</li>
                        <li><strong>Railways:</strong> Built to transport raw materials</li>
                        <li><strong>Drain of Wealth:</strong> Estimated £45 trillion extracted</li>
                    </ul>
                </div>
                <img src="https://cdn.thewire.in/wp-content/uploads/2021/11/08104321/image3-1.jpg" alt="Cotton Workers"/>
            </div>
            
            <h3>Impact on Indians</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://swarajya.gumlet.io/swarajya/2018-10/6c988fc6-e58d-4868-8508-b9980c746796/05f3bee1_f08f_4a15_8692_a7a428cac96f.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" alt="Bengal Famine"/>
                    <p>Bengal Famine (1943) - 3 million deaths</p>
                </div>
                <div className="image-card">
                    <img src="https://www.researchgate.net/publication/232025631/figure/fig2/AS:300351195500548@1448620713270/ndigo-factory-1850s-From-Rural-Life-in-Bengal-Illustrative-of-Anglo-Indian-Suburban.png" alt="Indigo Farmers"/>
                    <p>Indigo cultivation - Forced labor system</p>
                </div>
            </div>
        </section>


       
        <section id="1857" className={`content-section${activeTab === "1857" ? " active" : ""}`}>
            <h2>The 1857 Rebellion</h2>
            <img src="https://cms.thewire.in/wp-content/uploads/2018/02/The-recapture-of-Delhi.jpeg" alt="1857 Rebellion" className="full-width-image"/>
            
            <p>The First War of Indian Independence marked a turning point in colonial rule.</p>
            
            <div className="two-column">
                <img src="https://images.moneycontrol.com/static-mcnews/2024/11/20241119070943_Rani-Lakshmi-Bai.png?impolicy=website&width=350&height=195" alt="Rani Lakshmibai"/>
                <div>
                    <h3>Key Events</h3>
                    <ul>
                        <li><strong>May 1857:</strong> Sepoy mutiny begins in Meerut</li>
                        <li><strong>Key Leaders:</strong> Rani Lakshmibai, Nana Saheb, Tantia Tope</li>
                        <li><strong>1858:</strong> British victory, East India Company dissolved</li>
                    </ul>
                </div>
            </div>
            
            <h3>Aftermath</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Image_victoria_proclamation1858c.JPG/1200px-Image_victoria_proclamation1858c.JPG" alt="Victoria Proclamation"/>
                    <p>Queen Victoria's Proclamation - Direct Crown rule</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Vereshchagin-Blowing_from_Guns_in_British_India.jpg" alt="Executed Soldiers"/>
                    <p>Brutal suppression of rebels</p>
                </div>
            </div>
        </section>



        <section id="legacy" className={`content-section${activeTab === "legacy" ? " active" : ""}`}>
            <h2>Legacy of British Rule</h2>
            <img src="https://media.assettype.com/theleaflet/import/wp-content/uploads/2022/08/Inddian-Independence.png?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" alt="Indian Independence" className="full-width-image"/>
            
            <p>British rule left deep impacts on India's political, economic and social structures.</p>
            
            <div className="two-column">
                <div>
                    <h3>Positive Impacts</h3>
                    <ul>
                        <li>Railways and infrastructure</li>
                        <li>English education system</li>
                        <li>Unified administrative structure</li>
                    </ul>
                    
                    <h3>Negative Impacts</h3>
                    <ul>
                        <li>Economic underdevelopment</li>
                        <li>Communal divisions</li>
                        <li>Famines and poverty</li>
                    </ul>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/1st_INC1885.jpg" alt="Indian National Congress"/>
            </div>
            
            <h3>Road to Independence</h3>
            <p>The colonial experience united Indians and led to the independence movement under Gandhi, Nehru and others.</p>
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

export default BritishColonialRule;
