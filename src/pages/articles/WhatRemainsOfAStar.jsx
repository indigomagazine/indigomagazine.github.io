import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const WhatRemainsOfAStar = () => {
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
        <h1>What Remains Of A Star</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            When a star dies, it doesn't simply disappear. It explodes in a supernova, 
            scattering its elements across the universe, seeding the cosmos with the 
            building blocks of life. What remains of a star is not nothing—it is everything.
          </p>

          <p>
            The carbon in our bones, the iron in our blood, the oxygen in our lungs—all 
            of it came from stars that died billions of years ago. We are literally 
            made of stardust, children of the cosmos, carrying within us the remnants 
            of ancient suns.
          </p>

          <p>
            But what remains of a star is not just physical matter—it is also light. 
            The light from distant stars continues to travel through space long after 
            the star itself has died, carrying with it the story of its existence, 
            the memory of its life.
          </p>

          <p>
            When we look up at the night sky, we are seeing stars as they were years, 
            decades, centuries ago. Some of the stars we see may have already died, 
            but their light is still reaching us, still illuminating our world, 
            still reminding us of the vastness of the universe.
          </p>

          <p>
            What remains of a star is also the impact it had on the universe around it. 
            The gravitational waves it created, the planets it may have nurtured, 
            the life it may have made possible—all of these continue to exist, 
            continue to matter, continue to shape the cosmos.
          </p>

          <p>
            And what remains of a star is the hope it represents—the promise that 
            even in death, there is creation, that even in ending, there is beginning, 
            that even in darkness, there is light.
          </p>

          <p>
            We are all what remains of stars, carrying within us the light of ancient 
            suns, the promise of new beginnings, the hope that our own lives might 
            matter, might make a difference, might leave something beautiful behind 
            when we are gone.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default WhatRemainsOfAStar;
