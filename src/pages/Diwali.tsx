import { useEffect, useRef, useState } from "react";
import diwali from "./Diwali.json";
import FestivalCountdown from "./FestivalCountdown";

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Diwali({ onBack }) {
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState<any>(null);
  const [videoModal, setVideoModal] = useState<any>(null);
  const [activeMoment, setActiveMoment] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const crackerRef = useRef<HTMLAudioElement | null>(null);
  const soundTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fireworksTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (page > 0) {
      const timer = setTimeout(() => {
        startCrackers();
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [page]);

  const clearCrackerTimers = () => {
    if (soundTimerRef.current) {
      clearTimeout(soundTimerRef.current);
      soundTimerRef.current = null;
    }

    if (fireworksTimerRef.current) {
      clearTimeout(fireworksTimerRef.current);
      fireworksTimerRef.current = null;
    }
  };

  // Used automatically when entering pages 2–5.
  // IMPORTANT: this starts the sound but never resets an already-playing audio.
  const startCrackers = async () => {
    const audio = crackerRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      }

      setSoundOn(true);
      setShowFireworks(true);

      clearCrackerTimers();

      soundTimerRef.current = setTimeout(() => {
        setSoundOn(false);
        soundTimerRef.current = null;
      }, 6500);

      fireworksTimerRef.current = setTimeout(() => {
        setShowFireworks(false);
        fireworksTimerRef.current = null;
      }, 7500);
    } catch (error) {
      console.log(
        "Add /public/sounds/crackers.mp3 for cracker sound."
      );
    }
  };

  // Used by the buttons.
  // Play = start from the current position.
  // Pause = pause at the current position.
  // NOTHING resets currentTime, so it cannot restart accidentally.
  const toggleCrackers = async () => {
    const audio = crackerRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setSoundOn(false);
      setShowFireworks(false);
      clearCrackerTimers();
      return;
    }

    try {
      await audio.play();
      setSoundOn(true);
      setShowFireworks(true);

      clearCrackerTimers();

      soundTimerRef.current = setTimeout(() => {
        setSoundOn(false);
        soundTimerRef.current = null;
      }, Math.max(0, (audio.duration - audio.currentTime) * 1000));

      fireworksTimerRef.current = setTimeout(() => {
        setShowFireworks(false);
        fireworksTimerRef.current = null;
      }, 7500);
    } catch (error) {
      console.log(
        "Add /public/sounds/crackers.mp3 for cracker sound."
      );
    }
  };

  const handleCrackerEnded = () => {
    clearCrackerTimers();
    setSoundOn(false);
    setShowFireworks(false);

    // Reset ONLY after the audio has genuinely finished.
    if (crackerRef.current) {
      crackerRef.current.currentTime = 0;
    }
  };

  const enterDiwali = () => {
    setPage(1);
  };

  return (
    <>
      <style>{DIWALI_CSS}</style>

      <main className="diwali-page">

        <audio
          ref={crackerRef}
          src={diwali.audio.crackers}
          onEnded={handleCrackerEnded}
        />

        {/* =================================================
            MULTICOLOURED TUNI LIGHTS
        ================================================= */}

        <TuniLights />

        {/* =================================================
            BACK
        ================================================= */}

        <button
          className="diwali-back"
          onClick={onBack}
        >
          ← Back to Festival Fiesta
        </button>

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="diwali-header">

          <div className="diwali-brand">
            <strong>TIMELESS INDIA</strong>

            <span>FESTIVAL FIESTA</span>
          </div>

          <div className="diwali-place">
            INDIA · THE FESTIVAL OF LIGHT
          </div>

          {page > 0 && (
            <button
              className={`cracker-button ${
                soundOn ? "active" : ""
              }`}
              onClick={toggleCrackers}
            >
              <span>✦</span>

              {soundOn
                ? "Pause the crackers"
                : "Hear the crackers"}
            </button>
          )}

        </header>

        {/* =================================================
            FIREWORKS
        ================================================= */}

        {showFireworks && <Fireworks />}

        {/* =================================================
            SCRAPBOOK
        ================================================= */}

        <div className="diwali-scrapbook">

          {page === 0 && (
            <DiwaliArrival
              enterDiwali={enterDiwali}
              playCrackers={toggleCrackers}
              soundOn={soundOn}
            />
          )}

          {page === 1 && (
            <DiwaliMeaning
              openModal={setModal}
              next={() => setPage(2)}
            />
          )}

          {page === 2 && (
            <DiwaliMoments
              activeMoment={activeMoment}
              setActiveMoment={setActiveMoment}
              openVideo={setVideoModal}
              openModal={setModal}
              next={() => setPage(3)}
            />
          )}

          {page === 3 && (
            <DiwaliTraditions
              openModal={setModal}
              openVideo={setVideoModal}
              next={() => setPage(4)}
            />
          )}

          {page === 4 && (
            <DiwaliFinal
              openVideo={setVideoModal}
            />
          )}

        </div>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav className="diwali-nav">

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

        {/* =================================================
            TEXT MODAL
        ================================================= */}

        {modal && (
          <DiwaliModal
            item={modal}
            close={() => setModal(null)}
          />
        )}

        {/* =================================================
            VIDEO MODAL
        ================================================= */}

        {videoModal && (
          <DiwaliVideoModal
            item={videoModal}
            close={() => setVideoModal(null)}
          />
        )}

      </main>
    </>
  );
}


/* =========================================================
   TUNI LIGHTS
========================================================= */

function TuniLights() {
  const bulbs = Array.from({ length: 25 });

  return (
    <div className="tuni-lights">

      <div className="tuni-wire" />

      {bulbs.map((_, index) => (
        <span
          key={index}
          className={`tuni-bulb bulb-${index % 8}`}
          style={{
            left: `${2 + index * 4}%`,
            animationDelay: `${(index % 7) * 0.32}s`,
          }}
        />
      ))}

    </div>
  );
}


/* =========================================================
   DIWALI ARRIVAL
========================================================= */

function DiwaliArrival({
  enterDiwali,
  playCrackers,
  soundOn,
}) {
  return (
    <section className="diwali-page-section arrival">

      <div className="night-stars">
        {Array.from({ length: 35 }).map(
          (_, i) => (
            <i
              key={i}
              style={{
                left: `${(i * 31) % 100}%`,
                top: `${(i * 17) % 85}%`,
                animationDelay: `${i * 0.17}s`,
              }}
            />
          )
        )}
      </div>

      <div className="arrival-glow" />

      <div className="diwali-arrival-copy">

        <span className="arrival-kicker">
          THE FESTIVAL OF LIGHT
        </span>

        <div className="diwali-script">
          दीपावली
        </div>

        <h1>
          Diwali
          <br />
          <em>glows.</em>
        </h1>

        <div className="gold-rule">
          <span />
          ✦
          <span />
        </div>

        <p className="arrival-description">
          A night of lamps, laughter,
          colour, sweets, prayer and
          the people who make a house
          feel like home.
        </p>

        <div className="diwali-note">
          <small>
            A NOTE FROM THE SCRAPBOOK
          </small>

          <strong>
            Light a diya.
            <br />
            Gather everyone.
            <br />
            Let the night begin.
          </strong>
        </div>

        <FestivalCountdown
          date="2026-11-08T00:00:00+05:30"
          label="Diwali 2026"
          theme="diwali"
        />

        <button
          className="enter-diwali"
          onClick={enterDiwali}
        >

          <span className="mini-diya">
            <span className="mini-flame" />
          </span>

          <span>
            <strong>
              Enter Diwali
            </strong>

            <small>
              {soundOn
                ? "The celebration has begun"
                : "Light up the night"}
            </small>
          </span>

          <b>→</b>

        </button>

        <button
          className="sound-control"
          onClick={playCrackers}
        >
          <span>✦</span>

          <div>
            <small>
              SOUND OF THE NIGHT
            </small>

            <strong>
              {soundOn
                ? "Crackers · Pause"
                : "Hear the crackers"}
            </strong>

            <div className="sound-bars">
              {Array.from({
                length: 20,
              }).map((_, i) => (
                <i
                  key={i}
                  className={
                    soundOn
                      ? "bar-active"
                      : ""
                  }
                />
              ))}
            </div>
          </div>
        </button>

      </div>

      <div className="arrival-diya-area">

        <div className="rangoli-halo">
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
        </div>

        <div className="large-diya">

          <div className="diya-flame">
            <i />
            <b />
          </div>

          <div className="diya-bowl">

            <span className="diya-decoration">
              ✦
            </span>

            <span className="diya-decoration">
              ✦
            </span>

            <span className="diya-decoration">
              ✦
            </span>

          </div>

          <div className="diya-shadow" />

        </div>

        <div className="arrival-photo-card">

          <img
            src={diwali.images.hero}
            alt="Diwali lights"
          />

          <div>
            <small>
              ARCHIVE · 001
            </small>

            <strong>
              The night
              <br />
              comes alive.
            </strong>
          </div>

        </div>

      </div>

      <div className="arrival-footer">
        <span>LIGHT · JOY · TOGETHERNESS</span>

        <span>✦ · ✧ · ✦ · ✧</span>

        <span>SHUBH DEEPAWALI</span>
      </div>

    </section>
  );
}


/* =========================================================
   PAGE 2 — MEANING
========================================================= */

function DiwaliMeaning({
  openModal,
  next,
}) {
  return (
    <section className="diwali-page-section">

      <DiwaliPageCrackers />

      <SectionTitle
        number="02"
        eyebrow="UNDERSTANDING DIWALI"
        title={
          <>
            More than
            <br />
            <em>a night of light.</em>
          </>
        }
        native="प्रकाश"
      />

      <div className="meaning-layout">

        <div className="meaning-photo">

          <img
            src={diwali.images.lights}
            alt="Diwali lights"
          />

          <div className="photo-stamp">
            FIELD NOTE · INDIA
          </div>

        </div>

        <div className="meaning-copy">

          <span>
            WHY DIWALI MATTERS
          </span>

          <h3>
            Light means
            <br />
            something <em>different</em>
            <br />
            to every home.
          </h3>

          <p className="large-copy">
            {diwali.introduction.text}
          </p>

          <p>
            {diwali.introduction.extended}
          </p>

          <div className="meaning-facts">

            <div>
              <strong>01</strong>
              <span>LIGHT</span>
              <small>
                Hope & knowledge
              </small>
            </div>

            <div>
              <strong>02</strong>
              <span>HOME</span>
              <small>
                Return & reunion
              </small>
            </div>

            <div>
              <strong>03</strong>
              <span>JOY</span>
              <small>
                Celebration & sharing
              </small>
            </div>

          </div>

        </div>

      </div>

      <div className="meaning-notes">

        <div className="notes-heading">

          <span>
            OPEN THE SCRAPBOOK
          </span>

          <h3>
            Six ways
            <br />
            to read the festival.
          </h3>

          <p>
            Diwali carries many meanings.
            Open a card to discover one.
          </p>

        </div>

        <div className="diwali-note-grid">

          {diwali.themes.map(
            (item, index) => (
              <button
                key={item.title}
                className={`meaning-card card-${index}`}
                onClick={() =>
                  item.video
                    ? openModal(item)
                    : openModal(item)
                }
              >

                <div>
                  <img
                    src={item.image}
                    alt=""
                  />
                </div>

                <span>
                  {item.label}
                </span>

                <strong>
                  {item.title}
                </strong>

                <small>
                  {item.video
                    ? "▶ Video note"
                    : "Open this note →"}
                </small>

              </button>
            )
          )}

        </div>

      </div>

      <button
        className="next-diwali"
        onClick={next}
      >
        Follow the festival →
      </button>

    </section>
  );
}


/* =========================================================
   PAGE 3 — MOMENTS
========================================================= */

