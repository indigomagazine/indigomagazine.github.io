import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const ToBeOrNotToBe = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
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
        <h1>To Be Or Not To Be</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The question hung in the air like a sword suspended above his head, 
            sharp and gleaming in the dim light of his study. Hamlet had been 
            wrestling with it for months, turning it over in his mind like a 
            stone worn smooth by the constant friction of thought.
          </p>

          <p>
            To be or not to be—it was not just a question of existence, but 
            a question of meaning, of purpose, of whether life was worth 
            living when it was filled with so much pain, so much suffering, 
            so much that seemed to make no sense.
          </p>

          <p>
            But Hamlet realized that the question was not about choosing 
            between life and death—it was about choosing how to live, 
            about deciding what kind of person he wanted to be, about 
            determining what kind of world he wanted to create.
          </p>

          <p>
            To be meant to be present, to be engaged, to be willing to 
            face the challenges of life with courage and determination. 
            It meant to love despite the risk of loss, to hope despite 
            the possibility of disappointment, to act despite the fear 
            of failure.
          </p>

          <p>
            Not to be meant to withdraw, to hide, to avoid the pain and 
            difficulty of living. It meant to choose safety over growth, 
            comfort over challenge, isolation over connection.
          </p>

          <p>
            But Hamlet understood that there was no real choice between 
            being and not being—there was only the choice of how to be, 
            of what kind of existence to create, of what kind of legacy 
            to leave behind.
          </p>

          <p>
            The question was not about whether to exist, but about how 
            to exist, about what it meant to be fully human, fully alive, 
            fully present in the world. It was about choosing to be 
            the kind of person who made a difference, who left the world 
            better than he found it, who lived with purpose and meaning.
          </p>

          <p>
            As Hamlet stood in his study, the sword of the question 
            still hanging above him, he realized that the answer was 
            not in the question itself, but in the way he chose to 
            live his life, in the decisions he made, in the person 
            he became. To be or not to be—the choice was his, and 
            his alone.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default ToBeOrNotToBe;
