import React, { useState } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [compareActive, setCompareActive] = useState(false);

    const handleSetIsUS = () =>  {
        setIsUS(prevUs => !prevUs);
    }

    const handleSetCompareActive = () => {
        console.log("handleSetCompareActive");
        setCompareActive(prevCompare => !prevCompare);
    };

    const handleSetShowModal = (show) => {
        setShowModal(show);
    }

    return (
        <React.Fragment>
            {/*ToggleChange={handleToggle} filter={handleFilter}*/}

            <MapController
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
                compareActive={compareActive}
                setCompareActive={handleSetCompareActive}
                showModal={showModal}
            />
            <MapView
                isUS={isUS}
                compareActive={compareActive}
                setCompareActive={handleSetCompareActive}
                showModal={showModal}
                setShowModal={handleSetShowModal}
            />
        </React.Fragment>
    );
    
}

export default MapContainer;