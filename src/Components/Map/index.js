import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { mapStyle } from "./mapStyle";
import "./style.css";
const containerStyle = {
  width: "100vw",
  height: "50vh",
};

const center = {
  lat: 51.5144,
  lng: -0.1225,
};

const options = {
  styles: mapStyle,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";
  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={options}
      ></GoogleMap>
    </div>
  );
};

export default Map;
