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
      className="flex h-screen overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(31, 41, 55, 0.75), rgba(31, 41, 55, 0.75)), url(public/background.jpg)",
      }}
    >
      <Sidebar fetchArticle={fetchArticle} />
      <div className="grow h-full pt-5 px-60 overflow-y-auto text-center prose-base">
        <h1>{header}</h1>
        <LoadingSpinner loading={loading} />
        <Markdown>{article}</Markdown>
        <i>The Known World© - Luke Brider-Woolard 2013</i>
      </div>
    </div>
  );
}

export default App;
