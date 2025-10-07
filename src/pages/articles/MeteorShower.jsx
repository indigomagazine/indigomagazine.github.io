import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const MeteorShower = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: #ffffff;
      margin: 0;
      padding: 40px 20px;
      min-height: 100vh;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 15px;
      backdrop-filter: blur(10px);
    }
    h1 { font-size: 60px; text-align: center; margin-bottom: 20px; color: #ffffff; font-weight: 700; }
    h2 { font-size: 24px; text-align: center; margin-bottom: 40px; color: #b8d4f0; font-style: italic; }
    .content p { font-size: 18px; line-height: 1.8; margin-bottom: 25px; text-align: justify; color: #ffffff; }
    @media (max-width: 768px) {
      .container { padding: 20px; margin: 20px; }
      h1 { font-size: 40px; }
      h2 { font-size: 20px; }
      .content p { font-size: 16px; }
    }
  `;

  return (
    <>
      <Header />
      <ThemeToggle />
      <style>{customCSS}</style>
      
      <div className="article-container">
      <div className="container">
        <h1>Meteor Shower</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The sky was alive with falling stars, each one a brief flash of light 
            against the velvet darkness. Alex lay on the hood of his car, watching 
            the meteor shower paint streaks across the night sky, feeling small 
            and infinite at the same time.
          </p>

          <p>
            Each meteor was a piece of something larger, a fragment of a comet that 
            had been traveling through space for millions of years. They were burning 
            up in the atmosphere, sacrificing themselves for a moment of beauty, 
            a brief flash of light before returning to darkness.
          </p>

          <p>
            Alex thought about his own life, about how he had been burning up in 
            the atmosphere of his own existence, sacrificing pieces of himself for 
            moments of beauty, for brief flashes of happiness before returning to 
            the darkness of his own thoughts.
          </p>

          <p>
            But watching the meteor shower, he realized that there was something 
            beautiful about the burning, about the sacrifice, about the way things 
            had to end to make room for something new. The meteors weren't dying—they 
            were transforming, becoming something else, something that would continue 
            to exist in a different form.
          </p>

          <p>
            As the shower reached its peak, the sky was filled with light, with 
            movement, with the promise of something greater than the sum of its parts. 
            Alex felt something shift inside him, a recognition that he too was 
            part of something larger, something that was constantly changing, 
            constantly becoming something new.
          </p>

          <p>
            The meteor shower would end, but the stars would still be there, still 
            burning, still creating light in the darkness. And Alex would still 
            be there too, still changing, still becoming who he was meant to be, 
            still finding his way through the vast expanse of his own existence.
          </p>

          <p>
            As the last meteor faded from view, Alex smiled up at the stars, grateful 
            for the reminder that even in the darkest moments, there was always light, 
            always hope, always the possibility of transformation.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default MeteorShower;
