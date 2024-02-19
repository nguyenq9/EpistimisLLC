import React, { useEffect, useState } from "react";
import "./Map.css";
import { VectorMap } from "@react-jvectormap/core";
import { usLcc } from "@react-jvectormap/unitedstates";
import { worldMill } from "@react-jvectormap/world";
import regionNames from "./regionNames.json";

import Modal from "../Modal/Modal";

var initialArray = [];
// maybbe something here??
const Map = ({isUS, filterOption}) => {
  const [currCode, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  

  const handlCloseModal = () => {
    setShowModal(false);
  };


  // Checks it it is being passed down.
  useEffect(() => {
    console.log("filter option in map: ", filterOption);
  }, [filterOption]);


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


  const handleRegionSelected = (event, code, isSelected, label, name) => {
    console.log("Region selected:", code, isSelected, label, regionNames[code]);
    let inArr = initialArray.includes(code);
    if (inArr) {
      initialArray.splice(initialArray.indexOf(code), 1);
      setCode("");
    } else {
      initialArray.push(code);
      setShowModal(true);
      setCode(regionNames[code]);
    }
  };

  return (
    <React.Fragment>
      <Modal
        show={showModal}
        handlCloseModal={handlCloseModal}
        name={currCode}
      />
      {/* <div className={`MapToggle ${showModal ? "fade-out" : ""}`}>
        <MapToggle isUSToggle={us} onToggleChange={handleToggle} />
      </div>
      <Filter /> */}
      <div className="map-container">
        <VectorMap
          map={isUS ? usLcc : worldMill}
          style={{
            height: window.innerHeight * .8,
          }}
          regionsSelectable={true} // Enable region selection
          onRegionSelected={handleRegionSelected}
          regionStyle={regionStyles}
          backgroundColor="transparent"
          selectedRegions={["US-CA", "US-TX", "US-NY"]}
          // regionsSelectableOne={true}
        />
      </div>
    </React.Fragment>
  );
}

export default Map;






