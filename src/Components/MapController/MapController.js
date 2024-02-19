import React, {useState} from 'react';
import Filter from '../Filter/Filter';
import Compare from '../Compare/Compare';
import MapToggle from '../MapToggle/MapToggle';

const MapController = ({isUS, handleSetIsUS, filterOption, handleSetFilterOption}) => {
    return (
        <React.Fragment>
            <Filter filterOption={filterOption} handleSetFilterOption={handleSetFilterOption}/>
            <Compare />
            <MapToggle isUS={isUS} handleSetIsUS={handleSetIsUS}/>
        </React.Fragment>
    )
}

export default MapController;