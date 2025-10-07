import React from 'react';
import Header from '../../components/Header';
import ThemeToggle from '../../components/ThemeToggle';

const AirItOut = () => {
  const customCSS = `
    .article-container {
      cursor: url('/assets/cursors/sparkle-cursor.png');
      overflow-x: hidden;
      font-family: 'Georgia', serif;
      font-weight: 400;
      font-size: 17px;
      background-color: #e5dba8;
      margin: 0;
      padding: 60px 20px;
      color: black;
      line-height: 1.6;
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
    }

    @media (max-width: 768px) {
      body {
        margin: 20px auto;
        padding: 0 15px;
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
      <h1>Air It Out</h1>
      <h2>by Susan Eltell</h2>
      <div className="meta">
        Creative: Lauren L. Zay P. | Graphics: Laney N. Riccardo S. | Social: Amal G. | Web Dev: Afra I.
      </div>

      <div className="content">
        <p>
          The air was thick with the weight of unspoken words, hanging between us like a curtain 
          that neither of us dared to pull aside. We sat in the living room, two people who had 
          once been inseparable, now separated by the very silence that had once bound us together.
        </p>

        <p>
          "We need to talk," I said finally, the words escaping my lips like birds from a cage. 
          The phrase felt cliché, overused, but sometimes the most important truths are the ones 
          we've heard a thousand times before.
        </p>

        <p>
          You looked up from your phone, and I saw something flicker across your face—relief, 
          maybe, or perhaps just exhaustion. "I know," you replied, setting the device aside 
          with deliberate care. "I've been waiting for you to say that."
        </p>

        <p>
          The honesty in your voice caught me off guard. How long had we been dancing around 
          this moment? How many conversations had we had without actually saying anything at all?
        </p>

        <p>
          "I miss us," I said, the words feeling both too small and too large for what I meant. 
          "I miss the way we used to laugh together, the way we used to finish each other's 
          sentences. I miss feeling like we were on the same team."
        </p>

        <p>
          You nodded slowly, and I could see the weight of your own unspoken words pressing 
          against your chest. "I miss that too," you said quietly. "But I don't know how to 
          get it back. I don't know if we can."
        </p>

        <p>
          The question hung in the air between us, heavy and real. Could we? Was there a way 
          back to what we had been, or were we doomed to drift further apart until we became 
          strangers who happened to share the same space?
        </p>

        <p>
          "Maybe we don't need to get it back exactly," I said, surprising myself with the 
          words. "Maybe we need to build something new. Something that acknowledges who we 
          are now, not who we used to be."
        </p>

        <p>
          You looked at me then, really looked at me, and I saw something I hadn't seen in 
          months—hope. Tentative, fragile, but there nonetheless.
        </p>

        <p>
          "What would that look like?" you asked, and I could hear the careful optimism in 
          your voice.
        </p>

        <p>
          "I don't know," I admitted. "But I think it starts with this. With actually talking 
          to each other instead of around each other. With being honest about what we're 
          feeling, even when it's hard."
        </p>

        <p>
          We sat in silence for a moment, letting the words settle between us. The air felt 
          different now, lighter somehow, as if we had opened a window in a room that had 
          been sealed shut for too long.
        </p>

        <p>
          "I'm scared," you said finally, the admission coming out in a rush. "I'm scared 
          that if we try and fail, it will hurt more than if we just let things drift apart."
        </p>

        <p>
          "I'm scared too," I replied. "But I think I'm more scared of what happens if we 
          don't try. If we just let this silence grow until it becomes permanent."
        </p>

        <p>
          You reached across the space between us then, your hand finding mine, and I felt 
          something crack open in my chest—not pain, but possibility.
        </p>

        <p>
          "Okay," you said, squeezing my fingers gently. "Let's try. Let's air it all out, 
          whatever that means."
        </p>

        <p>
          And so we began, two people who had forgotten how to speak, learning to use our 
          voices again. The words came slowly at first, halting and uncertain, but they 
          came. And with each sentence, each admission, each moment of vulnerability, 
          the air between us grew lighter.
        </p>

        <p>
          We talked until the sun went down and the stars came out. We talked about the 
          things that had been eating away at us, the misunderstandings that had grown 
          into mountains, the small hurts that had accumulated into something larger.
        </p>

        <p>
          And when we were done, when we had aired it all out, we sat together in the 
          comfortable silence of people who had nothing left to hide.
        </p>

        <p>
          "Thank you," you said quietly, and I knew you meant it.
        </p>

        <p>
          "Thank you too," I replied. "For being brave enough to try."
        </p>

        <p>
          The air was clear now, fresh and clean, and I realized that sometimes the most 
          important thing we can do is simply open the windows and let the wind blow through.
        </p>
      </div>
      </div>
      </div>
    </>
  );
};

export default AirItOut;
