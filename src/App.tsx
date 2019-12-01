import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.scss";

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
