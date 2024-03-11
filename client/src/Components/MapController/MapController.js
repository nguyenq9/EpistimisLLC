import React from 'react';
import Filter from '../Filter/Filter';
// import Compare from '../Compare/Compare';
import MapToggle from '../MapToggle/MapToggle';
import MUIToggle from '../MapToggle/MUIToggle';

const MapController = ({isUS, handleSetIsUS }) => {
    return (
        <React.Fragment>
            {/* <MUIToggle/> */}
            <Filter />
            <MapToggle
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
            />
        </React.Fragment>
    )
}

export default MapController;