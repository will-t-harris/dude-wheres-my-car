import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.scss";

const App: React.FC = () => {
  const [mapState, setMapState] = useState({
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
  }, []);
  return (
    <div className="App">
      <div className="mapContainer" id="map" />
    </div>
  );
};

export default App;
