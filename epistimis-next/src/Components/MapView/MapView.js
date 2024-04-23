import Map from "../Map/Map";
import "./MapView.css"

const MapView = ({ isUS, showModal, setShowModal, filterOption }) => {
    return (
        <div>
            <h1>MAP</h1>
            <Map
                isUS={isUS}
                showModal={showModal}
                setShowModal={setShowModal}
                filterOption={filterOption}
            />
        </div>
    );
}

export default MapView;