import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import L from "leaflet";
import "./index.css";
import "leaflet/dist/leaflet.css";
import markerIcon from "./assets/images/icon-location.svg";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import App from "./App.tsx";

// Configuración de íconos de Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
