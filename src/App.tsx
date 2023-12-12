import Markdown from "react-markdown";
import { useArticle } from "./hooks/useArticle";
import { articles } from "./constants";

import "./App.css";

function App() {
  const { article, findArticle } = useArticle();

  function ArticleButton(name: string) {
    return (
      <button onClick={() => findArticle(name)}>{name}</button>
    )
  }

  return (
    <>
      <h1>Welcome to the Encyclopaedia of the Known World</h1>
      <div className="content">
        {articles.map((article) => ArticleButton(article.name))}
        <Markdown>{article}</Markdown>
      </div>
      <p>The Known World© - Luke Brider-Woolard 2013</p>
    </>
  );
}

export default App;
