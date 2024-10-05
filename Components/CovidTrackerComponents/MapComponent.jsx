import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapComponent({ data }) {
  const center = [20.5937, 78.9629];
  const zoom = 5;
 
  const [map, setMap] = useState(null);
  const [states, setStates] = useState(data?.states || []);

  return (
    <div>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        whenCreated={setMap}
        style={{ width: "500px", height: "400px", overflow: "scroll", marginLeft: "48px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
        />
        {states.map((state) => (
          <Marker
            key={state.state}
            position={[state?.latitude, state?.longitude]}
          >
            <Popup>
              {state.state}: {state.active} active cases
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
