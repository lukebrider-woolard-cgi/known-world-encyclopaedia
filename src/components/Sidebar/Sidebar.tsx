import { useState } from "react";
import { Link } from "react-router";
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
      setDropdownOpen(null);
    } else {
      setDropdownOpen(category);
    }
  }

  function handleArticleClick() {
    setSidebarOpen(false);
  }

  return (
    <>
      <button className='md:hidden fixed left-2 top-2 cursor-pointer' onClick={() => setSidebarOpen(!sidebarOpen)}>
        <IconContext.Provider value={{ style: { backgroundColor: "#1f2937" }, size: "50" }}>
          {sidebarOpen ? <IoClose /> : <GiHamburgerMenu />}
        </IconContext.Provider>
      </button>
      <div
        className={`${
          !sidebarOpen && "hidden"
        } md:block h[calc(100%-3.5rem)] md:h-full mt-14 md:mt-0 flex-none w-full md:w-72 overflow-y-auto bg-gray-800`}
      >
        <div className='flex flex-col items-center'>
          <Link
            to='/known-world-encyclopaedia/maps'
            className='flex items-center p-4 w-72 md:w-full bg-gray-800 hover:brightness-150'
          >
            <IconContext.Provider value={{ size: "30" }}>
              <div className='pr-2'>
                <GiWorld />
              </div>
            </IconContext.Provider>
            <p>Maps</p>
          </Link>
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
      </div>
    </>
  );
}

function SidebarCategory({ category, isOpen, handleCategoryClick, handleArticleClick }: SidebarCategoryProps) {
  return (
    <div className='w-72 md:w-full p-4 bg-gray-800 hover:brightness-150'>
      <button className=' w-full flex items-center justify-between' onClick={() => handleCategoryClick(category)}>
        <div className='flex items-center'>
          <IconContext.Provider value={{ size: "30" }}>
            <div className='pr-2'>{category.icon}</div>
          </IconContext.Provider>
          {category.name}
        </div>
        <div className='ml-5 md:ml-0'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
      </button>
      {isOpen && (
        <div className='pl-4'>
          <ul>
            {category.articles.map((article) => {
              return (
                <li key={article.name} className='mt-1 py-1 bg-gray-800 text-center md:text-left hover:brightness-200'>
                  <Link
                    to={`articles/category/${category.id}/article/${article.id}`}
                    className='pl-4 w-full block cursor-pointer'
                    onClick={() => handleArticleClick()}
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
