import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const GiveMeASign = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      margin: 0;
      padding: 40px 20px;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.95);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    h1 {
      font-size: 60px;
      text-align: center;
      margin-bottom: 20px;
      color: #2c1810;
      font-weight: 700;
    }

    h2 {
      font-size: 24px;
      text-align: center;
      margin-bottom: 40px;
      color: #5a3d2a;
      font-style: italic;
    }

    .content p {
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 25px;
      text-align: justify;
      color: #2c1810;
    }

    .content img {
      max-width: 100%;
      height: auto;
      margin: 30px auto;
      display: block;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
      .container {
        padding: 20px;
        margin: 20px;
      }
      
      h1 {
        font-size: 40px;
      }
      
      h2 {
        font-size: 20px;
      }
      
      .content p {
        font-size: 16px;
      }
    }
  `;

  return (
    <>
      <Header />
      <ThemeToggle />
      <style>{customCSS}</style>
      
      <div className="article-container">
      <div className="container">
        <h1>Give Me A Sign</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The neon sign flickered in the rain, casting fractured light across the wet pavement. 
            Sarah stood beneath the awning, watching the letters pulse with an irregular rhythm 
            that seemed to match the beating of her heart. "Give Me A Sign," it read, and she 
            wondered if the universe was mocking her.
          </p>

          <p>
            She had been asking for signs for months now—praying for guidance, looking for 
            omens, searching for anything that might point her in the right direction. But 
            the universe had remained stubbornly silent, offering only the same questions 
            she had started with and no answers to go with them.
          </p>

          <p>
            The rain fell harder, drumming against the awning above her head. Sarah pulled 
            her coat tighter around her shoulders and watched the people hurry past, their 
            faces hidden beneath umbrellas and hoods. Everyone seemed to know where they 
            were going, everyone except her.
          </p>

          <p>
            She had come to this city six months ago with dreams of starting over, of 
            finding a new path, of becoming someone different from the person she had 
            been. But instead of clarity, she had found only confusion. Instead of 
            direction, she had found only more questions.
          </p>

          <p>
            The sign flickered again, and for a moment Sarah thought she saw something 
            different in the pattern of light. But when she looked more closely, it 
            was just the same irregular pulsing, the same fractured glow against the 
            wet pavement.
          </p>

          <p>
            A man approached the building, his umbrella dripping water onto the sidewalk. 
            He looked up at the sign and smiled, as if he understood something Sarah 
            didn't. "Beautiful, isn't it?" he said, nodding toward the neon letters.
          </p>

          <p>
            "I suppose," Sarah replied, not sure what he meant.
          </p>

          <p>
            "The way it flickers," he continued. "Like it's trying to tell us something, 
            but we're not quite smart enough to understand what it is."
          </p>

          <p>
            Sarah looked at the sign again, seeing it through his eyes. The irregular 
            pulsing did seem purposeful somehow, as if it were a message in a language 
            she didn't know how to read.
          </p>

          <p>
            "Maybe we're looking for signs in all the wrong places," the man said, 
            pulling out a key and heading toward the door. "Maybe the signs are 
            everywhere, and we just need to learn how to see them."
          </p>

          <p>
            Sarah watched him disappear into the building, leaving her alone with the 
            flickering sign and her thoughts. She realized that she had been so focused 
            on finding a sign that would tell her what to do that she had forgotten 
            to pay attention to the signs that were already there.
          </p>

          <p>
            The rain began to slow, and Sarah stepped out from under the awning. 
            She looked up at the sign one more time, and this time she didn't try 
            to read it. She just let it be what it was—a beautiful, flickering 
            light in the darkness, a reminder that sometimes the most important 
            thing is not to find the answers, but to keep asking the questions.
          </p>

          <p>
            As she walked away, Sarah felt something shift inside her. She had been 
            waiting for a sign to tell her what to do, but maybe the sign was 
            simply telling her to keep going, to keep looking, to keep believing 
            that the answers would come when she was ready to receive them.
          </p>

          <p>
            The neon light faded behind her, but Sarah carried its message with her. 
            She would keep asking for signs, but she would also learn to recognize 
            them when they appeared. And she would remember that sometimes the most 
            important sign is simply the willingness to keep looking.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default GiveMeASign;
