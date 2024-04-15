import React from 'react';
import './MapToggle.css';

const MapToggle = ({ isUS, handleSetIsUS }) => {
    return (
        <div className="container">
            <div className="MapToggle">
                <span 
                    className={`link ${isUS ? "active" : ""}`} 
                    onClick={() => { if (!isUS) handleSetIsUS(true) }}
                >
                    USA 
                </span>
                <span className="separator"> / </span>
                <span 
                    className={`link ${!isUS ? "active" : ""}`} 
                    onClick={() => { if (isUS) handleSetIsUS(false) }}
                >
                    INTL
                </span>
            </div>
        </div>
    );
};

export default MapToggle;