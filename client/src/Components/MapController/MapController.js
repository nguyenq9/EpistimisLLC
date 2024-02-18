import React, {useState} from 'react';
import Filter from '../Filter/Filter';
import Compare from '../Compare/Compare';
import MapToggle from '../MapToggle/MapToggle';

const MapController = ({isUS, handleSetIsUS}) => {
    return (
        <React.Fragment>
            <Filter />
            <Compare />
            <MapToggle isUS={isUS} handleSetIsUS={handleSetIsUS}/>
        </React.Fragment>
    )
}

export default MapController;