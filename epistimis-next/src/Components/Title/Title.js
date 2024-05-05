import React from 'react';
import "./Title.css"

const Title = ({isUS}) => {
  return (
    <div className='title-container'>
      <h1 className='big-title'>{isUS ? "U.S DATA PRIVACY LAWS TRACKER" : "INTERNATIONAL DATA PRIVACY LAWS TRACKER"}</h1>
      <h2 className='small-title'>Select a {isUS ? "state" : "jurisdiction"} to get information on its data privacy laws</h2>
    </div>
  );
}

export default Title;