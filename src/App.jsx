import { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('');

  const handleCharCount = () => {
    alert(`Number of characters: ${word.length}`);
  };

  const handleUppercase = () => {
    alert(`Uppercase: ${word.toUpperCase()}`);
  };

  return (
    <>
    

      {/* WordPlay App Content */}
      <div className="nav">
        <h1>WORDPLAY!</h1>
      </div>

      <div className="main">
        <hr />
        <input
          type="text"
          placeholder="Enter your word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleCharCount}>NO. OF CHARACTERS</button>
          <button onClick={handleUppercase} style={{ marginLeft: '1rem' }}>
            UPPERCASE
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
