import { useState } from "react";
import { Link } from "react-router"
import { wiki, Category } from "../../utils/constants";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";

type SidebarCategoryProps = {
  category: Category;
  isOpen: boolean;
  handleCategoryClick: (category: Category) => void;
  handleArticleClick: () => void;
};

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<Category | null>(null);

  function handleCategoryClick(category: Category) {
    if (dropdownOpen === category) {
      setDropdownOpen(null)
    } else {
      setDropdownOpen(category);
    }
  }

  function handleArticleClick() {
    setSidebarOpen(false);
  }

  return (
    <>
      <a
        className="md:hidden fixed left-2 top-2 cursor-pointer"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <IconContext.Provider
          value={{ style: { backgroundColor: "#1f2937" }, size: "50" }}
        >
          {sidebarOpen ? <IoClose /> : <GiHamburgerMenu />}
        </IconContext.Provider>
      </a>
      <div
        className={`${!sidebarOpen && "hidden"
          } md:block h[calc(100%-3.5rem)] md:h-full mt-14 md:mt-0 flex-none md:flex-shrink-0 w-full md:w-72 overflow-y-auto bg-gray-800`}
      >
        <li key="map" className="p-4 w-full bg-gray-800 hover:brightness-150">
          <Link to="/known-world-encyclopaedia/maps" className="flex flex-row items-center justify-start cursor-pointer space-around">
            <IconContext.Provider value={{ size: "30" }}>
              <div className="pr-2">
                <GiWorld />
              </div>
            </IconContext.Provider>
            <a>Maps</a>
          </Link>
        </li>
        {wiki.map((category) => {
          return (
            <SidebarCategory
              key={category.name}
              category={category}
              isOpen={category === dropdownOpen}
              handleCategoryClick={handleCategoryClick}
              handleArticleClick={handleArticleClick}
            />
          );
        })}
      </div>
    </>
  );
}

function SidebarCategory({ category, isOpen, handleCategoryClick, handleArticleClick }: SidebarCategoryProps) {


  return (
    <div className="p-4 w-full bg-gray-800 hover:brightness-150">
      <a
        className="flex flex-row items-center justify-center cursor-pointer space-around"
        onClick={() => handleCategoryClick(category)}
      >
        <IconContext.Provider value={{ size: "30" }}>
          <div className="pr-2">{category.icon}</div>
        </IconContext.Provider>
        {category.name}
        <div className="ml-5 sm:ml-auto">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </a>
      {isOpen && (
        <div className="pl-4">
          <ul>
            {category.articles.map((article) => {
              return (
                <li
                  key={article.name}
                  className="mt-1 py-1 bg-gray-800 text-center sm:text-left hover:brightness-200"
                >
                  <Link
                    to={`articles/category/${category.id}/article/${article.id}`}
                    className="pl-4 w-full block cursor-pointer"
                    onClick={() =>
                      handleArticleClick()
                    }
                  >
                    {article.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
