export interface Location {
  lat: number;
  lng: number;
  city: string;
  region: string;
  timezone: string;
}

export interface GeoLocationResponse {
  ip: string;
  location: Location;
  isp: string;
}
