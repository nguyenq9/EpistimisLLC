"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState(null);

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
                handleSetFilterOption={setFilter}
                showModal={showModal}
                filterOption={filter}
            />
            <MapView
                isUS={isUS}
                showModal={showModal}
                setShowModal={handleSetShowModal}
                filterOption={filter}
            />
        </React.Fragment>
    );
}

export default MapContainer;