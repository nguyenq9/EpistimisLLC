import Map from "../Map/Map";
import "./MapView.css"

const MapView = ({ isUS, filterOption, comparing, setComparing, editable, setEditable }) => {
    return (
        <div>
            <Map
                isUS={isUS}
                filterOption={filterOption}
                comparing={comparing}
                setComparing={setComparing}
                editable={editable}
                setEditable={setEditable}
            />
        </div>
    );
}

export default MapView;