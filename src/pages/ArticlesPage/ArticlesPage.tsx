import { useEffect, useState } from "react";
import Markdown from "marked-react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { headingRenderer } from "../../utils/headingRenderer";

type ArticlePageProps = {
  loading: boolean;
  title: string;
  content: string;
};

type TableOfContentsProps = {
  headings: Headings[];
};

interface Headings {
  id: string;
  text: string;
  level: number;
}

export function ArticlesPage({ loading, title, content }: ArticlePageProps) {
  const [headings, setHeadings] = useState<Headings[]>([]);

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
      <div className="mt-14 md:mt-3 px-5 md:px-20 xl:px-60 2xl:px-96 overflow-y-auto prose-base">
        <h1>{title}</h1>
        <TableOfContents headings={headings}></TableOfContents>
        <Markdown value={content} renderer={{ heading: headingRenderer }} gfm={true} breaks={true} openLinksInNewTab={false} />
      </div>
    )
  }


}

function TableOfContents({ headings }: TableOfContentsProps) {
  return (
    <nav>
      <ul>
        {headings.map(heading => (
          <li
            key={heading.id}
            style={{ marginLeft: `${heading.level - 2}em` }}
          >
            <a href={`#${heading.id}`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}