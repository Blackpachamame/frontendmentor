import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";

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
  return (
    <MapContainer
      center={[lat, lng]} // Coordenadas iniciales del mapa
      zoom={13} // Nivel de zoom inicial
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>
          Ubicación del usuario: <br /> Latitud: {lat} <br /> Longitud: {lng}
        </Popup>
      </Marker>
      <RecenterMap lat={lat} lng={lng} /> {/* Componente que mueve el mapa */}
    </MapContainer>
  );
}
