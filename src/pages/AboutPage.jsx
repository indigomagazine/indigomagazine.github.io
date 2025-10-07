import React from 'react';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';

const AboutPage = () => {
  return (
    <>
      <ThemeToggle />
      <Header />
      
      <br /><br /><br /><br /><br /><br />
      <h1 className="mission-statement-header">Who We Are</h1>
      
      {/* Mission statement section */}
      <div className="mission-statement">
        <p>Indigo Magazine is UT Dallas's first completely student-run creative magazine, exploring different abstract themes through the lens of writing, photography, and design. 
            We amplify creativity through different forms of media for the students, by the students.
        </p>
      </div>

      <h1 className="officer-heading">Officers</h1>
      
      {/* Officer section */}
      <div className="officer-section">
        <div className="officer-card">
          <img src="photos/officers/keono.jpg" alt="Keon Ohmani" />
          <h2>Editor-in-Chief: <br /> Keon Ohimai </h2>
        </div>

        <div className="officer-card">
          <img src="photos/officers/emmalambert.jpg" alt="Emma Lambert" />
          <h2>Writing Head: <br /> Emma Lambert </h2>
        </div>

        <div className="officer-card">
          <img src="photos/officers/lauren.jpg" alt="Lauren Lowndes" />
          <h2>Creative Head: <br /> Lauren Lowndes </h2>
        </div>

        <div className="officer-card">
          <img src="photos/officers/ethan.jpg" alt="Ethan Tran" />
          <h2>Graphics Head: <br /> Ethan Tran</h2>
        </div>

        <div className="officer-card">
          <img src="photos/officers/manjiri.jpg" alt="Manjiri Chacharkar" />
          <h2>Social & Events Head: <br /> Manjiri C. </h2>
        </div>

        <div className="officer-card">
          <img src="photos/officers/shravya.jpg" alt="Shravya Mahesh" />
          <h2>Logistics Head: <br /> Shravya Mahesh</h2>
        </div>

        <div className="officer-card">
          <img src="photos/officers/emmagonzalez.jpg" alt="Emma Gonzalez" />
          <h2>Web Development: <br /> Emma Gonzalez </h2>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
