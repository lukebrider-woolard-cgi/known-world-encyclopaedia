import { useState } from "react";
import { Article } from "../utils/constants";

export const useArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(
    "# Welcome to the Encyclopaedia of the Known World"
  );
  const [loading, setLoading] = useState(false);

  const findArticle = (article: Article) => {
    setLoading(true);
    setTitle("");
    setContent("");
    try {
      fetch(article.path)
        .then((res) => res.text())
        .then((text) => {
          setTitle(article.name);
          text = removeProps(text);
          text = removeLinks(text);
          setContent(text);
          setLoading(false);
        });
    } catch {
      setContent(`### Article not found!`);
      setLoading(false);
    }
  };

  return { title, content, loading, findArticle };
};

function removeProps(content: string): string {
  const propWrapper = "---";

  if (content.includes("aliases:")) {
    const second = content.lastIndexOf(propWrapper);
    return content.slice(second + 2);
  }

  return content;
}

function removeLinks(content: string): string {
  const linkRegex = /\[\[.*?\]\]/g;

  console.log(content.match(linkRegex));

  return content.replace(linkRegex, (match) => {
    if (match.includes("|")) {
      const aliasLink = match.indexOf("|");
      return match.slice(aliasLink + 1, -2);
    }
    return match.slice(2, -2);
  });
}
