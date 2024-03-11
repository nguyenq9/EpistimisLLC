import React from 'react';
import Filter from '../Filter/Filter';
// import Compare from '../Compare/Compare';
import MapToggle from '../MapToggle/MapToggle';

const MapController = ({isUS, handleSetIsUS, setCompareActive, filterOption, handleSetFilterOption}) => {
    return (
        <React.Fragment>
            {/* <Filter /> */}
            <Filter filterOption={filterOption} 
            handleSetFilterOption={handleSetFilterOption}/>
            <MapToggle
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
            />
        </React.Fragment>
    )
}

export default MapController;