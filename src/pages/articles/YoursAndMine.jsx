import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const YoursAndMine = () => {
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
        <h1>Yours And Mine</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The line between yours and mine had always been blurred, 
            like a river that changed its course with the seasons, 
            sometimes flowing one way, sometimes another, but always 
            connected to the same source.
          </p>

          <p>
            Sarah and Alex had been together for five years, and in 
            that time, they had learned that love was not about 
            ownership, but about sharing. Their lives had become 
            so intertwined that it was impossible to say where one 
            ended and the other began.
          </p>

            <p>
            The apartment was theirs, but the books on the shelf were 
            a mix of his favorites and hers. The kitchen was theirs, 
            but the recipes were memories from both their families. 
            The bed was theirs, but the dreams they shared belonged 
            to neither one alone.
            </p>

            <p>
            They had learned that the best things in life were not 
            things at all, but experiences, moments, connections 
            that transcended the boundaries of individual ownership. 
            A sunset was not his or hers—it was theirs, shared, 
            experienced together, made more beautiful by the fact 
            that they were seeing it side by side.
            </p>

            <p>
            The laughter that filled their home was not his or hers—it 
            was theirs, created by the unique combination of their 
            personalities, their shared jokes, their mutual understanding 
            of what made life worth living.
            </p>

            <p>
            The future they were building was not his or hers—it was 
            theirs, a shared vision of what they wanted their life 
            together to be, a collaboration between two people who 
            had chosen to make their journey together.
            </p>

            <p>
            They had learned that love was not about possession, but 
            about partnership. It was not about claiming ownership 
            of another person, but about creating something new together, 
            something that belonged to both of them, something that 
            was greater than the sum of its parts.
            </p>

            <p>
            As Sarah looked at Alex across the room, she realized 
            that the line between yours and mine had disappeared 
            completely. They were not two separate people trying 
            to merge their lives—they were one life, shared, 
            experienced together, made richer by the fact that 
            it was theirs, not his or hers, but theirs.
            </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default YoursAndMine;
