import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main
      className="flex h-screen overflow-hidden bg-gray-800 md:bg-arcane-lib bg-cover bg-center bg-no-repeat text-white"
    >
      <Sidebar />
      <Outlet />
      <footer className="absolute w-full bottom-0 bg-gray-800 text-center">
        <i className="text-gray-300">The Known World© - Luke Brider-Woolard 2013-2025</i>
      </footer>
    </main>
  );
}

export default App;
