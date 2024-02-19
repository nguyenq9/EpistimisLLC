import Map from "../Map/Map";

const MapView = ({isUS, jursComparing, compareActive, addJurToCompare, removeJurFromCompare}) => {
    return (
        <Map
            isUS={isUS}
            jursComparing={jursComparing}
            compareActive={compareActive}
            addJurToCompare={addJurToCompare}
            removeJurFromCompare={removeJurFromCompare}
        />
    );
}

export default MapView;