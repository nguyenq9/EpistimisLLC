"use client"; // This is a client component 👈🏽
import { useState } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";
import AdminDialog from "../AdminDialog/AdminDialog";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [filter, setFilter] = useState(null);
    const [comparing, setComparing] = useState(false);
    const [editable, setEditable] = useState(false);

    const handleSetIsUS = (val) => {
        setIsUS(val);
    }

    const handleSetComparing = (val) => {
        setComparing(val);
    }

    const handleSetEditable = (val) => {
        setEditable(val);
    }

    return (
        <div>
            <AdminDialog />
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
                editable={editable}
                setEditable={handleSetEditable}
            />
        </div>
    );
}

export default MapContainer;