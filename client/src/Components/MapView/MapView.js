import Map from "../Map/Map";
import "./MapView.css"

const MapView = ({ isUS, showModal, setShowModal }) => {
    return (
            <Map
                isUS={isUS}
                showModal={showModal}
                setShowModal={setShowModal}
            />
    );
}

export default MapView;