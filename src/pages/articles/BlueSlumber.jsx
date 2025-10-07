import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const BlueSlumber = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
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
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    h1 {
      font-size: 60px;
      text-align: center;
      margin-bottom: 20px;
      color: #ffffff;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    h2 {
      font-size: 24px;
      text-align: center;
      margin-bottom: 40px;
      color: #b8d4f0;
      font-style: italic;
    }

    .content p {
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 25px;
      text-align: justify;
      color: #ffffff;
    }

    .content img {
      max-width: 100%;
      height: auto;
      margin: 30px auto;
      display: block;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    @media (max-width: 768px) {
      .container {
        padding: 20px;
        margin: 20px;
      }
      
      h1 {
        font-size: 40px;
      }
      
      h2 {
        font-size: 20px;
      }
      
      .content p {
        font-size: 16px;
      }
    }
  `;

  return (
    <>
      <Header />
      <ThemeToggle />
      <style>{customCSS}</style>
      
      <div className="article-container">
      <div className="container">
        <h1>Blue Slumber</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The ocean stretched out before her like a vast, blue dream, its surface 
            rippling with the gentle rhythm of waves that had been moving since 
            before time began. Lila stood on the shore, feeling the sand shift 
            beneath her feet as the tide pulled the water back and forth in an 
            endless dance.
          </p>

          <p>
            She had come here seeking sleep, but not the kind that came from closing 
            her eyes. She had come seeking the deep, restful slumber that only the 
            ocean could provide—the kind that washed away the worries of the day, 
            the kind that carried her into dreams that were more real than waking life.
          </p>

          <p>
            The blue slumber of the ocean was different from the sleep of the land. 
            It was deeper, more profound, more connected to the ancient rhythms of 
            the earth. It was the sleep of whales and dolphins, of creatures who 
            had learned to rest while still moving, to dream while still awake.
          </p>

          <p>
            Lila waded into the water, feeling the cool embrace of the ocean against 
            her skin. The waves lapped at her legs, each one a gentle caress that 
            seemed to whisper secrets about the depths below. She closed her eyes 
            and let the rhythm of the waves carry her into a state of deep relaxation.
          </p>

          <p>
            In the blue slumber of the ocean, Lila found herself floating between 
            worlds. She was neither fully awake nor fully asleep, but somewhere 
            in between, in a place where dreams and reality merged into something 
            new and beautiful.
          </p>

          <p>
            She saw visions of underwater cities, of creatures that glowed with 
            their own light, of coral reefs that sang with the voices of a thousand 
            fish. She felt the weight of the ocean above her, pressing down with 
            the gentle force of water that had been moving for millions of years.
          </p>

          <p>
            The blue slumber was teaching her something about the nature of rest, 
            about the importance of letting go, about the beauty of being carried 
            by forces greater than herself. She was learning to trust the rhythm 
            of the waves, to surrender to the flow of the ocean, to find peace 
            in the endless movement of water.
          </p>

          <p>
            As the sun began to set, painting the sky in shades of orange and pink, 
            Lila felt herself emerging from the blue slumber. She was refreshed, 
            renewed, ready to face the world with a sense of peace that she had 
            never known before.
          </p>

          <p>
            She walked back to the shore, leaving footprints in the sand that would 
            be washed away by the next tide. The ocean had given her what she needed—not 
            just rest, but a deeper understanding of the rhythms that governed all life, 
            the cycles that connected everything in the universe.
          </p>

          <p>
            The blue slumber would always be there, waiting for her to return, ready 
            to carry her into dreams that were more real than waking life. And Lila 
            knew that she would come back, again and again, to find peace in the 
            endless dance of the waves.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default BlueSlumber;
