import React from 'react';
import Filter from '../Filter/Filter';
import Compare from '../Compare/Compare';
import MapToggle from '../MapToggle/MapToggle';

const MapController = ({isUS, handleSetIsUS, setCompareActive}) => {
    return (
        <React.Fragment>
            <Compare
                setCompareActive={setCompareActive}
            />
            <Filter />
            <MapToggle
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
            />
        </React.Fragment>
    )
}

export default MapController;