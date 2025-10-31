import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import IntrapersonalFont from "../../../assets/fonts/Intrapersonal.otf";
import SinoretaFont from "../../../assets/fonts/Sinoreta.otf";

export const Route = createFileRoute("/articles/serial/iloveshopping")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: "Intrapersonal";
        src: url(${IntrapersonalFont}) format('opentype');
      }
      @font-face {
        font-family: "Sinoreta";
        src: url(${SinoretaFont}) format('opentype');
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }

      /* ✅ Responsive title/subtitle spacing */
      @media (max-width: 768px) {
        .title-section p {
          margin-top: -2rem !important;
          font-size: 1rem !important;
        }
        .article-text {
          width: 80% !important;
          top: 55% !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const cerealImages = [
    "https://github.com/indigomagazine/website_images/blob/main/SERIAL%20PHOTOS/group%201/BF5T7721.jpg?raw=true",
    "https://github.com/indigomagazine/website_images/blob/main/SERIAL%20PHOTOS/group%201/BF5T7618.jpg?raw=true",
    "https://github.com/indigomagazine/website_images/blob/main/SERIAL%20PHOTOS/group%201/BF5T7672.jpg?raw=true",
    "https://github.com/indigomagazine/website_images/blob/main/SERIAL%20PHOTOS/group%201/BF5T7640.jpg?raw=true",
    "https://github.com/indigomagazine/website_images/blob/main/SERIAL%20PHOTOS/group%201/BF5T7600.jpg?raw=true",
    "https://github.com/indigomagazine/website_images/blob/main/SERIAL%20PHOTOS/group%201/BF5T7702.jpg?raw=true",
  ];

  const randomPositions = [
    { top: "5%", left: "8%", rotate: "-15deg", size: "clamp(180px, 15vw, 230px)", duration: "8s" },
    { top: "35%", right: "1%", rotate: "20deg", size: "clamp(190px, 16vw, 240px)", duration: "10s" },
    { top: "70%", left: "8%", rotate: "30deg", size: "clamp(180px, 15vw, 230px)", duration: "9s" },
    { top: "70%", right: "8%", rotate: "-25deg", size: "clamp(180px, 16vw, 240px)", duration: "11s" },
    { top: "35%", left: "1%", rotate: "10deg", size: "clamp(190px, 15vw, 240px)", duration: "12s" },
    { top: "5%", right: "8%", rotate: "-20deg", size: "clamp(190px, 16vw, 230px)", duration: "10s" },
  ];

  return (
    <div
      style={{
        minHeight: "100dvh", // ✅ covers full screen including mobile UI
        width: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: "#fafafa",
        backgroundImage:
          'url("https://github.com/indigomagazine/website_images/blob/main/SERIAL%20PHOTOS/group%201/milksplash.jpg?raw=true")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        cursor:
          'url("https://github.com/indigomagazine/website_images/blob/main/SERIAL%20PHOTOS/group%201/daintyspoonresized.png?raw=true") 16 16, auto',
      }}
    >
      {randomPositions.map((pos, i) => (
        <img
          key={i}
          src={cerealImages[i % cerealImages.length]}
          alt="Cereal spill"
          style={{
            position: "absolute",
            top: pos.top,
            left: pos.left,
            right: pos.right,
            width: pos.size,
            height: pos.size,
            objectFit: "cover",
            transform: `rotate(${pos.rotate})`,
            opacity: 0.9,
            zIndex: 1,
            pointerEvents: "none",
            animation: `float ${pos.duration} ease-in-out infinite, fadeIn 1s ease-out`,
          }}
        />
      ))}

      <div
        style={{
          width: "100%",
          maxWidth: "min(90vw, 900px)",
          aspectRatio: "1/1",
          position: "relative",
          zIndex: 2,
          animation: "fadeIn 1.2s ease-out",
        }}
      >
        <img
          src="https://github.com/indigomagazine/website_images/blob/main/SERIAL%20PHOTOS/group%201/group1bg.png?raw=true"
          alt="White plate"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />

        {/* ✅ Title & subtitle spacing fixed */}
        <div
          className="title-section"
          style={{
            position: "absolute",
            top: "13%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            width: "100%",
            color: "#333",
          }}
        >
          <svg viewBox="0 0 500 100" style={{ width: "100%", height: "auto" }}>
            <defs>
              <path id="curve" d="M 50,80 Q 250,10 450,80" fill="transparent" />
            </defs>
            <text
              style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: "bold",
                fill: "#333",
                fontFamily: "Intrapersonal, sans-serif",
                textShadow: "0 1px 3px rgba(255,255,255,0.7)",
              }}
            >
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                I Love Shopping
              </textPath>
            </text>
          </svg>
          <p
            style={{
              marginTop: "-3rem",
              fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
              fontFamily: "Sinoreta, Georgia, serif",
              color: "#555",
              letterSpacing: "0.05em",
              textShadow: "0 1px 3px rgba(255,255,255,0.6)",
            }}
          >
            Written by: Zayeed A.
          </p>
        </div>

        <div
          className="article-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "35%",
            color: "#333",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)",
              lineHeight: 1.3,
              margin: 0,
              fontFamily: "Sinoreta, sans-serif",
            }}
          >
            i like cereal when i like eating at all.
            <br />i like little pieces and i like eating until there is none.
            <br />i like milky white water, i like crumbs coming undone.
            <br />
            spoons like size <span style={{ fontFamily: "Times New Roman" }}>0</span>'s i
            like silver spoon fun.
            <br />i like consuming and eating and shopping and fucking like no
            one else.
            <br />
            liking is a lifestyle, love is…
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

