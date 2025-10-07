import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const TheRestaurant = () => {
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
        <h1>The Restaurant</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The restaurant was a place where time moved differently, where 
            the outside world ceased to exist, where people came to forget 
            their troubles and remember what it felt like to be alive.
          </p>

          <p>
            Maria had been working there for three years, watching the ebb 
            and flow of customers, the rise and fall of conversations, 
            the dance of light and shadow across the tables. She had 
            learned to read people, to understand their moods, to anticipate 
            their needs before they even knew what they wanted.
          </p>

          <p>
            The restaurant was not just a place to eat—it was a place to 
            connect, to share stories, to create memories. It was where 
            first dates happened, where anniversaries were celebrated, 
            where families gathered to mark the passage of time.
          </p>

          <p>
            Maria had seen it all—the nervous laughter of new couples, 
            the comfortable silence of old friends, the animated 
            discussions of business partners, the quiet tears of 
            people dealing with loss. The restaurant was a microcosm 
            of human experience, a stage where the drama of life 
            played out in small, intimate scenes.
          </p>

          <p>
            But the restaurant was also a place of work, of routine, 
            of the daily grind that kept the world turning. Maria 
            had learned to find beauty in the mundane, to appreciate 
            the rhythm of service, the satisfaction of a job well done, 
            the connection she felt with her coworkers and customers.
          </p>

          <p>
            The restaurant had taught her that life was not about 
            the big moments, but about the small ones—the smile 
            of a satisfied customer, the laughter of friends sharing 
            a meal, the quiet satisfaction of a day's work completed.
          </p>

          <p>
            As Maria looked around the restaurant, she realized 
            that it was not just a place—it was a community, a 
            family, a home away from home for everyone who walked 
            through its doors. It was a place where people could 
            be themselves, where they could find comfort and 
            connection, where they could remember what it felt 
            like to be human.
          </p>

          <p>
            The restaurant was more than just a business—it was 
            a sanctuary, a refuge, a place where the world made 
            sense, where people mattered, where life was worth 
            living. And Maria was proud to be part of it.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default TheRestaurant;
