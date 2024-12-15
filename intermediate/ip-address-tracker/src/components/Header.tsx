import Info from "./Info";

interface InfoProps {
  setLat: (lat: number) => void;
  setLng: (lng: number) => void;
}

export default function Header({ setLat, setLng }: InfoProps) {
  return (
    <header className="relative flex flex-col items-center py-6 px-5 bg-pattern-mobile xs:bg-pattern-desktop bg-cover bg-center h-[300px] xs:h-[280px]">
      <h1 className="text-white text-[26px] lg:text-3xl font-medium">
        IP Address Tracker
      </h1>
      <Info setLat={setLat} setLng={setLng} />
    </header>
  );
}
