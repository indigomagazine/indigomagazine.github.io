import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="Taskbar-container">
      {/* Logo on the left side, linking to the homepage */}
      <Link to="/" className="logo-link">
        <img src="assets/logos/indigologowhite.png" alt="Website Logo" className="logo" />
      </Link>

      {/* Navigation links */}
      <Link to="/creative" className="link-bar hvr-fade CREATIVE">
        <p className="tabfont">ISSUES</p>
      </Link>
      <Link to="/visualarts" className="link-bar hvr-fade VISUALARTS">
        <p className="tabfont">VISUAL ARTS</p>
      </Link>
      <Link to="/about" className="link-bar hvr-fade ABOUT">
        <p className="tabfont">ABOUT</p>
      </Link>
    </div>
  );
};

export default Header;
