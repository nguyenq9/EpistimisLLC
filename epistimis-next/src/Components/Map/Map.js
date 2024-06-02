import { useEffect, useRef, useState } from "react";
import "./Map.css";
import dynamic from "next/dynamic";
import stateMap from "./stateMap.json";
import { handleSingleStateRetrieval, handleCompareCall } from "../../js/API";
import Modal from "../Modal/Modal";
import regionNames from "./regionNames.json"
import worldMill from '@react-jvectormap/world/worldMill.json';
import usLcc from '@react-jvectormap/unitedstates/usLcc.json';
import useWindowDimensions from "../../hooks/useWindowDimensions"; // Import the hook

const VectorMap = dynamic(
  // @ts-ignore
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false, }
);

const Map = ({ isUS, filterOption, comparing, setComparing, admin, setAdmin, setFilterOpen }) => {
  const [currCode, setCode] = useState("");
  const [modal, setModal] = useState(false);
  const [currRegion, setRegion] = useState("");
  const [modalInfo, setModalInfo] = useState([]);
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
  const { height: windowHeight } = useWindowDimensions(); // Get window height using the hook

  useEffect(() => {
    if (currCode !== "") {
      setRegion(getRegionName(currCode));
    }
  }, [currCode]);

  const getRegionName = (code) => {
    return regionNames[code]
  }

  const addRegion = (region) => {
    setSelectedRegions(prevRegions => [...prevRegions, getRegionName(region)]);
  }

  useEffect(() => {
    const stateList = stateMap[filterOption];
    clearRegionsConfig();
    setSelectedRegions([]);
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

  const getCSSVariableValue = (variable) => {
    if (typeof window !== "undefined") {
      return getComputedStyle(document.documentElement).getPropertyValue(variable);
    } 
    return '';
  };

  const addRegionToConfig = (code) => {
    const color = getCSSVariableValue("--region-selected");
    setRegionsConfig((prevConfig) => {
      const newValues = { ...prevConfig.regions[0].values, [code]: color };
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
    setCode("");
    setModal(false);
    setModalInfo([]);
    if (comparing) {
      setComparing(false);
      setSelectedRegions([])
    }
  };

  const regionStyles = {
    initial: {
      fill: getCSSVariableValue("--region-initial"), // Initial color of the regions
    },
    hover: {
      fill: getCSSVariableValue("--region-hover"), // Color when hovered
    },
    selected: {
      fill: getCSSVariableValue("--region-selected"), // Color when selected
    },
    selectedHover: {
      fill: getCSSVariableValue("--region-selected-hover"), // Color when hovered and selected
    },
  };

  const handleRegionSelected = (event, newCode) => {
    setCode(newCode);
    if (comparing) {
      addRegion(currCode);
      addRegion(newCode);
      handleCompareCall(getRegionName(currCode), getRegionName(newCode), setModalInfo)
    } else {
      handleSingleStateRetrieval(getRegionName(newCode), setModalInfo);
    }
    setModal(true);
    setFilterOpen(false);
  };

  const handleCompareClicked = () => {
    setModal(false);
    setComparing(true);
  };

  return (
    <div>
      <Modal
        openModal={modal}
        closeModal={handleCloseModal}
        handleCompareClicked={handleCompareClicked}
        comparing={comparing}
        modalInfo={modalInfo}
        admin={admin}
        setAdmin={setAdmin}
      />
      <div id="map">
        <VectorMap
          mapRef={mapRef}
          key={isUS ? "usLcc" + comparing + filterOption : "worldMill" + comparing + filterOption}
          map={isUS ? usLcc : worldMill}
          style={{
            height: windowHeight * .85,
            filter: "drop-shadow(0 0 50px rgba(56, 168, 163, 0.7))",
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
    </div>
  );
};

export default Map;