function DiwaliMoments({
  activeMoment,
  setActiveMoment,
  openVideo,
  openModal,
  next,
}) {
  const moment = diwali.moments[activeMoment];

  return (
    <section className="diwali-page-section">

      <DiwaliPageCrackers />

      <SectionTitle
        number="03"
        eyebrow="THE FESTIVAL JOURNEY"
        title={
          <>
            Five moments.
            <br />
            <em>One luminous season.</em>
          </>
        }
        native="दीपोत्सव"
      />

      <div className="moment-intro">

        <p>
          Diwali is not exactly the same
          everywhere. Different regions and
          communities observe different
          traditions, but the festive season
          often unfolds through several days
          of preparation, worship and family
          celebration.
        </p>

        <strong>
          DHANTERAS · NARAKA CHATURDASHI
          · DIWALI · GOVARDHAN PUJA · BHAI DOOJ
        </strong>

      </div>

      <div className="moment-selector">

        <div className="moment-line" />

        {diwali.moments.map(
          (item, index) => (
            <button
              key={item.name}
              className={
                activeMoment === index
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveMoment(index)
              }
            >

              <span>
                {item.number}
              </span>

              <div>

                <small>
                  {item.type}
                </small>

                <strong>
                  {item.name}
                </strong>

                <em>
                  {item.nativeName}
                </em>

                {item.video && (
                  <label>
                    ▶ VIDEO
                  </label>
                )}

              </div>

            </button>
          )
        )}

      </div>

      <div className="moment-detail">

        <div className="moment-number">
          {moment.number}
        </div>

        <div className="moment-content">

          <span>
            {moment.type}
          </span>

          <h3>
            {moment.name}
          </h3>

          <div className="moment-native">
            {moment.nativeName}
          </div>

          <p>
            {moment.description}
          </p>

          {moment.video && (
            <button
              className="video-open-button"
              onClick={() =>
                openVideo(moment)
              }
            >
              ▶ Watch this moment
            </button>
          )}

        </div>

        <div className="moment-image">

          <img
            src={moment.image}
            alt={moment.name}
          />

          <div className="image-glow" />

        </div>

      </div>

      <div className="moment-tip">

        <span>
          SCRAPBOOK TIP
        </span>

        <strong>
          The details change from place
          to place — and that's part of
          what makes Diwali so rich.
        </strong>

      </div>

      <button
        className="next-diwali"
        onClick={next}
      >
        Explore the traditions →
      </button>

    </section>
  );
}


/* =========================================================
   PAGE 4 — TRADITIONS
========================================================= */

function DiwaliTraditions({
  openModal,
  openVideo,
  next,
}) {
  return (
    <section className="diwali-page-section">

      <DiwaliPageCrackers />

      <SectionTitle
        number="04"
        eyebrow="THE LIVING FESTIVAL"
        title={
          <>
            Light it.
            <br />
            <em>Share it.</em>
          </>
        }
        native="परंपरा"
      />

      <div className="tradition-intro">

        <p>
          Walk through a Diwali home and
          you find the festival everywhere:
          in a tiny lamp at the doorway,
          in coloured powder on the floor,
          in a box of sweets or in the
          sudden sound of fireworks outside.
        </p>

        <span>
          CLICK ANY OBJECT
        </span>

      </div>

      <div className="tradition-grid">

        {diwali.traditions.map(
          (item, index) => (
            <button
              key={item.title}
              className={`tradition-object tradition-${index}`}
              onClick={() =>
                item.video
                  ? openVideo(item)
                  : openModal(item)
              }
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="tradition-overlay">

                <span>
                  {item.category}
                </span>

                <strong>
                  {item.title}
                </strong>

                <small>
                  {item.video
                    ? "▶ Watch video"
                    : "Read the note →"}
                </small>

              </div>

              <div className="tradition-icon">
                {item.icon}
              </div>

            </button>
          )
        )}

      </div>

      <div className="sweet-section">

        <div>

          <span>
            A TASTE OF DIWALI
          </span>

          <h3>
            Mithai
          </h3>

          <p>
            {diwali.food.description}
          </p>

        </div>

        <div className="sweet-list">

          {diwali.food.dishes.map(
            (dish) => (
              <span key={dish}>
                {dish}
              </span>
            )
          )}

        </div>

      </div>

      <button
        className="next-diwali"
        onClick={next}
      >
        Keep the light →
      </button>

    </section>
  );
}


/* =========================================================
   PAGE 5 — FINAL
========================================================= */

