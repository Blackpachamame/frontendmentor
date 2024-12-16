import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import markerIcon from "../assets/images/icon-location.svg";

interface MapProps {
  lat: number;
  lng: number;
}

// Componente para mover el centro del mapa
function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], map.getZoom()); // Cambia la vista del mapa
  }, [lat, lng, map]);

  return null; // Este componente no renderiza nada
}

export default function Map({ lat, lng }: MapProps) {
  const customIcon = L.divIcon({
    className: "custom-marker",
    html: `<div class="flex items-center justify-center">
             <img src="${markerIcon}" alt="markerIcon" />
           </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={18}
      className="z-0 w-full h-[528px] lg:h-[520px]"
      zoomControl={false} // Desactiva los botones de zoom
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]} icon={customIcon}></Marker>
      <RecenterMap lat={lat} lng={lng} />
    </MapContainer>
  );
}
