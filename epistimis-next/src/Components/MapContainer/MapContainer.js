"use client"; // This is a client component 👈🏽
import { useState } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [filter, setFilter] = useState(null);
    const [comparing, setComparing] = useState(false);

    const handleSetIsUS = (val) =>  {
        setIsUS(val);
    }

    const handleSetComparing = (val) => {
        setComparing(val);
    }
    
    return (
        <div>
            <MapController
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
                handleSetFilterOption={setFilter}
                filterOption={filter}
                comparing={comparing}
            />
            <MapView
                isUS={isUS}
                filterOption={filter}
                comparing={comparing}
                setComparing={handleSetComparing}
            />
        </div>
    );
}

export default MapContainer;