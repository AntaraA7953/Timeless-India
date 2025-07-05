import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "dynasties", label: "Dynasties" },
  { id: "architecture", label: "Architectural Legacy" },
  { id: "culture", label: "Cultural Developments" },
  { id: "economy", label: "Economy & Administration" },
  { id: "legacy", label: "Legacy Of Delhi Sultanate" },
];

const DelhiSultanate = () => {
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
            /* Enhanced Islamic Architecture Palette */
            --primary-color: #5D8AA8;    /* Cerulean blue */
            --secondary-color: #8B4513;  /* Saddle brown */
            --accent-color: #CD853F;     /* Peru (warmer brown) */
            --text-color: #3A2E2A;       /* Dark charcoal */
            --light-color: #F5F5F5;      /* White smoke */
            --highlight-color: #A0522D;  /* Sienna (rich brown) */
            --dark-color: #2F4F4F;       /* Dark slate gray */
            --subheading-color: #6B4423; /* Darker warm brown */
            --section-accent: #D2B48C;   /* Tan (lighter accent) */
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
            background: linear-gradient(135deg, #5D8AA8, #2F4F4F);
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
            background: url('https://images.squarespace-cdn.com/content/v1/53b17013e4b0f83f2d8a8a4a/1407246684228-8Q4JAQHPBS2VJECD7UK1/delhi+sultante.jpg?format=1500w') center/cover;
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
            background: var(--accent-color);
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
            box-shadow: 0 5px 15px rgba(93, 138, 168, 0.3);
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
            color: var(--subheading-color);
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
            background: var(--section-accent);
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
            box-shadow: 0 15px 30px rgba(93, 138, 168, 0.25);
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
            background: linear-gradient(135deg, #5D8AA8, #2F4F4F);
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
            opacity: 0.5;
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
          <h1>Delhi Sultanate</h1>
            <p>Exploring the Islamic empire that ruled Northern India for over 300 years</p>
            <p>1206 CE - 1526 CE | The Foundation of Indo-Islamic Culture</p>
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
        <h2>The Delhi Sultanate</h2>
            <img src="https://cdn.britannica.com/22/241222-050-A886C98A/Locator-map-Delhi-sultanate.jpg" alt="Delhi Sultanate Map" className="full-width-image"/>
            
            <p>The Delhi Sultanate (1206-1526 CE) was an Islamic empire based in Delhi that stretched over large parts of the Indian subcontinent for 320 years. Five dynasties ruled over the Delhi Sultanate sequentially: the Mamluk dynasty (1206-1290), the Khalji dynasty (1290-1320), the Tughlaq dynasty (1320-1414), the Sayyid dynasty (1414-1451), and the Lodi dynasty (1451-1526).</p>
            
            <div className="decorative-border"></div>
            
            <div className="two-column">
                <img src="https://cdn.britannica.com/19/189819-050-94021332/Qutb-Minar-minaret-Iltutmish-construction-Delhi-al-Din.jpg" alt="Qutb Minar"/>
                <div>
                    <h3>Historical Timeline</h3>
                    <ul>
                        <li><strong>Mamluk Dynasty (1206-1290):</strong> Founded by Qutb al-Din Aibak, a former slave</li>
                        <li><strong>Khalji Dynasty (1290-1320):</strong> Expanded south under Alauddin Khalji</li>
                        <li><strong>Tughlaq Dynasty (1320-1414):</strong> Both expansion and decline</li>
                        <li><strong>Sayyid Dynasty (1414-1451):</strong> Weakened sultanate</li>
                        <li><strong>Lodi Dynasty (1451-1526):</strong> Final rulers before Mughal conquest</li>
                    </ul>
                </div>
            </div>
            
            <h3>Key Characteristics</h3>
            <p>The Delhi Sultanate introduced:</p>
            <ul>
                <li>Persianate court culture to India</li>
                <li>New architectural styles blending Islamic and Indian elements</li>
                <li>Centralized administration systems</li>
                <li>New military technologies and techniques</li>
                <li>Expansion of trade networks</li>
            </ul>
            
            <div className="image-container">
                <div className="image-card">
                    <img src="https://www.coinsstuff.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-25-at-5.40.46-PM-e1679811560264.jpeg" alt="Iltutmish Coin"/>
                    <p>Coin of Iltutmish - Established silver tanka monetary system</p>
                </div>
                <div className="image-card">
                    <img src="https://media.assettype.com/homegrown%2F2023-03%2F50b292c8-54ea-4bd2-b40a-a468ae8f8000%2FWhatsApp_Image_2023_03_02_at_16_45_59.jpeg" alt="Tughlaqabad Fort"/>
                    <p>Tughlaqabad Fort - Massive fortified city of the Tughlaqs</p>
                </div>
                <div className="image-card">
                    <img src="https://www.worldhistory.org/uploads/images/13784.jpg" alt="Sultanate Armor"/>
                    <p>Military armor from the Delhi Sultanate period</p>
                </div>
            </div>
        </section>


        <section id="dynasties" className={`content-section${activeTab === "dynasties" ? " active" : ""}`}>
          <h2>The Five Dynasties</h2>
            <img src="https://cdn-images.prepp.in/public/image/1806921bfe8aa68367ed06e82c70edf5.png?tr=w-482,h-382,c-force" alt="Sultanate Expansion" className="full-width-image"/>
            
            <p>The Delhi Sultanate was ruled by five different dynasties over its 320-year history, each contributing to the development of Indo-Islamic culture and administration.</p>
            
            <div className="two-column">
                <div>
                    <h3>Mamluk/Slave Dynasty (1206-1290)</h3>
                    <ul>
                        <li><strong>Qutb al-Din Aibak:</strong> Founder, began Qutb Minar</li>
                        <li><strong>Iltutmish:</strong> Consolidated the sultanate</li>
                        <li><strong>Razia Sultana:</strong> Only female ruler</li>
                        <li><strong>Balban:</strong> Strengthened central authority</li>
                    </ul>
                </div>
                <img src="https://s7ap1.scene7.com/is/image/incredibleindia/qutab-minar-delhi-attr-hero?qlt=82&ts=1727352071318" alt="Qutb Minar Inspiration"/>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Khalji Dynasty (1290-1320)</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://i.pinimg.com/736x/6b/17/d6/6b17d602fe0d78dd59410d095143651e.jpg" alt="Alauddin Khalji"/>
                    <p>Alauddin Khalji - Most powerful Khalji ruler</p>
                </div>
                <div className="image-card">
                    <img src="https://www.cleartrip.com/collections/wp-content/uploads/2019/03/Alai-Darwaza.jpg" alt="Alai Darwaza"/>
                    <p>Alai Darwaza - Architectural masterpiece</p>
                </div>
                <div className="image-card">
                    <img src="https://madrascourier.com/wp-content/uploads/2021/09/Malik-Kafur-Madras-Courier-08.jpg" alt="Malik Kafur"/>
                    <p>Malik Kafur - Military commander who expanded south</p>
                </div>
            </div>
            
            <h3>Tughlaq Dynasty (1320-1414)</h3>
            <p>The Tughlaqs were known for both their ambitious projects and the eventual decline of the sultanate:</p>
            <ul>
                <li><strong>Ghiyasuddin Tughlaq:</strong> Founder, built Tughlaqabad</li>
                <li><strong>Muhammad bin Tughlaq:</strong> Controversial reformer</li>
                <li><strong>Firuz Shah Tughlaq:</strong> Builder and administrator</li>
                <li>Experiments with token currency</li>
                <li>Shift of capital to Daulatabad</li>
            </ul>
            
            <div className="image-container">
                <div className="image-card">
                    <img src="https://assets.cntraveller.in/photos/625430ff24152122465a98a6/3:2/w_1620,h_1080,c_limit/tughlaqabad-fort-lead.jpg" alt="Tughlaqabad Ruins"/>
                    <p>Ruins of Tughlaqabad Fort</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Firoz_Shah%27s_tomb_%283547619066%29.jpg/1024px-Firoz_Shah%27s_tomb_%283547619066%29.jpg" alt="Firuz Shah Tomb"/>
                    <p>Tomb of Firuz Shah Tughlaq</p>
                </div>
            </div>
        </section>



        <section id="architecture" className={`content-section${activeTab === "architecture" ? " active" : ""}`}>
        <h2>Architectural Legacy</h2>
            <img src="https://www.vacationindia.com/wp-content/uploads/2022/05/50-qutub-minar-complex-new-delhi.jpg" alt="Qutb Complex" className="full-width-image"/>
            
            <p>The Delhi Sultanate left an enduring architectural legacy, creating the first monumental Islamic buildings in India that synthesized Persian styles with Indian craftsmanship.</p>
            
            <div className="two-column">
                <div>
                    <h3>Key Features</h3>
                    <ul>
                        <li>Use of arches and domes</li>
                        <li>Ornate calligraphic decorations</li>
                        <li>Minarets and mausoleums</li>
                        <li>Use of red sandstone and marble</li>
                        <li>Blend of Islamic and Indian elements</li>
                    </ul>
                </div>
                <img src="https://www.jovialholiday.com/wp-content/uploads/2020/01/Alai-Darwaza.jpg" alt="Alai Darwaza"/>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Notable Structures</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://www.vacationindia.com/wp-content/uploads/2022/05/the-qutub-minar41.jpg" alt="Qutb Minar"/>
                    <p>Qutb Minar Complex - Earliest Islamic monuments in India</p>
                </div>
                <div className="image-card">
                    <img src="https://www.india-a2z.com/images/tuglagabad1.jpg" alt="Tughlaqabad"/>
                    <p>Tughlaqabad Fort - Massive fortified city</p>
                </div>
                <div className="image-card">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/75/2c/df/caption.jpg?w=900&h=-1&s=1" alt="Hauz Khas"/>
                    <p>Hauz Khas Complex - Madrasa and water tank</p>
                </div>
                <div className="image-card">
                    <img src="https://live.staticflickr.com/8284/29131886351_8ec4d68a7b_b.jpg" alt="Lodi Tomb"/>
                    <p>Lodi Gardens - Tomb architecture of late sultanate</p>
                </div>
            </div>
        </section>


        <section id="culture" className={`content-section${activeTab === "culture" ? " active" : ""}`}>
        <h2>Cultural Developments</h2>
            <img src="https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2025/03/amir-khusrau.jpg" alt="Amir Khusrau" className="full-width-image"/>
            
            <p>The Delhi Sultanate period saw significant cultural developments, particularly in the synthesis of Persian and Indian traditions that would characterize later Indo-Islamic culture.</p>
            
            <div className="two-column">
                <img src="https://static.toiimg.com/photo/105818751.cms" alt="Hauz Khas"/>
                <div>
                    <h3>Literature and Language</h3>
                    <ul>
                        <li><strong>Amir Khusrau:</strong> Poet and musician, father of qawwali</li>
                        <li>Development of Hindavi (early Urdu)</li>
                        <li>Persian as court language</li>
                        <li>Histories like Tarikh-i-Firuz Shahi</li>
                        <li>Sufi literature and poetry</li>
                    </ul>
                </div>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Religious Developments</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://www.iasgyan.in//ig-uploads/images//ARTICLE_OF_THE_WEEK_HAZRAT_NIZAMUDDIN_DARGAH.jpg" alt="Nizamuddin Dargah"/>
                    <p>Nizamuddin Auliya Dargah - Important Sufi shrine</p>
                </div>
                <div className="image-card">
                    <img src="https://i.ytimg.com/vi/FFx3P8vWowE/sddefault.jpg?v=61abaa9e" alt="Sufi Saints"/>
                    <p>Sufi Saints - Played key role in cultural synthesis</p>
                </div>
                <div className="image-card">
                    <img src="https://www.insightsonindia.com/wp-content/uploads/2025/03/Amir-Khusrau.jpg" alt="Amir Khusrau"/>
                    <p>Amir Khusrau - Pioneer of Indo-Islamic culture</p>
                </div>
            </div>
        </section>


       
        <section id="economy" className={`content-section${activeTab === "economy" ? " active" : ""}`}>
            <h2>Economy & Administration</h2>
            <img src="https://coinindia.com/GG-D005-462.07.jpg" alt="Sultanate Coin" className="full-width-image"/>
            
            <p>The Delhi Sultanate established new economic systems and administrative practices that would influence subsequent Indian states.</p>
            
            <div className="two-column">
                <div>
                    <h3>Economic Policies</h3>
                    <ul>
                        <li>Introduction of silver tanka and copper jital</li>
                        <li>Market control measures by Alauddin Khalji</li>
                        <li>Agricultural reforms and land revenue systems</li>
                        <li>Expansion of trade with Central Asia and Middle East</li>
                        <li>Growth of urban centers and craft production</li>
                    </ul>
                </div>
                <img src="https://www.cheggindia.com/wp-content/uploads/2023/12/Alauddin-Khilji-1.png" alt="Alauddin Khalji"/>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Administrative System</h3>
            <p>The Sultanate developed a sophisticated administration:</p>
            <ul>
                <li><strong>Iqta system:</strong> Land revenue assignments to officials</li>
                <li>Centralized bureaucracy with various departments</li>
                <li>Provincial governors (walis or muqtis)</li>
                <li>Efficient spy network</li>
                <li>Standing army with new military technologies</li>
            </ul>
            
            <div className="image-container">
                <div className="image-card">
                    <img src="https://imgv2-2-f.scribdassets.com/img/document/464183819/original/11a182f189/1?v=1" alt="Administrative Document"/>
                    <p>Administrative document from the period</p>
                </div>
                <div className="image-card">
                    <img src="https://www.trocals.com/wp-content/uploads/2022/07/3-Ancient-Bazaars-Of-India.jpg" alt="Market Scene"/>
                    <p>Recreation of a Sultanate-era market</p>
                </div>
            </div>
        </section>



        <section id="legacy" className={`content-section${activeTab === "legacy" ? " active" : ""}`}>
        <h2>Legacy of the Delhi Sultanate</h2>
            <img src="https://i.ytimg.com/vi/ukb_uILUcto/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAn6B5U-xyIUq-igbpaKWAazKfbwg" alt="Sultanate Map" className="full-width-image"/>
            
            <p>The Delhi Sultanate left a lasting impact on Indian history, laying foundations for the Mughal Empire and Indo-Islamic culture.</p>
            
            <div className="two-column">
                <div>
                    <h3>Enduring Contributions</h3>
                    <ul>
                        <li>Establishment of Indo-Islamic architectural style</li>
                        <li>Synthesis of Persian and Indian cultural elements</li>
                        <li>Development of early Urdu language</li>
                        <li>Administrative systems adopted by later empires</li>
                        <li>Expansion of trade networks</li>
                    </ul>
                </div>
                <img src="https://www.thehitavada.com/Encyc/2022/6/21/Qutub-Minar_202206210948551657_H@@IGHT_300_W@@IDTH_500.jpg" alt="Qutb Minar"/>
            </div>
            
            <div className="decorative-border"></div>
            
            <h3>Transition to Mughal Empire</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://i.pinimg.com/564x/cc/64/46/cc644660e92e1da1c6052897c362bdda.jpg" alt="Ibrahim Lodi"/>
                    <p>Ibrahim Lodi's defeat at Panipat (1526) marked the end</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Idealized_portrait_of_Babur_%281483-1530%29_in_Persian_style%2C_painted_circa_1605-1615_in_India_%28British_Museum_1921%2C1011%2C0.3%29.jpg" alt="Babur"/>
                    <p>Babur established the Mughal Empire</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Joppen1907India1700a.jpg" alt="Mughal Empire"/>
                    <p>Mughals built upon Sultanate foundations</p>
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

export default DelhiSultanate;
