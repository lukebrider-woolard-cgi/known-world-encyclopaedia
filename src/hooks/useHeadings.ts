import { useEffect, useState } from "react";

interface Headings {
  id: string;
  text: string;
  level: number;
}

export const useHeadings = () => {
  const [headings, setHeadings] = useState<Headings[]>([]);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? "",
        level: Number(element.tagName.substring(1)),
      }));
    setHeadings(elements);
  }, []);
  return headings;
};
