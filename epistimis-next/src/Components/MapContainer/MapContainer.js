"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [filter, setFilter] = useState(null);
    const [comparing, setComparing] = useState(false);
    const [editable, setEditable] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    const handleSetIsUS = (val) =>  {
        setIsUS(val);
    }

    const handleSetComparing = (val) => {
        setComparing(val);
    }

    const handleSetEditable = (val) => {
        setEditable(val);
    }

    const handleClickOutside = (event) => {
        // Check if the click is outside the filter component
        if (!event.target.closest('.filter-component')) {
            setFilterOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <MapController
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
                handleSetFilterOption={setFilter}
                filterOption={filter}
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
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
