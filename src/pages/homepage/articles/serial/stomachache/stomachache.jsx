import React from "react";
const Matrixtron = "/fonts/AppleGaramond.ttf";

export default function Article() {
  const [isMobile, setIsMobile] = React.useState(false);

React.useEffect(() => {
  const style = document.createElement("style");
  style.textContent = `
      @font-face {
        font-family: "AppleGaramond";
        src: url(${Matrixtron}) format('opentype');
      }
    `;
  document.head.appendChild(style);
  return () => {
    document.head.removeChild(style);
  };
}, []);


  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

const backgroundStyle = {
  backgroundImage:
    "url('https://raw.githubusercontent.com/indigomagazine/website_images/main/SERIAL%20PHOTOS/group%202/matrixbg.gif')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
}
