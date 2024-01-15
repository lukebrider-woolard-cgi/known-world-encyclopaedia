import { useState } from "react";
import { navigation, NavigationItem } from "../../constants";
import { IconContext } from "react-icons";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

type SidebarProps = {
  fetchArticle: (name: string, path: string) => void;
};

type SidebarItemProps = {
  item: NavigationItem;
  fetchArticle: (name: string, path: string) => void;
};

export function Sidebar({ fetchArticle }: SidebarProps) {
  return (
    <div className="flex-none h-full w-72 flex-shrink-0 overflow-y-auto bg-gray-800">
      {navigation.map((navItem) => {
        return (
          <SidebarItem
            key={navItem.name}
            item={navItem}
            fetchArticle={fetchArticle}
          />
        );
      })}
    </div>
  );
}

function SidebarItem({ item, fetchArticle }: SidebarItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 w-full bg-gray-800 hover:brightness-150">
      <a className="flex flex-row items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <IconContext.Provider value={{ size: "30" }}>
          <div className="pr-2">
            {item.icon}
          </div>
        </IconContext.Provider>
        {item.name}
        <div className="ml-auto">{open ? <FaChevronUp /> : <FaChevronDown />}</div>

      </a>
      {open && (
        <div className="pl-4">
          <ul>
            {item.articles.map((article) => {
              return (
                <li key={article.name} className="mt-1 py-1 bg-gray-800 hover:brightness-200">
                  <a className="pl-4 w-full block cursor-pointer" onClick={() => fetchArticle(article.name, article.markdown)}>
                    {article.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

