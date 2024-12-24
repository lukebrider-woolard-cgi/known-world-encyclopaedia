import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Markdown from "marked-react";
import LoadingSpinner from "../../components/LoadingSpinner";
import TableOfContents, { type Headings } from "../../components/TableOfContents";
import { headingRenderer } from "../../utils/headingRenderer";
import { wiki, Article } from "../../utils/constants";

export function ArticlesPage() {
  const { categoryId, articleId } = useParams();
  const [headings, setHeadings] = useState<Headings[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>(
    "# Welcome to the Encyclopaedia of the Known World"
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTitle("");
    setContent("");

    const article: Article = wiki
      .find((cat) => cat.id === categoryId)!
      .articles.find((art) => art.id === articleId)!;

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
      setContent(`### Article with categoryId ${categoryId} and articleId ${articleId} not found!`);
      setLoading(false);
    }
  }, [categoryId, articleId])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
      .filter(element => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent?.replace(':', '') ?? "",
        level: Number(element.tagName.substring(1)),
      }));

    setHeadings(elements);
  }, [content]);

  if (loading) {
    return (
      <LoadingSpinner loading={loading} />
    )
  } else {
    return (
      <article className="w-full max-h-[90%] md:max-h-[95%] mt-14 md:mt-3 ~px-20/96 overflow-y-auto prose-base">
        <h1>{title}</h1>
        <TableOfContents headings={headings}></TableOfContents>
        <Markdown value={content} renderer={{ heading: headingRenderer }} gfm={true} breaks={true} openLinksInNewTab={false} />
      </article>
    )
  }
}

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

  return content.replace(linkRegex, (match) => {
    if (match.includes("|")) {
      const aliasLink = match.indexOf("|");
      return match.slice(aliasLink + 1, -2);
    }
    return match.slice(2, -2);
  });
}