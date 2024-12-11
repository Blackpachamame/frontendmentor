import { useState, useEffect } from "react";
import { getGeoLocation } from "../services/geoIpify";

interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
}

export default function Info() {
  const [geoData, setGeoData] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const ipAddress = "";

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const data = await getGeoLocation(ipAddress);
        setGeoData(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo obtener la información de geolocalización");
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, [ipAddress]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Información de Geolocalización</h1>
      {geoData ? (
        <div>
          <p>
            <strong>País:</strong> {geoData.country}
          </p>
          <p>
            <strong>Región:</strong> {geoData.region}
          </p>
          <p>
            <strong>Ciudad:</strong> {geoData.city}
          </p>
          <p>
            <strong>Latitud:</strong> {geoData.lat}
          </p>
          <p>
            <strong>Longitud:</strong> {geoData.lng}
          </p>
          <p>
            <strong>Código Postal:</strong> {geoData.postalCode}
          </p>
          <p>
            <strong>Zona horaria:</strong> {geoData.timezone}
          </p>
        </div>
      ) : (
        <p>No se encontró información de geolocalización.</p>
      )}
    </div>
  );
}
