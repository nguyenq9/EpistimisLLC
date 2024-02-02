import React from 'react';
import './App.css';
// import Map from './Components/Map/Map'
import Title from './Components/Title/Title';
import MapContainer from './Components/MapContainer/MapContainer';

function App() {
  return (
    <React.Fragment>
      <Title/>
      <MapContainer/>
    </React.Fragment>
  );
}

export default App;
