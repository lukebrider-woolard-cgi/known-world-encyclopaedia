// Species
import antanai from "../lore/Species/Antanai.md";
import bortusken from "../lore/Species/Bortusken.md";
import human from "../lore/Species/Human.md";
import kalKrom from "../lore/Species/Kal Krom.md";
import neandal from "../lore/Species/Neandal.md";
import olmetek from "../lore/Species/Olmetek.md";
import apothecaries from "../lore/Magical Sects/Apothecaries.md";
import beastwalkers from "../lore/Magical Sects/Beastwalkers.md";
import demonHunters from "../lore/Magical Sects/Demon Hunters.md";
import elementalists from "../lore/Magical Sects/Elementalists.md";
import mages from "../lore/Magical Sects/Mages.md";

type article = {
  name: string;
  markdown: string;
};

export const articles: article[] = [
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
  {
    name: "Apothecaries",
    markdown: apothecaries,
  },
  {
    name: "Beastwalkers",
    markdown: beastwalkers,
  },
  {
    name: "Demon Hunters",
    markdown: demonHunters,
  },
  {
    name: "Elementalists",
    markdown: elementalists,
  },
  {
    name: "Mages",
    markdown: mages,
  },
];
