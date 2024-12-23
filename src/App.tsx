import { useArticle } from "./hooks/useArticle";
import Sidebar from "./components/Sidebar";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
  const { loading, title, content, findArticle } = useArticle();

  return (
    <div
      className="flex h-screen overflow-hidden bg-gray-800 md:bg-arcane-lib bg-cover bg-center bg-no-repeat text-white"
    >
      <Sidebar fetchArticle={findArticle} />
      <ArticlesPage loading={loading} title={title} content={content} />
      <footer className="absolute w-full bottom-0 bg-gray-800 text-center">
        <i className="text-gray-300">The Known World© - Luke Brider-Woolard 2013-2025</i>
      </footer>
    </div>
  );
}

export default App;
