import Info from "./Info";
import Input from "./Input";
import { GeoLocationResponse } from "../types/geoTypes";

interface HeaderProps {
  info: GeoLocationResponse | null;
  onIpSubmit: (ip: string) => void;
}

export default function Header({ info, onIpSubmit }: HeaderProps) {
  return (
    <header className="relative flex flex-col items-center px-6 pt-[22px] lg:pt-[30px] bg-pattern-mobile w-full xs:bg-pattern-desktop bg-cover bg-center h-[300px] lg:h-[280px]">
      <h1 className="text-white text-[26px] lg:text-3xl font-medium mb-6 lg:mb-7">
        IP Address Tracker
      </h1>
      <Input onIpSubmit={onIpSubmit} />
      <Info info={info} />
    </header>
  );
}
