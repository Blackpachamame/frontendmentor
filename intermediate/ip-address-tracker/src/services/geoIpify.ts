/**
 * Obtiene la información de geolocalización de una IP mediante la API de GeoIPify.
 *
 * @param ipAddress - Dirección IP opcional para la consulta. Si no se proporciona, se usa la IP pública del cliente.
 * @returns Información de geolocalización o null si no se encuentra.
 * @throws Error si la solicitud falla.
 */

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

const API_KEY = import.meta.env.VITE_GEO_API_KEY;
const BASE_URL = "https://geo.ipify.org/api/v2/country,city";
// Modificar la función para aceptar una IP opcional
export const getGeoLocation = async (
  ipAddress?: string
): Promise<Location | null> => {
  try {
    const response = await axios.get<{ location: Location }>(BASE_URL, {
      params: {
        apiKey: API_KEY,
        ipAddress, // Si ipAddress es proporcionada, será usada. Si no, la API usa la IP pública del cliente
      },
    });
    return response.data.location || null;
  } catch (error) {
    console.error("Error al obtener la información de geolocalización", error);
    throw error;
  }
};
