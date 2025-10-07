import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const LadyOfTheCastle = () => {
  const customCSS = `
    .article-container {
      height: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      background: url('/assets/backgrounds/parchmentpaper.png') no-repeat center center;
      background-size: cover;
      font-size: 1.5em;
      line-height: 1.6;
      min-height: 100vh;
    }

    @media (min-width: 768px) {
      .article-container {
        background-attachment: fixed;
      }
    }

    @media (max-width: 768px) {
      .article-container {
        background-size: auto;
        background-position: center top;
      }
    }

    @font-face {
      font-family: "Cardinal";
      src: url('/assets/fonts/Cardinal.ttf');
    }

    @font-face {
      font-family: "Gothicus Roman";
      src: url('/assets/fonts/Gothicus Roman Regular.ttf');
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
      font-family: "Cardinal", sans-serif;
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      text-transform: uppercase;
      grid-column: 1/span 12;
    }

    section.heading h2 {
      text-align: center;
      margin: none;
      font-family: "Cardinal", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-transform: lowercase;
      grid-column: 1/span 12;
    }

    section p {
      font-family: "Gothicus Roman", serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.8em;
      line-height: 30px;
      margin-bottom: 1em;
      text-align: justify;
    }

    section.full-para p {
      grid-column: 1/span 12;
      text-align: center;
    }

    img.float-left {
      float: left;
      margin: 0 15px 10px 0;
      max-width: 45%;
    }

    img.float-right {
      float: right;
      margin: 0 0 10px 15px;
      max-width: 45%;
    }

    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }

    section img {
      margin: 20px 0 0;
      max-height: 50vmax;
      max-width: 100%;
      height: auto;
    }

    div.img {
      grid-column: 8/span 5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.img2 {
      grid-column: 1/span 6;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.img3 {
      grid-column: 1/span 12;
      display: flex;
      justify-content: center;
    }

    hr.author-line {
      border: 0.02vmax solid black;
    }

    .tab {
      display: inline-block;
      margin-left: 40px;
    }

    @media (max-width: 1248px) {
      section p {
        font-size: 1.0em;
      }
    }

    @media (max-width: 800px) {
      body {
        width: 100%;
        font-size: 1.2em;
      }
      
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
        margin: 10px auto;
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
        <h1>The Lady Of The Castle</h1>
        <h2>by Emma Lambert</h2>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest1.png" className="float-left" alt="Crest" />
          In the years before he turned seventeen, Domeric had grown
          up in the harder half of the country. Red marshes and thick groves of
          dirt and dead men that had wandered off an eye too far and foot too
          deep, like haunted marks that marred the flat plains of swamp, buried
          only a stone's throw from the foot path unbeknownst to the
          passerby's until their bodies came up with the summer rains.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest2.png" className="float-right" alt="Crest 2" />
          The Lady of the Castle was not a woman, but a force. She moved through
          the corridors like a shadow, her presence felt rather than seen. The
          servants whispered of her in the kitchens, speaking of eyes that
          seemed to pierce through stone and a voice that could command the
          very walls to bend to her will.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          Domeric had heard the stories since childhood—tales of a being who
          existed between worlds, neither fully of this realm nor entirely
          beyond it. She was said to be the guardian of secrets that could
          shatter kingdoms, the keeper of knowledge that predated the very
          stones upon which the castle stood.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest3.png" className="float-left" alt="Crest 3" />
          When the summons came, delivered by a messenger whose face was
          obscured by shadows even in the brightest daylight, Domeric knew his
          time had come. The Lady required an audience, and none who received
          such an invitation had ever returned unchanged.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          The journey to the castle took three days through terrain that seemed
          to shift and change with each step. The path itself appeared to lead
          him forward, as if the very earth conspired to bring him to his
          destination. By the time he reached the massive gates, carved from
          stone that seemed to pulse with an inner light, Domeric understood
          that he was no longer entirely in the world he had known.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest4.png" className="float-right" alt="Crest 4" />
          The Lady awaited him in a chamber that existed at the heart of the
          castle, though no map had ever shown such a room. The walls were lined
          with books bound in leather that seemed to breathe, and the air itself
          crackled with power that made the hair on Domeric's arms stand on end.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          "You have come," she said, and her voice was like the sound of wind
          through ancient trees. "Few have the courage to answer my call, and
          fewer still survive what comes after."
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest5.png" className="float-left" alt="Crest 5" />
          Domeric bowed deeply, though he could not see her face clearly in the
          shifting light. "I am honored by your summons, my Lady. What service
          may I provide?"
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          The Lady's laughter filled the chamber, rich and deep and carrying
          within it echoes of ages past. "Service? You misunderstand, young
          one. I do not seek a servant, but a successor. The time has come for
          me to pass on what I have guarded for so long, and you have been
          chosen to receive it."
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest6.png" className="float-right" alt="Crest 6" />
          As she spoke, the very fabric of reality seemed to shift around them.
          The books on the shelves began to glow with inner light, and the air
          itself seemed to thicken with power. Domeric felt something stirring
          within him—a recognition, as if some part of him had always known
          this moment would come.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          "The knowledge I offer comes with a price," the Lady continued, her
          form becoming more solid as the power around them grew. "You will
          become like me—neither fully of this world nor entirely beyond it.
          You will guard secrets that could destroy kingdoms, and you will do
          so alone, for none may share this burden."
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest7.png" className="float-left" alt="Crest 7" />
          Domeric considered her words carefully. He had come seeking adventure,
          perhaps even glory, but this was something far greater than he had
          imagined. The power that filled the chamber was intoxicating, but he
          could sense the weight of responsibility that came with it.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          "I accept," he said finally, his voice steady despite the trembling
          in his hands. "I will take up your burden and guard what you have
          protected for so long."
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest8.png" className="float-right" alt="Crest 8" />
          The Lady's smile was both beautiful and terrible, filled with the
          wisdom of ages and the sorrow of one who has carried too much for
          too long. "Then let the transformation begin."
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          As the power flowed into him, Domeric felt himself changing. His
          perception expanded beyond the physical realm, and he began to see
          the threads of fate that connected all things. The knowledge that
          filled his mind was vast and ancient, carrying within it the secrets
          of civilizations long forgotten and powers that could reshape reality
          itself.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest9.png" className="float-left" alt="Crest 9" />
          When the transformation was complete, Domeric found himself alone in
          the chamber. The Lady was gone, but her presence remained in the very
          stones of the castle, in the books that lined the walls, and in the
          power that now coursed through his veins.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          He was now the Lady of the Castle, guardian of secrets that could
          shatter kingdoms, keeper of knowledge that predated the very stones
          upon which the castle stood. And though he would never again be
          entirely of the world he had known, he understood that this was his
          destiny—to protect what others could not comprehend, to guard the
          mysteries that kept the balance between worlds.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/photos/group4/crest10.png" className="float-right" alt="Crest 10" />
          As the first light of dawn filtered through the chamber's windows,
          Domeric—now the Lady—took his place among the ancient tomes and
          prepared to begin his eternal vigil. The castle would stand for
          another age, and he would guard its secrets until the time came
          for another to take his place.
        </p>
      </section>

      <hr className="author-line" />
      <section className="full-para">
        <p>
          <span className="tab">Emma Lambert</span> is a writer whose work explores the intersection of fantasy and reality, 
          creating worlds where magic and mystery coexist with the human experience.
        </p>
      </section>
      </div>
    </>
  );
};

export default LadyOfTheCastle;
