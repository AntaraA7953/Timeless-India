import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "cities", label: "Cities & Architecture" },
  { id: "economy", label: "Economy & Trade" },
  { id: "culture", label: "Culture & Arts" },
  { id: "legacy", label: "Legacy & Mysteries" },
  { id: "discovery", label: "Discovery & Research" },
];

const IndusValley = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Indus Valley Civilization | Timeless India</title>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"/>
        <style>{`
          :root {
              /* Ancient Ochre and Terracotta Palette */
              --primary-color: #9C6D3B;  /* Weathered bronze */
              --secondary-color: #C45E1D;  /* Rust orange */
              --accent-color: #E3C598;  /* Aged parchment */
              --text-color: #4A3C2A;  /* Ancient ink */
              --light-color: #F8F1E0;  /* Faded papyrus */
              --highlight-color: #D4A017;  /* Gold accent */
              --dark-color: #5E3A20;  /* Ancient wood */
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
              background: linear-gradient(135deg, #f39e59, #8B5E3C);
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
              background: url('https://wallpapercave.com/wp/wp11945055.jpg') center/cover;
              opacity: 0.6;
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
              background: #E3B23C;  /* Mustard yellow */
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
              background: #A0522D;  /* Sienna */
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
              opacity: 0.2;
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
          <h1>Indus Valley Civilization</h1>
          <p>Discover the world's first urban culture that flourished in ancient India and Pakistan</p>
          <p>3300 BCE - 1300 BCE | One of the cradles of human civilization</p>
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
          <h2>The Indus Valley Civilization</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Indus_Valley_Civilization%2C_Mature_Phase_%282600-1900_BCE%29.png" alt="Indus Valley Map" className="full-width-image"/>
          <p>The Indus Valley Civilization (IVC), also known as the Harappan Civilization, was one of the world's earliest urban cultures, contemporary with ancient Egypt and Mesopotamia. Flourishing around 3300 BCE to 1300 BCE in what is now Pakistan and northwest India, it covered about 1.25 million square kilometers at its peak, making it the most extensive ancient civilization.</p>
          <div className="two-column">
            <img src="https://cdn.britannica.com/22/196822-050-0E40EBC2/Ruins-city-Harappa-Pakistan-Punjab.jpg" alt="Harappa Site"/>
            <div>
              <h3>Chronology</h3>
              <ul>
                <li><strong>Early Harappan (3300-2600 BCE):</strong> Formation of early farming communities and beginning of urbanization. Villages grew into towns with evidence of pottery, tools, and early trade.</li>
                <li><strong>Mature Harappan (2600-1900 BCE):</strong> Peak urban phase with planned cities, advanced infrastructure, standardized weights and measures, and extensive trade networks.</li>
                <li><strong>Late Harappan (1900-1300 BCE):</strong> Gradual decline of urban features, transformation into regional cultures, and eventual disappearance of characteristic Harappan elements.</li>
              </ul>
            </div>
          </div>
          <h3>Geographical Extent</h3>
          <p>The civilization spanned across modern-day Pakistan and northwestern India, with major sites located along the Indus River and its tributaries, as well as the now-dry Ghaggar-Hakra river system (possibly the ancient Saraswati River mentioned in Vedic texts).</p>
          <div className="image-container">
            <div className="image-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Mohenjodaro_-_view_of_the_stupa_mound.JPG" alt="Mohenjo-Daro"/>
              <p>Mohenjo-Daro in Pakistan - One of the largest cities with population estimates between 40,000-50,000</p>
            </div>
            <div className="image-card">
              <img src="https://cdn.britannica.com/94/155594-050-D61369CC/Harappan-well-Pakistan.jpg" alt="Harappa"/>
              <p>Harappa in Pakistan - The first discovered site (in 1921) that gave the civilization its name</p>
            </div>
            <div className="image-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/DHOLAVIRA_SITE_%2824%29.jpg" alt="Dholavira"/>
              <p>Dholavira in Gujarat, India - Notable for its sophisticated water conservation system</p>
            </div>
            <div className="image-card">
              <img src="https://images.wanderon.in/blogs/new/2024/06/lothal.jpg" alt="Lothal"/>
              <p>Lothal in Gujarat, India - Ancient port city with the world's earliest known dock</p>
            </div>
          </div>
          <h3>Significance in World History</h3>
          <p>The Indus Valley Civilization represents one of the three earliest civilizations of the Old World (along with Mesopotamia and Ancient Egypt). What sets it apart is its remarkable urban planning, standardized construction techniques, and apparent lack of evidence for warfare or extreme social stratification, suggesting a possibly more egalitarian society compared to its contemporaries.</p>
        </section>
        <section id="cities" className={`content-section${activeTab === "cities" ? " active" : ""}`}>
          <h2>Cities &amp; Architecture</h2>
          <img src="https://stdc.gos.pk/wp-content/uploads/2024/10/Mohenjo-Daro-Canvas-2-16x20-copies-scaled.jpg" alt="Mohenjo-Daro" className="full-width-image"/>
          <p>The Indus Valley cities were marvels of ancient urban planning, demonstrating sophisticated understanding of civil engineering and municipal organization that wouldn't be matched for thousands of years in many parts of the world.</p>
          <div className="two-column">
            <div>
              <h3>Urban Planning Features</h3>
              <ul>
                <li><strong>Grid Layout:</strong> Streets laid out in precise north-south and east-west grid patterns with main avenues up to 10 meters wide</li>
                <li><strong>Standardized Bricks:</strong> Uniform baked bricks in consistent ratio of 4:2:1 (length:width:thickness) used throughout the civilization</li>
                <li><strong>Drainage Systems:</strong> Sophisticated covered drains with inspection holes and sedimentation traps for waste management</li>
                <li><strong>Water Management:</strong> Wells in every house, public baths (Great Bath at Mohenjo-Daro), and reservoirs (Dholavira)</li>
                <li><strong>Citadel and Lower Town:</strong> Many cities divided into elevated citadels (possibly administrative/religious centers) and lower residential areas</li>
              </ul>
            </div>
            <img src="https://www.harappa.com/sites/default/files/styles/gallery_wide_slide/public/slides/14_4.jpg" alt="City Layout"/>
          </div>
          <h3>Notable Structures</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://www.harappa.com/sites/default/files/styles/gallery_wide_slide/public/slides/bath-indus.jpg" alt="Great Bath"/>
              <p>The Great Bath at Mohenjo-Daro - Earliest public water tank with precise brickwork and waterproofing</p>
            </div>
            <div className="image-card">
              <img src="https://www.harappa.com/sites/default/files/slides/granary-harappa.jpg" alt="Granary"/>
              <p>Granary at Harappa - Massive storage facility suggesting centralized food distribution</p>
            </div>
            <div className="image-card">
              <img src="https://www.researchgate.net/publication/282862274/figure/fig8/AS:668236509093898@1536331407395/Water-Reservoir-at-Dholavira-Rann-of-Kutch-Harrapan-Civilization-dated-2500-1900BC.jpg" alt="Water Reservoir"/>
              <p>Water reservoir at Dholavira - Sophisticated system of tanks and channels</p>
            </div>
          </div>
          <h3>Housing and Daily Life</h3>
          <p>Residential architecture reveals much about Harappan society. Houses were typically made of baked bricks and often included:</p>
          <ul>
            <li>Multiple stories (evidence from staircases and wall thickness)</li>
            <li>Courtyards as central features for light and ventilation</li>
            <li>Private wells and bathrooms with brick floors and drainage</li>
            <li>Window grills made of terracotta or wood</li>
            <li>Kitchens with hearths and grinding stones</li>
            <li>Evidence of furniture from impressions in floors</li>
          </ul>
          <p>Remarkably, even smaller houses had access to the advanced drainage system, suggesting a concern for public health that extended across social classes.</p>
        </section>
        <section id="economy" className={`content-section${activeTab === "economy" ? " active" : ""}`}>
          <h2>Economy &amp; Trade</h2>
          <img src="https://www.harappa.com/sites/default/files/styles/gallery_wide_slide/public/slides/major-indus-sites-networks.jpg" alt="Trade Routes" className="full-width-image"/>
          <p>The Indus Valley Civilization had a complex, thriving economy based on agriculture, craft production, and extensive trade networks that reached across ancient Asia.</p>
          <div className="two-column">
            <img src="https://www.poojn.in/wp-content/uploads/2025/03/Indus-Valley-Civilization-TradeAgricultureandEconomy-Explained.jpeg.jpg" alt="Agriculture"/>
            <div>
              <h3>Agriculture</h3>
              <p>The Harappans were skilled farmers who cultivated:</p>
              <ul>
                <li>Wheat and barley as staple crops</li>
                <li>Peas, sesame, dates, and mustard</li>
                <li>Cotton - they were the first civilization to domesticate cotton for textiles</li>
                <li>Rice (found at some sites, though not a major crop)</li>
              </ul>
              <p>They used wooden plows, irrigation systems, and possibly crop rotation techniques. Evidence of granaries suggests organized food storage and distribution.</p>
            </div>
          </div>
          <h3>Craft Production</h3>
          <p>The Harappans were master craftspeople, producing high-quality goods that were traded across vast distances:</p>
          <div className="image-container">
            <div className="image-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/British_Museum_Middle_East_14022019_Gold_and_carnelian_beads_2600-2300_BC_Royal_cemetery_of_Ur_%28composite%29.jpg/1200px-British_Museum_Middle_East_14022019_Gold_and_carnelian_beads_2600-2300_BC_Royal_cemetery_of_Ur_%28composite%29.jpg" alt="Beads"/>
              <p>Carnelian beads - Made with advanced drilling techniques and heat-treated for color</p>
            </div>
            <div className="image-card">
              <img src="https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/barakatgallery/images/view/eadbbebe7b4ee3ebccc74325effec128j/barakatgallery-indus-valley-terracotta-vessel-published-9500-3000-bc-2000-bc.jpg" alt="Pottery"/>
              <p>Painted pottery - Wheel-made with geometric and animal designs</p>
            </div>
            <div className="image-card">
              <img src="https://static.wixstatic.com/media/88fbd3_7f1446f7fba141d0ab057420410e89bd~mv2_d_1200_1541_s_2.jpg/v1/fill/w_560,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/88fbd3_7f1446f7fba141d0ab057420410e89bd~mv2_d_1200_1541_s_2.jpg" alt="Metalwork"/>
              <p>Bronze artifacts - Including tools, weapons, and the famous "Dancing Girl" statue</p>
            </div>
          </div>
          <h3>Trade Networks</h3>
          <p>The civilization had extensive trade connections that reached:</p>
          <ul>
            <li><strong>Mesopotamia:</strong> Evidence in Sumerian texts mentions trade with "Meluhha" (possibly the Indus region)</li>
            <li><strong>Central Asia:</strong> Trade with the Oxus civilization for lapis lazuli and other materials</li>
            <li><strong>Indian Peninsula:</strong> Connections with copper sources in Rajasthan and other regions</li>
          </ul>
          <p>Key aspects of their trade system included:</p>
          <ul>
            <li>Standardized weights based on a binary system (1, 2, 4, 8, 16, etc.)</li>
            <li>Seals used for marking goods (found as far as Mesopotamia)</li>
            <li>Specialized port facilities like those at Lothal</li>
            <li>Evidence of long-distance trade in luxury items like lapis lazuli from Afghanistan</li>
          </ul>
        </section>
        <section id="culture" className={`content-section${activeTab === "culture" ? " active" : ""}`}>
          <h2>Culture &amp; Arts</h2>
          <img src="https://www.harappa.com/sites/default/files/c047.jpg" alt="Indus Art" className="full-width-image"/>
          <p>The Indus Valley Civilization left behind a rich artistic legacy that provides glimpses into their cultural and possibly religious life, though much remains mysterious due to the undeciphered script.</p>
          <div className="two-column">
            <div>
              <h3>Seals and Script</h3>
              <p>Thousands of steatite seals have been discovered, typically featuring:</p>
              <ul>
                <li>Animal motifs (unicorn-like creatures, bulls, elephants, etc.)</li>
                <li>Possible deities or ritual scenes</li>
                <li>Short inscriptions in the undeciphered Indus script</li>
              </ul>
              <p>The script consists of about 400-600 symbols, but despite numerous attempts, it remains undeciphered, making it one of the civilization's greatest mysteries.</p>
            </div>
            <img src="https://www.worldhistory.org/img/r/p/1500x1500/2974.jpg" alt="Indus Seals"/>
          </div>
          <h3>Sculpture and Figurines</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://www.thoughtco.com/thmb/FONggQMsXFDZwLqenR6U-mBAMSE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dancing_girl._Mohenjodaro-594e47213df78cae811c5aee.jpg" alt="Dancing Girl"/>
              <p>Bronze "Dancing Girl" - A masterpiece of lost-wax casting technique</p>
            </div>
            <div className="image-card">
              <img src="https://i.pinimg.com/474x/90/0a/62/900a62a2a1e6b0002408e3feb3bcb977.jpg" alt="Priest King"/>
              <p>Stone "Priest-King" sculpture - Demonstrating advanced stone carving</p>
            </div>
            <div className="image-card">
              <img src="https://www.harappa.com/sites/default/files/slides/harappa-figurines_0.jpg" alt="Terracotta Figurines"/>
              <p>Terracotta figurines - Mostly female figures, possibly representing a mother goddess</p>
            </div>
          </div>
          <h3>Possible Religious Practices</h3>
          <p>While no temples have been conclusively identified, several elements suggest religious beliefs:</p>
          <ul>
            <li><strong>Mother Goddess:</strong> Numerous female figurines may represent a fertility deity</li>
            <li><strong>Proto-Shiva:</strong> The "Pashupati" seal shows a figure in yogic posture surrounded by animals</li>
            <li><strong>Sacred Symbols:</strong> Swastika and other symbols that continue in later Indian religions</li>
            <li><strong>Fire Altars:</strong> Found at sites like Kalibangan, suggesting fire rituals</li>
            <li><strong>Tree and Animal Worship:</strong> Evidence from seals and artifacts</li>
          </ul>
          <p>The apparent continuity of some symbols and practices into later Hinduism suggests the IVC may have contributed to India's later religious traditions.</p>
        </section>
        <section id="legacy" className={`content-section${activeTab === "legacy" ? " active" : ""}`}>
          <h2>Legacy &amp; Mysteries</h2>
          <img src="https://curiosmos.com/wp-content/uploads/2018/11/Climate-change-led-to-the-collapse-of-the-Indus-Valley-Civilization.webp" alt="Indus Decline" className="full-width-image"/>
          <p>The decline and disappearance of the Indus Valley Civilization around 1900-1300 BCE remains one of archaeology's great puzzles, with several competing theories.</p>
          <div className="two-column">
            <div>
              <h3>Theories of Decline</h3>
              <ul>
                <li><strong>Climate Change:</strong> Shifting monsoon patterns and drying of the Ghaggar-Hakra river system</li>
                <li><strong>Environmental Degradation:</strong> Deforestation, soil salinity from irrigation, and other human impacts</li>
                <li><strong>Natural Disasters:</strong> Possible floods, earthquakes, or tectonic changes affecting river courses</li>
                <li><strong>Economic Collapse:</strong> Breakdown of trade networks or resource depletion</li>
                <li><strong>Migration:</strong> Gradual movement of populations eastward toward the Ganges plain</li>
              </ul>
              <p>Most scholars now favor a combination of factors rather than a single cause.</p>
            </div>
            <img src="https://images.squarespace-cdn.com/content/v1/50adfa2ae4b0cc1d786569eb/bdc62696-be99-4220-91cb-ab5ca28787f8/20220518+1024px-Another_view_of_Granary_and_Great_Hall_on_Mound_F.JPG" alt="Cultural Continuity"/>
          </div>
          <h3>Enduring Legacy</h3>
          <p>While the urban features disappeared, elements of Harappan culture may have survived in later South Asian traditions:</p>
          <div className="image-container">
            <div className="image-card">
              <img src="https://i.dawn.com/primary/2016/04/571d310a73927.jpg" alt="Craft Continuity"/>
              <p>Craft traditions like bead-making and metallurgy</p>
            </div>
            <div className="image-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ocoorth6aszYagv3jfznL6q1JSsqg7gw0Q&s" alt="Symbols"/>
              <p>Religious symbols like the swastika and possibly some deities</p>
            </div>
            <div className="image-card">
              <img src="https://reasonstobecheerful.world/wp-content/uploads/2025/01/1-scaled.jpg" alt="Water Management"/>
              <p>Water management techniques seen in later Indian stepwells</p>
            </div>
          </div>
          <h3>Unanswered Questions</h3>
          <p>The Indus Valley Civilization continues to puzzle researchers with several enduring mysteries:</p>
          <ul>
            <li><strong>Political Organization:</strong> No evidence of kings, palaces, or temples - was their society more egalitarian?</li>
            <li><strong>Language:</strong> The undeciphered script prevents understanding of their literature, laws, or history</li>
            <li><strong>Uniformity:</strong> How did they maintain such cultural consistency across vast distances?</li>
            <li><strong>Relationship to Vedic Culture:</strong> The nature of the transition between the IVC and later Vedic period remains unclear</li>
          </ul>
        </section>
        <section id="discovery" className={`content-section${activeTab === "discovery" ? " active" : ""}`}>
          <h2>Discovery &amp; Research</h2>
          <img src="https://www.harappa.com/sites/default/files/question/excavations.jpg" alt="Early Excavations" className="full-width-image"/>
          <p>The rediscovery of the Indus Valley Civilization in the 20th century revolutionized our understanding of ancient South Asian history.</p>
          <h3>History of Discovery</h3>
          <ul>
            <li><strong>1921:</strong> First excavations at Harappa by Daya Ram Sahni</li>
            <li><strong>1922:</strong> R.D. Banerji begins work at Mohenjo-Daro</li>
            <li><strong>1947:</strong> Partition divides major sites between India and Pakistan</li>
            <li><strong>1950s-present:</strong> Discovery of many new sites in India (Kalibangan, Lothal, Dholavira, etc.)</li>
          </ul>
          <h3>Modern Research Techniques</h3>
          <div className="image-container">
            <div className="image-card">
              <img src="https://www.eorc.jaxa.jp/en/earthview/2010/img/tp100324_02e.jpg" alt="Remote Sensing"/>
              <p>Satellite imagery and remote sensing to locate sites</p>
            </div>
            <div className="image-card">
              <img src="https://i.pinimg.com/736x/61/6b/31/616b3162a9c8194f8ef75058edc796a6.jpg" alt="Lab Analysis"/>
              <p>Scientific analysis of artifacts and human remains</p>
            </div>
            <div className="image-card">
              <img src="https://th-thumbnailer.cdn-si-edu.com/5QPOBjEYyCRrxFmzpAWLnfNmZ1k=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/69/d0/69d0d23a-2380-4f74-bb16-9f76547f9463/narasimhan1hr.jpg" alt="DNA Research"/>
              <p>Genetic studies to understand population movements</p>
            </div>
          </div>
          <h3>Ongoing Debates</h3>
          <ul>
            <li>Attempts to decipher the Indus script using computational methods</li>
            <li>Investigations into climate change and its role in the civilization decline</li>
            <li>Studies of craft production techniques and trade networks</li>
            <li>Exploration of underwater sites in the Gulf of Khambhat</li>
          </ul>
          <p>New discoveries continue to reshape our understanding of this remarkable ancient civilization, with many sites still awaiting excavation and new technologies providing fresh insights.</p>
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

export default IndusValley;
