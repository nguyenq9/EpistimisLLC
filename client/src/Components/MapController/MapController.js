import React from 'react';
import Filter from '../Filter/Filter';
// import Compare from '../Compare/Compare';
import MapToggle from '../MapToggle/MapToggle';

const MapController = ({isUS, handleSetIsUS, showModal, filterOption, handleSetFilterOption}) => {

    if (showModal) {
        return null;
    }
    
    return (
        <React.Fragment>
            <Filter filterOption={filterOption} handleSetFilterOption={handleSetFilterOption}/>
            <MapToggle
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
            />
        </React.Fragment>
    )
}

export default MapController;