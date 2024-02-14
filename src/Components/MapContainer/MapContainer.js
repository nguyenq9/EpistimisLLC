// import React, {useState, setState} from "react";
// import MapView from "../MapView/MapView";
// import MapController from "../MapController/MapController";
// import {Compare, Filter} from "@mui/icons-material"

// const MapContainer = () => {
//     const [isUS, setIsUS] = useState(true);
//     const [filterOption, setFilterOption] = useState("All");

//     const handleSetIsUS = () =>  {
//         setIsUS(prevUs => !prevUs);
//     }

//     const handleSetFilterOption = (option) => {
//         setFilterOption(option);
//     }

//     return (
//         <React.Fragment>
//             {/*ToggleChange={handleToggle} filter={handleFilter}*/}

//             <MapController isUS={isUS} handleSetIsUS={handleSetIsUS}/>
//             <filterOption filterOption={filterOption} handleSetFilterOption={handleSetFilterOption}/>
//             <MapView isUS={isUS} filterOption={filterOption}/>
//         </React.Fragment>
//     );
    
// }

// export default MapContainer;



import React, { useState } from "react";
import MapView from "../MapView/MapView";
import MapController from "../MapController/MapController";
import Filter from "../Filter/Filter"; 

const MapContainer = () => {
    const [isUS, setIsUS] = useState(true);
    const [filterOption, setFilterOption] = useState("NULL");

    const handleSetIsUS = () =>  {
        setIsUS(prevUs => !prevUs);
    }

    
    // const for handleSetFilterOption ???
    const handleSetFilterOption = (option) => {
        setFilterOption(option);
    }

    return (
        <React.Fragment>
            <MapController isUS={isUS} handleSetIsUS={handleSetIsUS} />
            <Filter filterOption={filterOption} handleSetFilterOption={handleSetFilterOption} /> 
            <MapView isUS={isUS} filterOption={filterOption} />
        </React.Fragment>
    );   

//     return (
//         <React.Fragment>
//             <MapController
//   isUS={isUS}
//   handleSetIsUS={handleSetIsUS}
//   filterOption={filterOption} // Ensure this is passed
//   handleSetFilterOption={handleSetFilterOption} // Ensure this is passed
// />

//         </React.Fragment>
//     );   

}

export default MapContainer;
