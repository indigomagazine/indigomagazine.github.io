import React from 'react';
import { useState, useMemo} from "react";

/**
 * MVP magazine gallery:
 * - View toggle: "Scroll" (full-viewport sections with gentle snap) or "Grid" (max 3 columns).
 * - Click any card/section to navigate to its `to` route (placeholder links you can build later).
 * - Replace `items` data with your own images/titles/descriptions/routes.
 */


const items = [
  {
    id: "feature-1",
    title: "Air it Out",
    description: "By:.. ",
    tags: ["ART", "AUGUST"],
    // Replace with your local asset paths or URLs
    image: "src/assets/article photos/laQuinta/F1-2.jpg",
    to: "/articles/darko-maver",
  },
  {
    id: "feature-2",
    title: "QUIET DEVOURMENT",
    description: "By:.. ",
    tags: ["PHOTO", "ESSAY"],
    image: "https://picsum.photos/id/1018/2000/1300",
    to: "/articles/quiet-devourment",
  },
  {
    id: "feature-3",
    title: "ECHOES IN THE WIND",
    description: "How air carries stories across margins",
    tags: ["FEATURE"],
    image: "https://picsum.photos/id/1021/2000/1300",
    to: "/articles/echoes-in-the-wind",
  },
  {
    id: "feature-4",
    title: "CITY OF GLASS",
    description: "Reflections from a transparent capital",
    tags: ["URBAN", "REPORT"],
    image: "https://picsum.photos/id/1003/2000/1300",
    to: "/articles/city-of-glass",
  },
  {
    id: "feature-5",
    title: "PALETTE CLEANSE",
    description: "On the joy of fewer colors",
    tags: ["ART", "COLOR"],
    image: "https://picsum.photos/id/1005/2000/1300",
    to: "/articles/palette-cleanse",
  },
];


export default function Group6() {
  const [view, setView] = useState("scroll"); // 'scroll' | 'grid'
  const data = useMemo(() => items, []);

  return (
    <div className="mg-root">
      <header className="mg-header">
        <div className="mg-toggle">
          <label className="toggle">
            <input
              type="checkbox"
              checked={view === "grid"}
              onChange={(e) => setView(e.target.checked ? "grid" : "scroll")}
            />
            <span className="slider" />
            <span className="label">{view === "grid" ? "Grid" : "Scroll"}</span>
          </label>
        </div>
      </header>

      {view === "scroll" ? <ScrollSections items={data} /> : <GridGallery items={data} />}

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
            <p className="desc">{it.description}</p>
            {it.tags?.length ? (
              <div className="tags">
                {it.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function MetaOverlay({ item }) {
  return (
    <div className="meta">
      <div className="bullet" aria-hidden="true">✺</div>
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
  background: #db74ce82;
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
  background: linear-gradient(180deg, rgba(220, 181, 226, 0.28), rgba(161, 40, 188, 0.35), rgba(220, 181, 226, 0.28));
  backdrop-filter: blur(2px);
}
.meta .bullet { font-size: 22px; margin-bottom: 8px; }
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

/* Grid view (max 3 columns) */
.grid-wrapper {
  min-height: 100vh;
  padding: calc(var(--pad) + 52px) var(--pad) var(--pad);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); /* max 3 columns */
  gap: var(--gap);
}
@media (max-width: 1100px) {
  .grid-wrapper { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .grid-wrapper { grid-template-columns: 1fr; }
}

.grid-card {
  position: relative;
  background: #151515;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #262626;
}
.grid-card .card-link { position: absolute; inset: 0; z-index: 5; }

.thumb {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  filter: saturate(0.95) contrast(1.05);
}

.card-meta {
  padding: 12px 14px 14px 14px;
}
.card-meta .title {
  font-size: 18px;
  margin: 0 0 6px 0;
}
.card-meta .desc {
  margin: 0 0 10px 0;
  color: var(--muted);
  font-size: 14px;
}
.card-meta .tags { margin-top: 4px; }
`;


