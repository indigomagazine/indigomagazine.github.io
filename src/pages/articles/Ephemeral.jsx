import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const Ephemeral = () => {
  const customCSS = `
    .article-container {
      cursor: url('/assets/cursors/redstring3.png'), default;
      overflow-x: hidden;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.5));
      background-size: cover;
      background-attachment: fixed;
    }

    a {
      text-decoration: none;
      color: black;
    }

    section {
      margin: auto;
      width: 80%;
      grid-template-columns: repeat(12, 1fr);
      display: grid;
      gap: 20px;
      grid-auto-flow: dense;
    }

    section.heading h1 {
      text-align: center;
      margin: none;
      font-family: 'Castego';
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      text-transform: uppercase;
      grid-column: 1/span 12;
    }

    @font-face {
      font-family: "Castego";
      src: url('/assets/fonts/Castego.ttf');
    }

    @font-face {
      font-family: "Praktika";
      src: url('/assets/fonts/Praktika-Light.otf');
    }

    section.heading h2 {
      text-align: center;
      margin: none;
      font-family: 'Praktika';
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-transform: lowercase;
      grid-column: 1/span 12;
    }

    section p {
      font-family: 'Praktika', serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 20px;
      text-align: justify;
    }

    section.full-para p {
      grid-column: 1/span 12;
      text-align: center;
    }

    img.float-left {
      float: left;
      margin: 0 20px 15px 0;
      max-width: 40%;
      border-radius: 8px;
    }

    img.float-right {
      float: right;
      margin: 0 0 15px 20px;
      max-width: 40%;
      border-radius: 8px;
    }

    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }

    section img {
      margin: 20px 0;
      max-height: 50vmax;
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    hr.author-line {
      border: 0.02vmax solid black;
      margin: 40px 0;
    }

    .tab {
      display: inline-block;
      margin-left: 40px;
    }

    @media (max-width: 800px) {
      section {
        width: 95%;
        gap: 10px;
      }
      
      section.heading h1 {
        font-size: 35px;
        line-height: 45px;
      }
      
      section.heading h2 {
        font-size: 16px;
        line-height: 20px;
      }
      
      img.float-left, img.float-right {
        float: none;
        display: block;
        margin: 15px auto;
        max-width: 80%;
      }
      
      section p {
        text-align: justify;
        line-height: 1.5;
        margin: 0;
        padding: 0 10px;
      }
    }
  `;

  return (
    <>
      <Header />
      <ThemeToggle />
      <style>{customCSS}</style>
      
      <div className="article-container">
      
      <section className="heading">
        <br />
        <h1>Ephemeral</h1>
        <h2>by Emma Lambert</h2>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics1.jpeg" className="float-left" alt="Ephemeral Art 1" />
          The cherry blossoms fell like snow, each petal a moment caught between 
          beauty and decay. Maya stood beneath the tree, watching the delicate 
          pink fragments drift to the ground, and felt the weight of impermanence 
          settle in her chest like a stone.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics2.jpeg" className="float-right" alt="Ephemeral Art 2" />
          She had come to this park every spring for the past five years, drawn 
          by the promise of something beautiful that would not last. The blossoms 
          bloomed for only two weeks, their beauty all the more precious because 
          it was temporary. In a world where everything seemed to be built to last 
          forever, Maya found comfort in things that were designed to fade.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics3.jpeg" className="float-left" alt="Ephemeral Art 3" />
          The photographer beside her was capturing the moment, his camera clicking 
          rapidly as he tried to freeze time in pixels. But Maya knew that no matter 
          how many photographs he took, he could never truly capture the feeling of 
          standing beneath a tree in full bloom, the petals falling around her like 
          a gentle rain.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics4.jpeg" className="float-right" alt="Ephemeral Art 4" />
          She thought about her grandmother, who had died the previous autumn. 
          Her grandmother had loved these trees, had told Maya stories about 
          how the Japanese believed that cherry blossoms represented the 
          fleeting nature of life. "Nothing beautiful lasts forever," she 
          had said, "and that's what makes it beautiful."
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics5.jpeg" className="float-left" alt="Ephemeral Art 5" />
          Maya had spent most of her life trying to hold onto things—relationships, 
          memories, moments of happiness. She had filled her apartment with 
          photographs and keepsakes, as if by surrounding herself with reminders 
          of the past, she could somehow make it permanent. But standing beneath 
          the cherry tree, she began to understand that permanence was an illusion.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics6.jpeg" className="float-right" alt="Ephemeral Art 6" />
          A gust of wind sent a fresh shower of petals cascading down around her. 
          Maya closed her eyes and let them fall against her skin, feeling their 
          softness like tiny kisses from the universe. When she opened her eyes 
          again, the ground around her was carpeted in pink, and she realized 
          that beauty was not something to be captured or preserved, but something 
          to be experienced in the moment.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics7.jpeg" className="float-left" alt="Ephemeral Art 7" />
          She pulled out her phone and deleted the hundreds of photos she had taken 
          over the years—blurry shots of sunsets, poorly framed pictures of friends, 
          countless selfies that all looked the same. She kept only the ones that 
          truly mattered, the ones that captured not just an image, but a feeling.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics8.jpeg" className="float-right" alt="Ephemeral Art 8" />
          As the afternoon wore on and the shadows lengthened, Maya felt something 
          shift inside her. She had spent so much time trying to hold onto the past 
          that she had forgotten to live in the present. But here, beneath the cherry 
          tree, surrounded by falling petals, she remembered what it felt like to be 
          truly present in her own life.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics9.jpeg" className="float-left" alt="Ephemeral Art 9" />
          The photographer packed up his equipment and left, but Maya stayed. 
          She sat on a bench and watched the last of the petals fall, feeling 
          grateful for the beauty that had surrounded her, even if it was only 
          for a moment. She understood now that the ephemeral nature of things 
          was not a flaw, but a feature—it was what made them precious.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group6/Group6_KISMET_Graphics10.jpeg" className="float-right" alt="Ephemeral Art 10" />
          As she walked home through the park, Maya felt lighter than she had in 
          years. She had learned to let go of the need to hold onto everything, 
          to preserve every moment, to make the temporary permanent. Instead, 
          she would learn to appreciate the beauty of things as they were, 
          knowing that their impermanence was what made them special.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          The cherry blossoms would bloom again next spring, and the cycle would 
          begin anew. But Maya knew that each year would bring something different, 
          something unique, something that could never be replicated. And she 
          would be there to witness it, not as someone trying to capture and 
          preserve, but as someone who had learned to appreciate the beauty 
          of the ephemeral.
        </p>
      </section>

      <hr className="author-line" />
      <section className="full-para">
        <p>
          <span className="tab">Emma Lambert</span> explores themes of impermanence and 
          the beauty found in fleeting moments, examining how we learn to appreciate 
          what we cannot hold onto.
        </p>
      </section>
      </div>
    </>
  );
};

export default Ephemeral;
