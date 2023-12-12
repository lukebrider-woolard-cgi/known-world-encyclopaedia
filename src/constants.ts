// Species
import antanai from "../lore/Species/Antanai.md";
import bortusken from "../lore/Species/Bortusken.md";
import human from "../lore/Species/Human.md";
import kalKrom from "../lore/Species/Kal Krom.md";
import neandal from "../lore/Species/Neandal.md";
import olmetek from "../lore/Species/Olmetek.md";

type article = {
  name: string;
  markdown: string;
};

const articles: article[] = [
  {
    name: "Antanai",
    markdown: antanai,
  },
  {
    name: "Bortusken",
    markdown: bortusken,
  },
  {
    name: "Human",
    markdown: human,
  },
  {
    name: "Kal krom",
    markdown: kalKrom,
  },
  {
    name: "Neandal",
    markdown: neandal,
  },
  {
    name: "Olmetek",
    markdown: olmetek,
  },
];

export { articles };
