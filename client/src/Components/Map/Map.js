import React, { useState, useEffect } from "react";
import "./Map.css";
import { VectorMap } from "@react-jvectormap/core";
import { usLcc } from "@react-jvectormap/unitedstates";
import { worldMill } from "@react-jvectormap/world";
import regionNames from "./regionNames.json";

import Modal from "../Modal/Modal";

const Map = ({ isUS, showModal, setShowModal }) => {
  const [currCode, setCode] = useState("");
  const [modalInfo, setModalInfo] = useState({});
  const [comparing, setComparing] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);

  useEffect(() => {
    setCode("")
    setSelectedRegions([])
  }, [modalInfo])

  // Function to add a region
  const addRegion = (region) => {
    setSelectedRegions(prevRegions => [...prevRegions, region]);
  }

  // Function to remove a region
  const removeRegion = (region) => {
    setSelectedRegions(prevRegions => prevRegions.filter(r => r !== region));
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setModalInfo({});
    if (comparing) {
      setComparing(false);
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

  const handleAPIcall = (code) => {
    // Make a call to the server API
    const name = regionNames[code];
    fetch(`/api/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          console.log("success: ", res.message);
          setModalInfo(res.data.law)
        } else {
          console.error("ERROR", res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegionSelected = (event, code) => {
    let inArr = selectedRegions.includes(code);

    console.log("code: " + code);
    
    if (inArr) {
      removeRegion(code);
      setComparing(false);
      setCode("");
    } else {
      handleAPIcall(code);
      addRegion(code);
      setShowModal(true);
      setCode(code);
    }
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
        name={regionNames[currCode]}
        modalInfo={modalInfo}
        handleCompareClicked={handleCompareClicked}
        comparing={comparing}
        selectedRegions={selectedRegions}
      />
      <div className="map-container">
        <VectorMap
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
