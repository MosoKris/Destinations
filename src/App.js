import { useState } from 'react';
import './App.css';
import Tours from './component/Tours';
import data from './data'
function App() {

  const [tours, setTours] = useState(data)

  return (
    <div className="App">
      <Tours tours ={tours}></Tours>
     <h1>Packages</h1>

    </div>
  );
}

export default App;
