import Map from "../Map/Map";
import "./MapView.css"

const MapView = ({ isUS, jursComparing, compareActive, addJurToCompare, removeJurFromCompare, setCompareActive, filterOption }) => {
    return (
        <Map
            isUS={isUS}
            jursComparing={jursComparing}
            compareActive={compareActive}
            addJurToCompare={addJurToCompare}
            removeJurFromCompare={removeJurFromCompare}
            setCompareActive={setCompareActive}
            filterOption={filterOption}
        />
    );
}

export default MapView;