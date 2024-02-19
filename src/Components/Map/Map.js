import React, { useState, useEffect } from "react";
import "./Map.css";
import { VectorMap } from "@react-jvectormap/core";
import { usLcc } from "@react-jvectormap/unitedstates";
import { worldMill } from "@react-jvectormap/world";
import RegionNames from '../../Data/RegionNames';

import Modal from "../Modal/Modal";

var initialArray = [];

const Map = ({isUS, jursComparing, compareActive, addJurToCompare, removeJurFromCompare}) => {
  const [currCode, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const addJurToSelected = (jurName) => {
    if (!selectedRegions.includes(jurName)) {
      setSelectedRegions(prevJurs => [...prevJurs, jurName]);
    }
  };

  const removeJurFromSelected = (jurName) => {
    setSelectedRegions(prevJurs => prevJurs.filter(jur => jur !== jurName));
  };

  const handleCloseModal = () => {
    setShowModal(false);
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

  const handleRegionSelected = (event, code, isSelected, label, name) => {
    // console.log("Region selected:", code, isSelected, label, RegionNames[code]);
    // console.log(compareActive);
    // if (compareActive) {
    //   if (isSelected) {
    //     addJurToCompare(RegionNames[code]);
    //   } else {
    //     removeJurFromCompare(RegionNames[code]);
    //   }
    // }

    // label contains list of codes of selected regions
    // name is undefined, idk what that is

    addJurToSelected(code);

    // console.log("mapjs: " + mapRef.current.getRegionName(code));

    let inArr = initialArray.includes(code);
    if (inArr) {
      initialArray.splice(initialArray.indexOf(code), 1);
      setCode("");
    } else {
      initialArray.push(code);
      setShowModal(true);
      setCode(RegionNames[code]);
    }

    // mapRef.current.clearSlectedRegions();

  };

  return (
    <React.Fragment>
      <Modal
        show={showModal}
        handleCloseModal={handleCloseModal}
        name={currCode}
        comparing={jursComparing}
      />
      {/* <div className={`MapToggle ${showModal ? "fade-out" : ""}`}>
        <MapToggle isUSToggle={us} onToggleChange={handleToggle} />
      </div>
      <Filter /> */}
      <div className="map-container">
        <VectorMap
          key={isUS ? 'usLcc' : 'worldMill'} map={isUS ? usLcc : worldMill}
          style={{
            height: window.innerHeight * .8,
          }}
          regionsSelectable={true} // Enable region selection
          onRegionSelected={handleRegionSelected}
          regionStyle={regionStyles}
          backgroundColor="transparent"
          selectedRegions={selectedRegions}
          
        />
      </div>
    </React.Fragment>
  );
}

export default Map;
