import React, { useState } from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { list } from "postcss";

function Nav({ showMobileMenu, toggleMobileMenu }) {
  const [showMenu, setShowMenu] = useState(1);
const navigate = useNavigate()
  const items = [
    {
      id: 1,
      name: "Home",
      dropdown: false,
      path:"/"
    },
    {
      id: 2,
      name: "Services",
      dropdown: true,
      path:'#'
    },
    {
      id: 3,
      name: "Product",
      dropdown: true,
      path:'#'

    },
    {
      id: 4,
      name: "About",
      dropdown: false,
      path:'/services'

    },
    {
      id: 5,
      name: "Blog",
      dropdown: false,
      path:'/services'

    },
    {
      id: 6,
      name: "Contact",
      dropdown: false,
      path:'/services'

    },
  ];

  const dropDown = (id,path) => {
    setShowMenu((prev) => (prev === id ? null : id));
    
      navigate('/');
    
  };
  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };

  return (
   
    <nav className={`lg:flex ${showMobileMenu ? 'block' : 'hidden'}`}>
      <ul className="flex flex-col lg:flex-row">
        {items.map((lists) => (
          <li
            key={lists.id}
            className={`px-3 cursor-pointer ${showMenu === lists.id ? 'text-blue-500' : 'text-black'}`}
            onClick={() => dropDown(lists.id,list.path)}
          >
            {lists.name}
            {lists.dropdown && <span> &#9660;</span>}
            {showMenu === lists.id && lists.dropdown && (
              <div className="absolute bg-white border border-gray-300 mt-1 p-2" onClick={handleDropdownClick}>
                <Menu name={lists.name} activeMenu={showMenu} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  
  );
}

export default Nav;
