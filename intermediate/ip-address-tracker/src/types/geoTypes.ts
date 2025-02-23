export interface Location {
  lat: number;
  lng: number;
  city: string;
  country: string;
  timezone: number;
}

export interface GeoLocationResponse {
  ip: string;
  location: Location;
  isp: string;
}
