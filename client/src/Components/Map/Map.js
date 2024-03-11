import React, { useState, useEffect, useRef } from "react";
import "./Map.css";
import { VectorMap } from "@react-jvectormap/core";
import { usLcc } from "@react-jvectormap/unitedstates";
import { worldMill } from "@react-jvectormap/world";
import { handleSingleStateRetrieval, handleCompareCall } from "../../js/API";
import Modal from "../Modal/Modal";

const Map = ({ isUS, showModal, setShowModal }) => {
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

  const handleCloseModal = () => {
    setCode("")
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
          regionsSelectableOne={!comparing}
          onRegionClick={handleRegionSelected}
          regionStyle={regionStyles}
          backgroundColor="transparent"
          selectedRegions={currCode}
        />
      </div>
    </React.Fragment>
  );
};

export default Map;
