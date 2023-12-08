import React from 'react';
import './Maptoggle.css';

const MapToggle = () => {
    return (
        <div className="container">
            <div className="MapToggle">
                <input type="checkbox" className="checkbox" id="mapToggleCheckbox" />
                <label className="label" htmlFor="mapToggleCheckbox">
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default MapToggle;
