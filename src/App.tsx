import { useState } from "react";
import { useArticle } from "./hooks/useArticle";
import Markdown from "react-markdown";
import LoadingSpinner from "./components/LoadingSpinner";
import Sidebar from "./components/Sidebar";

function App() {
  const { article, loading, findArticle } = useArticle();
  const [header, setHeader] = useState(
    "Welcome to the Encyclopaedia of the Known World"
  );

  function fetchArticle(name: string, path: string) {
    setHeader(name);
    findArticle(path);
  }

  return (
    <div
      className="flex h-screen overflow-hidden bg-gray-800 md:bg-arcane-lib bg-cover bg-center bg-no-repeat text-white"
    >
      <Sidebar fetchArticle={fetchArticle} />
      <div className="grow h[calc(100%-3.5rem)] md:h-full mt-14 md:mt-0 px-5 md:px-20 xl:px-60 overflow-y-auto text-center prose-base">
        <h1>{header}</h1>
        <LoadingSpinner loading={loading} />
        <Markdown>{article}</Markdown>
        <i>The Known World© - Luke Brider-Woolard 2013-2024</i>
      </div>
    </div>
  );
}

export default App;
