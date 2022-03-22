import { useEffect, useState } from 'react';
import './App.css';
import Hobbies from '../Hobbies/Hobbies'
import Details from '../Details/Details'
import details from "./details.json"


function App() {
  let hobbies = ["Daniel Ohn", "a software engineer"]

  const [num, setNum] = useState(0);
  const [detail, setDetail] = useState(details.data[0]);

  useEffect(() => {
    setDetail(details.data[num])
  }, [num])

  let rightClick = () => {
    if (num === hobbies.length - 1) {
      setNum(0)
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
    <div className="App" id={detail.title}>
      {/* <nav className="navbar">
        <div className="header">
          <h1>Daniel <b className='lastname'>Ohn</b></h1>
        </div>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav> */}
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
          title={detail.title}
          items={detail.items}
        />
      </div>
      
    </div>
  );
}

export default App;
