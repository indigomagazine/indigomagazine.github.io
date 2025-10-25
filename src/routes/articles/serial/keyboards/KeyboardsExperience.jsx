import { useState, useEffect } from 'react';
import styles from './keyboards.module.css';
import DialogueBox from './DialogueBox';
import ChoiceButtons from './ChoiceButtons';
import { scenes, eyeColors, imageMap } from './storyFlow';

// Import images
import image1 from '../../../../assets/serial photos/group 3/tentative final 1.png';
import image2 from '../../../../assets/serial photos/group 3/tentative final 2.1.png';
import image3 from '../../../../assets/serial photos/group 3/tentative final 2.2.png';

const images = {
  'image1': image1,
  'image2': image2,
  'image3': image3
};

// Generate random character string
const generateRandomText = (length = 200) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length)) + ' ';
  }
  return result;
};

export default function KeyboardsExperience() {
  const [currentScene, setCurrentScene] = useState('intro');
  const [username, setUsername] = useState('user');
  const [eyeColor, setEyeColor] = useState('blue');
  const [showUserInput, setShowUserInput] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [showLovePrompt, setShowLovePrompt] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [loveInput, setLoveInput] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorShake, setErrorShake] = useState(false);
  const [isShuttingDown, setIsShuttingDown] = useState(false);
  const [showRestart, setShowRestart] = useState(false);
  const [screenFlashing, setScreenFlashing] = useState(false);
  const [screenPoweredOff, setScreenPoweredOff] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingGlitch, setLoadingGlitch] = useState(false);
  const [currentShutdownImage, setCurrentShutdownImage] = useState(null);
  const [imageFading, setImageFading] = useState(false);

  // Handle username/eye color input
  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      triggerGlitch();
      setTimeout(() => {
        setShowUserInput(false);
        setShowLoading(true);
        startLoadingSequence();
      }, 300);
    }
  };

  // Handle loading sequence
  const startLoadingSequence = () => {
    setLoadingProgress(0);
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
      const increment = Math.random() * 15 + 5; // Random increment between 5-20
      progress += increment;
      
      // Clamp to 100 max
      if (progress > 100) {
        progress = 100;
      }
      
      // Random glitches during loading
      if (Math.random() > 0.7 && progress < 100) {
        setLoadingGlitch(true);
        setTimeout(() => setLoadingGlitch(false), 150);
      }
      
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        
        // Transition to love prompt after completion
        setTimeout(() => {
          setShowLoading(false);
          setShowLovePrompt(true);
        }, 500);
      }
    }, 300);
  };

  // Handle "I LOVE YOU" input validation
  const handleLoveSubmit = (e) => {
    e.preventDefault();
    const normalizedInput = loveInput.trim().toLowerCase();
    const expectedInput = 'i love you';
    
    if (normalizedInput === expectedInput) {
      // Correct input - proceed to story
      setShowLovePrompt(false);
      triggerGlitch();
    } else {
      // Wrong input - shake and show error
      setIsError(true);
      setErrorShake(true);
      setTimeout(() => {
        setErrorShake(false);
        setIsError(false);
        setLoveInput('');
      }, 1500);
    }
  };

  // Handle choice selection
  const handleChoice = (choiceValue) => {
    // Check if user selected force shutdown
    if (choiceValue === 'force_shutdown') {
      triggerShutdown();
    } else {
      triggerGlitch();
      setTimeout(() => {
        setCurrentScene(choiceValue);
      }, 300);
    }
  };

  // Handle shutdown sequence
  const triggerShutdown = () => {
    setIsShuttingDown(true);
    
    // Flash red 5 times (2.5 seconds total)
    setScreenFlashing(true);
    
    setTimeout(() => {
      setScreenFlashing(false);
      setScreenPoweredOff(true);
      
      // After fade to black (3s), show images in sequence
      setTimeout(() => {
        showImageSequence();
      }, 3000);
    }, 2500);
  };

  // Show images in sequence
  const showImageSequence = () => {
    const images = ['image1', 'image2', 'image3'];
    let currentIndex = 0;

    const showNextImage = () => {
      if (currentIndex < images.length) {
        // Fade in image
        setCurrentShutdownImage(images[currentIndex]);
        setImageFading(true);
        
        setTimeout(() => {
          setImageFading(false);
          
          // Wait a bit then fade out
          setTimeout(() => {
            setImageFading(true);
            
            setTimeout(() => {
              setCurrentShutdownImage(null);
              setImageFading(false);
              currentIndex++;
              
              // Small pause before next image
              setTimeout(() => {
                showNextImage();
              }, 500);
            }, 1500); // Fade out duration
          }, 2000); // Display duration
        }, 1500); // Fade in duration
      } else {
        // All images shown, show restart button
        setTimeout(() => {
          setShowRestart(true);
        }, 500);
      }
    };

    showNextImage();
  };

  // Handle restart
  const handleRestart = () => {
    // Reset all state
    setIsShuttingDown(false);
    setShowRestart(false);
    setScreenFlashing(false);
    setScreenPoweredOff(false);
    setCurrentShutdownImage(null);
    setImageFading(false);
    setShowUserInput(true);
    setShowLovePrompt(false);
    setCurrentScene('intro');
    setLoveInput('');
    setUsername('user');
    setEyeColor('blue');
    triggerGlitch();
  };

  // Trigger glitch effect
  const triggerGlitch = () => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 300);
  };

  // Get current scene data
  const scene = scenes[currentScene];

  // Replace placeholders in text
  const getProcessedText = (text) => {
    return text
      .replace(/{username}/g, username)
      .replace(/{eye_color}/g, eyeColor);
  };

  // Shutdown screen
  if (isShuttingDown) {
    if (showRestart) {
      return (
        <div className={styles.shutdownContainer}>
          <button className={styles.restartButton} onClick={handleRestart}>
            Restart?
          </button>
        </div>
      );
    }

    // Show image sequence
    if (currentShutdownImage) {
      return (
        <div className={styles.shutdownContainer}>
          <img 
            src={images[currentShutdownImage]} 
            alt="Memory"
            className={`${styles.shutdownImage} ${!imageFading ? styles.shutdownImageVisible : ''}`}
          />
        </div>
      );
    }
    
    return (
      <div className={`${styles.container} ${screenPoweredOff ? styles.containerFadeOut : ''}`}>
        <div className={`${styles.textLinesContainer} ${screenFlashing ? styles.textLinesFlashing : ''}`}>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
        </div>

        <div className={`${styles.screen} ${screenFlashing ? styles.screenFlashing : ''} ${screenPoweredOff ? styles.screenPowerOff : ''}`}>
          <div className={styles.content}>
            <div className={styles.asciiBorder}>
              ⌈ ═══════════════════════════════ ⌉
            </div>
            
            <div className={styles.dialogueBox}>
              <div className={styles.errorText}>
                [SYSTEM TERMINATED]
              </div>
            </div>

            <div className={styles.asciiBorder}>
              ⌊ ═══════════════════════════════ ⌋
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Username/eye color input screen
  if (showUserInput) {
    return (
      <div className={styles.container}>
        {/* Background text lines */}
        <div className={styles.textLinesContainer}>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
        </div>

        <div className={styles.screen}>
          <div className={styles.content}>
            <div className={styles.asciiBorder}>
              ⌈ ═══════════════════════════════ ⌉
            </div>
            
            <DialogueBox 
              text="SYSTEM INITIALIZATION..." 
              type="code"
              showCursor={true}
            />

            <form onSubmit={handleUsernameSubmit}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  className={styles.textInput}
                  placeholder="Enter username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={20}
                  autoFocus
                />
              </div>
              
              <div className={styles.inputContainer}>
                <select
                  className={styles.textInput}
                  value={eyeColor}
                  onChange={(e) => setEyeColor(e.target.value)}
                >
                  {eyeColors.map(color => (
                    <option key={color} value={color}>
                      Eye color: {color}
                    </option>
                  ))}
                </select>
              </div>

              <ChoiceButtons 
                choices={[{ text: 'INITIALIZE', value: 'submit' }]}
                onChoice={() => handleUsernameSubmit({ preventDefault: () => {} })}
              />
            </form>

            <div className={styles.asciiBorder}>
              ⌊ ═══════════════════════════════ ⌋
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading screen
  if (showLoading) {
    return (
      <div className={styles.container}>
        {/* Background text lines */}
        <div className={styles.textLinesContainer}>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
        </div>

        <div className={`${styles.screen} ${loadingGlitch ? styles.glitch : ''}`}>
          <div className={styles.content}>
            <div className={styles.asciiBorder}>
              ⌈ ═══════════════════════════════ ⌉
            </div>
            
            <div className={styles.loadingContainer}>
              <div className={styles.loadingTitle}>
                LOADING ILOVEYOU.EXE...
              </div>
              
              <div className={`${styles.loadingBarContainer} ${loadingGlitch ? styles.loadingBarGlitch : ''}`}>
                {Array.from({ length: 20 }).map((_, index) => {
                  const blockThreshold = (index + 1) * 5; // Each block represents 5%
                  const isFilled = loadingProgress >= blockThreshold;
                  return (
                    <div
                      key={index}
                      className={isFilled ? styles.loadingBlock : styles.loadingBlockEmpty}
                    />
                  );
                })}
              </div>
              
              <div className={styles.loadingPercent}>
                {Math.floor(loadingProgress)}%
              </div>
            </div>

            <div className={styles.asciiBorder}>
              ⌊ ═══════════════════════════════ ⌋
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Love input prompt screen
  if (showLovePrompt) {
    return (
      <div className={styles.container}>
        {/* Background text lines */}
        <div className={styles.textLinesContainer}>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
          <div className={styles.textLine}>{generateRandomText(150)}</div>
        </div>

        <div className={`${styles.screen} ${errorShake ? styles.shake : ''}`}>
          <div className={styles.content}>
            <div className={styles.asciiBorder}>
              ⌈ ═══════════════════════════════ ⌉
            </div>
            
            <div className={`${styles.promptText} ${isError ? styles.error : ''}`}>
              {isError ? 'TRY AGAIN' : 'TYPE I LOVE YOU'}
            </div>

            <form onSubmit={handleLoveSubmit}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  className={`${styles.textInput} ${isError ? styles.errorInput : ''}`}
                  placeholder=""
                  value={loveInput}
                  onChange={(e) => setLoveInput(e.target.value)}
                  autoFocus
                  disabled={isError}
                />
              </div>
            </form>

            <div className={styles.asciiBorder}>
              ⌊ ═══════════════════════════════ ⌋
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main experience
  return (
    <div className={styles.container}>
      {/* Background text lines */}
      <div className={styles.textLinesContainer}>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
        <div className={styles.textLine}>{generateRandomText(150)}</div>
      </div>

      <div className={`${styles.screen} ${glitch ? styles.glitch : ''}`}>
        <div className={styles.content}>
          <div className={styles.asciiBorder}>
            ⌈ ═══════════════════════════════ ⌉
          </div>

          <DialogueBox 
            text={getProcessedText(scene.text)}
            type={scene.type}
            showCursor={false}
          />

          {scene.image && images[scene.image] && (
            <div className={styles.imageContainer}>
              <img 
                src={images[scene.image]} 
                alt="Scene visual"
                className={styles.image}
              />
            </div>
          )}

          <ChoiceButtons 
            choices={scene.choices}
            onChoice={handleChoice}
          />

          <div className={styles.asciiBorder}>
            ⌊ ═══════════════════════════════ ⌋
          </div>
        </div>
      </div>
    </div>
  );
}
