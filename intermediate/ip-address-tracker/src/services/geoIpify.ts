import axios from "axios";

interface Location {
  region: string;
  city: string;
  lat: number;
  lng: number;
  timezone: string;
}

interface GeoLocationResponse {
  ip: string;
  location: Location;
  isp: string;
}

const API_KEY = import.meta.env.VITE_GEO_API_KEY;
const BASE_URL = "https://geo.ipify.org/api/v2/country,city";

/**
 * Obtiene la información de geolocalización de una IP mediante la API de GeoIPify.
 *
 * @param ipAddress - Dirección IP opcional para la consulta. Si no se proporciona, se usa la IP pública del cliente.
 * @returns Un objeto con `ip`, `location` y `isp` o lanza un error si la solicitud falla.
 */
export const getGeoLocation = async (
  ipAddress?: string
): Promise<GeoLocationResponse | null> => {
  try {
    const response = await axios.get<GeoLocationResponse>(BASE_URL, {
      params: {
        apiKey: API_KEY,
        ipAddress, // Si ipAddress es proporcionada, será usada. Si no, la API usa la IP pública del cliente
      },
    });
    return response.data || null;
  } catch (error) {
    console.error("Error al obtener la información de geolocalización", error);
    throw error;
  }
};
