import Map from "../Map/Map";
import "./MapView.css"

const MapView = ({ isUS, showModal, setShowModal, filterOption }) => {
    return (
        <Map
            isUS={isUS}
            showModal={showModal}
            setShowModal={setShowModal}
            filterOption={filterOption}
        />
    );
}

export default MapView;