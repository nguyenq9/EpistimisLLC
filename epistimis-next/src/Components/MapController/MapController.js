import Filter from '../Filter/Filter';
import Title from "../Title/Title";
import MapToggle from '../MapToggle/MapToggle';
import "./MapController.css"

const MapController = ({ isUS, handleSetIsUS, filterOption, handleSetFilterOption, filterOpen, setFilterOpen, comparing }) => {
    return (
        <div id="map_controller">
            <MapToggle
                isUS={isUS}
                handleSetIsUS={handleSetIsUS}
                comparing={comparing}
            />
            <Title isUS={isUS}/>
            <Filter
                filterOption={filterOption}
                handleSetFilterOption={handleSetFilterOption}
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
            />
        </div>
    )
}

export default MapController;
