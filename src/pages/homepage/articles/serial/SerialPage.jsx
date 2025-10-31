
import React from 'react';
import { useEffect,useRef, forwardRef } from 'react';
import { useState, useMemo} from "react";
import './serial.css';



/* Where you will add article data */
/* Make sure to add new item at the top of the list so it appears first */
/* Will add more feilds to allow custom colors for titles and tags.  */
const items = [
  {
    id: "article-1",
    title: "I Love Shopping ",
    description: "By: Zayeed A. ",
    tags: ["FASHION", "NOVEMBER"],
    // Replace with your local asset paths or URLs
    image: "../../legacy/article photos/ILoveShopping/love is.jpg",
    // Optional: imageGird for grid view (else uses `image`)
    to: "/articles/serial/iloveshopping", // path to article
    coverPos: " left 25% top 10%",
    // gridPosL optional: "center center",
  },

  /* Coming soon item*/
  {
    id: "commingSoon",
    title: "",
    description: "",
    image: "../../legacy/assets/backgrounds/More.png",
    imageGrid: "../../legacy/assets/backgrounds/dott.svg",
    gridPos: "top 50% left 50%",
    title: "More Coming Soon",
    to: "",
    blur: true,

  }, 
  /*
  
  */
];


export default function Serial() {
  const [view, setView] = useState("scroll"); // 'scroll' | 'grid'
  const data = useMemo(() => items, []);

  // ADD: place right after your existing useState/useMemo in Serial()
const [prevView, setPrevView] = useState("scroll");
const [animClass, setAnimClass] = useState(""); // "slide-in-left" | "slide-in-right" | ""

const scrollerRef = useRef(null);
const isSnappingRef = useRef(false);
const sectionHRef = useRef(0);

const [barOpen, setBarOpen] = useState(false);

useEffect(() => {
  const prev = document.body.style.margin;
  document.documentElement.style.height = '100%';
  document.body.style.height = '100%';
  document.body.style.margin = '0';
  return () => { document.body.style.margin = prev; };
}, []);



useEffect(()=> {
      const el = scrollerRef.current;
    if (!el || view !== "scroll") return;

    const sections = Array.from(el.querySelectorAll(".snap-section"));
    const getIndex = () => Math.round(el.scrollTop / sectionHRef.current);

    const onResize = () => { sectionHRef.current = el.clientHeight; };
    onResize();
    window.addEventListener("resize", onResize);

    const onWheel = (e) => {
      // normalize and gate the scroll
      if (isSnappingRef.current) { e.preventDefault(); return; }

      const delta = e.deltaY;
      const threshold = 25; // ignore micro-scrolls / jitters
      if (Math.abs(delta) < threshold) return;

      e.preventDefault();
      isSnappingRef.current = true;

      const cur = getIndex();
      const next = Math.min(
        sections.length - 1,
        Math.max(0, cur + (delta > 0 ? 1 : -1))
      );

      el.scrollTo({ top: next * sectionHRef.current, behavior: "smooth" });

      // release the lock after the smooth scroll finishes
      const release = () => { isSnappingRef.current = false; el.removeEventListener("scrollend", release); };
      el.addEventListener?.("scrollend", release); // supported in modern Chromium
      // fallback timer if scrollend isn’t supported:
      setTimeout(() => { isSnappingRef.current = false; }, 420);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("resize", onResize);
      el.removeEventListener("wheel", onWheel);
    };
}, [view]);

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
  <div className="mg-root"
    styles= {{
          "--drawer-w": "300px",
    "--drawer-h": "80vh",
    "--drawer-bg": "rgba(10,10,10,0.70)",
    "--drawer-color": "#f8d254ff",
    "--drawer-accent": "rgba(255,255,255,0.18)",
    "--drawer-speed": "280ms"
    }}
  >

  <aside className={`serial-drawer ${barOpen ? "is-open" : ""}`} role="complementary" aria-label="Tools">
    <div className="serial-drawer__inner">
      <nav className="drawer-nav" aria-label="Section">
        <a href="/legacy/index.html">Home</a>
        <a href="/legacy/creative.html">Issues</a>
        <a href="/legacy/about.html">About</a>
        <a href="/legacy/visualarts.html">VisualArts</a>
      </nav>
    </div>
  </aside>

  {/* Tab / Asset that rides with the drawer edge */}
  <button
    className={`drawer-tab ${barOpen ? "is-open" : ""}`}
    aria-label={barOpen ? "Close tools" : "Open tools"}
    aria-expanded={barOpen}
    onClick={() => setBarOpen(v => !v)}
  >
    {/* replace with your SVG/PNG */}
    <img src="../../legacy/assets/logos/indigologowhite.png" alt="" />
  </button>

    {/* Existing header (your Grid/Scroll toggle lives here) 
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

    */}

   

    {/* Your existing view switcher */}
    <div className={`content-stage ${animClass}`}>
      {view === "scroll" ? (
        <ScrollSections ref={scrollerRef} items={data} />
      ) : (
        <GridGallery items={data} />
      )}
    </div>
  </div>
  );
}


// ScrollSections: swap the src & add a conditional class
const ScrollSections = forwardRef(function ScrollSections({ items }, ref) {
  return (
    <div ref={ref} className="snap-wrapper" aria-label="Feature stories">
      {items.map((it) => (
        <section
          className={`snap-section ${it.comingSoon ? "is-coming-soon" : ""}`}
          key={it.id}
        >
          {/* Disable click if coming soon or no 'to' */}
          {!it.comingSoon && it.to ? (
            <a href={it.to} className="hit-area" aria-label={it.title} />
          ) : null}

          <img
            className={`cover ${it.blur ? "is-blurred" : ""}`}
            src={it.imageScroll || it.image}
            alt={it.title}
            loading="lazy"
            style={{ "--cover-pos": it.coverPos || "center" }}
          />
          <MetaOverlay item={it} />
        </section>
      ))}
    </div>
  );
});

function GridGallery({ items }) {
  return (
    <div className="grid-wrapper" aria-label="All stories (grid)">
      {items.map((it) => (
        <article
          className={`grid-card ${it.comingSoon ? "is-coming-soon" : ""}`}
          key={it.id}
        >
          {/* Disable link for coming soon */}
          {!it.comingSoon && it.to ? (
            <a href={it.to} className="card-link" aria-label={it.title} />
          ) : null}

          <img
            className="thumb"
            src={it.imageGrid || it.image}
            alt={it.title}
            loading="lazy"
            /* grid-only position */
            style={{ "--obj-pos": it.gridPos || "center center" }}
          />

          <div className="card-meta">
            {it.comingSoon && <span className="badge">Coming soon</span>}
           
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
