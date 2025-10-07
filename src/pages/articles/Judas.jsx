import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const Judas = () => {
  const customCSS = `
    .article-container {
      background: url('/assets/backgrounds/mossyforest.jpg') no-repeat center center;
      background-size: cover;
      min-height: 100vh;
      position: relative;
    }
    
    .article-container::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 30px;
      z-index: -1;
    }

    section.content {
      background: url('/assets/backgrounds/whitepaper.jpg');
      background-size: cover;
      margin: 100px;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    @font-face {
      font-family: "Old London";
      src: url('/assets/fonts/OldLondon.ttf');
    }
    
    @font-face {
      font-family: "Atalon";
      src: url('/assets/fonts/AtalonRegular.otf');
    }

    a {
      text-decoration: none;
      color: black;
    }

    h1 {
      font-family: "Old London", serif;
      font-size: 60px;
      text-align: center;
      margin-bottom: 20px;
      color: #2c1810;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    h2 {
      font-family: "Atalon", serif;
      font-size: 24px;
      text-align: center;
      margin-bottom: 40px;
      color: #5a3d2a;
      font-style: italic;
    }

    .content p {
      font-family: "Atalon", serif;
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 25px;
      text-align: justify;
      color: #2c1810;
      padding: 0 40px;
    }

    .content img {
      max-width: 100%;
      height: auto;
      margin: 30px auto;
      display: block;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    .author-info {
      text-align: center;
      margin-top: 50px;
      padding-top: 30px;
      border-top: 2px solid #5a3d2a;
    }

    .author-info p {
      font-family: "Atalon", serif;
      font-size: 16px;
      color: #5a3d2a;
      font-style: italic;
    }

    @media (max-width: 768px) {
      section.content {
        margin: 20px;
        padding-top: 30px;
        padding-bottom: 30px;
      }
      
      h1 {
        font-size: 40px;
      }
      
      h2 {
        font-size: 20px;
      }
      
      .content p {
        font-size: 16px;
        padding: 0 20px;
      }
    }
  `;

  return (
    <>
      <Header />
      <ThemeToggle />
      <style>{customCSS}</style>
      
      <div className="article-container">
      
      <section className="content">
        <h1>Judas</h1>
        <h2>by Emma Lambert</h2>

        <p>
          The weight of thirty pieces of silver felt heavier than any crown. Judas held the coins 
          in his palm, watching them catch the dim light of the oil lamp, and wondered how 
          something so small could carry the weight of the world's greatest betrayal.
        </p>

        <p>
          He had not meant for it to come to this. When he had first approached the priests, 
          it had been with the intention of forcing Jesus's hand—to make him reveal his true 
          power, to show the world that he was indeed the Messiah they had been waiting for. 
          But now, as the coins pressed against his skin, Judas understood that he had been 
          the one whose hand was being forced.
        </p>

        <p>
          The garden was quiet except for the sound of his own footsteps on the stone path. 
          He could see Jesus ahead, kneeling in prayer, his disciples scattered around him 
          in various states of sleep and wakefulness. The moonlight cast long shadows across 
          the olive trees, and Judas felt as if he were walking through a dream—or perhaps 
          a nightmare from which he could not wake.
        </p>

        <p>
          "Rabbi," he called out, his voice barely above a whisper. The word felt foreign 
          on his tongue now, as if it belonged to someone else, someone who had not sold 
          his teacher for the price of a slave.
        </p>

        <p>
          Jesus looked up, and in that moment Judas saw something in his eyes that he had 
          never seen before—not anger, not disappointment, but something that looked almost 
          like pity. As if Jesus understood the weight of the choice Judas had made, the 
          burden of being the instrument of fate.
        </p>

        <p>
          "Friend," Jesus said, and the word cut deeper than any blade. "Do what you came 
          to do."
        </p>

        <p>
          The kiss was brief, a brush of lips against cheek, but it felt like a brand searing 
          Judas's soul. In that moment, he understood that he had not betrayed Jesus—he had 
          betrayed himself. He had chosen the path of least resistance, the easy way out, 
          and in doing so had lost everything that mattered.
        </p>

        <p>
          As the guards moved forward to arrest Jesus, Judas stepped back into the shadows. 
          He watched as his teacher was led away, watched as the disciples scattered like 
          frightened birds, and felt the coins in his pocket grow heavier with each passing 
          moment.
        </p>

        <p>
          Later, when he tried to return the silver, the priests would not take it back. 
          "What is that to us?" they said. "That's your responsibility." And Judas understood 
          that there was no undoing what had been done, no way to take back the choice that 
          had led him to this moment.
        </p>

        <p>
          The rope was rough against his neck, the branch of the tree creaking under his 
          weight. As he kicked the stool away, Judas thought not of the thirty pieces of 
          silver, not of the priests who had used him, not even of Jesus whom he had betrayed. 
          He thought only of the moment when he had first met the man who would change 
          everything, and wondered if there had ever been a path that led anywhere else.
        </p>

        <p>
          In the end, Judas understood that betrayal was not a single act, but a series of 
          small choices that led inexorably to a moment when there was no turning back. 
          And as the darkness closed around him, he realized that the greatest tragedy 
          was not that he had betrayed Jesus, but that he had betrayed the person he 
          might have become.
        </p>

        <div className="author-info">
          <p>
            Emma Lambert explores themes of redemption and the weight of choice in her 
            writing, examining the moments when ordinary people must face extraordinary 
            consequences.
          </p>
        </div>
      </section>
      </div>
    </>
  );
};

export default Judas;
