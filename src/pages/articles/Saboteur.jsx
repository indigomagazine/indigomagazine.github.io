import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const Saboteur = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
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
    h2 { font-size: 24px; text-align: center; margin-bottom: 40px; color: #ffd93d; font-style: italic; }
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
        <h1>Saboteur</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The saboteur lived inside her head, a voice that whispered doubts and 
            fears, that found fault in every success, that turned every victory 
            into a defeat. It was the part of her that believed she wasn't good 
            enough, that she didn't deserve happiness, that she was destined to fail.
          </p>

          <p>
            For years, she had listened to the saboteur, had let it control her 
            decisions, had allowed it to shape her reality. It had convinced her 
            to give up on dreams, to settle for less, to believe that she was 
            fundamentally flawed in some way that could never be fixed.
          </p>

          <p>
            But one day, she realized that the saboteur was not her enemy—it was 
            her creation. It was the voice of her own fears, her own insecurities, 
            her own self-doubt. And if she had created it, then she could uncreate it too.
          </p>

          <p>
            The process was not easy. The saboteur had been with her for so long 
            that it felt like a part of her, like removing it would be like removing 
            a limb. But she began to question its voice, to challenge its assumptions, 
            to refuse to let it control her life.
          </p>

          <p>
            Slowly, she began to replace the saboteur's voice with her own, with 
            the voice of her dreams, her hopes, her belief in herself. She began 
            to see that the saboteur was not protecting her from failure—it was 
            preventing her from success.
          </p>

          <p>
            The saboteur would always be there, lurking in the shadows of her mind, 
            waiting for moments of weakness to strike. But she had learned to recognize 
            its voice, to distinguish it from her own thoughts, to refuse to let it 
            sabotage her happiness.
          </p>

          <p>
            She was not perfect, and she would never be. But she was enough, and 
            she deserved to be happy, and she was capable of achieving her dreams. 
            The saboteur could whisper all it wanted, but it could no longer control 
            her life. That power belonged to her, and her alone.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Saboteur;
