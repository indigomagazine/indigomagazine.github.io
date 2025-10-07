import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const KismetArticle = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
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
        <h1>किस्मत (Kismet)</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            किस्मत—the word rolled off her tongue like honey, sweet and golden and filled 
            with the promise of something greater than herself. It meant fate, destiny, 
            the invisible thread that connected all things in the universe.
          </p>

          <p>
            Maya had grown up hearing stories about kismet from her grandmother, tales 
            of how the universe conspired to bring people together, how every meeting 
            was meant to be, how every choice led inexorably to the next moment.
          </p>

          <p>
            But as she grew older, Maya began to question whether kismet was real or 
            just a beautiful story people told themselves to make sense of the chaos 
            of life. She had seen too much randomness, too much pain, too much that 
            seemed to have no purpose or meaning.
          </p>

          <p>
            Then she met him—a stranger on a train, someone who shouldn't have been 
            there, someone who changed everything with a single smile. And suddenly, 
            Maya understood what her grandmother had meant about kismet.
          </p>

          <p>
            It wasn't about everything happening for a reason, but about being open 
            to the possibility that some things were meant to be. It was about 
            recognizing the moments when the universe aligned, when all the pieces 
            fell into place, when everything made sense for just a moment.
          </p>

          <p>
            किस्मत was not about control, but about surrender. It was about trusting 
            the journey, even when the destination was unclear. It was about believing 
            that somewhere, somehow, everything was connected.
          </p>

          <p>
            As Maya looked into his eyes, she felt the thread of kismet pulling them 
            together, weaving their stories into something new and beautiful. And she 
            knew that this moment, this meeting, this love—it was all part of a 
            larger design that she was only beginning to understand.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default KismetArticle;
