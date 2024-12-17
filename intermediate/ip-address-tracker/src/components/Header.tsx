import Info from "./Info";
import Input from "./Input";
import { GeoLocationResponse } from "../types/geoTypes";

interface HeaderProps {
  info: GeoLocationResponse | null;
  onIpSubmit: (ip: string) => void;
}

export default function Header({ info, onIpSubmit }: HeaderProps) {
  return (
    <header className="relative flex flex-col items-center py-6 px-5 bg-pattern-mobile xs:bg-pattern-desktop bg-cover bg-center h-[300px] xs:h-[280px]">
      <h1 className="text-white text-[26px] lg:text-3xl font-medium">
        IP Address Tracker
      </h1>
      <Input onIpSubmit={onIpSubmit} />
      <Info info={info} />
    </header>
  );
}
