
import React from 'react';
import { useState, useMemo} from "react";

/**
 * MVP magazine gallery:
 * - View toggle: "Scroll" (full-viewport sections with gentle snap) or "Grid" (max 3 columns).
 * - Click any card/section to navigate to its `to` route (placeholder links you can build later).
 * - Replace `items` data with your own images/titles/descriptions/routes.
 */


/* Where you will add article data */
const items = [
  {
    id: "article-1",
    title: "I Love Shopping ",
    description: "By: Zayeed A. ",
    tags: ["FASHION", "NOVEMBER"],
    // Replace with your local asset paths or URLs
    image: "../../legacy/article photos/ILoveShopping/love is.jpg",
    to: "/articles/serial/iloveshopping", // path to article
  },
  /*
  {
    id: "article-2",
    title: "QUIET DEVOURMENT",
    description: "By:.. ",
    tags: ["PHOTO", "ESSAY"],
    image: "../../legacy/assets/backgrounds/placeHolder.png",
    to: "",
  },
  {
    id: "article-3",
    title: "ECHOES IN THE WIND",
    description: "How air carries stories across margins",
    tags: ["FEATURE"],
    image: "../../legacy/assets/backgrounds/placeHolder.png",
    to: "",
  },
  {
    id: "article-4",
    title: "CITY OF GLASS",
    description: "Reflections from a transparent capital",
    tags: ["URBAN", "REPORT"],
    image: "../../legacy/assets/backgrounds/placeHolder.png",
    to: "",
  },
  {
    id: "article-5",
    title: "PALETTE CLEANSE",
    description: "On the joy of fewer colors",
    tags: ["ART", "COLOR"],
    image: "../../legacy/assets/backgrounds/placeHolder.png",
    to: "",
  },
    {
    id: "article-6",
    title: "Article ",
    description: "By:.. ",
    tags: ["ART", "AUGUST"],
    // Replace with your local asset paths or URLs
    image: "../../legacy/assets/backgrounds/placeHolder.png",
    to: "",// path to article
  },
    {
    id: "article-7",
    title: "Article ",
    description: "By:.. ",
    tags: ["ART", "AUGUST"],
    // Replace with your local asset paths or URLs
    image: "../../legacy/assets/backgrounds/placeHolder.png",
    to: "",// path to article
  },
    {
    id: "article-8",
    title: "Article ",
    description: "By:.. ",
    tags: ["ART", "AUGUST"],
    // Replace with your local asset paths or URLs
    image: "../../legacy/assets/backgrounds/placeHolder.png",
    to: "",// path to article
  },
    {
    id: "article-9",
    title: "Article ",
    description: "By:.. ",
    tags: ["ART", "AUGUST"],
    // Replace with your local asset paths or URLs
    image: "../../legacy/assets/backgrounds/placeHolder.png",
    to: "",// path to article
  },
  */
];


export default function Serial() {
  const [view, setView] = useState("scroll"); // 'scroll' | 'grid'
  const data = useMemo(() => items, []);

  // ADD: place right after your existing useState/useMemo in Serial()
const [prevView, setPrevView] = useState("scroll");
const [animClass, setAnimClass] = useState(""); // "slide-in-left" | "slide-in-right" | ""

const handleToggle = (checked) => {
  const next = checked ? "grid" : "scroll";
  // decide direction based on previous view
  const dir = prevView === "scroll" && next === "grid"
    ? "slide-in-right"
    : prevView === "grid" && next === "scroll"
    ? "slide-in-left"
    : "";

  setPrevView(next);
  setAnimClass(dir);
  setView(next);

  // clear the animation class after it plays
  window.requestAnimationFrame(() => {
    setTimeout(() => setAnimClass(""), 420); // keep slightly longer than CSS duration
  });
};


  return (
    <div className="mg-root">
      <header className="mg-header">
        <div className="mg-toggle">
          <label className="toggle">
            <input
              type="checkbox"
              checked={view === "grid"}
              onChange={(e) => handleToggle(e.target.checked)}
            />
            <span className="slider" />
            <span className="label">{view === "grid" ? "Grid" : "Scroll"}</span>
          </label>
        </div>
      </header>

        <div className={`content-stage ${animClass}`}>
            {view === "scroll" ? (
                    <ScrollSections items={data} />
                ) : (
                    <GridGallery items={data} />
            )}
        </div>

      {/* Local styles to keep this self-contained */}
      <style>{styles}</style>
    </div>
  );
}


