import React, { useState } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [jursComparing, setJursComparing] = useState([]);
    const [compareActive, setCompareActive] = useState(false);
    // const [filterOption, setFilterOption] = useState("All");
    const handleSetIsUS = () =>  {
        setIsUS(prevUs => !prevUs);
    }

   // add const for filter here
    const [filter, setFilter] = useState(null);
    // const handleFilter = (filter) => {
    //     setFilter(filter);
    // }
    

    const addJurToCompare = (jurName) => {
        if (!jursComparing.includes(jurName)) {
            setJursComparing(prevJurs => [...prevJurs, jurName]);
        }
    };

    const removeJurFromCompare = (jurName) => {
        setJursComparing(prevJurs => prevJurs.filter(jur => jur !== jurName));
    };

    const handleSetCompareActive = () => {
        setCompareActive(prevCompare => !prevCompare);
    };

    return (
        <React.Fragment>
            {/* ToggleChange={handleToggle} filter={handleFilter} */}

            <MapController
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
                setCompareActive={handleSetCompareActive}
                handleSetFilterOption={setFilter}
                filterOption={filter}
            />
            <MapView
                isUS={isUS}
                jursComparing={jursComparing}
                compareActive={compareActive}
                addJurToCompare={addJurToCompare}
                removeJurFromCompare={removeJurFromCompare}
                setCompareActive={handleSetCompareActive}
                filterOption={filter}
            />
            
            
        </React.Fragment>
    );
    
}

export default MapContainer;