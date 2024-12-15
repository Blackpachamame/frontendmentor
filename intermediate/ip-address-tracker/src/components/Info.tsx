import { useState, useEffect } from "react";
import { getGeoLocation } from "../services/geoIpify";

interface GeoLocationResponse {
  ip: string;
  location: {
    region: string;
    city: string;
    lat: number;
    lng: number;
    timezone: string;
  };
  isp: string;
}

interface InfoProps {
  setLat: (lat: number) => void;
  setLng: (lng: number) => void;
}

export default function Info({ setLat, setLng }: InfoProps) {
  const [geoData, setGeoData] = useState<GeoLocationResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const ipAddress = ""; // Esto podría venir como prop o manejarse de otra forma.

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        setLoading(true);
        const data = await getGeoLocation(ipAddress);
        setGeoData(data);

        // Actualizar los estados de lat y lng en el componente padre
        if (data) {
          setLat(data.location.lat);
          setLng(data.location.lng);
        }
      } catch (err) {
        console.error(err);
        setError("No se pudo obtener la información de geolocalización");
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, [ipAddress, setLat, setLng]);

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
    <div className="z-10 absolute transform translate-y-1/2 bottom-0 gap-5 lg:gap-0 p-6 lg:px-5 lg:py-8 lg:divide-x text-center lg:text-start w-full max-w-[327px] lg:max-w-[1000px] min-[1112px]:max-w-[1110px] lg:min-h-[160px] grid grid-cols-1 lg:grid-cols-[repeat(4,minmax(237px,1fr))] justify-between items-center lg:items-start bg-white rounded-xl">
      <div className="flex flex-col gap-1 lg:gap-2 px-5 lg:h-24">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] lg:text-xs tracking-[.2em]">
          IP Address
        </h2>
        <p className="font-medium lg:text-2xl">{ip}</p>
      </div>

      <div className="flex flex-col gap-1 lg:gap-2 px-5 lg:h-24">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] lg:text-xs tracking-[.2em]">
          Location
        </h2>
        <p className="font-medium lg:text-2xl">
          {city}, {region}
        </p>
      </div>

      <div className="flex flex-col gap-1 lg:gap-2 px-5 lg:h-24">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] lg:text-xs tracking-[.2em]">
          Timezone
        </h2>
        <p className="font-medium lg:text-2xl">UTC {timezone}</p>
      </div>

      <div className="flex flex-col gap-1 lg:gap-2 px-5 lg:h-24">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] lg:text-xs tracking-[.2em]">
          ISP
        </h2>
        <p className="font-medium lg:text-2xl">{isp}</p>
      </div>
    </div>
  );
}
