import { useState } from 'react';

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  
  // The Yes button grows by 20px every time No is clicked
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "नाइँ ",
      "साँच्चै?",
      "प्लिज! ",
      "चकलेट दिन्छु नि! ",
      "मोमो खुवाउँछु! ",
      "यस्तो नगर्नु न! ",
      "रुन्छु नि म! ",
      "मेरो प्यारी दिदी/बहिनी मान्नु न! "
    ];
    // Keep showing the last phrase if they keep clicking
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="container">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Happy hugging bears"
            className="gif-image"
          />
          <h1 className="success-text">
            I love you a lot my sister! ❤️
            <br />
            <span className="nepali-text">
              ह्याप्पी रक्षा बन्धन!
            </span>
          </h1>
        </>
      ) : (
        <>
        <div class="tenor-gif-embed" data-postid="26097824" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/mocha-and-milk-bears-begging-gif-26097824">Mocha And Sticker</a>from <a href="https://tenor.com/search/mocha-stickers">Mocha Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
          <h1 className="question-text">
            के तिमी मलाई राखी बाँधिदिन्छौ?
          </h1>

          <div className="button-container">
            <button
              onClick={() => setYesPressed(true)}
              className="yes-button"
              style={{ fontSize: `${yesButtonSize}px` }}
            >
              हो (Yes)
            </button>
            
            <button
              onClick={handleNoClick}
              className="no-button"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}