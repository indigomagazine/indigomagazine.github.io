import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const InTheWind = () => {
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
        <h1>In The Wind</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The wind carried secrets, whispers of things that had been lost, promises 
            of things that were yet to come. Sarah stood on the hilltop, feeling 
            the breeze move through her hair, listening to the stories it told.
          </p>

          <p>
            Each gust was different, carrying with it the memory of distant places, 
            the scent of faraway flowers, the sound of voices that had been carried 
            across miles and years. The wind was a messenger, a storyteller, a 
            keeper of all the things that had been forgotten.
          </p>

          <p>
            Sarah closed her eyes and let the wind move through her, feeling how 
            it connected her to everything else in the world. The same air that 
            touched her skin had touched the leaves of trees in distant forests, 
            had moved through the feathers of birds flying over distant mountains, 
            had carried the laughter of children playing in faraway cities.
          </p>

          <p>
            The wind was not just moving air—it was moving life, moving energy, 
            moving the very essence of existence from one place to another. It 
            was the breath of the earth, the heartbeat of the sky, the pulse 
            of the universe itself.
          </p>

          <p>
            As Sarah stood in the wind, she felt herself becoming part of something 
            larger, something that transcended the boundaries of her own body, 
            her own thoughts, her own existence. She was not just standing in 
            the wind—she was the wind, moving through the world, carrying stories, 
            connecting everything to everything else.
          </p>

          <p>
            The wind whispered to her of change, of movement, of the constant flow 
            of life that never stopped, never paused, never rested. It told her 
            that nothing was permanent, that everything was in motion, that the 
            only constant was change itself.
          </p>

          <p>
            Sarah opened her eyes and looked out over the landscape, seeing how 
            the wind moved through the grass, through the trees, through the 
            clouds in the sky. Everything was connected, everything was moving, 
            everything was part of the same great dance that had been going on 
            since the beginning of time.
          </p>

          <p>
            As she walked down the hill, Sarah carried with her the memory of 
            the wind, the feeling of being part of something larger, the understanding 
            that she was not alone, that she was connected to everything else 
            in the world through the invisible threads of air and movement and life.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default InTheWind;
