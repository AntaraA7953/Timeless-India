import { useEffect, useRef, useState, type CSSProperties } from "react";
import christmas from "./Christmas.json";

export default function Christmas({ onBack }) {
  const festival = christmas;
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState<any>(null);
  const [playing, setPlaying] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [videoModal, setVideoModal] = useState<any>(null);
  const bellRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const ringBells = async () => {
    if (!bellRef.current) return;
    try {
      if (playing) {
        bellRef.current.pause();
        setPlaying(false);
      } else {
        bellRef.current.currentTime = 0;
        await bellRef.current.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error("Jingle bell audio error:", error);
    }
  };

  const enterFestival = async () => {
    if (bellRef.current) {
      try {
        bellRef.current.currentTime = 0;
        await bellRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Jingle bell audio error:", error);
      }
    }
    setPage(1);
  };

  const openModal = (item) => setModal(item);
  const openVideo = (item) => setVideoModal(item);

  return (
    <>
      <style>{CSS}</style>
      <main className="festival-page christmas-page">
        <audio
          ref={bellRef}
          src={festival.audio.bells}
          onEnded={() => setPlaying(false)}
        />

        <button className="back-button" onClick={onBack}>
          ← Back to Festival Fiesta
        </button>

        <header className="festival-header">
          <div className="festival-brand">
            <strong>TIMELESS INDIA</strong>
            <span>FESTIVAL FIESTA</span>
          </div>
          <div className="header-place">DECEMBER · WORLDWIDE</div>
          <button
            className={`header-sound ${playing ? "playing" : ""}`}
            onClick={ringBells}
          >
            <span>🔔</span>
            {playing ? "Bells ringing" : "Ring the bells"}
          </button>
        </header>

        <div className="scrapbook">
          {page === 0 && (
            <ArrivalPage
              festival={festival}
              enterFestival={enterFestival}
              ringBells={ringBells}
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
            <ChristmasStoryPage
              festival={festival}
              openModal={openModal}
              next={() => setPage(3)}
            />
          )}

          {page === 3 && (
            <IndiaChristmasPage
              festival={festival}
              openModal={openModal}
              openVideo={openVideo}
              next={() => setPage(4)}
            />
          )}

          {page === 4 && (
            <JourneyPage
              festival={festival}
              activeStage={activeStage}
              setActiveStage={setActiveStage}
              openModal={openModal}
              openVideo={openVideo}
              next={() => setPage(5)}
            />
          )}

          {page === 5 && (
            <CulturePage
              festival={festival}
              openModal={openModal}
              openVideo={openVideo}
            />
          )}
        </div>

        <nav className="scrapbook-nav">
          <button
            disabled={page === 0}
            onClick={() => setPage(Math.max(0, page - 1))}
          >
            ←
          </button>
          <div>
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <button
                key={item}
                className={page === item ? "selected" : ""}
                onClick={() => setPage(item)}
              >
                0{item + 1}
              </button>
            ))}
          </div>
          <button
            disabled={page === 5}
            onClick={() => setPage(Math.min(5, page + 1))}
          >
            →
          </button>
        </nav>

        {modal && (
          <CultureModal item={modal} close={() => setModal(null)} />
        )}
        {videoModal && (
          <VideoModal item={videoModal} close={() => setVideoModal(null)} />
        )}
      </main>
    </>
  );
}

/* =========================================================
   PAGE 1 — CHRISTMAS ARRIVAL
========================================================= */

function ArrivalPage({ festival, enterFestival, ringBells, playing }) {
  return (
    <section className="page arrival-page christmas-arrival">
      <Snowfall />
      <div className="winter-moon" aria-hidden="true" />
      <div className="aurora-glow" />
      <div className="star-field" aria-hidden="true">
        {Array.from({ length: 36 }).map((_, i) => (
          <i key={i} style={{ "--i": i } as CSSProperties} />
        ))}
      </div>

      {/* Real SVG supplied by the user goes here. Put the file at this path. */}
      <div className="sleigh-flight" aria-hidden="true">
        <img
          className="sleigh-svg"
          src="/christmas-santa-reindeer.svg"
          alt=""
        />
        <span className="flight-spark spark-one">✦</span>
        <span className="flight-spark spark-two">✧</span>
        <span className="flight-spark spark-three">·</span>
        <span className="flight-trail">· · ✦ · · ✧ · ✦ · ·</span>
      </div>

      <div className="arrival-top">
        <span>THE WINTER SCRAPBOOK</span>
        <span>01 / 05</span>
        <span>DECEMBER · INDIA</span>
      </div>

      <div className="arrival-content">
        <div className="arrival-copy">
          <span className="christmas-kicker">MERRY CHRISTMAS</span>
          <h1>
            Christmas
            <br />
            <em>in India.</em>
          </h1>

          <div className="title-rule christmas-rule">
            <span />
            ✦
            <span />
          </div>

          <p className="arrival-lead">
            A winter scrapbook of stars, carols, cribs, church bells,
            Christmas cake, children dancing on school stages, and families
            gathering in a hundred different Indian ways.
          </p>

          <div className="arrival-note christmas-note">
            <small>A NOTE FROM THE SCRAPBOOK</small>
            <p>
              Christmas may arrive with the same date, but the celebration
              changes with every <em>home, language and community.</em>
            </p>
          </div>

          <button className="enter-button christmas-enter" onClick={enterFestival}>
            <span className="enter-circle">✦</span>
            <span>
              <strong>Enter the scrapbook</strong>
              <small>{playing ? "The bells are ringing" : "Begin the Christmas journey"}</small>
            </span>
            <b>→</b>
          </button>

          <button
            className={`sound-card christmas-sound ${playing ? "active" : ""}`}
            onClick={ringBells}
            aria-pressed={playing}
          >
            <div className="sound-card-icon bell-icon">🔔</div>
            <div>
              <span>SOUND OF THE SEASON</span>
              <strong>{playing ? "Jingle Bells · Playing" : "Play Jingle Bells"}</strong>
              <div className="bell-wave">
                {Array.from({ length: 14 }).map((_, i) => (
                  <i key={i} className={playing ? "wave-on" : ""} />
                ))}
              </div>
            </div>
          </button>
        </div>

        <div className="arrival-art christmas-art">
          <div className="tree-glow" />
          <div className="arrival-window">
            <img
              src={festival.images.hero}
              alt="Christmas in India"
            />
          </div>
          <div className="arrival-photo-card christmas-paper">
            <small>FIELD NOTE · INDIA · 025</small>
            <strong>
              The lights
              <br />
              are <em>on.</em>
            </strong>
          </div>
        </div>
      </div>

      <div className="arrival-footer">
        <span>DECEMBER 25</span>
        <span>✦ · ❄ · ✧ · ❄ · ✦</span>
        <span>LIGHT · MUSIC · TOGETHERNESS</span>
      </div>
    </section>
  );
}

