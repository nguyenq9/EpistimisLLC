"use client"; // This is a client component 👈🏽
import { useState } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState(null);
    const [comparing, setComparing] = useState(false);

    const handleSetIsUS = (val) =>  {
        setIsUS(val);
    }

    const handleSetShowModal = (show) => {
        setShowModal(show);
    }
    
    return (
        <div>
            <MapController
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
                handleSetFilterOption={setFilter}
                showModal={showModal}
                filterOption={filter}
                comparing={comparing}
            />
            <MapView
                isUS={isUS}
                showModal={showModal}
                setShowModal={handleSetShowModal}
                filterOption={filter}
                comparing={comparing}
                setComparing={setComparing}
            />
        </div>
    );
}

export default MapContainer;