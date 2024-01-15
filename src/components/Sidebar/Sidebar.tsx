import { useState } from "react";
import { navigation, NavigationItem } from "../../constants";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

type SidebarProps = {
  fetchArticle: (name: string, path: string) => void;
};

type SidebarItemProps = {
  item: NavigationItem;
  handleArticleClick: (name: string, path: string) => void;
};

export function Sidebar({ fetchArticle }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleArticleClick(articleName: string, article: string) {
    fetchArticle(articleName, article);
    setSidebarOpen(false);
  }

  return (
    <>
      <a className="sm:hidden fixed cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <IconContext.Provider value={{ size: "30" }}>
          {sidebarOpen ? <IoClose /> : <GiHamburgerMenu />}
        </IconContext.Provider>
      </a>
      <div className={`${!sidebarOpen && "hidden"} sm:block flex-none h-full w-full mt-10 sm:w-72 sm:flex-shrink-0 sm:mt-0 overflow-y-auto bg-gray-800`}>
        {navigation.map((navItem) => {
          return (
            <SidebarItem
              key={navItem.name}
              item={navItem}
              handleArticleClick={handleArticleClick}
            />
          );
        })}
      </div>
    </>
  );
}

function SidebarItem({ item, handleArticleClick }: SidebarItemProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="p-4 w-full bg-gray-800 hover:brightness-150">
      <a className="flex flex-row items-center justify-center cursor-pointer space-around" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <IconContext.Provider value={{ size: "30" }}>
          <div className="pr-2">
            {item.icon}
          </div>
        </IconContext.Provider>
        {item.name}
        <div className="ml-5 sm:ml-auto">{dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}</div>

      </a>
      {dropdownOpen && (
        <div className="pl-4">
          <ul>
            {item.articles.map((article) => {
              return (
                <li key={article.name} className="mt-1 py-1 bg-gray-800 text-center sm:text-left hover:brightness-200">
                  <a className="pl-4 w-full block cursor-pointer" onClick={() => handleArticleClick(article.name, article.path)}>
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