function ScrollSections({ items }) {
  return (
    <div className="snap-wrapper" aria-label="Feature stories">
      {items.map((it) => (
        <section className="snap-section" key={it.id}>
          <a href={it.to} className="hit-area" aria-label={it.title} />
          <img className="cover" src={it.image} alt={it.title} loading="lazy" />
          <MetaOverlay item={it} />
        </section>
      ))}
    </div>
  );
}

function GridGallery({ items }) {
  return (
    <div className="grid-wrapper" aria-label="All stories (grid)">
      {items.map((it) => (
       <article className="grid-card" key={it.id}>
        <a href={it.to} className="card-link" aria-label={it.title} />
        <img className="thumb" src={it.image} alt={it.title} loading="lazy" />
        <div className="card-meta">
            <h3 className="title">{it.title}</h3>
    </div>
    </article>

      ))}
    </div>
  );
}

function MetaOverlay({ item }) {
  return (
    <div className="meta">
      <div className="bullet" aria-hidden="true"><img src="" alt="" /></div>
      <h2 className="title">{item.title}</h2>
      <p className="desc">{item.description}</p>
      {item.tags?.length ? (
        <div className="tags">
          {item.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const styles = `
:root {
  --pad: 24px;
  --gap: 16px;
  --border: 1px solid rgba(242, 209, 234, 0.25);
  --bg: #f5f0f7ff;
  --text: #f2f2f2;
  --muted: rgba(255,255,255,0.7);
  --accent: #e7e7e7;
}

.mg-root {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
}

.mg-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 40;
  padding: 12px;
}

.mg-toggle .toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.mg-toggle .toggle input { display: none; }

.mg-toggle .slider {
  width: 48px;
  height: 26px;
  background: #cf85c582;
  border-radius: 99px;
  position: relative;
  border: 1px solid #a480aaff;
  transition: background .2s ease;
}
.mg-toggle .slider::after {
  content: "";
  position: absolute;
  top: 2px; left: 2px;
  width: 22px; height: 22px;
  background: #ddd;
  border-radius: 50%;
  transition: transform .2s ease;
}
.mg-toggle input:checked + .slider { background: #2c2c2c; }
.mg-toggle input:checked + .slider::after { transform: translateX(22px); }
.mg-toggle .label { font-size: 12px; color: var(--muted); }

/* Scroll view */
.snap-wrapper {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y proximity; /* gentle 'resistance' snap, not hard lock */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.snap-section {
  position: relative;
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;

  display: felx;
  align-items: center;
  justify-content: center;
  background: #111;
}

.snap-section .hit-area {
  position: absolute;
  inset: 0;
  z-index: 5;
}

.cover {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.05);
  opacity: 0.98;
}

.meta {
  position: absolute;
  left: var(--pad);
  right: var(--pad);
  bottom: var(--pad);
  z-index: 10;
  color: var(--text);
  padding: 16px 18px;
  border-radius: 12px;
 
  backdrop-filter: blur(1.6px);
}
.meta .bullet { font-size: 10px; margin-bottom: 8px; }
.meta .title {
  font-size: clamp(24px, 5vw, 48px);
  line-height: 1.05;
  margin: 0 0 6px 0;
  letter-spacing: 0.2px;
}
.meta .desc {
  margin: 0 0 10px 0;
  color: var(--muted);
  font-size: clamp(14px, 1.7vw, 16px);
}
.tags { display: flex; gap: 8px; flex-wrap: wrap; }
.tag {
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 16px;
  color: var(--accent);
  background: rgba(0,0,0,0.2);
}


.grid-wrapper {
  padding: calc(var(--pad) + 52px) var(--pad) var(--pad);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* max 2 columns */
  gap: var(--gap);
}
@media (max-width: 640px) {
  .grid-wrapper { grid-template-columns: 1fr; }
}



.grid-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  /* All visual area is the image now; no background showing beneath */
  aspect-ratio: 3 / 4; /* Taller portrait-ish; change to taste */
}
.grid-card .card-link { position: absolute; inset: 0; z-index: 5; }

.thumb {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
  filter: saturate(0.95) contrast(1.05);
}

/* REPLACE .card-meta & children */
.card-meta {
  position: absolute;
  left: 14px;
  bottom: 14px;
  right: 14px;       /* keep some breathing room if titles wrap */
  z-index: 2;
  padding: 0;        /* remove card bar spacing */
  background: none;  /* no background bar */
}
.card-meta .title {
  margin: 0;
  font-size: clamp(1rem, 1.2vw + 0.6rem, 1.5rem);
  line-height: 1.1;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.55); /* readability on bright images */
}
/* (Optional) hide desc/tags in grid if you want pure image + title */
.grid-card .desc,
.grid-card .tags { display: none; }
`;


