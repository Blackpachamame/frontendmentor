import axios from "axios";
import { GeoLocationResponse } from "../types/geoTypes";

const API_KEY = import.meta.env.VITE_GEO_API_KEY;
const BASE_URL = "https://api.ipgeolocation.io/ipgeo";

/**
 * Obtiene la información de geolocalización de una IP mediante la API de IPGeolocation.
 *
 * @param ipAddress - Dirección IP opcional para la consulta. Si no se proporciona, se usa la IP pública del cliente.
 * @returns Un objeto con `ip`, `location` y `isp` o lanza un error si la solicitud falla.
 */
export const getGeoLocation = async (
  ipAddress?: string
): Promise<GeoLocationResponse | null> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        ip: ipAddress,
      },
    });

    const data = response.data;

    return {
      ip: data.ip,
      location: {
        country: data.country_name,
        city: data.city,
        lat: data.latitude,
        lng: data.longitude,
        timezone: data.time_zone.offset,
      },
      isp: data.isp,
    };
  } catch (error) {
    console.error("Error al obtener la información de geolocalización", error);
    throw error;
  }
};
