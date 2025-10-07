import React from 'react';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';

const KismetPage = () => {
  return (
    <>
      <ThemeToggle />
      <Header />
      
      <div className="articles-container">
        <a href="/articles/kismet/theladyofthecastle" className="article">
          <img src="photos/group4/kismetnew.jpg" alt="Article 1 Cover" />
          <div className="article-title">The Lady Of The Castle</div>
        </a>

        <a href="/articles/kismet/judas" className="article">
          <img src="photos/group5/illustration.jpeg" alt="Article 2 Cover" />
          <div className="article-title">Judas</div>
        </a>

        <a href="/articles/kismet/ephemeral" className="article">
          <img src="photos/group6/Group6_KISMET_Graphics4.jpeg" alt="Article 2 Cover" />
          <div className="article-title">Ephemeral</div>
        </a>

        <a href="/articles/kismet/giveMeASign" className="article">
          <img src="photos/group2/GMA_cover.png" alt="Give me a sign" />
          <div className="article-title">Give me a sign</div>
        </a>

        <a href="/articles/kismet/saboteur" className="article">
          <img src="photos/group7/thirdPic.png" alt="Saboteur" />
          <div className="article-title">Saboteur</div>
        </a>

        <a href="/articles/kismet/whatRemainsOfAStar" className="article">
          <img src="photos/group7/kismet - Shravya (1) image edit 2-min.png" alt="What Remains Of A Star" />
          <div className="article-title">What Remains Of A Star</div>
        </a>
        
        <a href="/articles/kismet/meteorShower" className="article">
          <img src="photos/group7/darrenCoverPic.png" alt="Meteor Shower" />
          <div className="article-title">Meteor Shower</div>
        </a>

        <a href="/articles/kismet/iknowtheend" className="article">
          <img src="photos/group3/KISMET_G3_1.jpg" alt="I Know The End" />
          <div className="article-title">I Know The End</div>
        </a>

        <a href="/articles/kismet/kismetarticle" className="article">
          <img src="photos/group1/be_picture23.jpg" alt="किस्मत (Kismet)" />
          <div className="article-title">किस्मत (Kismet)</div>
        </a>

        <a href="/articles/kismet/metamorphosis" className="article">
          <img src="photos/group1/be_picture10.jpg" alt="Metamorphosis" />
          <div className="article-title">Metamorphosis</div>
        </a>
      </div>
    </>
  );
};

export default KismetPage;
