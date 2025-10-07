import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const LaQuinta = () => {
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
    .content img { max-width: 100%; height: auto; margin: 30px auto; display: block; border-radius: 10px; }
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
        <h1>La Quinta</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The old Spanish mission stood against the desert sky like a sentinel, 
            its adobe walls weathered by centuries of sun and wind. Maria had come 
            here seeking answers, but the mission seemed to hold only questions, 
            its silent corridors echoing with the whispers of those who had come before.
          </p>

          <p>
            La Quinta had been built in a time when the desert was still wild, 
            when the only sounds were the wind through the sagebrush and the 
            distant howl of coyotes. Now it stood surrounded by the modern world, 
            a relic of a time that had passed, a reminder of what had been lost.
          </p>

          <p>
            Maria walked through the mission's courtyard, feeling the weight of 
            history in every stone, every archway, every shadow cast by the 
            ancient walls. The mission had seen generations come and go, had 
            witnessed the changing of the world, had remained constant while 
            everything around it changed.
          </p>

          <p>
            In the mission's chapel, Maria found what she had been looking for—not 
            answers, but peace. The quiet space, filled with the soft light of 
            stained glass windows, offered her a moment of stillness in a world 
            that never stopped moving.
          </p>

          <p>
            The mission was not just a building—it was a testament to faith, 
            to perseverance, to the human spirit's ability to create beauty 
            in the most unlikely places. It was a reminder that even in the 
            harshest environments, life could flourish, hope could survive, 
            beauty could be found.
          </p>

          <p>
            As Maria sat in the chapel, she realized that La Quinta was not 
            just a place—it was a state of mind, a way of being, a connection 
            to something larger than herself. It was a reminder that she was 
            part of a story that had been going on for centuries, a story 
            that would continue long after she was gone.
          </p>

          <p>
            The mission had taught her that some things were worth preserving, 
            worth fighting for, worth believing in. It had shown her that even 
            in a world of constant change, there were still places where time 
            moved slowly, where the past and present coexisted, where the 
            eternal and the temporal met.
          </p>

          <p>
            As Maria left La Quinta, she carried with her a new understanding 
            of what it meant to be part of something larger, of what it meant 
            to find peace in the midst of chaos, of what it meant to believe 
            in something that transcended the limitations of the present moment.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default LaQuinta;
