import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const YaKnowWhatIMiss = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      margin: 0;
      padding: 40px 20px;
      min-height: 100vh;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.9);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    h1 { font-size: 60px; text-align: center; margin-bottom: 20px; color: #2c1810; font-weight: 700; }
    h2 { font-size: 24px; text-align: center; margin-bottom: 40px; color: #5a3d2a; font-style: italic; }
    .content p { font-size: 18px; line-height: 1.8; margin-bottom: 25px; text-align: justify; color: #2c1810; }
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
        <h1>Ya Know What I Miss?</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            Ya know what I miss? The way the world used to feel before everything 
            got so complicated. The simple pleasure of walking down the street 
            without checking your phone, of having a conversation without worrying 
            about what you were going to post about it later.
          </p>

          <p>
            I miss the way people used to look at each other, really look, 
            without the distraction of screens and notifications and the 
            constant buzz of digital life. I miss the way silence used to 
            feel comfortable, not awkward, the way people used to be able 
            to just sit together without needing to fill every moment 
            with words or entertainment.
          </p>

          <p>
            I miss the way books used to feel in my hands, the weight 
            of them, the smell of the pages, the way they used to 
            transport me to other worlds without the need for batteries 
            or internet connections. I miss the way music used to 
            feel like a gift, something you had to work to discover, 
            not something that was constantly streaming into your ears.
          </p>

          <p>
            I miss the way food used to taste when it wasn't photographed 
            before eating, when meals were about nourishment and connection, 
            not about presentation and social media validation. I miss 
            the way cooking used to feel like an art, not a performance.
          </p>

          <p>
            I miss the way relationships used to develop slowly, over 
            time, through shared experiences and conversations, not 
            through instant messages and emoji reactions. I miss the 
            way love used to feel like a mystery to be discovered, 
            not a status to be updated.
          </p>

          <p>
            I miss the way the world used to feel bigger, more mysterious, 
            more full of possibility. I miss the way travel used to feel 
            like an adventure, not a checklist of photo opportunities. 
            I miss the way every day used to feel like it could hold 
            something new and unexpected.
          </p>

          <p>
            But mostly, I miss the way I used to feel—more present, 
            more connected, more alive. I miss the way I used to 
            experience the world with all my senses, not just through 
            the filter of a screen. I miss the way I used to be 
            fully human, fully here, fully now.
          </p>

          <p>
            Ya know what I miss? I miss me. The me I used to be before 
            I got so caught up in the noise and distraction of modern 
            life. The me who knew how to be still, how to listen, 
            how to be present in the moment. The me who understood 
            that the best things in life are not things at all, 
            but experiences, connections, moments of pure being.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default YaKnowWhatIMiss;
