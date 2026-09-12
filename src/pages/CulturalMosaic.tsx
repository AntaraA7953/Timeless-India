import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { FC } from 'react';

// ===== TYPES & INTERFACES =====
interface Ritual {
  icon: string;
  name: string;
  description: string;
}

interface Story {
  state: string;
  title: string;
  image: string;
  description: string;
  significance?: string;
  variation?: string;
  rituals?: Ritual[];
  video?: string;
}

interface Theme {
  id: string;
  number: string;
  icon: string;
  title: string;
  image: string;
  summary: string;
  connection: string;
  description: string;
  accent: string;
  states: Story[];
}

interface CulturalData {
  themes: Theme[];
}

const culturalData: CulturalData = {
  themes: [
    {
      "id": "wedding",
      "number": "01",
      "icon": "✦",
      "title": "Weddings & Union",
      "image": "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1000&q=85",
      "summary": "Ceremonies that bring families and communities together.",
      "connection": "Across regions, wedding traditions turn partnership into a celebration shared by families, friends and community.",
      "description": "From sacred vows to joyful feasts, wedding customs express belonging, partnership and continuity.",
      "accent": "#b94654",
      "states": [
        { "state": "Punjab", "title": "Anand Karaj", "image": "https://img.magnific.com/free-photo/affectionate-indian-couple-celebrating-propose-day-together_23-2151110999.jpg?semt=ais_hybrid&w=740&q=80", "description": "In a Sikh wedding, the couple circles the Guru Granth Sahib four times in the laavaan, each round marking a step in their shared spiritual journey.", "significance": "The ceremony places companionship, equality and faith at the centre of married life.", "variation": "Celebrations are often alive with the folk energy of the sangeet, jaggo and dhol.", "rituals": [{ "icon": "🤝", "name": "Roka", "description": "Both families formally acknowledge and bless the proposed union." }, { "icon": "💍", "name": "Kurmai", "description": "The engagement ceremony marks the families' commitment to the match." }, { "icon": "🌿", "name": "Mehndi & Sangeet", "description": "Henna, songs and dance gather relatives and friends in celebration." }, { "icon": "🌼", "name": "Maiyan", "description": "Family members apply a turmeric-based paste as a festive blessing." }, { "icon": "🏮", "name": "Jaggo", "description": "A lively night of singing and dancing celebrates the coming wedding." }, { "icon": "🔴", "name": "Choora", "description": "The bride is adorned with ceremonial red-and-ivory bangles." }, { "icon": "🤗", "name": "Milni", "description": "Relatives from both sides greet one another before the gurdwara ceremony." }, { "icon": "🪯", "name": "Anand Karaj", "description": "Ardas and four laavaan around the Guru Granth Sahib solemnise the marriage." }, { "icon": "🍲", "name": "Langar", "description": "The congregation shares a community meal after the ceremony." }, { "icon": "🌾", "name": "Doli / Vidaai", "description": "The bride's emotional farewell marks the beginning of a new household." }], "video": "https://www.youtube.com/embed/VIDEO_ID" },
        { "state": "Kerala", "title": "The Thali Ceremony", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJFcNwC78LNqxB5jj8IQNvbfWWWvl25Ectbz-oIGb5s4Eh-IluR4J7P0&s=10", "description": "A Malayali bride and groom exchange vows in a graceful ceremony where the groom ties the sacred thali around the bride's neck.", "significance": "The thali is a visible emblem of the new bond and blessings for a prosperous household.", "variation": "Kasavu sarees, jasmine and the warm glow of nilavilakku lamps frame the occasion.", "rituals": [{ "icon": "🤝", "name": "Nischayam", "description": "The formal engagement brings both families together to confirm the alliance." }, { "icon": "🍬", "name": "Madhuram Veypu", "description": "Families exchange sweets as a gesture of a sweet, harmonious beginning." }, { "icon": "🪔", "name": "Ayana", "description": "Pre-wedding blessings and preparations gather close family around the couple." }, { "icon": "🚪", "name": "Pudhumana Pravesham", "description": "The groom is ceremonially received at the wedding venue." }, { "icon": "🤲", "name": "Veli", "description": "The bride is formally given in marriage in the presence of family and elders." }, { "icon": "🥻", "name": "Pudava Kodukkal", "description": "The groom presents the bride with her wedding saree." }, { "icon": "💛", "name": "Thaali Charthal", "description": "At the auspicious moment, the groom ties the thaali around the bride's neck." }, { "icon": "👣", "name": "Saptapadi", "description": "The couple take seven symbolic steps together to mark their shared path." }, { "icon": "🍃", "name": "Sadhya", "description": "Guests share a celebratory vegetarian feast served on banana leaves." }, { "icon": "🏠", "name": "Grihapravesham", "description": "The bride is welcomed into her new home with blessings for the household." }], "video": "https://www.youtube.com/embed/VIDEO_ID" },
        { "state": "Rajasthan", "title": "Pheras by Sacred Fire", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxIiXY8N52MdPG-VQSvtpVM0Wa5Ks4zqnVh7uuZOJ6Q&s=10", "description": "Amid vivid bandhej textiles and folk music, the couple takes seven circles around agni, promising to share every season of life.", "significance": "The fire witnesses a pledge of partnership, care and mutual responsibility.", "variation": "A sehra, mirror-work finery and festive procession bring a distinctly desert-region grandeur.", "rituals": [{ "icon": "🤝", "name": "Roka / Sagai", "description": "Families formally agree to the match and exchange blessings or gifts." }, { "icon": "🌿", "name": "Mehendi", "description": "Intricate henna designs and music bring the bride's side together in celebration." }, { "icon": "🌼", "name": "Pithi", "description": "A turmeric and sandalwood paste is applied as a joyful pre-wedding blessing." }, { "icon": "🎶", "name": "Ban Banni", "description": "Folk songs and playful gatherings celebrate the bride and groom before the wedding." }, { "icon": "👳", "name": "Sehra Bandi", "description": "The groom's sehra is tied before he leaves with the wedding procession." }, { "icon": "🐎", "name": "Baraat & Toran", "description": "The groom arrives with the baraat and is welcomed at the decorated entrance." }, { "icon": "🌸", "name": "Jaimala", "description": "The couple exchange garlands, publicly accepting one another." }, { "icon": "🤲", "name": "Kanyadaan", "description": "The bride's family ceremonially entrusts her to the new partnership." }, { "icon": "🔥", "name": "Pheras", "description": "The couple circles the sacred fire, making vows for married life." }, { "icon": "🔴", "name": "Sindoor & Mangalsutra", "description": "Marriage symbols mark the couple's new bond." }, { "icon": "🌾", "name": "Vidaai", "description": "The bride departs her family home with blessings and farewells." }], "video": "https://www.youtube.com/embed/VIDEO_ID" },
        { "state": "Bengal", "title": "Shubho Drishti", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZm7AhhOUW_C5eiUQ45PqYFOODqfYvhqG32vC81lBlXE0SVrkIugPrWQ&s=10", "description": "The bride is lifted on a wooden piri and reveals her face to the groom in the memorable first ceremonial glance.", "significance": "This playful moment marks the beginning of seeing one another as lifelong companions.", "variation": "Conch-shell sounds, ululation and the white-and-red palette give the celebration its unmistakable character.", "rituals": [{ "icon": "🍛", "name": "Aiburo Bhaat", "description": "A celebratory final meal is shared at the family home before married life begins." }, { "icon": "🌼", "name": "Gaye Holud", "description": "Turmeric is applied as a radiant, festive blessing for the bride and groom." }, { "icon": "🪔", "name": "Bor Boron", "description": "The groom and his party are ceremonially welcomed at the entrance." }, { "icon": "🔄", "name": "Saat Paak", "description": "The bride is carried around the groom seven times on a wooden piri." }, { "icon": "👀", "name": "Shubho Drishti", "description": "The couple share their auspicious first ceremonial gaze." }, { "icon": "🌸", "name": "Mala Badal", "description": "They exchange flower garlands in a joyful sign of acceptance." }, { "icon": "🌾", "name": "Anjali", "description": "The couple offer puffed rice to the sacred fire together." }, { "icon": "🔴", "name": "Sindoor Daan", "description": "The groom applies vermilion to the bride's hair parting as a marriage symbol." }, { "icon": "🏠", "name": "Bou Boron", "description": "The bride is welcomed into her new home after the ceremony." }, { "icon": "🍚", "name": "Bou Bhaat", "description": "A post-wedding family meal welcomes the bride into her new household." }], "video": "https://www.youtube.com/embed/VIDEO_ID" }
      ]
    },
    {
      "id": "art",
      "number": "02",
      "icon": "✺",
      "title": "Floor & Wall Art",
      "image": "https://m.media-amazon.com/images/I/71djN4OkmdL._AC_UF894,1000_QL80_.jpg",
      "summary": "Thresholds become canvases for welcome and blessing.",
      "connection": "Though materials and patterns vary, these temporary artworks transform an everyday threshold into a moment of welcome, care and renewal.",
      "description": "Across the country, hands turn everyday surfaces into temporary art—each pattern carrying welcome, beauty and prayer.",
      "accent": "#d27822",
      "states": [
        { "state": "Tamil Nadu", "title": "Kolam", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZaB0JPWu9szKmN90opcWtgDIdQPSB2WbVKfGtocK1tjJx5WMA6ijfWV7a&s=10", "description": "At dawn, delicate loops of rice flour are drawn at doorsteps, flowing around a grid of dots with effortless precision.", "significance": "Kolam welcomes abundance while the rice flour is also an offering to small creatures.", "variation": "Geometric pulli kolams and free-flowing sikku patterns reveal an extraordinary mathematical vocabulary.", "video": "https://www.youtube.com/embed/madrsV5BzE0" },
        { "state": "West Bengal", "title": "Alpana", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9vuEDkD1Vq-UkC_Z5exVyCS0RbXiAdmicxn5xNYufrE4eYRx-EEAoefy&s=10", "description": "Rice paste is shaped into gracious white motifs—lotus, fish, feet and vines—on festival floors and courtyards.", "significance": "The designs invoke welcome and invoke the presence of the divine during household celebrations.", "variation": "Alpana shifts with occasions, from Lakshmi Puja motifs to the intimate rituals of a wedding." },
        { "state": "Rajasthan", "title": "Mandana", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jDUg1Hr8ph93kpqVfOzupbPp0NQYe47uRySSku2ulg&s=10", "description": "White chalk and red ochre turn earthen walls and courtyards into bold, balanced paintings of peacocks, flowers and geometry.", "significance": "Mandana beautifies the home and is traditionally believed to invite good fortune.", "variation": "Its visual language is deeply shaped by the textures and colours of the Hadoti region." },
        { "state": "Uttarakhand", "title": "Aipan", "image": "https://uttarakhandhaat.com/wp-content/uploads/2023/01/IMG20230119104058.jpg", "description": "On a red geru base, a white rice-paste brush builds intricate sacred diagrams for family rituals and festivals.", "significance": "Aipan marks auspicious thresholds and turns everyday spaces into ceremonial ones.", "variation": "Chowki designs often vary by life event, season and the deity being honoured." }
      ]
    },
    {
      "id": "birth",
      "number": "03",
      "icon": "☾",
      "title": "Birth & Naming",
      "image": "https://www.shutterstock.com/image-photo/newborn-baby-hand-identification-bracelet-260nw-2630500657.jpg",
      "summary": "Tender rituals welcoming a child into community.",
      "connection": "These early-life ceremonies give a child more than a name or a first taste: they introduce them to language, kinship and a shared sense of belonging.",
      "description": "A new name, a first blessing, a circle of relatives: these intimate ceremonies connect a child to family and memory.",
      "accent": "#657c52",
      "states": [
        { "state": "Maharashtra", "title": "Barse", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupIX2g-ILpcs0930Pz6_oSt5SnaBz7yiqurjceqaEBg&s=10", "description": "On the twelfth day, family gathers as a baby is lovingly named and introduced to the wider circle of kin.", "significance": "The ceremony celebrates identity, belonging and the blessings surrounding a new beginning.", "variation": "The name may be softly spoken into the child's ear before it is joyfully shared." },
        { "state": "Kerala", "title": "Choroonu", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYo4wDSL8OUb9dk4MdXIW1yWSQ6pzyLenAb6ZyyHiNgg&s=10", "description": "A child's first taste of solid food is ceremonially offered, traditionally in the warmth of a family gathering or temple setting.", "significance": "This first feeding honours growth and the journey into a new stage of life.", "variation": "Rice is often the symbolic first food, presented with blessings for health and abundance." },
        { "state": "Karnataka", "title": "Namakarana", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDfLiGGh6quGBFwp_0tXXkjk60Fy4OOFd2J3v-WtBK7bNc5HYBNS8gfA&s=10", "description": "The naming rite welcomes a child with prayers, music and the warmth of extended family.", "significance": "A name is seen as both a gift and a link to lineage, language and aspiration.", "variation": "Astrological considerations may guide the first syllable chosen for the child." }
      ]
    },
    {
      "id": "auspicious",
      "number": "04",
      "icon": "🧿",
      "title": "Auspicious & Protective",
      "image": "https://luuckk.com/cdn/shop/articles/signification-mauvais-oeil_92ee69bd-2891-4476-83a4-1d92c443ba53.webp?crop=center&height=1200&v=1757246871&width=1200",
      "summary": "Everyday symbols of protection, prosperity and hope.",
      "connection": "Protective and auspicious customs turn ordinary objects, colours and gestures into small reminders of care, courage and hope for the future.",
      "description": "Across homes, fields and celebrations, small gestures carry big wishes—for safety, good fortune and a flourishing life.",
      "accent": "#4b7098",
      "states": [
        { "state": "Gujarat", "title": "Toran at the Threshold", "image": "https://m.media-amazon.com/images/I/71w862ssY+L._AC_UF894,1000_QL80_.jpg", "description": "A hanging of mango leaves, marigolds or fabric ornaments brightens the doorway for festivals and family milestones.", "significance": "The toran is a visible greeting to joy, guests and auspicious energy entering the home.", "variation": "Beadwork, mirror work and embroidered torans carry the artisan vocabulary of the region." },
        { "state": "Maharashtra", "title": "Gudi Padwa", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdTly6FWcJ0pU1wgYglREfOUnEKkdH5OFxgEnGYHUIKQxVV9lH59z1Wm7&s=10", "description": "A silk-clad bamboo staff topped with a bright vessel is raised outside homes to welcome the new year.", "significance": "The gudi represents victory, renewal and a hopeful beginning.", "variation": "Neem leaves, mango leaves and a garland of sugar crystals give every gudi its festive texture." },
        { "state": "Bihar", "title": "Kajal & Nazar", "image": "https://www.parentune.com/_next/image?url=https%3A%2F%2Fimg1.parentune.com%2Fimages%2Fblogs%2FIs-it-safe-to-apply-kajal-to-babys-eyes-thumbnail-1504868552.jpg&w=1920&q=75", "description": "A small black mark may be placed on a child or cherished possession as a folk gesture of protection from the evil eye.", "significance": "It expresses a universal human wish to guard what is precious.", "variation": "Practices differ from household to household, carried forward through affectionate family memory." },
        { "state": "Tamil Nadu", "title": "Drishti Bommai", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87c0cDhaItYZE1LkWApUxZs35xplN-fC-lGAltilbNXD-rF3ivjBDz3E&s=10", "description": "Colourful protective figures, sometimes displayed on buildings and vehicles, are part of a visual language of warding off envy.", "significance": "These striking symbols reflect the desire to keep new ventures and homes safe.", "variation": "Their forms range from painted eyes to vividly sculpted guardian faces." }
      ]
    }
  ]
};

// ===== STYLES (CSS-in-JS) =====
const styles = {
  root: {
    '--ink': '#4a2a21',
    '--cream': '#f8f1e6',
    '--paper': '#fffaf1',
    '--terracotta': '#b94654',
    '--gold': '#d27822',
    '--sage': '#657c52',
    '--line': 'rgba(55,35,24,.14)',
  } as React.CSSProperties,

  grain: {
    position: 'fixed' as const,
    inset: 0,
    pointerEvents: 'none' as const,
    zIndex: 5,
    opacity: 0.15,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 180 180\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.24\'/%3E%3C/svg%3E")',
  },

  floatingIcons: {
    position: 'fixed' as const,
    inset: 0,
    overflow: 'hidden' as const,
    pointerEvents: 'none' as const,
    zIndex: 0,
  },

  floatingIcon: {
    position: 'absolute' as const,
    color: 'var(--terracotta)',
    opacity: 0.17,
    fontSize: 'clamp(1.4rem, 3vw, 2.8rem)',
    animation: 'drift 10s ease-in-out infinite',
  },

  header: {
    height: '76px',
    maxWidth: '1280px',
    margin: 'auto',
    padding: '0 5%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    position: 'relative' as const,
    zIndex: 1,
    animation: 'header-arrive .8s ease both',
  },

  brand: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.2rem',
    fontWeight: 700,
    color: 'var(--ink)',
    textDecoration: 'none',
    animation: 'brand-glow 4s ease-in-out 1s infinite',
  },

  brandSpan: {
    color: 'var(--terracotta)',
    marginRight: '6px',
  },

  nav: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'center',
  },

  navLink: {
    color: 'var(--ink)',
    fontSize: '.88rem',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: '"DM Sans", sans-serif',
    position: 'relative' as const,
    transition: 'color .25s, transform .25s',
  },

  hero: {
    minHeight: '610px',
    maxWidth: '1280px',
    margin: 'auto',
    padding: '75px 5% 55px',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    textAlign: 'center' as const,
    background: 'radial-gradient(circle at 78% 32%, rgba(210,120,34,.2), transparent 22%), radial-gradient(circle at 68% 75%, rgba(185,70,84,.15), transparent 20%)',
  },

  heroAfter: {
    content: '""',
    position: 'absolute' as const,
    right: '8%',
    top: '90px',
    width: '310px',
    height: '310px',
    border: '1px solid rgba(185,70,84,.35)',
    borderRadius: '48% 52% 43% 57% / 58% 42% 58% 42%',
    transform: 'rotate(25deg)',
    boxShadow: 'inset 0 0 0 28px rgba(255,250,241,.3)',
  },

  eyebrow: {
    textTransform: 'uppercase' as const,
    letterSpacing: '.16em',
    fontSize: '.69rem',
    fontWeight: 700,
    color: 'var(--terracotta)',
    margin: '0 0 14px',
  },

  heroH1: {
    font: '600 clamp(2.5rem, 5.9vw, 5.4rem)/.98 "Playfair Display", serif',
    letterSpacing: '-.045em',
    margin: 0,
    position: 'relative' as const,
    zIndex: 1,
  },

  heroH1Em: {
    fontWeight: 500,
    color: 'var(--terracotta)',
    fontStyle: 'normal',
  },

  heroCopy: {
    maxWidth: '485px',
    fontSize: '1.08rem',
    margin: '24px auto 28px',
    position: 'relative' as const,
    zIndex: 1,
  },

  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '22px',
    padding: '8px 13px',
    border: '1px solid rgba(185, 70, 84, .22)',
    borderRadius: '99px',
    background: 'rgba(255, 255, 255, .58)',
    color: '#7a4b35',
    fontSize: '.7rem',
    fontWeight: 700,
    letterSpacing: '.08em',
    textTransform: 'uppercase' as const,
    boxShadow: '0 8px 20px rgba(125, 42, 40, .08)',
    animation: 'badge-arrive .8s .15s ease both',
  },

  heroBadgeDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: 'var(--gold)',
    boxShadow: '0 0 0 5px rgba(210, 120, 34, .14)',
  },

  discoveryRibbon: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '25px',
    padding: '10px 15px',
    borderRadius: '8px 20px 8px 20px',
    background: 'rgba(255, 255, 255, .55)',
    border: '1px solid rgba(101, 124, 82, .22)',
    color: '#5d5148',
    fontSize: '.78rem',
    boxShadow: '0 10px 24px rgba(125, 42, 40, .07)',
    animation: 'ribbon-arrive .8s .7s ease both',
  },

  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '18px',
    padding: '14px 20px',
    color: 'white',
    background: '#d27822',
    textDecoration: 'none',
    borderRadius: '99px',
    fontWeight: 700,
    position: 'relative' as const,
    zIndex: 1,
    boxShadow: '0 9px 20px rgba(125,42,40,.2)',
    transition: 'transform .25s, box-shadow .25s',
    cursor: 'pointer',
    border: 'none',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '1rem',
  },

  buttonSpan: {
    fontSize: '1.2em',
  },

  heroStats: {
    display: 'flex',
    gap: '30px',
    position: 'absolute' as const,
    zIndex: 1,
    bottom: '54px',
    left: 0,
    right: 0,
    justifyContent: 'center',
    fontSize: '.75rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '.06em',
  },

  heroStatsB: {
    font: '600 1.45rem "Playfair Display", serif',
    color: 'var(--terracotta)',
    display: 'block',
    letterSpacing: 0,
  },

  motif: {
    position: 'absolute' as const,
    color: 'var(--gold)',
    opacity: 0.75,
    fontSize: '3.7rem',
    animation: 'float 6s ease-in-out infinite',
  },

  intro: {
    background: 'var(--ink)',
    color: '#f6eee2',
    padding: '92px max(5%, calc((100% - 940px)/2))',
    textAlign: 'center' as const,
  },

  introEyebrow: {
    color: '#e9b65a',
  },

  introH2: {
    fontSize: 'clamp(2rem, 4.1vw, 3.5rem)',
    font: '600 clamp(2rem,4.1vw,3.5rem)/.98 "Playfair Display", serif',
    letterSpacing: '-.045em',
    margin: 0,
  },

  introP: {
    maxWidth: '600px',
    margin: '26px auto 0',
    color: '#d7cbbc',
  },

  themesSection: {
    maxWidth: '1280px',
    margin: 'auto',
    padding: '105px 5%',
    minHeight: 'calc(100vh - 140px)',
    background: 'linear-gradient(135deg, rgba(255, 250, 241, .45), rgba(255, 224, 183, .42))',
    borderRadius: '40px 40px 0 0',
  },

  sectionHeading: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '34px',
  },

  sectionHeadingH2: {
    fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
    font: '600 clamp(2.2rem,4vw,3.6rem)/.98 "Playfair Display", serif',
    letterSpacing: '-.045em',
    margin: 0,
  },

  sectionHeadingP: {
    maxWidth: '310px',
    margin: 0,
    color: '#655d56',
  },

  themeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '22px',
    alignItems: 'start',
    padding: '8px 0 40px',
  },

  themeCard: {
    height: '430px',
    minWidth: 0,
    border: 0,
    background: 'transparent',
    boxShadow: 'none',
    overflow: 'visible' as const,
    position: 'relative' as const,
  },

  themeFace: {
    position: 'relative' as const,
    inset: 0,
    overflow: 'hidden' as const,
    border: '1px solid var(--line)',
    borderRadius: '5px',
    background: 'linear-gradient(150deg, #fffdf8, #fff4e2)',
    boxShadow: '0 8px 20px rgba(66, 40, 20, .07)',
  },

  themeFront: {
    cursor: 'pointer',
  },

  cardArt: {
    height: '206px',
    background: '#9c443c',
    position: 'relative' as const,
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden' as const,
  },

  themePicture: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    position: 'absolute' as const,
    inset: 0,
    filter: 'saturate(1.12) contrast(1.04)',
    transition: 'transform .7s cubic-bezier(.2, .8, .2, 1), filter .4s',
  },

  themeIcon: {
    fontSize: '3.3rem',
    color: 'white',
    position: 'relative' as const,
    zIndex: 2,
    filter: 'drop-shadow(0 4px 0 rgba(0,0,0,.08))',
    transition: 'transform .35s',
  },

  cardSparkle: {
    position: 'absolute' as const,
    right: '17px',
    top: '14px',
    color: 'white',
    fontSize: '1.3rem',
    zIndex: 3,
    animation: 'sparkle 2.5s ease-in-out infinite',
  },

  cardSun: {
    width: '17px',
    height: '17px',
    borderRadius: '50%',
    background: '#f8d572',
    position: 'absolute' as const,
    zIndex: 3,
    right: '20px',
    bottom: '20px',
    boxShadow: '0 0 0 7px rgba(248, 213, 114, .25)',
    animation: 'pulse 2.4s ease-out infinite',
  },

  themeCardContent: {
    padding: '22px',
    textAlign: 'center' as const,
  },

  themeNumber: {
    color: 'var(--accent)',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '.13em',
    fontSize: '.65rem',
    margin: '0 0 6px',
  },

  themeCardH3: {
    font: '600 1.45rem/1.1 "Playfair Display", serif',
    margin: 0,
  },

  themeSummary: {
    fontSize: '.86rem',
    color: '#6b625c',
    margin: '12px 0 21px',
    minHeight: '48px',
  },

  exploreButton: {
    border: 0,
    background: 'color-mix(in srgb, var(--accent) 12%, white)',
    padding: '9px 14px',
    borderRadius: '99px',
    color: 'var(--accent)',
    font: '700 .84rem "DM Sans", sans-serif',
    cursor: 'pointer',
    display: 'flex',
    margin: '0 auto',
    gap: '8px',
    alignItems: 'center',
    transition: 'background .25s, color .25s, transform .25s',
  },

  mosaicSection: {
    maxWidth: '1280px',
    margin: 'auto',
    padding: '35px 5% 105px',
    borderTop: '1px solid var(--line)',
  },

  backLink: {
    background: 'none',
    border: 0,
    padding: 0,
    color: 'var(--terracotta)',
    font: '700 .85rem "DM Sans", sans-serif',
    cursor: 'pointer',
    marginBottom: '35px',
  },

  mosaicHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    gap: '30px',
    marginBottom: '34px',
  },

  mosaicHeadingH2: {
    fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
    font: '600 clamp(2.2rem,4vw,3.6rem)/.98 "Playfair Display", serif',
    letterSpacing: '-.045em',
    margin: 0,
  },

  mosaicHeadingP: {
    maxWidth: '310px',
    margin: 0,
    color: '#655d56',
  },

  mosaicGrid: {
    display: 'grid',
    gridTemplateColumns: '1.08fr .9fr 1.02fr',
    gridTemplateRows: '240px 240px',
    gap: '17px',
    padding: '10px 0 28px',
    position: 'relative' as const,
  },

  stateTile: {
    border: 0,
    padding: 0,
    overflow: 'hidden' as const,
    position: 'relative' as const,
    minHeight: 0,
    textAlign: 'left' as const,
    cursor: 'pointer',
    background: '#c9b296',
    borderRadius: '34px 12px 34px 12px',
    isolation: 'isolate',
    transform: 'none',
    clipPath: 'none',
    transition: 'filter .35s, transform .35s',
    width: '100%',
    height: '100%',
  },

  stateTileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
    transition: 'transform .65s',
    clipPath: 'none',
  },

  tileOverlay: {
    position: 'absolute' as const,
    inset: 0,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'end' as const,
    color: 'white',
    background: 'linear-gradient(0deg, rgba(21,15,12,.75), transparent 65%)',
    transition: 'background .3s',
    clipPath: 'none',
  },

  stateName: {
    fontSize: '.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '.15em',
    fontWeight: 700,
    margin: 0,
    color: '#f7d685',
  },

  tileOverlayH3: {
    font: '600 1.7rem/1.08 "Playfair Display", serif',
    margin: '3px 0',
  },

  tileOverlaySpan: {
    fontSize: '.76rem',
    opacity: 0,
    transform: 'translateY(6px)',
    transition: '0.3s',
  },

  storyDialog: {
    width: 'min(940px, 94vw)',
    border: 0,
    padding: 0,
    background: '#fff',
    color: 'var(--ink)',
    boxShadow: '0 24px 80px rgba(0,0,0,.34)',
    borderRadius: '8px',
    maxHeight: '90vh',
    overflowY: 'auto' as const,
  },

  dialogClose: {
    position: 'absolute' as const,
    zIndex: 2,
    right: '13px',
    top: '10px',
    border: 0,
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    fontSize: '1.8rem',
    lineHeight: 1,
    background: '#fff',
    color: 'var(--ink)',
    cursor: 'pointer',
  },

  storyImage: {
    height: '280px',
    position: 'relative' as const,
  },

  storyImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },

  storyImageSpan: {
    position: 'absolute' as const,
    zIndex: 1,
    bottom: '-25px',
    left: '35px',
    width: '58px',
    height: '58px',
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    color: '#fff',
    fontSize: '1.7rem',
  },

  storyText: {
    padding: '43px 36px 35px',
    background: '#fff',
  },

  storyTextH2: {
    fontSize: 'clamp(2.25rem, 4vw, 3.6rem)',
    font: '600 clamp(2.25rem,4vw,3.6rem)/.98 "Playfair Display", serif',
    letterSpacing: '-.045em',
    margin: '0 0 19px',
  },

  storyDescription: {
    fontSize: '1.05rem',
    maxWidth: '680px',
    marginBottom: '25px',
  },

  storySwitcher: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    margin: '28px 0 12px',
  },

  storyTab: {
    border: '1px solid var(--line)',
    borderRadius: '12px',
    background: '#fffaf1',
    padding: '12px 10px',
    color: '#5d5148',
    font: '700 .76rem "DM Sans", sans-serif',
    cursor: 'pointer',
    transition: 'transform .25s, background .25s, color .25s, border-color .25s',
  },

  storyPanel: {
    minHeight: '145px',
    display: 'grid',
    gridTemplateColumns: '50px 1fr',
    gap: '18px',
    padding: '25px',
    background: '#fff',
    borderRadius: '3px',
    borderLeft: '4px solid var(--terracotta)',
    animation: 'panel-in .35s ease both',
  },

  panelIcon: {
    display: 'grid',
    placeItems: 'center',
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    background: 'var(--terracotta)',
    color: '#fff',
    fontSize: '1.3rem',
  },

  ritualJourney: {
    marginTop: '25px',
    padding: '25px',
    background: '#fff',
    border: '1px solid rgba(149, 84, 46, .2)',
    borderRadius: '4px',
  },

  ritualJourneyHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '17px',
  },

  ritualSteps: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
  },

  ritualStep: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 10px',
    border: '1px solid rgba(110, 63, 38, .18)',
    borderRadius: '99px',
    color: '#5f4637',
    background: 'rgba(255, 252, 244, .72)',
    font: '700 .72rem "DM Sans", sans-serif',
    cursor: 'pointer',
    transition: 'transform .22s, background .22s, color .22s, box-shadow .22s',
  },

  ritualCount: {
    color: '#a9825e',
    fontSize: '.6rem',
    letterSpacing: '.05em',
  },

  ritualIcon: {
    fontSize: '1rem',
  },

  ritualDetail: {
    display: 'grid',
    gridTemplateColumns: '52px 1fr',
    gap: '14px',
    minHeight: '87px',
    marginTop: '17px',
    padding: '17px',
    background: '#fff',
    borderTop: '1px solid rgba(110, 63, 38, .14)',
    animation: 'ritual-detail-in .3s ease both',
  },

  videoWrap: {
    position: 'relative' as const,
    paddingTop: '56.25%',
    marginTop: '22px',
  },

  videoWrapIframe: {
    position: 'absolute' as const,
    inset: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },

  videoLaunch: {
    marginTop: '22px',
    padding: '20px',
    display: 'flex',
    gap: '18px',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(120deg, #542c2e, #9d454c)',
    color: '#fff7eb',
    borderRadius: '3px',
    overflow: 'hidden' as const,
    position: 'relative' as const,
  },

  videoButton: {
    position: 'relative' as const,
    zIndex: 1,
    border: 0,
    borderRadius: '99px',
    padding: '12px 17px',
    whiteSpace: 'nowrap' as const,
    color: 'var(--ink)',
    background: '#f7d685',
    font: '700 .77rem "DM Sans", sans-serif',
    cursor: 'pointer',
    transition: 'transform .25s, background .25s',
  },

  footer: {
    padding: '32px 5%',
    textAlign: 'center' as const,
    font: '500 .82rem "DM Sans", sans-serif',
    color: '#74685d',
    borderTop: '1px solid var(--line)',
    position: 'relative' as const,
    zIndex: 1,
  },

  footerSpan: {
    color: 'var(--terracotta)',
    marginRight: '5px',
  },

  reveal: {
    opacity: 0,
    transform: 'translateY(18px)',
  },

  isVisible: {
    animation: 'reveal .55s ease forwards',
  },

  hidden: {
    display: 'none',
  },
};

