import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom"
import Map from './Components/Map/Map'
import Filter from './Components/Filter/Filter'
import Maptoggle from './Components/Map-toggle/Maptoggle'
import Title from './Components/Title/Title';

function App() {
  return (
    <React.Fragment>
      <Title/>
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
