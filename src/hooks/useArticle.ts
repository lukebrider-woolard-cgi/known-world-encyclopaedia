import { useState } from "react";
import { Article } from "../constants";

export const useArticle = () => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState(
    "# Welcome to the Encyclopaedia of the Known World"
  );
  const [loading, setLoading] = useState(false);

  const findArticle = (article: Article) => {
    setLoading(true);
    setTitle("");
    setArticle("");
    try {
      fetch(article.path)
        .then((res) => res.text())
        .then((text) => {
          setTitle(article.name);
          setArticle(text);
          setLoading(false);
        });
    } catch {
      setArticle(`### Article not found!`);
      setLoading(false);
    }
  };

  return { title, article, loading, findArticle };
};
