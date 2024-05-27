import React from 'react';
import './MapToggle.css';

const MapToggle = ({ isUS, handleSetIsUS, comparing }) => {
    return (
        <div className="container">
            <div className="MapToggle">
                <span 
                    className={`link ${isUS ? "maptoggled" : ""}`} 
                    onClick={() => { 
                        if (!isUS && !comparing) handleSetIsUS(true) 
                    }}
                >
                    USA 
                </span>
                <span className="separator"> / </span>
                <span 
                    className={`link ${!isUS ? "maptoggled" : ""}`} 
                    onClick={() => { 
                        if (isUS && !comparing) handleSetIsUS(false) 
                    }}
                >
                    INTL
                </span>
            </div>
        </div>
    );
};

export default MapToggle;
