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

// History
import preExistence from "../lore/History/Pre-existence - Before the Known World.md";
import firstAge from "../lore/History/1st Age - Founding.md";
import secondAge from "../lore/History/2nd Age - Tranquillity.md";
import thirdAge from "../lore/History/3rd Age - Turmoil.md";
import fourthAge from "../lore/History/4th Age - Revival.md";
import fifthAge from "../lore/History/5th Age - Discovery.md";

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
  markdown: string;
};

export const navigation: NavigationItem[] = [
  {
    name: "Prime Species",
    icon: <GiBackup />,
    articles: [
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
        name: "Kal Krom",
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
    ],
  },
  {
    name: "Magical Sects",
    icon: <GiMagicShield />,
    articles: [
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
    ],
  },
  {
    name: "History",
    icon: <GiClockwork />,
    articles: [
      {
        name: "Pre-Existence",
        markdown: preExistence,
      },
      {
        name: "1st Age - Founding",
        markdown: firstAge,
      },
      {
        name: "2nd Age - Tranquillity",
        markdown: secondAge,
      },
      {
        name: "3rd Age - Turmoil",
        markdown: thirdAge,
      },
      {
        name: "4th Age - Revival",
        markdown: fourthAge,
      },
      {
        name: "5th Age - Discovery",
        markdown: fifthAge,
      },
    ],
  },
  {
    name: "Guilds & Professions",
    icon: <GiGearHammer />,
    articles: [
      {
        name: "Assassin's Guild",
        markdown: assassins,
      },
      {
        name: "Engineers",
        markdown: engineers,
      },
      {
        name: "Thieves' Guild",
        markdown: thieves,
      },
    ],
  },
  {
    name: "General Lore",
    icon: <GiAbstract024 />,
    articles: [
      {
        name: "Languages",
        markdown: languages,
      },
      {
        name: "Types of Creatures",
        markdown: creatures,
      },
    ],
  },
];
