import React, { useState } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const handleSetIsUS = (val) =>  {
        setIsUS(val);
    }

    const handleSetShowModal = (show) => {
        setShowModal(show);
    }

    return (
        <React.Fragment>
            <MapController
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
                showModal={showModal}
            />
            <MapView
                isUS={isUS}
                showModal={showModal}
                setShowModal={handleSetShowModal}
            />
        </React.Fragment>
    );
    
}

export default MapContainer;