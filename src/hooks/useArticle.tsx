import { useState } from "react";
import { articles } from "../constants";

export const useArticle = () => {
  const [article, setArticle] = useState("");

  const removeProps = (input: string) => {
    return input.replace(/^---\s((.+)\s)+---\s/gm, "");
  };

  const removeLinks = (input: string) => {
    return input
      .replace(/\[\[.+\|/gm, "")
      .replace(/\[\[/gm, "")
      .replace(/\]\]/gm, "");
  };

  const parseMarkdown = (input: string) => {
    const step1 = removeProps(input);
    const step2 = removeLinks(step1);
    return step2;
  };

  const findArticle = (name: string) => {
    const markdownFile = articles.find(
      (article) => article.name === name
    )?.markdown;

    if (markdownFile !== undefined) {
      fetch(markdownFile)
        .then((res) => res.text())
        .then((text) => parseMarkdown(text))
        .then((text) => setArticle(text));
    } else {
      setArticle(`###Article not found!`);
    }
  };

  return { article, findArticle };
};