function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {Array.from({ length: 42 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 12) * 0.45}s`,
            animationDuration: `${6 + (i % 7)}s`,
            fontSize: `${8 + (i % 5) * 3}px`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

/* =========================================================
   PAGE 2 — WHAT CHRISTMAS MEANS
========================================================= */

function MeaningPage({ festival, openModal, next }) {
  const notes = [
    {
      title: "The Christmas story",
      label: "NATIVITY",
      image: festival.images.story,
      text:
        "Christmas commemorates the birth of Jesus Christ. The Nativity story places the birth in Bethlehem and surrounds it with Mary, Joseph, shepherds, angels and the Magi.",
    },
    {
      title: "A season of light",
      label: "SYMBOLISM",
      image: festival.images.Lights,
      text:
        "Candles, stars and strings of lights have become powerful Christmas images. They turn winter evenings into bright spaces and create a visual language of warmth and hope.",
    },
    {
      title: "A festival that travelled",
      label: "WORLD",
      image: festival.images.tree,
      text:
        "Christmas is celebrated in many countries, but local communities shape it differently. Weather, food, language, music and regional customs can completely change the experience.",
    },
    {
      title: "Giving and generosity",
      label: "PEOPLE",
      image: festival.images.gifts,
      text:
        "Gift giving is one of the most familiar modern traditions, but generosity can also mean sharing food, volunteering, visiting someone who is alone or helping a community.",
    },
    {
      title: "Music everywhere",
      label: "SOUND",
      image: festival.images.Music,
      text:
        "From church hymns to popular Christmas songs, music helps create the season's identity. Carols can carry stories, memories and family traditions from one generation to another.",
    },
    {
      title: "Home becomes festive",
      label: "HOME",
      image: festival.images.Home,
      text:
        "Decorating the home turns ordinary spaces into seasonal spaces. Trees, wreaths, stockings, candles and lights often carry memories because the same decorations return year after year.",
    },
  ];

  return (
    <section className="page christmas-page-two">
      <PageTitle
        number="02"
        eyebrow="UNDERSTANDING THE SEASON"
        title={<>More than <br /><em>a holiday.</em></>}
        bengali="JOY"
      />

      <div className="meaning-intro">
        <div className="meaning-image christmas-meaning-image">
          <img src={festival.images.story} alt="Christmas scene" />
          <span className="image-tag">FIELD NOTE · DECEMBER</span>
          <div className="image-sparkles">✦ ✧ ✦</div>
        </div>

        <div className="meaning-main-text">
          <span>WHAT IS CHRISTMAS?</span>
          <h3>
            A season where
            <br />
            memory meets <em>meaning.</em>
          </h3>
          <p className="large-text">{festival.introduction.text}</p>
          <p>{festival.introduction.extended}</p>
          <p>
            That is why Christmas can feel both deeply familiar and completely
            different from one household to another. One family may centre its
            celebration on worship, another on a long dinner, another on music,
            and another on simply gathering everyone around the same table.
          </p>
        </div>
      </div>

      <div className="fact-ribbon christmas-facts">
        <div><small>WHEN</small><strong>December</strong></div>
        <div><small>MAIN DAY</small><strong>25 December</strong></div>
        <div><small>SEASON</small><strong>Advent → Epiphany</strong></div>
        <div><small>REACH</small><strong>Worldwide</strong></div>
      </div>

      <div className="knowledge-spread">
        <div className="spread-title">
          <span>OPEN THE CHRISTMAS NOTES</span>
          <h3>Six little <br /><em>stories.</em></h3>
          <p>Open a card and discover the ideas that give the season its character.</p>
        </div>
        <div className="paper-notes christmas-notes">
          {notes.map((note, index) => (
            <button
              key={note.title}
              className={`paper-note note-${index + 1}`}
              onClick={() => openModal(note)}
            >
              <span>{note.label}</span>
              <strong>{note.title}</strong>
              <small>Open this note →</small>
            </button>
          ))}
        </div>
      </div>

      <button className="next-page" onClick={next}>Meet the Christmas story →</button>
    </section>
  );
}

/* =========================================================
   PAGE 3 — NATIVITY + FIGURES + SYMBOLS
========================================================= */

function ChristmasStoryPage({ festival, openModal, next }) {
  return (
    <section className="page christmas-page-three">
      <PageTitle
        number="03"
        eyebrow="THE STORY & ITS SYMBOLS"
        title={<>Follow the <br /><em>star.</em></>}
        bengali="HOPE"
      />

      <div className="goddess-spread christmas-story-spread">
        <div className="goddess-story">
          <span>THE NATIVITY STORY</span>
          <h3>One night, <br />a story <em>began.</em></h3>
          {festival.story.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="shakti-card christmas-story-card">
            <div className="shakti-word">★</div>
            <div>
              <strong>Christmas</strong>
              <p>A season shaped by birth, hope, generosity, memory and the warmth of people gathering together.</p>
            </div>
          </div>
        </div>

        <div className="goddess-art christmas-nativity-art">
          <div className="star-orbit" />
          <img src={festival.images.nativity} alt="Christmas Nativity" />
          <div className="nativity-caption">
            <small>THE CENTRAL STORY</small>
            <strong>BETHLEHEM</strong>
            <span>★ · NATIVITY · HOPE</span>
          </div>
        </div>
      </div>

      <div className="symbol-header">
        <div>
          <span>LOOK CLOSER</span>
          <h3>Every Christmas symbol <br />carries a <em>memory.</em></h3>
        </div>
      </div>

      <div className="symbol-grid christmas-symbol-grid">
        {festival.symbols.map((symbol, index) => (
          <button key={symbol.title} onClick={() => openModal(symbol)}>
            <div className="symbol-image">
              <img src={symbol.image} alt={symbol.title} />
              <span className="symbol-icon">{symbol.icon}</span>
            </div>
            <span className="symbol-index">0{index + 1}</span>
            <strong>{symbol.title}</strong>
            <small>Explore meaning →</small>
          </button>
        ))}
      </div>

      <div className="family-section christmas-figures">
        <div className="family-heading">
          <span>THE NATIVITY FIGURES</span>
          <h3>Meet the people <br />around the story.</h3>
        </div>
        <div className="family-list">
          {festival.figures.map((member) => (
            <button key={member.name} onClick={() => openModal(member)}>
              <div className="family-image">
                <img src={member.image} alt={member.name} />
              </div>
              <strong>{member.name}</strong>
              <span>{member.association}</span>
              <small>Explore →</small>
            </button>
          ))}
        </div>
      </div>

      <button className="next-page" onClick={next}>Explore Christmas in India →</button>
    </section>
  );
}


/* =========================================================
   PAGE 4 — CHRISTMAS IN INDIA
========================================================= */

function IndiaChristmasPage({ festival, openModal, openVideo, next }) {
  return (
    <section className="page christmas-page-india">
      <PageTitle
        number="04"
        eyebrow="CHRISTMAS ACROSS INDIA"
        title={<>A country of <br /><em>different Decembers.</em></>}
        bengali="INDIA"
      />

      <div className="india-scrapbook-spread">
        <div className="india-journal-heading">
          <span>FIELD NOTES · INDIA</span>
          <h3>One festival.<br /><em>Many Indian Christmases.</em></h3>
          <p>{festival.india.introduction}</p>
          <div className="journal-stamp">DEC · INDIA<br /><strong>✦</strong></div>
        </div>

        <div className="india-map-board">
          <div className="india-board-tape tape-left" />
          <div className="india-board-tape tape-right" />
          <div className="india-map-label">A CHRISTMAS JOURNEY</div>
          <div className="india-map-scribble">INDIA</div>

          <svg className="india-map-lines" viewBox="0 0 760 560" aria-hidden="true">
            <path className="map-outline" d="M300 42 L346 29 L396 39 L432 58 L468 63 L486 86 L513 96 L530 119 L553 127 L559 151 L584 170 L570 190 L590 211 L580 231 L594 252 L580 273 L564 287 L565 309 L547 322 L545 348 L528 360 L520 389 L500 407 L480 428 L459 449 L443 475 L417 489 L392 503 L374 529 L348 512 L323 500 L300 476 L278 455 L259 431 L235 411 L220 386 L201 368 L190 341 L175 321 L180 296 L166 274 L177 249 L166 225 L181 207 L177 182 L198 164 L214 143 L236 129 L247 106 L270 93 Z" />
            <path className="map-border-line" d="M300 42 L346 29 L396 39 L432 58 L468 63 L486 86 L513 96 L530 119 L553 127 L559 151 L584 170 L570 190 L590 211 L580 231 L594 252 L580 273 L564 287 L565 309 L547 322 L545 348 L528 360 L520 389 L500 407 L480 428 L459 449 L443 475 L417 489 L392 503 L374 529 L348 512 L323 500 L300 476 L278 455 L259 431 L235 411 L220 386 L201 368 L190 341 L175 321 L180 296 L166 274 L177 249 L166 225 L181 207 L177 182 L198 164 L214 143 L236 129 L247 106 L270 93 Z" />
            <path className="map-state" d="M270 93 C305 110 339 117 374 113 C409 110 447 114 486 86 M236 129 C276 151 317 162 353 151 C389 140 421 147 458 165 C489 180 526 187 570 190 M198 164 C239 190 278 204 321 198 C363 192 404 202 444 221 C481 239 535 247 580 231 M177 207 C224 235 258 254 301 248 C342 242 386 257 424 274 C466 293 514 301 565 309 M177 249 C219 278 257 296 292 294 C332 292 367 309 404 330 C443 351 482 359 545 348 M180 296 C214 323 250 344 279 344 C316 344 350 361 381 382 C418 405 459 414 520 389 M201 368 C231 384 257 403 281 411 C309 420 338 442 365 466 M235 411 C264 418 287 437 312 458 C336 478 357 493 374 529 M301 476 C323 459 344 447 365 433 C388 417 412 401 438 385 M374 433 C394 451 412 470 417 489" />
            <path className="map-route" d="M235 411 C275 372 303 329 321 278 C336 235 355 192 374 113" />
            <path className="map-route" d="M486 86 C507 115 530 145 570 190 C542 223 525 266 545 348" />
            <circle className="map-location" cx="236" cy="411" r="6" />
            <circle className="map-location" cx="279" cy="344" r="6" />
            <circle className="map-location" cx="553" cy="127" r="6" />
            <circle className="map-location" cx="505" cy="238" r="6" />
            <circle className="map-location" cx="423" cy="274" r="6" />
            <circle className="map-location" cx="404" cy="330" r="6" />
          </svg>

          {festival.india.regions.map((region, index) => {
            const regionItem = {
              title: region.title,
              category: region.place,
              icon: region.icon,
              text: region.text,
              image: [
                festival.images.Goa,
                festival.images.Kerala,
                festival.images.NorthEast,
                festival.images.Kolkata,
                festival.images.Mumbai,
                festival.images.TamilNadu,
              ][index],
              video: true,
              videoId: region.videoId || "",
            };

            return (
              <div key={region.place} className={`india-location-note location-${index + 1}`}>
                <span className="location-pin">●</span>
                <span className="location-place">{region.place}</span>
                <strong>{region.title}</strong>
                <div className="location-actions">
                  <button className="location-action" type="button" onClick={() => openModal(regionItem)}>Note</button>
                  <button className="location-action video" type="button" onClick={() => openVideo(regionItem)}>▶ Video</button>
                </div>
                <i className="location-bow" aria-hidden="true" />
              </div>
            );
          })}

          <div className="india-map-photo-main">
            <img src={festival.images.hero} alt="Christmas celebration in India" />
            <span>THE FESTIVE MOOD</span>
          </div>

          <div className="india-map-note">
            <span>SCRAPBOOK NOTE</span>
            <strong>Same date.<br />Different stories.</strong>
            <p>From church bells to glowing stars, Christmas takes on local colours across the country.</p>
          </div>
        </div>

        <div className="children-filmstrip children-postcard-section">
          <div className="children-film-heading">
            <span>THE YOUNG CHRISTMAS</span>
            <h4>How children celebrate</h4>
          </div>
          <div className="filmstrip-track postcard-track">
            {festival.india.children.map((item, index) => (
              <article key={item.title} className={`film-frame postcard-frame postcard-${index + 1}`}>
                <div className="postcard-tape" />
                <div className="film-image postcard-image">
                  <img
                    src={[
                      festival.images.Carols,
                      festival.images.Dance,
                      festival.images.Plays,
                      festival.images.School,
                      festival.images.Visit,
                      festival.images.Community,
                    ][index]}
                    alt={item.title}
                  />
                  <b>{item.icon}</b>
                </div>
                <div className="film-caption postcard-caption">
                  <span>INDIA · CHRISTMAS</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="india-tradition-ribbons">
          <span>INDIAN CHRISTMAS DETAILS</span>
          {festival.india.traditions.map((item) => (
            <button
              key={item.title}
              onClick={() => openModal({
                title: item.title,
                category: "INDIAN CHRISTMAS",
                icon: item.icon,
                text: item.text,
              })}
            >
              <b>{item.icon}</b>
              <strong>{item.title}</strong>
              <small>Open note →</small>
            </button>
          ))}
        </div>
      </div>

      <button className="next-page" onClick={next}>Follow the Christmas season →</button>
    </section>
  );
}

/* =========================================================
   PAGE 4 — JOURNEY THROUGH THE SEASON
========================================================= */

function JourneyPage({ festival, activeStage, setActiveStage, openModal, openVideo, next }) {
  const stage = festival.stages[activeStage];

  return (
    <section className="page christmas-page-four">
      <PageTitle
        number="05"
        eyebrow="THE CHRISTMAS JOURNEY"
        title={<>From the first <br /><em>snowflake</em> to the last song.</>}
        bengali="SEASON"
      />

      <div className="calendar-intro">
        <p>
          Christmas is more than one day. For many people, the season unfolds
          gradually — anticipation, decoration, Christmas Eve, Christmas Day,
          family traditions and the longer Christian season that follows.
        </p>
        <strong>ADVENT · CHRISTMAS EVE · CHRISTMAS DAY · EPIPHANY</strong>
      </div>

      <div className="festival-timeline christmas-timeline">
        <div className="timeline-thread" />
        {festival.stages.map((item, index) => (
          <button
            key={item.name}
            className={`timeline-entry ${activeStage === index ? "active" : ""}`}
            onClick={() => setActiveStage(index)}
          >
            <span className="timeline-number">{item.number}</span>
            <div className="timeline-paper">
              <span className="timeline-type">{item.type}</span>
              <strong>{item.name}</strong>
              <small>{item.nativeName}</small>
              {item.principal && <em>CHRISTMAS SEASON</em>}
              <b>Open →</b>
            </div>
          </button>
        ))}
      </div>

      <div className="day-detail christmas-stage-detail">
        <div className="day-detail-number">{stage.number}</div>
        <div className="day-detail-content">
          <span>{stage.type}</span>
          <h3>{stage.name}</h3>
          <div className="day-bengali">{stage.nativeName}</div>
          <p>{stage.description}</p>
          <div className="day-highlights">
            {stage.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
          </div>
        </div>
        <div className="day-detail-art">
          <img src={stage.image} alt={stage.name} />
          <div className="stage-snow">❄ ✦ ❄</div>
        </div>
      </div>

      <div className="ritual-spread christmas-tradition-spread">
        <div className="ritual-heading">
          <span>TRADITION NOTES</span>
          <h3>Small rituals, <br /><em>big memories.</em></h3>
          <p>Click a card to open a closer look at some of the customs that make Christmas feel personal.</p>
        </div>
        <div className="ritual-list">
          {festival.traditions.map((ritual, index) => (
            <button key={ritual.title} onClick={() => openModal(ritual)}>
              <span>0{index + 1}</span>
              <div>
                <strong>{ritual.title}</strong>
                <small>{ritual.short}</small>
              </div>
              <b>+</b>
            </button>
          ))}
        </div>
      </div>

      <button className="next-page" onClick={next}>Explore Christmas culture →</button>
    </section>
  );
}


/* =========================================================
   PAGE 5 — LIVING CULTURE
========================================================= */

function CulturePage({ festival, openModal, openVideo }) {
  return (
    <section className="page christmas-page-five">
      <PageTitle
        number="06"
        eyebrow="THE LIVING CHRISTMAS"
        title={<>Everything <br />around <em>the day.</em></>}
        bengali="TOGETHER"
      />

      <div className="culture-intro">
        <p>
          Christmas lives outside the Nativity scene too — in kitchens,
          streets, songs, gift exchanges, decorations, family jokes, old
          ornaments and the people who make the season feel like their own.
        </p>
        <span>CLICK THE OBJECTS</span>
      </div>

      <div className="culture-collage christmas-collage">
        <CultureObject item={festival.culture.tree} className="culture-large" openModal={openModal} />
        <CultureObject item={festival.culture.santa} openModal={openModal} />
        <CultureObject item={festival.culture.lights} openModal={openModal} />
        <CultureObject item={festival.culture.crackers} openModal={openModal} />
        <CultureObject item={festival.culture.feast} openModal={openModal} />
        <CultureObject item={festival.culture.cards} openModal={openModal} />
        <CultureObject item={festival.culture.community} className="culture-community" openModal={openModal} />
      </div>

      <div className="puja-food christmas-food">
        <div>
          <span>A TASTE OF CHRISTMAS</span>
          <h3>The festive table</h3>
          <p>{festival.food.description}</p>
        </div>
        <div className="food-list">
          {festival.food.dishes.map((dish) => <span key={dish}>{dish}</span>)}
        </div>
      </div>

      <div className="bijoya-section christmas-ending">
        <div className="bijoya-image">
          <img src={festival.images.feast} alt="Christmas gathering" />
          <div className="ending-lights">✦ ✧ ✦ ✧ ✦</div>
        </div>
        <div className="bijoya-copy">
          <span>UNTIL NEXT YEAR</span>
          <h3>Keep the <br /><em>light.</em></h3>
          <p>{festival.farewell.description}</p>
          <strong>{festival.farewell.phrase}</strong>
          <small>{festival.farewell.translation}</small>
        </div>
      </div>

      <GiftDiscovery facts={festival.giftFacts} />

      <div className="year-bridge">
        <div className="year-bridge-tree">🎄</div>
        <div>
          <span>CHRISTMAS → THE END OF DECEMBER</span>
          <h3>And then... <em>a new year begins.</em></h3>
          <p>Christmas arrives near the end of the calendar year. For many families and communities, the festive mood gently carries forward into the final days of December and towards January 1.</p>
        </div>
        <div className="year-bridge-fireworks">✦ ✧ ✦</div>
      </div>

      <div className="final-message christmas-final">
        <span>✦ CHRISTMAS ✦</span>
        <strong>A little more light, a little more kindness, and another reason to come home.</strong>
        <div className="final-snow">❄ ❄ ❄</div>
      </div>
    </section>
  );
}

function GiftDiscovery({ facts }) {
  const [opened, setOpened] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const [hasRevealed, setHasRevealed] = useState(false);
  const fact = facts[factIndex];

  useEffect(() => {
    if (!opened) return;

    const closeTimer = window.setTimeout(() => {
      setOpened(false);
    }, 1900);

    return () => window.clearTimeout(closeTimer);
  }, [opened]);

  const revealGift = () => {
    if (opened) return;

    if (hasRevealed) {
      setFactIndex((current) => (current + 1) % facts.length);
    } else {
      setHasRevealed(true);
    }

    setOpened(true);
  };

  return (
    <section className={`gift-discovery ${opened ? "opened" : ""}`}>
      <div className="gift-heading">
        <span>THE CHRISTMAS MEMORY BOX</span>
        <h3>
          Look inside.
          <br />
          <em>Something is waiting.</em>
        </h3>
        <p>
          Not a toy. A little archive of Indian Christmas moments —
          revealed one layer at a time.
        </p>
      </div>

      <button
        className="gift-stage premium-gift-stage"
        onClick={revealGift}
        aria-expanded={opened}
        aria-label={opened ? "Reveal the next Christmas memory" : "Open the Christmas memory box"}
      >
        <span className="gift-stage-label">
          {opened ? "REVEAL ANOTHER MEMORY" : "OPEN THE MEMORY BOX"}
        </span>
        <span className="gift-aura" />

        <span className="memory-box">
          <span className="memory-box-side" />
          <span className="memory-box-lid" />
          <span className="memory-box-ribbon-v" />
          <span className="memory-box-ribbon-h" />
          <span className="memory-box-seam" />
        </span>

        <span className="memory-reveal">
          <svg viewBox="0 0 180 210" className="reveal-tree" aria-hidden="true">
            <path
              d="M90 18 L54 66 H70 L36 110 H61 L24 158 H156 L119 110 H144 L110 66 H126 Z"
              fill="currentColor"
              opacity=".9"
            />
            <path d="M90 158 V194" stroke="#7b4d39" strokeWidth="9" strokeLinecap="round"/>
            <path d="M90 18 L90 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <path d="M90 3 L94 12 L104 12 L96 18 L99 28 L90 22 L81 28 L84 18 L76 12 L86 12 Z" fill="#d8c38a"/>
            <circle cx="56" cy="92" r="5" fill="#a62b43"/>
            <circle cx="119" cy="82" r="5" fill="#c8dce5"/>
            <circle cx="77" cy="125" r="5" fill="#a62b43"/>
            <circle cx="106" cy="137" r="5" fill="#c8dce5"/>
            <circle cx="91" cy="106" r="4" fill="#d8c38a"/>
            <path d="M57 151 Q90 132 123 151" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2"/>
            <path className="tree-garland" d="M48 82 Q90 99 132 82 M39 116 Q90 137 141 116 M30 148 Q90 173 150 148" />
            <circle className="tree-light" cx="72" cy="72" r="3.2" fill="#effff2"/>
            <circle className="tree-light" cx="111" cy="98" r="3.2" fill="#effff2"/>
            <circle className="tree-light" cx="53" cy="124" r="3.2" fill="#effff2"/>
            <circle className="tree-light" cx="128" cy="132" r="3.2" fill="#effff2"/>
            <circle cx="83" cy="145" r="3.6" fill="#dfffe5"/>
          </svg>
          <span className="reveal-star">✦</span>
        </span>

        <span className="memory-spark spark-a">✦</span>
        <span className="memory-spark spark-b">✧</span>
        <span className="memory-spark spark-c">✦</span>
      </button>

      <div className="gift-fact-card premium-fact-card">
        <div className="fact-index">0{factIndex + 1} / 0{facts.length}</div>
        {opened ? (
          <>
            <span>{fact.label}</span>
            <strong>{fact.title}</strong>
            <p>{fact.text}</p>
          </>
        ) : (
          <>
            <span>CHRISTMAS IN INDIA</span>
            <strong>A memory is waiting.</strong>
            <p>
              Open the box to reveal stories of how children and families
              experience Christmas across India.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

function CultureObject({ item, className = "", openModal }) {
  return (
    <button className={`culture-object ${className}`} onClick={() => openModal(item)}>
      <img src={item.image} alt={item.title} />
      <div className="culture-object-label">
        <span>{item.category}</span>
        <strong>{item.title}</strong>
        <small>Read the note →</small>
      </div>
      <div className="culture-icon">{item.icon}</div>
    </button>
  );
}

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function PageTitle({ number, eyebrow, title, bengali }) {
  return (
    <div className="page-title">
      <div>
        <div className="title-meta">
          <span className="title-number">{number}</span>
          <span>{eyebrow}</span>
        </div>
        <h2>{title}</h2>
      </div>
      <div className="bengali-side">{bengali}</div>
    </div>
  );
}

function CultureModal({ item, close }) {
  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="culture-modal christmas-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close}>×</button>
        {item.image && <img src={item.image} alt={item.title || item.name} />}
        <div className="modal-paper">
          <span>{item.label || item.category || item.type || "CHRISTMAS NOTE"}</span>
          <h2>{item.title || item.name}</h2>
          <div className="modal-flower">✦</div>
          <p>{item.text || item.detail || item.description}</p>
        </div>
      </div>
    </div>
  );
}

function VideoModal({ item, close }) {
  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="video-modal christmas-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close}>×</button>
        <div className="video-heading">
          <span>✦ CHRISTMAS VIDEO</span>
          <h2>{item.title || item.name || "Christmas"}</h2>
        </div>
        {item.videoId ? (
          <div className="video-frame">
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
              title={item.title || "Christmas in India"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="video-placeholder">
            <div>🎄</div>
            <strong>Video not added yet</strong>
            <p>Add a YouTube video ID in Christmas.json.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   CHRISTMAS CSS
   Same scrapbook/page/navigation architecture, but a fully
   different visual language: midnight blue, icy silver,
   cranberry red, pine green, gold light, snow and stars.
========================================================= */

const CSS = `

/* =========================================================
   PAGE 4 — INDIA SCRAPBOOK VISUALS
========================================================= */
.india-scrapbook-spread{margin:55px 2vw 0;position:relative;z-index:2}
.india-journal-heading{position:relative;display:grid;grid-template-columns:1fr .85fr 120px;gap:28px;align-items:end;padding:0 8px 28px;border-bottom:1px dashed rgba(40,83,105,.28)}
.india-journal-heading>span{grid-column:1/-1;font:9px Arial,sans-serif;letter-spacing:.2em;color:#9e2538;font-weight:700}
.india-journal-heading h3{margin:0;color:#092033;font-size:50px;line-height:.92;font-weight:500;letter-spacing:-.03em}
.india-journal-heading h3 em{color:#2d718f;font-weight:400}
.india-journal-heading p{margin:0;color:#294a5e;font-size:15px;line-height:1.75;max-width:490px}
.journal-stamp{align-self:center;justify-self:end;width:92px;height:92px;border:1px dashed #9e2538;border-radius:50%;display:grid;place-items:center;text-align:center;font:8px Arial,sans-serif;letter-spacing:.15em;color:#9e2538;transform:rotate(8deg);opacity:.82}
.journal-stamp strong{font-size:20px;line-height:1}

.india-map-board{margin-top:32px;min-height:650px;position:relative;overflow:hidden;background:radial-gradient(circle at 50% 52%,rgba(255,255,255,.75),transparent 37%),linear-gradient(135deg,#a8c9dc 0%,#c0dce9 48%,#9fc2d7 100%);border:1px solid rgba(52,104,130,.2);box-shadow:0 22px 48px rgba(15,47,65,.14)}
.india-board-tape{position:absolute;width:125px;height:20px;background:rgba(255,250,231,.72);top:12px;z-index:7;box-shadow:0 2px 4px rgba(0,0,0,.05)}
.tape-left{left:22%;transform:rotate(-3deg)}.tape-right{right:18%;transform:rotate(5deg)}
.india-map-label{position:absolute;top:28px;left:32px;font:9px Arial,sans-serif;letter-spacing:.2em;color:#315d71;font-weight:700}
.india-map-scribble{position:absolute;left:50%;top:48%;transform:translate(-50%,-50%) rotate(-7deg);font-family:Georgia,serif;font-size:170px;font-weight:700;letter-spacing:-.08em;color:rgba(255,255,255,.38);text-shadow:0 2px 0 rgba(255,255,255,.35);pointer-events:none}
.india-map-photo-main{position:absolute;left:50%;top:53%;transform:translate(-50%,-50%) rotate(-1.5deg);width:330px;background:#fffdf7;padding:10px 10px 30px;box-shadow:0 22px 35px rgba(20,48,63,.2);z-index:3}
.india-map-photo-main img{width:100%;height:280px;object-fit:cover;display:block;filter:saturate(.88)}
.india-map-photo-main span{display:block;margin:10px 5px 0;font:9px Arial,sans-serif;letter-spacing:.18em;color:#8c3a49}
.india-map-note{position:absolute;right:38px;bottom:28px;width:245px;padding:18px 20px;background:#fff9ec;transform:rotate(2deg);box-shadow:0 14px 26px rgba(20,48,63,.14);z-index:5}
.india-map-note span{font:8px Arial,sans-serif;letter-spacing:.18em;color:#9e2538;font-weight:700}.india-map-note strong{display:block;color:#15364a;font-family:Georgia,serif;font-size:23px;line-height:1.05;margin:9px 0}.india-map-note p{margin:0;color:#4f6573;font-size:11px;line-height:1.55}

/* Regional notes live on the map at their locations instead of becoming a separate grid. */
.india-location-note{position:absolute;z-index:8;width:170px;min-height:106px;padding:17px 14px 13px 17px;border:1px solid rgba(23,62,84,.16);background:linear-gradient(145deg,#f9fcfd,#dcecf3);box-shadow:0 12px 24px rgba(20,48,63,.16);text-align:left;cursor:pointer;transition:.25s ease;transform:rotate(var(--rot,0deg));color:#173e54}
.india-location-note:hover{transform:translateY(-6px) rotate(0deg);box-shadow:0 19px 30px rgba(20,48,63,.20)}
.location-pin{position:absolute;left:12px;top:-7px;width:12px;height:12px;border-radius:50%;color:transparent;background:#a62b43;box-shadow:0 0 0 5px rgba(166,43,67,.12)}
.location-place{display:block;padding-left:14px;font:8px Arial,sans-serif;letter-spacing:.16em;color:#a62b43;font-weight:700}
.india-location-note strong{display:block;color:#092033;font-family:Georgia,serif;font-size:18px;line-height:1.06;margin:8px 0 7px}
.india-location-note small{font:8px Arial,sans-serif;letter-spacing:.08em;color:#416779}
.location-bow{position:absolute;top:-7px;left:50%;transform:translateX(-50%);width:32px;height:10px;background:#b52945;border-radius:2px;box-shadow:0 3px 7px rgba(0,0,0,.1)}
.location-bow::before,.location-bow::after{content:"";position:absolute;top:1px;width:10px;height:13px;background:#a62b43}.location-bow::before{left:-5px;transform:skewY(-18deg)}.location-bow::after{right:-5px;transform:skewY(18deg)}
.location-1{left:6%;top:150px;--rot:-4deg}.location-2{left:18%;bottom:95px;--rot:3deg}.location-3{right:5%;top:120px;--rot:4deg}.location-4{right:16%;top:255px;--rot:-3deg}.location-5{left:7%;top:365px;--rot:3deg}.location-6{right:26%;bottom:55px;--rot:-4deg}

.children-filmstrip{margin-top:58px;padding:24px 0 0;border-top:1px dashed rgba(40,83,105,.28)}
.children-film-heading{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:18px}.children-film-heading span{font:9px Arial,sans-serif;letter-spacing:.18em;color:#9e2538;font-weight:700}.children-film-heading h4{margin:0;color:#092033;font-size:30px;font-weight:500}
.filmstrip-track{display:grid;grid-template-columns:repeat(3,1fr);gap:13px;background:#092033;padding:15px;box-shadow:0 15px 30px rgba(5,25,38,.18)}
.film-frame{background:#f5f0df;padding:7px;position:relative}.film-image{height:150px;overflow:hidden;position:relative}.film-image img{width:100%;height:100%;object-fit:cover;filter:saturate(.82)}.film-image b{position:absolute;right:8px;bottom:7px;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#eef8fb;color:#173e54;box-shadow:0 4px 9px rgba(0,0,0,.15)}.film-caption{padding:8px 5px 4px}.film-caption strong{font-family:Georgia,serif;color:#183d52;font-size:17px}.film-caption p{margin:4px 0 0;color:#59707e;font:10px Arial,sans-serif;line-height:1.45}
.india-tradition-ribbons{margin-top:28px;display:flex;align-items:stretch;gap:8px;flex-wrap:wrap}.india-tradition-ribbons>span{width:100%;font:8px Arial,sans-serif;letter-spacing:.18em;color:#315d71;font-weight:700;margin-bottom:3px}.india-tradition-ribbons button{border:1px solid rgba(53,101,124,.16);background:#e5f1f6;padding:12px 15px;display:flex;align-items:center;gap:8px;color:#15384d;cursor:pointer;box-shadow:0 8px 16px rgba(20,48,63,.08)}.india-tradition-ribbons button:hover{background:#fffdf7;transform:translateY(-2px)}.india-tradition-ribbons b{font-size:18px}.india-tradition-ribbons strong{font-family:Georgia,serif;font-size:14px}.india-tradition-ribbons small{font:8px Arial,sans-serif;color:#6e808b}

@media(max-width:1000px){.india-journal-heading{grid-template-columns:1fr}.journal-stamp{justify-self:start}.india-map-board{min-height:760px}.india-map-scribble{font-size:120px}.india-location-note{width:155px}.location-1{left:3%;top:145px}.location-2{left:8%;bottom:95px}.location-3{right:3%;top:120px}.location-4{right:7%;top:255px}.location-5{left:4%;top:355px}.location-6{right:22%;bottom:42px}.india-map-note{right:22px;bottom:20px}}
@media(max-width:650px){.india-journal-heading h3{font-size:42px}.india-map-board{min-height:1020px}.india-map-scribble{font-size:82px;top:38%}.india-map-photo-main{width:72%;top:45%}.india-map-note{right:18px;left:18px;bottom:22px;width:auto}.india-location-note{width:145px;min-height:96px}.location-1{left:4%;top:115px}.location-2{left:5%;bottom:235px}.location-3{right:4%;top:115px}.location-4{right:4%;top:260px}.location-5{left:5%;top:410px}.location-6{right:5%;bottom:235px}.filmstrip-track{grid-template-columns:1fr}.children-film-heading{align-items:flex-start;flex-direction:column}}

:root {
  --paper: #f8f3e8;
  --paper-2: #fffaf0;
  --ink: #18222d;
  --muted: #65717c;
  --navy: #0b1725;
  --navy-2: #12263a;
  --pine: #164436;
  --cranberry: #9e2538;
  --gold: #d7a83e;
  --ice: #dceaf3;
  --white: #fffdf8;
  --shadow: rgba(4, 14, 24, .16);
}

* { box-sizing: border-box; }

.festival-page.christmas-page {
  min-height: 100vh;
  color: var(--ink);
  background:
    radial-gradient(circle at 10% 0%, rgba(215,168,62,.11), transparent 24%),
    radial-gradient(circle at 90% 10%, rgba(220,234,243,.10), transparent 22%),
    linear-gradient(145deg, #07111d 0%, #0c1b2b 45%, #07121f 100%);
  font-family: Georgia, "Times New Roman", serif;
  overflow-x: hidden;
  position: relative;
}

.christmas-page button { font: inherit; }

.back-button {
  position: relative;
  z-index: 30;
  margin: 18px 4vw 0;
  border: 1px solid rgba(255,255,255,.25);
  background: rgba(8,18,30,.65);
  color: #fff;
  padding: 9px 14px;
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(8px);
}

.festival-header {
  position: relative;
  z-index: 20;
  margin: 16px 4vw 0;
  min-height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,.16);
}

.festival-brand { display: flex; flex-direction: column; gap: 2px; letter-spacing: .12em; }
.festival-brand strong { font-size: 12px; }
.festival-brand span, .header-place { font: 10px Arial, sans-serif; letter-spacing: .2em; opacity: .65; }
.header-sound {
  border: 1px solid rgba(215,168,62,.55);
  background: rgba(215,168,62,.08);
  color: #f7dc91;
  padding: 10px 15px;
  border-radius: 999px;
  cursor: pointer;
  transition: .25s ease;
}
.header-sound:hover, .header-sound.playing { background: rgba(215,168,62,.18); transform: translateY(-2px); }

.scrapbook {
  width: min(1380px, 92vw);
  margin: 26px auto 0;
  position: relative;
  z-index: 5;
}

.page {
  background:
    radial-gradient(circle at 92% 6%, rgba(158,37,56,.08), transparent 20%),
    radial-gradient(circle at 5% 88%, rgba(22,68,54,.07), transparent 22%),
    var(--paper);
  min-height: 1000px;
  padding: 58px clamp(24px, 5vw, 78px) 80px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(0,0,0,.32);
}

.page::before {
  content: "";
  position: absolute;
  inset: 16px;
  border: 1px solid rgba(24,34,45,.13);
  pointer-events: none;
}

.page::after {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  border: 1px dashed rgba(158,37,56,.18);
  right: -130px;
  top: 180px;
  pointer-events: none;
}

.arrival-page { background: linear-gradient(135deg, #f9f3e7, #f4ecdd 60%, #eaf0f0); }

.arrival-top, .arrival-footer {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  font: 10px Arial, sans-serif;
  letter-spacing: .17em;
  color: #52616c;
  position: relative;
  z-index: 8;
}

.arrival-top { border-bottom: 1px solid rgba(24,34,45,.15); padding-bottom: 14px; }
.arrival-footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid rgba(24,34,45,.15); }

.arrival-content {
  display: grid;
  grid-template-columns: 1fr .92fr;
  gap: clamp(35px, 7vw, 100px);
  align-items: center;
  padding: 70px 2vw 30px;
  position: relative;
  z-index: 8;
}

.arrival-copy { max-width: 620px; }
.christmas-kicker { color: var(--cranberry); font: 11px Arial, sans-serif; font-weight: 700; letter-spacing: .26em; }
.bengali-large.christmas-script { color: var(--pine); font-size: 26px; display: block; margin: 14px 0 3px; font-style: italic; }
.arrival-copy h1 { font-size: clamp(58px, 7vw, 106px); line-height: .86; margin: 0; font-weight: 500; letter-spacing: -.055em; color: #102132; }
.arrival-copy h1 em { color: var(--cranberry); font-weight: 400; }
.title-rule { display: flex; align-items: center; gap: 13px; width: 270px; margin: 25px 0; color: var(--gold); }
.title-rule span { height: 1px; flex: 1; background: currentColor; opacity: .55; }
.arrival-lead { font-size: 20px; line-height: 1.65; max-width: 590px; color: #40515f; }
.arrival-note { border-left: 3px solid var(--gold); background: rgba(255,255,255,.42); padding: 15px 18px; margin: 26px 0; max-width: 520px; }
.arrival-note small, .sound-card span, .culture-object-label span, .food-list span, .ritual-heading > span { font: 9px Arial, sans-serif; letter-spacing: .2em; font-weight: 700; color: #687681; }
.arrival-note p { margin: 7px 0 0; font-size: 16px; line-height: 1.5; }
.arrival-note em { color: var(--cranberry); }

.enter-button {
  display: flex;
  align-items: center;
  gap: 15px;
  width: min(420px, 100%);
  border: 0;
  background: var(--navy);
  color: white;
  padding: 12px 18px 12px 12px;
  cursor: pointer;
  text-align: left;
  box-shadow: 0 12px 28px rgba(11,23,37,.22);
  transition: .25s ease;
}
.enter-button:hover { transform: translateY(-3px); box-shadow: 0 17px 35px rgba(11,23,37,.28); }
.enter-circle { width: 50px; height: 50px; border-radius: 50%; display: grid; place-items: center; background: var(--gold); color: var(--navy); font-size: 24px; }
.enter-button span:nth-child(2) { display: flex; flex-direction: column; gap: 4px; }
.enter-button strong { font-size: 17px; }
.enter-button small { font: 10px Arial, sans-serif; opacity: .65; }
.enter-button b { margin-left: auto; font-size: 24px; font-weight: 400; }

.sound-card { margin-top: 14px; width: min(420px, 100%); display: flex; align-items: center; gap: 15px; border: 1px solid rgba(24,34,45,.13); background: rgba(255,255,255,.5); padding: 12px 15px; cursor: pointer; text-align: left; }
.sound-card-icon { width: 45px; height: 45px; display: grid; place-items: center; background: var(--white); border-radius: 50%; box-shadow: inset 0 0 0 1px rgba(24,34,45,.1); }
.sound-card strong { display: block; margin-top: 4px; color: #1b2a37; }
.bell-wave { display: flex; align-items: center; gap: 3px; height: 18px; margin-top: 8px; }
.bell-wave i { width: 3px; height: 5px; background: #aeb8bd; transition: height .2s ease; }
.bell-wave i.wave-on { animation: bellWave .55s infinite alternate; background: var(--cranberry); }
.bell-wave i:nth-child(2n).wave-on { animation-delay: .1s; }
.bell-wave i:nth-child(3n).wave-on { animation-delay: .2s; }
@keyframes bellWave { to { height: 17px; } }

.christmas-art { min-height: 640px; position: relative; display: grid; place-items: center; }
.tree-glow { position: absolute; width: 470px; height: 470px; border-radius: 50%; background: radial-gradient(circle, rgba(215,168,62,.22), rgba(22,68,54,.08) 42%, transparent 70%); animation: glowPulse 4s ease-in-out infinite; }
@keyframes glowPulse { 50% { transform: scale(1.08); opacity: .72; } }
.christmas-hero-photo { width: min(500px, 90%); height: 590px; position: relative; overflow: hidden; transform: rotate(1.7deg); border: 14px solid #fffdf8; box-shadow: 0 22px 50px rgba(11,23,37,.25); }
.christmas-hero-photo img { width: 100%; height: 100%; object-fit: cover; }
.hero-snow-glow { position: absolute; inset: 0; background: linear-gradient(to top, rgba(7,17,29,.35), transparent 45%); }
.ornament { position: absolute; z-index: 2; text-shadow: 0 0 12px rgba(255,255,255,.8); animation: ornamentFloat 3s ease-in-out infinite; }
.ornament-red { color: #c63c4f; left: 16%; top: 24%; font-size: 44px; }
.ornament-gold { color: #f1c95f; right: 15%; top: 38%; font-size: 40px; animation-delay: .8s; }
.ornament-blue { color: #b9d8ea; left: 53%; top: 58%; font-size: 35px; animation-delay: 1.3s; }
@keyframes ornamentFloat { 50% { transform: translateY(-8px) rotate(5deg); } }
.christmas-paper { position: absolute; right: -10px; bottom: 30px; background: #fffaf0; padding: 18px 22px; width: 220px; transform: rotate(-4deg); box-shadow: 0 15px 28px rgba(0,0,0,.16); }
.christmas-paper small { font: 9px Arial, sans-serif; letter-spacing: .16em; color: #6d7880; }
.christmas-paper strong { display: block; font-size: 24px; line-height: 1.05; margin-top: 10px; color: var(--navy); }
.christmas-paper em { color: var(--cranberry); }

.snowfall { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 2; }
.snowfall span { position: absolute; top: -30px; color: rgba(255,255,255,.82); animation: snowFall linear infinite; filter: drop-shadow(0 0 5px rgba(255,255,255,.35)); }
@keyframes snowFall { from { transform: translate3d(0,-30px,0) rotate(0deg); } to { transform: translate3d(80px,1100px,0) rotate(360deg); } }
.aurora-glow { position: absolute; width: 800px; height: 420px; right: -300px; top: 100px; background: radial-gradient(ellipse, rgba(78,148,125,.12), transparent 65%); pointer-events: none; }
.star-field { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.star-field i { position: absolute; width: 3px; height: 3px; background: #fff; border-radius: 50%; left: calc((var(--i) * 17) % 100 * 1%); top: calc((var(--i) * 29) % 90 * 1%); opacity: .25; animation: twinkle calc(1.8s + (var(--i) % 5) * .4s) infinite alternate; }
@keyframes twinkle { to { opacity: 1; transform: scale(2); } }
.sleigh-animation { position: absolute; z-index: 3; top: 150px; left: -180px; animation: sleighAcross 18s linear infinite; pointer-events: none; white-space: nowrap; }
.sleigh { font-size: 50px; filter: drop-shadow(0 0 10px rgba(255,255,255,.35)); }
.sleigh-gift { font-size: 24px; position: absolute; left: 55px; top: -12px; }
.sleigh-moon { position: absolute; color: var(--gold); font-size: 45px; left: -45px; top: -50px; }
@keyframes sleighAcross { from { transform: translateX(0) translateY(0); } 50% { transform: translateX(65vw) translateY(-40px); } to { transform: translateX(125vw) translateY(10px); } }
.sleigh-animation{height:125px}.reindeer-team{position:absolute;left:0;top:46px;display:flex;align-items:center;gap:1px;font-size:31px;filter:drop-shadow(0 0 7px rgba(255,255,255,.25))}.reindeer{display:inline-block}.reindeer.rudolph{filter:drop-shadow(0 0 5px rgba(210,45,62,.7))}.reindeer-line{font-size:17px;letter-spacing:2px;color:#d7a83e;margin-left:2px}.santa-sleigh{position:absolute;left:125px;top:45px;display:flex;align-items:center;gap:3px}.santa{font-size:35px;filter:drop-shadow(0 0 8px rgba(255,255,255,.25))}.sleigh{font-size:50px}.sleigh-gift{font-size:23px;position:absolute;left:57px;top:-13px}.sleigh-bell{font-size:15px;position:absolute;left:94px;top:-11px}.sleigh-spark{position:absolute;color:#d7a83e;font-size:22px;animation:sleighSpark 1.4s ease-in-out infinite alternate}.sleigh-spark.spark-a{left:112px;top:8px}.sleigh-spark.spark-b{left:166px;top:18px;animation-delay:.4s}.sleigh-trail{position:absolute;left:188px;top:90px;color:#cfe3ef;letter-spacing:8px;font-size:12px;white-space:nowrap;animation:trailFade 1.4s ease-in-out infinite alternate}@keyframes sleighSpark{to{transform:scale(1.4) rotate(20deg);opacity:.9}}@keyframes trailFade{to{opacity:.35;transform:translateX(18px)}}

/* Titles */
.page-title { display: flex; justify-content: space-between; gap: 30px; align-items: flex-end; position: relative; z-index: 3; border-bottom: 1px solid rgba(24,34,45,.15); padding-bottom: 28px; }
.title-meta { display: flex; gap: 12px; align-items: center; color: #687681; font: 10px Arial, sans-serif; letter-spacing: .19em; }
.title-number { color: var(--cranberry); font-size: 12px; font-weight: 700; }
.page-title h2 { font-size: clamp(48px, 6vw, 82px); line-height: .9; letter-spacing: -.045em; font-weight: 500; margin: 20px 0 0; color: var(--navy); }
.page-title h2 em { color: var(--cranberry); font-weight: 400; }
.bengali-side { font-size: 32px; color: var(--pine); font-style: italic; opacity: .65; }

/* Page 2 */
.meaning-intro { display: grid; grid-template-columns: .9fr 1.1fr; gap: 65px; padding: 60px 2vw; align-items: center; position: relative; z-index: 2; }
.meaning-image { position: relative; height: 480px; }
.meaning-image img { width: 100%; height: 100%; object-fit: cover; transform: rotate(-2deg); box-shadow: 0 20px 40px var(--shadow); border: 10px solid #fffdf8; }
.image-tag { position: absolute; left: 15px; bottom: 20px; background: var(--navy); color: #fff; padding: 8px 12px; font: 9px Arial, sans-serif; letter-spacing: .15em; }
.image-sparkles { position: absolute; right: -12px; top: -12px; color: var(--gold); letter-spacing: 8px; font-size: 22px; }
.meaning-main-text > span, .goddess-story > span, .symbol-header span, .family-heading > span { font: 10px Arial, sans-serif; font-weight: 700; letter-spacing: .2em; color: var(--cranberry); }
.meaning-main-text h3, .goddess-story h3 { font-size: 40px; line-height: 1.02; font-weight: 500; color: var(--navy); margin: 15px 0 24px; }
.meaning-main-text h3 em, .goddess-story h3 em { color: var(--pine); font-weight: 400; }
.large-text { font-size: 20px !important; line-height: 1.65 !important; }
.meaning-main-text p, .goddess-story p { font-size: 16px; line-height: 1.75; color: #52616c; }
.fact-ribbon { display:grid; grid-template-columns:repeat(4,1fr); background:var(--navy); color:#fff; margin:0 2vw 60px; }
.fact-ribbon > div { padding:22px 20px; border-right:1px solid rgba(255,255,255,.18); }
.fact-ribbon small { display:block; font:9px Arial,sans-serif; letter-spacing:.16em; color:#dcecf5 !important; opacity:1 !important; }
.fact-ribbon strong { display:block; margin-top:8px; font-size:16px; color:#eaf6fb !important; opacity:1 !important; }
.knowledge-spread { display:grid; grid-template-columns: .35fr .65fr; gap:45px; padding: 0 2vw; }
.spread-title h3 { font-size:42px; line-height:.95; font-weight:500; margin:12px 0; color:var(--navy); }
.spread-title h3 em { color:var(--cranberry); }
.spread-title p { color:#65717c; line-height:1.6; }
.paper-notes { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
.paper-note { min-height:150px; text-align:left; border:0; padding:22px; background:#fffaf0; box-shadow:0 9px 20px rgba(24,34,45,.1); cursor:pointer; transition:.25s ease; position:relative; }
.paper-note:hover { transform:translateY(-5px) rotate(0deg)!important; box-shadow:0 16px 28px rgba(24,34,45,.16); }
.paper-note span { display:block; font:9px Arial,sans-serif; letter-spacing:.17em; color:var(--cranberry); }
.paper-note strong { display:block; font-size:21px; color:var(--navy); margin:13px 0 22px; }
.paper-note small { font:10px Arial,sans-serif; color:#6b7780; }
.note-1{transform:rotate(-1.5deg)} .note-2{transform:rotate(1.4deg)} .note-3{transform:rotate(.7deg)} .note-4{transform:rotate(-1deg)} .note-5{transform:rotate(1.8deg)} .note-6{transform:rotate(-.8deg)}

/* Page 3 */
.goddess-spread { display:grid; grid-template-columns:1fr .9fr; gap:70px; padding:60px 2vw; align-items:center; }
.goddess-story { position:relative; }
.goddess-art { min-height:580px; position:relative; display:grid; place-items:center; }
.goddess-art > img { width:min(500px,90%); height:560px; object-fit:cover; border-radius: 48% 48% 8px 8px; box-shadow:0 22px 45px var(--shadow); position:relative; z-index:2; }
.christmas-nativity-art::before { content:""; position:absolute; width:410px;height:410px;border-radius:50%;border:1px solid rgba(215,168,62,.45); animation:orbit 12s linear infinite; }
.star-orbit { position:absolute; width:470px;height:470px;border:1px dashed rgba(158,37,56,.3);border-radius:50%; animation:orbit 18s linear infinite reverse; }
@keyframes orbit { to { transform:rotate(360deg); } }
.nativity-caption { position:absolute; right:0; bottom:5px; background:var(--paper-2); padding:17px 22px; box-shadow:0 12px 25px rgba(24,34,45,.14); z-index:4; transform:rotate(-3deg); }
.nativity-caption small{font:9px Arial,sans-serif;letter-spacing:.16em;color:#6a7780}.nativity-caption strong{display:block;font-size:26px;color:var(--navy);margin:6px 0}.nativity-caption span{font:10px Arial,sans-serif;letter-spacing:.1em;color:var(--gold)}
.shakti-card { display:flex; gap:16px; align-items:center; margin-top:25px; padding:18px; background:var(--navy); color:#fff; }
.shakti-word { font-size:40px; color:var(--gold); }
.shakti-card strong { font-size:18px; }
.shakti-card p { margin:5px 0 0; color:rgba(255,255,255,.72)!important; font-size:13px!important; line-height:1.5!important; }
.symbol-header { display:flex; justify-content:space-between; margin:0 2vw 25px; }
.symbol-header h3 { font-size:38px; line-height:1; font-weight:500; margin:12px 0 0; color:var(--navy); }
.symbol-header h3 em { color:var(--cranberry); }
.symbol-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; padding:0 2vw; }
.symbol-grid button { border:0; background:transparent; text-align:left; cursor:pointer; }
.symbol-image { height:230px; position:relative; overflow:hidden; margin-bottom:13px; }
.symbol-image img { width:100%; height:100%; object-fit:cover; transition:.45s ease; }
.symbol-grid button:hover .symbol-image img { transform:scale(1.06); }
.symbol-icon { position:absolute; right:12px; bottom:10px; background:#fffaf0; width:45px;height:45px;display:grid;place-items:center;font-size:23px;box-shadow:0 5px 12px rgba(0,0,0,.14); }
.symbol-index { font:10px Arial,sans-serif;color:var(--cranberry);letter-spacing:.15em; }.symbol-grid strong{display:block;font-size:19px;color:var(--navy);margin:7px 0}.symbol-grid small{font:10px Arial,sans-serif;color:#71808a}
.family-section { margin:70px 2vw 0; border-top:1px solid rgba(24,34,45,.13); padding-top:35px; }
.family-heading h3 { font-size:36px; font-weight:500; line-height:1; margin:10px 0 28px; color:var(--navy); }
.family-list { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
.family-list button { border:1px solid rgba(24,34,45,.1); background:#fffaf0; text-align:left; padding:0 0 17px; cursor:pointer; transition:.25s; }.family-list button:hover{transform:translateY(-4px)}
.family-image { height:180px; overflow:hidden; }.family-image img{width:100%;height:100%;object-fit:cover}.family-list strong{display:block;font-size:18px;margin:12px 14px 3px;color:var(--navy)}.family-list span{display:block;margin:0 14px;color:#6d7880;font:11px Arial,sans-serif}.family-list small{display:block;margin:14px 14px 0;color:var(--cranberry);font:10px Arial,sans-serif}

/* Page 4 */
.calendar-intro { display:flex; justify-content:space-between; gap:40px; padding:40px 2vw 25px; align-items:end; }.calendar-intro p{max-width:700px;font-size:17px;line-height:1.65;color:#52616c}.calendar-intro strong{font:10px Arial,sans-serif;letter-spacing:.15em;color:var(--cranberry);line-height:1.7}
.festival-timeline { position:relative; padding:25px 2vw 20px; display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }.timeline-thread{position:absolute;left:7%;right:7%;top:52px;height:1px;background:rgba(158,37,56,.3)}
.timeline-entry{border:0;background:transparent;text-align:left;position:relative;z-index:2;cursor:pointer}.timeline-number{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:var(--paper);border:1px solid rgba(158,37,56,.4);color:var(--cranberry);font:11px Arial,sans-serif;margin:0 auto 12px}.timeline-entry.active .timeline-number{background:var(--cranberry);color:#fff;box-shadow:0 0 0 7px rgba(158,37,56,.08)}
.timeline-paper{min-height:150px;background:#fffaf0;padding:18px;box-shadow:0 8px 20px rgba(24,34,45,.08);transition:.25s}.timeline-entry:hover .timeline-paper,.timeline-entry.active .timeline-paper{transform:translateY(-4px);box-shadow:0 15px 25px rgba(24,34,45,.13)}.timeline-type{font:8px Arial,sans-serif;letter-spacing:.15em;color:#7b858c}.timeline-paper strong{display:block;font-size:21px;color:var(--navy);margin:9px 0 3px}.timeline-paper small{color:#74808a}.timeline-paper em{display:block;font:8px Arial,sans-serif;color:var(--cranberry);letter-spacing:.1em;margin-top:9px}.timeline-paper b{display:block;margin-top:15px;color:var(--pine);font:10px Arial,sans-serif}
.day-detail{display:grid;grid-template-columns:90px 1fr .72fr;gap:28px;align-items:center;margin:35px 2vw;padding:28px;background:var(--navy);color:#fff;position:relative;overflow:hidden}.day-detail-number{font-size:62px;color:var(--gold);font-weight:500}.day-detail-content > span{font:9px Arial,sans-serif;letter-spacing:.2em;color:#e4bf5d}.day-detail-content h3{font-size:42px;font-weight:500;margin:9px 0 0}.day-bengali{color:rgba(255,255,255,.45);font:12px Arial,sans-serif;margin:4px 0 15px}.day-detail-content p{line-height:1.65;color:rgba(255,255,255,.72)}.day-highlights{display:flex;flex-wrap:wrap;gap:8px}.day-highlights span{border:1px solid rgba(255,255,255,.17);padding:7px 10px;font:9px Arial,sans-serif;color:#e8d6a2}.day-detail-art{height:300px;position:relative}.day-detail-art img{width:100%;height:100%;object-fit:cover}.stage-snow{position:absolute;inset:0;display:grid;place-items:center;color:#fff;font-size:24px;letter-spacing:20px;text-shadow:0 0 10px #fff;opacity:.8;pointer-events:none}
.ritual-spread{display:grid;grid-template-columns:.4fr .6fr;gap:40px;margin:60px 2vw 0}.ritual-heading h3{font-size:40px;line-height:1;font-weight:500;margin:13px 0;color:var(--navy)}.ritual-heading h3 em{color:var(--cranberry)}.ritual-heading p{color:#687680;line-height:1.6}.ritual-list{border-top:1px solid rgba(24,34,45,.13)}.ritual-list button{width:100%;display:grid;grid-template-columns:45px 1fr 25px;gap:14px;align-items:center;border:0;border-bottom:1px solid rgba(24,34,45,.13);background:transparent;padding:18px 5px;text-align:left;cursor:pointer}.ritual-list button>span{font:10px Arial,sans-serif;color:var(--cranberry)}.ritual-list strong{display:block;font-size:18px;color:var(--navy)}.ritual-list small{display:block;margin-top:5px;color:#71808a}.ritual-list b{font-size:23px;font-weight:400;color:var(--pine)}.ritual-list button:hover{background:rgba(215,168,62,.06);padding-left:10px}

/* Page 5 */
.culture-intro{display:flex;justify-content:space-between;gap:30px;align-items:end;padding:45px 2vw 28px}.culture-intro p{max-width:760px;font-size:18px;line-height:1.65;color:#52616c}.culture-intro span{font:9px Arial,sans-serif;letter-spacing:.17em;color:var(--cranberry)}
.culture-collage{display:grid;grid-template-columns:1.25fr .75fr .75fr;grid-template-rows:260px 260px 200px;gap:16px;padding:0 2vw}.culture-object{border:0;position:relative;overflow:hidden;padding:0;cursor:pointer;background:#18222d}.culture-object img{width:100%;height:100%;object-fit:cover;transition:.5s}.culture-object:hover img{transform:scale(1.08)}.culture-object::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(5,12,20,.82),transparent 65%)}.culture-object-label{position:absolute;left:18px;bottom:15px;z-index:3;text-align:left;color:#fff}.culture-object-label span{color:#e8c75e}.culture-object-label strong{display:block;font-size:21px;margin:5px 0}.culture-object-label small{font:9px Arial,sans-serif;opacity:.75}.culture-icon{position:absolute;right:14px;top:13px;z-index:4;width:42px;height:42px;background:#fffaf0;display:grid;place-items:center;font-size:21px;box-shadow:0 5px 13px rgba(0,0,0,.15)}.culture-large{grid-row:span 2}.culture-community{grid-column:span 2}
.puja-food{display:grid;grid-template-columns:.8fr 1.2fr;gap:40px;margin:65px 2vw 0;padding:30px;background:#f1e6d3;border-left:5px solid var(--cranberry)}.puja-food h3{font-size:38px;font-weight:500;margin:8px 0;color:var(--navy)}.puja-food p{line-height:1.65;color:#596771}.food-list{display:flex;flex-wrap:wrap;align-content:center;gap:10px}.food-list span{background:#fffaf0;color:var(--navy);padding:12px 14px;border:1px solid rgba(24,34,45,.08);letter-spacing:.05em}
.bijoya-section{display:grid;grid-template-columns:1fr 1fr;gap:55px;align-items:center;margin:75px 2vw 0}.bijoya-image{height:420px;position:relative}.bijoya-image img{width:100%;height:100%;object-fit:cover;transform:rotate(1.3deg);border:10px solid #fffaf0;box-shadow:0 17px 35px rgba(24,34,45,.17)}.ending-lights{position:absolute;left:18px;top:-18px;color:var(--gold);letter-spacing:14px;font-size:18px}.bijoya-copy>span{font:9px Arial,sans-serif;letter-spacing:.2em;color:var(--cranberry)}.bijoya-copy h3{font-size:60px;line-height:.9;font-weight:500;color:var(--navy);margin:14px 0 20px}.bijoya-copy h3 em{color:var(--pine);font-weight:400}.bijoya-copy p{font-size:17px;line-height:1.7;color:#5c6a73}.bijoya-copy strong{display:block;font-size:28px;color:var(--cranberry);margin-top:20px}.bijoya-copy small{display:block;margin-top:6px;color:#77838a}
.final-message{text-align:center;margin:75px 2vw 10px;padding:55px 30px;background:var(--navy);color:white;position:relative;overflow:hidden}.final-message>span{font:10px Arial,sans-serif;letter-spacing:.25em;color:#e5c568}.final-message strong{display:block;max-width:720px;margin:16px auto 0;font-size:30px;line-height:1.2;font-weight:400}.final-snow{margin-top:25px;color:#dceaf3;letter-spacing:22px}

/* Indian Christmas section */
.india-christmas-section{margin:75px 2vw 0;padding:40px 0 0;border-top:1px solid rgba(24,34,45,.13);position:relative;z-index:2}.india-section-heading{display:grid;grid-template-columns:1fr .9fr;gap:35px;align-items:end}.india-section-heading>span{grid-column:1/-1;font:9px Arial,sans-serif;letter-spacing:.22em;color:var(--cranberry);font-weight:700}.india-section-heading h3{margin:10px 0 0;font-size:52px;line-height:.92;font-weight:500;color:var(--navy)}.india-section-heading h3 em{color:var(--pine);font-weight:400}.india-section-heading p{margin:0;max-width:520px;color:#5b6973;font-size:16px;line-height:1.7}.children-christmas{margin-top:42px;padding:28px;background:linear-gradient(135deg,rgba(220,234,243,.8),rgba(255,250,240,.9));border:1px solid rgba(24,34,45,.08)}.children-heading>span,.india-regions-heading>span{font:9px Arial,sans-serif;letter-spacing:.18em;color:#687681;font-weight:700}.children-heading h4{font-size:30px;line-height:1.05;color:var(--navy);font-weight:500;margin:9px 0 22px;max-width:620px}.children-heading h4 em{color:var(--cranberry);font-weight:400}.children-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.child-celebration-card{padding:18px;background:rgba(255,255,255,.74);border:1px solid rgba(24,34,45,.08);min-height:170px}.child-icon{font-size:28px;margin-bottom:14px}.child-celebration-card strong{display:block;color:var(--navy);font-size:18px}.child-celebration-card p{margin:7px 0 0;color:#62707a;line-height:1.55;font-size:13px}.india-regions-heading{margin:43px 0 18px}.india-regions-heading h4{font-size:31px;font-weight:500;margin:8px 0;color:var(--navy)}.india-region-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.india-region-card{border:1px solid rgba(24,34,45,.1);background:#fffaf0;padding:20px;text-align:left;cursor:pointer;transition:.25s;min-height:235px}.india-region-card:hover{transform:translateY(-5px);border-color:var(--gold);box-shadow:0 14px 28px rgba(24,34,45,.12)}.india-region-card>span{font-size:25px}.india-region-card small{display:block;margin-top:15px;color:var(--cranberry);font:9px Arial,sans-serif;letter-spacing:.16em;font-weight:700}.india-region-card strong{display:block;margin:7px 0;font-size:20px;color:var(--navy)}.india-region-card p{margin:0;color:#65727b;font-size:13px;line-height:1.55}.india-region-card b{display:block;margin-top:14px;color:var(--pine);font:10px Arial,sans-serif}.india-tradition-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px}.india-tradition-strip button{border:1px solid rgba(24,34,45,.08);background:var(--navy);color:#fff;padding:18px;text-align:left;cursor:pointer;transition:.2s}.india-tradition-strip button:hover{transform:translateY(-3px);background:var(--pine)}.india-tradition-strip span{font-size:24px}.india-tradition-strip strong{display:block;margin:10px 0 4px;font-size:15px}.india-tradition-strip small{font:9px Arial,sans-serif;opacity:.65}

/* Interactive present */
.gift-discovery{display:grid;grid-template-columns:.72fr .88fr 1fr;gap:25px;align-items:center;margin:70px 2vw 0;padding:34px;background:linear-gradient(135deg,#0d2032,#12263a);color:#fff;position:relative;overflow:hidden}.gift-discovery::before{content:"";position:absolute;width:330px;height:330px;border-radius:50%;right:-90px;top:-150px;background:radial-gradient(circle,rgba(220,234,243,.18),transparent 68%)}.gift-heading,.gift-stage,.gift-fact-card{position:relative;z-index:2}.gift-heading>span{font:9px Arial,sans-serif;letter-spacing:.2em;color:#e8c75e;font-weight:700}.gift-heading h3{font-size:39px;line-height:.95;font-weight:500;margin:12px 0;color:#fff}.gift-heading h3 em{color:#d9ecf8;font-weight:400}.gift-heading p{color:rgba(255,255,255,.66);line-height:1.6;font-size:14px}.gift-stage{height:300px;border:1px solid rgba(255,255,255,.14);background:radial-gradient(circle at 50% 54%,rgba(255,255,255,.08),transparent 48%);cursor:pointer;display:grid;place-items:center;overflow:hidden}.gift-glow{position:absolute;width:190px;height:190px;border-radius:50%;background:radial-gradient(circle,rgba(215,168,62,.23),transparent 70%);filter:blur(2px);transition:.4s}.gift-box{position:absolute;width:122px;height:106px;background:#9e2538;bottom:63px;left:50%;transform:translateX(-50%);box-shadow:0 20px 35px rgba(0,0,0,.3);transition:.45s}.gift-lid{position:absolute;left:-10px;top:-22px;width:142px;height:27px;background:#bd3448;box-shadow:0 6px 10px rgba(0,0,0,.18);transform-origin:90% 100%;transition:.55s cubic-bezier(.2,.8,.2,1)}.gift-ribbon.vertical{position:absolute;left:51px;top:0;width:20px;height:106px;background:#d7a83e}.gift-ribbon.horizontal{position:absolute;left:0;top:36px;width:122px;height:18px;background:#d7a83e}.gift-bow{position:absolute;top:-31px;width:29px;height:25px;border:8px solid #d7a83e;border-radius:50% 50% 50% 12px}.gift-bow.left{left:34px;transform:rotate(-24deg)}.gift-bow.right{right:34px;transform:rotate(24deg)}.gift-tree{position:absolute;font-size:67px;bottom:98px;left:50%;transform:translate(-50%,25px) scale(.25);opacity:0;transition:.55s .08s}.gift-confetti{position:absolute;top:35px;color:#d7a83e;letter-spacing:16px;opacity:0;transform:translateY(15px);transition:.5s}.gift-prompt{position:absolute;bottom:22px;font:10px Arial,sans-serif;letter-spacing:.14em;color:#fff;opacity:.75}.gift-discovery.opened .gift-lid{transform:rotate(-24deg) translate(-3px,-8px)}.gift-discovery.opened .gift-box{transform:translateX(-50%) translateY(12px)}.gift-discovery.opened .gift-tree{opacity:1;transform:translate(-50%,0) scale(1)}.gift-discovery.opened .gift-confetti{opacity:1;transform:translateY(0);animation:giftSpark .9s ease-in-out infinite alternate}.gift-discovery.opened .gift-glow{transform:scale(1.25);opacity:.85}.gift-fact-card{background:#fffaf0;color:var(--navy);min-height:225px;padding:24px;box-shadow:0 15px 30px rgba(0,0,0,.16)}.gift-fact-card span{font:9px Arial,sans-serif;letter-spacing:.18em;color:var(--cranberry);font-weight:700}.gift-fact-card strong{display:block;font-size:29px;line-height:1;margin:13px 0;color:var(--navy)}.gift-fact-card p{font-size:15px;line-height:1.7;color:#5d6b74}.gift-fact-card::after{content:"🎁";position:absolute;right:16px;bottom:12px;font-size:38px;opacity:.1}@keyframes giftSpark{to{transform:translateY(-5px) rotate(4deg)}}

/* Final requested Page 4 refinements */
.christmas-page .india-map-lines {
  position:absolute;
  left:50%; top:50%;
  width:65%; height:76%;
  transform:translate(-50%,-50%);
  z-index:2;
  overflow:visible;
}
.christmas-page .map-outline {
  fill:rgba(236,247,251,.18);
  stroke:#315d71;
  stroke-width:6;
  stroke-linejoin:round;
}
.christmas-page .map-border-line {
  fill:none;
  stroke:rgba(255,255,255,.85);
  stroke-width:2;
  stroke-dasharray:7 7;
}
.christmas-page .map-state {
  fill:none;
  stroke:rgba(49,93,113,.55);
  stroke-width:2.5;
  stroke-linecap:round;
}
.christmas-page .map-route {
  fill:none;
  stroke:#a62b43;
  stroke-width:3;
  stroke-dasharray:7 8;
  opacity:.72;
}
.christmas-page .map-location {
  fill:#a62b43;
  stroke:#fff;
  stroke-width:3;
  filter:drop-shadow(0 3px 5px rgba(0,0,0,.18));
}

.christmas-page .postcard-track {
  grid-template-columns:repeat(3,1fr);
  gap:18px;
  background:transparent;
  padding:8px 0 20px;
  overflow:visible;
}
.christmas-page .postcard-frame {
  position:relative;
  background:#fffdf7;
  padding:10px 10px 16px;
  min-height:330px;
  box-shadow:0 18px 30px rgba(13,42,57,.16);
  border:1px solid rgba(45,84,102,.12);
  transform:rotate(var(--post-rot));
  transition:transform .25s ease, box-shadow .25s ease;
}
.christmas-page .postcard-frame:hover {
  transform:translateY(-7px) rotate(0deg);
  box-shadow:0 24px 38px rgba(13,42,57,.22);
}
.christmas-page .postcard-1{--post-rot:-2deg}.christmas-page .postcard-2{--post-rot:1.5deg}.christmas-page .postcard-3{--post-rot:-1deg}.christmas-page .postcard-4{--post-rot:1.8deg}.christmas-page .postcard-5{--post-rot:-2deg}.christmas-page .postcard-6{--post-rot:1deg}
.christmas-page .postcard-tape {
  position:absolute;
  top:-9px; left:50%; transform:translateX(-50%) rotate(-2deg);
  width:74px; height:18px; background:rgba(196,48,73,.82);
  box-shadow:0 3px 6px rgba(0,0,0,.12); z-index:4;
}
.christmas-page .postcard-image {
  height:190px;
  margin:0;
  overflow:hidden;
  position:relative;
  background:#d9e8ef;
}
.christmas-page .postcard-image img {
  width:100%; height:100%; object-fit:cover; display:block; filter:saturate(.9);
}
.christmas-page .postcard-image b {
  position:absolute; right:10px; bottom:10px; width:34px; height:34px;
  display:grid; place-items:center; border-radius:50%;
  background:#f7fbfd; color:#a62b43; box-shadow:0 4px 10px rgba(0,0,0,.18);
}
.christmas-page .postcard-caption { padding:11px 7px 2px; }
.christmas-page .postcard-caption > span { font:8px Arial,sans-serif; letter-spacing:.18em; color:#a62b43; font-weight:700; }
.christmas-page .postcard-caption strong { display:block; margin-top:8px; color:#173f55; font-family:Georgia,serif; font-size:22px; line-height:1.04; }
.christmas-page .postcard-caption p { margin:7px 0 0; color:#526d7b; font-size:11px; line-height:1.55; }
@media(max-width:1000px){.christmas-page .postcard-track{grid-template-columns:repeat(2,1fr)}}
@media(max-width:650px){.christmas-page .india-map-lines{width:72%;height:62%}.christmas-page .postcard-track{grid-template-columns:1fr}.christmas-page .postcard-frame{min-height:0}}

/* End-of-year bridge */
.year-bridge{margin:58px 2vw 0;padding:25px 28px;display:grid;grid-template-columns:100px 1fr 100px;gap:20px;align-items:center;background:linear-gradient(90deg,#eaf1f5,#fffaf0 50%,#eaf1f5);border-top:1px solid rgba(24,34,45,.1);border-bottom:1px solid rgba(24,34,45,.1)}.year-bridge-tree,.year-bridge-fireworks{display:grid;place-items:center;font-size:58px}.year-bridge-fireworks{color:var(--gold);letter-spacing:8px;font-size:23px}.year-bridge span{font:9px Arial,sans-serif;letter-spacing:.18em;color:#687681;font-weight:700}.year-bridge h3{font-size:31px;font-weight:500;color:var(--navy);margin:8px 0}.year-bridge h3 em{color:var(--cranberry);font-weight:400}.year-bridge p{margin:0;max-width:720px;color:#65727a;font-size:14px;line-height:1.6}

/* Navigation */
.scrapbook-nav{width:min(1380px,92vw);margin:18px auto 40px;display:flex;align-items:center;justify-content:space-between;gap:20px;color:#fff}.scrapbook-nav>button{width:45px;height:45px;border:1px solid rgba(255,255,255,.2);border-radius:50%;background:rgba(255,255,255,.06);color:#fff;cursor:pointer}.scrapbook-nav>button:disabled{opacity:.3;cursor:not-allowed}.scrapbook-nav>div{display:flex;gap:8px}.scrapbook-nav>div button{border:0;background:transparent;color:rgba(255,255,255,.42);cursor:pointer;font:11px Arial,sans-serif;padding:10px}.scrapbook-nav>div button.selected{color:#f1cd65;border-bottom:1px solid #f1cd65}
.next-page{display:block;margin:55px 2vw 0 auto;border:0;background:var(--navy);color:#fff;padding:14px 20px;cursor:pointer;box-shadow:0 8px 18px rgba(24,34,45,.15);transition:.2s}.next-page:hover{transform:translateX(4px);background:var(--cranberry)}

/* Modals */
.modal-backdrop{position:fixed;inset:0;z-index:100;display:grid;place-items:center;background:rgba(4,10,16,.78);padding:25px;backdrop-filter:blur(8px)}.culture-modal,.video-modal{width:min(850px,95vw);max-height:90vh;overflow:auto;background:var(--paper-2);box-shadow:0 30px 70px rgba(0,0,0,.35);position:relative}.culture-modal>img{width:100%;height:300px;object-fit:cover}.modal-close{position:absolute;right:15px;top:12px;width:38px;height:38px;border:0;border-radius:50%;background:var(--navy);color:#fff;font-size:25px;cursor:pointer;z-index:4}.modal-paper{padding:30px}.modal-paper>span,.video-heading>span{font:9px Arial,sans-serif;letter-spacing:.18em;color:var(--cranberry)}.modal-paper h2,.video-heading h2{font-size:42px;line-height:1;margin:10px 0;color:var(--navy);font-weight:500}.modal-flower{color:var(--gold);font-size:22px}.modal-paper p{font-size:17px;line-height:1.75;color:#53626d}.video-modal{padding:35px}.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #07111d;
}

.video-frame iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
}

.video-placeholder{height:330px;background:var(--navy);display:grid;place-items:center;align-content:center;color:white;text-align:center;gap:8px}.video-placeholder div{font-size:55px}.video-placeholder strong{font-size:22px}.video-placeholder p{color:rgba(255,255,255,.62);max-width:450px;line-height:1.5}

/* Responsive */
@media (max-width: 1000px){
  .arrival-content,.meaning-intro,.goddess-spread,.ritual-spread,.puja-food,.bijoya-section{grid-template-columns:1fr;}.christmas-art{min-height:520px}.fact-ribbon{grid-template-columns:repeat(2,1fr)}.festival-timeline{grid-template-columns:repeat(2,1fr)}.timeline-thread{display:none}.family-list{grid-template-columns:repeat(2,1fr)}.symbol-grid{grid-template-columns:repeat(2,1fr)}.knowledge-spread{grid-template-columns:1fr}.day-detail{grid-template-columns:70px 1fr}.day-detail-art{grid-column:1/-1}.culture-collage{grid-template-columns:1fr 1fr;grid-template-rows:260px 260px 260px 200px}.culture-large{grid-row:span 2}.culture-community{grid-column:span 2}.arrival-copy{max-width:none}.meaning-image{height:400px}
}
@media (max-width: 650px){
  .festival-header{align-items:flex-start;flex-direction:column;padding-bottom:14px}.header-place{display:none}.page{padding:35px 18px 60px}.arrival-content{padding:45px 0 20px}.arrival-copy h1{font-size:62px}.arrival-top,.arrival-footer,.culture-intro,.calendar-intro{flex-direction:column;align-items:flex-start}.arrival-footer{gap:8px}.christmas-hero-photo{height:430px}.christmas-paper{right:0}.fact-ribbon,.paper-notes,.symbol-grid,.family-list,.festival-timeline,.culture-collage{grid-template-columns:1fr}.culture-community{grid-column:auto}.culture-large{grid-row:auto}.day-detail{grid-template-columns:1fr}.day-detail-number{font-size:42px}.page-title{align-items:flex-start}.bengali-side{display:none}.page-title h2{font-size:48px}.meaning-image{height:330px}.goddess-art{min-height:450px}.goddess-art>img{height:430px}.star-orbit,.christmas-nativity-art::before{width:340px;height:340px}.family-list{gap:14px}.puja-food{padding:22px}.bijoya-copy h3{font-size:50px}.final-message strong{font-size:23px}.scrapbook-nav{margin-top:12px}.scrapbook-nav>div{gap:0}.scrapbook-nav>div button{padding:7px}.sleigh-animation{transform:scale(.75);transform-origin:left top;top:140px}
}
@media (max-width: 1000px){
  .india-section-heading{grid-template-columns:1fr}.children-grid{grid-template-columns:repeat(2,1fr)}.india-region-grid{grid-template-columns:repeat(2,1fr)}.india-tradition-strip{grid-template-columns:repeat(2,1fr)}.gift-discovery{grid-template-columns:1fr 1fr}.gift-heading{grid-column:1/-1}.gift-fact-card{grid-column:1/-1}.year-bridge{grid-template-columns:70px 1fr 70px}
}
@media (max-width:650px){
  .children-grid,.india-region-grid,.india-tradition-strip{grid-template-columns:1fr}.gift-discovery{grid-template-columns:1fr;padding:24px 18px}.gift-heading{grid-column:auto}.gift-fact-card{grid-column:auto}.gift-stage{height:260px}.year-bridge{grid-template-columns:1fr;text-align:center}.year-bridge-tree,.year-bridge-fireworks{font-size:42px}.sleigh-animation{transform:scale(.5);top:115px}.reindeer-team{font-size:25px}.santa-sleigh{left:105px}.sleigh-trail{left:160px}.sleigh-spark.spark-a{left:95px}.sleigh-spark.spark-b{left:145px}
}


/* =========================================================
   CHRISTMAS VISUAL OVERHAUL
   A completely separate winter scrapbook world.
========================================================= */

.christmas-page {
  --paper: #eaf2f7 !important;
  --paper-2: #f7fbfd !important;
  --ink: #10202e !important;
  --muted: #718391 !important;
  --navy: #071523 !important;
  --navy-2: #102a40 !important;
  --pine: #1f5a4b !important;
  --cranberry: #a62b43 !important;
  --gold: #d8d1a1 !important;
  --ice: #d9edf7 !important;
  --white: #ffffff !important;
  --shadow: rgba(3,15,27,.28) !important;
  background:
    radial-gradient(circle at 12% 8%, rgba(157,205,230,.12), transparent 28%),
    radial-gradient(circle at 88% 22%, rgba(255,255,255,.07), transparent 24%),
    linear-gradient(160deg, #03101d 0%, #0a1b2d 45%, #04111f 100%) !important;
}

.christmas-page .scrapbook { width:min(1440px,94vw); margin:34px auto 0; }

.christmas-page .page {
  color:#142431;
  background:
    linear-gradient(135deg, rgba(255,255,255,.68), rgba(220,236,245,.65)),
    #eaf2f7 !important;
  border:1px solid rgba(216,237,249,.25);
  box-shadow:0 35px 100px rgba(0,0,0,.42);
}

.christmas-page .page:nth-child(2) {
  background:
    linear-gradient(135deg, rgba(248,252,255,.92), rgba(214,232,242,.86)),
    #edf5f9 !important;
}

.christmas-page .page:nth-child(3) {
  background:
    linear-gradient(135deg, rgba(235,246,251,.94), rgba(211,230,240,.88)),
    #e9f3f8 !important;
}

.christmas-page .page:nth-child(4) {
  background:
    linear-gradient(135deg, rgba(247,250,252,.95), rgba(221,236,243,.9)),
    #edf4f7 !important;
}

.christmas-page .page:nth-child(5) {
  background:
    linear-gradient(135deg, rgba(236,245,250,.96), rgba(205,225,237,.88)),
    #e7f1f6 !important;
}

.christmas-page .page::before {
  inset:14px;
  border:1px solid rgba(106,147,170,.24);
  border-radius:2px;
}

.christmas-page .page::after {
  width:340px;
  height:340px;
  border:1px dashed rgba(94,144,173,.18);
  right:-170px;
  top:230px;
}

.christmas-page .page-title h2,
.christmas-page .meaning-main-text h3,
.christmas-page .goddess-story h3,
.christmas-page .india-section-heading h3,
.christmas-page .page-title,
.christmas-page .gift-heading h3,
.christmas-page .year-bridge h3,
.christmas-page .final-message strong {
  color:#092033 !important;
}

.christmas-page .page-title h2 em,
.christmas-page .arrival-copy h1 em,
.christmas-page .india-section-heading h3 em,
.christmas-page .gift-heading h3 em,
.christmas-page .year-bridge h3 em,
.christmas-page .bijoya-copy h3 em {
  color:#a62b43 !important;
}

.christmas-page .meaning-main-text h3 em,
.christmas-page .goddess-story h3 em { color:#1f5a4b !important; }

.christmas-page .title-number,
.christmas-page .christmas-kicker,
.christmas-page .arrival-note em,
.christmas-page .meaning-main-text > span,
.christmas-page .goddess-story > span,
.christmas-page .symbol-header span,
.christmas-page .family-heading > span,
.christmas-page .india-section-heading>span {
  color:#a62b43 !important;
}

.christmas-page .bengali-side { color:#1f5a4b !important; }

.christmas-page .arrival-page {
  min-height:930px;
  background:
    radial-gradient(circle at 72% 28%, rgba(170,213,238,.18), transparent 24%),
    radial-gradient(circle at 32% 0%, rgba(255,255,255,.08), transparent 28%),
    linear-gradient(145deg, #061422 0%, #0a2034 54%, #061321 100%) !important;
  color:#eef8ff !important;
}

.christmas-page .arrival-page::before {
  border-color:rgba(209,235,249,.16);
}

.christmas-page .arrival-top,
.christmas-page .arrival-footer { color:#c4d9e6 !important; }
.christmas-page .arrival-top { border-color:rgba(201,226,240,.18) !important; }
.christmas-page .arrival-footer { border-color:rgba(201,226,240,.18) !important; }

.christmas-page .arrival-copy { position:relative; z-index:12; }
.christmas-page .arrival-copy h1 { color:#f4fbff !important; }
.christmas-page .christmas-script { color:#cfe7f4 !important; }
.christmas-page .arrival-lead { color:#c0d4df !important; }
.christmas-page .arrival-note {
  background:rgba(231,245,253,.08) !important;
  border-left:2px solid #d8d1a1 !important;
  color:#f4fbff !important;
  backdrop-filter:blur(14px);
}
.christmas-page .arrival-note small { color:#a9c3d2 !important; }
.christmas-page .arrival-note p { color:#d5e4ec !important; }
.christmas-page .enter-button {
  background:#f3f8fb !important;
  color:#081b2b !important;
  box-shadow:0 18px 42px rgba(0,0,0,.3) !important;
}
.christmas-page .enter-circle { background:#a62b43 !important; color:#fff !important; }
.christmas-page .enter-button small { color:#607381 !important; }
.christmas-page .sound-card {
  border-color:rgba(200,224,237,.24) !important;
  background:rgba(230,243,250,.06) !important;
  color:#f6fbff !important;
}
.christmas-page .sound-card strong { color:#fff !important; }
.christmas-page .sound-card span { color:#b3cad8 !important; }
.christmas-page .sound-card-icon { background:#dcecf5 !important; }
.christmas-page .bell-wave i.wave-on { background:#a62b43 !important; }

.christmas-page .christmas-art { min-height:610px; }
.christmas-page .arrival-window {
  position:relative;
  width:min(510px,92%);
  height:580px;
  overflow:hidden;
  border:12px solid rgba(245,250,252,.96);
  box-shadow:0 30px 70px rgba(0,0,0,.42), inset 0 0 0 1px rgba(13,38,54,.2);
  transform:rotate(1deg);
  background:#091b2c;
}

.christmas-page .arrival-window img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: 70% center;
  transform: scale(1.08);
}

.christmas-page .window-sky {
  position:absolute; inset:0;
  background:
    radial-gradient(circle at 48% 28%, rgba(213,235,246,.3), transparent 11%),
    radial-gradient(circle at 18% 22%, rgba(255,255,255,.18), transparent 2%),
    radial-gradient(circle at 76% 39%, rgba(255,255,255,.13), transparent 2%),
    linear-gradient(180deg,#071a2b 0%,#0d2d45 60%,#0a1f30 100%);
}
.christmas-page .window-horizon {
  position:absolute; left:0; right:0; bottom:0; height:23%;
  background:linear-gradient(180deg,rgba(212,230,238,.06),rgba(255,255,255,.13));
  border-top:1px solid rgba(224,244,252,.28);
}
.christmas-page .window-city {
  position:absolute; left:10%; right:10%; bottom:13%; height:95px;
  display:flex; align-items:flex-end; gap:7px;
}
.christmas-page .window-city span { flex:1; background:#05101b; opacity:.82; box-shadow:0 -6px 0 rgba(190,219,235,.08); }
.christmas-page .window-city span:nth-child(1){height:55%}.christmas-page .window-city span:nth-child(2){height:78%}.christmas-page .window-city span:nth-child(3){height:45%}.christmas-page .window-city span:nth-child(4){height:92%}.christmas-page .window-city span:nth-child(5){height:62%}.christmas-page .window-city span:nth-child(6){height:74%}
.christmas-page .window-star { position:absolute; color:#edf9ff; text-shadow:0 0 18px rgba(207,239,255,.95); z-index:3; animation:windowTwinkle 2.8s ease-in-out infinite; }
.christmas-page .star-a{left:17%;top:18%;font-size:15px}.christmas-page .star-b{right:18%;top:29%;font-size:11px;animation-delay:.8s}.christmas-page .star-c{left:62%;top:14%;font-size:12px;animation-delay:1.3s}
@keyframes windowTwinkle{50%{opacity:.35;transform:scale(.62)}}
.christmas-page .arrival-photo-card {
  position:absolute !important; right:-8px !important; bottom:25px !important;
  width:230px !important; background:#f7fbfd !important; color:#102132 !important;
  border:1px solid rgba(255,255,255,.55); padding:18px 20px !important;
  transform:rotate(-4deg); box-shadow:0 18px 34px rgba(0,0,0,.28);
}
.christmas-page .arrival-photo-card small { color:#6d7e88 !important; }
.christmas-page .arrival-photo-card strong { color:#0d2131 !important; }
.christmas-page .arrival-photo-card em { color:#a62b43 !important; }

/* Curved user-supplied SVG flight */
.christmas-page .sleigh-flight {
  position:absolute;
  z-index:11;
  top:0;
  left:0;
  width:285px;
  height:auto;
  offset-path:path("M -260 370 C 70 30, 410 520, 760 190 S 1440 360, 1760 70");
  offset-rotate:auto;
  animation:sleighCurve 15s cubic-bezier(.25,.1,.25,1) infinite;
  filter:drop-shadow(0 0 5px rgba(211,226,235,.28)) drop-shadow(0 10px 20px rgba(0,0,0,.22));
  pointer-events:none;
}
.christmas-page .sleigh-svg {
  width:285px;
  max-width:none;
  height:auto;
  display:block;
  filter:brightness(1.05) saturate(.74) contrast(.94) drop-shadow(0 0 7px rgba(210,224,233,.34));
}
.christmas-page .flight-spark {
  position:absolute; color:#d8edf7; text-shadow:0 0 12px rgba(214,238,250,.9);
  animation:flightSpark 1.6s ease-in-out infinite alternate;
}
.christmas-page .spark-one{right:4%;top:10%;font-size:25px}.christmas-page .spark-two{right:16%;top:42%;font-size:18px;animation-delay:.5s}.christmas-page .spark-three{right:-2%;top:58%;font-size:24px;animation-delay:1s}
.christmas-page .flight-trail{position:absolute;left:12%;bottom:-18px;color:#b7d4e4;letter-spacing:9px;font-size:11px;opacity:.65;white-space:nowrap;}
@keyframes sleighCurve{0%{offset-distance:0%;opacity:0;transform:scale(.94)}6%{opacity:1}50%{transform:scale(1)}92%{opacity:1}100%{offset-distance:100%;opacity:0;transform:scale(.96)}}
@keyframes flightSpark{to{transform:translateY(-8px) scale(1.25);opacity:.45}}

/* Scrapbook cards */
.christmas-page .paper-note,
.christmas-page .symbol-grid button,
.christmas-page .family-list button,
.christmas-page .india-region-card,
.christmas-page .child-celebration-card,
.christmas-page .ritual-list button {
  background:rgba(249,253,255,.68) !important;
  border:1px solid rgba(85,129,151,.16) !important;
  box-shadow:0 14px 28px rgba(22,51,68,.10) !important;
}
.christmas-page .paper-note:hover,
.christmas-page .symbol-grid button:hover,
.christmas-page .family-list button:hover,
.christmas-page .india-region-card:hover,
.christmas-page .child-celebration-card:hover {
  border-color:rgba(166,43,67,.34) !important;
  box-shadow:0 20px 38px rgba(22,51,68,.16) !important;
}
.christmas-page .image-tag,
.christmas-page .india-tradition-strip button,
.christmas-page .next-page {
  background:#092033 !important;
  color:#fff !important;
}
.christmas-page .fact-ribbon,
.christmas-page .children-christmas,
.christmas-page .puja-food,
.christmas-page .ritual-spread {
  background:linear-gradient(135deg,rgba(198,222,235,.52),rgba(246,251,253,.62)) !important;
  border-color:rgba(85,129,151,.14) !important;
}
.christmas-page .india-region-card strong,
.christmas-page .child-celebration-card strong,
.christmas-page .family-list strong,
.christmas-page .symbol-grid strong,
.christmas-page .ritual-list strong,
.christmas-page .day-detail-content h3,
.christmas-page .puja-food h3,
.christmas-page .bijoya-copy h3 { color:#092033 !important; }
.christmas-page .india-region-card small,
.christmas-page .child-celebration-card p,
.christmas-page .india-region-card p,
.christmas-page .family-list span,
.christmas-page .ritual-list small,
.christmas-page .day-detail-content p { color:#5f7381 !important; }

/* Gift: premium reveal, no emoji */
.christmas-page .gift-discovery {
  margin:78px 2vw 0 !important;
  padding:0 !important;
  display:grid !important;
  grid-template-columns:.85fr 1.15fr .9fr !important;
  min-height:410px;
  background:linear-gradient(135deg,#071725,#0d2b42 55%,#0b2031) !important;
  border:1px solid rgba(204,229,241,.16) !important;
  box-shadow:0 30px 70px rgba(0,0,0,.38) !important;
}
.christmas-page .gift-discovery::before { display:none !important; }
.christmas-page .gift-heading { padding:44px 20px 44px 38px; }
.christmas-page .gift-heading>span { color:#bcd7e5 !important; }
.christmas-page .gift-heading h3 { color:#f4fbff !important; font-size:44px; }
.christmas-page .gift-heading h3 em { color:#d7e9f2 !important; }
.christmas-page .gift-heading p { color:#b7cad5 !important; max-width:330px; }
.christmas-page .gift-stage {
  position:relative !important;
  height:100% !important;
  min-height:410px !important;
  border:0 !important;
  border-left:1px solid rgba(211,234,246,.12) !important;
  border-right:1px solid rgba(211,234,246,.12) !important;
  background:radial-gradient(circle at 50% 54%,rgba(202,233,247,.12),transparent 36%) !important;
}
.christmas-page .gift-stage-label {
  position:absolute; top:26px; left:50%; transform:translateX(-50%); z-index:5;
  color:#a9c7d6; font:9px Arial,sans-serif; letter-spacing:.22em; white-space:nowrap;
}
.christmas-page .gift-aura {
  position:absolute; width:265px; height:265px; border-radius:50%;
  background:radial-gradient(circle,rgba(210,239,250,.15),transparent 70%);
  filter:blur(3px); transition:.7s ease;
}
.christmas-page .memory-box {
  position:absolute; width:164px; height:118px; left:50%; bottom:82px; transform:translateX(-50%);
  background:linear-gradient(150deg,#f3f8fb,#bfd9e5); border:1px solid rgba(255,255,255,.64);
  box-shadow:0 30px 45px rgba(0,0,0,.36); transition:.75s cubic-bezier(.2,.8,.2,1); z-index:3;
}
.christmas-page .memory-box-side { position:absolute; inset:0; background:linear-gradient(90deg,rgba(255,255,255,.14),rgba(19,66,88,.12),rgba(255,255,255,.18)); }
.christmas-page .memory-box-lid {
  position:absolute; left:-8px; top:-28px; width:180px; height:32px; border:1px solid rgba(255,255,255,.72);
  background:linear-gradient(180deg,#f8fcfe,#c8dde8); transform-origin:12% 100%; transition:.75s cubic-bezier(.18,.84,.24,1); z-index:3;
}
.christmas-page .memory-box-ribbon-v { position:absolute; width:22px; left:71px; top:0; bottom:0; background:#a62b43; opacity:.9; }
.christmas-page .memory-box-ribbon-h { position:absolute; left:0; right:0; top:41px; height:19px; background:#a62b43; opacity:.88; }
.christmas-page .memory-box-seam { position:absolute; left:15px; right:15px; top:10px; border-top:1px solid rgba(9,32,51,.14); }
.christmas-page .memory-reveal {
  position:absolute; left:50%; bottom:130px; width:150px; height:180px; transform:translateX(-50%) translateY(85px) scale(.55);
  opacity:0; color:#e6f4fb; transition:.8s cubic-bezier(.18,.82,.26,1); z-index:2; display:grid; place-items:center;
}
.christmas-page .reveal-tree { width:130px; height:160px; filter:drop-shadow(0 0 18px rgba(214,239,249,.42)); }
.christmas-page .reveal-star { position:absolute; top:-8px; color:#fff; text-shadow:0 0 18px rgba(255,255,255,.95); font-size:28px; animation:revealStar 1.8s ease-in-out infinite alternate; }
@keyframes revealStar{to{transform:scale(1.25);opacity:.5}}
.christmas-page .memory-spark { position:absolute; color:#e4f6ff; opacity:0; transition:.55s; }
.christmas-page .memory-spark.spark-a{left:27%;top:25%;font-size:28px}.christmas-page .memory-spark.spark-b{right:25%;top:34%;font-size:19px}.christmas-page .memory-spark.spark-c{left:17%;top:58%;font-size:18px}
.christmas-page .gift-discovery.opened .memory-box-lid { transform:rotate(-22deg) translate(-12px,-13px); }
.christmas-page .gift-discovery.opened .memory-box { transform:translateX(-50%) translateY(10px); }
.christmas-page .gift-discovery.opened .memory-reveal { opacity:1; transform:translateX(-50%) translateY(-2px) scale(1); }
.christmas-page .gift-discovery.opened .memory-spark { opacity:1; animation:revealFloat 1.15s ease-in-out infinite alternate; }
.christmas-page .gift-discovery.opened .gift-aura { transform:scale(1.22); opacity:.95; }
@keyframes revealFloat{to{transform:translateY(-9px) rotate(6deg)}}
.christmas-page .gift-fact-card { position:relative !important; background:#f4f9fc !important; color:#092033 !important; min-height:410px !important; padding:44px 34px !important; box-shadow:none !important; }
.christmas-page .premium-fact-card .fact-index { position:absolute; right:25px; top:23px; font:9px Arial,sans-serif; letter-spacing:.18em; color:#8196a4; }
.christmas-page .gift-fact-card span { color:#a62b43 !important; }
.christmas-page .gift-fact-card strong { color:#092033 !important; font-size:36px !important; }
.christmas-page .gift-fact-card p { color:#5d717e !important; }
.christmas-page .gift-fact-card::after { display:none !important; }

/* India section feels like an archive/map, not generic cards */
.christmas-page .india-christmas-section { border-color:rgba(76,125,149,.2) !important; }
.christmas-page .children-christmas { position:relative; overflow:hidden; }
.christmas-page .children-christmas::after { content:"INDIA"; position:absolute; right:-8px; bottom:-25px; font-size:130px; line-height:1; color:rgba(56,105,128,.055); font-weight:700; letter-spacing:.05em; pointer-events:none; }
.christmas-page .india-tradition-strip button { background:#092033 !important; }

/* Year ending is blue, not fireworks-yellow */
.christmas-page .year-bridge { background:linear-gradient(90deg,#dbeaf2,#f7fbfd 50%,#dbeaf2) !important; border-color:rgba(65,113,137,.18) !important; }
.christmas-page .year-bridge-fireworks { color:#8fb9cc !important; }
.christmas-page .final-message.christmas-final { border-top:1px solid rgba(65,113,137,.14); margin-top:50px; padding-top:25px; }
.christmas-page .final-snow { color:#8eb3c6 !important; }

/* Navigation */
.christmas-page .scrapbook-nav { color:#fff; }
.christmas-page .scrapbook-nav>button { background:rgba(224,242,249,.06); border-color:rgba(224,242,249,.18); }
.christmas-page .scrapbook-nav>div button.selected { color:#dceef6; border-color:#dceef6; }

@media(max-width:1000px){
  .christmas-page .gift-discovery { grid-template-columns:1fr 1fr !important; }
  .christmas-page .gift-heading { grid-column:1/-1; }
  .christmas-page .gift-fact-card { grid-column:1/-1; min-height:250px !important; }
  .christmas-page .sleigh-flight { width:250px; }
  .christmas-page .sleigh-svg { width:250px; }
}

@media(max-width:650px){
  .christmas-page .page { min-height:0; }
  .christmas-page .christmas-art { min-height:470px; }
  .christmas-page .arrival-window { height:440px; width:94%; }
  .christmas-page .arrival-photo-card { right:2px !important; bottom:12px !important; width:195px !important; }
  .christmas-page .sleigh-flight { width:215px; }
  .christmas-page .sleigh-svg { width:215px; }
  .christmas-page .gift-discovery { grid-template-columns:1fr !important; }
  .christmas-page .gift-heading { grid-column:auto; padding:30px 24px 20px; }
  .christmas-page .gift-stage { min-height:320px !important; }
  .christmas-page .gift-fact-card { min-height:235px !important; }
  .christmas-page .children-grid,.christmas-page .india-region-grid,.christmas-page .india-tradition-strip { grid-template-columns:1fr !important; }
}

/* =========================================================
   REQUESTED VISUAL FIXES ONLY
   - Page 1 winter-night palette shared across all pages
   - readable India cards
   - non-square timeline presentation
   - visible final message
   - persistent gift memory with automatic close
========================================================= */

/* All scrapbook pages inherit Page 1's winter-night world */
.christmas-page .page,
.christmas-page .christmas-page-two,
.christmas-page .christmas-page-three,
.christmas-page .christmas-page-india,
.christmas-page .christmas-page-four,
.christmas-page .christmas-page-five {
  background:
    radial-gradient(circle at 84% 8%, rgba(136,181,208,.10), transparent 24%),
    radial-gradient(circle at 12% 84%, rgba(88,139,169,.08), transparent 23%),
    linear-gradient(145deg,#061422 0%,#0a2034 54%,#061321 100%) !important;
  color:#e8f5fb !important;
}

/* No warm cream/yellow page-paper showing through */
.christmas-page .page::before {
  border-color:rgba(210,232,243,.15) !important;
}
.christmas-page .page::after {
  border-color:rgba(132,172,195,.16) !important;
}

/* Shared page text */
.christmas-page .page-title,
.christmas-page .page-title h2,
.christmas-page .meaning-main-text h3,
.christmas-page .goddess-story h3,
.christmas-page .india-section-heading h3,
.christmas-page .gift-heading h3,
.christmas-page .year-bridge h3,
.christmas-page .final-message strong,
.christmas-page .symbol-header h3,
.christmas-page .family-heading h3,
.christmas-page .ritual-heading h3,
.christmas-page .india-regions-heading h4 {
  color:#eaf6fb !important;
}
.christmas-page .page-title h2 em,
.christmas-page .meaning-main-text h3 em,
.christmas-page .goddess-story h3 em,
.christmas-page .india-section-heading h3 em,
.christmas-page .gift-heading h3 em,
.christmas-page .year-bridge h3 em,
.christmas-page .bijoya-copy h3 em {
  color:#d98a9b !important;
}
.christmas-page .meaning-main-text p,
.christmas-page .goddess-story p,
.christmas-page .india-section-heading p,
.christmas-page .calendar-intro p,
.christmas-page .culture-intro p,
.christmas-page .bijoya-copy p,
.christmas-page .year-bridge p {
  color:#b9cfdb !important;
}

/* First screenshot: India cards remain frosted, but text is readable */
.christmas-page .india-region-card {
  background:linear-gradient(145deg,rgba(218,235,243,.93),rgba(183,209,222,.91)) !important;
  border:1px solid rgba(236,247,252,.55) !important;
  border-radius:24px 10px 24px 10px !important;
  color:#173447 !important;
  box-shadow:0 18px 34px rgba(0,0,0,.22) !important;
}
.christmas-page .india-region-card:nth-child(2n) {
  transform:rotate(-1deg);
  border-radius:10px 24px 10px 24px !important;
}
.christmas-page .india-region-card:nth-child(3n) {
  transform:rotate(.8deg);
}
.christmas-page .india-region-card small,
.christmas-page .india-region-card strong,
.christmas-page .india-region-card p,
.christmas-page .india-region-card b {
  color:#173447 !important;
}
.christmas-page .india-region-card small { color:#a62b43 !important; }
.christmas-page .india-region-card p { color:#456577 !important; }
.christmas-page .india-region-card b { color:#205a70 !important; }

/* Children cards readable on dark page */
.christmas-page .children-christmas {
  background:linear-gradient(135deg,rgba(34,67,87,.78),rgba(15,39,57,.78)) !important;
  border-color:rgba(195,221,233,.16) !important;
}
.christmas-page .child-celebration-card {
  background:rgba(218,235,243,.10) !important;
  border-color:rgba(202,229,240,.16) !important;
  border-radius:22px 8px 22px 8px !important;
}
.christmas-page .child-celebration-card strong { color:#eaf6fb !important; }
.christmas-page .child-celebration-card p { color:#b9d0dc !important; }

/* Second screenshot: timeline becomes hanging Christmas tags rather than square blocks */
.christmas-page .christmas-timeline {
  position:relative;
  display:grid !important;
  grid-template-columns:repeat(4,1fr) !important;
  gap:34px 24px !important;
  padding:44px 8px 10px !important;
}
.christmas-page .christmas-timeline .timeline-thread {
  top:29px !important;
  background:linear-gradient(90deg,transparent,#8bb6c9 12%,#8bb6c9 88%,transparent) !important;
  height:1px !important;
}
.christmas-page .christmas-timeline .timeline-entry {
  position:relative !important;
  display:flex !important;
  flex-direction:column !important;
  align-items:center !important;
  gap:12px !important;
  background:none !important;
  border:0 !important;
  transform:none !important;
}
.christmas-page .christmas-timeline .timeline-number {
  width:58px !important;
  height:58px !important;
  display:grid !important;
  place-items:center !important;
  border-radius:50% !important;
  background:#0a2034 !important;
  border:1px solid #91bdcf !important;
  color:#dff1f7 !important;
  box-shadow:0 0 0 7px rgba(117,161,183,.08) !important;
  z-index:2;
}
.christmas-page .christmas-timeline .timeline-paper {
  width:100% !important;
  min-height:158px !important;
  padding:24px 22px 22px !important;
  background:rgba(18,53,72,.72) !important;
  border:1px solid rgba(192,221,233,.18) !important;
  border-radius:28px 9px 28px 9px !important;
  box-shadow:0 18px 36px rgba(0,0,0,.23) !important;
  position:relative !important;
}
.christmas-page .christmas-timeline .timeline-entry:nth-child(odd) .timeline-paper {
  transform:rotate(-1.1deg);
}
.christmas-page .christmas-timeline .timeline-entry:nth-child(even) .timeline-paper {
  transform:rotate(1.1deg);
  border-radius:9px 28px 9px 28px !important;
}
.christmas-page .christmas-timeline .timeline-paper::before {
  content:"";
  position:absolute;
  width:42px;
  height:10px;
  top:-7px;
  left:50%;
  transform:translateX(-50%);
  background:#a62b43;
  clip-path:polygon(0 0,100% 0,88% 100%,62% 68%,38% 100%,12% 68%);
  opacity:.92;
}
.christmas-page .christmas-timeline .timeline-type,
.christmas-page .christmas-timeline .timeline-paper strong,
.christmas-page .christmas-timeline .timeline-paper small,
.christmas-page .christmas-timeline .timeline-paper b {
  color:#dceef6 !important;
}
.christmas-page .christmas-timeline .timeline-type { color:#b3d2df !important; }
.christmas-page .christmas-timeline .timeline-paper small { opacity:.72; }
.christmas-page .christmas-timeline .timeline-paper em { color:#d98a9b !important; }

/* Third screenshot: final message is readable */
.christmas-page .final-message.christmas-final {
  background:linear-gradient(145deg,#071b2d,#0b2a3f) !important;
  border:1px solid rgba(186,218,231,.16) !important;
}
.christmas-page .final-message.christmas-final > span {
  color:#c9e0ea !important;
}
.christmas-page .final-message.christmas-final strong {
  color:#eaf6fb !important;
}

/* Year bridge: dark winter version so text cannot disappear */
.christmas-page .year-bridge {
  background:linear-gradient(145deg,#0b2537,#112f44,#0b2032) !important;
  border-color:rgba(178,210,224,.16) !important;
}
.christmas-page .year-bridge span,
.christmas-page .year-bridge p,
.christmas-page .year-bridge h3 {
  color:#dceef5 !important;
}

/* Gift: more like a keepsake archive than a toy */
.christmas-page .gift-discovery {
  background:
    radial-gradient(circle at 50% 48%,rgba(192,225,238,.10),transparent 27%),
    linear-gradient(145deg,#071b2c,#0c2a40 52%,#081c2b) !important;
  border:1px solid rgba(194,224,235,.18) !important;
}
.christmas-page .gift-heading>span { color:#a9c9d8 !important; }
.christmas-page .gift-heading h3 { color:#edf7fb !important; }
.christmas-page .gift-heading h3 em { color:#c9dfeb !important; }

/* Velvet keepsake box */
.christmas-page .memory-box {
  background:linear-gradient(145deg,#8b2940,#a9364f 48%,#6e1e32) !important;
  border:1px solid rgba(226,198,205,.62) !important;
  box-shadow:0 32px 46px rgba(0,0,0,.42), inset 0 1px 0 rgba(255,255,255,.16) !important;
  border-radius:6px 6px 12px 12px;
}
.christmas-page .memory-box-lid {
  background:linear-gradient(180deg,#b9455d,#8d2940) !important;
  border-color:rgba(239,213,219,.58) !important;
  border-radius:5px 5px 3px 3px;
}
.christmas-page .memory-box-ribbon-v,
.christmas-page .memory-box-ribbon-h {
  background:#d7dde1 !important;
}
.christmas-page .memory-box-side {
  background:linear-gradient(90deg,rgba(255,255,255,.08),rgba(35,10,18,.13),rgba(255,255,255,.07)) !important;
}
.christmas-page .memory-reveal {
  color:#d8e9ef !important;
}
.christmas-page .reveal-tree {
  filter:drop-shadow(0 0 12px rgba(188,220,231,.30)) !important;
}

/* Auto-close animation state */
.christmas-page .gift-discovery.opened .memory-box-lid {
  transform:rotate(-22deg) translate(-12px,-13px);
}
.christmas-page .gift-discovery.opened .memory-box {
  transform:translateX(-50%) translateY(10px);
}


@media(max-width:1000px){
  .christmas-page .christmas-timeline{grid-template-columns:repeat(2,1fr) !important;}
}
@media(max-width:650px){
  .christmas-page .christmas-timeline{grid-template-columns:1fr !important;gap:24px !important;}
  .christmas-page .christmas-timeline .timeline-paper{min-height:130px !important;}
}


/* =========================================================
   ONLY THE TWO REQUESTED FINAL ADJUSTMENTS
   1) Page 2 + Page 4: lighter blue middle surfaces with
      contrasting Christmas cards.
   2) Gift tree: fully emerges and uses fluorescent Christmas green.
========================================================= */

/* Page 2 — light blue middle + darker contrasting cards */
.christmas-page .christmas-page-two {
  background:
    radial-gradient(circle at 12% 15%, rgba(255,255,255,.16), transparent 28%),
    linear-gradient(145deg, #b9d5e5 0%, #c9e1ed 48%, #aecddf 100%) !important;
}

.christmas-page .christmas-page-two .paper-note,
.christmas-page .christmas-page-two .fact-ribbon > div {
  background: linear-gradient(145deg, #173b52, #214e67) !important;
  color: #eef9fc !important;
  border-color: rgba(238,249,252,.22) !important;
  box-shadow: 0 18px 34px rgba(7,28,42,.20) !important;
}

.christmas-page .christmas-page-two .paper-note span,
.christmas-page .christmas-page-two .paper-note strong,
.christmas-page .christmas-page-two .paper-note small,
.christmas-page .christmas-page-two .fact-ribbon small,
.christmas-page .christmas-page-two .fact-ribbon strong {
  color: #eef9fc !important;
}

/* Page 4 — same light blue middle with strong card contrast */
.christmas-page .christmas-page-india {
  background:
    radial-gradient(circle at 88% 10%, rgba(255,255,255,.18), transparent 26%),
    linear-gradient(145deg, #b9d5e5 0%, #c9e1ed 48%, #aecddf 100%) !important;
}

.christmas-page .christmas-page-india .child-celebration-card,
.christmas-page .christmas-page-india .india-region-card,
.christmas-page .christmas-page-india .india-tradition-strip button {
  background: linear-gradient(145deg, #173b52, #214e67) !important;
  color: #eef9fc !important;
  border-color: rgba(238,249,252,.22) !important;
  box-shadow: 0 18px 34px rgba(7,28,42,.20) !important;
}

.christmas-page .christmas-page-india .child-celebration-card strong,
.christmas-page .christmas-page-india .child-celebration-card p,
.christmas-page .christmas-page-india .india-region-card small,
.christmas-page .christmas-page-india .india-region-card strong,
.christmas-page .christmas-page-india .india-region-card p,
.christmas-page .christmas-page-india .india-region-card b,
.christmas-page .christmas-page-india .india-tradition-strip button strong,
.christmas-page .christmas-page-india .india-tradition-strip button small {
  color: #eef9fc !important;
}

/* Gift tree — fully out of the box, detailed and fluorescent green */
.christmas-page .gift-stage {
  overflow: visible !important;
}

.christmas-page .memory-reveal {
  bottom: 74px !important;
  width: 180px !important;
  height: 218px !important;
  z-index: 5 !important;
  color: #43ff63 !important;
  transform: translateX(-50%) translateY(92px) scale(.55) !important;
}

.christmas-page .reveal-tree {
  width: 176px !important;
  height: 208px !important;
  color: #43ff63 !important;
  filter:
    drop-shadow(0 0 7px rgba(67,255,99,.72))
    drop-shadow(0 0 18px rgba(67,255,99,.38)) !important;
}

.christmas-page .gift-discovery.opened .memory-reveal {
  opacity: 1 !important;
  transform: translateX(-50%) translateY(-30px) scale(1) !important;
}

.christmas-page .gift-discovery.opened .reveal-tree {
  color: #43ff63 !important;
}


/* Requested: stronger Page 2 text contrast on light background */
.christmas-page .christmas-page-two .meaning-main-text > span { color:#7f1830 !important; }
.christmas-page .christmas-page-two .meaning-main-text h3 { color:#102c3f !important; }
.christmas-page .christmas-page-two .meaning-main-text p { color:#29495a !important; }
.christmas-page .christmas-page-two .fact-ribbon > div { color:#eef9fc !important; }
.christmas-page .christmas-page-two .fact-ribbon small { color:#dcecf5 !important; opacity:1 !important; }
.christmas-page .christmas-page-two .fact-ribbon strong { color:#f5fbff !important; opacity:1 !important; }
/* Requested: visible map structure + video controls */
.christmas-page .india-map-lines { position:absolute; inset:72px 170px 80px 170px; width:calc(100% - 340px); height:calc(100% - 152px); z-index:1; pointer-events:none; opacity:.78; }
.christmas-page .india-map-lines .map-outline { fill:rgba(238,248,252,.18); stroke:#4c778b; stroke-width:2.3; vector-effect:non-scaling-stroke; }
.christmas-page .india-map-lines .map-state { fill:none; stroke:#78a1b2; stroke-width:1.1; stroke-dasharray:4 4; vector-effect:non-scaling-stroke; }
.christmas-page .india-map-lines .map-route { fill:none; stroke:#a62b43; stroke-width:1.55; stroke-dasharray:6 5; vector-effect:non-scaling-stroke; opacity:.8; }
.christmas-page .india-location-note { z-index:8; }
.christmas-page .location-actions { display:flex; gap:6px; margin-top:8px; }
.christmas-page .location-action { border:1px solid rgba(23,62,84,.18); background:#f2f8fa; color:#214b60; padding:5px 8px; font:8px Arial,sans-serif; letter-spacing:.05em; cursor:pointer; }
.christmas-page .location-action.video { background:#a62b43; color:#fff; border-color:#a62b43; }
.christmas-page .location-action:hover { transform:translateY(-1px); }

/* Requested: richer tree decoration */
.christmas-page .reveal-tree .tree-garland { fill:none; stroke:#8aff9d; stroke-width:3.2; stroke-linecap:round; opacity:.95; filter:drop-shadow(0 0 4px rgba(67,255,99,.82)); }
.christmas-page .reveal-tree .tree-light { filter:drop-shadow(0 0 6px rgba(220,255,228,.95)); }

.christmas-page .christmas-page-two .spread-title > span {
  color: #102c3f !important;
}

`;

