import { useState, useEffect } from "react";
import { getGeoLocation } from "../services/geoIpify";

interface GeoLocationResponse {
  ip: string;
  location: {
    region: string;
    city: string;
    // lat: number;
    // lng: number;
    timezone: string;
  };
  isp: string;
}

export default function Info() {
  const [geoData, setGeoData] = useState<GeoLocationResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const ipAddress = ""; // Esto vendra como props desde el padre

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        setLoading(true);
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

  if (!geoData) {
    return <div>No se encontró información de geolocalización</div>;
  }

  const { ip, location, isp } = geoData;
  const { region, city, timezone } = location;

  return (
    <div className=" gap-5 p-5 text-center w-full h-full flex flex-col md:flex-row justify-between items-center bg-white rounded-xl">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] tracking-[.2em]">
          IP Address
        </h2>
        <p className="font-medium">{ip}</p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] tracking-[.2em]">
          Location
        </h2>
        <p className="font-medium">
          {city}, {region}
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] tracking-[.2em]">
          Timezone
        </h2>
        <p className="font-medium">UTC {timezone}</p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] tracking-[.2em]">
          ISP
        </h2>
        <p className="font-medium">{isp}</p>
      </div>
    </div>
  );
}
