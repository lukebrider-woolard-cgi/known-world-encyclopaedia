import { useState } from "react";

export const useArticle = () => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState(
    "# Welcome to the Encyclopaedia of the Known World"
  );
  const [loading, setLoading] = useState(false);

  const findArticle = (path: string) => {
    setLoading(true);
    setTitle("");
    setArticle("");
    try {
      fetch(path)
        .then((res) => res.text())
        .then((text) => {
          const { title, article } = extractTitle(text);
          setTitle(title);
          setArticle(article);
          setLoading(false);
        });
    } catch {
      setArticle(`### Article not found!`);
      setLoading(false);
    }
  };

  return { title, article, loading, findArticle };
};

function extractTitle(articleText: string): { title: string; article: string } {
  const result = articleText.split(/(^#[\w\s]+\s)/);
  const title = result[1].length > 0 ? result[1].slice(1).trim() : "";
  const article = result[2].length > 0 ? result[2] : "";

  return { title, article };
}
