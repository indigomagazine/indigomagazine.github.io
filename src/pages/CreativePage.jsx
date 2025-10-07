import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';

const CreativePage = () => {
  return (
    <>
      <ThemeToggle />
      <Header />

      {/* Issue cover section */}
      <div className="issues-container">
        {/* NOT Issue */}
        <Link to="/NOT" className="issue">
          <img src="/article photos/laQuinta/F1-3.JPG" alt="NOT: Issue 09" />
          <div className="issue-title">NOT</div>
        </Link>

        {/* Kismet Issue */}
        <Link to="/kismet" className="issue">
          <img src="/photos/group4/kismet.png" alt="Kismet: Issue 09" />
          <div className="issue-title">Kismet</div>
        </Link>

        {/* Reminiscence Issue */}
        <Link to="/reminiscence" className="issue">
          <img src="/photos/issue covers/reminiscence2.jpeg" alt="Reminiscence: Issue 08" />
          <div className="issue-title">Reminiscence</div>
        </Link>

        {/* Otherworldly Issue */}
        <Link to="/otherworldly" className="issue">
          <img src="/photos/issue covers/otherworldlycover.jpg" alt="Otherworldly: Issue 07" />
          <div className="issue-title">Otherworldly</div>
        </Link>
      </div>
    </>
  );
};

export default CreativePage;
