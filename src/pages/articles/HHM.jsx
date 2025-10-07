import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const HHM = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
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
    h2 { font-size: 24px; text-align: center; margin-bottom: 40px; color: #ffd93d; font-style: italic; }
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
        <h1>HHM</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            HHM—the acronym that had become her mantra, her anchor, 
            her way of making sense of a world that often seemed 
            chaotic and overwhelming. It stood for "Here, Here, 
            Me," a reminder to be present, to be grounded, to be 
            fully herself in every moment.
          </p>

          <p>
            Maya had discovered the power of HHM during a particularly 
            difficult time in her life, when she felt like she was 
            losing herself in the noise and distraction of modern 
            existence. She had been so caught up in trying to be 
            everything to everyone that she had forgotten how to 
            be anything to herself.
          </p>

          <p>
            HHM became her way of coming back to herself, of remembering 
            who she was beneath all the roles and expectations and 
            responsibilities. It was her way of saying, "I am here, 
            I am present, I am me, and that is enough."
          </p>

          <p>
            The practice was simple but profound. Whenever she felt 
            overwhelmed or disconnected, she would pause and say 
            "HHM" to herself, taking a deep breath and bringing 
            her attention back to the present moment, back to her 
            own body, back to her own truth.
          </p>

          <p>
            HHM reminded her that she didn't have to be perfect, 
            that she didn't have to have all the answers, that 
            she didn't have to be anything other than who she was 
            in that moment. It was a permission slip to be human, 
            to be flawed, to be exactly as she was.
          </p>

          <p>
            As Maya continued to practice HHM, she began to notice 
            that it was not just about coming back to herself—it 
            was about coming back to life, to the present moment, 
            to the beauty and possibility that existed in every 
            breath, every heartbeat, every second of existence.
          </p>

          <p>
            HHM became her way of honoring herself, of treating 
            herself with the same kindness and compassion that 
            she would show to a dear friend. It was her way of 
            remembering that she was worthy of love, of care, 
            of attention, just as she was.
          </p>

          <p>
            As Maya looked out at the world, she realized that 
            HHM was not just a personal practice—it was a way 
            of being that could transform everything. When she 
            was fully present, fully herself, fully here, she 
            could see the world more clearly, love more deeply, 
            live more fully. HHM was not just about her—it was 
            about everything.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default HHM;
