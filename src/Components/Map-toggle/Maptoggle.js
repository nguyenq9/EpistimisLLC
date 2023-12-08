import React, { useState } from 'react';
import './Maptoggle.css';

const MapToggle = () => {
    const [isUSToggle, setUSToggle] = useState(true);

    const handleToggleChange = () => {
        setUSToggle(!isUSToggle); 
    };

    return (
        <div className="container">
            <div className="MapToggle">
                <input 
                    type="checkbox" 
                    className="checkbox" 
                    id="mapToggleCheckbox" 
                    checked={isUSToggle} 
                    onChange={handleToggleChange} 
                />
                <label className="label" htmlFor="mapToggleCheckbox">
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default MapToggle;
