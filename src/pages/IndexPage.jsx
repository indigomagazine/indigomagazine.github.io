import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ThemeToggle from '../components/ThemeToggle';

const IndexPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Button for Light/Dark Mode */}
      <ThemeToggle />

      {/* Featured Article Section */}
      <div id="Featured-Article">
        <h1><br />FEATURED ARTICLE</h1>
        <Link to="/articles/NOT/Disconnect" className="article">
          <img style={{ maxWidth: '300px' }} src="/NOT photos/group5/phoneRojan.jpg" alt="Disconnect" />
          <div className="article-title">Disconnect</div>
        </Link>
      </div>

      {/* NOT Section */}
      <h1>
        <Link to="/NOT" className="header-link">NOT</Link>
      </h1>
      <div className="articles-container">
        <Link to="/articles/NOT/airitout" className="article">
          <img src="/NOT photos/group3/3.jpg" alt="Air It Out" />
          <div className="article-title">Air It Out</div>
        </Link>
        <Link to="/articles/NOT/quietdevourment" className="article">
          <img src="/NOT photos/group 6/cover.jpg" alt="Quiet Devourment" />
          <div className="article-title">Quiet Devourment</div>
        </Link>
        <Link to="/articles/NOT/inthewind" className="article">
          <img src="/NOT photos/group 4/Sarah_Rizvi_Final_Graphic_3.jpeg" alt="In the Wind" />
          <div className="article-title">In the Wind</div>
        </Link>
      </div>

      {/* Spotify Widget Section */}
      <div className="spotify-section">
        <iframe 
          data-testid="embed-iframe" 
          style={{ borderRadius: '12px' }} 
          src="https://open.spotify.com/embed/playlist/0X9K1ewdZrIU6U8RlYl5hg?utm_source=generator&theme=0" 
          width="35%" 
          height="370" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        />
        <div className="kismet-notes">
          <p>NOT</p>
          <p>To scream at a void of grotesque inaction. To oppose what exists, what lacks, what overwhelms, what oppresses. Our world is made of both rage and hope.</p>
          <p><em>Do you ignore it? <br />Do you revel in it?<br /></em></p>
          <p>Maybe you'd rather dance the pain away—out of sight, out of mind. Ignorance is so blissful. 
            There is too much of everything; it feels as if there is nothing at all.</p>
          <p><strong>NOT is born from this chaos, from the desperate need to say no, to resist, to refuse.</strong></p>
        </div>
      </div>

      {/* Social Links */}
      <fieldset className="icons">
        <a className="icon-color" href="https://pin.it/29ELT8gzs" target="_blank" rel="noopener">
          <img src="/assets/socials/pint.jpg" alt="Pinterest" />
        </a>
        <a className="icon-color" href="https://www.instagram.com/utdindigo/" target="_blank" rel="noopener">
          <img src="/assets/socials/inst.png" alt="Instagram" />
        </a>
        <a className="icon-color" href="https://www.tiktok.com" target="_blank" rel="noopener">
          <img src="/assets/socials/tik.jpg" alt="TikTok" />
        </a>
        <a className="icon-color" href="https://open.spotify.com/user/316ijys7qrsyxqfsd4o5yfrmvtuu?si=b59bc6b18e024035" target="_blank" rel="noopener">
          <img src="/assets/socials/spot.png" alt="Spotify" />
        </a>
        <a className="icon-color" href="https://x.com/utdindigo" target="_blank" rel="noopener">
          <img src="/assets/socials/twit.png" alt="Twitter" />
        </a>
        <a className="icon-color" href="mailto: indigomagazineutd@gmail.com">
          <img src="/assets/socials/gmail.webp" alt="Gmail" />
        </a>
      </fieldset>
    </>
  );
};

export default IndexPage;
