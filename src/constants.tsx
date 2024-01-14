import { IconType } from "react-icons";
import { GiBackup } from "react-icons/gi";
import { GiMagicShield } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { GiGearHammer } from "react-icons/gi";
import { GiAbstract024 } from "react-icons/gi";

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
    name: "Prime Species",
    icon: <GiBackup />,
    articles: [
      {
        name: "Antanai",
        path: "../lore/Species/Antanai.md",
      },
      {
        name: "Bortusken",
        path: "../lore/Species/Bortusken.md",
      },
      {
        name: "Human",
        path: "../lore/Species/Human.md",
      },
      {
        name: "Kal Krom",
        path: "../lore/Species/Kal Krom.md",
      },
      {
        name: "Neandal",
        path: "../lore/Species/Neandal.md",
      },
      {
        name: "Olmetek",
        path: "../lore/Species/Olmetek.md",
      },
    ],
  },
  {
    name: "Magical Sects",
    icon: <GiMagicShield />,
    articles: [
      {
        name: "Apothecaries",
        path: "../lore/Magical Sects/Apothecaries.md",
      },
      {
        name: "Beastwalkers",
        path: "../lore/Magical Sects/Beastwalkers.md",
      },
      {
        name: "Demon Hunters",
        path: "../lore/Magical Sects/Demon Hunters.md",
      },
      {
        name: "Elementalists",
        path: "../lore/Magical Sects/Elementalists.md",
      },
      {
        name: "Mages",
        path: "../lore/Magical Sects/Mages.md",
      },
    ],
  },
  {
    name: "History",
    icon: <GiClockwork />,
    articles: [
      {
        name: "Pre-Existence",
        path: "../lore/History/Pre-existence - Before the Known World.md"
      },
      {
        name: "1st Age - Founding",
        path: "../lore/History/1st Age - Founding.md"
      },
      {
        name: "2nd Age - Tranquillity",
        path: "../lore/History/2nd Age - Tranquillity.md"
      },
      {
        name: "3rd Age - Turmoil",
        path: "../lore/History/3rd Age - Turmoil.md"
      },
      {
        name: "4th Age - Revival",
        path: "../lore/History/4th Age - Revival.md"
      },
      {
        name: "5th Age - Discovery",
        path: "../lore/History/5th Age - Discovery.mdd"
      },
    ],
  },
  {
    name: "Guilds & Professions",
    icon: <GiGearHammer />,
    articles: [
      {
        name: "Assassin's Guild",
        path: "../lore/Organisations/Assassin's Guild.md"
      },
      {
        name: "Engineers",
        path: "../lore/Organisations/Professions/Engineers.md"
      },
      {
        name: "Thieves' Guild",
        path: "../lore/Organisations/Thieves' Guild.md"
      },
    ],
  },
  {
    name: "General Lore",
    icon: <GiAbstract024 />,
    articles: [
      {
        name: "Languages",
        path: "../lore/General Lore/Languages.md"
      },
      {
        name: "Types of Creatures",
        path: "../lore/General Lore/Types of Creatures.md"
      },
    ],
  },
];
