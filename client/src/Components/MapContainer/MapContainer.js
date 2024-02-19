import React, { useState } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [jursComparing, setJursComparing] = useState([]);
    const [compareActive, setCompareActive] = useState(false);
    
    const handleSetIsUS = () =>  {
        setIsUS(prevUs => !prevUs);
    }

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
            {/*ToggleChange={handleToggle} filter={handleFilter}*/}

            <MapController
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
                setCompareActive={handleSetCompareActive}
            />
            <MapView
                isUS={isUS}
                jursComparing={jursComparing}
                compareActive={compareActive}
                addJurToCompare={addJurToCompare}
                removeJurFromCompare={removeJurFromCompare}
            />
        </React.Fragment>
    );
    
}

export default MapContainer;