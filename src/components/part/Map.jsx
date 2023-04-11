import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const position = [-12.0939582, -77.0043005]

const Map = () => {
  return (
    <MapContainer className='w-full h-full absolute' center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} draggable={true}>
          <Popup minWidth={90}>
              Veterinaria Central Pets <br /> Abierto a partir de las 8:00 am
          </Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map