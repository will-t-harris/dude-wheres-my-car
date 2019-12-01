import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.scss";

const options = [
  {
    name: "Population",
    description: "Estimated total population",
    property: "pop_est",
    stops: [
      [0, "#f8d5cc"],
      [1000000, "#f4bfb6"],
      [5000000, "#f1a8a5"],
      [10000000, "#ee8f9a"],
      [50000000, "#ec739b"],
      [100000000, "#dd5ca8"],
      [250000000, "#c44cc0"],
      [500000000, "#9f43d7"],
      [1000000000, "#6e40e6"]
    ]
  },
  {
    name: "GDP",
    description: "Estimate total GDP in millions of dollars",
    property: "gdp_md_est",
    stops: [
      [0, "#f8d5cc"],
      [1000, "#f4bfb6"],
      [5000, "#f1a8a5"],
      [10000, "#ee8f9a"],
      [50000, "#ec739b"],
      [100000, "#dd5ca8"],
      [250000, "#c44cc0"],
      [5000000, "#9f43d7"],
      [10000000, "#6e40e6"]
    ]
  }
];

const App: React.FC = () => {
  const [mapState, setMapState] = useState<any>({
    lng: 5,
    lat: 34,
    zoom: 2
  });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapState.lng, mapState.lat],
      zoom: mapState.zoom
    });
    map.on("move", () => {
      setMapState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }, []);
  return (
    <div className="App">
      <div className="sidebarStyle">
        Longitude: {mapState.lng} | Latitude: {mapState.lat} | Zoom:{" "}
        {mapState.zoom}
      </div>
      <div className="mapContainer" id="map" />
    </div>
  );
};

export default App;
