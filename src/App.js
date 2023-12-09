import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom"
import Map from './Components/Map/Map'
import Filter from './Components/Filter/Filter'
import Maptoggle from './Components/Map-toggle/Maptoggle'

function App() {
  return (
    <React.Fragment>
      <Map/>
      {/* <div className={`MapToggle ${showModal ? 'fade-out' : ''}`}>
      <div className='Map'>
        <Maptoggle />
      </div> */}
      <Filter/>
    </React.Fragment>
  );
}

export default App;
