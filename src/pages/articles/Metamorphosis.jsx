import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const Metamorphosis = () => {
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
        <h1>Metamorphosis</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The caterpillar had been crawling for what felt like forever, moving through 
            a world that seemed designed for creatures with wings. It had watched the 
            butterflies dance above it, envying their freedom, their beauty, their 
            ability to see the world from above.
          </p>

          <p>
            But the caterpillar didn't know that it was already changing, that deep 
            inside its body, something miraculous was happening. Cells were dividing, 
            reorganizing, preparing for a transformation that would change everything.
          </p>

          <p>
            When the time came, the caterpillar spun itself a cocoon, wrapping itself 
            in layers of silk that would protect it during its metamorphosis. Inside 
            the darkness, it began to dissolve, its old form breaking down into 
            something new and unrecognizable.
          </p>

          <p>
            The process was painful, terrifying, beautiful. The caterpillar had to 
            die to become something else, had to let go of everything it had known 
            to become what it was meant to be.
          </p>

          <p>
            When the transformation was complete, the butterfly emerged from its 
            cocoon, its wings still wet and fragile. It had to wait for them to dry, 
            to strengthen, to become capable of carrying it into the sky.
          </p>

          <p>
            And then, for the first time, it flew. It soared above the world it had 
            once crawled through, seeing everything from a new perspective, experiencing 
            a freedom it had never known was possible.
          </p>

          <p>
            The metamorphosis was complete, but it was also just beginning. The butterfly 
            had become something new, but it would continue to change, to grow, to 
            transform throughout its life. Because metamorphosis was not a destination, 
            but a journey—a constant process of becoming who we were meant to be.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Metamorphosis;
