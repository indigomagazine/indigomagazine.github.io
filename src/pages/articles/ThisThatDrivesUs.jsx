import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const ThisThatDrivesUs = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
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
        <h1>This That Drives Us</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The engine roared to life, a mechanical heartbeat that pulsed through 
            the metal frame of the car. Maya gripped the steering wheel, feeling 
            the power beneath her hands, the promise of movement, of escape, of 
            freedom from everything that held her back.
          </p>

          <p>
            This that drives us—the need to move, to go somewhere, anywhere, 
            as long as it was away from where we were. It was the restless 
            energy that kept us awake at night, the voice that whispered 
            of distant places, of roads not yet taken, of lives not yet lived.
          </p>

          <p>
            Maya had been driving for hours, following highways that led to 
            nowhere, passing through towns she had never heard of, seeing 
            landscapes that existed only in her dreams. The destination 
            didn't matter—it was the journey that mattered, the act of 
            moving, of being in motion, of not being stuck in one place.
          </p>

          <p>
            The car was not just a vehicle—it was a symbol of possibility, 
            of the ability to change direction, to start over, to become 
            someone new. It was the freedom to choose where to go, when 
            to stop, how to live.
          </p>

          <p>
            This that drives us—the fear of stagnation, of becoming trapped 
            in a life that was not our own, of waking up one day to find 
            that we had become someone we didn't recognize, someone we 
            didn't want to be.
          </p>

          <p>
            Maya pulled over to the side of the road, watching the sun set 
            over the horizon. She realized that the driving was not just 
            about escape—it was about discovery, about finding out who 
            she was when she was free from the constraints of her everyday life.
          </p>

          <p>
            This that drives us—the need to know ourselves, to understand 
            what we were capable of, to see what we could become when 
            we were free to choose our own path, to create our own destiny.
          </p>

          <p>
            As Maya started the engine again, she knew that the journey 
            would never end, that there would always be another road 
            to take, another destination to reach, another version of 
            herself to discover. This that drives us—the endless quest 
            for who we are meant to be.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default ThisThatDrivesUs;
