import React from 'react';
import './App.css';

function App() {
  // Define the new logo URL
  const logoUrl = 'https://www.propelleraero.com/wp-content/uploads/2021/05/Vector.svg';

  return (
    <div className="App">
      <header className="App-header">
        {/* Replace the logo with the new URL */}
        <img src={logoUrl} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Replace the link with the new URL */}
        <a
          className="App-link"
          href="https://www.propelleraero.com/dirtmate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
