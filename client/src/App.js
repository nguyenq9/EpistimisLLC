import React from 'react';
import './App.css';
// import Map from './Components/Map/Map'
import Title from './Components/Title/Title';
import MapContainer from './Components/MapContainer/MapContainer';

function App() {
  return (
    <div className='whole-bg'>
      <Title/>
      <MapContainer/>
    </div>
  );
}

export default App;
