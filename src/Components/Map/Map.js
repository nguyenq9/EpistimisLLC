import React, { useState } from "react";
import { VectorMap } from "@react-jvectormap/core";
import "./Map.css";
import { usLcc } from "@react-jvectormap/unitedstates";

const regionNames = {
  "US-AL": "Alabama",
  "US-AK": "Alaska",
  "US-AZ": "Arizona",
  "US-AR": "Arkansas",
  "US-CA": "California",
  "US-CO": "Colorado",
  "US-CT": "Connecticut",
  "US-DE": "Delaware",
  "US-FL": "Florida",
  "US-GA": "Georgia",
  "US-HI": "Hawaii",
  "US-ID": "Idaho",
  "US-IL": "Illinois",
  "US-IN": "Indiana",
  "US-IA": "Iowa",
  "US-KS": "Kansas",
  "US-KY": "Kentucky",
  "US-LA": "Louisiana",
  "US-ME": "Maine",
  "US-MD": "Maryland",
  "US-MA": "Massachusetts",
  "US-MI": "Michigan",
  "US-MN": "Minnesota",
  "US-MS": "Mississippi",
  "US-MO": "Missouri",
  "US-MT": "Montana",
  "US-NE": "Nebraska",
  "US-NV": "Nevada",
  "US-NH": "New Hampshire",
  "US-NJ": "New Jersey",
  "US-NM": "New Mexico",
  "US-NY": "New York",
  "US-NC": "North Carolina",
  "US-ND": "North Dakota",
  "US-OH": "Ohio",
  "US-OK": "Oklahoma",
  "US-OR": "Oregon",
  "US-PA": "Pennsylvania",
  "US-RI": "Rhode Island",
  "US-SC": "South Carolina",
  "US-SD": "South Dakota",
  "US-TN": "Tennessee",
  "US-TX": "Texas",
  "US-UT": "Utah",
  "US-VT": "Vermont",
  "US-VA": "Virginia",
  "US-WA": "Washington",
  "US-WV": "West Virginia",
  "US-WI": "Wisconsin",
  "US-WY": "Wyoming",
};

function Map() {
  const [selectedRegions, setSelectedRegions] = useState([]); // State to store selected regions
  const [selectedRegionName, setSelectedRegionName] = useState("");

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
  };

  return (
    <VectorMap
      map={usLcc}
      style={{
        height: window.innerHeight-16,
      }}
      regionsSelectable={true} // Enable region selection
      //   regionsSelectableOne={true} // Optional: Allow only one region to be selected at a time
      onRegionSelected={handleRegionSelected}
      regionStyle={regionStyles}
      backgroundColor="#E6E6E6"
    />
  );
}

export default Map;
