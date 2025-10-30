
import React from 'react';
import { useEffect,useRef, forwardRef } from 'react';
import { useState, useMemo} from "react";
import './serial.css';



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
    coverPos: " left 25% top 10%",
  },
  
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
                    <ScrollSections ref={scrollerRef} items={data} />
                ) : (
                    <GridGallery items={data} />
            )}
        </div>

      {/* Local styles to keep this self-contained */}

    </div>
  );
}


const ScrollSections = forwardRef(function ScrollSections({ items }, ref) {
  return (
    <div ref={ref} className="snap-wrapper" aria-label="Feature stories">
      {items.map((it) => (
        <section className="snap-section" key={it.id}>
          <a href={it.to} className="hit-area" aria-label={it.title} />
          <img 
            className="cover" 
            src={it.image}
            alt={it.title} 
            loading="lazy"
            style={{"--cover-pos": it.coverPos || "center"}}
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
