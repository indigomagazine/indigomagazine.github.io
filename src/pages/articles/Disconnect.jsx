import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const Disconnect = () => {
  const customCSS = `
    .article-container {
      cursor: url('/assets/cursors/sparkle-cursor.png');
      overflow-x: hidden;
      font-family: 'Georgia', serif;
      font-weight: 400;
      font-size: 17px;
      margin: 0;
      padding: 60px 20px;
      color: black;
      line-height: 1.6;
      background-color: #fce4ec;
      background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
      min-height: 100vh;
    }

    .content-wrapper {
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      font-size: 70px;
      margin-bottom: 20px;
      letter-spacing: 0.5px;
    }

    h2 {
      font-size: 40px;
    }

    h1, h2 {
      text-align: center;
      font-family: "Playfair Display", serif;
      font-weight: 700;
      color: #664229;
    }

    .meta {
      font-family: 'Georgia', serif;
      text-align: center;
      font-style: italic;
      margin-bottom: 40px;
      color: #664229;
    }

    .content {
      font-family: 'Georgia', serif;
      line-height: 1.8;
      text-align: justify;
    }

    .content p {
      margin-bottom: 20px;
      text-indent: 30px;
    }

    .content img {
      max-width: 100%;
      height: auto;
      margin: 20px 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .phone-image {
      max-width: 300px;
      margin: 30px auto;
    }

    @media (max-width: 768px) {
      body {
        margin: 20px auto;
        padding: 40px 15px;
        font-size: 16px;
      }
      
      h1 {
        font-size: 50px;
      }
      
      h2 {
        font-size: 30px;
      }
    }
  `;

  return (
    <>
      <Header />
      <ThemeToggle />
      <style>{customCSS}</style>
      
      <div className="article-container">
      <div className="content-wrapper">
      <h1>Disconnect</h1>
      <h2>by Vivika Iyengar</h2>
      <div className="meta">
        Creative: Lenox S. | Graphics: Dhurga V. | Socials: Adriana B. Troy T. | Web Dev: Paula S.
      </div>

      <div className="content">
        <p>
          The phone buzzed against the nightstand, its screen lighting up the darkness with 
          a cold blue glow. Sarah reached for it automatically, her fingers finding the 
          device before her eyes were fully open. Another notification, another message, 
          another demand for her attention.
        </p>

        <p>
          She had been dreaming of silence—real silence, not the kind that came from 
          turning off notifications, but the deep, profound quiet that existed before 
          smartphones, before constant connectivity, before the world became a series 
          of beeps and buzzes and endless streams of information.
        </p>

        <p>
          The message was from her boss, sent at 11:47 PM. "Can you review the Johnson 
          proposal before tomorrow's meeting?" Sarah stared at the words, feeling the 
          familiar weight of expectation pressing down on her chest. In another time, 
          this message would have waited until morning. In another time, there would 
          have been boundaries between work and life, between day and night, between 
          what was urgent and what could wait.
        </p>

        <p>
          But this was not another time. This was now, and now meant being available 
          always, connected always, reachable always. Sarah had become a node in a 
          vast network of constant communication, and she was beginning to wonder 
          if she had lost herself somewhere in the endless stream of data.
        </p>

        <p>
          She set the phone down and walked to the window. The city stretched out 
          before her, thousands of windows glowing with the same cold blue light, 
          thousands of people staring at thousands of screens, all connected and 
          yet somehow more alone than ever before.
        </p>

        <p>
          Sarah remembered a time when she had known how to be bored. When she had 
          been able to sit in a waiting room or stand in line without reaching 
          for her phone, without needing constant stimulation, without feeling 
          anxious in the absence of digital noise.
        </p>

        <p>
          She remembered conversations that had lasted for hours, uninterrupted 
          by notifications or the urge to check social media. She remembered 
          reading books without the temptation to look up every unfamiliar 
          word or fact. She remembered being present in her own life instead 
          of documenting it for others to consume.
        </p>

        <p>
          The phone buzzed again. Another message, another demand, another 
          reminder that she was never truly alone, never truly free, never 
          truly disconnected from the vast web of human connection that had 
          somehow become a prison.
        </p>

        <p>
          Sarah picked up the phone and stared at it for a long moment. 
          Then she did something she hadn't done in years—she turned it off. 
          Not airplane mode, not do not disturb, but completely off. The 
          screen went black, and for the first time in what felt like forever, 
          she was truly alone with her thoughts.
        </p>

        <p>
          The silence was overwhelming at first, almost painful in its intensity. 
          But gradually, as she sat in the darkness of her apartment, Sarah 
          began to hear things she had forgotten existed—the sound of her own 
          breathing, the creak of the building settling, the distant hum of 
          the city that existed beyond the digital realm.
        </p>

        <p>
          She realized that she had been living in a state of constant partial 
          attention, never fully present in any moment because she was always 
          anticipating the next notification, the next message, the next 
          demand for her time and energy.
        </p>

        <p>
          As the hours passed and the city grew quiet around her, Sarah felt 
          something she hadn't experienced in years—peace. Not the artificial 
          peace that came from meditation apps or sleep tracking, but the 
          real, deep peace that came from simply being present in her own life.
        </p>

        <p>
          When morning came, Sarah left her phone on the nightstand and went 
          about her day without it. She walked to work, noticing the faces 
          of the people around her instead of staring at her screen. She 
          ate lunch without photographing her food or checking social media. 
          She had conversations that lasted longer than the time it took 
          to compose a text message.
        </p>

        <p>
          By the end of the day, Sarah felt more connected to the world around 
          her than she had in years. She had rediscovered the simple pleasure 
          of being present, of experiencing life directly instead of through 
          the filter of a screen.
        </p>

        <p>
          That night, when she turned her phone back on, she was greeted by 
          a flood of messages and notifications. But instead of feeling 
          overwhelmed, Sarah felt something else—the power of choice. She 
          could choose when to be connected and when to disconnect, when 
          to be available and when to be present in her own life.
        </p>

        <p>
          The phone buzzed again, but this time Sarah didn't reach for it 
          immediately. She let it sit there, a tool rather than a master, 
          and she smiled as she realized that she had found something 
          more valuable than constant connectivity—she had found herself.
        </p>
      </div>
      </div>
      </div>
    </>
  );
};

export default Disconnect;
