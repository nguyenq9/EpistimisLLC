import React, { useEffect, useRef, useState } from "react";
import "./Map.css";
import { VectorMap } from "@react-jvectormap/core";
import { usLcc } from "@react-jvectormap/unitedstates";
import { worldMill } from "@react-jvectormap/world";
import regionNames from "./regionNames.json";
import stateMap from "./stateMap.json";

import Modal from "../Modal/Modal";

var initialArray = [];

const Map = ({ isUS, compareActive, setCompareActive, filterOption }) => {
  const [currCode, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

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
  
  const handlCloseModal = () => {
    setShowModal(false);
    setModalInfo({});
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
        console.log("FUCCK: ", err);
      });
  };

  const handleRegionSelected = (event, code, isSelected, label) => {
    console.log("Region selected:", code, isSelected, label, regionNames[code]);
    let inArr = initialArray.includes(code);

    if (inArr) {
      initialArray.splice(initialArray.indexOf(code), 1);
      setCode("");
    } else {
      handleAPIcall(code);
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
        modalInfo={modalInfo}
        setCompareActive={setCompareActive}
      />
      {/* <div className={`MapToggle ${showModal ? "fade-out" : ""}`}>
        <MapToggle isUSToggle={us} onToggleChange={handleToggle} />
      </div>
      <Filter /> */}
      <div className="map-container">
        <VectorMap
          key={isUS ? "usLcc" : "worldMill"}
          map={isUS ? usLcc : worldMill}
          style={{
            height: window.innerHeight * 0.8,
          }}
          regionsSelectable={true} // Enable region selection
          regionsSelectableOne={true}
          // onRegionSelected={handleRegionSelected}
          // new allows modal to only pop up when a region is selected
          onRegionClick={handleRegionSelected}
          regionStyle={regionStyles}
          backgroundColor="transparent"
          //filter
          mapRef={mapRef}
        />
      </div>
    </React.Fragment>
  );
};

export default Map;
