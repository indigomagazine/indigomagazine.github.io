import React from 'react';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';

const OtherworldlyPage = () => {
  return (
    <>
      <ThemeToggle />
      <Header />

      <div className="articles-container">
        <a href="/articles/otherworldly/BlueSlumber" className="article">
          <img src="article photos/BlueSlumber/themeeting.jpeg" alt="Article 1 Cover" />
          <div className="article-title">Blue Slumber</div>
        </a>
        
        <a href="/articles/otherworldly/Dystheism" className="article">
          <img src="article photos/Dystheism/Nicole 5.jpg" alt="Article 2 Cover" />
          <div className="article-title">Dystheism</div>
        </a>
        
        <a href="/articles/otherworldly/reflections" className="article">
          <img src="article photos/reflections/Mirror Yvette and Nicole.jpg" alt="Article 3 Cover" />
          <div className="article-title">Reflections</div>
        </a>
        
        <a href="/articles/otherworldly/Thisthatdrivesus" className="article">
          <img src="article photos/ThisThatDrivesUs/closeup eye.jpg" alt="Article 4 Cover" />
          <div className="article-title">This That Drives Us To Be Mad</div>
        </a>
        
        <a href="/articles/otherworldly/ToBeHuman" className="article">
          <img src="article photos/ToBeHuman/pic6.png" alt="Article 5 Cover" />
          <div className="article-title">To Be Human</div>
        </a>
        
        <a href="/articles/otherworldly/Tobeornottobe" className="article">
          <img src="article photos/Tobeornottobe/TBONTB14.jpeg" alt="Article 6 Cover" />
          <div className="article-title">To Be, Or Not To Be</div>
        </a>
      </div>
    </>
  );
};

export default OtherworldlyPage;
