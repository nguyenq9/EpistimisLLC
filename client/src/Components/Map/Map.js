import React, { useEffect, useRef, useState } from "react";
import "./Map.css";
import { VectorMap } from "@react-jvectormap/core";
import { usLcc } from "@react-jvectormap/unitedstates";
import { worldMill } from "@react-jvectormap/world";
import stateMap from "./stateMap.json";
import { handleSingleStateRetrieval, handleCompareCall } from "../../js/API";
import Modal from "../Modal/Modal";

const Map = ({ isUS, compareActive, setCompareActive, filterOption, showModal, setShowModal }) => {
  const [currCode, setCode] = useState("");
  const [currRegion, setRegion] = useState("");
  const [modalInfo, setModalInfo] = useState([]);
  const [comparing, setComparing] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [prevStateList, setPrevStateList] = useState([]);
  const [regionsConfig, setRegionsConfig] = useState({
    regions: [
      {
        attribute: 'fill',
        values: {},
      },
    ],
  });


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

  const addRegion = (region) => {
    setSelectedRegions(prevRegions => [...prevRegions, getRegionName(region)]);
  }

  useEffect(() => {
    const stateList = stateMap[filterOption];
    clearRegionsConfig()
    if (stateList && mapRef.current) {
      const stateToggles = {};
      prevStateList.forEach((state) => {
        stateToggles[state] = false;
      });
      stateList.forEach((state) => {
        stateToggles[state] = true;
        addRegionToConfig(state)
      });
      // console.log(regionsConfig)
      setPrevStateList(stateList);
    }
  }, [filterOption]);


  const addRegionToConfig = (code) => {
    setRegionsConfig((prevConfig) => {
      const newValues = { ...prevConfig.regions[0].values, [code]: '#00ff0d' };
      const newConfig = { ...prevConfig, regions: [{ ...prevConfig.regions[0], values: newValues }] };
      return newConfig;
    });
  };

  const clearRegionsConfig = () => {
    setRegionsConfig((prevConfig) => {
      const newConfig = { ...prevConfig, regions: [{ ...prevConfig.regions[0], values: {} }] };
      return newConfig;
    });
  };
  

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
    setShowModal(true)
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
          regionsSelectable={true}
          regionsSelectableOne={true}
          onRegionClick={handleRegionSelected}
          regionStyle={regionStyles}
          backgroundColor="transparent"
          series={regionsConfig}
          selectedRegions={currCode}
        />
      </div>
    </React.Fragment>
  );
};

export default Map;
