import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const IKnowTheEnd = () => {
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
        <h1>I Know The End</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The end was coming, and she could feel it in her bones. Not the end of the world, 
            but the end of something else—something that had been building inside her for years, 
            something that was finally ready to break free.
          </p>

          <p>
            Sarah had spent her entire life preparing for this moment, though she hadn't known 
            it at the time. Every choice she had made, every path she had taken, every person 
            she had loved and lost—it had all been leading to this single point in time.
          </p>

          <p>
            The knowledge of the end was both terrifying and liberating. It meant that everything 
            she had been afraid of would finally happen, but it also meant that she would finally 
            be free from the weight of anticipation, from the constant wondering about when and 
            how and why.
          </p>

          <p>
            She stood at the edge of the cliff, looking out over the vast expanse of ocean that 
            stretched to the horizon. The waves crashed against the rocks below, sending spray 
            high into the air, and Sarah felt something inside her break loose.
          </p>

          <p>
            The end was not an ending, she realized, but a beginning. It was the moment when 
            she would finally stop running from herself and start running toward something 
            new, something better, something that was truly hers.
          </p>

          <p>
            As the sun began to set, painting the sky in shades of orange and pink, Sarah 
            took a deep breath and stepped forward. She knew the end, and she was ready 
            to meet it head-on.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default IKnowTheEnd;
