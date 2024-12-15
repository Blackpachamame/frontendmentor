import { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  return (
    <main className="text-very-Dark-Gray grid grid-rows-[300px_1fr] xs:grid-rows-[280px_1fr] min-h-svh">
      <Header setLat={setLat} setLng={setLng} />
      <Map lat={lat} lng={lng} />
    </main>
  );
}

export default App;
