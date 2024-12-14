import Header from "./components/Header";

function App() {
  return (
    <main className="text-very-Dark-Gray grid grid-rows-[300px_1fr] xs:grid-rows-[280px_1fr] min-h-svh">
      <Header />
      <div className="bg-green-300 w-full h-full"></div>
    </main>
  );
}

export default App;
