import { useState } from 'react';
import './App.css';
import Hobbies from '../Hobbies/Hobbies'
import Details from '../Details/Details'

function App() {
  let hobbies = ["Daniel Ohn", "a software engineer", "a blogger","a noober"]

  const [num, setNum] = useState(0);
  const [hide, setHide] = useState('hide');

  const details = {
    title: 'a software engineer',
    items: [
      {
        id: 0,
        name: 'Github/DanielOhn',
        url: "https://github.com/DanielOhn",
        content: "Follow me on github to see all the projects I'm coding."
      },
    ]
  }

  let rightClick = () => {
    if (num === hobbies.length-1) {
      setNum(0)
      setHide("details")
    } else {
      setNum(num + 1)
    }
  }
  
  let leftClick = () => {
    if (num === 0) {
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
        <h3>I am...</h3>
        <div className="card">
          <button onClick={() => leftClick()}>L</button>
          <div className="content">
            <Hobbies name={hobbies[num]} />
            {num}
          </div>
          <button onClick={() => rightClick()}>R</button>
        </div>
      </main>

      <div className='details'>
        <Details 
          title={details.title}
          items={details.items}
        />
      </div>
      
    </div>
  );
}

export default App;
