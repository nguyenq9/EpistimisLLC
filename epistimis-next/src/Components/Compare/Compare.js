import React from 'react';
import "./Compare.css"

const Compare = ({compareActive, setCompareActive}) => {
    return (
        <button className="compare-button" onClick={setCompareActive}>Compare</button>
    );
};

export default Compare;