// ===== COMPONENT =====
const App: FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'themes' | 'mosaic'>('home');
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [, setIsDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Letter reveal animation on mount
  useEffect(() => {
    document.querySelectorAll('[data-letter-reveal]').forEach((element, elementIndex) => {
      const text = element.textContent || '';
      element.setAttribute('aria-label', text);
      element.textContent = '';
      [...text].forEach((character, index) => {
        const letter = document.createElement('span');
        letter.className = 'hero-letter';
        letter.innerHTML = character === ' ' ? '&nbsp;' : character;
        letter.style.animationDelay = `${(elementIndex * 230) + (index * 90)}ms`;
        element.append(letter);
      });
    });
  }, []);

  const showThemes = useCallback(() => {
    setCurrentScreen('themes');
    setSelectedTheme(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const showHome = useCallback(() => {
    setCurrentScreen('home');
    setSelectedTheme(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const showMosaic = useCallback((theme: Theme) => {
    setSelectedTheme(theme);
    setCurrentScreen('mosaic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const showStory = useCallback((story: Story) => {
    setSelectedStory(story);
    setIsDialogOpen(true);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
    setSelectedStory(null);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, []);

  const toEmbedUrl = useCallback((videoUrl?: string) => {
    if (!videoUrl) return '';
    try {
      const url = new URL(videoUrl);
      if (url.hostname.includes('youtu.be')) return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
      if (url.pathname.includes('/embed/')) return videoUrl;
      const videoId = url.searchParams.get('v');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
    } catch {
      return videoUrl;
    }
  }, []);

  const renderThemeCard = useCallback((theme: Theme) => {
    return (
      <article key={theme.id} style={{ ...styles.themeCard, '--accent': theme.accent } as React.CSSProperties}>
        <div style={{ ...styles.themeFace, ...styles.themeFront }} onClick={() => showMosaic(theme)}>
          <div style={styles.cardArt}>
            <img src={theme.image} alt={`${theme.title} visual`} style={styles.themePicture} />
            <span style={styles.themeIcon}>{theme.icon}</span>
            <span style={styles.cardSparkle}>✦</span>
            <span style={styles.cardSun}></span>
          </div>
          <div style={styles.themeCardContent}>
            <p style={{ ...styles.themeNumber, color: theme.accent }}>Theme {theme.number}</p>
            <h3 style={styles.themeCardH3}>{theme.title}</h3>
            <p style={styles.themeSummary}>{theme.summary}</p>
            <button style={{ ...styles.exploreButton, color: theme.accent, background: `color-mix(in srgb, ${theme.accent} 12%, white)` }}>
              Enter the mosaic <span>→</span>
            </button>
          </div>
        </div>
      </article>
    );
  }, [showMosaic]);

  const renderMosaic = useCallback(() => {
    if (!selectedTheme) return null;

    return (
      <>
        <button style={styles.backLink} onClick={showThemes}>← All cultural themes</button>
        <div style={styles.mosaicHeading}>
          <div>
            <p style={{ ...styles.eyebrow, color: selectedTheme.accent }}>Theme {selectedTheme.number} · Regional expressions</p>
            <h2 style={styles.mosaicHeadingH2}>{selectedTheme.title}</h2>
          </div>
          <p style={styles.mosaicHeadingP}>{selectedTheme.description}</p>
        </div>
        <div style={styles.mosaicGrid}>
          {selectedTheme.states.map((story, idx) => (
            <button key={idx} style={{ ...styles.stateTile, '--accent': selectedTheme.accent } as React.CSSProperties} onClick={() => showStory(story)}>
              <img src={story.image} alt={`${story.title} from ${story.state}`} style={styles.stateTileImg} />
              <div style={styles.tileOverlay}>
                <p style={styles.stateName}>{story.state}</p>
                <h3 style={styles.tileOverlayH3}>{story.title}</h3>
                <span style={styles.tileOverlaySpan}>Open story ↗</span>
              </div>
            </button>
          ))}
        </div>
      </>
    );
  }, [selectedTheme, showThemes, showStory]);

  const renderStoryDialog = useCallback(() => {
    if (!selectedStory || !selectedTheme) return null;

    const story = selectedStory;
    const theme = selectedTheme;
    const video = story.video ? (
      <>
        <section style={styles.videoLaunch}>
          <div>
            <p style={{ ...styles.eyebrow, color: '#f6cf78' }}>Visual ritual</p>
            <h3 style={{ font: '600 1.3rem/1.1 "Playfair Display", serif', margin: 0 }}>See the tradition unfold</h3>
            <p style={{ fontSize: '.82rem', opacity: .86, margin: '5px 0 0' }}>Watch without leaving the Cultural Mosaic.</p>
          </div>
          <button style={styles.videoButton} onClick={() => {
            const videoSlot = document.getElementById('videoSlot');
            if (videoSlot && story.video) {
              videoSlot.innerHTML = `<div style="position:relative;padding-top:56.25%;margin-top:22px;"><iframe src="${toEmbedUrl(story.video)}" title="${story.title} video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe></div>`;
              const launch = document.querySelector('.video-launch');
              if (launch) launch.classList.add('is-playing');
            }
          }}>
            <span>▶</span> Watch the video
          </button>
        </section>
        <div id="videoSlot"></div>
      </>
    ) : '';

    const ritualJourney = story.rituals ? (
      <section style={styles.ritualJourney}>
        <div style={styles.ritualJourneyHeading}>
          <div>
            <p style={{ ...styles.eyebrow, color: theme.accent }}>Every step, in sequence</p>
            <h3 style={{ font: '600 1.45rem/1.1 "Playfair Display", serif', margin: 0 }}>{story.state} wedding journey</h3>
          </div>
          <span style={{ display: 'inline-flex', padding: '6px 9px', borderRadius: '99px', background: '#fffaf1', color: 'var(--terracotta)', fontSize: '.68rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>
            {story.rituals.length} rituals
          </span>
        </div>
        <div style={styles.ritualSteps}>
          {story.rituals.map((ritual, idx) => (
            <button key={idx} style={styles.ritualStep} onClick={() => {
              const detail = document.getElementById('ritualDetail');
              if (detail) {
                detail.innerHTML = `<span style="display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:#f7d685;font-size:1.45rem;">${ritual.icon}</span><div><p style="${styles.eyebrow}">Step ${String(idx + 1).padStart(2, '0')} · ${story.state}</p><h4 style="font:600 1.18rem/1.1 'Playfair Display',serif;margin:0 0 5px;">${ritual.name}</h4><p style="margin:0;color:#695c52;font-size:.91rem;">${ritual.description}</p></div>`;
              }
            }}>
              <span style={styles.ritualCount}>{String(idx + 1).padStart(2, '0')}</span>
              <span style={styles.ritualIcon}>{ritual.icon}</span>
              <span>{ritual.name}</span>
            </button>
          ))}
        </div>
        <div id="ritualDetail" style={styles.ritualDetail}>
          {story.rituals && story.rituals[0] && (
            <>
              <span style={{ display: 'grid', placeItems: 'center', width: '46px', height: '46px', borderRadius: '50%', background: '#f7d685', fontSize: '1.45rem' }}>{story.rituals[0].icon}</span>
              <div>
                <p style={{ ...styles.eyebrow, marginBottom: '4px' }}>Step 01 · {story.state}</p>
                <h4 style={{ font: '600 1.18rem/1.1 "Playfair Display", serif', margin: '0 0 5px' }}>{story.rituals[0].name}</h4>
                <p style={{ margin: 0, color: '#695c52', fontSize: '.91rem' }}>{story.rituals[0].description}</p>
              </div>
            </>
          )}
        </div>
      </section>
    ) : '';

    return (
      <dialog ref={dialogRef} style={styles.storyDialog} onClick={(e) => { if (e.target === dialogRef.current) closeDialog(); }}>
        <button style={styles.dialogClose} onClick={closeDialog}>×</button>
        <div>
          <div style={styles.storyImage}>
            <img src={story.image} alt={`${story.title} from ${story.state}`} style={styles.storyImageImg} />
            <span style={{ ...styles.storyImageSpan, background: theme.accent }}>{theme.icon}</span>
          </div>
          <article style={styles.storyText}>
            <p style={{ ...styles.eyebrow, color: theme.accent }}>{story.state} · {theme.title}</p>
            <h2 style={styles.storyTextH2}>{story.title}</h2>
            <p style={styles.storyDescription}>{story.description}</p>
            <div style={styles.storySwitcher} role="tablist">
              <button style={styles.storyTab} onClick={() => {
                const panel = document.getElementById('storyPanel');
                if (panel) {
                  panel.innerHTML = `
                    <span style="display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:var(--terracotta);color:#fff;font-size:1.3rem;">✦</span>
                    <div><p style="${styles.eyebrow}">The ritual</p><h3 style="font:600 1.35rem/1.1 'Playfair Display',serif;margin:0 0 8px;">${story.title}</h3><p style="margin:0;color:#655d56;">${story.description}</p><p style="margin-top:13px;padding-top:13px;border-top:1px solid rgba(104,78,54,.17);color:#7a4b35;font-size:.91rem;font-weight:500;">Every gesture, object and gathering in this moment helps carry the tradition from one generation to the next.</p></div>
                  `;
                }
              }}>✦ The ritual</button>
              <button style={styles.storyTab} onClick={() => {
                const panel = document.getElementById('storyPanel');
                if (panel) {
                  panel.innerHTML = `
                    <span style="display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:var(--terracotta);color:#fff;font-size:1.3rem;">✺</span>
                    <div><p style="${styles.eyebrow}">Why it matters</p><h3 style="font:600 1.35rem/1.1 'Playfair Display',serif;margin:0 0 8px;">A shared meaning</h3><p style="margin:0;color:#655d56;">${story.significance || ''}</p><p style="margin-top:13px;padding-top:13px;border-top:1px solid rgba(104,78,54,.17);color:#7a4b35;font-size:.91rem;font-weight:500;">${theme.connection}</p></div>
                  `;
                }
              }}>✺ Why it matters</button>
              <button style={styles.storyTab} onClick={() => {
                const panel = document.getElementById('storyPanel');
                if (panel) {
                  panel.innerHTML = `
                    <span style="display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:var(--terracotta);color:#fff;font-size:1.3rem;">❋</span>
                    <div><p style="${styles.eyebrow}">Regional note</p><h3 style="font:600 1.35rem/1.1 'Playfair Display',serif;margin:0 0 8px;">A ${story.state} expression</h3><p style="margin:0;color:#655d56;">${story.variation || ''}</p><p style="margin-top:13px;padding-top:13px;border-top:1px solid rgba(104,78,54,.17);color:#7a4b35;font-size:.91rem;font-weight:500;">This local expression reveals how a shared cultural idea adapts to place, language, materials and family memory.</p></div>
                  `;
                }
              }}>❋ Regional note</button>
            </div>
            <div id="storyPanel" style={styles.storyPanel}>
              <span style={styles.panelIcon}>✦</span>
              <div>
                <p style={styles.eyebrow}>The ritual</p>
                <h3 style={{ font: '600 1.35rem/1.1 "Playfair Display", serif', margin: '0 0 8px' }}>{story.title}</h3>
                <p style={{ margin: 0, color: '#655d56' }}>{story.description}</p>
                <p style={{ marginTop: '13px', paddingTop: '13px', borderTop: '1px solid rgba(104,78,54,.17)', color: '#7a4b35', fontSize: '.91rem', fontWeight: 500 }}>Every gesture, object and gathering in this moment helps carry the tradition from one generation to the next.</p>
              </div>
            </div>
            {ritualJourney}
            {video}
          </article>
        </div>
      </dialog>
    );
  }, [selectedStory, selectedTheme, closeDialog, toEmbedUrl]);

  return (
    <div style={{ background: 'radial-gradient(circle at 50% 43%, rgba(255, 255, 255, .72), transparent 42%), radial-gradient(circle at 10% 8%, rgba(255, 244, 170, .86), transparent 30%), radial-gradient(circle at 92% 12%, rgba(255, 190, 126, .72), transparent 32%), radial-gradient(circle at 78% 86%, rgba(177, 202, 157, .48), transparent 30%), linear-gradient(135deg, #fff3c8 0%, #ffdcb0 48%, #f5c8bd 100%)', backgroundSize: '135% 135%', backgroundPosition: '0% 0%', animation: 'background-breathe 18s ease-in-out infinite alternate', minHeight: '100vh', fontFamily: '"DM Sans", sans-serif', color: 'var(--ink)' }}>
      {/* Grain overlay */}
      <div style={styles.grain}></div>

      {/* Floating icons */}
      <div style={styles.floatingIcons} aria-hidden="true">
        <span style={{ ...styles.floatingIcon, left: '5%', top: '20%', color: 'var(--gold)', animationDelay: '-2s' }}>✦</span>
        <span style={{ ...styles.floatingIcon, right: '9%', top: '30%', color: 'var(--sage)', animationDelay: '-5s' }}>❋</span>
        <span style={{ ...styles.floatingIcon, left: '12%', top: '77%', color: '#4b7098', animationDelay: '-7s' }}>☾</span>
        <span style={{ ...styles.floatingIcon, right: '19%', top: '67%', color: 'var(--gold)', animationDelay: '-3s' }}>✺</span>
        <span style={{ ...styles.floatingIcon, left: '38%', top: '24%', color: 'var(--terracotta)', animationDelay: '-6s' }}>◈</span>
        <span style={{ ...styles.floatingIcon, right: '3%', top: '87%', color: 'var(--sage)', animationDelay: '-1s' }}>❖</span>
        <span style={{ ...styles.floatingIcon, left: '55%', top: '86%', color: '#4b7098', animationDelay: '-8s' }}>✧</span>
      </div>

      {/* Header */}
      <header style={styles.header}>
        <a style={styles.brand} href="#" onClick={(e) => { e.preventDefault(); showHome(); }}>
          <span style={styles.brandSpan}>✦</span> Cultural Mosaic
        </a>
        <nav style={styles.nav}>
          <button style={styles.navLink} onClick={showHome}>Home</button>
          <button style={styles.navLink} onClick={showThemes}>Explore</button>
        </nav>
      </header>

      <main>
        {/* Home Screen */}
        {currentScreen === 'home' && (
          <section style={styles.hero}>
            <div style={{ ...styles.motif, top: '110px', right: '27%', animationDelay: '-2s' }}>✺</div>
            <div style={{ ...styles.motif, right: '5%', bottom: '85px', color: 'var(--terracotta)', fontSize: '2.7rem' }}>❋</div>
            <div style={{ ...styles.motif, left: '53%', bottom: '88px', color: 'var(--sage)', fontSize: '2rem', animationDelay: '-3s' }}>✦</div>

            <div style={styles.heroBadge}><span style={styles.heroBadgeDot}></span> A living archive of belonging</div>
            <p style={styles.eyebrow} data-letter-reveal>India, seen through shared traditions</p>
            <h1 style={styles.heroH1}>
              <span data-letter-reveal>One feeling.</span><br />
              <em style={styles.heroH1Em} data-letter-reveal>Many expressions.</em>
            </h1>
            <p style={styles.heroCopy}>Travel across India's living traditions and discover how a common cultural idea becomes beautifully distinct in every region.</p>
            <button style={styles.button} onClick={showThemes}>
              Begin exploring <span style={styles.buttonSpan}>→</span>
            </button>
            <div style={styles.discoveryRibbon}><span>✦</span> Four themes · fifteen regional stories · one shared heritage</div>
            <div style={styles.heroStats}>
              <span className="hero-stat"><b style={styles.heroStatsB}>04</b> cultural themes</span>
              <span className="hero-stat"><b style={styles.heroStatsB}>15</b> regional stories</span>
              <span className="hero-stat"><b style={styles.heroStatsB}>01</b> shared heritage</span>
            </div>
          </section>
        )}

        {/* Themes Screen */}
        {currentScreen === 'themes' && (
          <section style={styles.themesSection}>
            <div style={styles.sectionHeading}>
              <div>
                <p style={styles.eyebrow}>Choose a lens</p>
                <h2 style={styles.sectionHeadingH2}>Explore the mosaic</h2>
              </div>
              <p style={styles.sectionHeadingP}>Pick a cultural theme to uncover regional interpretations.</p>
            </div>
            <div style={styles.themeGrid}>
              {culturalData.themes.map(theme => renderThemeCard(theme))}
            </div>
          </section>
        )}

        {/* Mosaic Screen */}
        {currentScreen === 'mosaic' && (
          <section style={styles.mosaicSection}>
            {renderMosaic()}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <span style={styles.footerSpan}>✦</span> Made to celebrate the many ways we belong.
      </footer>

      {/* Dialog */}
      {renderStoryDialog()}

      {/* Keyframe styles */}
      <style>{`
        @keyframes badge-arrive {
          from { opacity: 0; transform: translateY(-10px) scale(.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ribbon-arrive {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes header-arrive {
          from { opacity: 0; transform: translateY(-14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes brand-glow {
          50% { text-shadow: 0 0 18px rgba(210, 120, 34, .28); }
        }
        @keyframes background-breathe {
          0% { background-position: 0% 0%; }
          50% { background-position: 70% 35%; }
          100% { background-position: 100% 85%; }
        }
        @keyframes float {
          50% { transform: translateY(-13px) rotate(12deg); }
        }
        @keyframes sparkle {
          50% { transform: scale(1.35) rotate(45deg); opacity: .7; }
        }
        @keyframes pulse {
          70% { box-shadow: 0 0 0 16px rgba(248, 213, 114, 0); }
        }
        @keyframes reveal {
          to { opacity: 1; transform: none; }
        }
        @keyframes drift {
          50% { transform: translateY(-24px) rotate(24deg) scale(1.13); opacity: .28; }
        }
        @keyframes panel-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes ritual-detail-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes mosaic-letter-arrive {
          0% { opacity: 0; transform: translateY(28px) rotate(5deg) scale(.45); }
          65% { opacity: 1; transform: translateY(-3px) rotate(-2deg) scale(1.07); }
          100% { opacity: 1; transform: translateY(0) rotate(0) scale(1); }
        }
        @keyframes mosaic-tile-arrive {
          0% { opacity: 0; transform: rotate(28deg) scale(0); }
          42% { opacity: .82; transform: rotate(-8deg) scale(1.18); }
          100% { opacity: 0; transform: rotate(0) scale(.72); }
        }
        @keyframes copy-arrive {
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(28px) rotate(5deg) scale(.45);
          animation: mosaic-letter-arrive .58s cubic-bezier(.2, .85, .22, 1) forwards;
          position: relative;
          z-index: 0;
          isolation: isolate;
          min-width: .32em;
        }
        .hero-letter::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: -.12em -.08em;
          border-radius: 3px;
          opacity: 0;
          background: #d27822;
          box-shadow: 5px 5px 0 rgba(185, 70, 84, .32), -4px -4px 0 rgba(101, 124, 82, .28);
          transform: rotate(28deg) scale(0);
          animation: mosaic-tile-arrive .58s cubic-bezier(.2, .85, .22, 1) forwards;
          animation-delay: inherit;
        }
        .hero-kicker .hero-letter { animation-duration: .42s; }
        .hero-kicker .hero-letter::before { inset: -.22em -.13em; box-shadow: 3px 3px 0 rgba(210, 120, 34, .26); }
        .hero-letter:nth-child(4n + 2)::before { background: #b94654; }
        .hero-letter:nth-child(4n + 3)::before { background: #657c52; }
        .hero-letter:nth-child(4n + 4)::before { background: #4b7098; }
        .hero-copy-reveal {
          opacity: 0;
          transform: translateY(15px);
        }
        .hero-copy-reveal.is-revealed {
          animation: copy-arrive .7s .95s cubic-bezier(.2, .85, .22, 1) forwards;
        }
        .hero-stat {
          min-width: 126px;
          padding: 10px 14px 9px;
          border: 1px solid rgba(185, 70, 84, .14);
          border-radius: 12px;
          background: rgba(255, 255, 255, .48);
          box-shadow: 0 8px 18px rgba(125, 42, 40, .06);
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }
        .hero-stat:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, .75);
          box-shadow: 0 14px 25px rgba(125, 42, 40, .12);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-letter { animation: none; opacity: 1; transform: none; }
          .hero-letter::before { animation: none; display: none; }
          .hero-copy-reveal { animation: none; opacity: 1; transform: none; }
        }
        .video-launch.is-playing { display: none; }
        .nav button::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: var(--gold);
          transition: width .25s ease, left .25s ease;
        }
        .nav button:hover { color: var(--terracotta); transform: translateY(-2px); }
        .nav button:hover::after { width: 100%; left: 0; }
        .state-tile:hover img { transform: scale(1.08); }
        .state-tile:hover .tile-overlay { background: linear-gradient(0deg, rgba(21,15,12,.84), rgba(21,15,12,.12) 80%); }
        .state-tile:hover .tile-overlay span { opacity: 1; transform: none; }
        .theme-card:hover .theme-face { box-shadow: 0 23px 42px color-mix(in srgb, var(--accent) 25%, transparent); border-color: color-mix(in srgb, var(--accent) 48%, white); }
        .theme-card:hover .theme-picture { transform: scale(1.12); filter: saturate(1.32) contrast(1.08); }
        .theme-card:hover .theme-icon { transform: scale(1.17) rotate(-9deg); }
        .theme-card:hover .card-sparkle { animation-duration: .75s; }
        .theme-card:hover .explore-button { background: var(--accent); color: #fff; transform: translateX(5px); }
        .theme-card:hover .explore-button span { transform: translateX(5px); }
        .ritual-step:hover { transform: translateY(-3px); color: var(--terracotta); background: #fffaf1; }
        .ritual-step.is-selected { color: #fff9ef; border-color: var(--terracotta); background: var(--terracotta); box-shadow: 0 7px 13px rgba(138, 54, 46, .2); }
        .ritual-step.is-selected .ritual-count { color: #f5c8a4; }
        .story-tab:hover { transform: translateY(-3px); border-color: var(--terracotta); color: var(--terracotta); }
        .story-tab.is-active { background: var(--ink); color: #fff7eb; border-color: var(--ink); box-shadow: 0 8px 16px rgba(37, 29, 22, .16); }
        .video-button:hover { transform: scale(1.06); background: #fff2d0; }
        .enter-mosaic:hover { transform: translateX(5px); background: #fff0bb; }
        .turn-back:hover { color: #fff; }
        .button:hover { transform: translateY(-3px); box-shadow: 0 13px 25px rgba(125,42,40,.28); }
        dialog::backdrop { background: rgba(34,24,18,.7); backdrop-filter: blur(4px); }
        @media(max-width:800px){
          .hero { min-height: 570px; }
          .hero-stats { gap: 15px; }
          .mosaic-grid { grid-template-columns: 1fr 1fr; grid-template-rows: 240px 210px 210px; }
          .state-tile:first-child { grid-row: span 2; }
          .state-tile:nth-child(3) { grid-row: auto; }
          .state-tile:nth-child(4) { grid-column: span 2; }
          .section-heading { align-items: start; flex-direction: column; }
          .mosaic-heading { align-items: start; flex-direction: column; }
        }
        @media(max-width:560px){
          .hero { padding-top: 65px; min-height: 620px; }
          .hero-stats { bottom: 31px; gap: 14px; font-size: .61rem; }
          .hero-stat { min-width: 0; padding: 8px 9px; }
          .hero-stats b { font-size: 1.2rem; }
          .themes-section { padding-top: 70px; padding-bottom: 70px; border-radius: 24px 24px 0 0; }
          .theme-grid { grid-template-columns: 1fr; }
          .card-art { height: 185px; }
          .mosaic-section { padding-top: 35px; }
          .mosaic-grid { display: flex; flex-direction: column; padding: 0; }
          .state-tile { height: 245px; min-height: 245px; border-radius: 32px 12px 32px 12px; }
          .state-tile .tile-overlay span { opacity: 1; transform: none; }
          .state-tile::before { inset: 7px; }
          .story-image { height: 220px; }
          .story-text { padding: 38px 22px 26px; }
          .story-switcher { grid-template-columns: 1fr; }
          .story-panel { grid-template-columns: 1fr; }
          .video-launch { align-items: flex-start; flex-direction: column; }
          .ritual-journey { padding: 19px; }
          .ritual-journey-heading { flex-direction: column; gap: 8px; }
          .ritual-detail { grid-template-columns: 1fr; }
          .mosaic-grid::before { display: none; }
          .floating-icons span:nth-child(5), .floating-icons span:nth-child(6) { display: none; }
          .theme-back { padding: 26px; }
          .back-title { font-size: 2.1rem; }
        }
      `}</style>
    </div>
  );
};

export default App;