function DiwaliFinal({
  openVideo,
}) {
  return (
    <section className="diwali-page-section final-page">

      <DiwaliPageCrackers />

      <SectionTitle
        number="05"
        eyebrow="THE STORIES BEHIND THE LIGHTS"
        title={
          <>
            Stories,
            <br />
            <em>remembered.</em>
          </>
        }
        native={diwali.ending.bengali}
      />

      <div className="final-spread">

        <div className="final-image">
          <img
            src={diwali.images.family}
            alt="Diwali celebration"
          />

          <div className="final-photo-note">
            <small>FINAL FIELD NOTE</small>
            <strong>
              Every light
              <br />
              carries a story.
            </strong>
          </div>
        </div>

        <div className="final-copy">
          <span>AFTER THE LIGHTS</span>

          <h3>
            Keep the
            <br />
            <em>story alive.</em>
          </h3>

          <p>
            {diwali.ending.text}
          </p>

          <div className="final-diya-row">
            {Array.from({ length: 7 }).map((_, index) => (
              <div className="tiny-diya" key={index}>
                <i />
              </div>
            ))}
          </div>

          <strong className="final-native">
            {diwali.ending.bengali}
          </strong>

          <small>SHUBH DEEPAWALI</small>
        </div>

      </div>

      <div className="final-stories">

        <div className="final-stories-heading">
          <div>
            <span>DIWALI · STORIES & TRADITIONS</span>
            <h3>
              A few stories
              <br />
              <em>behind the celebration.</em>
            </h3>
          </div>

          <p>
            Diwali is understood differently across regions and
            communities. Explore these short story notes and
            watch the video moments to learn more.
          </p>
        </div>

        <div className="final-story-grid">
          {diwali.finalStories.map((story) => (
            <article className="final-story-card" key={story.number}>

              <div className="final-story-image">
                <img src={story.image} alt={story.name} />
                <div className="final-story-number">
                  {story.number}
                </div>
              </div>

              <div className="final-story-content">
                <span>{story.type}</span>

                <div className="final-story-native">
                  {story.nativeName}
                </div>

                <h4>{story.name}</h4>

                <p>{story.description}</p>

                {story.video && (
                  <button
                    className="final-story-video"
                    onClick={() => openVideo(story)}
                  >
                    ▶ Watch video
                  </button>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>

      <div className="final-message">
        <span>✦</span>
        <strong>
          A celebration of light,
          renewal, family and joy.
        </strong>
        <span>✦</span>
      </div>

    </section>
  );
}


/* =========================================================
   PERMANENT CRACKERS — PAGES 2 TO 5
========================================================= */

function DiwaliPageCrackers() {
  return (
    <div className="page-crackers" aria-hidden="true">

      <div className="page-cracker page-cracker-left">
        <div className="cracker-stick" />
        <span>✦</span>
        <span>✧</span>
        <span>✹</span>
      </div>

      <div className="page-cracker page-cracker-right">
        <div className="cracker-stick" />
        <span>✦</span>
        <span>✧</span>
        <span>✹</span>
      </div>

      <div className="cracker-sparks cracker-sparks-left">
        ✦ · ✧ · ✦
      </div>

      <div className="cracker-sparks cracker-sparks-right">
        ✧ · ✦ · ✧
      </div>

    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  number,
  eyebrow,
  title,
  native,
}) {
  return (
    <div className="diwali-section-title">

      <div>

        <div className="section-meta">

          <span>
            {number}
          </span>

          <small>
            {eyebrow}
          </small>

        </div>

        <h2>
          {title}
        </h2>

      </div>

      <div className="section-native">
        {native}
      </div>

    </div>
  );
}


/* =========================================================
   TEXT MODAL
========================================================= */

function DiwaliModal({
  item,
  close,
}) {
  return (
    <div
      className="diwali-modal-backdrop"
      onClick={close}
    >

      <div
        className="diwali-modal"
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
            alt=""
          />
        )}

        <div className="modal-content">

          <span>
            {item.label ||
              item.category ||
              item.type ||
              "DIWALI NOTE"}
          </span>

          <h2>
            {item.title ||
              item.name}
          </h2>

          <div className="modal-star">
            ✦
          </div>

          <p>
            {item.text ||
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

function DiwaliVideoModal({
  item,
  close,
}) {
  const title =
    item.title ||
    item.name ||
    "Diwali";

  const hasVideo =
    item.videoId &&
    item.videoId.trim() !== "";

  return (
    <div
      className="diwali-modal-backdrop"
      onClick={close}
    >

      <div
        className="diwali-video-modal"
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

        <div className="video-modal-title">

          <span>
            ▶ VIDEO · DIWALI
          </span>

          <h2>
            {title}
          </h2>

        </div>

        {hasVideo ? (

          <div className="youtube-frame">

            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}?rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

          </div>

        ) : (

          <div className="video-coming-soon">

            <div className="video-play">
              ▶
            </div>

            <h3>
              {title}
            </h3>

            <p>
              Add the YouTube video ID
              to this item's
              <b> videoId </b>
              field.
            </p>

            <code>
              videoId: "YOUR_ID"
            </code>

          </div>

        )}

        <p className="video-modal-description">
          {item.text ||
            item.description ||
            "A visual moment from Diwali."}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   FIREWORKS
========================================================= */

function Fireworks() {
  const bursts = Array.from({
    length: 10,
  });

  return (
    <div className="fireworks-layer">

      {bursts.map((_, index) => (
        <div
          key={index}
          className={`firework firework-${index}`}
        >
          {Array.from({
            length: 18,
          }).map((_, ray) => (
            <i
              key={ray}
              style={{
                transform: `rotate(${ray * 20}deg)`,
              }}
            />
          ))}
        </div>
      ))}

    </div>
  );
}


/* =========================================================
   COMPLETE DIWALI CSS
========================================================= */

const DIWALI_CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Noto+Serif+Devanagari:wght@400;500;600&display=swap');


/* =========================================================
   VARIABLES
========================================================= */

:root {
  --night: #090b19;
  --night-2: #10152b;
  --night-3: #171d38;

  --cream: #fff7df;
  --paper: #fffaf0;

  --gold: #f4c95d;
  --gold-light: #ffeaa2;

  --orange: #f27b35;
  --pink: #ee668c;
  --blue: #65b9ff;
  --green: #75d18a;
  --purple: #b38cff;
  --red: #f15b5b;

  --ink: #171522;
  --muted: #766f68;

  --line: rgba(244,201,93,.25);
}


/* =========================================================
   RESET
========================================================= */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--night);
  color: var(--cream);
  font-family: "DM Sans", sans-serif;
}

button {
  font-family: inherit;
}

img {
  display: block;
  max-width: 100%;
}


/* =========================================================
   PAGE
========================================================= */

.diwali-page {
  min-height: 100vh;
  background:
    radial-gradient(
      circle at 50% 10%,
      rgba(102,76,180,.18),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 70%,
      rgba(238,102,140,.08),
      transparent 25%
    ),
    var(--night);
}


/* =========================================================
   TUNI LIGHTS
========================================================= */

.tuni-lights {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  pointer-events: none;
}

.tuni-wire {
  position: absolute;
  top: 11px;
  left: -2%;
  width: 104%;
  height: 48px;
  border-top: 2px solid rgba(255,255,255,.35);
  border-radius: 50%;
  transform: rotate(1deg);
}

.tuni-bulb {
  position: absolute;
  top: 19px;
  width: 10px;
  height: 15px;
  border-radius: 50%;
  animation: tuniBlink 1.8s ease-in-out infinite;
}

.tuni-bulb::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 3px;
  width: 4px;
  height: 6px;
  background: #2d2930;
}

.bulb-0 {
  background: #ff5555;
  box-shadow: 0 0 14px #ff5555;
}

.bulb-1 {
  background: #ffd95a;
  box-shadow: 0 0 16px #ffd95a;
}

.bulb-2 {
  background: #65b9ff;
  box-shadow: 0 0 16px #65b9ff;
}

.bulb-3 {
  background: #72d884;
  box-shadow: 0 0 16px #72d884;
}

.bulb-4 {
  background: #ef6c9d;
  box-shadow: 0 0 16px #ef6c9d;
}

.bulb-5 {
  background: #ad83ff;
  box-shadow: 0 0 16px #ad83ff;
}

.bulb-6 {
  background: #ff9248;
  box-shadow: 0 0 16px #ff9248;
}

.bulb-7 {
  background: #ffffff;
  box-shadow: 0 0 18px #ffffff;
}

@keyframes tuniBlink {

  0%,
  100% {
    opacity: .35;
    transform: scale(.75);
  }

  35% {
    opacity: 1;
    transform: scale(1.1);
  }

  60% {
    opacity: .55;
  }

  75% {
    opacity: 1;
  }
}


/* =========================================================
   BACK BUTTON
========================================================= */

.diwali-back {
  position: fixed;
  z-index: 1100;
  top: 82px;
  left: 20px;

  padding: 9px 14px;

  border: 1px solid rgba(244,201,93,.45);

  background: rgba(9,11,25,.85);

  color: var(--gold);

  cursor: pointer;

  font-size: 10px;

  letter-spacing: .8px;
}


/* =========================================================
   HEADER
========================================================= */

.diwali-header {
  position: fixed;
  z-index: 900;

  top: 65px;
  left: 0;
  right: 0;

  height: 55px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4vw;

  background: rgba(9,11,25,.9);

  border-bottom: 1px solid var(--line);

  backdrop-filter: blur(14px);
}

.diwali-brand {
  display: flex;
  gap: 14px;
  align-items: center;
}

.diwali-brand strong {
  color: var(--gold);

  font-size: 10px;

  letter-spacing: 2px;
}

.diwali-brand span {
  padding-left: 14px;

  border-left: 1px solid var(--line);

  color: rgba(255,255,255,.5);

  font-size: 8px;

  letter-spacing: 1.5px;
}

.diwali-place {
  color: rgba(255,255,255,.5);

  font-size: 8px;

  letter-spacing: 1.8px;
}

.cracker-button {
  display: flex;
  align-items: center;
  gap: 8px;

  border: 0;

  background: transparent;

  color: var(--cream);

  cursor: pointer;

  font-size: 9px;
}

.cracker-button span {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  border: 1px solid var(--gold);

  border-radius: 50%;

  color: var(--gold);
}

.cracker-button.active span {
  background: var(--gold);
  color: var(--night);
}


/* =========================================================
   SCRAPBOOK
========================================================= */

.diwali-scrapbook {
  padding: 145px 4vw 100px;
}

.diwali-page-section {
  position: relative;

  min-height: calc(100vh - 245px);

  overflow: hidden;

  background:
    radial-gradient(
      circle at 80% 20%,
      rgba(244,201,93,.07),
      transparent 25%
    ),
    var(--paper);

  color: var(--ink);

  border: 1px solid rgba(244,201,93,.2);

  box-shadow:
    0 30px 100px rgba(0,0,0,.35);
}


/* =========================================================
   SECTION TITLE
========================================================= */

.diwali-section-title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 55px 7vw 35px;

  border-bottom: 1px solid #e7dcc6;
}

.section-meta {
  display: flex;
  align-items: center;
  gap: 12px;

  color: #a76e13;

  font-size: 8px;

  letter-spacing: 2px;
}

.section-meta span {
  font-family: "Fraunces", serif;
  font-size: 18px;
}

.diwali-section-title h2 {
  margin: 17px 0 0;

  font-family: "Fraunces", serif;

  font-size: clamp(55px, 7vw, 105px);

  font-weight: 500;

  line-height: .82;

  letter-spacing: -3px;
}

.diwali-section-title h2 em {
  color: #a94d26;
  font-style: normal;
}

.section-native {
  color: #a94d26;

  font-family: "Noto Serif Devanagari", serif;

  font-size: 32px;
}


/* =========================================================
   ARRIVAL
========================================================= */

.arrival {
  min-height: 760px;

  background:
    radial-gradient(
      circle at 65% 55%,
      rgba(255,191,63,.15),
      transparent 20%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(126,98,255,.2),
      transparent 30%
    ),
    linear-gradient(
      120deg,
      #080a18,
      #11162d 55%,
      #0b1024
    );

  color: var(--cream);
}

.arrival::before {
  content: "";

  position: absolute;

  inset: 0;

  background-image:
    radial-gradient(
      circle,
      rgba(255,255,255,.06) 1px,
      transparent 1px
    );

  background-size: 34px 34px;

  opacity: .4;
}

.night-stars {
  position: absolute;
  inset: 0;

  pointer-events: none;
}

.night-stars i {
  position: absolute;

  width: 2px;
  height: 2px;

  border-radius: 50%;

  background: white;

  animation: starBlink 2s infinite ease-in-out;
}

@keyframes starBlink {

  0%,
  100% {
    opacity: .15;
    transform: scale(.6);
  }

  50% {
    opacity: .9;
    transform: scale(1.4);
  }
}

.arrival-glow {
  position: absolute;

  width: 500px;
  height: 500px;

  right: 15%;
  top: 120px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(244,201,93,.2),
      transparent 65%
    );

  filter: blur(10px);
}

.diwali-arrival-copy {
  position: relative;
  z-index: 20;

  width: 52%;

  padding:
    80px
    0
    60px
    8vw;
}

.arrival-kicker {
  color: var(--gold);

  font-size: 8px;

  letter-spacing: 2.5px;
}

.diwali-script {
  margin-top: 20px;

  color: var(--gold-light);

  font-family: "Noto Serif Devanagari", serif;

  font-size: 38px;

  text-shadow:
    0 0 20px rgba(244,201,93,.4);
}

.diwali-arrival-copy h1 {
  margin: 8px 0 25px;

  font-family: "Fraunces", serif;

  font-size: clamp(90px, 10vw, 155px);

  font-weight: 500;

  line-height: .68;

  letter-spacing: -6px;
}

.diwali-arrival-copy h1 em {
  color: var(--gold);
  font-style: normal;
}

.gold-rule {
  display: flex;
  align-items: center;
  gap: 10px;

  width: 320px;

  color: var(--gold);
}

.gold-rule span {
  flex: 1;

  height: 1px;

  background: rgba(244,201,93,.3);
}

.arrival-description {
  max-width: 500px;

  margin: 25px 0;

  color: rgba(255,247,223,.8);

  font-family: "Fraunces", serif;

  font-size: 20px;

  line-height: 1.55;
}

.diwali-note {
  width: 270px;

  padding: 17px 20px;

  background: #f2d486;

  color: #33220e;

  transform: rotate(-2deg);

  box-shadow:
    0 12px 30px rgba(0,0,0,.2);
}

.diwali-note small {
  color: #8c5017;

  font-size: 7px;

  letter-spacing: 1.5px;
}

.diwali-note strong {
  display: block;

  margin-top: 9px;

  font-family: "Fraunces", serif;

  font-size: 16px;

  line-height: 1.2;
}

.festival-countdown { width: min(430px, 100%); margin: 25px 0 20px; padding: 15px 17px 16px; border: 1px solid rgba(244, 201, 93, .35); background: rgba(20, 23, 51, .78); box-shadow: 0 12px 28px rgba(0, 0, 0, .2); }
.countdown-heading { display: flex; align-items: center; gap: 10px; color: var(--gold); }
.countdown-heading > div { display: flex; flex: 1; flex-direction: column; gap: 4px; }
.countdown-eyebrow { font: 8px Arial, sans-serif; letter-spacing: .18em; font-weight: 700; color: var(--gold-light); }
.countdown-heading strong { color: var(--cream); font: 18px "Fraunces", serif; font-weight: 500; }
.countdown-spark { font-size: 15px; }
.countdown-units { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin-top: 14px; }
.countdown-unit { padding: 8px 4px 7px; text-align: center; background: rgba(255, 247, 223, .08); border-top: 2px solid var(--pink); }
.countdown-unit strong { display: block; color: var(--gold-light); font: 24px "Fraunces", serif; line-height: 1; }
.countdown-unit span { display: block; margin-top: 5px; color: rgba(255, 247, 223, .62); font: 7px Arial, sans-serif; letter-spacing: .1em; text-transform: uppercase; }


/* =========================================================
   ENTER BUTTON
========================================================= */

.enter-diwali {
  display: flex;
  align-items: center;
  gap: 13px;

  margin-top: 25px;

  padding: 10px 0;

  border: 0;

  border-bottom: 1px solid rgba(255,247,223,.7);

  background: transparent;

  color: white;

  cursor: pointer;

  text-align: left;
}

.enter-diwali strong {
  display: block;

  font-family: "Fraunces", serif;

  font-size: 18px;
}

.enter-diwali small {
  display: block;

  margin-top: 3px;

  color: rgba(255,255,255,.5);

  font-size: 8px;
}

.enter-diwali b {
  margin-left: 25px;

  color: var(--gold);

  font-size: 20px;
}


/* =========================================================
   MINI DIYA
========================================================= */

.mini-diya {
  position: relative;

  width: 44px;
  height: 36px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.mini-diya::after {
  content: "";

  width: 42px;
  height: 18px;

  border-radius:
    5px
    5px
    50%
    50%;

  background:
    linear-gradient(
      #d98138,
      #963d1e
    );
}

.mini-flame {
  position: absolute;

  z-index: 2;

  bottom: 12px;

  width: 13px;
  height: 22px;

  border-radius:
    60%
    40%
    60%
    40%;

  background:
    linear-gradient(
      #fff4a0,
      #ffb21c,
      #f35d21
    );

  transform: rotate(5deg);

  animation:
    flameDance
    .6s
    ease-in-out
    infinite alternate;

  box-shadow:
    0 0 16px #ffb21c;
}


/* =========================================================
   LARGE DIYA
========================================================= */

.arrival-diya-area {
  position: absolute;

  z-index: 10;

  right: 5%;

  top: 150px;

  width: 48%;

  height: 600px;

  display: flex;

  align-items: center;

  justify-content: center;
}

.rangoli-halo {
  position: absolute;

  width: 430px;
  height: 430px;

  border:
    1px dashed
    rgba(244,201,93,.5);

  border-radius: 50%;

  animation:
    rangoliSpin
    35s
    linear
    infinite;
}

.rangoli-halo::before,
.rangoli-halo::after {
  content: "";

  position: absolute;

  inset: 30px;

  border:
    1px dotted
    rgba(238,102,140,.5);

  border-radius: 50%;
}

.rangoli-halo::after {
  inset: 70px;

  border-color:
    rgba(101,185,255,.4);
}

.rangoli-halo span {
  position: absolute;

  color: var(--gold);

  font-size: 25px;
}

.rangoli-halo span:nth-child(1) {
  top: -13px;
  left: 50%;
}

.rangoli-halo span:nth-child(2) {
  right: 10%;
  top: 20%;
}

.rangoli-halo span:nth-child(3) {
  right: -10px;
  top: 50%;
}

.rangoli-halo span:nth-child(4) {
  right: 10%;
  bottom: 20%;
}

.rangoli-halo span:nth-child(5) {
  bottom: -13px;
  left: 50%;
}

.rangoli-halo span:nth-child(6) {
  left: 10%;
  bottom: 20%;
}

.rangoli-halo span:nth-child(7) {
  left: -10px;
  top: 50%;
}

.rangoli-halo span:nth-child(8) {
  left: 10%;
  top: 20%;
}

@keyframes rangoliSpin {
  to {
    transform: rotate(360deg);
  }
}

.large-diya {
  position: relative;

  z-index: 5;

  width: 240px;

  height: 190px;
}

.diya-bowl {
  position: absolute;

  left: 10px;
  bottom: 20px;

  width: 220px;
  height: 90px;

  border-radius:
    15%
    15%
    50%
    50%;

  background:
    linear-gradient(
      180deg,
      #f19a43,
      #9a3c1f
    );

  border:
    2px solid
    rgba(255,224,143,.5);

  box-shadow:
    0 20px 45px
    rgba(243,123,53,.3);
}

.diya-bowl::after {
  content: "";

  position: absolute;

  left: 35px;
  right: 35px;
  top: 14px;

  height: 7px;

  border-radius: 50%;

  background: #652719;
}

.diya-decoration {
  position: relative;

  display: inline-block;

  margin:
    28px 18px 0;

  color: #ffd966;
}

.diya-flame {
  position: absolute;

  z-index: 5;

  left: 50%;

  bottom: 95px;

  width: 80px;
  height: 125px;

  transform:
    translateX(-50%);

  filter:
    drop-shadow(
      0 0 30px
      rgba(255,176,35,.7)
    );

  animation:
    flameDance
    .7s
    ease-in-out
    infinite
    alternate;
}

.diya-flame::before {
  content: "";

  position: absolute;

  inset: 10px 15px;

  border-radius:
    60%
    40%
    60%
    40%;

  background:
    linear-gradient(
      #fffde0,
      #ffd52f 45%,
      #f26d22
    );
}

.diya-flame i {
  position: absolute;

  left: 32px;
  bottom: 20px;

  width: 18px;
  height: 58px;

  border-radius: 50%;

  background: white;

  z-index: 3;

  filter: blur(1px);
}

.diya-flame b {
  position: absolute;

  left: 29px;
  top: 20px;

  width: 25px;
  height: 45px;

  border-radius: 50%;

  background:
    rgba(255,255,255,.9);

  filter: blur(5px);

  z-index: 4;
}

@keyframes flameDance {
  from {
    transform:
      translateX(-50%)
      rotate(-4deg)
      scale(.94);
  }

  to {
    transform:
      translateX(-50%)
      rotate(5deg)
      scale(1.06);
  }
}

.diya-shadow {
  position: absolute;

  bottom: 0;
  left: 10px;

  width: 220px;
  height: 25px;

  border-radius: 50%;

  background:
    rgba(0,0,0,.45);

  filter: blur(10px);
}


/* =========================================================
   PHOTO CARD
========================================================= */

.arrival-photo-card {
  position: absolute;

  z-index: 12;

  right: -1%;

  bottom: 40px;

  width: 190px;

  padding: 9px;

  background: #fff8e8;

  color: #171522;

  transform: rotate(4deg);

  box-shadow:
    0 15px 35px
    rgba(0,0,0,.3);
}

.arrival-photo-card img {
  width: 100%;
  height: 170px;

  object-fit: cover;
}

.arrival-photo-card div {
  padding: 10px 5px 4px;
}

.arrival-photo-card small {
  color: #a76e13;

  font-size: 7px;

  letter-spacing: 1px;
}

.arrival-photo-card strong {
  display: block;

  margin-top: 6px;

  font-family: "Fraunces", serif;

  font-size: 17px;

  line-height: 1;
}


/* =========================================================
   SOUND
========================================================= */

.sound-control {
  display: flex;

  align-items: center;

  gap: 14px;

  width: 325px;

  margin-top: 20px;

  padding: 12px 15px;

  border:
    1px solid
    rgba(244,201,93,.25);

  background:
    rgba(255,255,255,.06);

  color: white;

  cursor: pointer;

  text-align: left;

  backdrop-filter: blur(8px);
}

.sound-control > span {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  border-radius: 50%;

  background: var(--gold);

  color: var(--night);

  font-size: 19px;
}

.sound-control small {
  color: var(--gold);

  font-size: 7px;

  letter-spacing: 1.5px;
}

.sound-control strong {
  display: block;

  margin-top: 3px;

  font-family: "Fraunces", serif;

  font-size: 15px;
}

.sound-bars {
  display: flex;

  align-items: center;

  gap: 2px;

  height: 23px;

  margin-top: 5px;
}

.sound-bars i {
  width: 2px;
  height: 4px;

  background: var(--gold);
}

.sound-bars .bar-active {
  animation:
    soundBar
    .5s
    infinite
    alternate;
}

.sound-bars i:nth-child(2n) {
  animation-delay: .1s;
}

.sound-bars i:nth-child(3n) {
  animation-delay: .2s;
}

@keyframes soundBar {
  to {
    height: 20px;
  }
}


/* =========================================================
   ARRIVAL FOOTER
========================================================= */

.arrival-footer {
  position: absolute;

  z-index: 20;

  bottom: 20px;

  left: 7vw;
  right: 7vw;

  display: flex;

  justify-content: space-between;

  color:
    rgba(255,255,255,.45);

  font-size: 7px;

  letter-spacing: 1.5px;
}


/* =========================================================
   MEANING
========================================================= */

.meaning-layout {
  display: grid;

  grid-template-columns:
    43% 57%;

  gap: 5%;

  align-items: center;

  padding:
    45px
    7vw
    25px;
}

.meaning-photo {
  position: relative;

  padding: 10px;

  background: #171d38;

  transform: rotate(-1.5deg);

  box-shadow:
    12px 20px 40px
    rgba(0,0,0,.15);
}

.meaning-photo img {
  width: 100%;
  height: 470px;

  object-fit: cover;
}

.photo-stamp {
  position: absolute;

  top: 25px;
  left: -12px;

  padding: 8px 12px;

  background: #d98b37;

  color: white;

  font-size: 7px;

  letter-spacing: 1.5px;
}

.meaning-copy > span {
  color: #a76e13;

  font-size: 8px;

  letter-spacing: 2px;
}

.meaning-copy h3 {
  margin: 15px 0;

  font-family: "Fraunces", serif;

  font-size: 45px;

  line-height: .9;
}

.meaning-copy h3 em {
  color: #a94d26;

  font-style: normal;
}

.meaning-copy p {
  color: #504a45;

  font-size: 15px;

  line-height: 1.8;
}

.meaning-copy .large-copy {
  font-family: "Fraunces", serif;

  font-size: 20px;

  line-height: 1.55;
}

.meaning-facts {
  display: grid;

  grid-template-columns:
    repeat(3,1fr);

  margin-top: 25px;

  border-top:
    1px solid #e7dcc6;

  border-bottom:
    1px solid #e7dcc6;
}

.meaning-facts div {
  padding: 14px;

  border-right:
    1px solid #e7dcc6;
}

.meaning-facts div:last-child {
  border-right: 0;
}

.meaning-facts strong {
  display: block;

  color: #a94d26;

  font-family: "Fraunces", serif;

  font-size: 20px;
}

.meaning-facts span {
  display: block;

  margin-top: 4px;

  color: #a76e13;

  font-size: 7px;

  letter-spacing: 1.5px;
}

.meaning-facts small {
  display: block;

  margin-top: 4px;

  color: #766e67;

  font-size: 8px;
}


/* =========================================================
   NOTES
========================================================= */

.meaning-notes {
  display: grid;

  grid-template-columns:
    27% 73%;

  margin:
    30px 7vw 0;

  padding-top: 25px;

  border-top:
    1px solid #e7dcc6;
}

.notes-heading span {
  color: #a76e13;

  font-size: 7px;

  letter-spacing: 1.5px;
}

.notes-heading h3 {
  margin: 10px 0;

  font-family: "Fraunces", serif;

  font-size: 32px;

  line-height: .9;
}

.notes-heading p {
  max-width: 260px;

  color: #766e67;

  font-size: 10px;

  line-height: 1.6;
}

.diwali-note-grid {
  display: grid;

  grid-template-columns:
    repeat(3,1fr);

  gap: 14px;
}

.meaning-card {
  min-height: 230px;

  padding:
    0
    18px
    18px;

  border: 0;

  cursor: pointer;

  text-align: left;

  transition:
    transform .25s;
}

.meaning-card:hover {
  transform:
    translateY(-7px)
    rotate(0);
}

.meaning-card > div {
  height: 90px;

  margin:
    0
    -18px
    15px;

  overflow: hidden;
}

.meaning-card img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.meaning-card > span {
  color: #a94d26;

  font-size: 7px;

  letter-spacing: 1.5px;
}

.meaning-card strong {
  display: block;

  margin-top: 10px;

  font-family: "Fraunces", serif;

  font-size: 19px;

  line-height: 1;
}

.meaning-card small {
  display: block;

  margin-top: 17px;

  color: #766e67;

  font-size: 8px;
}

.card-0 {
  background: #f3dfb5;
  transform: rotate(-1.5deg);
}

.card-1 {
  background: #dedcf0;
  transform: rotate(1deg);
}

.card-2 {
  background: #f1d5c8;
  transform: rotate(-.5deg);
}

.card-3 {
  background: #d9e6d7;
  transform: rotate(1.2deg);
}

.card-4 {
  background: #d5e4ef;
  transform: rotate(-1deg);
}

.card-5 {
  background: #eed9df;
  transform: rotate(.7deg);
}


/* =========================================================
   MOMENTS
========================================================= */

.moment-intro {
  display: flex;

  align-items: end;

  justify-content: space-between;

  padding:
    30px 7vw 15px;
}

.moment-intro p {
  max-width: 720px;

  margin: 0;

  color: #504a45;

  font-family: "Fraunces", serif;

  font-size: 19px;

  line-height: 1.5;
}

.moment-intro strong {
  max-width: 350px;

  color: #a94d26;

  font-size: 8px;

  line-height: 1.7;

  letter-spacing: 1px;
}


/* =========================================================
   MOMENT SELECTOR
========================================================= */

.moment-selector {
  position: relative;

  display: grid;

  grid-template-columns:
    repeat(5,1fr);

  gap: 12px;

  margin:
    20px 7vw 0;

  padding:
    30px
    10px;
}

.moment-line {
  position: absolute;

  left: 5%;
  right: 5%;

  top: 50%;

  height: 2px;

  background:
    linear-gradient(
      90deg,
      #65b9ff,
      #b38cff,
      #f4c95d,
      #ef668c,
      #75d18a
    );

  opacity: .55;
}

.moment-selector button {
  position: relative;

  min-height: 170px;

  padding: 0;

  border: 0;

  background: transparent;

  cursor: pointer;

  text-align: left;
}

.moment-selector button > span {
  position: absolute;

  z-index: 4;

  top: -10px;
  left: 10px;

  color: #a94d26;

  font-family: "Fraunces", serif;

  font-size: 25px;
}

.moment-selector button > div {
  position: absolute;

  inset: 0;

  padding:
    25px
    15px
    15px;

  border:
    1px solid
    rgba(50,30,10,.1);

  box-shadow:
    0 8px 20px
    rgba(50,35,20,.07);

  transition: .25s;
}

.moment-selector button:nth-child(2) > div {
  background: #dce6f1;
  transform: rotate(-2deg);
}

.moment-selector button:nth-child(3) > div {
  background: #f1dfb8;
  transform: rotate(1.5deg);
}

.moment-selector button:nth-child(4) > div {
  background: #efd1c7;
  transform: rotate(-1deg);
}

.moment-selector button:nth-child(5) > div {
  background: #dce8d8;
  transform: rotate(1.5deg);
}

.moment-selector button:nth-child(6) > div {
  background: #ead8e8;
  transform: rotate(-1.5deg);
}

.moment-selector button:hover > div,
.moment-selector button.active > div {
  transform:
    translateY(-8px)
    rotate(0);

  box-shadow:
    0 17px 35px
    rgba(50,35,20,.13);
}

.moment-selector small {
  display: block;

  color: #a76e13;

  font-size: 7px;

  letter-spacing: 1.2px;
}

.moment-selector strong {
  display: block;

  margin-top: 8px;

  font-family: "Fraunces", serif;

  font-size: 19px;

  line-height: .95;
}

.moment-selector em {
  display: block;

  margin-top: 4px;

  color: #766e67;

  font-family:
    "Noto Serif Devanagari",
    serif;

  font-size: 10px;

  font-style: normal;
}

.moment-selector label {
  display: inline-block;

  margin-top: 8px;

  padding: 4px 6px;

  background: #9d4728;

  color: white;

  font-size: 6px;

  letter-spacing: 1px;
}


/* =========================================================
   MOMENT DETAIL
========================================================= */

.moment-detail {
  display: grid;

  grid-template-columns:
    90px 1fr 310px;

  align-items: center;

  min-height: 310px;

  margin:
    15px 7vw 0;

  padding:
    30px 40px;

  border:
    1px solid #e7dcc6;

  background:
    linear-gradient(
      120deg,
      #fffaf0,
      #f6ecd6
    );
}

.moment-number {
  color: #a94d26;

  font-family: "Fraunces", serif;

  font-size: 68px;
}

.moment-content > span {
  color: #a76e13;

  font-size: 8px;

  letter-spacing: 1.6px;
}

.moment-content h3 {
  margin: 5px 0 0;

  font-family: "Fraunces", serif;

  font-size: 50px;

  line-height: .9;
}

.moment-native {
  color: #d08a20;

  font-family:
    "Noto Serif Devanagari",
    serif;

  font-size: 18px;
}

.moment-content p {
  max-width: 750px;

  margin-top: 14px;

  color: #504a45;

  font-size: 14px;

  line-height: 1.8;
}

.moment-image {
  position: relative;

  height: 220px;

  overflow: hidden;

  transform: rotate(2deg);
}

.moment-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.image-glow {
  position: absolute;

  inset: 0;

  box-shadow:
    inset 0 0 40px
    rgba(244,201,93,.2);
}

.video-open-button {
  margin-top: 10px;

  padding: 10px 15px;

  border: 0;

  background: #a94d26;

  color: white;

  cursor: pointer;

  font-size: 10px;
}

.moment-tip {
  display: flex;

  gap: 20px;

  align-items: center;

  margin:
    20px 7vw 0;

  padding:
    15px 20px;

  background: #151b34;

  color: white;
}

.moment-tip span {
  color: var(--gold);

  font-size: 7px;

  letter-spacing: 1.5px;
}

.moment-tip strong {
  font-family: "Fraunces", serif;

  font-size: 14px;
}


/* =========================================================
   TRADITIONS
========================================================= */

.tradition-intro {
  display: flex;

  justify-content: space-between;

  align-items: end;

  padding:
    30px 7vw 12px;
}

.tradition-intro p {
  max-width: 750px;

  margin: 0;

  color: #504a45;

  font-family: "Fraunces", serif;

  font-size: 19px;

  line-height: 1.5;
}

.tradition-intro span {
  color: #a76e13;

  font-size: 7px;

  letter-spacing: 1.5px;
}


/* =========================================================
   TRADITION COLLAGE
========================================================= */

.tradition-grid {
  display: grid;

  grid-template-columns:
    1.2fr .8fr .8fr;

  grid-template-rows:
    230px 230px 200px;

  gap: 10px;

  margin:
    15px 7vw 0;
}

.tradition-object {
  position: relative;

  overflow: hidden;

  padding: 0;

  border:
    1px solid #e7dcc6;

  background: #161c35;

  cursor: pointer;

  text-align: left;
}

.tradition-object img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition:
    transform .45s;
}

.tradition-object:hover img {
  transform: scale(1.06);
}

.tradition-0 {
  grid-row: span 2;
}

.tradition-5 {
  grid-column: span 2;
}

.tradition-overlay {
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  padding: 20px;

  color: white;

  background:
    linear-gradient(
      transparent,
      rgba(4,5,15,.94)
    );
}

.tradition-overlay span {
  font-size: 7px;

  letter-spacing: 1.5px;

  color: var(--gold);
}

.tradition-overlay strong {
  display: block;

  margin-top: 4px;

  font-family: "Fraunces", serif;

  font-size: 23px;
}

.tradition-overlay small {
  display: block;

  margin-top: 4px;

  font-size: 8px;
}

.tradition-icon {
  position: absolute;

  top: 12px;
  right: 12px;

  width: 40px;
  height: 40px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    rgba(9,11,25,.75);

  border:
    1px solid
    rgba(244,201,93,.5);

  color: var(--gold);

  font-size: 18px;
}


/* =========================================================
   SWEETS
========================================================= */

.sweet-section {
  display: grid;

  grid-template-columns:
    35% 65%;

  margin:
    25px 7vw 0;

  padding:
    20px 0;

  border-top:
    1px solid #e7dcc6;

  border-bottom:
    1px solid #e7dcc6;
}

.sweet-section > div:first-child > span {
  color: #a76e13;

  font-size: 7px;

  letter-spacing: 1.5px;
}

.sweet-section h3 {
  margin: 5px 0;

  font-family: "Fraunces", serif;

  font-size: 30px;
}

.sweet-section p {
  max-width: 420px;

  color: #504a45;

  font-size: 13px;

  line-height: 1.7;
}

.sweet-list {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 7px;
}

.sweet-list span {
  padding:
    8px 12px;

  border:
    1px solid
    #d39a35;

  color: #966516;

  font-family: "Fraunces", serif;

  font-size: 13px;
}


/* =========================================================
   FINAL
========================================================= */

.final-page {
  background:
    radial-gradient(
      circle at 70% 40%,
      rgba(244,201,93,.09),
      transparent 30%
    ),
    #fffaf0;
}

.final-spread {
  display: grid;

  grid-template-columns:
    50% 50%;

  margin:
    35px 7vw 0;

  background: #11162d;
}

.final-image {
  position: relative;

  min-height: 430px;

  overflow: hidden;
}

.final-image img {
  width: 100%;
  height: 100%;

  min-height: 430px;

  object-fit: cover;
}

.final-photo-note {
  position: absolute;

  right: 20px;
  bottom: 20px;

  width: 190px;

  padding: 15px;

  background: #f2d486;

  color: #33220e;

  transform: rotate(3deg);
}

.final-photo-note small {
  color: #8c5017;

  font-size: 7px;

  letter-spacing: 1px;
}

.final-photo-note strong {
  display: block;

  margin-top: 6px;

  font-family: "Fraunces", serif;

  font-size: 17px;

  line-height: 1;
}

.final-copy {
  display: flex;

  flex-direction: column;

  justify-content: center;

  padding:
    50px 6vw;

  color: white;
}

.final-copy > span {
  color: var(--gold);

  font-size: 8px;

  letter-spacing: 2px;
}

.final-copy h3 {
  margin: 15px 0;

  font-family: "Fraunces", serif;

  font-size: 68px;

  line-height: .67;
}

.final-copy h3 em {
  color: var(--gold);

  font-style: normal;
}

.final-copy p {
  max-width: 450px;

  color: rgba(255,255,255,.7);

  font-size: 14px;

  line-height: 1.8;
}

.final-diya-row {
  display: flex;

  gap: 12px;

  margin:
    20px 0;
}

.tiny-diya {
  position: relative;

  width: 25px;
  height: 18px;

  border-radius:
    3px
    3px
    50%
    50%;

  background:
    linear-gradient(
      #f19a43,
      #9a3c1f
    );
}

.tiny-diya i {
  position: absolute;

  left: 9px;
  bottom: 12px;

  width: 7px;
  height: 13px;

  border-radius: 50%;

  background:
    linear-gradient(
      white,
      #ffd52f,
      #f26d22
    );

  animation:
    tinyFlame
    .5s
    infinite
    alternate;

  box-shadow:
    0 0 9px
    #ffb21c;
}

@keyframes tinyFlame {
  from {
    transform:
      rotate(-4deg)
      scale(.85);
  }

  to {
    transform:
      rotate(5deg)
      scale(1.1);
  }
}

.final-native {
  color: var(--gold);

  font-family:
    "Noto Serif Devanagari",
    serif;

  font-size: 25px;
}

.final-copy > small {
  margin-top: 5px;

  color:
    rgba(255,255,255,.5);

  letter-spacing: 2px;
}

.final-message {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin:
    20px 7vw 0;

  padding-bottom: 25px;
}

.final-message span {
  color: #d39a35;

  font-size: 20px;
}

.final-message strong {
  max-width: 500px;

  color: #a94d26;

  font-family: "Fraunces", serif;

  font-size: 15px;

  text-align: center;
}


/* =========================================================
   FIREWORKS
========================================================= */

.fireworks-layer {
  position: fixed;

  z-index: 1200;

  inset: 0;

  pointer-events: none;

  overflow: hidden;
}

.firework {
  position: absolute;

  width: 10px;
  height: 10px;

  animation:
    fireworkBurst
    2.2s
    ease-out
    forwards;
}

.firework i {
  position: absolute;

  left: 4px;
  top: 4px;

  width: 3px;
  height: 100px;

  transform-origin:
    50% 0;

  background:
    linear-gradient(
      transparent,
      #ffd85a,
      transparent
    );

  opacity: 0;

  animation:
    fireworkRay
    2.2s
    ease-out
    forwards;
}

/* Colourful Diwali bursts — same firework shape, more variety */
.firework-0 i, .firework-6 i { background: linear-gradient(transparent, #ff4f81, transparent); }
.firework-1 i, .firework-7 i { background: linear-gradient(transparent, #63c7ff, transparent); }
.firework-2 i, .firework-8 i { background: linear-gradient(transparent, #ffe45c, transparent); }
.firework-3 i, .firework-9 i { background: linear-gradient(transparent, #a879ff, transparent); }
.firework-4 i { background: linear-gradient(transparent, #63e68a, transparent); }
.firework-5 i { background: linear-gradient(transparent, #ff934d, transparent); }

.firework-7 { left: 38%; top: 18%; animation-delay: 1.1s; }
.firework-8 { left: 88%; top: 38%; animation-delay: 1.45s; }
.firework-9 { left: 54%; top: 72%; animation-delay: 1.8s; }

.firework-0 {
  left: 20%;
  top: 28%;
}

.firework-1 {
  left: 72%;
  top: 25%;

  animation-delay: .25s;
}

.firework-2 {
  left: 48%;
  top: 42%;

  animation-delay: .5s;
}

.firework-3 {
  left: 83%;
  top: 60%;

  animation-delay: .75s;
}

.firework-4 {
  left: 30%;
  top: 65%;

  animation-delay: .9s;
}

.firework-5 {
  left: 60%;
  top: 15%;

  animation-delay: .4s;
}

.firework-6 {
  left: 10%;
  top: 50%;

  animation-delay: .7s;
}

@keyframes fireworkBurst {
  0% {
    transform: scale(.1);
    opacity: 1;
  }

  60% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

@keyframes fireworkRay {
  0% {
    opacity: 0;
    height: 10px;
  }

  30% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    height: 100px;
  }
}


/* =========================================================
   MODALS
========================================================= */

.diwali-modal-backdrop {
  position: fixed;

  z-index: 2000;

  inset: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 30px;

  background:
    rgba(3,4,12,.78);

  backdrop-filter: blur(10px);
}

.diwali-modal,
.diwali-video-modal {
  position: relative;

  width:
    min(850px,100%);

  max-height: 90vh;

  overflow: auto;

  background:
    #fffaf0;

  color: #171522;

  box-shadow:
    0 30px 100px
    rgba(0,0,0,.5);
}

.diwali-modal > img {
  width: 100%;

  max-height: 350px;

  object-fit: cover;
}

.modal-close {
  position: absolute;

  z-index: 10;

  top: 15px;
  right: 15px;

  width: 38px;
  height: 38px;

  border:
    1px solid
    #dfcfae;

  border-radius: 50%;

  background: white;

  color: #a94d26;

  cursor: pointer;

  font-size: 20px;
}

.modal-content {
  padding:
    40px 55px 50px;
}

.modal-content > span,
.video-modal-title > span {
  color: #a76e13;

  font-size: 8px;

  letter-spacing: 2px;
}

.modal-content h2,
.video-modal-title h2 {
  margin: 13px 0;

  font-family: "Fraunces", serif;

  font-size: 52px;

  font-weight: 500;
}

.modal-star {
  color: #d39a35;

  font-size: 20px;
}

.modal-content p,
.video-modal-description {
  color: #504a45;

  font-size: 17px;

  line-height: 1.85;
}


/* =========================================================
   VIDEO MODAL
========================================================= */

.video-modal-title {
  padding:
    40px 45px 20px;
}

.youtube-frame {
  width: 100%;

  aspect-ratio: 16 / 9;

  background: #05060b;
}

.youtube-frame iframe {
  width: 100%;
  height: 100%;

  border: 0;
}

.video-coming-soon {
  min-height: 350px;

  margin:
    0 45px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  padding: 30px;

  background:
    radial-gradient(
      circle,
      #2b3157,
      #10152b
    );

  color: white;

  text-align: center;
}

.video-play {
  width: 70px;
  height: 70px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: var(--gold);

  color: #11152a;

  font-size: 24px;

  box-shadow:
    0 0 35px
    rgba(244,201,93,.35);
}

.video-coming-soon h3 {
  margin-bottom: 0;

  font-family: "Fraunces", serif;

  font-size: 30px;
}

.video-coming-soon p {
  max-width: 450px;

  color: rgba(255,255,255,.7);

  line-height: 1.7;
}

.video-coming-soon code {
  padding:
    7px 10px;

  background:
    rgba(255,255,255,.08);

  color: var(--gold);

  font-size: 11px;
}

.video-modal-description {
  padding:
    0 45px 30px;
}


/* =========================================================
   NAVIGATION
========================================================= */

.diwali-nav {
  position: fixed;

  z-index: 1500;

  left: 50%;
  bottom: 18px;

  transform:
    translateX(-50%);

  display: flex;

  align-items: center;

  gap: 20px;

  padding:
    9px 15px;

  background:
    rgba(12,14,30,.95);

  border:
    1px solid
    rgba(244,201,93,.3);

  box-shadow:
    0 10px 40px
    rgba(0,0,0,.3);
}

.diwali-nav > button {
  border: 0;

  background: transparent;

  color: var(--gold);

  cursor: pointer;

  font-size: 18px;
}

.diwali-nav > button:disabled {
  opacity: .25;

  cursor: default;
}

.diwali-nav > div {
  display: flex;

  gap: 12px;
}

.diwali-nav > div button {
  border: 0;

  background: transparent;

  color: rgba(255,255,255,.45);

  cursor: pointer;

  font-size: 8px;
}

.diwali-nav > div button.selected {
  color: var(--gold);

  transform: scale(1.3);
}


/* =========================================================
   NEXT
========================================================= */

.next-diwali {
  display: block;

  margin:
    18px 7vw 0 auto;

  padding:
    8px 0;

  border: 0;

  border-bottom:
    1px solid #171522;

  background: transparent;

  color: #171522;

  cursor: pointer;

  font-family: "Fraunces", serif;

  font-size: 15px;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1100px) {

  .diwali-arrival-copy {
    width: 60%;
  }

  .arrival-diya-area {
    right: 0;
    width: 45%;
  }

  .meaning-layout {
    grid-template-columns: 1fr;
  }

  .meaning-photo {
    max-width: 650px;
  }

  .meaning-notes {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .moment-selector {
    grid-template-columns:
      repeat(3,1fr);
  }

  .moment-line {
    display: none;
  }

  .moment-detail {
    grid-template-columns:
      70px 1fr 250px;
  }

  .tradition-grid {
    grid-template-columns:
      1fr 1fr;
  }

  .tradition-0,
  .tradition-5 {
    grid-column: auto;
    grid-row: auto;
  }

  .sweet-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}


@media (max-width: 700px) {

  .diwali-header {
    top: 58px;

    padding: 0 15px;
  }

  .diwali-place,
  .diwali-brand span {
    display: none;
  }

  .diwali-back {
    top: 72px;
  }

  .diwali-scrapbook {
    padding:
      125px 10px 90px;
  }

  .diwali-section-title {
    padding:
      40px 25px 25px;
  }

  .diwali-section-title h2 {
    font-size: 52px;
  }

  .section-native {
    display: none;
  }

  .diwali-arrival-copy {
    width: 100%;

    padding:
      80px 25px 30px;
  }

  .diwali-arrival-copy h1 {
    font-size: 78px;
  }

  .arrival-diya-area {
    position: relative;

    top: auto;
    right: auto;

    width: 100%;

    height: 480px;
  }

  .arrival {
    min-height: 1050px;
  }

  .arrival-description {
    font-size: 17px;
  }

  .sound-control {
    width: 100%;
  }

  .arrival-footer {
    left: 25px;
    right: 25px;

    bottom: 15px;

    gap: 10px;
  }

  .arrival-footer span:nth-child(2) {
    display: none;
  }

  .meaning-layout {
    padding:
      30px 25px;
  }

  .meaning-photo img {
    height: 360px;
  }

  .meaning-facts {
    grid-template-columns:
      1fr;
  }

  .meaning-facts div {
    border-right: 0;

    border-bottom:
      1px solid #e7dcc6;
  }

  .diwali-note-grid {
    grid-template-columns:
      1fr;
  }

  .meaning-notes {
    margin:
      25px;
  }

  .moment-intro,
  .tradition-intro {
    display: block;

    padding:
      25px;
  }

  .moment-selector {
    grid-template-columns:
      1fr 1fr;

    margin:
      15px 25px;
  }

  .moment-detail {
    grid-template-columns:
      55px 1fr;

    margin:
      15px 25px;

    padding: 25px;
  }

  .moment-image {
    display: none;
  }

  .moment-content h3 {
    font-size: 40px;
  }

  .moment-tip {
    margin:
      20px 25px;

    display: block;
  }

  .tradition-grid {
    grid-template-columns:
      1fr;

    grid-template-rows:
      repeat(6,230px);

    margin:
      15px 25px;
  }

  .tradition-0,
  .tradition-5 {
    grid-column: auto;
    grid-row: auto;
  }

  .sweet-section {
    margin:
      25px;
  }

  .final-spread {
    grid-template-columns:
      1fr;

    margin:
      25px;
  }

  .final-image {
    min-height: 330px;
  }

  .final-image img {
    min-height: 330px;
  }

  .final-copy {
    padding:
      45px 30px;
  }

  .final-copy h3 {
    font-size: 58px;
  }

  .final-message {
    margin:
      20px 25px;
  }

  .diwali-modal-backdrop {
    padding: 15px;
  }

  .modal-content {
    padding:
      30px 25px 40px;
  }

  .modal-content h2,
  .video-modal-title h2 {
    font-size: 40px;
  }

  .video-modal-title {
    padding:
      35px 25px 20px;
  }

  .video-coming-soon {
    margin:
      0 25px;
  }

  .video-modal-description {
    padding:
      0 25px 30px;
  }

  .tuni-bulb {
    width: 8px;
    height: 12px;
  }

  .diwali-nav {
    gap: 10px;
  }

}


/* =========================================================
   DIWALI INSIDE-PAGE JEWEL SCRAPBOOK
========================================================= */
.diwali-page-section:not(.arrival) {
  background:
    radial-gradient(circle at 12% 18%, rgba(103,76,190,.20), transparent 24%),
    radial-gradient(circle at 88% 12%, rgba(238,91,142,.15), transparent 22%),
    radial-gradient(circle at 70% 88%, rgba(37,177,183,.10), transparent 25%),
    linear-gradient(135deg,#11152d 0%,#171a39 48%,#10152b 100%);
  color:#f8f4ff;
  border-color:rgba(255,255,255,.10);
  box-shadow:0 30px 100px rgba(0,0,0,.42);
}
.diwali-page-section:not(.arrival)::after {
  content:""; position:absolute; inset:18px; pointer-events:none;
  border:1px solid rgba(255,255,255,.055);
}
.diwali-page-section:not(.arrival) .diwali-section-title { border-bottom-color:rgba(255,255,255,.12); }
.diwali-page-section:not(.arrival) .section-meta,
.diwali-page-section:not(.arrival) .notes-heading span,
.diwali-page-section:not(.arrival) .sweet-section > div:first-child > span { color:#ffd45f; }
.diwali-page-section:not(.arrival) .diwali-section-title h2,
.diwali-page-section:not(.arrival) .notes-heading h3,
.diwali-page-section:not(.arrival) .sweet-section h3,
.diwali-page-section:not(.arrival) .moment-content h3,
.diwali-page-section:not(.arrival) .meaning-copy h3 { color:#fff8ea; }
.diwali-page-section:not(.arrival) .diwali-section-title h2 em { color:#ff7fa7; }
.diwali-page-section:not(.arrival) .section-native { color:#70d8ff; }
.diwali-page-section:not(.arrival) p,
.diwali-page-section:not(.arrival) .notes-heading p,
.diwali-page-section:not(.arrival) .meaning-copy p,
.diwali-page-section:not(.arrival) .moment-intro p,
.diwali-page-section:not(.arrival) .moment-content p,
.diwali-page-section:not(.arrival) .tradition-intro p,
.diwali-page-section:not(.arrival) .sweet-section p { color:rgba(241,239,255,.72); }
.diwali-page-section:not(.arrival) .meaning-facts div,
.diwali-page-section:not(.arrival) .meaning-notes,
.diwali-page-section:not(.arrival) .sweet-section { border-color:rgba(255,255,255,.12); }

/* Creative keepsake cards — no yellow Durga-style rectangles. */
.diwali-page-section:not(.arrival) .meaning-card {
  position:relative; min-height:250px; padding:0 17px 18px; overflow:hidden;
  border:1px solid rgba(255,255,255,.14); border-radius:18px 18px 8px 8px;
  color:#fff; background:linear-gradient(160deg,rgba(35,41,83,.96),rgba(15,20,45,.96));
  box-shadow:0 14px 30px rgba(0,0,0,.24);
}
.diwali-page-section:not(.arrival) .meaning-card::before {
  content:"✦"; position:absolute; right:13px; top:8px; z-index:2;
  color:rgba(255,255,255,.65); font-size:15px;
}
.diwali-page-section:not(.arrival) .meaning-card::after {
  content:""; position:absolute; left:18px; right:18px; bottom:8px; height:2px;
  border-radius:20px; background:linear-gradient(90deg,#ff6d9a,#ffd45f,#69d9ff); opacity:.65;
}
.diwali-page-section:not(.arrival) .meaning-card:hover {
  transform:translateY(-10px) rotate(0deg) scale(1.015);
  box-shadow:0 20px 42px rgba(0,0,0,.34),0 0 25px rgba(112,216,255,.08);
}
.diwali-page-section:not(.arrival) .meaning-card > div { height:112px; margin:0 -17px 15px; position:relative; overflow:hidden; }
.diwali-page-section:not(.arrival) .meaning-card > div::after {
  content:""; position:absolute; inset:0; background:linear-gradient(180deg,transparent 40%,rgba(8,11,29,.7));
}
.diwali-page-section:not(.arrival) .meaning-card img { filter:saturate(1.18) contrast(1.04); transition:transform .45s ease; }
.diwali-page-section:not(.arrival) .meaning-card:hover img { transform:scale(1.08); }
.diwali-page-section:not(.arrival) .meaning-card > span { color:#70d8ff; font-size:7px; letter-spacing:1.7px; }
.diwali-page-section:not(.arrival) .meaning-card strong { color:#fff8ea; font-size:20px; }
.diwali-page-section:not(.arrival) .meaning-card small { color:rgba(255,255,255,.52); }
.diwali-page-section:not(.arrival) .card-0 { background:linear-gradient(160deg,#272057,#141832); transform:rotate(-1.2deg); }
.diwali-page-section:not(.arrival) .card-1 { background:linear-gradient(160deg,#183c4c,#141832); border-color:rgba(105,217,255,.25); transform:translateY(5px); }
.diwali-page-section:not(.arrival) .card-2 { background:linear-gradient(160deg,#4a214b,#17172f); transform:rotate(1.1deg); }
.diwali-page-section:not(.arrival) .card-3 { background:linear-gradient(160deg,#4a3320,#17172f); transform:translateY(-3px) rotate(-.7deg); }
.diwali-page-section:not(.arrival) .card-4 { background:linear-gradient(160deg,#163f39,#131a31); transform:rotate(1.2deg); }
.diwali-page-section:not(.arrival) .card-5 { background:linear-gradient(160deg,#3f2750,#17172f); transform:translateY(4px) rotate(-.6deg); }

.diwali-page-section:not(.arrival) .meaning-layout,
.diwali-page-section:not(.arrival) .meaning-notes,
.diwali-page-section:not(.arrival) .moment-intro,
.diwali-page-section:not(.arrival) .moment-selector,
.diwali-page-section:not(.arrival) .moment-detail,
.diwali-page-section:not(.arrival) .tradition-intro,
.diwali-page-section:not(.arrival) .tradition-grid,
.diwali-page-section:not(.arrival) .sweet-section,
.diwali-page-section:not(.arrival) .final-spread,
.diwali-page-section:not(.arrival) .final-message { position:relative; z-index:2; }
.diwali-page-section:not(.arrival) .meaning-photo,
.diwali-page-section:not(.arrival) .moment-image,
.diwali-page-section:not(.arrival) .final-image { border-color:rgba(255,255,255,.13); box-shadow:0 18px 45px rgba(0,0,0,.28); }
.diwali-page-section:not(.arrival) .sweet-list span { border-color:rgba(255,212,95,.45); background:rgba(255,212,95,.06); color:#ffe7a0; }

/* Crackers/fireworks on inside pages only. */
.firework { animation-duration:1.65s; }
.firework i { width:4px; height:120px; border-radius:50%; filter:drop-shadow(0 0 5px currentColor); animation-duration:1.65s; }
.firework-0 i { background:linear-gradient(transparent,#ff5f9f,transparent); }
.firework-1 i { background:linear-gradient(transparent,#64d9ff,transparent); }
.firework-2 i { background:linear-gradient(transparent,#ffd85a,transparent); }
.firework-3 i { background:linear-gradient(transparent,#b58cff,transparent); }
.firework-4 i { background:linear-gradient(transparent,#69e29a,transparent); }
.firework-5 i { background:linear-gradient(transparent,#ff8b4d,transparent); }
.firework-6 i { background:linear-gradient(transparent,#ff6dce,transparent); }
.firework-7 { left:38%; top:22%; animation-delay:1.05s; }
.firework-7 i { background:linear-gradient(transparent,#6ee7ff,transparent); }
.firework-8 { left:92%; top:38%; animation-delay:1.35s; }
.firework-8 i { background:linear-gradient(transparent,#ffd45f,transparent); }
.firework-9 { left:15%; top:20%; animation-delay:1.7s; }
.firework-9 i { background:linear-gradient(transparent,#ff6d9a,transparent); }


/* =========================================================
   DIWALI INNER SCRAPBOOK — NIGHT MARKET EDITION
   Deliberately different from the Durga Puja cream/yellow pages.
========================================================= */
.diwali-page-section:not(.arrival) {
  background:
    radial-gradient(circle at 18% 12%, rgba(90,78,220,.28), transparent 25%),
    radial-gradient(circle at 84% 18%, rgba(255,76,153,.20), transparent 24%),
    radial-gradient(circle at 55% 92%, rgba(0,210,210,.13), transparent 28%),
    linear-gradient(145deg,#070b1d 0%,#0d1230 42%,#090d21 100%) !important;
  color:#f7f5ff !important;
  border:1px solid rgba(112,216,255,.18) !important;
  box-shadow:0 35px 100px rgba(0,0,0,.55) !important;
}

.diwali-page-section:not(.arrival)::before {
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  opacity:.20;
  background-image:
    radial-gradient(circle at 20px 20px, rgba(255,255,255,.25) 1px, transparent 1.5px),
    linear-gradient(115deg, transparent 0 48%, rgba(101,185,255,.06) 49%, transparent 50%);
  background-size:40px 40px, 170px 170px;
}

/* Replace the old pale scrapbook dividers. */
.diwali-page-section:not(.arrival) .diwali-section-title,
.diwali-page-section:not(.arrival) .meaning-notes,
.diwali-page-section:not(.arrival) .sweet-section {
  border-color:rgba(112,216,255,.16) !important;
}

.diwali-page-section:not(.arrival) .diwali-section-title h2 {
  color:#ffffff !important;
  text-shadow:0 5px 25px rgba(0,0,0,.35);
}
.diwali-page-section:not(.arrival) .diwali-section-title h2 em {
  color:#ff72aa !important;
}
.diwali-page-section:not(.arrival) .section-meta {
  color:#72ddff !important;
}
.diwali-page-section:not(.arrival) .section-native {
  color:#ffd45f !important;
  text-shadow:0 0 15px rgba(255,212,95,.25);
}

/* Page 2: cards become little glowing festival keepsakes. */
.diwali-page-section:not(.arrival) .diwali-note-grid {
  gap:18px !important;
}
.diwali-page-section:not(.arrival) .meaning-card {
  min-height:265px !important;
  border:1px solid rgba(255,255,255,.14) !important;
  border-radius:6px 20px 6px 20px !important;
  padding:0 18px 20px !important;
  background:#111936 !important;
  box-shadow:0 16px 35px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.07) !important;
  transform:none !important;
}
.diwali-page-section:not(.arrival) .meaning-card:nth-child(1){background:linear-gradient(155deg,#241957,#111936) !important;transform:rotate(-1.4deg) !important;}
.diwali-page-section:not(.arrival) .meaning-card:nth-child(2){background:linear-gradient(155deg,#123b51,#101a37) !important;transform:rotate(1deg) translateY(7px) !important;}
.diwali-page-section:not(.arrival) .meaning-card:nth-child(3){background:linear-gradient(155deg,#4a183e,#16152f) !important;transform:rotate(-.8deg) !important;}
.diwali-page-section:not(.arrival) .meaning-card:nth-child(4){background:linear-gradient(155deg,#493018,#15172e) !important;transform:rotate(1.2deg) translateY(-4px) !important;}
.diwali-page-section:not(.arrival) .meaning-card:nth-child(5){background:linear-gradient(155deg,#103e3d,#111a32) !important;transform:rotate(-1deg) !important;}
.diwali-page-section:not(.arrival) .meaning-card:nth-child(6){background:linear-gradient(155deg,#382052,#12182f) !important;transform:rotate(.8deg) translateY(5px) !important;}
.diwali-page-section:not(.arrival) .meaning-card:hover {
  transform:translateY(-12px) rotate(0deg) scale(1.025) !important;
  border-color:rgba(255,212,95,.5) !important;
  box-shadow:0 24px 48px rgba(0,0,0,.5),0 0 28px rgba(112,216,255,.12) !important;
}
.diwali-page-section:not(.arrival) .meaning-card > div {
  height:118px !important;
  margin:0 -18px 17px !important;
  border-radius:0 0 12px 12px;
}
.diwali-page-section:not(.arrival) .meaning-card > span {color:#72ddff !important;}
.diwali-page-section:not(.arrival) .meaning-card strong {color:#fff !important;}
.diwali-page-section:not(.arrival) .meaning-card small {color:rgba(255,255,255,.58) !important;}

/* Page 3: replace the old paper timeline cards with dark glass tiles. */
.diwali-page-section:not(.arrival) .moment-selector button > div {
  background:linear-gradient(145deg,#151e45,#0c122a) !important;
  border:1px solid rgba(255,255,255,.13) !important;
  border-radius:14px !important;
  box-shadow:0 14px 30px rgba(0,0,0,.35) !important;
  transform:none !important;
  transition:transform .3s ease, border-color .3s ease, box-shadow .3s ease !important;
}
.diwali-page-section:not(.arrival) .moment-selector button:nth-child(2) > div {border-top:3px solid #65b9ff !important;}
.diwali-page-section:not(.arrival) .moment-selector button:nth-child(3) > div {border-top:3px solid #b38cff !important;}
.diwali-page-section:not(.arrival) .moment-selector button:nth-child(4) > div {border-top:3px solid #ffd45f !important;}
.diwali-page-section:not(.arrival) .moment-selector button:nth-child(5) > div {border-top:3px solid #ff6d9a !important;}
.diwali-page-section:not(.arrival) .moment-selector button:nth-child(6) > div {border-top:3px solid #69e29a !important;}
.diwali-page-section:not(.arrival) .moment-selector button:hover > div,
.diwali-page-section:not(.arrival) .moment-selector button.active > div {
  transform:translateY(-10px) !important;
  border-color:rgba(255,212,95,.48) !important;
  box-shadow:0 24px 45px rgba(0,0,0,.5),0 0 20px rgba(112,216,255,.10) !important;
}
.diwali-page-section:not(.arrival) .moment-selector button > span {color:#ffd45f !important;}
.diwali-page-section:not(.arrival) .moment-selector small {color:#72ddff !important;}
.diwali-page-section:not(.arrival) .moment-selector strong {color:#fff !important;}
.diwali-page-section:not(.arrival) .moment-selector em {color:rgba(255,255,255,.55) !important;}
.diwali-page-section:not(.arrival) .moment-selector label {background:#ff4f92 !important;border-radius:20px;}
.diwali-page-section:not(.arrival) .moment-line {opacity:.3 !important;}

/* Selected moment is a dark display panel instead of a yellow paper. */
.diwali-page-section:not(.arrival) .moment-detail {
  background:linear-gradient(135deg,#101936,#16112e 60%,#0b172a) !important;
  border:1px solid rgba(112,216,255,.18) !important;
  border-radius:18px !important;
  box-shadow:0 20px 50px rgba(0,0,0,.38) !important;
}
.diwali-page-section:not(.arrival) .moment-number {color:#ff72aa !important;}
.diwali-page-section:not(.arrival) .moment-content > span {color:#72ddff !important;}
.diwali-page-section:not(.arrival) .moment-content h3 {color:#fff !important;}
.diwali-page-section:not(.arrival) .moment-native {color:#ffd45f !important;}
.diwali-page-section:not(.arrival) .video-open-button {background:linear-gradient(90deg,#ff4f92,#8c63ff) !important;border-radius:22px;}

/* Page 4: make the object collage feel like a night bazaar. */
.diwali-page-section:not(.arrival) .tradition-object {
  border:1px solid rgba(255,255,255,.14) !important;
  border-radius:14px !important;
  box-shadow:0 15px 35px rgba(0,0,0,.32) !important;
}
.diwali-page-section:not(.arrival) .tradition-overlay {
  background:linear-gradient(transparent,rgba(5,8,24,.96)) !important;
}
.diwali-page-section:not(.arrival) .tradition-overlay span {color:#72ddff !important;}
.diwali-page-section:not(.arrival) .tradition-overlay strong {color:#fff !important;}

/* Inner photo/text areas become dark glass too. */
.diwali-page-section:not(.arrival) .meaning-photo,
.diwali-page-section:not(.arrival) .final-image,
.diwali-page-section:not(.arrival) .moment-image {
  border:1px solid rgba(255,255,255,.13) !important;
  background:#111936 !important;
}

/* Food pills and final blocks no longer use cream/yellow paper. */
.diwali-page-section:not(.arrival) .sweet-list span {
  background:rgba(114,221,255,.06) !important;
  border-color:rgba(114,221,255,.35) !important;
  color:#c9f4ff !important;
  border-radius:20px !important;
}
.diwali-page-section:not(.arrival) .final-message strong {color:#ffb3ce !important;}

/* Small decorative corner spark on every inside page. */
.diwali-page-section:not(.arrival) .notes-heading::before,
.diwali-page-section:not(.arrival) .tradition-intro::before,
.diwali-page-section:not(.arrival) .moment-intro::before {
  content:"✦  ✧  ✦";
  position:absolute;
  right:7vw;
  top:-3px;
  color:rgba(255,212,95,.35);
  letter-spacing:9px;
  font-size:13px;
}

/* FINAL OVERRIDE: MIDNIGHT RANGOLI */
.diwali-page-section:not(.arrival){background:radial-gradient(circle at 50% 45%,rgba(91,70,210,.24),transparent 28%),radial-gradient(circle at 15% 20%,rgba(255,52,137,.18),transparent 22%),radial-gradient(circle at 86% 78%,rgba(0,220,190,.14),transparent 24%),repeating-conic-gradient(from 12deg at 50% 48%,rgba(255,255,255,.025) 0 3deg,transparent 3deg 15deg),#080b20!important;color:#f8f5ff!important;border:1px solid rgba(132,102,255,.28)!important;box-shadow:inset 0 0 120px rgba(49,31,129,.18),0 35px 100px rgba(0,0,0,.6)!important}
.diwali-page-section:not(.arrival)::before{content:"";position:absolute;width:520px;height:520px;left:50%;top:47%;transform:translate(-50%,-50%);border:1px solid rgba(255,210,90,.13);border-radius:50%;box-shadow:0 0 0 28px rgba(110,86,255,.045),0 0 0 56px rgba(255,82,155,.035),0 0 0 84px rgba(0,218,194,.025);pointer-events:none;z-index:0}
.diwali-page-section:not(.arrival)>*{position:relative;z-index:2}
.diwali-page-section:not(.arrival) .diwali-section-title{border-bottom:1px solid rgba(104,232,255,.15)!important}
.diwali-page-section:not(.arrival) .section-meta,.diwali-page-section:not(.arrival) .notes-heading>span,.diwali-page-section:not(.arrival) .tradition-intro>span,.diwali-page-section:not(.arrival) .moment-intro>span{color:#68e8ff!important}
.diwali-page-section:not(.arrival) .diwali-section-title h2{color:#fff!important;text-shadow:0 10px 30px rgba(0,0,0,.5)}
.diwali-page-section:not(.arrival) .diwali-section-title h2 em{color:#ff62a8!important}.diwali-page-section:not(.arrival) .section-native{color:#ffd65f!important}
.diwali-page-section:not(.arrival) .diwali-note-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:22px!important}
.diwali-page-section:not(.arrival) .meaning-card{min-height:285px!important;padding:0 20px 21px!important;overflow:hidden;border:1px solid rgba(255,255,255,.13)!important;border-radius:22px 5px 22px 5px!important;background:#11162f!important;box-shadow:0 20px 45px rgba(0,0,0,.42),inset 0 1px rgba(255,255,255,.08)!important}
.diwali-page-section:not(.arrival) .meaning-card::after{content:"✦";position:absolute;right:14px;top:10px;color:#ffd85a;font-size:15px;text-shadow:0 0 12px #ffd85a}
.diwali-page-section:not(.arrival) .meaning-card:nth-child(1){background:linear-gradient(145deg,#21165b,#10142c)!important;transform:rotate(-1.8deg)!important}.diwali-page-section:not(.arrival) .meaning-card:nth-child(2){background:linear-gradient(145deg,#063d52,#10172f)!important;transform:rotate(1.2deg) translateY(8px)!important}.diwali-page-section:not(.arrival) .meaning-card:nth-child(3){background:linear-gradient(145deg,#55133d,#15152f)!important;transform:rotate(-1deg)!important}.diwali-page-section:not(.arrival) .meaning-card:nth-child(4){background:linear-gradient(145deg,#503117,#15162e)!important;transform:rotate(1.6deg) translateY(-6px)!important}.diwali-page-section:not(.arrival) .meaning-card:nth-child(5){background:linear-gradient(145deg,#073e3a,#10192e)!important;transform:rotate(-1.3deg)!important}.diwali-page-section:not(.arrival) .meaning-card:nth-child(6){background:linear-gradient(145deg,#3b1857,#10172f)!important;transform:rotate(.9deg) translateY(6px)!important}
.diwali-page-section:not(.arrival) .meaning-card:hover{transform:translateY(-13px) rotate(0) scale(1.035)!important;border-color:#ffd65f!important;box-shadow:0 28px 60px rgba(0,0,0,.58),0 0 28px rgba(255,93,164,.16)!important}
.diwali-page-section:not(.arrival) .meaning-card>div{height:125px!important;margin:0 -20px 18px!important;border-radius:0 0 18px 18px;border-bottom:1px solid rgba(255,255,255,.1)}.diwali-page-section:not(.arrival) .meaning-card>span{color:#68e8ff!important}.diwali-page-section:not(.arrival) .meaning-card strong{color:#fff!important}.diwali-page-section:not(.arrival) .meaning-card small{color:rgba(255,255,255,.55)!important}
.diwali-page-section:not(.arrival) .moment-selector button>div{min-height:185px!important;background:linear-gradient(150deg,#141b43,#090e25)!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:18px 4px 18px 4px!important;box-shadow:0 16px 35px rgba(0,0,0,.38)!important;transform:none!important}.diwali-page-section:not(.arrival) .moment-selector button:nth-child(2)>div{border-left:4px solid #ff5f9f!important}.diwali-page-section:not(.arrival) .moment-selector button:nth-child(3)>div{border-left:4px solid #62d8ff!important}.diwali-page-section:not(.arrival) .moment-selector button:nth-child(4)>div{border-left:4px solid #ffd85a!important}.diwali-page-section:not(.arrival) .moment-selector button:nth-child(5)>div{border-left:4px solid #a87cff!important}.diwali-page-section:not(.arrival) .moment-selector button:nth-child(6)>div{border-left:4px solid #65e59b!important}
.diwali-page-section:not(.arrival) .moment-selector button:hover>div,.diwali-page-section:not(.arrival) .moment-selector button.active>div{transform:translateY(-11px) scale(1.025)!important;border-color:#ffd85a!important;box-shadow:0 28px 50px rgba(0,0,0,.5),0 0 25px rgba(98,216,255,.12)!important}.diwali-page-section:not(.arrival) .moment-selector strong{color:#fff!important}.diwali-page-section:not(.arrival) .moment-selector small{color:#72dcff!important}.diwali-page-section:not(.arrival) .moment-selector label{background:linear-gradient(90deg,#ff4f91,#855cff)!important;border-radius:30px!important}
.diwali-page-section:not(.arrival) .moment-detail{background:linear-gradient(140deg,#10183a,#1a1234 60%,#0a1b29)!important;border:1px solid rgba(104,232,255,.18)!important;border-radius:24px!important;box-shadow:0 25px 60px rgba(0,0,0,.48)!important}.diwali-page-section:not(.arrival) .moment-number{color:#ff65a8!important}.diwali-page-section:not(.arrival) .moment-content>span{color:#69e8ff!important}.diwali-page-section:not(.arrival) .moment-content h3{color:#fff!important}.diwali-page-section:not(.arrival) .moment-native{color:#ffd85a!important}.diwali-page-section:not(.arrival) .video-open-button{background:linear-gradient(90deg,#ff4f91,#765cff)!important;border-radius:30px!important}
.diwali-page-section:not(.arrival) .tradition-object{border:1px solid rgba(255,255,255,.13)!important;border-radius:18px 5px 18px 5px!important;box-shadow:0 18px 40px rgba(0,0,0,.42)!important;background:#10152d!important}.diwali-page-section:not(.arrival) .tradition-object:hover{transform:translateY(-7px)!important;border-color:#68e8ff!important;box-shadow:0 28px 55px rgba(0,0,0,.55),0 0 28px rgba(104,232,255,.12)!important}.diwali-page-section:not(.arrival) .tradition-overlay{background:linear-gradient(transparent 20%,rgba(4,7,22,.97))!important}.diwali-page-section:not(.arrival) .tradition-overlay span{color:#68e8ff!important}.diwali-page-section:not(.arrival) .tradition-overlay strong{color:#fff!important}
.diwali-page-section:not(.arrival) .meaning-photo,.diwali-page-section:not(.arrival) .moment-image,.diwali-page-section:not(.arrival) .final-image{background:#0e1430!important;border:1px solid rgba(255,255,255,.13)!important;box-shadow:0 20px 45px rgba(0,0,0,.4)!important}
.diwali-page-section:not(.arrival) .sweet-section{background:linear-gradient(135deg,#10183a,#1d1234)!important;border:1px solid rgba(255,255,255,.11)!important;border-radius:24px!important}.diwali-page-section:not(.arrival) .sweet-list span{background:rgba(104,232,255,.06)!important;border:1px solid rgba(104,232,255,.35)!important;color:#c9f7ff!important;border-radius:30px!important}.diwali-page-section:not(.arrival) .final-message strong{color:#ffabc9!important}
@media(max-width:700px){.diwali-page-section:not(.arrival) .diwali-note-grid{grid-template-columns:1fr!important}.diwali-page-section:not(.arrival)::before{width:300px;height:300px}}


/* =========================================================
   PERMANENT CRACKERS — EVERY PAGE EXCEPT ARRIVAL
========================================================= */
.page-crackers {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
}

.page-cracker {
  position: absolute;
  width: 100px;
  height: 150px;
}

.page-cracker-left {
  left: 18px;
  bottom: 28px;
  transform: rotate(-13deg);
}

.page-cracker-right {
  right: 18px;
  top: 125px;
  transform: rotate(13deg) scaleX(-1);
}

.page-cracker .cracker-stick {
  position: absolute;
  left: 40px;
  bottom: 0;
  width: 22px;
  height: 100px;
  border-radius: 7px 7px 3px 3px;
  background: repeating-linear-gradient(
    -45deg,
    #ed4f62 0 7px,
    #ffd65b 7px 14px
  );
  box-shadow: 0 8px 25px rgba(255,82,104,.35);
}

.page-cracker .cracker-stick::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 3px;
  width: 16px;
  height: 11px;
  border-radius: 50%;
  background: #ffd85a;
}

.page-cracker > span {
  position: absolute;
  color: #ffd85a;
  font-size: 27px;
  text-shadow: 0 0 15px rgba(255,216,90,.8);
  animation: pageCrackerSpark 1.6s ease-in-out infinite;
}

.page-cracker > span:nth-child(2) {
  top: 5px;
  left: 40px;
}

.page-cracker > span:nth-child(3) {
  top: 30px;
  left: 5px;
  font-size: 20px;
  animation-delay: .25s;
}

.page-cracker > span:nth-child(4) {
  top: 40px;
  right: 0;
  font-size: 23px;
  animation-delay: .5s;
}

@keyframes pageCrackerSpark {
  0%, 100% {
    opacity: .35;
    transform: scale(.65) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.18) rotate(20deg);
  }
}

.cracker-sparks {
  position: absolute;
  color: #ff75ad;
  font-size: 15px;
  letter-spacing: 8px;
  opacity: .7;
}

.cracker-sparks-left {
  left: 145px;
  bottom: 25px;
}

.cracker-sparks-right {
  right: 145px;
  bottom: 25px;
}

/* =========================================================
   FINAL STORIES
========================================================= */
.final-stories {
  position: relative;
  z-index: 4;
  margin: 42px 7vw 0;
  padding-top: 35px;
  border-top: 1px solid rgba(255,255,255,.12);
}

.final-stories-heading {
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 40px;
  align-items: end;
}

.final-stories-heading span {
  color: #69e8ff;
  font-size: 8px;
  letter-spacing: 2px;
}

.final-stories-heading h3 {
  margin: 12px 0 0;
  color: #fff;
  font-family: "Fraunces", serif;
  font-size: clamp(42px, 5vw, 70px);
  line-height: .84;
  letter-spacing: -2px;
}

.final-stories-heading h3 em {
  color: #ff7fa7;
  font-style: normal;
}

.final-stories-heading p {
  margin: 0;
  max-width: 440px;
  color: rgba(241,239,255,.67);
  font-size: 12px;
  line-height: 1.7;
}

.final-story-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 30px;
}

.final-story-card {
  overflow: hidden;
  background: linear-gradient(145deg,#151d43,#0c1230);
  border: 1px solid rgba(255,255,255,.11);
  border-radius: 18px 5px 18px 5px;
  box-shadow: 0 18px 40px rgba(0,0,0,.38);
  transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}

.final-story-card:hover {
  transform: translateY(-7px);
  border-color: #ffd85a;
  box-shadow: 0 28px 55px rgba(0,0,0,.5),0 0 25px rgba(104,232,255,.1);
}

.final-story-image {
  position: relative;
  height: 155px;
  overflow: hidden;
}

.final-story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.final-story-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 25%,rgba(5,8,24,.72));
}

.final-story-number {
  position: absolute;
  z-index: 2;
  top: 12px;
  left: 12px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(7,10,27,.85);
  border: 1px solid rgba(255,216,90,.65);
  color: #ffd85a;
  font-family: "Fraunces", serif;
}

.final-story-content {
  padding: 18px 18px 20px;
}

.final-story-content > span {
  color: #69e8ff;
  font-size: 7px;
  letter-spacing: 1.5px;
}

.final-story-native {
  margin-top: 8px;
  color: #ffd85a;
  font-family: "Noto Serif Devanagari", serif;
  font-size: 14px;
}

.final-story-content h4 {
  margin: 7px 0 10px;
  color: #fff;
  font-family: "Fraunces", serif;
  font-size: 24px;
  line-height: 1;
}

.final-story-content p {
  margin: 0;
  min-height: 82px;
  color: rgba(241,239,255,.68);
  font-size: 11px;
  line-height: 1.65;
}

.final-story-video {
  margin-top: 16px;
  padding: 9px 15px;
  border: 1px solid rgba(104,232,255,.4);
  border-radius: 30px;
  background: linear-gradient(90deg,#ff4f91,#765cff);
  color: #fff;
  cursor: pointer;
  font-size: 9px;
  letter-spacing: .5px;
  box-shadow: 0 8px 20px rgba(118,92,255,.2);
}

.final-story-video:hover {
  transform: translateY(-2px);
}

@media(max-width:700px) {
  .page-cracker-left {
    left: -28px;
    bottom: 15px;
    transform: scale(.72) rotate(-13deg);
  }

  .page-cracker-right {
    right: -28px;
    top: 120px;
    transform: scale(.72) rotate(13deg) scaleX(-1);
  }

  .cracker-sparks {
    display: none;
  }

  .final-stories-heading {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .final-story-grid {
    grid-template-columns: 1fr;
  }

  .final-story-content p {
    min-height: auto;
  }
}

`;


