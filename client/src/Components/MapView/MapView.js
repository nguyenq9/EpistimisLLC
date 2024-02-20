import Map from "../Map/Map";

const MapView = ({ isUS, compareActive, setCompareActive, showModal, setShowModal }) => {
    return (
        <Map
            isUS={isUS}
            compareActive={compareActive}
            setCompareActive={setCompareActive}
            showModal={showModal}
            setShowModal={setShowModal}
        />
    );
}

export default MapView;