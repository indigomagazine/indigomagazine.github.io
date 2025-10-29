import { useMemo } from "react";

import './covet.css';


const HeroTitle = ({ title, subtitle, kicker, alignment = "center" }) => (
  <header className={`hero hero--${alignment}`}>
    {kicker && <span className="hero__kicker">{kicker}</span>}
    <h1 className="hero__title">{title}</h1>
    {subtitle && <p className="hero__subtitle">{subtitle}</p>}
  </header>
);

const StanzaBlock = ({ text, align = "left", padTop, padBottom }) => {
  const paddingClass = [
    padTop ? `stanza--pt-${padTop}` : "",
    padBottom ? `stanza--pb-${padBottom}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={`stanza stanza--${align} ${paddingClass}`}>
      {text.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </section>
  );
};

const TextImageRow = ({
  text,
  image,
  caption,
  reverse = false,
  theme = "default",
  textAlign = "left",
}) => (
  <section
    className={`text-image text-image--${theme} ${reverse ? "text-image--reverse" : ""}`}
  >
    <div className={`text-image__text text-image__text--${textAlign}`}>
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    <figure className="text-image__media">
      <img src={image.src} alt={image.alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  </section>
);

const PullQuote = ({ quote, attribution, align = "left" }) => (
  <blockquote className={`pull-quote pull-quote--${align}`}>
    <p>“{quote}”</p>
    {attribution && <cite>— {attribution}</cite>}
  </blockquote>
);

const PolaroidStrip = ({ images, gutter = 24, frame = "pearl" }) => (
  <section className="polaroid-strip" style={{ gap: `${gutter}px` }}>
    {images.map((image) => (
      <figure key={image.src} className={`polaroid polaroid--${frame}`}>
        <div className="polaroid__image-wrapper">
          <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
        {image.caption && <figcaption>{image.caption}</figcaption>}
      </figure>
    ))}
  </section>
);

const SectionComposer = ({ blocks }) => {
  const renderers = {
    hero: (block) => (
      <HeroTitle
        key={block.id}
        title={block.title}
        subtitle={block.subtitle}
        kicker={block.kicker}
        alignment={block.align}
      />
    ),
    stanza: (block) => (
      <StanzaBlock
        key={block.id}
        text={block.text}
        align={block.align}
        padTop={block.padTop}
        padBottom={block.padBottom}
      />
    ),
    textImage: (block) => (
      <TextImageRow
        key={block.id}
        text={block.text}
        image={block.image}
        caption={block.caption}
        reverse={block.layout === "image-left"}
        theme={block.theme}
        textAlign={block.textAlign}
      />
    ),
    pullQuote: (block) => (
      <PullQuote
        key={block.id}
        quote={block.quote}
        attribution={block.attribution}
        align={block.align}
      />
    ),
    gallery: (block) => (
      <PolaroidStrip
        key={block.id}
        images={block.images}
        gutter={block.gutter}
        frame={block.frame}
      />
    ),
  };

  return blocks.map((block, index) => {
    const renderer = renderers[block.kind];
    const key = block.id || `${block.kind}-${index}`;
    return renderer ? renderer({ ...block, id: key }) : null;
  });
};

export default function ArticlePage() {
  const blocks = useMemo(
    () => [
      {
        kind: "hero",
        id: "hero",
        title: "Covet",
        subtitle: "An embrace woven with pastel dreams",
        kicker: "Issue 04",
        align: "center",
      },
      {
        kind: "stanza",
        id: "stanza-1",
        text: [
          "Greeting in open arms",
          "The same familiar smile between us",
          "Staying a little longer than before",
        ],
        align: "center",
        padBottom: "lg",
      },
      {
        kind: "textImage",
        id: "ti-1",
        text: [
          "We exchanged secrets that felt small in the moment,",
          "but later swelled like tides when I was alone.",
        ],
        image: {
          src: "../photos/group2/floating4.jpg",
          alt: "Two friends sharing a moment on the boardwalk",
        },
        caption: "Photographed by the Indigo Collective",
        layout: "image-right",
        theme: "sunset",
      },
      {
        kind: "stanza",
        id: "stanza-2",
        text: [
          "A glimmer caught my eye",
          "Your ring rested where my thoughts lingered",
          "How could I not notice sooner?",
        ],
        align: "left",
        padTop: "xl",
      },
      {
        kind: "pullQuote",
        id: "quote-1",
        quote:
          "Desire is a slow bloom, unfolding in the pauses between sentences.",
        attribution: "Covet, Issue 04",
        align: "right",
      },
      {
        kind: "textImage",
        id: "ti-2",
        text: [
          "We drifted toward the carousel, letting the music score the moment.",
          "Our footsteps synced with the rotating lights, choreographed by chance.",
        ],
        image: {
          src: "../photos/group2/floating1.JPG",
          alt: "Carousel lights reflecting on a lake",
        },
        layout: "image-left",
        theme: "dusk",
        textAlign: "justify",
      },
      {
        kind: "gallery",
        id: "gallery-1",
        images: [
          {
            src: "../photos/group2/floating5.jpg",
            alt: "Close up of intertwined hands",
            caption: "The moment in between",
          },
          {
            src: "../photos/group2/floating2.JPG",
            alt: "Soft focus portrait at dusk",
            caption: "Blushing hour",
          },
          {
            src: "../photos/group2/floating3.JPG",
            alt: "Friends leaning on railing",
            caption: "Secrets at the shoreline",
          },
        ],
        gutter: 32,
        frame: "pearl",
      },
    ],
    []
  );

  return (
    <main className="article-shell">
      <SectionComposer blocks={blocks} />
    </main>
  );
};

