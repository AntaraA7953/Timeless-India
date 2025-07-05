import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "society", label: "Society & Culture" },
  { id: "religion", label: "Religion & Philosophy" },
  { id: "literature", label: "Literature & Arts" },
  { id: "legacy", label: "Legacy & Influence" },
  { id: "discovery", label: "Discovery & Research" },
];

const VedicPeriod = () => {
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
  /* Sacred Fire & Knowledge Palette */
  --primary-color: #B28704;     /* Vedic Gold – symbolic of sacred fire and knowledge */
  --secondary-color: #A44A3F;   /* Ritual Red – used in yajnas and vedic ceremonies */
  --accent-color: #E8D8B3;      /* Ancient Parchment – Vedic scriptures on birch bark */
  --text-color: #3C2F1C;        /* Charcoal Brown – for script-like ink */
  --light-color: #F9F5EC;       /* Sandstone Beige – clean backdrop for readability */
  --highlight-color: #6B8E23;   /* Sage Green – represents wisdom, nature, and rishis */
  --dark-color: #4B2E0F;        /* Sacred Wood – deep cultural depth and tradition */
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
            background: linear-gradient(135deg, #B28704, #A44A3F);
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
            background: url('https://www.poojn.in/wp-content/uploads/2025/03/Later-Vedic-Period-Society-and-Culture-Transformed.jpeg.jpg') center/cover;
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
            background:  var(--accent-color);  /* Mustard yellow */
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
            background: var(--secondary-color);  /* Sienna */
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
            box-shadow: 0 15px 30px rgba(168, 98, 29, 0.25);
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
            background: linear-gradient(135deg, #B85C1A, #6B4423);
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
            opacity: 0.6;
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
          <h1>Vedic Period</h1>
            <p>Explore the era of sacred texts, rituals, and the foundations of Indian philosophy</p>
            <p>1500 BCE - 500 BCE | The Age of the Vedas</p>
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
        <h2>The Vedic Period</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/1500-1200_BCE_Rigveda%2C_manuscript_page_sample_i%2C_Mandala_1%2C_Hymn_1_%28Sukta_1%29%2C_Adhyaya_1%2C_lines_1.1.1_to_1.1.9%2C_Sanskrit%2C_Devanagari.jpg" alt="Vedic Texts" className="full-width-image"/>
            
            <p>The Vedic Period marks a significant era in ancient Indian history, characterized by the composition of the Vedas, the oldest sacred texts of Hinduism. This period, spanning from approximately 1500 BCE to 500 BCE, laid the foundation for many aspects of Indian culture, philosophy, and spirituality.</p>
            
            <div className="two-column">
                <img src="https://targetuppsc.com/wp-content/uploads/2024/05/Vedic-era.jpg" alt="Vedic Society"/>
                <div>
                    <h3>Chronology</h3>
                    <ul>
                        <li><strong>Early Vedic Period (1500-1000 BCE):</strong> Formation of early Vedic society, migration of Indo-Aryans, and composition of the Rigveda.</li>
                        <li><strong>Mature Vedic Period (1000-600 BCE):</strong> Development of rituals, emergence of philosophical thought, and compilation of the Samaveda and Yajurveda.</li>
                        <li><strong>Later Vedic Period (600-500 BCE):</strong> Transition to the Upanishadic period, focus on metaphysical concepts, and the rise of new religious movements.</li>
                    </ul>
                </div>
            </div>
            
            <h3>Geographical Extent</h3>
            <p>The Vedic civilization primarily flourished in the northwestern regions of the Indian subcontinent, particularly in the Punjab region, along the banks of the Indus and Saraswati rivers. The geographical landscape played a crucial role in shaping the cultural and spiritual practices of the Vedic people.</p>
                        <div className="image-container">
                <div className="image-card">
                    <img src="https://www.worldhistory.org/img/c/p/1200x900/14540.png" alt="Map of Vedic Civilization"/>
                    <p>Map of Vedic Civilization – Showing spread along Indus and Saraswati rivers</p>
                </div>
                <div className="image-card">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsbdxz8PbTkFoGfEwWVT8plKgb0IOY_2muo1Y4Z_eh536uEkUCxOuxTxXy_8fk4Ji3B1TZ7BUSb0_DLykjXdL5KmKkS8zq-4A7CAKV7uwVV0RtM6BDEOrG69Ifean6lSbe2IlKBhVTS28/s1600/Vedic+Saraswati.jpg" alt="Saraswati River Basin"/>
                    <p>Proposed Saraswati River basin – Important geographical and cultural symbol in Vedic texts</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Early_Vedic_Culture_%281700-1100_BCE%29.png" alt="Fields of Punjab"/>
                    <p>Fertile fields of Punjab – The heartland of early Vedic settlements</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Ganga-Yamuna_Doab.png" alt="Himalayas and Ganga Plains"/>
                    <p>Himalayas and Ganges plains – Later Vedic expansion moved eastward into the Ganga-Yamuna doab</p>
                </div>
            </div>
        </section>

        <section id="society" className={`content-section${activeTab === "society" ? " active" : ""}`}>
          <h2>Society &amp; Culture</h2>
            <img src="https://www.worldhistory.org/img/r/p/750x750/19424.png?v=1738952384-1738950632" alt="Vedic Society Structure" className="full-width-image"/>
            
            <p>The Vedic society was structured around a complex social hierarchy known as the Varna system, which divided people into four main categories:</p>
            
            <div className="two-column">
                <div>
                    <h3>Varna System</h3>
                    <ul>
                        <li><strong>Brahmins:</strong> Priests and scholars responsible for performing rituals and preserving sacred knowledge.</li>
                        <li><strong>Kshatriyas:</strong> Warriors and rulers tasked with protecting and governing the land.</li>
                        <li><strong>Vaishyas:</strong> Merchants and farmers who contributed to the economy through trade and agriculture.</li>
                        <li><strong>Shudras:</strong> Laborers and service providers who supported the other three varnas.</li>
                    </ul>
                </div>
                <img src="https://fotisedu.com/wp-content/uploads/2023/12/image-13.png" alt="Vedic Society"/>
            </div>
            
            <h3>Daily Life</h3>
            <p>Daily life in Vedic society revolved around agriculture, pastoralism, and rituals. The Vedic people engaged in various occupations, including farming, animal husbandry, and trade. Family and community played a central role in their lives, with rituals and festivals marking important events.</p>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://resources.cdn.yaclass.in/39dc8147-b3f7-4855-b92c-959654835b62/shutterstock219722248w400.jpg" alt="Cattle Herding"/>
                    <p>Cattle herding – Central to economy and social status in Vedic life</p>
                </div>
                <div className="image-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-YuOQ9G6wd0mDF_8wgDLj2ltJ42s4A6Dyg&s" alt="Vedic Agriculture"/>
                    <p>Farming scenes – Agriculture using ploughs and irrigation in rural settlements</p>
                </div>
                <div className="image-card">
                    <img src="https://notes.edureify.com/wp-content/uploads/2022/08/photoFXlab_2016-02-05_10-30-44.jpg" alt="Vedic Festival"/>
                    <p>Community gathering – Festivals and yajnas brought people together in shared spiritual observances</p>
                </div>
            </div>
        </section>

        
        
        
        <section id="religion" className={`content-section${activeTab === "religion" ? " active" : ""}`}>
          <h2>Religion &amp; Philosophy</h2>
            <img src="https://www.hua.edu/wp-content/uploads/2019/06/shutterstock_1168057183_1.jpg" alt="Vedic Rituals" className="full-width-image"/>
            
            <p>The Vedic religion was characterized by a rich tapestry of rituals, hymns, and philosophical inquiries. The Vedas, composed in Sanskrit, are the primary texts that outline the spiritual beliefs and practices of the time.</p>
            
            <div className="two-column">
                <div>
                    <h3>Key Concepts</h3>
                    <ul>
                        <li><strong>Dharma:</strong> The moral and ethical duties that individuals must follow according to their varna and stage of life.</li>
                        <li><strong>Karma:</strong> The law of cause and effect, where one's actions in this life influence future lives.</li>
                        <li><strong>Moksha:</strong> The ultimate goal of liberation from the cycle of birth and rebirth (samsara).</li>
                    </ul>
                </div>
                <img src="https://srichants.in/wp-content/uploads/2024/03/vedic-philosophy.jpg" alt="Vedic Philosophy"/>
            </div>
            
            <h3>Rituals and Sacrifices</h3>
            <p>Rituals played a vital role in Vedic religion, with yajnas (sacrificial ceremonies) being central to worship. These rituals were performed to appease deities and ensure prosperity, health, and harmony in society.</p>
                    <div className="image-container">
                <div className="image-card">
                    <img src="https://www.poojn.in/wp-content/uploads/2025/04/Yajna-Ritual-Explained-A-Simple-Guide-to-Vedic-Fire-Ceremony.jpeg.jpg" alt="Yajna Fire Ritual"/>
                    <p>Yajna (fire ritual) – Central to Vedic religious practices, symbolizing sacrifice and cosmic balance</p>
                </div>
                <div className="image-card">
                    <img src="https://images.squarespace-cdn.com/content/v1/5a7e1ecc010027458112449e/1524864361699-EFHD7JDCNR762RKKPEXP/hindu-god-agni.jpg" alt="Agni Dev"/>
                    <p>Agni – The Vedic fire god and divine messenger, essential in every ritual offering</p>
                </div>
                <div className="image-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Rigveda_MS2097.jpg" alt="Rigveda Manuscript"/>
                    <p>Rigveda manuscript – The oldest of the four Vedas, containing hymns dedicated to nature and deities</p>
                </div>
                <div className="image-card">
                    <img src="https://i0.wp.com/hindupost.in/wp-content/uploads/2024/01/Cambria-School.png" alt="Vedic Learning"/>
                    <p>Brahmin student learning Yajurveda – Education through oral recitation in Gurukuls</p>
                </div>
            </div>
        </section>


        <section id="literature" className={`content-section${activeTab === "literature" ? " active" : ""}`}>
        <h2>Literature &amp; Arts</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/1636_CE_Samaveda%2C_Sadvimsha_Brahmana%2C_Varanasi_Sanskrit_college%2C_Edward_Cowell_collection%2C_sample_iii%2C_Sanskrit%2C_Devanagari.jpg" alt="Vedic Literature" className="full-width-image"/>
            
            <p>The Vedic period is renowned for its literary contributions, particularly the Vedas, which are divided into four main texts:</p>
            
            <div className="two-column">
                <div>
                    <h3>The Four Vedas</h3>
                    <ul>
                        <li><strong>Rigveda:</strong> A collection of hymns dedicated to various deities, emphasizing the importance of rituals.</li>
                        <li><strong>Samaveda:</strong> A compilation of melodies and chants used in rituals, focusing on the musical aspect of worship.</li>
                        <li><strong>Yajurveda:</strong> A prose text that provides instructions for rituals and sacrifices.</li>
                        <li><strong>Atharvaveda:</strong> A collection of hymns, spells, and incantations, reflecting the everyday life and beliefs of the people.</li>
                    </ul>
                </div>
                <img src="https://108yogaretreats.com/wp-content/uploads/2023/07/the-four-vedas-1-1024x579.jpg" alt="Vedic Literature"/>
            </div>
            
            <h3>Arts and Crafts</h3>
            <p>Artistic expressions during the Vedic period included pottery, metalwork, and textiles. The craftsmanship of the time laid the groundwork for later Indian art forms.</p>
            <div className="image-container">
                <div className="image-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaiDre10VErjSghaJUHuQ2tSFCuewNVP1DsFtUIQkLl8wMRKyq9gBCJOIogDP81Xvn1g&usqp=CAU" alt="Painted Grey Ware Pottery"/>
                    <p>Painted Grey Ware pottery – Associated with the Later Vedic period, showing evolving ceramic artistry</p>
                </div>
                <div className="image-card">
                    <img src="https://sakalapuja.com/wp-content/uploads/2018/06/Metal-in-Vedas.jpg" alt="Vedic Metalwork"/>
                    <p>Vedic metalwork – Use of copper, bronze, and iron for tools, ornaments, and ritual items</p>
                </div>
                <div className="image-card">
                    <img src="https://www.financialexpress.com/wp-content/uploads/2019/06/Textile660.jpg" alt="Textile Weaving"/>
                    <p>Early textile weaving – Cotton and wool were spun and woven into garments with intricate patterns</p>
                </div>
            </div>
        </section>


        <section id="legacy" className={`content-section${activeTab === "legacy" ? " active" : ""}`}>
            <h2>Legacy &amp; Influence</h2>
            <img src="https://mapmygenome.in/cdn/shop/articles/Yoga_An_Ancient_Tapestry_of_Wisdom.webp?v=1718955580" alt="Vedic Legacy" className="full-width-image"/>
            
            <p>The Vedic period has left an indelible mark on Indian culture, philosophy, and spirituality. Many concepts and practices from this era continue to influence contemporary Hinduism and Indian society.</p>
            
            <div className="two-column">
                <div>
                    <h3>Enduring Influence</h3>
                    <ul>
                        <li>The Vedas remain central to Hindu rituals and ceremonies.</li>
                        <li>Concepts like Dharma (duty), Karma (action), and Moksha (liberation) originate from Vedic teachings.</li>
                        <li>Languages such as Sanskrit evolved further and became vehicles for later scriptures and classical literature.</li>
                        <li>Yajnas (sacrificial rituals) influenced temple rituals and worship practices.</li>
                        <li>Spiritual philosophies found in the Upanishads laid the foundation for Vedanta and influenced Buddhism and Jainism.</li>
                        <li>The caste system, rooted in varna classification, continued to evolve and impact Indian social structure.</li>
                    </ul>
                </div>
                <img src="https://indroyc.com/wp-content/uploads/2014/11/rg_eb_201011_ich_india.jpg?w=600" alt="Vedic Rituals"/>
            </div>

            <h3>Influence on Later Traditions</h3>
            <p>Philosophical and spiritual ideas from the Vedic period influenced later Indian traditions such as:</p>
            <ul>
                <li><strong>Vedanta:</strong> Developed from the Upanishads, focusing on self-realization and Brahman (universal consciousness).</li>
                <li><strong>Yoga:</strong> The meditative and physical discipline mentioned in the Vedas evolved into structured systems like Raja Yoga and Hatha Yoga.</li>
                <li><strong>Ayurveda:</strong> Ancient Indian medicine, with roots in Atharvaveda, developed holistic healing systems still practiced today.</li>
                <li><strong>Festivals:</strong> Seasonal rituals and yajnas evolved into major Hindu festivals such as Diwali and Holi.</li>
            </ul>

            <div className="image-container">
                <div className="image-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4JZIAbxCSI0RbVyeW2_mPRAo9fRCCi9W5w&s" alt="Upanishads Manuscript"/>
                    <p>Upanishads – Philosophical texts reflecting the spiritual maturity of the Vedic Age</p>
                </div>
                <div className="image-card">
                    <img src="https://i.pinimg.com/1200x/81/10/3f/81103f126a677b9819de994d64f5c36d.jpg" alt="Sanskrit Script"/>
                    <p>Refinement of Sanskrit – The language of the Vedas and classical Indian thought</p>
                </div>
                <div className="image-card">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQsMXIZEyCvU-RUjYQSS3XUCLCst7LaUfo9UKW_6JqLtGOSbrRIg48lGw1CujJSMf22AAlzbdfRvvwECFZZQo5kOq6slmT3elcDakJSnOBflD6z4F6UTIns3cyAtE5CnRuaBHkh_RKe3nM/s1600-rw/vedic+yajna1.jpg" alt="Modern Yajna"/>
                    <p>Vedic fire rituals still practiced today in Hindu ceremonies</p>
                </div>
            </div>

            <h3>Legacy in Indian Identity</h3>
            <p>The Vedic heritage continues to shape India’s cultural identity:</p>
            <ul>
                <li>National symbols, such as the Ashoka Chakra, reflect dharmic ideals rooted in the Vedic worldview.</li>
                <li>Classical Indian music and dance often draw inspiration from Vedic hymns and themes.</li>
                <li>Education in ancient India centered around gurukuls, rooted in Vedic traditions of teacher-disciple lineage.</li>
                <li>The Vedic worldview of harmony between nature, cosmos, and human duties still influences Indian ecological and ethical perspectives.</li>
            </ul>

            <p>Thus, the Vedic period is not just a historical phase, but a living legacy that continues to illuminate India’s spiritual and cultural path.</p>
        </section>


        <section id="discovery" className={`content-section${activeTab === "discovery" ? " active" : ""}`}>
        <h2>Discovery &amp; Research</h2>
  <img src="https://i0.wp.com/hindupost.in/wp-content/uploads/2020/10/Vedas.jpg?resize=696%2C391&ssl=1" alt="Preservation of Vedic Texts" className="full-width-image"/>

  <p>The rediscovery and study of the Vedic Period have provided profound insights into the roots of Indian civilization. Unlike archaeological civilizations such as the Indus Valley, the Vedic period is primarily understood through texts and oral traditions passed down for millennia.</p>

  <h3>Vedic Texts and Oral Tradition</h3>
  <ul>
    <li>The Vedas were composed orally and transmitted through rigorous memorization techniques (śruti tradition).</li>
    <li>Specialized groups called <strong>pāṭhins</strong> maintained the precision of recitation across generations.</li>
    <li>Multiple recensions (śākhās) of each Veda were preserved in different regions.</li>
    <li>Even today, some Vedic chants are recited with phonetic precision dating back thousands of years.</li>
  </ul>

  <h3>Archaeological Support</h3>
  <div className="two-column">
    <div>
      <ul>
        <li>Excavations at sites like Hastinapur, Atranjikhera, and Kausambi have revealed painted grey ware pottery associated with the later Vedic period.</li>
        <li>Discovery of fire altars and sacrificial pits aligns with yajna rituals described in the Vedas.</li>
        <li>Settlement patterns show eastward migration into the Gangetic plains, mentioned in texts.</li>
      </ul>
    </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Painted_Grey_Ware_-_Sonkh_-_1000-600_BCE_-_Showcase_6-15_-_Prehistory_and_Terracotta_Gallery_-_Government_Museum_-_Mathura_2013-02-24_6461.JPG/250px-Painted_Grey_Ware_-_Sonkh_-_1000-600_BCE_-_Showcase_6-15_-_Prehistory_and_Terracotta_Gallery_-_Government_Museum_-_Mathura_2013-02-24_6461.JPG" alt="PGW Pottery"/>
  </div>

  <h3>Historical and Linguistic Research</h3>
  <ul>
    <li>Comparative philology links Vedic Sanskrit with Indo-European languages, supporting theories of Indo-Aryan migration or cultural diffusion.</li>
    <li>Manuscripts preserved in palm leaves and birch bark provide valuable historical data.</li>
    <li>Epics like the Mahabharata and Ramayana, composed in later Vedic and post-Vedic periods, offer cultural continuity.</li>
  </ul>

  <div className="image-container">
    <div className="image-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%B3%D1%80%D0%B0%D0%BC%D0%BE%D1%82%D0%B0_109_%D0%BE%D1%82_%D0%96%D0%B8%D0%B7%D0%BD%D0%BE%D0%BC%D0%B8%D1%80%D0%B0_%D0%BA_%D0%9C%D0%B8%D0%BA%D1%83%D0%BB%D0%B5_12_%D0%B2%D0%B5%D0%BA.jpg/250px-%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%B3%D1%80%D0%B0%D0%BC%D0%BE%D1%82%D0%B0_109_%D0%BE%D1%82_%D0%96%D0%B8%D0%B7%D0%BD%D0%BE%D0%BC%D0%B8%D1%80%D0%B0_%D0%BA_%D0%9C%D0%B8%D0%BA%D1%83%D0%BB%D0%B5_12_%D0%B2%D0%B5%D0%BA.jpg" alt="Birch Bark Manuscript"/>
      <p>Ancient manuscripts written on birch bark – early records of Vedic literature</p>
    </div>
    <div className="image-card">
      <img src="https://img.youtube.com/vi/qPcasmn0cRU/0.jpg" alt="Oral Tradition"/>
      <p>Sanskrit scholars preserving oral tradition through recitation</p>
    </div>
    <div className="image-card">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGB0PsAhyphenhyphenslaPkoq8WetFlGMFCPCsZoQkbUpShqAVe-nwx-wRXQzYqxHFtx7EzD3SlatMtQCVvxyntuW1NE38O6edkLJ9cN5ohsYkcxyzQYFHYLlHvY-wjQIW7schyg5EFAjVt85wZrq8Q/s1600/chariot-pre-iron-age.jpg" alt="Excavation in Gangetic Plains"/>
      <p>Archaeological excavations in the Gangetic plains linked to later Vedic settlements</p>
    </div>
  </div>

  <h3>Modern Studies and Challenges</h3>
  <p>Ongoing research continues to explore the Vedic period through multiple disciplines:</p>
  <ul>
    <li><strong>Genetic studies</strong> seek to trace ancient population movements related to Indo-Aryan groups.</li>
    <li><strong>Textual analysis</strong> decodes cosmology, social norms, and philosophy embedded in the Vedas.</li>
    <li><strong>Ethnographic studies</strong> trace Vedic rituals in current tribal and Brahmanical practices.</li>
    <li><strong>Digital preservation</strong> projects now aim to archive ancient manuscripts and Vedic chants.</li>
  </ul>

  <p>Despite challenges in dating and interpretation, the Vedic period continues to be a fertile ground for research, linking past traditions to modern Indian identity.</p>
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

export default VedicPeriod;
