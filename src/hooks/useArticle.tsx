import { useState } from "react";

export const useArticle = () => {
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);

  const removeProps = (input: string) => {
    const allButProps = input.split("---").pop()
    return allButProps ? allButProps : "### Issue parsing markdown!"
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

  const findArticle = (path: string) => {
    setLoading(true);
    setArticle("");
    try {
      fetch(path)
        .then((res) => res.text())
        .then((text) => parseMarkdown(text))
        .then((text) => {
          setArticle(text)
          setLoading(false);
        });
    } catch {
      setArticle(`### Article not found!`);
      setLoading(false);
    }
  };

  return { article, loading, findArticle };
};
