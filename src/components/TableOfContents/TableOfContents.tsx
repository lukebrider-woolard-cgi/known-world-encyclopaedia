export interface Headings {
  id: string;
  text: string;
  level: number;
}

type TableOfContentsProps = {
  headings: Headings[];
};

export function TableOfContents({ headings }: TableOfContentsProps) {
  return (
    <nav>
      {headings.length > 0 ? <b>Contents:</b> : <></>}
      <ul>
        {headings.map(heading => (
          <li
            key={heading.id}
            style={{ marginLeft: `${heading.level - 2}em` }}
          >
            <a className="text-blue-300 hover:text-blue-200" href={`#${heading.id}`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}