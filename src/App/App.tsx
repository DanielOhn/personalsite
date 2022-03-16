import React, { useState} from 'react';
import './App.css';
import Hobbies from '../Hobbies/Hobbies'
import Hobby from "../Hobbies/Hobbies"

function App() {
  let hobbies = ["software engineer", "blogger","noober"]

  const [num, setNum] = useState(0);

  let rightClick = () => {
    if (num == hobbies.length-1) {
      setNum(0)
    } else {
      setNum(num + 1)
    }
  }
  
  let leftClick = () => {
    if (num == 0) {
      setNum(hobbies.length - 1)
    } else {
      setNum(num - 1)
    }
  }

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
          <button onClick={() => leftClick()}>L</button>
          <div className="content">
            <Hobbies name={hobbies[num]} />
            {num}
          </div>
          <button onClick={() => rightClick()}>R</button>
        </div>
      </main>
    </div>
  );
}

export default App;
