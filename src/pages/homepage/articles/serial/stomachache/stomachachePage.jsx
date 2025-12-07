import React, { useEffect } from "react";
import background from "../../../../../../legacy/article photos/stomachache/stomach.jpg";

const AppleGaramond = "/fonts/AppleGaramond.ttf";

export default function StomachachePage() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: "AppleGaramond";
        src: url(${AppleGaramond}) format('opentype');
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "auto",
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    margin: 0,
    padding: 0,
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{ fontFamily: "AppleGaramond" }}>Stomachache Article</h1>
    </div>
  );
}

// I’m fighting the fatigue of feeling full
// The sunlight at the dining table has melted away
// And I’m left licking the last of my fudge
// as it pours itself slowly into the creases of my hands
// Everything that has a sweet quality seems to seep itself into me
// It sinks past my stomach
// It invades my mind, spoils my composure,
// and dominates my every desire
// As my stomach dances around temptation
// I yearn for another taste
// I grab another bite
// Sweetness dominates and secretes the salt beneath my skin
// And the more I touch, the more I crave
// More, however, suddenly reaches its limit
// When the sweetness I swallowed turns to sludge in my stomach
// The pulp thrashes, then weakens, and I start to sit still
// I feel the pressure in my lungs expand, making room for what’s to come
// I crouch over, knees pressed into the floor, expecting to see all the sweetness I was once
// compelled by
// Holding my stomach, I struggle to remember its spoiled charm and fading sweetness
// I stare at the storm pooling onto the wooden floor and finally surrender to my
// stomachache
