import Map from "../Map/Map";
// import Modal from "../Modal/Modal";

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