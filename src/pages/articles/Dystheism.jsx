import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const Dystheism = () => {
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
        <h1>Dystheism</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The gods were not benevolent. They were capricious, cruel, indifferent 
            to the suffering of mortals. Alex had learned this truth the hard way, 
            through years of prayer that went unanswered, through faith that was 
            rewarded with silence, through belief that was met with betrayal.
          </p>

          <p>
            Dystheism was not the absence of belief—it was the belief that the 
            divine was fundamentally flawed, that the gods were not worthy of 
            worship, that the universe was governed by forces that were at best 
            indifferent, at worst actively malevolent.
          </p>

          <p>
            Alex had seen too much suffering to believe in a benevolent creator. 
            The wars, the famines, the natural disasters, the random acts of 
            violence that destroyed innocent lives—all of it pointed to a world 
            that was not designed with love, but with something else entirely.
          </p>

          <p>
            But dystheism was not nihilism. It was not the belief that nothing 
            mattered, that life was meaningless, that there was no point in 
            trying to make the world better. It was the recognition that if 
            the gods were flawed, then mortals had to be better, had to take 
            responsibility for creating the world they wanted to live in.
          </p>

          <p>
            Alex realized that dystheism was actually a form of empowerment. 
            If the gods were not perfect, then mortals were not bound by their 
            limitations. If the divine was flawed, then humans could transcend 
            those flaws, could create something better than what the gods had 
            given them.
          </p>

          <p>
            The world was not perfect, but it was not irredeemable either. It 
            was a place where mortals could choose to be better than the gods, 
            where they could create meaning and purpose and beauty despite the 
            indifference of the universe.
          </p>

          <p>
            Dystheism was not about rejecting the divine—it was about transcending 
            it, about becoming something greater than what the gods had intended, 
            about creating a world that was worthy of the mortals who lived in it.
          </p>

          <p>
            As Alex looked out at the world, he saw not a place of despair, 
            but a place of possibility. The gods might be flawed, but mortals 
            were not. They could choose to be better, to create something 
            beautiful, to make the world a place worth living in, despite 
            the indifference of the divine.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Dystheism;
