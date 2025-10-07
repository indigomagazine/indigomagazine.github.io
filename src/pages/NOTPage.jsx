import React from 'react';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';

const NOTPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="behind-text">NOT</div>
        <video autoPlay muted loop playsInline poster="assets/hero videos/fallback.jpg">
          <source src="assets/hero videos/NOTgroup2vid.mp4" type="video/mp4" />
          <source src="assets/hero videos/NOTgroup2vid.mp4" type="video/mp4" media="(max-width: 480px)" />
          <h1 className="not-heading">NOT</h1>
        </video>
      </section>

      {/* Articles Section */}
      <section className="articles-section container">
        <h2 className="section-title">Articles</h2>
        <div className="articles-grid">
          {/* Article 1 */}
          <a href="/articles/NOT/echosystems" className="article-card">
            <img src="NOT photos/group2/group2coverpic.jpg" alt="Echosystems Cover" />
            <div className="article-content">
              <h3 className="article-title">Echosystems</h3>
              <div className="article-credits">
                <p><span className="credit-label">Writer:</span> Sanhita P.</p>
                <p><span className="credit-label">Creative:</span> Veena G.</p>
                <p><span className="credit-label">Graphics:</span> Sahasra</p>
                <p><span className="credit-label">Socials:</span> Manjiri C. <br /> Troy T.</p>
                <p><span className="credit-label">Web Dev:</span> Emma G.</p>
              </div>
            </div>
          </a>

          <a href="/articles/NOT/inthewind" className="article-card">
            <img src="NOT photos/group 4/Sarah_Rizvi_Final_Graphic_3.jpeg" alt="In The Wind Cover" />
            <div className="article-content">
              <h3 className="article-title">In the Wind</h3>
              <div className="article-credits">
                <p><span className="credit-label">Writer:</span> Sarah R.</p>
                <p><span className="credit-label">Creative:</span> Henry T.</p>
                <p><span className="credit-label">Graphics:</span> Jeslin M.<br /> Sarah R. </p>
                <p><span className="credit-label">Socials:</span> Marcela G. </p>
                <p><span className="credit-label">Web Dev:</span> Emma G.</p>
              </div>
            </div>
          </a>

          <a href="/articles/NOT/quietdevourment" className="article-card">
            <img src="NOT photos/group 6/cover.jpg" alt="Quiet Devourment Cover" />
            <div className="article-content">
              <h3 className="article-title">Quiet Devourment</h3>
              <div className="article-credits">
                <p><span className="credit-label">Writer:</span> Emma L.</p>
                <p><span className="credit-label">Creative:</span> Ali K.</p>
                <p><span className="credit-label">Graphics:</span> Nicole M. </p>
                <p><span className="credit-label">Socials:</span> Alaynna N. </p>
                <p><span className="credit-label">Web Dev:</span> Akshaya M.</p>
              </div>
            </div>
          </a>
          
          <a href="/articles/NOT/laQuinta" className="article-card">
            <img src="/article photos/laQuinta/LQcover.png" alt="La Quinta Cover" />
            <div className="article-content">
              <h3 className="article-title">La Quinta</h3>
              <div className="article-credits">
                <p><span className="credit-label">Writer:</span> Zayeed A.</p>
                <p><span className="credit-label">Creative:</span> Keon O. Luis A. Sruja P.</p>
                <p><span className="credit-label">Graphics:</span> Sreya Y. Tarin M.</p>
                <p><span className="credit-label">Socials:</span> Dhiraj A.</p>
                <p><span className="credit-label">Web Dev:</span> Luis A.</p>
              </div>
            </div>
          </a>
          
          <a href="/articles/NOT/airitout" className="article-card">
            <img src="NOT photos/group3/3.jpg" alt="Air It Out Cover" />
            <div className="article-content">
              <h3 className="article-title">Air It Out</h3>
              <div className="article-credits">
                <p><span className="credit-label">Writer:</span> Susan E.</p>
                <p><span className="credit-label">Creative:</span> Lauren L. Zay P.</p>
                <p><span className="credit-label">Graphics:</span> Laney N. Riccardo S.</p>
                <p><span className="credit-label">Social:</span> Amal G.</p>
                <p><span className="credit-label">Web Dev:</span> Afra I.</p>
              </div>
            </div>
          </a>
          
          <a href="/articles/NOT/Disconnect" className="article-card">
            <img src="NOT photos/group5/rojanLaying.JPG" alt="Disconnect Cover" />
            <div className="article-content">
              <h3 className="article-title">Disconnect</h3>
              <div className="article-credits">
                <p><span className="credit-label">Writer:</span> Vivika I.</p>
                <p><span className="credit-label">Creative:</span> Lenox S.</p>
                <p><span className="credit-label">Graphics:</span> Dhurga V.</p>
                <p><span className="credit-label">Socials:</span> Adriana B. <br /> Troy T.</p>
                <p><span className="credit-label">Web Dev:</span> Paula S.</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <h3 className="team-role">Editor-in-chief</h3>
            <div className="team-members">
              <p className="member-name"> Keon Ohimai </p>
            </div>
          </div>

          {/* Logistics Team */}
          <div className="team-group">
            <h3 className="team-role">Logistics Officer </h3>
            <div className="team-members">
              <p>Sanhita Perkari</p>
            </div>
          </div>
          
          {/* Creative Team */}
          <div className="team-group">
            <h3 className="team-role">Creative</h3>
            <div className="team-members">
              <p>Creative Head: Lauren Lowndes</p>
              <p>Team:
                Henry Trahan
                <br />
                Crystal Norani 
                <br />
                Sruja Peruka 
                <br />
                Veena Ganeshan 
                <br />
                Zayan Parakkavetty 
                <br />
                Ali Kaheh
                <br />
                Luis Alarcon
                <br />
                Dhurga Venogopal
              </p>
            </div>
          </div>

          {/* Graphic Design Team */}
          <div className="team-group">
            <h3 className="team-role">Graphic Design</h3>
            <div className="team-members">
              <p>Graphics Head: Ethan Tran</p>
              <p>Team:
                Laney Nguyen
                <br />
                Nicole Marquez 
                <br />
                Sarah Rizvi 
                <br />
                Sahasra Guvvala 
                <br />
                Terin Nguyen 
                <br />
                Sreya Iyer 
                <br />
                Riccardo Stagni
                <br />
                Jeslin Mathew
              </p>
            </div>
          </div>

          {/* Social and Events Team */}
          <div className="team-group">
            <h3 className="team-role">Social and Events</h3>
            <div className="team-members">
              <p>Social Head: Manjiri C.</p>
              <p>Team:
                Marcela Guerra
                <br />
                Dhiraj Anbunathan
                <br />
                Alaynna Nsengiyumva
                <br />
                Troy Tran
                <br />
                Adriana Biswas
                <br />
                Amal Gill
                <br />
              </p>
            </div>
          </div>

          {/* Web Development Team */}
          <div className="team-group">
            <h3 className="team-role">Web Development</h3>
            <div className="team-members">
              <p>Lead Web Developer: Emma Gonzalez</p>
              <p>Team: 
                Afra Ibnat
                <br />
                Luis Alarcon
                <br />
                Akshaya Muthusamy
                <br />
                Paula Solano
                <br />
              </p>
            </div>
          </div>

          {/* Writing Team */}
          <div className="team-group">
            <h3 className="team-role">Writing</h3>
            <div className="team-members">
              <p> Writing Head: Emma Lambert </p>
              <p>Team:
                Susan Eltell
                <br />
                Zayeed Anwar
                <br />
                Sanhita Perkari
                <br />
                Vivika Iyengar
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Button for Light/Dark Mode */}
      <ThemeToggle />
    </>
  );
};

export default NOTPage;
