import { Routes, Route } from "react-router";
import { useArticle } from "./hooks/useArticle";
import Sidebar from "./components/Sidebar";
import ArticlesPage from "./pages/ArticlesPage";
import MapsPage from "./pages/MapsPage";

function App() {
  const { loading, title, content, findArticle } = useArticle();

  return (
    <main
      className="flex h-screen overflow-hidden bg-gray-800 md:bg-arcane-lib bg-cover bg-center bg-no-repeat text-white"
    >
      <Sidebar fetchArticle={findArticle} />
      <Routes>
        <Route path="known-world-encyclopaedia">
          <Route index element={<ArticlesPage loading={loading} title={title} content={content} />} />
          <Route path="maps" element={<MapsPage />} />
        </Route>
      </Routes>
      <footer className="absolute w-full bottom-0 bg-gray-800 text-center">
        <i className="text-gray-300">The Known World© - Luke Brider-Woolard 2013-2025</i>
      </footer>
    </main>
  );
}

export default App;
