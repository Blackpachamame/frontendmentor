import axios from "axios";

interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

interface GeoLocationResponse {
  ip: string;
  location: Location;
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}

const API_KEY = "at_xiZLNM17i2EbQIlupbJ9PksCprFtY";
const BASE_URL = "https://geo.ipify.org/api/v2/country,city";

// Modificar la función para aceptar una IP opcional
export const getGeoLocation = async (
  ipAddress?: string
): Promise<Location | null> => {
  try {
    const response = await axios.get<GeoLocationResponse>(BASE_URL, {
      params: {
        apiKey: API_KEY,
        ipAddress, // Si ipAddress es proporcionada, será usada. Si no, la API usa la IP pública del cliente
      },
    });

    // Devuelve solo la parte del location
    return response.data.location || null;
  } catch (error) {
    console.error("Error al obtener la información de geolocalización", error);
    throw error;
  }
};
