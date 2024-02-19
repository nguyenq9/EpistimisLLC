import React, {useState, setState} from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    
    const handleSetIsUS = () =>  {
        setIsUS(prevUs => !prevUs);
    }

    return (
        <React.Fragment>
            {/*ToggleChange={handleToggle} filter={handleFilter}*/}

            <MapController isUS={isUS} handleSetIsUS={handleSetIsUS}/>
            <MapView isUS={isUS} />
        </React.Fragment>
    );
    
}

export default MapContainer;