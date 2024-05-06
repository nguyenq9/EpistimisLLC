import Map from "../Map/Map";
import "./MapView.css"

const MapView = ({ isUS, showModal, setShowModal, filterOption, comparing, setComparing }) => {
    return (
        <div>
            <Map
                isUS={isUS}
                filterOption={filterOption}
                comparing={comparing}
                setComparing={setComparing}
            />
        </div>
    );
}

export default MapView;