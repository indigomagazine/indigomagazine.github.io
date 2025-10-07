import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const Reflections = () => {
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
        <h1>Reflections</h1>
        <h2>by Emma Lambert</h2>

        <div className="content">
          <p>
            The mirror showed her a face she didn't recognize, a person she 
            had become without realizing it. Sarah stared at her reflection, 
            trying to reconcile the image in the glass with the person she 
            thought she was.
          </p>

          <p>
            Reflections were not just images—they were questions, invitations 
            to look deeper, to see beyond the surface, to understand who we 
            really were beneath the masks we wore for the world.
          </p>

          <p>
            Sarah had spent years avoiding mirrors, afraid of what she might 
            see, afraid of confronting the person she had become. But now, 
            standing before the glass, she realized that the reflection was 
            not her enemy—it was her teacher.
          </p>

          <p>
            The mirror showed her not just her face, but her story. Every 
            line, every scar, every expression was a chapter in the book 
            of her life, a record of the experiences that had shaped her, 
            the choices that had made her who she was.
          </p>

          <p>
            Reflections were not static—they changed with the light, with 
            the angle, with the mood of the person looking into them. They 
            were fluid, dynamic, constantly evolving, just like the people 
            they reflected.
          </p>

          <p>
            Sarah began to understand that the reflection was not just showing 
            her who she was—it was showing her who she could be. It was a 
            reminder that she was not fixed, not finished, not limited by 
            the person she had been in the past.
          </p>

          <p>
            The mirror was not just reflecting her image—it was reflecting 
            her potential, her dreams, her hopes for the future. It was 
            showing her that she was not just the sum of her past, but 
            the promise of her future.
          </p>

          <p>
            As Sarah looked into the mirror, she saw not just herself, 
            but the possibility of becoming someone new, someone better, 
            someone who was worthy of the reflection she saw in the glass.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Reflections;
