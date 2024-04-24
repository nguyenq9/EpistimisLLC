// import React from 'react';
import Filter from '../Filter/Filter';
import Title from "../Title/Title";
import MapToggle from '../MapToggle/MapToggle';
import "./MapController.css"

const MapController = ({ isUS, handleSetIsUS, showModal, filterOption, handleSetFilterOption }) => {

    // if (showModal) {
    //     return null;
    // }

    return (
        <div id="map_controller">
            <MapToggle
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
            />
            <Title />
            <Filter filterOption={filterOption} handleSetFilterOption={handleSetFilterOption} />
        </div>
    )
}

export default MapController;