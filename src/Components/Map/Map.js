import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import "./Map.css";
import { esMill } from "@react-jvectormap/spain";

function Map() {
  return (
    <VectorMap
      map={esMill}
      style={{
        height: window.innerHeight - 80,
        backgroundColor: "#ffffff",
      }}
      onRegionTipShow={(e, c) => {
        e.preventDefault();
      }}
    />
  );
}

export default Map;
