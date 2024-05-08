import React from 'react';
import "./Title.css"

const Title = ({isUS}) => {
  return (
    <div className='title-container'>
      <h1 className='big-title'>{isUS ? "US Data Privacy Laws Tracker" : "International Data Privacy Laws Tracker"}</h1>
      <h2 className='small-title'>Select a {isUS ? "state" : "country"} to get information on its data privacy laws</h2>
    </div>
  );
}

export default Title;