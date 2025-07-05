import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "empire", label: "The Gupta Empire" },
  { id: "science", label: "Science & Mathematics" },
  { id: "arts", label: "Arts & Literature" },
  { id: "religion", label: "Religion & Philosophy " },
  { id: "legacy", label: "Legacy & Decline" },
];

const GuptaEmpire = () => {
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
            /* Golden and Royal Palette */
            --primary-color: #D4AF37;  /* Gold */
            --secondary-color: #6B4423;  /* Rich brown */
            --accent-color: #E6C88C;  /* Light gold */
            --text-color: #3A2E1E;  /* Dark brown */
            --light-color: #F5F0E6;  /* Parchment */
            --highlight-color: #B8860B;  /* Dark goldenrod */
            --dark-color: #4B3621;  /* Coffee */
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
            background: linear-gradient(135deg, #D4AF37, #8B5E3C);
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
            background: url('https://theindosphere.com/wp-content/uploads/2023/09/image-109.png') center/cover;
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
            text-shadow: 4px 4px 8px rgba(0,0,0,0.6);
            color : #FFFFFF;
        }

        header p {
            font-size: 1.3rem;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto 1.2rem;
            text-shadow: 4px 4px 8px rgba(0,0,0,0.6);
            color : #FFF9F3;
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
            background-color: rgba(255,255,255,0.2);
        }

        .header-links a:hover {
            background-color: rgba(255,255,255,0.3);
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
            color: var(--dark-color);
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
            color: var(--light-color);
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
        }

        .image-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(212, 175, 55, 0.25);
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
            background: linear-gradient(135deg, #D4AF37, #6B4423);
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
          <h1>Gupta Golden Age</h1>
            <p>Discover the pinnacle of classNameical Indian civilization that flourished under the Gupta Empire</p>
            <p>320 CE - 550 CE | The Golden Age of India</p>
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
        <h2>The Gupta Golden Age</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Map_of_the_Gupta_Empire.png/1106px-Map_of_the_Gupta_Empire.png" alt="Gupta Empire Map" className="full-width-image"/>
            
            <p>The Gupta Empire (320-550 CE) marked the golden age of classNameical Indian civilization, a period of unprecedented achievements in arts, sciences, literature, and philosophy. Often compared to the Periclean Age of Greece or the Renaissance in Europe, the Gupta period saw the crystallization of what would become classNameical Indian culture.</p>
            
            <div className="two-column">
                <img src="https://www.worldhistory.org/uploads/images/11426.jpg?v=1737856933-1725952340" alt="Gupta Coin"/>
                <div>
                    <h3>Chronology</h3>
                    <ul>
                        <li><strong>Early Gupta Period (320-375 CE):</strong> Foundation by Chandragupta I and expansion under Samudragupta</li>
                        <li><strong>Golden Age (375-455 CE):</strong> Peak under Chandragupta II (Vikramaditya), with flourishing of arts and sciences</li>
                        <li><strong>Later Gupta Period (455-550 CE):</strong> Gradual decline due to Hun invasions and regional fragmentation</li>
                    </ul>
                </div>
            </div>
            
            <h3>Geographical Extent</h3>
            <p>At its height, the Gupta Empire covered most of northern and central India, extending from the Indus River in the west to Bengal in the east, and from the Himalayan foothills in the north to the Narmada River in the south. The empire maintained diplomatic relations with Sri Lanka and Southeast Asia.</p>
            
            <div className="image-container">
                <div className="image-card">
                    <img src="https://www.poojn.in/wp-content/uploads/2025/04/Ancient-Pataliputra-Chandragupta-Mauryas-Capital-City-History-and-Significance.jpeg.jpg" alt="Pataliputra"/>
                    <p>Pataliputra - The magnificent Gupta capital, described by Chinese traveler Faxian</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/401_CE_Udayagiri_Varaha_Relief_annotated.jpg/960px-401_CE_Udayagiri_Varaha_Relief_annotated.jpg" alt="Udayagiri Caves"/>
                    <p>Udayagiri Caves - Important site of Gupta art and inscriptions</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg" alt="Nalanda"/>
                    <p>Nalanda - The great center of learning that began in the Gupta period</p>
                </div>
            </div>
            
            <h3>Significance in World History</h3>
            <p>The Gupta period represents one of the high points of classNameical civilization globally, making fundamental contributions to mathematics, astronomy, medicine, literature, and art that would influence not only India but the entire world. The cultural patterns established during this time would define Indian civilization for centuries to come.</p>
        </section>


        <section id="empire" className={`content-section${activeTab === "empire" ? " active" : ""}`}>
          <h2>The Gupta Empire</h2>
            <img src="https://iasbio.com/wp-content/uploads/2021/07/1626503406997_compress98.jpg" alt="Gupta Administration" className="full-width-image"/>
            
            <p>The Gupta Empire established a model of classNameical Indian kingship and administration that would influence subsequent Indian states. The period saw both centralized authority and local autonomy in a sophisticated system of governance.</p>
            
            <div className="two-column">
                <div>
                    <h3>Notable Rulers</h3>
                    <ul>
                        <li><strong>Chandragupta I (320-335 CE):</strong> Founder of the Gupta era through strategic marriage alliance</li>
                        <li><strong>Samudragupta (335-375 CE):</strong> Great conqueror and patron of arts, called the "Indian Napoleon"</li>
                        <li><strong>Chandragupta II (375-415 CE):</strong> Vikramaditya, under whom the empire reached its cultural zenith</li>
                        <li><strong>Kumaragupta I (415-455 CE):</strong> Maintained the empire's prosperity and founded Nalanda University</li>
                        <li><strong>Skandagupta (455-467 CE):</strong> Successfully repelled Hun invasions but the empire began declining afterward</li>
                    </ul>
                </div>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9TQWEcWwqLHWFmowaZhdJuVwGV_UEpg5XUxiqj3mDvrqsz54zZimdYEE3f3Jgt2MT3QzQUpTPmNPP18_uKFNylk5z7zm-sEqLhiKTN-2qlCFGgzhBtYt9k1y7l4gfZttC3UJLMlk6IerE/s1600/18815238_1312637692182104_3388889263179170460_o.jpg" alt="Gupta Kings"/>
            </div>
            
            <h3>Administrative System</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://justicemirror.com/wp-content/uploads/2020/08/Gupta-King-donating-Gold.webp" alt="Administration"/>
                    <p>Decentralized system with provinces (Bhuktis) under princes and high officials</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Soghaura_inscription.jpg/250px-Soghaura_inscription.jpg" alt="Inscriptions"/>
                    <p>Land grants to Brahmins and temples recorded in copperplate inscriptions</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/KumaraguptaFightingLion.jpg/800px-KumaraguptaFightingLion.jpg" alt="Coinage"/>
                    <p>Gold coins (dinars) showing kings in various poses, indicating economic prosperity</p>
                </div>
            </div>
            
            <h3>Economic Conditions</h3>
            <p>The Gupta period saw great economic prosperity due to:</p>
            <ul>
                <li>Agricultural surplus from fertile Gangetic plains</li>
                <li>Thriving trade with Roman Empire, Southeast Asia, and China</li>
                <li>Gold coinage indicating healthy monetary economy</li>
                <li>Growth of guilds (shrenis) regulating crafts and commerce</li>
                <li>Taxation system that was relatively light (1/6th of produce)</li>
            </ul>
            
            <p>This economic prosperity provided the foundation for the cultural flowering of the period.</p>
        </section>


        <section id="science" className={`content-section${activeTab === "science" ? " active" : ""}`}>
        <h2>Science &amp; Mathematics</h2>
            <img src="https://vedicmathschool.org/wp-content/uploads/2020/06/Aryabhata.jpg" alt="Aryabhata" className="full-width-image"/>
            
            <p>The Gupta period witnessed extraordinary advances in mathematics, astronomy, medicine, and metallurgy that were far ahead of contemporary civilizations and would form the basis for later scientific developments worldwide.</p>
            
            <div className="two-column">
                <div>
                    <h3>Mathematics</h3>
                    <ul>
                        <li><strong>Decimal System:</strong> Development of place-value decimal system with zero</li>
                        <li><strong>Aryabhata (476-550 CE):</strong> Calculated π to four decimal places, solved quadratic equations</li>
                        <li><strong>Algebra:</strong> Solutions to indeterminate equations (later called Diophantine equations)</li>
                        <li><strong>Trigonometry:</strong> Sine function (jya) tables more accurate than Greek chord tables</li>
                    </ul>
                </div>
                <img src="https://lifenlesson.com/wp-content/uploads/2016/09/Aryabhatta-1.jpg" alt="Aryabhata"/>
            </div>
            
            <h3>Astronomy</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://media.assettype.com/TNIE/import/2020/8/15/original/ARYABHATA.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" alt="Astronomy"/>
                    <p>Aryabhata proposed heliocentrism 1000 years before Copernicus</p>
                </div>
                <div className="image-card">
                    <img src="https://thebrainchamber.com/wp-content/uploads/2023/12/Ujjain-Observatory--e1702718871734.jpg" alt="Observatory"/>
                    <p>Accurate calculation of solar year and planetary motions</p>
                </div>
                <div className="image-card">
                    <img src="https://cdn.britannica.com/62/157762-050-BA2AE9DF/eclipse-sun.jpg" alt="Eclipses"/>
                    <p>Correct explanation of eclipses as shadows, not demonic phenomena</p>
                </div>
            </div>
            
            <h3>Medicine & Metallurgy</h3>
            <ul>
                <li><strong>Ayurveda:</strong> Systematization by Charaka and Sushruta</li>
                <li><strong>Surgery:</strong> Sophisticated techniques including cataract operations</li>
                <li><strong>Iron Pillar of Delhi:</strong> Rust-resistant metallurgical marvel</li>
                <li><strong>Chemistry:</strong> Knowledge of distillation, calcination, and other processes</li>
            </ul>
            
            <p>These scientific achievements would later be transmitted to the Islamic world and then to Europe, forming the basis for modern mathematics and science.</p>
        </section>


        <section id="arts" className={`content-section${activeTab === "arts" ? " active" : ""}`}>
        <h2>Arts &amp; Literature</h2>
            <img src="https://www.meisterdrucke.us/kunstwerke/1260px/Indian_School_-_Figure_of_a_woman_on_the_back_of_a_horse_Mural_painting_in_the_Ajanta_caves_%28num_-_%28MeisterDrucke-1042419%29.jpg" alt="Gupta Art" className="full-width-image"/>
            
            <p>The Gupta period represents the classical peak of Indian art and literature, establishing aesthetic standards and forms that would endure for centuries. This was the age of Kalidasa, the "Shakespeare of India," and the creation of the Ajanta cave paintings.</p>
            
            <div className="two-column">
                <div>
                    <h3>Literature</h3>
                    <ul>
                        <li><strong>Kalidasa:</strong> Author of Abhijnanashakuntalam, Meghaduta, Raghuvamsha</li>
                        <li><strong>Drama:</strong> Mrichchhakatika by Shudraka, a masterpiece of Sanskrit drama</li>
                        <li><strong>Puranas:</strong> Compilation of major Hindu texts in their current form</li>
                        <li><strong>Kamasutra:</strong> Vatsyayana's treatise on love and social conduct</li>
                    </ul>
                </div>
                <img src="https://pbs.twimg.com/media/CwVAlwEXcAAPBKJ.jpg" alt="Kalidasa"/>
            </div>
            
            <h3>Visual Arts</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg/960px-Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg" alt="Sarnath Buddha"/>
                    <p>Sarnath Buddha - The quintessential Gupta style with serene expression</p>
                </div>
                <div className="image-card">
                    <img src="https://tourismteacher.com/wp-content/uploads/2023/06/ajanta-caves-maharashtra-india-unesco-world-her-2021-12-22-15-39-45-utc.jpg" alt="Ajanta Paintings"/>
                    <p>Ajanta cave paintings - Masterpieces of tempera technique</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Deogarh01.jpg" alt="Deogarh Temple"/>
                    <p>Deogarh Temple - Early example of classNameical Hindu temple architecture</p>
                </div>
            </div>
            
            <h3>Characteristics of Gupta Art</h3>
            <ul>
                <li>Perfect balance between realism and idealism</li>
                <li>Development of iconic forms of Hindu deities</li>
                <li>Refined elegance and spiritual serenity in sculptures</li>
                <li>Use of fine materials like white marble and polished sandstone</li>
                <li>Sophisticated narrative reliefs telling epic stories</li>
            </ul>
            
            <p>The Gupta aesthetic would influence art across Southeast Asia and set the standard for Indian art for centuries.</p>
        </section>

        <section id="religion" className={`content-section${activeTab === "religion" ? " active" : ""}`}>
            <h2>Religion &amp; Philosophy</h2>
            <img src="https://www.poojn.in/wp-content/uploads/2025/04/Gupta-Era-Religion-Beliefs-and-Practices.jpeg.jpg" alt="Gupta Religion" className="full-width-image"/>
            
            <p>The Gupta period saw the consolidation of classical Hinduism alongside the continued flourishing of Buddhism and Jainism, creating a rich intellectual and spiritual environment.</p>
            
            <div className="two-column">
                <img src="https://cdn.britannica.com/69/153469-050-89C4EB8E/Reclining-Buddha-statue-Ajanta-Caves-India-state.jpg?w=400&h=225&c=crop" alt="Buddhism"/>
                <div>
                    <h3>Religious Developments</h3>
                    <ul>
                        <li><strong>Hindu Revival:</strong> Worship of Vishnu and Shiva became dominant</li>
                        <li><strong>Buddhism:</strong> Continued patronage, especially at Nalanda and Ajanta</li>
                        <li><strong>Jainism:</strong> Flourished in western India under royal patronage</li>
                        <li><strong>Bhagavad Gita:</strong> Achieved its final form and prominence</li>
                        <li><strong>Temple Building:</strong> Beginning of classical Hindu temple architecture</li>
                    </ul>
                </div>
            </div>
            
            <h3>Philosophical Schools</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Ruins_Of_Nalanda_University%20wiki--8382b5.jpg" alt="Nalanda"/>
                    <p>Nalanda University - Center of Buddhist and secular learning</p>
                </div>
                <div className="image-card">
                    <img src="https://sanatankultura.com/wp-content/uploads/2020/12/Adi-Shankaracharya.jpg" alt="Philosophy"/>
                    <p>Development of six orthodox schools of Hindu philosophy</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Patanjali_Statue.jpg/250px-Patanjali_Statue.jpg" alt="Yoga"/>
                    <p>Systematization of Yoga philosophy by Patanjali</p>
                </div>
            </div>
            
            <h3>Religious Tolerance</h3>
            <p>The Gupta rulers, while personally Hindu, maintained a policy of religious tolerance:</p>
            <ul>
                <li>Patronage given to Buddhist monasteries and Jain establishments</li>
                <li>Chinese traveler Faxian reports peaceful coexistence of religions</li>
                <li>Artistic depictions show mutual influence between religions</li>
                <li>Philosophical debates between different schools encouraged</li>
            </ul>
            
            <p>This pluralistic environment contributed to the intellectual vitality of the period.</p>
        </section>


        <section id="legacy" className={`content-section${activeTab === "legacy" ? " active" : ""}`}>
<h2>Legacy & Decline</h2>
            <img src="https://aemagazine.pk/posts/legacy_of_gupta_art_and_architecture.jpg" alt="Gupta Legacy" className="full-width-image"/>
            
            <p>While the Gupta Empire eventually fragmented, its cultural achievements became the foundation for later Indian civilization and made significant contributions to world knowledge.</p>
            
            <div className="two-column">
                <div>
                    <h3>Causes of Decline</h3>
                    <ul>
                        <li><strong>Hun Invasions:</strong> Repeated attacks by the White Huns weakened the empire</li>
                        <li><strong>Decentralization:</strong> Growing power of regional governors and feudatories</li>
                        <li><strong>Economic Factors:</strong> Decline in Roman trade and possible fiscal problems</li>
                        <li><strong>Succession Issues:</strong> Weak later rulers unable to maintain the empire</li>
                    </ul>
                </div>
                <img src="https://nishantverma.in/wp-content/uploads/2024/11/Foreign-Invasions-The-External-Threats-to-the-Gupta-Empire-1024x505.jpg" alt="Decline"/>
            </div>
            
            <h3>Enduring Legacy</h3>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://media.licdn.com/dms/image/v2/D4D12AQGEPCmHeBJvBQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1687594690086?e=2147483647&v=beta&t=C6r2gIB9CcuIYL6dU_FbSjLohr5Cec5OaJ6ui-6H1bk" alt="Numerals"/>
                    <p>Decimal numeral system adopted worldwide via Arab mathematicians</p>
                </div>
                <div className="image-card">
                    <img src="https://thearchitectsdiary.com/wp-content/uploads/2023/12/Nagara-style-temple-Image-01-1024x768.webp" alt="Temples"/>
                    <p>Temple architecture style that evolved into Nagara and other styles</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Devimahatmya_%28Glory_of_the_Goddess%29_manuscript_LACMA_M.88.134.7.jpg" alt="Sanskrit"/>
                    <p>Sanskrit literature that became the classical standard</p>
                </div>
            </div>
            
            <h3>Historical Significance</h3>
            <ul>
                <li>Established the cultural patterns of classical Indian civilization</li>
                <li>Mathematical concepts that became the foundation of modern mathematics</li>
                <li>Artistic styles that spread across Southeast Asia</li>
                <li>Religious developments that shaped Hinduism, Buddhism, and Jainism</li>
                <li>Model of enlightened rule that later Indian kings would emulate</li>
            </ul>
            
            <p>The Gupta Golden Age remains one of India's proudest historical periods and one of the most creative eras in world civilization.</p>
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

export default GuptaEmpire;
