import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const Amsterdam = () => {
  const customCSS = `
    .article-container {
      min-height: 100vh;
      background: white;
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
      font-family: 'Inter';
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      text-transform: uppercase;
      grid-column: 1/span 12;
    }

    section.heading h2 {
      text-align: center;
      margin: none;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-transform: lowercase;
      grid-column: 1/span 12;
    }

    section p {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 20px;
      text-align: justify;
    }

    section.full-para p {
      grid-column: 1/span 12;
      text-align: center;
    }

    section.para p {
      grid-column: 1/span 6;
    }

    section.para2 p {
      grid-column: 7/span 6;
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
        <h1>Amsterdam</h1>
        <h2>by Emma Lambert</h2>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/article photos/amsterdam/amsterdam1.jpeg" className="float-left" alt="Amsterdam Canal" />
          The city rose from the water like a dream, its narrow houses leaning against each other 
          as if sharing secrets whispered across centuries. Amsterdam had always been a place 
          of contradictions—a city built on water, where the ground was never quite solid, 
          where the past and present existed in perfect harmony.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/article photos/amsterdam/amsterdam2.jpeg" className="float-right" alt="Amsterdam Street" />
          I had come here seeking something I couldn't name—perhaps escape, perhaps answers, 
          perhaps simply the feeling of being somewhere else, somewhere that wasn't home. 
          The canals reflected the sky in perfect symmetry, and I found myself walking 
          for hours, following the water's edge as if it might lead me to whatever it 
          was I was looking for.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          The bicycles were everywhere, a constant stream of movement that seemed to 
          define the city's rhythm. People pedaled past me with purpose, their faces 
          set in expressions of quiet determination. There was something beautiful 
          about the simplicity of it—no cars, no traffic jams, just the steady turning 
          of wheels and the gentle sound of bells ringing in the morning air.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/article photos/amsterdam/amsterdam3.jpeg" className="float-left" alt="Amsterdam Bridge" />
          I spent my days wandering through museums and galleries, losing myself in 
          the works of artists who had captured the city's essence centuries before. 
          In the Rijksmuseum, I stood before Rembrandt's "Night Watch" and felt the 
          weight of history pressing down on me. The painting seemed to pulse with 
          life, as if the figures might step out of the canvas and into the present moment.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/article photos/amsterdam/amsterdam4.jpeg" className="float-right" alt="Amsterdam House" />
          The houseboats along the canals fascinated me. People lived on the water, 
          their homes floating gently with the current, connected to the city by 
          nothing more than a few ropes and a sense of belonging. I envied their 
          freedom, their ability to exist between worlds—neither fully on land nor 
          entirely on water, but somewhere in between.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          In the evenings, I would sit in small cafes, watching the city transform 
          as the sun set behind the gabled roofs. The light would catch the windows 
          at just the right angle, turning them into mirrors that reflected the 
          sky back at itself. It was as if the city was having a conversation 
          with the heavens, and I was privileged to witness it.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/article photos/amsterdam/amsterdam5.jpeg" className="float-left" alt="Amsterdam Night" />
          The Red Light District surprised me with its matter-of-factness. There 
          was no shame here, no pretense, just the acknowledgment that this was 
          part of the city's fabric, as natural as the canals or the bicycles. 
          The neon lights reflected in the water, creating patterns that seemed 
          to dance with the current.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/article photos/amsterdam/amsterdam6.jpeg" className="float-right" alt="Amsterdam Market" />
          I discovered the flower market, where tulips of every color were arranged 
          in perfect rows, their petals catching the morning light. The scent was 
          overwhelming, a heady mixture of earth and bloom that seemed to contain 
          the essence of spring itself. I bought a single tulip and carried it 
          with me for the rest of the day, a small piece of beauty to hold onto.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          The Anne Frank House was a different kind of experience entirely. Standing 
          in the small room where she had written her diary, I felt the weight of 
          history in a way that was almost physical. The space was smaller than I 
          had imagined, more intimate, and I understood how a young girl could find 
          solace in words when the world outside was filled with darkness.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/article photos/amsterdam/amsterdam7.jpeg" className="float-left" alt="Amsterdam Square" />
          On my last day, I took a boat tour through the canals. From the water, 
          the city looked different—more unified, more complete. The houses seemed 
          to lean toward each other across the narrow waterways, creating a sense 
          of community that was both physical and emotional. I realized that 
          Amsterdam was not just a city built on water, but a city built on 
          connection, on the understanding that we are all in this together.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/article photos/amsterdam/amsterdam8.jpeg" className="float-right" alt="Amsterdam Final" />
          As the boat glided through the water, I felt something shift inside me. 
          I had come to Amsterdam seeking escape, but what I had found was something 
          more valuable—a sense of perspective, an understanding that there were 
          other ways to live, other rhythms to follow, other stories to tell.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          The city had given me what I needed, even if I hadn't known what that was 
          when I arrived. It had shown me that beauty could exist in the most 
          unexpected places, that history could be both weight and lightness, 
          that sometimes the best way to find yourself was to lose yourself 
          in someone else's story.
        </p>
      </section>

      <section className="full-para clearfix">
        <p style={{textIndent: '25px'}}>
          <img src="/article photos/amsterdam/amsterdamfinal.jpeg" className="float-left" alt="Amsterdam Final View" />
          As I prepared to leave, I stood on the bridge overlooking the canal one 
          last time. The water was still, reflecting the sky and the houses and 
          the bicycles and the people who called this place home. And I understood 
          that Amsterdam would always be there, waiting for me to return, ready 
          to show me new secrets, new stories, new ways of seeing the world.
        </p>
      </section>

      <hr className="author-line" />
      <section className="full-para">
        <p>
          <span className="tab">Emma Lambert</span> is a writer who finds inspiration in the places 
          where history and modernity intersect, exploring the stories that cities tell 
          about themselves and the people who call them home.
        </p>
      </section>
      </div>
    </>
  );
};

export default Amsterdam;
