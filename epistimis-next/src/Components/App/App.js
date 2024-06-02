"use client"; // This is a client component 👈🏽
import { useState, useEffect, useRef } from "react";
import Map from "../Map/Map";
import MapToggle from "../MapToggle/MapToggle";
import Title from "../Title/Title";
import Filter from "../Filter/Filter";
import AdminDialog from "../AdminDialog/AdminDialog";

import "./App.css";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [filter, setFilter] = useState(null);
    const [comparing, setComparing] = useState(false);
    const [editable, setEditable] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    const handleSetIsUS = (val) => {
        setIsUS(val);
    }

    const handleSetComparing = (val) => {
        setComparing(val);
    }

    const handleSetEditable = (val) => {
        setEditable(val);
    }

    const handleSetFilterOpen = (val) => {
        setFilterOpen(val);
    }

    return (
        <div id="app_container">
            <div id="header">
                <AdminDialog />
                <MapToggle
                    isUS={isUS}
                    handleSetIsUS={handleSetIsUS}
                    comparing={comparing}
                />
                <Title isUS={isUS} />
                <Filter
                    filterOption={filter}
                    handleSetFilterOption={setFilter}
                    filterOpen={filterOpen}
                    setFilterOpen={handleSetFilterOpen}
                // ref={filterRef}
                />
            </div>
            <div id="map_container">
                <Map
                    isUS={isUS}
                    filterOption={filter}
                    comparing={comparing}
                    setComparing={handleSetComparing}
                    editable={editable}
                    setEditable={handleSetEditable}
                    filterOpen={filterOpen}
                    setFilterOpen={handleSetFilterOpen}
                />
            </div>
        </div>
    );
}

export default MapContainer;
