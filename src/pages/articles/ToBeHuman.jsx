import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const ToBeHuman = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
        <h1>To Be Human</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            To be human is to be imperfect, to make mistakes, to fall down and 
            get back up again. It is to feel too much and too little, to love 
            fiercely and to hurt deeply, to hope against hope and to despair 
            in the darkness.
          </p>

          <p>
            To be human is to be vulnerable, to open your heart to the possibility 
            of pain, to trust in the goodness of others even when the world seems 
            cruel, to believe in love even when it has betrayed you before.
          </p>

          <p>
            To be human is to be curious, to ask questions that have no answers, 
            to seek meaning in a universe that may be meaningless, to create 
            beauty in a world that is often ugly, to find joy in the smallest 
            moments of existence.
          </p>

          <p>
            To be human is to be connected, to feel the pain of others as if 
            it were your own, to celebrate the happiness of strangers, to 
            understand that we are all in this together, that we are all 
            struggling to find our way through the same darkness.
          </p>

          <p>
            To be human is to be mortal, to know that your time is limited, 
            that every moment is precious, that every breath is a gift, 
            that every day is a chance to be better than you were yesterday.
          </p>

          <p>
            To be human is to be flawed, to carry wounds that never fully heal, 
            to make the same mistakes over and over again, to fall short of 
            your own expectations, to disappoint yourself and others.
          </p>

          <p>
            But to be human is also to be capable of growth, of change, of 
            becoming something more than you were before. It is to learn 
            from your mistakes, to forgive yourself and others, to choose 
            love over fear, hope over despair, connection over isolation.
          </p>

          <p>
            To be human is to be alive, to feel the sun on your skin and 
            the wind in your hair, to taste the sweetness of life and 
            the bitterness of loss, to experience the full spectrum 
            of what it means to exist in this world, in this moment, 
            in this body, in this heart.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default ToBeHuman;
