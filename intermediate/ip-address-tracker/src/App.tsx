import { useState, useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import { getGeoLocation } from "./services/geoIpify";
import { GeoLocationResponse } from "./types/geoTypes";

function App() {
  const [ip, setIp] = useState<string>("");
  const [info, setInfo] = useState<GeoLocationResponse | null>(null);
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const fetchGeoLocation = async (ipAddress: string) => {
    try {
      const data = await getGeoLocation(ipAddress);

      if (data) {
        setInfo(data);
        setLat(data.location.lat);
        setLng(data.location.lng);
        setError(null);
      } else {
        setError("No se encontraron datos de geolocalización");
      }
    } catch (error) {
      console.error(error);
      setError("Error al obtener la información de geolocalización");
    }
  };

  useEffect(() => {
    fetchGeoLocation(ip); // Si `ip` está vacío, la API usará la IP pública del usuario
  }, [ip]);

  return (
    <main className="text-very-Dark-Gray grid grid-rows-[300px_1fr] xs:grid-rows-[280px_1fr] min-h-svh">
      <Header info={info} onIpSubmit={setIp} />
      <Map lat={lat} lng={lng} />
      {error && <div className="error">{error}</div>}
    </main>
  );
}

export default App;
