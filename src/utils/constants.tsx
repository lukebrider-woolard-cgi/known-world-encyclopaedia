// Icons
import { IconType } from "react-icons";
import { GiBackup } from "react-icons/gi";
import { GiMagicShield } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { GiGearHammer } from "react-icons/gi";
import { GiAbstract024 } from "react-icons/gi";

// Prime Species
import antanai from "../../lore/Species/Antanai.md";
import bortusken from "../../lore/Species/Bortusken.md";
import human from "../../lore/Species/Human.md";
import kalKrom from "../../lore/Species/Kal Krom.md";
import neandal from "../../lore/Species/Neandal.md";
import olmetek from "../../lore/Species/Olmetek.md";

// Magical Sects
import apothecaries from "../../lore/Magical Sects/Apothecaries.md";
import beastwalkers from "../../lore/Magical Sects/Beastwalkers.md";
import demonHunters from "../../lore/Magical Sects/Demon Hunters.md";
import elementalists from "../../lore/Magical Sects/Elementalists.md";
import mages from "../../lore/Magical Sects/Mages.md";
import acolytes from "../../lore/Magical Sects/Acolytes.md";

// History
import history from "../../lore/History/World History.md";

// Guilds
import assassins from "../../lore/Organisations/Assassin's Guild.md";
import cultOfEternalNight from "../../lore/Organisations/Cult of the Eternal Night.md";
import engineers from "../../lore/Organisations/Professions/Engineers.md";
import inquisition from "../../lore/Organisations/The Inquisition.md";
import ironRose from "../../lore/Organisations/Order of the Iron Rose.md";
import sentinels from "../../lore/Organisations/Order of Sentinels.md";
import thieves from "../../lore/Organisations/Thieves' Guild.md";
import vigil from "../../lore/Organisations/Order of the Vigil.md";
import wardens from "../../lore/Organisations/Order of Wardens.md";

// General
import languages from "../../lore/General Lore/Languages.md";
import creatures from "../../lore/General Lore/Types of Creatures.md";

export type NavigationItem = {
  id: string;
  name: string;
  icon: React.ReactElement<IconType>;
  articles: Article[];
};

export type Article = {
  id: string
  name: string;
  path: string;
};

export const navigation: NavigationItem[] = [
  {
    id: "general",
    name: "General Lore",
    icon: <GiAbstract024 />,
    articles: [
      {
        id: "languages",
        name: "Languages",
        path: languages,
      },
      {
        id: "creatures",
        name: "Types of Creatures",
        path: creatures,
      },
    ],
  },
  {
    id: "species",
    name: "Prime Species",
    icon: <GiBackup />,
    articles: [
      {
        id: "antanai",
        name: "Antanai",
        path: antanai,
      },
      {
        id: "bortusken",
        name: "Bortusken",
        path: bortusken,
      },
      {
        id: "human",
        name: "Human",
        path: human,
      },
      {
        id: "kal-krom",
        name: "Kal Krom",
        path: kalKrom,
      },
      {
        id: "neandal",
        name: "Neandal",
        path: neandal,
      },
      {
        id: "olmetek",
        name: "Olmetek",
        path: olmetek,
      },
    ],
  },
  {
    id: "sects",
    name: "Magical Sects",
    icon: <GiMagicShield />,
    articles: [
      {
        id: "apothecaries",
        name: "Apothecaries",
        path: apothecaries,
      },
      {
        id: "beastwalkers",
        name: "Beastwalkers",
        path: beastwalkers,
      },
      {
        id: "demon-hunters",
        name: "Demon Hunters",
        path: demonHunters,
      },
      {
        id: "elementalists",
        name: "Elementalists",
        path: elementalists,
      },
      {
        id: "mages",
        name: "Mages",
        path: mages,
      },
      {
        id: "acolytes",
        name: "Acolytes",
        path: acolytes,
      },
    ],
  },
  {
    id: "history",
    name: "History",
    icon: <GiClockwork />,
    articles: [
      {
        id: "world-history",
        name: "World History",
        path: history,
      },
    ],
  },
  {
    id: "guilds",
    name: "Guilds & Professions",
    icon: <GiGearHammer />,
    articles: [
      {
        id: "assassins-guild",
        name: "Assassin's Guild",
        path: assassins,
      },
      {
        id: "cult-of-eternal-night",
        name: "Cult of the Eternal Night",
        path: cultOfEternalNight
      },
      {
        id: "engineers",
        name: "Engineers",
        path: engineers,
      },
      {
        id: "inquisition",
        name: "The Inquisition",
        path: inquisition
      },
      {
        id: "order-of-iron-rose",
        name: "Order of the Iron Rose",
        path: ironRose
      },
      {
        id: "order-of-sentinels",
        name: "Order of Sentinels",
        path: sentinels
      },
      {
        id: "order-of-vigil",
        name: "Order of the Vigil",
        path: vigil
      },
      {
        id: "order-of-wardens",
        name: "Order of Wardens",
        path: wardens
      },
      {
        id: "thieves-guild",
        name: "Thieves' Guild",
        path: thieves,
      },
    ],
  },
];
