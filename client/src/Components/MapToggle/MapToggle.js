import React from 'react';
import './MapToggle.css';

const MapToggle = ({ isUS, handleSetIsUS }) => {
    return (
        <div className="container">
            <div className="MapToggle">
                <input 
                    type="checkbox" 
                    className="checkbox" 
                    id="mapToggleCheckbox" 
                    checked={isUS} 
                    onChange={handleSetIsUS}
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
