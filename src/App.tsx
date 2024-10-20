import { useArticle } from "./hooks/useArticle";
import { useHeadings } from "./hooks/useHeadings";
import Markdown from "marked-react";
import LoadingSpinner from "./components/LoadingSpinner";
import Sidebar from "./components/Sidebar";

const headingRenderer = {
  heading(text: string) {
    return (
      <h2 key={this.elementId} id={this.elementId} >
        {text}
      </h2>
    )
  }
}

function App() {
  const { title, article, loading, findArticle } = useArticle();

  function fetchArticle(path: string) {
    findArticle(path);
  }

  function TableOfContent() {
    const headings = useHeadings();
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

  return (
    <div
      className="flex h-screen overflow-hidden bg-gray-800 md:bg-arcane-lib bg-cover bg-center bg-no-repeat text-white"
    >
      <Sidebar fetchArticle={fetchArticle} />
      <div className="grow h[calc(100%-3.5rem)] md:h-full mt-14 md:mt-3 px-5 md:px-20 xl:px-60 2xl:px-96 overflow-y-auto prose-base">
        <LoadingSpinner loading={loading} />
        <h1>{title}</h1>
        <TableOfContent></TableOfContent>
        <Markdown openLinksInNewTab={false} renderer={headingRenderer}>{article}</Markdown>
        <i>The Known World© - Luke Brider-Woolard 2013-2024</i>
      </div>
    </div>
  );
}

export default App;
