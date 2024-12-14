import Info from "./Info";

export default function Header() {
  return (
    <header className="relative flex flex-col items-center bg-pattern-mobile xs:bg-pattern-desktop bg-cover bg-center h-[300px] xs:h-[280px]">
      <Info />
    </header>
  );
}
