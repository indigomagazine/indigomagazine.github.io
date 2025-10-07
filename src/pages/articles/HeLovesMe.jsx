import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const HeLovesMe = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
      margin: 0;
      padding: 40px 20px;
      min-height: 100vh;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.9);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    h1 { font-size: 60px; text-align: center; margin-bottom: 20px; color: #2c1810; font-weight: 700; }
    h2 { font-size: 24px; text-align: center; margin-bottom: 40px; color: #5a3d2a; font-style: italic; }
    .content p { font-size: 18px; line-height: 1.8; margin-bottom: 25px; text-align: justify; color: #2c1810; }
    .content img { max-width: 100%; height: auto; margin: 30px auto; display: block; border-radius: 10px; }
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
        <h1>He Loves Me, He Loves Me Not</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The petals fell one by one, each one a question, each one an answer. 
            "He loves me," she whispered, plucking a pink petal from the daisy. 
            "He loves me not," came the next, and her heart skipped a beat.
          </p>

          <p>
            Sarah had been playing this game since she was a child, but never had 
            it felt so important, so real, so filled with the weight of possibility. 
            The boy in question was sitting across the park, reading a book beneath 
            the old oak tree, completely unaware that his fate was being decided 
            by the random arrangement of petals on a flower.
          </p>

          <p>
            "He loves me," another petal fell. "He loves me not," another followed. 
            The pattern continued, each petal bringing her closer to an answer she 
            wasn't sure she wanted to know.
          </p>

          <p>
            As the last petal fell, Sarah felt her heart stop. The answer was there, 
            written in the language of flowers, but she couldn't bring herself to 
            look at it. Instead, she picked up another daisy and started again, 
            hoping for a different outcome.
          </p>

          <p>
            But the truth was, Sarah didn't need flowers to tell her what her heart 
            already knew. She had been watching him for weeks, noticing the way he 
            smiled when he thought no one was looking, the way he helped old women 
            carry their groceries, the way he always seemed to be exactly where 
            she needed him to be.
          </p>

          <p>
            The petals were just an excuse, a way to delay the moment when she would 
            have to face the truth about her own feelings. Because the real question 
            wasn't whether he loved her—it was whether she was brave enough to find out.
          </p>

          <p>
            Sarah looked up from her flowers and saw that he was looking at her, 
            a small smile playing at the corners of his mouth. He had been watching 
            her too, counting petals, waiting for her to make the first move.
          </p>

          <p>
            She stood up, leaving the daisies behind, and walked across the park 
            toward him. The petals had given her the answer she needed—not about 
            his feelings, but about her own courage. She was ready to find out 
            the truth, one way or another.
          </p>

          <p>
            As she approached, he closed his book and smiled at her, and Sarah 
            realized that sometimes the most important answers come not from 
            flowers, but from the simple act of being brave enough to ask the question.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default HeLovesMe;
