import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

function MapData({data}) {
    console.log("fv", data);
    
    const [map, setMap] = useState(null);
    const [states, setStates] = useState(data?.states);
  return (
    <>
    <Map center={[20.5937, 78.9629]} zoom={4} ref={setMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
        />
        {states.map(state => (
          <Marker key={state.state} position={[state.latitude, state.longitude]}>
            <Popup>
              {state.state}: {state.active} active cases
            </Popup>
          </Marker>
        ))}
      </Map>
    </>
  )
}

export default MapData