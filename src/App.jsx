import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="block w-full">
        <Outlet />
      </main>
    </>
  );
}

export default App;
