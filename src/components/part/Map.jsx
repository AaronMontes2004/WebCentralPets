import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import aea from "../../assets/icons/networks/mail.png"

const position = [-12.0939582, -77.0043005]

const Map = () => {

  useEffect(() => {
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: "iconLocation.png",
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    })
  },[])

  return (
    <MapContainer className='w-full h-full absolute' center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup  minWidth={90}>
              Veterinaria Central Pets <br /> Abierto a partir de las 8:00 am
          </Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map