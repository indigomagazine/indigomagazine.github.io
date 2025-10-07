import React from 'react';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';

const ReminiscencePage = () => {
  return (
    <>
      <ThemeToggle />
      <Header />

      <div className="articles-container">
        <a href="/articles/reminiscence/amsterdam" className="article">
          <img src="article photos/amsterdam/amsterdamfinal.jpeg" alt="Article 1 Cover" />
          <div className="article-title">Amsterdam</div>
        </a>
        
        <a href="/articles/reminiscence/helovesme" className="article">
          <img src="article photos/helovesme/final2.jpg" alt="Article 2 Cover" />
          <div className="article-title">He Loves Me, He Loves Me Not</div>
        </a>
        
        <a href="/articles/reminiscence/therestaurant" className="article">
          <img src="article photos/therestaurant/rem3.png" alt="Article 3 Cover" />
          <div className="article-title">The Restaurant</div>
        </a>
        
        <a href="/articles/reminiscence/yaknowwhatimiss" className="article">
          <img src="article photos/group 3/ya_know_what_i_miss.png" alt="Article 4 Cover" />
          <div className="article-title">ya know what i miss</div>
        </a>
        
        <a href="/articles/reminiscence/yoursandmine" className="article">
          <img src="article photos/yoursandmine/camerafinal.png" alt="Article 5 Cover" />
          <div className="article-title">Yours and mine</div>
        </a>
      </div>
    </>
  );
};

export default ReminiscencePage;
