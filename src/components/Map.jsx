import React, { useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const ZoomControls = () => {
  const mapRef = useRef(null);
  mapRef.current = useMap();

  const zoomIn = () => {
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom();
      mapRef.current.flyTo(mapRef.current.getCenter(), currentZoom + 3);
    }
  };

  const zoomOut = () => {
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom();
      mapRef.current.flyTo(mapRef.current.getCenter(), currentZoom - 3);
    }
  };

  return (
    <div className="absolute flex bottom-0 px-2 h-12 w-full justify-between">
      <button onClick={zoomOut} className="map-button">
        -
      </button>
      <button onClick={zoomIn} className="map-button">
        +
      </button>
    </div>
  );
};

const Map = ({ position }) => {
  return (
    <div className="w-full h-full z-10">
      <MapContainer
        className="w-full h-full rounded-3xl transition-all duration-1000"
        center={position}
        zoom={10}
        zoomDelta={1}
        maxZoom={13}
        minZoom={4}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
        attributionControl={false}
      >
        <ZoomControls />
        <TileLayer
          className="w-full h-full"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
