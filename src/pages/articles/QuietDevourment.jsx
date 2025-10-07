import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const QuietDevourment = () => {
  const customCSS = `
    .article-container {
      font-family: 'Georgia', serif;
      background: #1a1a1a;
      color: #e0e0e0;
      margin: 0;
      padding: 40px 20px;
      min-height: 100vh;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.05);
      padding: 40px;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    h1 {
      font-size: 60px;
      text-align: center;
      margin-bottom: 20px;
      color: #ffffff;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    h2 {
      font-size: 24px;
      text-align: center;
      margin-bottom: 40px;
      color: #b0b0b0;
      font-style: italic;
    }

    .content p {
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 25px;
      text-align: justify;
      color: #e0e0e0;
    }

    .content img {
      max-width: 100%;
      height: auto;
      margin: 30px auto;
      display: block;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    .meta {
      text-align: center;
      font-style: italic;
      margin-bottom: 40px;
      color: #b0b0b0;
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
        <h1>Quiet Devourment</h1>
        <h2>by Emma Lambert</h2>
        <div className="meta">
          Creative: Ali K. | Graphics: Nicole M. | Socials: Alaynna N. | Web Dev: Akshaya M.
        </div>

        <div className="content">
          <p>
            The silence was not empty, but full. It pressed against the walls of the small 
            apartment like a living thing, growing heavier with each passing hour. Marcus 
            sat in the center of it, feeling the weight of all the words he had never 
            spoken, all the thoughts he had never shared, all the emotions he had never 
            expressed.
          </p>

          <p>
            He had learned to be quiet as a child, when speaking up meant punishment, 
            when expressing himself meant ridicule, when being himself meant rejection. 
            So he had learned to swallow his words, to digest his feelings, to consume 
            his own thoughts before they could escape into the world.
          </p>

          <p>
            Now, as an adult, the silence had become his companion, his protector, his 
            prison. He moved through the world like a ghost, present but not seen, 
            heard but not understood, existing but not living. The quiet devourment 
            of his own voice had left him hollow, a shell of a person filled with 
            nothing but the echoes of all the things he had never said.
          </p>

          <p>
            The phone rang, and Marcus let it go to voicemail. The knock at the door 
            went unanswered. The emails piled up in his inbox, unread and unresponded to. 
            He had become so good at silence that he had forgotten how to make noise, 
            how to take up space, how to exist in a way that others could see and hear 
            and understand.
          </p>

          <p>
            But the silence was beginning to consume him from the inside out. He could 
            feel it eating away at his sense of self, his connection to others, his 
            ability to feel anything at all. The quiet devourment was no longer 
            protective—it was destructive, turning him into someone he didn't recognize, 
            someone he didn't want to be.
          </p>

          <p>
            One morning, Marcus woke up and realized that he couldn't remember the last 
            time he had spoken out loud. He had been living in a world of internal 
            monologue, of thoughts that never found their way to his lips, of feelings 
            that never found their way to expression. He had become a prisoner of his 
            own silence, trapped in a cell of his own making.
          </p>

          <p>
            He stood in front of the mirror and tried to speak, but the words caught 
            in his throat like stones. He had been quiet for so long that his voice 
            had atrophied, unused and forgotten. The quiet devourment had taken 
            everything from him, including the ability to take it back.
          </p>

          <p>
            But Marcus was tired of being consumed by silence. He was tired of being 
            invisible, of being unheard, of being nothing more than a shadow of himself. 
            He wanted to reclaim his voice, to speak his truth, to exist in a way that 
            mattered.
          </p>

          <p>
            He picked up the phone and dialed a number he had been avoiding for months. 
            When the voice on the other end answered, Marcus took a deep breath and 
            spoke. The words came out haltingly at first, rusty from disuse, but they 
            came. And with each word, he felt the silence begin to crack, begin to 
            break, begin to release its hold on him.
          </p>

          <p>
            The quiet devourment was not permanent. It was not inevitable. It was a 
            choice, and Marcus was choosing something different. He was choosing to 
            speak, to be heard, to exist in a way that mattered. He was choosing to 
            reclaim his voice, his truth, his life.
          </p>

          <p>
            As the conversation continued, Marcus felt something he hadn't felt in 
            years—connection. The simple act of speaking, of being heard, of sharing 
            his thoughts and feelings with another person, was like coming back to 
            life after a long sleep.
          </p>

          <p>
            The silence would always be there, waiting in the corners of his apartment, 
            ready to consume him again if he let it. But Marcus had learned that silence 
            was not his friend, not his protector, not his companion. It was his enemy, 
            his captor, his destroyer. And he would not let it devour him again.
          </p>

          <p>
            He hung up the phone and sat in the quiet of his apartment, but this time 
            the silence felt different. It was no longer consuming him—it was simply 
            there, a space between sounds, a pause between words. It was no longer 
            devouring him—it was simply waiting, patient and benign, for him to fill 
            it with his voice, his truth, his life.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default QuietDevourment;
