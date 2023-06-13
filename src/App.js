import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="count-container">
          count: <h3 data-testid="counter">{counter}</h3>
        </div>
        <div className="countup-button">
          <button
            data-testid="plus-button"
            disabled={disabled}
            onClick={() => setCounter((count) => count + 1)}
          >
            +
          </button>
          <button
            data-testid="minus-button"
            disabled={disabled}
            onClick={() => setCounter((count) => count - 1)}
          >
            -
          </button>
        </div>
        <div className="switch-button">
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setDisabled((prev) => !prev)}
          >
            on / off
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
