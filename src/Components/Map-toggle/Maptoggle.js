import React from 'react';
import './Maptoggle.css';

const MapToggle = ({ isUSToggle, onToggleChange }) => {
    return (
        <div className="container">
            <div className="MapToggle">
                <input 
                    type="checkbox" 
                    className="checkbox" 
                    id="mapToggleCheckbox" 
                    checked={isUSToggle} 
                    onChange={onToggleChange} 
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
