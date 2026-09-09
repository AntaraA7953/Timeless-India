import { useEffect, useRef, useState } from "react";
import durgaPuja from "./durgaPuja.json";


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DurgaPuja({ onBack }) {
  const festival = durgaPuja;

  const [page, setPage] = useState(0);
  const [modal, setModal] = useState<any>(null);
  const [playing, setPlaying] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const [videoModal, setVideoModal] = useState<any>(null);

  const dhakRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const playDhak = async () => {
    if (!dhakRef.current) return;

    try {
      if (playing) {
        dhakRef.current.pause();
        setPlaying(false);
      } else {
        dhakRef.current.currentTime = 0;
        await dhakRef.current.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error("Dhak audio error:", error);
    }
  };

  const enterFestival = async () => {
    if (!dhakRef.current) {
      setPage(1);
      return;
    }

    try {
      dhakRef.current.currentTime = 0;
      await dhakRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.error("Dhak audio error:", error);
    }

    setPage(1);
  };

  const openModal = (item) => {
    setModal(item);
  };

  const openVideo = (item) => {
    setVideoModal(item);
  };

  return (
    <>
      <style>{CSS}</style>

      <main className="festival-page">

        <audio
          ref={dhakRef}
          src={festival.audio.dhak}
          onEnded={() => setPlaying(false)}
        />

        {/* BACK BUTTON */}

        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back to Festival Fiesta
        </button>

        {/* HEADER */}

        <header className="festival-header">

          <div className="festival-brand">
            <strong>TIMELESS INDIA</strong>

            <span>FESTIVAL FIESTA</span>
          </div>

          <div className="header-place">
            BENGAL · INDIA
          </div>

          <button
            className={`header-sound ${
              playing ? "playing" : ""
            }`}
            onClick={playDhak}
          >
            <span>🥁</span>

            {playing
              ? "Dhak playing"
              : "Hear the Dhak"}
          </button>

        </header>


        {/* SCRAPBOOK */}

        <div className="scrapbook">

          {page === 0 && (
            <ArrivalPage
              festival={festival}
              enterFestival={enterFestival}
              playDhak={playDhak}
              playing={playing}
            />
          )}

          {page === 1 && (
            <MeaningPage
              festival={festival}
              openModal={openModal}
              next={() => setPage(2)}
            />
          )}

          {page === 2 && (
            <GoddessPage
              festival={festival}
              openModal={openModal}
              next={() => setPage(3)}
            />
          )}

          {page === 3 && (
            <DaysPage
              festival={festival}
              activeDay={activeDay}
              setActiveDay={setActiveDay}
              openModal={openModal}
              openVideo={openVideo}
              next={() => setPage(4)}
            />
          )}

          {page === 4 && (
            <CulturePage
              festival={festival}
              openModal={openModal}
              openVideo={openVideo}
            />
          )}

        </div>


        {/* NAVIGATION */}

        <nav className="scrapbook-nav">

          <button
            disabled={page === 0}
            onClick={() =>
              setPage(Math.max(0, page - 1))
            }
          >
            ←
          </button>

          <div>
            {[0, 1, 2, 3, 4].map((item) => (
              <button
                key={item}
                className={
                  page === item
                    ? "selected"
                    : ""
                }
                onClick={() => setPage(item)}
              >
                0{item + 1}
              </button>
            ))}
          </div>

          <button
            disabled={page === 4}
            onClick={() =>
              setPage(Math.min(4, page + 1))
            }
          >
            →
          </button>

        </nav>


        {/* TEXT / IMAGE MODAL */}

        {modal && (
          <CultureModal
            item={modal}
            close={() => setModal(null)}
          />
        )}


        {/* VIDEO MODAL */}

        {videoModal && (
          <VideoModal
            item={videoModal}
            close={() => setVideoModal(null)}
          />
        )}

      </main>
    </>
  );
}


/* =========================================================
   PAGE 1
========================================================= */

function ArrivalPage({
  festival,
  enterFestival,
  playDhak,
  playing,
}) {
  return (
    <section className="page arrival-page">

      <div className="red-thread" />

      {/* FLOWER SHOWER */}

      <div className="flower-shower">
        {Array.from({ length: 32 }).map(
          (_, index) => (
            <span
              key={index}
              style={{
                left: `${(index * 17) % 100}%`,
                animationDelay: `${(index % 10) * 0.45}s`,
                animationDuration:
                  `${4.5 + (index % 5) * 0.55}s`,
              }}
            >
              <span className="shiuli-flower" aria-hidden="true">
                <i className="petal p1" />
                <i className="petal p2" />
                <i className="petal p3" />
                <i className="petal p4" />
                <i className="petal p5" />
                <b className="shiuli-center" />
              </span>
            </span>
          )
        )}
      </div>


      {/* TRISHUL — external SVG projectile */}
      <div className="trishul-animation" aria-hidden="true">
        <div className="trishul-projectile">
          <img
            src="/trishul.svg"
            alt=""
            className="trishul-svg"
          />
        </div>

        <div className="trishul-impact-ring" />
        <div className="trishul-impact-dust">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>

      <PressedFlowers />


      <div className="arrival-top">
        <span>THE CULTURAL SCRAPBOOK</span>

        <span>01 / 05</span>

        <span>SHARAD · AUTUMN</span>
      </div>


      <div className="arrival-content">

        <div className="arrival-copy">

          <span className="bengali-large">
            দুর্গা পূজা
          </span>

          <h1>
            Durga
            <br />
            <em>Puja</em>
          </h1>

          <div className="title-rule">
            <span />
            ✺
            <span />
          </div>

          <p className="arrival-lead">
            Five principal days of worship,
            surrounded by weeks of anticipation,
            craftsmanship, music, food and
            community — when Bengal welcomes
            the Goddess home.
          </p>

          <div className="arrival-note">
            <small>
              A NOTE FROM THE SCRAPBOOK
            </small>

            <p>
              Durga Puja is not only something
              to witness. It is something to
              experience.
            </p>
          </div>

          <button
            className="enter-button"
            onClick={enterFestival}
          >
            <span className="enter-circle">
              {playing ? "♪" : "🥁"}
            </span>

            <span>
              <strong>Enter the Puja</strong>

              <small>
                {playing
                  ? "The dhak is playing"
                  : "The dhak will begin"}
              </small>
            </span>

            <b>→</b>
          </button>

          <button
            className={`sound-card ${
              playing ? "active" : ""
            }`}
            onClick={playDhak}
          >
            <div className="sound-card-icon">
              🥁
            </div>

            <div>
              <span>SOUND OF THE FESTIVAL</span>

              <strong>
                {playing
                  ? "Dhak · Playing"
                  : "Hear the Dhak"}
              </strong>

              <div className="sound-wave">
                {Array.from({
                  length: 18,
                }).map((_, i) => (
                  <i
                    key={i}
                    className={
                      playing
                        ? "wave-on"
                        : ""
                    }
                  />
                ))}
              </div>
            </div>
          </button>

        </div>


        <div className="arrival-art">

          <div className="photo-halo" />

          <div className="hero-photo">
            <img
              src={festival.images.hero}
              alt="Durga Puja"
            />
          </div>

          <div className="photo-paper">
            <small>ARCHIVE · 001</small>

            <strong>
              The Goddess
              <br />
              comes home.
            </strong>
          </div>

        </div>

      </div>


      <div className="arrival-footer">
        <span>WEST BENGAL</span>
        <span>❁ · ❁ · ❁</span>
        <span>CULTURE · DEVOTION · ART</span>
      </div>

    </section>
  );
}


/* =========================================================
   PAGE 2
========================================================= */

function MeaningPage({
  festival,
  openModal,
  next,
}) {
  const notes = festival.meaningNotes;

  return (
    <section className="page">

      <PageTitle
        number="02"
        eyebrow="UNDERSTANDING THE FESTIVAL"
        title={
          <>
            More than
            <br />
            a <em>celebration.</em>
          </>
        }
        bengali="উৎসব"
      />

      <div className="meaning-intro">

        <div className="meaning-image">
          <img
            src={festival.images.story}
            alt="Durga Puja"
          />

          <span className="image-tag">
            FIELD NOTE · BENGAL
          </span>
        </div>

        <div className="meaning-main-text">

          <span>WHAT IS DURGA PUJA?</span>

          <h3>
            A festival where
            <br />
            devotion meets
            <em> imagination.</em>
          </h3>

          <p className="large-text">
            {festival.introduction.text}
          </p>

          <p>
            At its heart, Durga Puja is a period
            of worship dedicated to Goddess Durga.
            Yet in Bengal, the festival has evolved
            into an enormous cultural event in which
            religious practice, art, music, food,
            craftsmanship and community life become
            inseparable.
          </p>

          <p>
            This is why a visitor can experience
            several completely different sides of
            Durga Puja within the same evening:
            standing before a beautifully decorated
            shrine, listening to a dhak performance,
            eating bhog, admiring an artist's work
            or simply walking through a neighbourhood
            filled with people.
          </p>

        </div>
      </div>


      <div className="fact-ribbon">

        <div>
          <small>WHEN</small>
          <strong>September–October</strong>
        </div>

        <div>
          <small>PRINCIPAL PUJA</small>
          <strong>Five days</strong>
        </div>

        <div>
          <small>FESTIVAL JOURNEY</small>
          <strong>10 stages</strong>
        </div>

        <div>
          <small>HEARTLAND</small>
          <strong>West Bengal</strong>
        </div>

      </div>


      <div className="knowledge-spread">

        <div className="spread-title">

          <span>
            OPEN THE SCRAPBOOK NOTES
          </span>

          <h3>
            Six things
            <br />
            to understand.
          </h3>

          <p>
            Start with the essentials.
            Open each note when you want
            to explore the story behind
            the celebration.
          </p>

        </div>

        <div className="paper-notes">

          {notes.map((note, index) => (
            <button
              key={note.title}
              className={`paper-note note-${index + 1}`}
              onClick={() => openModal(note)}
            >

              <span>{note.label}</span>

              <strong>{note.title}</strong>

              <small>
                Open this note →
              </small>

            </button>
          ))}

        </div>

      </div>


      <button
        className="next-page"
        onClick={next}
      >
        Meet the Goddess →
      </button>

    </section>
  );
}


/* =========================================================
   PAGE 3
========================================================= */

function GoddessPage({
  festival,
  openModal,
  next,
}) {
  return (
    <section className="page">

      <PageTitle
        number="03"
        eyebrow="THE GODDESS & HER SYMBOLS"
        title={
          <>
            Meet
            <br />
            <em>Durga.</em>
          </>
        }
        bengali="শক্তি"
      />

      <div className="goddess-spread">

        <div className="goddess-story">

          <span>THE STORY OF SHAKTI</span>

          <h3>
            Power gathered
            <br />
            into <em>one form.</em>
          </h3>

          {festival.story.paragraphs.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}

          <div className="shakti-card">
            <div className="shakti-word">
              শক্তি
            </div>

            <div>
              <strong>Shakti</strong>

              <p>
                Divine feminine power — the energy
                associated with creation, protection,
                transformation and strength.
              </p>
            </div>
          </div>

        </div>

        <div className="goddess-art">

          <div className="goddess-circle" />

          <img
            src={festival.images.goddess}
            alt="Goddess Durga"
          />

          <div className="goddess-caption">
            <small>THE CENTRAL FIGURE</small>

            <strong>DURGA</strong>

            <span>
              शक्ति · SHAKTI
            </span>
          </div>

        </div>

      </div>


      <div className="symbol-header">

        <div>
          <span>LOOK CLOSER</span>

          <h3>
            Every detail
            <br />
            tells a story.
          </h3>
        </div>

      </div>


      <div className="symbol-grid">

        {festival.symbols.map(
          (symbol, index) => (
            <button
              key={symbol.title}
              onClick={() => openModal(symbol)}
            >

              <div className="symbol-image">
                <img
                  src={symbol.image}
                  alt={symbol.title}
                />

                <span className="symbol-icon">
                  {symbol.icon}
                </span>
              </div>

              <span className="symbol-index">
                0{index + 1}
              </span>

              <strong>
                {symbol.title}
              </strong>

              <small>
                Explore meaning →
              </small>

            </button>
          )
        )}

      </div>


      <div className="family-section">

        <div className="family-heading">
          <span>THE FAMILY</span>

          <h3>
            Around the Goddess
          </h3>
        </div>

        <div className="family-list">

          {festival.family.map(
            (member) => (
              <button
                key={member.name}
                onClick={() =>
                  openModal(member)
                }
              >

                <div className="family-image">
                  <img
                    src={member.image}
                    alt={member.name}
                  />
                </div>

                <strong>
                  {member.name}
                </strong>

                <span>
                  {member.association}
                </span>

                <small>Explore →</small>

              </button>
            )
          )}

        </div>

      </div>


      <button
        className="next-page"
        onClick={next}
      >
        Turn the festival calendar →
      </button>

    </section>
  );
}


/* =========================================================
   PAGE 4 — DAYS
========================================================= */

function DaysPage({
  festival,
  activeDay,
  setActiveDay,
  openModal,
  openVideo,
  next,
}) {
  const day = festival.days[activeDay];

  return (
    <section className="page">

      <PageTitle
        number="04"
        eyebrow="THE FESTIVAL JOURNEY"
        title={
          <>
            From the
            <br />
            <em>first call</em>
            <br />
            to farewell.
          </>
        }
        bengali="উৎসবের যাত্রা"
      />

      <div className="calendar-intro">

        <p>
          The story of Durga Puja begins before
          the five principal days of worship.
          From Mahalaya to the final farewell,
          the festival unfolds through preparation,
          devotion, celebration and return.
        </p>

        <strong>
          THE FIVE PRINCIPAL PUJA DAYS ARE
          <br />
          SHASHTHI · SAPTAMI · ASHTAMI · NAVAMI · DASHAMI
        </strong>

      </div>


      <div className="festival-timeline">

        <div className="timeline-thread" />

        {festival.days.map(
          (item, index) => (
            <button
              key={item.name}
              className={`timeline-entry ${
                activeDay === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveDay(index)
              }
            >

              <span className="timeline-number">
                {item.number}
              </span>

              <div className="timeline-paper">

                <span className="timeline-type">
                  {item.type}
                </span>

                <strong>{item.name}</strong>

                <small>
                  {item.nativeName}
                </small>

                {item.principal && (
                  <em>
                    PRINCIPAL PUJA
                  </em>
                )}

                {item.video && (
                  <span className="video-badge">
                    ▶ VIDEO
                  </span>
                )}

                <b>Open →</b>

              </div>

            </button>
          )
        )}

      </div>


      {/* SELECTED DAY */}

      <div className="day-detail">

        <div className="day-detail-number">
          {day.number}
        </div>

        <div className="day-detail-content">

          <span>{day.type}</span>

          <h3>{day.name}</h3>

          <div className="day-bengali">
            {day.nativeName}
          </div>

          <p>{day.description}</p>

          <div className="day-highlights">
            {day.highlights.map(
              (highlight) => (
                <span key={highlight}>
                  {highlight}
                </span>
              )
            )}
          </div>

          {day.video && (
            <button
              className="watch-button"
              onClick={() =>
                openVideo(day)
              }
            >
              ▶ Watch related video
            </button>
          )}

        </div>


        <div className="day-detail-art">

          <img
            src={day.image}
            alt={day.name}
          />

        </div>

      </div>


      {/* DASHAMI EXTRA */}

      {day.afterDashami && (
        <div className="after-dashami">

          <div className="after-title">
            <span>INSIDE DASHAMI</span>

            <h3>
              The farewell
              <br />
              continues.
            </h3>
          </div>

          <div className="after-grid">

            {day.afterDashami.map(
              (item) => (
                <button
                  key={item.title}
                  onClick={() =>
                    openModal(item)
                  }
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div>
                    <span>{item.type}</span>

                    <strong>
                      {item.title}
                    </strong>

                    <small>
                      {item.nativeName}
                    </small>

                    <b>
                      Explore →
                    </b>
                  </div>

                </button>
              )
            )}

          </div>

        </div>
      )}


      {/* RITUALS */}

      <div className="ritual-spread">

        <div className="ritual-heading">

          <span>RITUAL NOTES</span>

          <h3>
            Look beyond
            <br />
            the calendar.
          </h3>

          <p>
            These are some of the moments that
            make the festival recognisable to
            devotees and visitors alike.
          </p>

        </div>


        <div className="ritual-list">

          {festival.rituals.map(
            (ritual, index) => (
              <button
                key={ritual.title}
                onClick={() =>
                  ritual.video
                    ? openVideo(ritual)
                    : openModal(ritual)
                }
              >

                <span>
                  0{index + 1}
                </span>

                <div>

                  <strong>
                    {ritual.title}
                  </strong>

                  <small>
                    {ritual.short}
                  </small>

                  {ritual.video && (
                    <label>
                      ▶ VIDEO
                    </label>
                  )}

                </div>

                <b>+</b>

              </button>
            )
          )}

        </div>

      </div>


      <button
        className="next-page"
        onClick={next}
      >
        Explore the living culture →
      </button>

    </section>
  );
}


/* =========================================================
   PAGE 5
========================================================= */

function CulturePage({
  festival,
  openModal,
  openVideo,
}) {
  return (
    <section className="page">

      <PageTitle
        number="05"
        eyebrow="THE LIVING CULTURE"
        title={
          <>
            Everything
            <br />
            around <em>her.</em>
          </>
        }
        bengali="সংস্কৃতি"
      />

      <div className="culture-intro">

        <p>
          The Puja does not exist only inside
          the shrine. It lives in workshops,
          kitchens, streets, music, clothing,
          temporary architecture and the people
          who return every year to celebrate it.
        </p>

        <span>
          CLICK THE OBJECTS
        </span>

      </div>


      <div className="culture-collage">

        <CultureObject
          item={festival.culture.kumartuli}
          className="culture-large"
          openModal={openModal}
        />

        <CultureObject
          item={festival.culture.pandal}
          openModal={openModal}
        />

        <CultureObject
          item={festival.culture.dhak}
          openModal={openModal}
        />

        <CultureObject
          item={festival.culture.dhunuchi}
          openModal={openModal}
          openVideo={openVideo}
        />

        <CultureObject
          item={festival.culture.bhog}
          openModal={openModal}
        />

        <CultureObject
          item={festival.culture.clothing}
          openModal={openModal}
        />

        <CultureObject
          item={festival.culture.community}
          className="culture-community"
          openModal={openModal}
        />

      </div>


      <div className="puja-food">

        <div>

          <span>A TASTE OF PUJA</span>

          <h3>Bhog</h3>

          <p>
            {festival.food.description}
          </p>

        </div>

        <div className="food-list">

          {festival.food.dishes.map(
            (dish) => (
              <span key={dish}>
                {dish}
              </span>
            )
          )}

        </div>

      </div>


      <div className="bijoya-section">

        <div className="bijoya-image">

          <img
            src={festival.images.bijoya}
            alt="Durga Puja farewell"
          />

        </div>

        <div className="bijoya-copy">

          <span>BIJOYA DASHAMI</span>

          <h3>
            Until
            <br />
            <em>next year.</em>
          </h3>

          <p>
            {festival.farewell.description}
          </p>

          <strong>
            {festival.farewell.bengali}
          </strong>

          <small>
            {festival.farewell.translation}
          </small>

        </div>

      </div>


      <div className="final-message">

        <span>দুর্গা পূজা</span>

        <strong>
          A celebration remembered until
          the Goddess comes home again.
        </strong>

      </div>

    </section>
  );
}


/* =========================================================
   CULTURE OBJECT
========================================================= */

function CultureObject({
  item,
  className = "",
  openModal,
  openVideo = undefined,
}) {
  return (
    <button
      className={`culture-object ${className}`}
      onClick={() => {
        if (item.video && openVideo) {
          openVideo(item);
        } else {
          openModal(item);
        }
      }}
    >

      <img
        src={item.image}
        alt={item.title}
      />

      <div className="culture-object-label">

        <span>{item.category}</span>

        <strong>{item.title}</strong>

        <small>
          {item.video
            ? "▶ Watch video"
            : "Read the note →"}
        </small>

      </div>

      {item.video && (
        <div className="video-corner">
          ▶
        </div>
      )}

    </button>
  );
}


/* =========================================================
   PAGE TITLE
========================================================= */

function PageTitle({
  number,
  eyebrow,
  title,
  bengali,
}) {
  return (
    <div className="page-title">

      <div>

        <div className="title-meta">

          <span className="title-number">
            {number}
          </span>

          <span>{eyebrow}</span>

        </div>

        <h2>{title}</h2>

      </div>

      <div className="bengali-side">
        {bengali}
      </div>

    </div>
  );
}


/* =========================================================
   PRESSED FLOWERS
========================================================= */

function PressedFlowers() {
  return (
    <div className="pressed-flowers">

      <div className="pressed-shiuli one">
        ✿
      </div>

      <div className="pressed-shiuli two">
        ✿
      </div>

      <div className="pressed-leaf">
        ❧
      </div>

    </div>
  );
}


/* =========================================================
   TEXT / IMAGE MODAL
========================================================= */

function CultureModal({
  item,
  close,
}) {
  return (
    <div
      className="modal-backdrop"
      onClick={close}
    >

      <div
        className="culture-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <button
          className="modal-close"
          onClick={close}
        >
          ×
        </button>

        {item.image && (
          <img
            src={item.image}
            alt={item.title}
          />
        )}

        <div className="modal-paper">

          <span>
            {item.label ||
              item.category ||
              item.type ||
              "CULTURAL NOTE"}
          </span>

          <h2>
            {item.title ||
              item.name}
          </h2>

          <div className="modal-flower">
            ✺
          </div>

          <p>
            {item.text ||
              item.detail ||
              item.description}
          </p>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   VIDEO MODAL
========================================================= */

function VideoModal({
  item,
  close,
}) {
  /*
    IMPORTANT:
    Put the YouTube VIDEO ID inside videoId below
    when you choose the actual videos.

    Example:

    videoId: "abc123XYZ"

    Then the video plays INSIDE this modal.
  */

  const videoTitles = {
    Dhunuchi: "Dhunuchi Dance",
    Bodhon: "Bodhon",
    "Kumari Puja": "Kumari Puja",
    Preparation: "Durga Puja Preparation",
    "Sindoor Khela": "Sindur Khela",
  };

  const title =
    item.title ||
    item.name ||
    "Durga Puja";

  return (
    <div
      className="modal-backdrop"
      onClick={close}
    >

      <div
        className="video-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <button
          className="modal-close"
          onClick={close}
        >
          ×
        </button>

        <div className="video-heading">

          <span>
            ▶ VIDEO · DURGA PUJA
          </span>

          <h2>
            {videoTitles[title] || title}
          </h2>

        </div>


        {/* 
          Replace YOUR_VIDEO_ID with
          the YouTube video's ID.

          Example:
          https://www.youtube.com/watch?v=ABC123

          videoId = "ABC123"
        */}

        {item.videoId &&
        !item.videoId.includes(
          "YOUR_VIDEO_ID"
        ) ? (

          <div className="video-frame">

            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

          </div>

        ) : (

          <div className="video-placeholder">

            <div className="big-play">
              ▶
            </div>

            <h3>
              {title}
            </h3>

            <p>
              The video space is ready.
              Add the YouTube video ID
              to this item's <b>videoId</b>
              field.
            </p>

          </div>

        )}

        <p className="video-description">
          {item.text ||
            item.description ||
            item.short ||
            "A visual moment from Durga Puja."}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   COMPLETE CSS
========================================================= */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Noto+Serif+Bengali:wght@400;500;600&display=swap');

:root {
  --paper: #fffdf8;
  --cream: #f8f5ef;
  --ink: #292522;
  --text: #403a35;
  --muted: #766e65;
  --vermilion: #a9382d;
  --terracotta: #c66b4c;
  --marigold: #d29a25;
  --leaf: #687b59;
  --indigo: #596c83;
  --lotus: #b87576;
  --jamun: #74637d;
  --gold: #b89552;
  --line: #ded5c7;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--cream);
  color: var(--ink);
  font-family: "DM Sans", sans-serif;
}

button {
  font-family: inherit;
}

img {
  display: block;
  max-width: 100%;
}


/* BACK */

.back-button {
  position: fixed;
  z-index: 9999;
  top: 18px;
  left: 20px;
  padding: 10px 15px;
  border: 1px solid #b98d88;
  background: rgba(255,255,255,.96);
  color: var(--vermilion);
  cursor: pointer;
  font-size: 11px;
  letter-spacing: .7px;
}


/* MAIN */

.festival-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 5% 10%, rgba(182,66,50,.06), transparent 20%),
    radial-gradient(circle at 95% 30%, rgba(89,108,131,.07), transparent 20%),
    #f8f5ef;
}


/* HEADER */

.festival-header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  background: rgba(250,248,243,.96);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(12px);
}

.festival-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.festival-brand strong {
  color: var(--vermilion);
  font-size: 10px;
  letter-spacing: 2px;
}

.festival-brand span {
  padding-left: 14px;
  border-left: 1px solid var(--line);
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 1.5px;
}

.header-place {
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 2px;
}

.header-sound {
  display: flex;
  align-items: center;
  gap: 9px;
  border: 0;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  font-size: 10px;
}

.header-sound span {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--vermilion);
  border-radius: 50%;
}

.header-sound.playing span {
  background: var(--vermilion);
  color: white;
}


/* SCRAPBOOK */

.scrapbook {
  padding: 95px 4vw 100px;
}

.page {
  position: relative;
  min-height: calc(100vh - 190px);
  overflow: hidden;
  background: #fffdf9;
  border: 1px solid #e4dbcd;
  box-shadow: 0 25px 80px rgba(70,45,25,.07);
}


/* TITLE */

.page-title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 48px 7vw 30px;
  border-bottom: 1px solid var(--line);
}

.title-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--vermilion);
  font-size: 8px;
  letter-spacing: 2px;
}

.title-number {
  font-family: "Fraunces", serif;
  font-size: 18px;
}

.page-title h2 {
  margin: 17px 0 0;
  font-family: "Fraunces", serif;
  font-size: clamp(55px, 7vw, 105px);
  font-weight: 500;
  line-height: .82;
  letter-spacing: -3px;
}

.page-title h2 em {
  color: var(--vermilion);
  font-style: normal;
}

.bengali-side {
  color: var(--vermilion);
  font-family: "Noto Serif Bengali", serif;
  font-size: 30px;
}


/* PAGE 1 */

.arrival-page {
  padding: 32px 7vw 25px;
}

.red-thread {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 7px;
  background:
    repeating-linear-gradient(
      45deg,
      var(--vermilion) 0 8px,
      transparent 8px 16px,
      var(--marigold) 16px 19px,
      transparent 19px 26px
    );
}


/* FLOWERS */

.flower-shower {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 8;
  pointer-events: none;
}

.flower-shower > span {
  position: absolute;
  top: -40px;
  width: 30px;
  height: 30px;
  opacity: .96;
  animation: flowerFall linear infinite;
}

/* Shiuli / night-flowering jasmine: white petals with an orange centre. */
.shiuli-flower {
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
}

.shiuli-flower .petal {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 17px;
  margin-left: -5px;
  margin-top: -14px;
  border-radius: 70% 70% 55% 55%;
  background: #ffffff;
  border: 1px solid rgba(120,95,65,.16);
  transform-origin: 50% 14px;
  box-shadow: 0 1px 4px rgba(60,40,20,.28);
}

.shiuli-flower .p1 { transform: rotate(0deg); }
.shiuli-flower .p2 { transform: rotate(72deg); }
.shiuli-flower .p3 { transform: rotate(144deg); }
.shiuli-flower .p4 { transform: rotate(216deg); }
.shiuli-flower .p5 { transform: rotate(288deg); }

.shiuli-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #e87516;
  box-shadow: 0 0 0 2px rgba(180,85,10,.18), 0 1px 3px rgba(120,60,10,.28);
}

@keyframes flowerFall {
  0% {
    transform: translateY(-50px) rotate(0deg);
    opacity: 0;
  }

  12% {
    opacity: .8;
  }

  100% {
    transform: translateY(850px) rotate(360deg);
    opacity: 0;
  }
}


/* TRISHUL — smooth diagonal throw, above the entire hero */

.trishul-animation {
  position: absolute;
  z-index: 90;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

.trishul-projectile {
  position: absolute;
  top: -55px;
  right: -8px;

  /* Smaller than before */
  width: 76px;
  height: 315px;

  transform-origin: 50% 50%;
  will-change: transform, opacity;

  /*
    Starts in the upper-right corner, crosses the page diagonally,
    and settles into the lower-left ground position.

    180° puts the Trishul head at the bottom.
    +45° tilts it sideways.
    Total = 225°.
  */
  animation:
    trishulThrow
    2.0s
    cubic-bezier(.22,.61,.36,1)
    .35s
    forwards;
}

.trishul-svg {
  display: block;
  width: 76px;
  height: 315px;
  object-fit: contain;
  opacity: .88;
  filter: drop-shadow(0 4px 7px rgba(70,20,15,.12));
  will-change: transform;
}

/*
  Smooth path:
  upper-right
       \
        \
         \
          \
           \
            ↓
       lower-left

  The Trishul remains above the photo card and all other
  arrival-page elements because the animation wrapper has z-index 90.
*/
@keyframes trishulThrow {
  0% {
    transform: translate3d(2vw, -13vh, 0) rotate(225deg);
    opacity: 0;
  }

  7% {
    transform: translate3d(1vw, -7vh, 0) rotate(225deg);
    opacity: .88;
    animation-timing-function: cubic-bezier(.25,.8,.35,1);
  }

  25% {
    transform: translate3d(-7vw, 14vh, 0) rotate(225deg);
    opacity: .88;
    animation-timing-function: cubic-bezier(.35,.75,.35,1);
  }

  50% {
    transform: translate3d(-18vw, 40vh, 0) rotate(225deg);
    opacity: .88;
    animation-timing-function: cubic-bezier(.3,.7,.3,1);
  }

  72% {
    transform: translate3d(-29vw, 61vh, 0) rotate(225deg);
    opacity: .88;
    animation-timing-function: cubic-bezier(.2,.8,.25,1);
  }

  88% {
    transform: translate3d(-35vw, 70vh, 0) rotate(225deg);
    opacity: .88;
    animation-timing-function: cubic-bezier(.15,.75,.2,1);
  }

  96% {
    transform: translate3d(-36.2vw, 72.5vh, 0) rotate(225deg);
    opacity: .88;
    animation-timing-function: cubic-bezier(.12,.75,.18,1);
  }

  100% {
    /* Final: planted and held in the ground */
    transform: translate3d(-36vw, 73vh, 0) rotate(225deg);
    opacity: .88;
  }
}

/* Small impact directly underneath the planted Trishul */
.trishul-impact-ring {
  position: absolute;
  left: 47%;
  bottom: 2px;
  width: 68px;
  height: 12px;
  border: 1.5px solid rgba(169,56,45,.32);
  border-radius: 50%;
  opacity: 0;
  transform: scale(.35);
  animation: trishulImpact .65s ease-out 2.85s forwards;
}

.trishul-impact-dust {
  position: absolute;
  left: 50%;
  bottom: 8px;
  width: 1px;
  height: 1px;
  opacity: 0;
  animation: trishulDust .6s ease-out 2.85s forwards;
}

.trishul-impact-dust i {
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--vermilion);
  opacity: .5;
}

.trishul-impact-dust i:nth-child(1) { --x: -35px; --y: -12px; }
.trishul-impact-dust i:nth-child(2) { --x: -25px; --y: -24px; }
.trishul-impact-dust i:nth-child(3) { --x: -12px; --y: -31px; }
.trishul-impact-dust i:nth-child(4) { --x: 10px; --y: -27px; }
.trishul-impact-dust i:nth-child(5) { --x: 24px; --y: -18px; }
.trishul-impact-dust i:nth-child(6) { --x: 36px; --y: -9px; }
.trishul-impact-dust i:nth-child(7) { --x: -45px; --y: -4px; }
.trishul-impact-dust i:nth-child(8) { --x: 45px; --y: -3px; }

@keyframes trishulImpact {
  0% {
    opacity: .65;
    transform: scale(.35);
  }

  100% {
    opacity: 0;
    transform: scale(1.35);
  }
}

@keyframes trishulDust {
  0% {
    opacity: 0;
    transform: scale(.5);
  }

  20% {
    opacity: .7;
  }

  100% {
    opacity: 0;
    transform: translate(var(--x), var(--y)) scale(.8);
  }
}


.arrival-top {
  position: relative;
  z-index: 15;
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 2px;
}

.arrival-content {
  position: relative;
  z-index: 15;
  display: grid;
  grid-template-columns: 48% 52%;
  align-items: center;
  max-width: 1400px;
  min-height: 680px;
  margin: auto;
}

.arrival-copy {
  position: relative;
  z-index: 20;
  padding-left: 3vw;
}

.bengali-large {
  color: var(--vermilion);
  font-family: "Noto Serif Bengali", serif;
  font-size: 34px;
}

.arrival-copy h1 {
  margin: 12px 0 27px;
  font-family: "Fraunces", serif;
  font-size: clamp(90px,10vw,155px);
  font-weight: 500;
  line-height: .66;
  letter-spacing: -6px;
}

.arrival-copy h1 em {
  color: var(--vermilion);
  font-style: normal;
}

.title-rule {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 300px;
  color: var(--gold);
}

.title-rule span {
  flex: 1;
  height: 1px;
  background: var(--line);
}

.arrival-lead {
  max-width: 510px;
  margin: 23px 0;
  color: var(--text);
  font-family: "Fraunces", serif;
  font-size: 20px;
  line-height: 1.55;
}

.arrival-note {
  width: 260px;
  padding: 15px 18px;
  background: #f0e3c9;
  transform: rotate(-2deg);
}

.arrival-note small {
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.5px;
}

.arrival-note p {
  margin: 7px 0 0;
  font-family: "Fraunces", serif;
  font-size: 14px;
  line-height: 1.35;
}

.enter-button {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 18px;
  padding: 10px 0;
  border: 0;
  border-bottom: 1px solid var(--ink);
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.enter-circle {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--vermilion);
  border-radius: 50%;
}

.enter-button > span:nth-child(2) {
  display: flex;
  flex-direction: column;
}

.enter-button strong {
  font-family: "Fraunces", serif;
  font-size: 17px;
}

.enter-button small {
  margin-top: 3px;
  color: var(--muted);
  font-size: 8px;
}

.enter-button b {
  margin-left: 25px;
  color: var(--vermilion);
  font-size: 20px;
}


/* SOUND */

.sound-card {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 320px;
  margin-top: 20px;
  padding: 12px 15px;
  border: 1px solid var(--line);
  background: #edf0e7;
  cursor: pointer;
  text-align: left;
}

.sound-card.active {
  border-color: var(--vermilion);
}

.sound-card-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--vermilion);
  font-size: 19px;
}

.sound-card > div:nth-child(2) {
  flex: 1;
}

.sound-card span {
  display: block;
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.4px;
}

.sound-card strong {
  display: block;
  margin-top: 3px;
  font-family: "Fraunces", serif;
  font-size: 16px;
}

.sound-wave {
  height: 25px;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 6px;
}

.sound-wave i {
  width: 2px;
  height: 5px;
  background: var(--marigold);
}

.sound-wave .wave-on {
  animation: wave .65s infinite alternate;
}

.sound-wave i:nth-child(2n) {
  animation-delay: .15s;
}

.sound-wave i:nth-child(3n) {
  animation-delay: .3s;
}

@keyframes wave {
  from {
    height: 4px;
  }

  to {
    height: 20px;
  }
}


/* HERO */

.arrival-art {
  position: relative;
  min-height: 610px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-halo {
  position: absolute;
  width: 500px;
  height: 500px;
  border: 1px solid rgba(182,66,50,.3);
  border-radius: 50%;
}

.photo-halo::before {
  content: "";
  position: absolute;
  inset: 24px;
  border: 1px solid rgba(184,149,82,.5);
  border-radius: 50%;
}

.hero-photo {
  position: relative;
  z-index: 4;
  width: min(430px,75%);
  padding: 12px;
  background: #e8ddcd;
  transform: rotate(1.5deg);
  box-shadow: 15px 25px 45px rgba(50,35,20,.12);
}

.hero-photo img {
  width: 100%;
  height: 560px;
  object-fit: cover;
}

.photo-paper {
  position: absolute;
  z-index: 8;
  right: 2%;
  bottom: 9%;
  width: 175px;
  padding: 15px;
  background: #ead5d0;
  transform: rotate(-4deg);
}

.photo-paper small {
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.5px;
}

.photo-paper strong {
  display: block;
  margin-top: 8px;
  font-family: "Fraunces", serif;
  font-size: 18px;
  line-height: 1.05;
}

.arrival-footer {
  position: relative;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 7px;
  letter-spacing: 1.5px;
}


/* PRESSED FLOWERS */

.pressed-flowers {
  position: absolute;
  inset: 0;
  z-index: 25;
  pointer-events: none;
}

.pressed-shiuli {
  position: absolute;
  color: #d59d42;
  font-size: 65px;
  opacity: .55;
}

.pressed-shiuli.one {
  left: 2%;
  top: 22%;
  transform: rotate(-15deg);
}

.pressed-shiuli.two {
  right: 2%;
  top: 18%;
  transform: rotate(20deg) scale(.7);
}

.pressed-leaf {
  position: absolute;
  left: 4%;
  bottom: 12%;
  color: #687b59;
  font-size: 80px;
  transform: rotate(-30deg);
}


/* PAGE 2 */

.meaning-intro {
  display: grid;
  grid-template-columns: 43% 57%;
  align-items: center;
  padding: 40px 7vw 25px;
  gap: 5%;
}

.meaning-image {
  position: relative;
  padding: 10px;
  background: #e2e7df;
  transform: rotate(-1deg);
}

.meaning-image img {
  width: 100%;
  height: 460px;
  object-fit: cover;
}

.image-tag {
  position: absolute;
  left: -12px;
  top: 25px;
  padding: 9px 13px;
  background: var(--vermilion);
  color: white;
  font-size: 7px;
  letter-spacing: 1.5px;
}

.meaning-main-text > span {
  color: var(--vermilion);
  font-size: 8px;
  letter-spacing: 1.8px;
}

.meaning-main-text h3 {
  margin: 15px 0;
  font-family: "Fraunces", serif;
  font-size: 43px;
  line-height: .9;
}

.meaning-main-text h3 em {
  color: var(--vermilion);
  font-style: normal;
}

.meaning-main-text p {
  color: var(--text);
  font-size: 15px;
  line-height: 1.8;
}

.meaning-main-text .large-text {
  font-family: "Fraunces", serif;
  font-size: 20px;
  line-height: 1.55;
}

.fact-ribbon {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  margin: 10px 7vw 0;
  background: #eef0e8;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.fact-ribbon div {
  padding: 17px 20px;
  border-right: 1px solid var(--line);
}

.fact-ribbon small {
  display: block;
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.4px;
}

.fact-ribbon strong {
  display: block;
  margin-top: 5px;
  font-family: "Fraunces", serif;
  font-size: 14px;
}


/* NOTES */

.knowledge-spread {
  display: grid;
  grid-template-columns: 27% 73%;
  margin: 28px 7vw 0;
  padding-top: 25px;
  border-top: 1px solid var(--line);
}

.spread-title span {
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.5px;
}

.spread-title h3 {
  margin: 10px 0;
  font-family: "Fraunces", serif;
  font-size: 31px;
  line-height: .9;
}

.spread-title p {
  max-width: 260px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.6;
}

.paper-notes {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 14px;
}

.paper-note {
  position: relative;
  min-height: 180px;
  padding: 24px 18px 18px;
  border: 0;
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  transition: .25s;
}

.paper-note:hover {
  transform: translateY(-7px) rotate(0deg);
}

.paper-note > span {
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.5px;
}

.paper-note strong {
  display: block;
  margin-top: 12px;
  font-family: "Fraunces", serif;
  font-size: 19px;
  line-height: 1.1;
}

.paper-note small {
  display: block;
  margin-top: 22px;
  color: var(--muted);
  font-size: 8px;
}

.note-1 {
  background: #e7e2f0;
  transform: rotate(-1.5deg);
}

.note-2 {
  background: #f0dfb8;
  transform: rotate(1deg);
}

.note-3 {
  background: #ecd3c8;
  transform: rotate(-.5deg);
}

.note-4 {
  background: #dce3d5;
  transform: rotate(1.5deg);
}

.note-5 {
  background: #d8e1e2;
  transform: rotate(-1deg);
}

.note-6 {
  background: #ead9e0;
  transform: rotate(.5deg);
}


/* PAGE 3 */

.goddess-spread {
  display: grid;
  grid-template-columns: 48% 52%;
  align-items: center;
  padding: 35px 7vw 20px;
}

.goddess-story {
  padding-right: 5vw;
}

.goddess-story > span {
  color: var(--vermilion);
  font-size: 8px;
  letter-spacing: 1.5px;
}

.goddess-story h3 {
  margin: 14px 0 20px;
  font-family: "Fraunces", serif;
  font-size: 43px;
  line-height: .9;
}

.goddess-story h3 em {
  color: var(--vermilion);
  font-style: normal;
}

.goddess-story p {
  color: var(--text);
  font-size: 15px;
  line-height: 1.8;
}

.shakti-card {
  display: flex;
  gap: 17px;
  padding: 14px;
  background: #f0d9d0;
  border-left: 4px solid var(--vermilion);
}

.shakti-word {
  color: var(--vermilion);
  font-family: "Noto Serif Bengali", serif;
  font-size: 28px;
}

.shakti-card strong {
  font-family: "Fraunces", serif;
}

.goddess-art {
  position: relative;
  min-height: 510px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.goddess-circle {
  position: absolute;
  width: 430px;
  height: 430px;
  border: 1px solid rgba(182,66,50,.35);
  border-radius: 50%;
}

.goddess-circle::before,
.goddess-circle::after {
  content: "";
  position: absolute;
  inset: 25px;
  border: 1px solid rgba(184,149,82,.4);
  border-radius: 50%;
}

.goddess-art img {
  position: relative;
  z-index: 2;
  width: 58%;
  height: 470px;
  object-fit: contain;
}

.goddess-caption {
  position: absolute;
  z-index: 5;
  right: 3%;
  bottom: 8%;
  padding: 14px;
  background: #e4e8df;
  transform: rotate(3deg);
}

.goddess-caption small {
  color: var(--vermilion);
  font-size: 7px;
}

.goddess-caption strong {
  display: block;
  font-family: "Fraunces", serif;
  font-size: 25px;
}

.goddess-caption span {
  font-family: "Noto Serif Bengali", serif;
  color: var(--muted);
}


/* SYMBOLS */

.symbol-header {
  margin: 10px 7vw 0;
  padding: 22px 0;
  border-top: 1px solid var(--line);
}

.symbol-header span {
  color: var(--vermilion);
  font-size: 8px;
  letter-spacing: 1.5px;
}

.symbol-header h3 {
  margin: 8px 0 0;
  font-family: "Fraunces", serif;
  font-size: 29px;
}

.symbol-grid {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  margin: 0 7vw;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.symbol-grid button {
  position: relative;
  min-height: 250px;
  padding: 12px;
  border: 0;
  border-right: 1px solid var(--line);
  background: transparent;
  cursor: pointer;
  text-align: center;
}

.symbol-grid button:last-child {
  border-right: 0;
}

.symbol-grid button:hover {
  background: #f0e2c5;
}

.symbol-index {
  position: absolute;
  top: 10px;
  left: 10px;
  color: var(--vermilion);
  font-size: 7px;
}

.symbol-image {
  position: relative;
  width: 100%;
  height: 140px;
  overflow: hidden;
  margin-top: 10px;
}

.symbol-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.symbol-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 36px;
  filter: drop-shadow(0 2px 5px rgba(0,0,0,.3));
}

.symbol-grid strong {
  display: block;
  margin-top: 10px;
  font-family: "Fraunces", serif;
  font-size: 15px;
}

.symbol-grid small {
  color: var(--muted);
  font-size: 8px;
}


/* FAMILY */

.family-section {
  display: grid;
  grid-template-columns: 25% 75%;
  margin: 25px 7vw 0;
  border-bottom: 1px solid var(--line);
}

.family-heading {
  padding: 15px 0;
}

.family-heading span {
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.5px;
}

.family-heading h3 {
  font-family: "Fraunces", serif;
  font-size: 27px;
}

.family-list {
  display: grid;
  grid-template-columns: repeat(4,1fr);
}

.family-list button {
  position: relative;
  padding: 12px;
  border: 0;
  border-left: 1px solid var(--line);
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.family-list button:hover {
  background: #e9e4ee;
}

.family-image {
  width: 100%;
  height: 100px;
  overflow: hidden;
  margin-bottom: 10px;
}

.family-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.family-list strong {
  display: block;
  color: var(--vermilion);
  font-family: "Fraunces", serif;
  font-size: 16px;
}

.family-list span {
  display: block;
  margin-top: 4px;
  color: var(--muted);
  font-size: 9px;
}

.family-list small {
  display: block;
  margin-top: 8px;
  color: var(--vermilion);
}


/* DAYS */

.calendar-intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 30px 7vw 15px;
}

.calendar-intro p {
  max-width: 760px;
  margin: 0;
  color: var(--text);
  font-family: "Fraunces", serif;
  font-size: 19px;
  line-height: 1.5;
}

.calendar-intro strong {
  color: var(--vermilion);
  font-size: 8px;
  letter-spacing: 1px;
  line-height: 1.7;
}


/* TIMELINE */

.festival-timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 15px;
  margin: 20px 7vw 0;
  padding: 35px 20px 30px;
}

.timeline-thread {
  position: absolute;
  left: 8%;
  right: 8%;
  top: 50%;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--indigo),
    var(--marigold),
    var(--vermilion),
    var(--leaf),
    var(--lotus)
  );
  opacity: .5;
}

.timeline-entry {
  position: relative;
  min-height: 190px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.timeline-number {
  position: absolute;
  z-index: 4;
  top: -8px;
  left: 12px;
  color: var(--vermilion);
  font-family: "Fraunces", serif;
  font-size: 24px;
}

.timeline-paper {
  position: absolute;
  inset: 0;
  padding: 25px 17px 15px;
  border: 1px solid rgba(70,50,30,.1);
  box-shadow: 0 8px 20px rgba(50,35,20,.06);
  transition: .25s;
}

.timeline-entry:nth-child(2) .timeline-paper {
  background: #e7e2f0;
  transform: rotate(-2deg);
}

.timeline-entry:nth-child(3) .timeline-paper {
  background: #f0dfb8;
  transform: rotate(1.5deg);
}

.timeline-entry:nth-child(4) .timeline-paper {
  background: #ecd3c8;
  transform: rotate(-1deg);
}

.timeline-entry:nth-child(5) .timeline-paper {
  background: #dce3d5;
  transform: rotate(1.7deg);
}

.timeline-entry:nth-child(6) .timeline-paper {
  background: #e9e1cf;
  transform: rotate(-1.5deg);
}

.timeline-entry:nth-child(7) .timeline-paper {
  background: #ead6d5;
  transform: rotate(1deg);
}

.timeline-entry:nth-child(8) .timeline-paper {
  background: #f0ddd0;
  transform: rotate(-2deg);
}

.timeline-entry:nth-child(9) .timeline-paper {
  background: #e1e5df;
  transform: rotate(1.4deg);
}

.timeline-entry:nth-child(10) .timeline-paper {
  background: #e3e0ea;
  transform: rotate(-1deg);
}

.timeline-entry:nth-child(11) .timeline-paper {
  background: #f0dfba;
  transform: rotate(1.5deg);
}

.timeline-entry:hover .timeline-paper,
.timeline-entry.active .timeline-paper {
  transform: translateY(-8px) rotate(0);
  box-shadow: 0 16px 30px rgba(50,35,20,.11);
}

.timeline-type {
  display: block;
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.3px;
}

.timeline-paper strong {
  display: block;
  margin-top: 8px;
  font-family: "Fraunces", serif;
  font-size: 21px;
  line-height: .95;
}

.timeline-paper small {
  display: block;
  margin-top: 4px;
  color: var(--muted);
  font-family: "Noto Serif Bengali", serif;
  font-size: 11px;
}

.timeline-paper em {
  display: inline-block;
  margin-top: 9px;
  padding: 4px 6px;
  border: 1px solid var(--vermilion);
  color: var(--vermilion);
  font-style: normal;
  font-size: 6px;
}

.timeline-paper b {
  position: absolute;
  right: 12px;
  bottom: 10px;
  color: var(--vermilion);
  font-size: 8px;
}

.video-badge {
  display: inline-block !important;
  margin-top: 8px;
  padding: 5px 7px;
  background: #9f3028;
  color: white !important;
  border-radius: 3px;
  font-size: 7px !important;
  letter-spacing: 1px;
}


/* DAY DETAIL */

.day-detail {
  display: grid;
  grid-template-columns: 100px 1fr 240px;
  align-items: center;
  min-height: 300px;
  margin: 15px 7vw 0;
  padding: 30px 45px;
  border: 1px solid var(--line);
  background: linear-gradient(120deg,#fffdf8,#f7f1e5);
}

.day-detail-number {
  color: var(--vermilion);
  font-family: "Fraunces", serif;
  font-size: 70px;
}

.day-detail-content > span {
  color: var(--vermilion);
  font-size: 8px;
  letter-spacing: 1.7px;
}

.day-detail-content h3 {
  margin: 4px 0 0;
  font-family: "Fraunces", serif;
  font-size: 52px;
  line-height: .9;
}

.day-bengali {
  color: var(--marigold);
  font-family: "Noto Serif Bengali", serif;
  font-size: 18px;
}

.day-detail-content p {
  max-width: 800px;
  margin: 15px 0 0;
  color: var(--text);
  font-size: 15px;
  line-height: 1.8;
}

.day-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 16px;
}

.day-highlights span {
  padding: 6px 10px;
  border: 1px solid var(--vermilion);
  color: var(--vermilion);
  font-size: 8px;
}

.day-detail-art {
  height: 220px;
  overflow: hidden;
  transform: rotate(2deg);
}

.day-detail-art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.watch-button {
  margin-top: 18px;
  padding: 10px 15px;
  border: 0;
  background: var(--vermilion);
  color: white;
  cursor: pointer;
  font-size: 11px;
}


/* AFTER DASHAMI */

.after-dashami {
  margin: 30px 7vw 0;
  padding-top: 25px;
  border-top: 1px solid var(--line);
}

.after-title span {
  color: var(--vermilion);
  font-size: 8px;
  letter-spacing: 1.5px;
}

.after-title h3 {
  font-family: "Fraunces", serif;
  font-size: 32px;
}

.after-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 15px;
}

.after-grid button {
  padding: 0;
  border: 1px solid var(--line);
  background: white;
  cursor: pointer;
  text-align: left;
}

.after-grid button img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.after-grid button div {
  padding: 15px;
}

.after-grid span {
  color: var(--vermilion);
  font-size: 7px;
}

.after-grid strong {
  display: block;
  margin-top: 6px;
  font-family: "Fraunces", serif;
  font-size: 21px;
}

.after-grid small {
  color: var(--muted);
  font-family: "Noto Serif Bengali", serif;
}

.after-grid b {
  display: block;
  margin-top: 10px;
  color: var(--vermilion);
  font-size: 8px;
}


/* RITUALS */

.ritual-spread {
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 28px 7vw 0;
  padding-top: 25px;
  border-top: 1px solid var(--line);
}

.ritual-heading > span {
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.5px;
}

.ritual-heading h3 {
  font-family: "Fraunces", serif;
  font-size: 31px;
  line-height: .9;
}

.ritual-heading p {
  max-width: 280px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.6;
}

.ritual-list {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  border-left: 1px solid var(--line);
}

.ritual-list button {
  position: relative;
  display: flex;
  gap: 15px;
  padding: 15px 40px 15px 20px;
  border: 0;
  border-bottom: 1px solid var(--line);
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.ritual-list button:hover {
  background: #f0e2c5;
}

.ritual-list button > span {
  color: var(--vermilion);
  font-size: 7px;
}

.ritual-list strong {
  font-family: "Fraunces", serif;
  font-size: 16px;
}

.ritual-list small {
  display: block;
  margin-top: 3px;
  color: var(--muted);
  font-size: 8px;
}

.ritual-list label {
  display: inline-block;
  margin-top: 7px;
  padding: 4px 6px;
  background: var(--vermilion);
  color: white;
  font-size: 6px;
}

.ritual-list b {
  position: absolute;
  right: 15px;
  color: var(--vermilion);
}


/* PAGE 5 */

.culture-intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 30px 7vw 12px;
}

.culture-intro p {
  max-width: 760px;
  margin: 0;
  font-family: "Fraunces", serif;
  font-size: 19px;
  line-height: 1.5;
}

.culture-intro span {
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.5px;
}

.culture-collage {
  display: grid;
  grid-template-columns: 1.2fr .8fr .8fr;
  grid-template-rows: 230px 230px 200px;
  gap: 10px;
  margin: 15px 7vw 0;
}

.culture-object {
  position: relative;
  overflow: hidden;
  padding: 0;
  border: 1px solid var(--line);
  background: #eadcc5;
  cursor: pointer;
  text-align: left;
}

.culture-object img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .45s;
}

.culture-object:hover img {
  transform: scale(1.05);
}

.culture-large {
  grid-row: span 2;
}

.culture-community {
  grid-column: span 2;
}

.culture-object-label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 18px;
  color: white;
  background: linear-gradient(
    transparent,
    rgba(40,28,18,.9)
  );
}

.culture-object-label span {
  font-size: 7px;
  letter-spacing: 1.5px;
}

.culture-object-label strong {
  display: block;
  margin-top: 4px;
  font-family: "Fraunces", serif;
  font-size: 23px;
}

.culture-object-label small {
  display: block;
  margin-top: 4px;
  font-size: 8px;
}

.video-corner {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #a9382d;
  color: white;
  font-size: 14px;
}


/* FOOD */

.puja-food {
  display: grid;
  grid-template-columns: 35% 65%;
  margin: 25px 7vw 0;
  padding: 20px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.puja-food span {
  color: var(--vermilion);
  font-size: 7px;
  letter-spacing: 1.5px;
}

.puja-food h3 {
  margin: 5px 0;
  font-family: "Fraunces", serif;
  font-size: 28px;
}

.puja-food p {
  max-width: 400px;
  color: var(--text);
  font-size: 13px;
  line-height: 1.7;
}

.food-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
}

.food-list span {
  padding: 8px 12px;
  border: 1px solid var(--marigold);
  color: #9b7117;
  font-family: "Fraunces", serif;
  font-size: 13px;
}


/* BIJOYA */

.bijoya-section {
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 28px 7vw 0;
  background: #e6e8df;
}

.bijoya-image {
  min-height: 340px;
}

.bijoya-image img {
  width: 100%;
  height: 100%;
  min-height: 340px;
  object-fit: cover;
}

.bijoya-copy {
  padding: 40px 6vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bijoya-copy > span {
  color: var(--vermilion);
  font-size: 8px;
  letter-spacing: 2px;
}

.bijoya-copy h3 {
  margin: 15px 0;
  font-family: "Fraunces", serif;
  font-size: 65px;
  line-height: .65;
}

.bijoya-copy h3 em {
  color: var(--vermilion);
  font-style: normal;
}

.bijoya-copy p {
  max-width: 450px;
  color: var(--text);
  font-size: 14px;
  line-height: 1.8;
}

.bijoya-copy strong {
  color: var(--vermilion);
  font-family: "Noto Serif Bengali", serif;
  font-size: 23px;
}

.bijoya-copy small {
  color: var(--muted);
}


/* FINAL */

.final-message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 18px 7vw 0;
  padding-bottom: 20px;
}

.final-message span {
  color: var(--vermilion);
  font-family: "Noto Serif Bengali", serif;
  font-size: 19px;
}

.final-message strong {
  max-width: 450px;
  color: var(--vermilion);
  font-family: "Fraunces", serif;
  font-size: 14px;
}


/* MODALS */

.modal-backdrop {
  position: fixed;
  z-index: 500;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: rgba(45,32,22,.55);
  backdrop-filter: blur(8px);
}

.culture-modal,
.video-modal {
  position: relative;
  width: min(850px,100%);
  max-height: 90vh;
  overflow: auto;
  background: var(--paper);
  box-shadow: 0 30px 100px rgba(30,20,10,.3);
}

.culture-modal > img {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
}

.modal-close {
  position: absolute;
  z-index: 10;
  right: 15px;
  top: 15px;
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: white;
  color: var(--vermilion);
  cursor: pointer;
  font-size: 20px;
}

.modal-paper {
  padding: 40px 55px 50px;
}

.modal-paper > span,
.video-heading > span {
  color: var(--vermilion);
  font-size: 8px;
  letter-spacing: 2px;
}

.modal-paper h2,
.video-heading h2 {
  margin: 13px 0;
  font-family: "Fraunces", serif;
  font-size: 52px;
  font-weight: 500;
}

.modal-paper p,
.video-description {
  color: var(--text);
  font-size: 17px;
  line-height: 1.85;
}

.modal-flower {
  color: var(--marigold);
  font-size: 20px;
}


/* VIDEO */

.video-modal {
  padding-bottom: 30px;
}

.video-heading {
  padding: 40px 45px 20px;
}

.video-heading h2 {
  margin-bottom: 0;
}

.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: black;
}

.video-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.video-placeholder {
  margin: 0 45px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      135deg,
      #e7e2f0,
      #f0dfb8,
      #ecd3c8
    );
  text-align: center;
  padding: 30px;
}

.big-play {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--vermilion);
  color: white;
  font-size: 25px;
}

.video-placeholder h3 {
  font-family: "Fraunces", serif;
  font-size: 30px;
  margin-bottom: 0;
}

.video-placeholder p {
  max-width: 450px;
  color: var(--text);
  line-height: 1.7;
}

.video-description {
  padding: 0 45px;
}


/* NAVIGATION */

.scrapbook-nav {
  position: fixed;
  z-index: 200;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 9px 15px;
  background: rgba(250,248,243,.97);
  border: 1px solid var(--line);
  box-shadow: 0 8px 30px rgba(60,40,20,.08);
}

.scrapbook-nav > button {
  border: 0;
  background: transparent;
  color: var(--vermilion);
  cursor: pointer;
  font-size: 18px;
}

.scrapbook-nav > button:disabled {
  opacity: .2;
  cursor: default;
}

.scrapbook-nav > div {
  display: flex;
  gap: 12px;
}

.scrapbook-nav > div button {
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 8px;
}

.scrapbook-nav > div button.selected {
  color: var(--vermilion);
  transform: scale(1.25);
}

.next-page {
  display: block;
  margin: 18px 7vw 0 auto;
  padding: 8px 0;
  border: 0;
  border-bottom: 1px solid var(--ink);
  background: transparent;
  cursor: pointer;
  font-family: "Fraunces", serif;
  font-size: 15px;
}


/* RESPONSIVE */


@media (prefers-reduced-motion: reduce) {
  .trishul-projectile {
    animation: none;
    transform: translate3d(-36vw, 73vh, 0) rotate(225deg);
    opacity: .88;
  }

  .trishul-impact-ring,
  .trishul-impact-dust {
    animation: none;
    opacity: 0;
  }
}

@media (max-width: 1100px) {

  .arrival-content,
  .meaning-intro,
  .goddess-spread {
    grid-template-columns: 1fr;
  }

  .symbol-grid {
    grid-template-columns: repeat(3,1fr);
  }

  .knowledge-spread,
  .ritual-spread,
  .family-section,
  .puja-food {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .family-list {
    grid-template-columns: repeat(4,1fr);
  }

  .festival-timeline {
    grid-template-columns: repeat(3,1fr);
  }

  .timeline-thread {
    display: none;
  }

  .after-grid {
    grid-template-columns: 1fr 1fr;
  }
}


@media (max-width: 700px) {

  .festival-header {
    padding: 0 15px;
  }

  .header-place,
  .festival-brand span {
    display: none;
  }

  .scrapbook {
    padding: 80px 10px 90px;
  }

  .page-title {
    padding: 35px 25px 22px;
  }

  .page-title h2 {
    font-size: 52px;
  }

  .bengali-side {
    display: none;
  }

  .arrival-page {
    padding: 30px 25px;
  }

  .arrival-content {
    display: block;
  }

  .arrival-copy {
    padding: 35px 0;
  }

  .arrival-copy h1 {
    font-size: 78px;
  }

  .arrival-art {
    min-height: 420px;
  }

  .hero-photo {
    width: 78%;
  }

  .hero-photo img {
    height: 430px;
  }

  .photo-halo {
    width: 350px;
    height: 350px;
  }

  .sound-card {
    width: 100%;
  }

  .meaning-intro,
  .goddess-spread {
    padding: 30px 25px;
  }

  .fact-ribbon {
    grid-template-columns: 1fr 1fr;
    margin-left: 25px;
    margin-right: 25px;
  }

  .paper-notes {
    grid-template-columns: 1fr;
  }

  .symbol-grid {
    grid-template-columns: 1fr 1fr;
    margin-left: 25px;
    margin-right: 25px;
  }

  .family-list {
    grid-template-columns: 1fr 1fr;
  }

  .festival-timeline {
    grid-template-columns: 1fr 1fr;
    margin-left: 25px;
    margin-right: 25px;
  }

  .day-detail {
    grid-template-columns: 55px 1fr;
    margin-left: 25px;
    margin-right: 25px;
    padding: 25px;
  }

  .day-detail-art {
    display: none;
  }

  .ritual-list {
    grid-template-columns: 1fr;
  }

  .culture-intro {
    display: block;
    padding-left: 25px;
    padding-right: 25px;
  }

  .culture-collage {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7,230px);
    margin-left: 25px;
    margin-right: 25px;
  }

  .culture-large,
  .culture-community {
    grid-column: auto;
    grid-row: auto;
  }

  .puja-food,
  .bijoya-section {
    margin-left: 25px;
    margin-right: 25px;
  }

  .puja-food,
  .bijoya-section {
    grid-template-columns: 1fr;
  }

  .final-message {
    display: block;
    margin-left: 25px;
    margin-right: 25px;
  }

  .modal-paper {
    padding: 30px 25px 40px;
  }

  .modal-paper h2,
  .video-heading h2 {
    font-size: 40px;
  }

  .video-heading {
    padding: 35px 25px 20px;
  }

  .video-placeholder {
    margin: 0 25px;
  }

  .video-description {
    padding: 0 25px;
  }

  .after-grid {
    grid-template-columns: 1fr;
  }

  .trishul-animation {
    top: 0;
    right: 0;
    transform: none;
    transform-origin: center;
  }

  .trishul-projectile {
    width: 64px;
    height: 270px;
  }

  .trishul-svg {
    width: 64px;
    height: 270px;
  }
}
`;