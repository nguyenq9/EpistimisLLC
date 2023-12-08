import React, { useState } from 'react';
import './App.css';
<<<<<<< Updated upstream
import Navbar from './Components/Navbar';
=======
import Map from './Components/Map/Map';
import Maptoggle from './Components/Map-toggle/Maptoggle';
>>>>>>> Stashed changes

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
<<<<<<< Updated upstream
        <Navbar>

        </Navbar>
=======
      <Map showModal={showModal} setShowModal={setShowModal}/>
      <div className={`MapToggle ${showModal ? 'fade-out' : ''}`}>
        <Maptoggle /> {/* Assuming Maptoggle doesn't need the label anymore */}
      </div>
>>>>>>> Stashed changes
    </React.Fragment>
  );
}

export default App;