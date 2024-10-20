// Icons
import { IconType } from "react-icons";
import { GiBackup } from "react-icons/gi";
import { GiMagicShield } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { GiGearHammer } from "react-icons/gi";
import { GiAbstract024 } from "react-icons/gi";

// Prime Species
import antanai from "../lore/Species/Antanai.md";
import bortusken from "../lore/Species/Bortusken.md";
import human from "../lore/Species/Human.md";
import kalKrom from "../lore/Species/Kal Krom.md";
import neandal from "../lore/Species/Neandal.md";
import olmetek from "../lore/Species/Olmetek.md";

// Magical Sects
import apothecaries from "../lore/Magical Sects/Apothecaries.md";
import beastwalkers from "../lore/Magical Sects/Beastwalkers.md";
import demonHunters from "../lore/Magical Sects/Demon Hunters.md";
import elementalists from "../lore/Magical Sects/Elementalists.md";
import mages from "../lore/Magical Sects/Mages.md";
import acolytes from "../lore/Magical Sects/Acolytes.md";

// History
import history from "../lore/History/World History.md";

// Guilds
import assassins from "../lore/Organisations/Assassin's Guild.md";
import engineers from "../lore/Organisations/Professions/Engineers.md";
import thieves from "../lore/Organisations/Thieves' Guild.md";

// General
import languages from "../lore/General Lore/Languages.md";
import creatures from "../lore/General Lore/Types of Creatures.md";

export type NavigationItem = {
  name: string;
  icon: React.ReactElement<IconType>;
  articles: Article[];
};

export type Article = {
  name: string;
  path: string;
};

export const navigation: NavigationItem[] = [
  {
    name: "General Lore",
    icon: <GiAbstract024 />,
    articles: [
      {
        name: "Languages",
        path: languages,
      },
      {
        name: "Types of Creatures",
        path: creatures,
      },
    ],
  },
  {
    name: "Prime Species",
    icon: <GiBackup />,
    articles: [
      {
        name: "Antanai",
        path: antanai,
      },
      {
        name: "Bortusken",
        path: bortusken,
      },
      {
        name: "Human",
        path: human,
      },
      {
        name: "Kal Krom",
        path: kalKrom,
      },
      {
        name: "Neandal",
        path: neandal,
      },
      {
        name: "Olmetek",
        path: olmetek,
      },
    ],
  },
  {
    name: "Magical Sects",
    icon: <GiMagicShield />,
    articles: [
      {
        name: "Apothecaries",
        path: apothecaries,
      },
      {
        name: "Beastwalkers",
        path: beastwalkers,
      },
      {
        name: "Demon Hunters",
        path: demonHunters,
      },
      {
        name: "Elementalists",
        path: elementalists,
      },
      {
        name: "Mages",
        path: mages,
      },
      {
        name: "Acolytes",
        path: acolytes,
      }
    ],
  },
  {
    name: "History",
    icon: <GiClockwork />,
    articles: [
      {
        name: "World History",
        path: history,
      },
    ],
  },
  {
    name: "Guilds & Professions",
    icon: <GiGearHammer />,
    articles: [
      {
        name: "Assassin's Guild",
        path: assassins,
      },
      {
        name: "Engineers",
        path: engineers,
      },
      {
        name: "Thieves' Guild",
        path: thieves,
      },
    ],
  },
];
