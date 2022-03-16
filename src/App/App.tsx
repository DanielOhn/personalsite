import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="header">
          <h1>Daniel <b className='lastname'>Ohn</b></h1>
        </div>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>

        <h3>I'm a...</h3>
        <div className="card">
          <button>L</button>
          <div className="content">
            <h3>SOFTWARE ENGINEER</h3>
          </div>
          <button>R</button>
        </div>
      </main>
    </div>
  );
}

export default App;
