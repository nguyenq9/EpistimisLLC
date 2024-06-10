import React, { useState, useEffect } from 'react';
import "./Title.css"

const Title = ({isUS}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 660);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='title-container'>
      <h1 className='big-title'>
        {isMobile ? ("Data Privacy Laws Tracker") : (isUS ? "US Data Privacy Laws Tracker" : "International Data Privacy Laws Tracker")}
      </h1>
      <h2 className='small-title'>
        {isMobile ? (isUS ? "Select a state" : "Select a country") : "Select a " + (isUS ? "state" : "country") + " to get information on its data privacy laws"}
      </h2>
    </div>
  );
}

export default Title;