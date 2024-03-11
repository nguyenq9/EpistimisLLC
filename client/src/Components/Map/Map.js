import React, { useEffect, useRef, useState } from "react";
import "./Map.css";
import { VectorMap } from "@react-jvectormap/core";
import { usLcc } from "@react-jvectormap/unitedstates";
import { worldMill } from "@react-jvectormap/world";
import regionNames from "./regionNames.json";
import stateMap from "./stateMap.json";
import { handleSingleStateRetrieval, handleCompareCall } from "../../js/API";
import Modal from "../Modal/Modal";

var initialArray = [];

const Map = ({ isUS, compareActive, setCompareActive, filterOption }) => {
import { handleSingleStateRetrieval, handleCompareCall } from "../../js/API";
// import Modal from "../Modal/Modal";

// const Map = ({ isUS, showModal, setShowModal }) => {
// >>>>>>> snapshot3-11
  const [currCode, setCode] = useState("");
  const [currRegion, setRegion] = useState("");
  const [modalInfo, setModalInfo] = useState([]);
  const [comparing, setComparing] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const mapRef = useRef(null);

  useEffect(() => {
    if (currCode !== "") {
      setRegion(getRegionName(currCode));
    }
  }, [currCode]);

  const getRegionName = (code) => {
    if (mapRef.current) {
      return mapRef.current.getMapObject().getRegionName(code);
    }
  }

  // Function to add a region
  const addRegion = (region) => {
    setSelectedRegions(prevRegions => [...prevRegions, getRegionName(region)]);
  }

  // Function to remove a region
  // const removeRegion = (region) => {
  //   setSelectedRegions(prevRegions => prevRegions.filter(r => r !== region));
  // }

// <<<<<<< Joseph
  //filter
  const [prevStateList, setPrevStateList] = useState([]);
  const mapRef = useRef(null);
  useEffect(() => {
    const stateList = stateMap[filterOption];
    if (stateList && mapRef.current) {
      const stateToggles = {};
      prevStateList.forEach((state) => {
        stateToggles[state] = false;
      });
      stateList.forEach((state) => {
        stateToggles[state] = true;
      });
      mapRef.current.setSelectedRegions(stateToggles);
      setPrevStateList(stateList);
    }
  }, [filterOption]);
  //end filter
  
//   const handlCloseModal = () => {
// =======
  const handleCloseModal = () => {
    setCode("")
// >>>>>>> snapshot3-11
    setShowModal(false);
    setModalInfo([]);
    if (comparing) {
      setComparing(false);
      setSelectedRegions([])
    }
  };

  const regionStyles = {
    initial: {
      fill: "#4D2DB7", // Initial color of the regions
    },
    hover: {
      fill: "#0E21A0", // Color when hovered
    },
    selected: {
      fill: "#9D44C0", // Color when selected
    },
    selectedHover: {
      fill: "#EC53B0", // Color when hovered and selected
    },
  };

  const handleRegionSelected = (event, newCode) => {
    setCode(newCode);
    if (comparing) {
      addRegion(currCode)
      addRegion(newCode)
      handleCompareCall(getRegionName(currCode), getRegionName(newCode), setModalInfo)
    } else {
      handleSingleStateRetrieval(getRegionName(newCode), setModalInfo)
    }
    setShowModal(true);
  };

  const handleCompareClicked = () => {
    setShowModal(false);
    setComparing(true);
    console.log("compare clicked")
  };

  return (
    <React.Fragment>
      <Modal
        show={showModal}
        handleCloseModal={handleCloseModal}
        name={currRegion}
        modalInfo={modalInfo}
        handleCompareClicked={handleCompareClicked}
        comparing={comparing}
        selectedRegions={selectedRegions}
      />
      <div className="map-container">
        <VectorMap
          mapRef={mapRef}
          key={isUS ? "usLcc" + comparing : "worldMill" + comparing}
          map={isUS ? usLcc : worldMill}
          style={{
            height: window.innerHeight * 0.8,
          }}
          regionsSelectable={true} // Enable region selection
// <<<<<<< Joseph
          regionsSelectableOne={true}
          // onRegionSelected={handleRegionSelected}
          // new allows modal to only pop up when a region is selected
          onRegionClick={handleRegionSelected}
          regionStyle={regionStyles}
          backgroundColor="transparent"
          //filter
          mapRef={mapRef}
// =======
//           regionsSelectableOne={!comparing}
//           onRegionClick={handleRegionSelected}
//           regionStyle={regionStyles}
//           backgroundColor="transparent"
//           selectedRegions={currCode}
// >>>>>>> snapshot3-11
        />
      </div>
    </React.Fragment>
  );
};

export default Map;
