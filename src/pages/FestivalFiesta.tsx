import { useState, type CSSProperties } from "react";
import DurgaPuja from "./DurgaPuja";
import Diwali from "./Diwali";
import Christmas from "./Christmas";

export default function FestivalFiesta() {
  const [selectedFestival, setSelectedFestival] = useState<string | null>(null);

  const festivals = [
    {
      id: "durga",
      name: "Durga Puja",
      native: "দুর্গা পূজা",
      region: "West Bengal",
      image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*szbNklJFDPngqSnlZ9gysw.jpeg",
      colour: "#5368C5",
      symbol: "✦",
    },
    {
      id: "diwali",
      name: "Diwali",
      native: "दीपावली",
      region: "Across India",
      image: "https://cdn.freepixel.com/preview/free-photos-happy-diwali-festival-photo---a-vibrant-diwali-celebration-scene-featuring-fireworks-exploding-in-th-preview-1004240387.jpg",
      colour: "#9A5BB4",
      symbol: "◇",
    },
    {
      id: "holi",
      name: "Holi",
      native: "होली",
      region: "Across India",
      image: "https://t3.ftcdn.net/jpg/05/74/76/26/360_F_574762696_tfscEWrAt6hEmsOQWwalUiXW101sHwSL.jpg",
      colour: "#D14F91",
      symbol: "●",
    },
    {
      id: "onam",
      name: "Onam",
      native: "ഓണം",
      region: "Kerala",
      image: "https://bhaktibhava.com/wp-content/uploads/2025/09/onam-festivals-of-kerala-pookkalam-sadhya-boat-race-traditions.jpg",
      colour: "#239B91",
      symbol: "❋",
    },
    {
      id: "pongal",
      name: "Pongal",
      native: "பொங்கல்",
      region: "Tamil Nadu",
      image: "https://thumbs.dreamstime.com/b/traditional-colorful-setup-south-indian-harvest-festival-pongal-decorated-clay-pot-filled-rice-boiling-over-409006188.jpg",
      colour: "#3988B9",
      symbol: "◇",
    },
    {
      id: "ganesh",
      name: "Ganesh Chaturthi",
      native: "गणेश चतुर्थी",
      region: "Maharashtra",
      image: "https://images.unsplash.com/photo-1630567397049-39d9a45d3d4a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmluYXlha2ElMjBjaGF0dXJ0aGl8ZW58MHx8MHx8fDA%3D",
      colour: "#A64E91",
      symbol: "✧",
    },
    {
      id: "eid",
      name: "Eid",
      native: "عید",
      region: "Across India",
      image: "https://i.pinimg.com/736x/b1/90/bc/b190bc762bb23a8721c1f2646c215863.jpg",
      colour: "#299486",
      symbol: "☾",
    },
    {
      id: "bihu",
      name: "Bihu",
      native: "বিহু",
      region: "Assam",
      image: "https://scontent.fccu20-1.fna.fbcdn.net/v/t1.6435-9/150865560_3708421745944662_7818040432721435845_n.jpg?stp=dst-jpg_tt6&cstp=mx669x960&ctp=s669x960&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AldbbOWJlVAQ7kNvwFf5olY&_nc_oc=AdoPXmgfln9SEBGsjiBSwDDcjKL1pllILq1LTCMRVIN3c8ZujUXRr3eW58qkdblurGXTVVXyOl8TWH5sdFP0Bi7t&_nc_zt=23&_nc_ht=scontent.fccu20-1.fna&_nc_gid=MKU0IB6rywI6iahzfcUHLw&_nc_ss=7b289&oh=00_AQF8jYvV04xbJGfj2yWPrPxn5LTYDegeErifcQGyQKgZwA&oe=6AB6B138",
      colour: "#29917C",
      symbol: "❋",
    },
    {
      id: "janmashtami",
      name: "Janmashtami",
      native: "जन्माष्टमी",
      region: "Across India",
      image: "https://www.creativehatti.com/wp-content/uploads/edd/2021/07/Shree-krishna-janmashtami-illustration-template-25-large.jpg",
      colour: "#6570B8",
      symbol: "✦",
    },
    {
      id: "christmas",
      name: "Christmas",
      nativeName: "Christmas",
      region: "Across India",
      color: "#D62828",
      symbol: "✦",
      image: "https://images.news18.com/webstories/uploads/2025/12/cropped-9-christmas-photogenic-spots-in-india-2025-12-12bd861529129698ace4301460074933.jpg",
      description: "Christmas is celebrated across India with midnight prayers, decorated churches, Christmas trees, lights, carols, festive food and gatherings with family and friends.",
    },
    {
      id: "rath-yatra",
      name: "Rath Yatra",
      nativeName: "ରଥଯାତ୍ରା",
      region: "Odisha & West Bengal",
      color: "#E67E22",
      symbol: "🛕",
      image:"YOUR_RATH_YATRA_IMAGE_URL",
      description:"Rath Yatra is a grand chariot festival associated with Lord Jagannath. Celebrated most famously in Puri, Odisha, it is also observed with great enthusiasm in West Bengal and other parts of India, with colourful chariots, processions, devotion and community celebrations."
    },
    {
      id: "raksha",
      name: "Raksha Bandhan",
      native: "रक्षा बंधन",
      region: "Across India",
      image: "YOUR_RAKSHA_BANDHAN_IMAGE_URL",
      colour: "#C14E82",
      symbol: "○",
    },
    {
      id: "baisakhi",
      name: "Baisakhi",
      native: "ਵਿਸਾਖੀ",
      region: "Punjab",
      image: "YOUR_BAISAKHI_IMAGE_URL",
      colour: "#3589A0",
      symbol: "✧",
    },
    {
      id: "sankranti",
      name: "Makar Sankranti",
      native: "मकर संक्रांति",
      region: "Across India",
      image: "YOUR_SANKRANTI_IMAGE_URL",
      colour: "#5275B9",
      symbol: "◇",
    },
    {
      id: "mahavir",
      name: "Mahavir Jayanti",
      native: "महावीर जयंती",
      region: "Across India",
      image: "YOUR_MAHAVIR_IMAGE_URL",
      colour: "#815DA9",
      symbol: "✧",
    },
  ];

  /*
   * =====================================================
   * FESTIVAL CLICK HANDLER
   *
   * IMPORTANT:
   * Both Durga Puja and Diwali are handled here.
   * =====================================================
   */
  const openFestival = (festival) => {
    if (festival.id === "durga") {
      setSelectedFestival("durga");
      return;
    }

    if (festival.id === "diwali") {
      setSelectedFestival("diwali");
      return;
    }

    if (festival.id === "christmas") {
      setSelectedFestival("christmas");
      return;
    }
  };

  /*
   * =====================================================
   * OPEN DURGA PUJA
   * =====================================================
   */
  if (selectedFestival === "durga") {
    return (
      <DurgaPuja
        onBack={() => setSelectedFestival(null)}
      />
    );
  }

  /*
   * =====================================================
   * OPEN DIWALI
   * =====================================================
   */
  if (selectedFestival === "diwali") {
    return (
      <Diwali
        onBack={() => setSelectedFestival(null)}
      />
    );
  }

  /*
   * =====================================================
   * OPEN CHRISTMAS
   * =====================================================
   */
  if (selectedFestival === "christmas") {
    return (
      <Christmas
        onBack={() => setSelectedFestival(null)}
      />
    );
  }

  const festivalLetters = "Festival".split("");
  const fiestaLetters = "Fiesta".split("");

  return (
    <div className="fiesta">

      <style>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        /* =====================================================
           MAIN
        ===================================================== */

        .fiesta {
          --ink: #29343B;
          --muted: #66757D;

          --blue: #5368C5;
          --violet: #8957A9;
          --pink: #C84E89;
          --teal: #26988D;
          --cyan: #398CB5;
          --green: #4B9C83;

          min-height: 100vh;

          color: var(--ink);

          font-family:
            Arial,
            sans-serif;

          overflow-x: hidden;

          background: #FBFAF8;
        }


        /* =====================================================
           TOP BORDER
        ===================================================== */

        .top-border {
          height: 12px;

          background:
            repeating-linear-gradient(
              90deg,

              #5368C5 0 15px,
              #FBFAF8 15px 21px,

              #26988D 21px 38px,
              #FBFAF8 38px 44px,

              #C84E89 44px 61px,
              #FBFAF8 61px 67px,

              #8957A9 67px 84px,
              #FBFAF8 84px 90px,

              #398CB5 90px 107px
            );
        }


        /* =====================================================
           NAVIGATION
        ===================================================== */

        .nav {
          max-width: 1320px;

          margin: auto;

          padding: 24px 42px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          border-bottom:
            1px solid #E0E4E1;

          background: #FBFAF8;
        }

        .brand {
          font-family:
            Georgia,
            serif;

          font-size: 22px;

          color: #30383D;
        }

        .brand em {
          color: var(--blue);

          font-style: italic;
        }

        .nav-label {
          display: flex;

          align-items: center;

          gap: 15px;

          color: #68777E;

          font-size: 9px;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .nav-mark {
          width: 7px;

          height: 7px;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              var(--pink),
              var(--violet)
            );
        }


        /* =====================================================
           HERO
        ===================================================== */

        .hero {
          max-width: 1320px;

          min-height: 650px;

          margin: auto;

          position: relative;

          overflow: hidden;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            linear-gradient(
              125deg,
              #DCE8FA 0%,
              #E7DCF2 50%,
              #D9EEE9 100%
            );
        }

        .hero-content {
          position: relative;

          z-index: 5;

          width: 100%;

          padding: 80px 40px;

          text-align: center;
        }

        .hero-small {
          color: #72549A;

          font-size: 10px;

          letter-spacing: 4px;

          margin-bottom: 28px;
        }

        .hero-title {
          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(72px, 10.5vw, 142px);

          font-weight: 400;

          line-height: .78;

          letter-spacing: -6px;
        }

        .title-word {
          display: block;

          white-space: nowrap;
        }

        .festival-word {
          color: #3E539E;
        }

        .fiesta-word {
          margin-top: 23px;

          margin-left: 115px;

          color: #BE427D;

          font-style: italic;
        }


        /* =====================================================
           LETTER ANIMATION
        ===================================================== */

        .title-letter {
          display: inline-block;

          opacity: 0;

          animation:
            letterFall
            .85s
            cubic-bezier(
              .21,
              .72,
              .24,
              1.08
            )
            forwards;
        }

        @keyframes letterFall {

          0% {
            opacity: 0;

            transform:
              translateY(-120px)
              rotate(-15deg)
              scale(.85);

            filter: blur(6px);
          }

          45% {
            opacity: 1;

            transform:
              translateY(18px)
              rotate(4deg)
              scale(1.03);

            filter: blur(0);
          }

          70% {
            transform:
              translateY(-7px)
              rotate(-1deg);
          }

          85% {
            transform:
              translateY(3px)
              rotate(.5deg);
          }

          100% {
            opacity: 1;

            transform:
              translateY(0)
              rotate(0)
              scale(1);
          }
        }

        .hero-description {
          max-width: 560px;

          margin:
            42px auto 0;

          color: #5F6D76;

          font-family:
            Georgia,
            serif;

          font-size: 16px;

          line-height: 1.7;
        }


        /* =====================================================
           HERO MOTIFS
        ===================================================== */

        .motif {
          position: absolute;

          pointer-events: none;
        }

        .motif-left {
          left: -40px;

          top: 80px;

          width: 230px;

          height: 430px;

          border:
            1px solid
            rgba(63,83,158,.35);

          border-radius:
            50% 50% 0 0;

          transform:
            rotate(19deg);
        }

        .motif-left::before {
          content: "";

          position: absolute;

          inset: 25px;

          border:
            1px dashed
            rgba(38,152,141,.45);

          border-radius:
            50% 50% 0 0;
        }

        .motif-left::after {
          content: "✦";

          position: absolute;

          right: 28px;

          top: 100px;

          color: var(--teal);

          font-size: 23px;
        }

        .motif-right {
          right: -45px;

          bottom: 25px;

          width: 255px;

          height: 400px;

          border:
            1px solid
            rgba(200,78,137,.35);

          border-radius:
            50% 50% 0 0;

          transform:
            rotate(-18deg);
        }

        .motif-right::before {
          content: "";

          position: absolute;

          inset: 28px;

          border:
            1px dashed
            rgba(137,87,169,.42);

          border-radius:
            50% 50% 0 0;
        }

        .motif-right::after {
          content: "❋";

          position: absolute;

          left: 30px;

          top: 90px;

          color: var(--violet);

          font-size: 27px;
        }

        .floating-symbol {
          position: absolute;

          font-family:
            Georgia,
            serif;

          font-size: 26px;

          z-index: 2;
        }

        .symbol-one {
          left: 23%;

          top: 105px;

          color: var(--teal);
        }

        .symbol-two {
          right: 23%;

          top: 125px;

          color: var(--violet);
        }

        .symbol-three {
          left: 26%;

          bottom: 90px;

          color: var(--pink);
        }

        .symbol-four {
          right: 27%;

          bottom: 110px;

          color: var(--blue);
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .intro {
          max-width: 1320px;

          margin: auto;

          padding: 105px 55px;

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 90px;

          background: #FBFAF8;
        }

        .eyebrow {
          margin-bottom: 16px;

          color: var(--blue);

          font-size: 9px;

          letter-spacing: 3px;
        }

        .intro-title {
          margin: 0;

          font-family:
            Georgia,
            serif;

          font-size: 56px;

          font-weight: 400;

          line-height: .95;
        }

        .intro-title span {
          color: var(--pink);

          font-style: italic;
        }

        .intro-text {
          max-width: 520px;

          margin: auto 0 0;

          color: var(--muted);

          font-family:
            Georgia,
            serif;

          font-size: 17px;

          line-height: 1.85;
        }


        /* =====================================================
           FESTIVAL CONSTELLATION
        ===================================================== */

        .festival-section {
          max-width: 1320px;

          margin: auto;

          padding:
            85px 45px 125px;

          background: #D7F0EC;
        }

        .section-title-row {
          display: flex;

          align-items: end;

          justify-content: space-between;

          margin-bottom: 38px;
        }

        .section-title {
          margin: 0;

          font-family:
            Georgia,
            serif;

          font-size: 39px;

          font-weight: 400;

          color: #244B55;
        }

        .section-title span {
          color: #267D88;

          font-style: italic;

          margin-left: 8px;
        }

        .section-note {
          color: #557177;

          font-size: 9px;

          letter-spacing: 2px;

          text-transform: uppercase;
        }


        /* =====================================================
           CONSTELLATION
        ===================================================== */

        .constellation {
          min-height: 790px;

          position: relative;

          overflow: hidden;

          border:
            1px solid #A7D4CE;

          background:
            radial-gradient(
              circle at center,

              #FFFFFF 0%,

              #F1FBF9 28%,

              #DDEFF2 58%,

              #CBE6E4 100%
            );
        }


        /* =====================================================
           ROTATION
        ===================================================== */

        .solar-system {
          position: absolute;

          width: 760px;

          height: 760px;

          left: 50%;

          top: 50%;

          transform:
            translate(-50%, -50%);

          animation:
            solarRotate
            150s
            linear
            infinite;
        }

        @keyframes solarRotate {

          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }


        /* =====================================================
           ORBITS
        ===================================================== */

        .orbit {
          position: absolute;

          left: 50%;

          top: 50%;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          pointer-events: none;
        }

        .orbit-one {
          width: 700px;

          height: 700px;

          border:
            1px dashed
            rgba(57,140,181,.38);
        }

        .orbit-two {
          width: 515px;

          height: 515px;

          border:
            1px solid
            rgba(38,152,141,.38);
        }

        .orbit-three {
          width: 335px;

          height: 335px;

          border:
            1px dashed
            rgba(82,105,197,.34);
        }

        .orbit-one::before {
          content: "";

          position: absolute;

          width: 7px;

          height: 7px;

          border-radius: 50%;

          background: #398CB5;

          top: 15%;

          left: 7%;
        }

        .orbit-two::before {
          content: "";

          position: absolute;

          width: 6px;

          height: 6px;

          border-radius: 50%;

          background: #26988D;

          right: 12%;

          top: 21%;
        }

        .orbit-three::before {
          content: "";

          position: absolute;

          width: 5px;

          height: 5px;

          border-radius: 50%;

          background: #5368C5;

          left: 18%;

          bottom: 11%;
        }


        /* =====================================================
           FIXED INDIA
        ===================================================== */

        .solar-core {
          position: absolute;

          left: 50%;

          top: 50%;

          width: 175px;

          height: 175px;

          transform:
            translate(-50%, -50%);

          z-index: 30;

          pointer-events: none;
        }

        .solar-core::before {
          content: "";

          position: absolute;

          inset: -25px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(38,152,141,.14),
              transparent 68%
            );

          animation:
            sunPulse
            5s
            ease-in-out
            infinite;
        }

        @keyframes sunPulse {

          0%,
          100% {
            transform: scale(1);

            opacity: .55;
          }

          50% {
            transform: scale(1.12);

            opacity: 1;
          }
        }

        .centre {
          width: 160px;

          height: 160px;

          border-radius: 50%;

          background:
            linear-gradient(
              145deg,
              #FFFFFF,
              #EFF9F7
            );

          border:
            2px solid #72B5B0;

          display: flex;

          align-items: center;

          justify-content: center;

          text-align: center;

          box-shadow:
            0 15px 40px
            rgba(37,105,105,.15);

          position: relative;

          z-index: 3;
        }

        .centre-main {
          font-family:
            Georgia,
            serif;

          color: #277985;

          font-size: 24px;

          line-height: 1;
        }

        .centre-main small {
          display: block;

          margin-top: 10px;

          color: #687C80;

          font-family:
            Arial,
            sans-serif;

          font-size: 7px;

          letter-spacing: 2px;

          text-transform: uppercase;
        }


        /* =====================================================
           FESTIVAL PLANETS
        ===================================================== */

        .planet {
          position: absolute;

          left: 50%;

          top: 50%;

          width: 190px;

          height: 150px;

          margin-left: -95px;

          margin-top: -75px;

          transform:
            rotate(var(--planet-angle))
            translateX(var(--orbit-distance));

          transform-origin:
            95px 75px;

          z-index: 20;

          cursor: pointer;
        }

        .planet-content {
          width: 190px;

          text-align: center;

          animation:
            planetCounterRotate
            150s
            linear
            infinite;
        }

        @keyframes planetCounterRotate {

          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(-360deg);
          }
        }

        .planet:hover .planet-content {
          filter:
            drop-shadow(
              0 8px 14px
              rgba(40,90,95,.18)
            );
        }

        .festival-photo {
          width: 96px;

          height: 96px;

          margin: auto;

          overflow: hidden;

          border-radius: 50%;

          background: white;

          border:
            5px solid white;

          outline:
            3px solid
            var(--festival-colour);

          box-shadow:
            0 9px 25px
            rgba(45,65,70,.20);

          transition:
            transform .3s ease;
        }

        .planet:hover .festival-photo {
          transform:
            scale(1.12);
        }

        .festival-photo img {
          width: 100%;

          height: 100%;

          object-fit: cover;

          display: block;
        }

        .festival-symbol {
          position: absolute;

          top: -5px;

          right: 37px;

          width: 28px;

          height: 28px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            var(--festival-colour);

          color: white;

          font-size: 11px;

          box-shadow:
            0 5px 14px
            rgba(40,60,70,.20);

          z-index: 5;
        }

        .festival-name {
          margin:
            12px 0 4px;

          text-align: center;

          font-family:
            Georgia,
            serif;

          font-size: 17px;

          font-weight: 400;

          color: #29444A;
        }

        .festival-region {
          margin: 0;

          text-align: center;

          color: #648086;

          font-size: 8px;

          letter-spacing: 1px;

          text-transform: uppercase;
        }


        /* =====================================================
           PLANET POSITIONS
        ===================================================== */

        .planet-1 {
          --planet-angle: 0deg;
          --orbit-distance: 350px;
        }

        .planet-2 {
          --planet-angle: 40deg;
          --orbit-distance: 255px;
        }

        .planet-3 {
          --planet-angle: 80deg;
          --orbit-distance: 350px;
        }

        .planet-4 {
          --planet-angle: 120deg;
          --orbit-distance: 255px;
        }

        .planet-5 {
          --planet-angle: 160deg;
          --orbit-distance: 350px;
        }

        .planet-6 {
          --planet-angle: 200deg;
          --orbit-distance: 255px;
        }

        .planet-7 {
          --planet-angle: 240deg;
          --orbit-distance: 350px;
        }

        .planet-8 {
          --planet-angle: 280deg;
          --orbit-distance: 255px;
        }

        .planet-9 {
          --planet-angle: 320deg;
          --orbit-distance: 350px;
        }
        
        .planet-10 {
        --planet-angle: 324deg;
        --orbit-distance: 255px;
        }


        /* =====================================================
           SEASON SECTION
        ===================================================== */

        .season-section {
          max-width: 1320px;

          margin: auto;

          padding:
            105px 55px 125px;

          background:
            linear-gradient(
              125deg,
              #F7DDE5 0%,
              #F4E5EA 48%,
              #DDEAF5 100%
            );
        }

        .season-layout {
          display: grid;

          grid-template-columns:
            .75fr 1.25fr;

          gap: 75px;

          align-items: center;
        }

        .season-title {
          margin: 0;

          font-family:
            Georgia,
            serif;

          font-size: 55px;

          line-height: .95;

          font-weight: 400;

          color: #633F50;
        }

        .season-title span {
          color: #B54872;

          font-style: italic;
        }

        .season-copy {
          max-width: 430px;

          margin-top: 25px;

          color: #725D68;

          font-size: 14px;

          line-height: 1.8;
        }


        /* =====================================================
           SEASON WHEEL
        ===================================================== */

        .season-wheel {
          width: 460px;

          height: 460px;

          margin: auto;

          position: relative;

          border:
            3px solid #D487A0;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,

              #FFFFFF 0%,

              #FFF5F7 55%,

              #F7E5EA 100%
            );

          box-shadow:
            0 15px 40px
            rgba(145,75,100,.13);
        }

        .season-wheel::before {
          content: "";

          position: absolute;

          inset: 55px;

          border:
            1px dashed #D79CAF;

          border-radius: 50%;
        }

        .season-wheel::after {
          content: "";

          position: absolute;

          inset: 112px;

          border:
            1px solid #E7BFCB;

          border-radius: 50%;
        }

        .season-centre {
          position: absolute;

          left: 50%;

          top: 50%;

          transform:
            translate(-50%, -50%);

          width: 112px;

          height: 112px;

          z-index: 3;

          border-radius: 50%;

          background:
            linear-gradient(
              145deg,
              #FFFFFF,
              #FFF0F4
            );

          border:
            2px solid #D487A0;

          display: flex;

          align-items: center;

          justify-content: center;

          text-align: center;

          font-family:
            Georgia,
            serif;

          color: #A64E70;

          font-size: 18px;

          line-height: 1.05;
        }

        .season {
          position: absolute;

          width: 145px;

          z-index: 5;

          text-align: center;

          font-family:
            Georgia,
            serif;

          font-size: 17px;
        }

        .season small {
          display: block;

          margin-top: 5px;

          color: #737489;

          font-family:
            Arial,
            sans-serif;

          font-size: 7px;

          line-height: 1.4;

          letter-spacing: 1px;

          text-transform: uppercase;
        }

        .spring {
          left: 50%;

          top: 8px;

          transform:
            translateX(-50%);

          color: #C14D86;
        }

        .summer {
          right: 5px;

          top: 24%;

          color: #5368C5;
        }

        .monsoon {
          right: 0;

          top: 68%;

          transform:
            translateY(-50%);

          color: #398CB5;
        }

        .autumn {
          left: 50%;

          bottom: 8px;

          transform:
            translateX(-50%);

          color: #B54872;
        }

        .winter {
          left: 5px;

          top: 68%;

          transform:
            translateY(-50%);

          color: #26988D;
        }


        /* =====================================================
           FOOTER
        ===================================================== */

        .footer {
          max-width: 1320px;

          margin: auto;

          padding:
            80px 30px 90px;

          text-align: center;

          background: #FBFAF8;

          border-top:
            1px solid #E0E4E1;
        }

        .footer-symbol {
          color: var(--pink);

          font-size: 21px;

          margin-bottom: 15px;
        }

        .footer-title {
          margin: 0;

          font-family:
            Georgia,
            serif;

          font-size: 29px;

          font-weight: 400;
        }

        .footer-sub {
          margin-top: 10px;

          color: #748087;

          font-size: 8px;

          letter-spacing: 3px;

          text-transform: uppercase;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .intro {
            grid-template-columns: 1fr;

            gap: 25px;
          }

          .season-layout {
            grid-template-columns: 1fr;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .nav {
            padding: 20px;
          }

          .nav-label {
            display: none;
          }

          .hero {
            min-height: 580px;
          }

          .hero-title {
            font-size: 70px;
          }

          .fiesta-word {
            margin-left: 35px;
          }

          .intro,
          .festival-section,
          .season-section {
            padding-left: 22px;

            padding-right: 22px;
          }

          .intro-title {
            font-size: 43px;
          }

          .section-title-row {
            display: block;
          }

          .section-note {
            margin-top: 10px;
          }

          .constellation {
            min-height: 850px;
          }

          .solar-system {
            width: 610px;

            height: 610px;
          }

          .orbit-one {
            width: 550px;

            height: 550px;
          }

          .orbit-two {
            width: 420px;

            height: 420px;
          }

          .orbit-three {
            width: 285px;

            height: 285px;
          }

          .solar-core {
            width: 125px;

            height: 125px;
          }

          .centre {
            width: 115px;

            height: 115px;
          }

          .centre-main {
            font-size: 18px;
          }

          .planet {
            width: 145px;

            height: 125px;

            margin-left: -72px;

            margin-top: -62px;
          }

          .planet-content {
            width: 145px;
          }

          .festival-photo {
            width: 74px;

            height: 74px;
          }

          .festival-name {
            font-size: 13px;
          }

          .festival-region {
            font-size: 7px;
          }

          .festival-symbol {
            width: 23px;

            height: 23px;

            right: 25px;

            font-size: 9px;
          }

          .planet-1,
          .planet-3,
          .planet-5,
          .planet-7,
          .planet-9 {
            --orbit-distance: 270px;
          }

          .planet-2,
          .planet-4,
          .planet-6,
          .planet-8 {
            --orbit-distance: 195px;
          }

          .season-wheel {
            width: 330px;

            height: 330px;
          }

          .season {
            width: 105px;

            font-size: 14px;
          }

          .season small {
            font-size: 6px;
          }
        }


        /* =====================================================
           SMALL PHONES
        ===================================================== */

        @media (max-width: 450px) {

          .hero-title {
            font-size: 58px;

            letter-spacing: -4px;
          }

          .fiesta-word {
            margin-left: 20px;

            margin-top: 18px;
          }

          .constellation {
            min-height: 780px;
          }

          .solar-system {
            width: 540px;

            height: 540px;
          }

          .orbit-one {
            width: 480px;

            height: 480px;
          }

          .orbit-two {
            width: 365px;

            height: 365px;
          }

          .orbit-three {
            width: 250px;

            height: 250px;
          }

          .planet-1,
          .planet-3,
          .planet-5,
          .planet-7,
          .planet-9 {
            --orbit-distance: 235px;
          }

          .planet-2,
          .planet-4,
          .planet-6,
          .planet-8 {
            --orbit-distance: 165px;
          }

          .season-wheel {
            width: 290px;

            height: 290px;
          }

          .season {
            width: 88px;
          }
        }

      `}</style>


      {/* =====================================================
          TOP BORDER
      ===================================================== */}

      <div className="top-border" />


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="nav">

        <div className="brand">
          Timeless <em>India</em>
        </div>

        <div className="nav-label">

          <span>
            Festival Fiesta
          </span>

          <span className="nav-mark" />

          <span>
            15 Celebrations
          </span>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="motif motif-left" />

        <div className="motif motif-right" />

        <span className="floating-symbol symbol-one">
          ✦
        </span>

        <span className="floating-symbol symbol-two">
          ❋
        </span>

        <span className="floating-symbol symbol-three">
          ◇
        </span>

        <span className="floating-symbol symbol-four">
          ✧
        </span>


        <div className="hero-content">

          <div className="hero-small">
            A LIVING COLLECTION OF INDIA
          </div>


          <h1 className="hero-title">

            <span className="title-word festival-word">

              {festivalLetters.map(
                (letter, index) => (

                  <span
                    key={`${letter}-${index}`}
                    className="title-letter"
                    style={{
                      animationDelay:
                        `${index * 0.12}s`,
                    }}
                  >
                    {letter}
                  </span>

                )
              )}

            </span>


            <span className="title-word fiesta-word">

              {fiestaLetters.map(
                (letter, index) => (

                  <span
                    key={`${letter}-${index}`}
                    className="title-letter"
                    style={{
                      animationDelay:
                        `${1.35 + index * 0.13}s`,
                    }}
                  >
                    {letter}
                  </span>

                )
              )}

            </span>

          </h1>


          <p className="hero-description">

            Fifteen celebrations, countless
            traditions and stories woven into
            India's cultural calendar.

          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="intro">

        <div>

          <div className="eyebrow">
            MORE THAN A FESTIVAL
          </div>

          <h2 className="intro-title">

            Every celebration

            <br />

            carries a <span>story.</span>

          </h2>

        </div>


        <p className="intro-text">

          Festivals are where India's many
          cultures meet everyday life —
          through rituals, music, clothing,
          food, craftsmanship, family and
          community.

          <br />
          <br />

          Explore the celebrations not merely
          as dates on a calendar, but as living
          expressions of India's diverse
          cultural traditions.

        </p>

      </section>


      {/* =====================================================
          FESTIVAL CONSTELLATION
      ===================================================== */}

      <section className="festival-section">

        <div className="section-title-row">

          <h2 className="section-title">

            The Festival

            <span>
              Constellation
            </span>

          </h2>

          <div className="section-note">
            Choose a celebration
          </div>

        </div>


        <div className="constellation">


          {/* FIXED CENTRE */}

          <div className="solar-core">

            <div className="centre">

              <div className="centre-main">

                INDIA

                <small>
                  Festivals
                </small>

              </div>

            </div>

          </div>


          {/* ROTATING ORBITS + FESTIVALS */}

          <div className="solar-system">

            <div className="orbit orbit-one" />

            <div className="orbit orbit-two" />

            <div className="orbit orbit-three" />


            {festivals
              .slice(0, 10)
              .map((festival, index) => (

                <div
                  key={festival.id}

                  className={
                    `planet planet-${index + 1}`
                  }

                  style={{
                    "--festival-colour":
                      festival.colour,

                    "--planet-angle":
                      `${index * 36}deg`,
                  } as CSSProperties}

                  onClick={() =>
                    openFestival(festival)
                  }
                >

                  <div className="planet-content">

                    <div className="festival-symbol">
                      {festival.symbol}
                    </div>


                    <div className="festival-photo">

                      <img
                        src={festival.image}
                        alt={festival.name}
                      />

                    </div>


                    <p className="festival-name">
                      {festival.name}
                    </p>


                    <p className="festival-region">
                      {festival.region}
                    </p>

                  </div>

                </div>

              ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SEASON SECTION
      ===================================================== */}

      <section className="season-section">

        <div className="season-layout">


          <div>

            <div className="eyebrow">
              A YEAR OF CELEBRATIONS
            </div>


            <h2 className="season-title">

              Follow the

              <br />

              <span>
                rhythm of India.
              </span>

            </h2>


            <p className="season-copy">

              India's festivals unfold through
              changing seasons, harvests,
              monsoons and regional traditions.
              The calendar becomes a colourful
              rhythm of celebration throughout
              the year.

            </p>

          </div>


          <div className="season-wheel">

            <div className="season-centre">

              THE
              <br />
              YEAR

            </div>


            <div className="season spring">

              Spring

              <small>
                Holi · Bihu · Baisakhi
              </small>

            </div>


            <div className="season summer">

              Summer

              <small>
                Janmashtami · Rath Yatra
              </small>

            </div>


            <div className="season monsoon">

              Monsoon

              <small>
                Onam · Ganesh Chaturthi
              </small>

            </div>


            <div className="season autumn">

              Autumn

              <small>
                Durga Puja · Diwali
              </small>

            </div>


            <div className="season winter">

              Winter

              <small>
                Pongal · Christmas
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-symbol">
          ✦
        </div>

        <h2 className="footer-title">
          Festival Fiesta
        </h2>

        <div className="footer-sub">
          A CULTURAL COLLECTION FROM TIMELESS INDIA
        </div>

      </footer>

    </div>
  );
}