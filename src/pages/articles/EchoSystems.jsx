import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const EchoSystems = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
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
        <h1>Echo Systems</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The sound bounced off the canyon walls, returning to her ears as a distorted 
            version of itself. Maya had been shouting into the void for what felt like 
            hours, testing the limits of the echo system that surrounded her.
          </p>

          <p>
            Each word she spoke came back to her changed, transformed by the distance 
            it had traveled, by the surfaces it had touched, by the air it had moved 
            through. Her voice was no longer just her voice—it was a collaboration 
            between her and the world around her.
          </p>

          <p>
            Maya realized that this was how all communication worked. Every word she 
            spoke, every message she sent, every connection she made was part of a 
            larger echo system, bouncing off the people and places around her, 
            returning to her transformed by the journey it had taken.
          </p>

          <p>
            The echo system was not just about sound—it was about understanding, 
            about how ideas moved through the world, about how meaning was created 
            through interaction and reflection. It was about how nothing existed 
            in isolation, how everything was connected to everything else.
          </p>

          <p>
            As Maya continued to shout into the canyon, she began to understand that 
            the echo was not just returning her words—it was teaching her something 
            about herself, about how she sounded to the world, about how her voice 
            was being received and transformed by the people around her.
          </p>

          <p>
            The echo system was a mirror, reflecting back not just sound, but truth. 
            It showed her how her words landed, how they were received, how they 
            changed as they moved through the world. It was a feedback loop, 
            constantly adjusting, constantly learning, constantly evolving.
          </p>

          <p>
            Maya stopped shouting and listened to the silence that followed. Even 
            in the absence of sound, the echo system was still there, still working, 
            still connecting her to the world around her. The silence was just 
            another kind of echo, another way of understanding how she fit into 
            the larger system of things.
          </p>

          <p>
            As she walked away from the canyon, Maya carried with her a new understanding 
            of how communication worked, of how her voice was part of something larger, 
            of how every word she spoke would echo through the world, returning to 
            her transformed by the journey it had taken.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default EchoSystems;
