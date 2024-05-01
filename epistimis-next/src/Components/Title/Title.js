import React from 'react';
import "./Title.css"

function Title(){
  return (
    <div className='title-container'>
      <h1 className='big-title'>Data Privacy Laws Tracker</h1>
      <h2 className='small-title'>Select a region to get information on its data privacy laws</h2>
    </div>
  );
}

export default Title;