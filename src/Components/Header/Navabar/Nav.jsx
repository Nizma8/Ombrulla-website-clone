import React, { useState } from "react";
import Menu from "./Menu";

function Nav() {
  const [showMenu, setShowMenu] = useState(1);

  const items = [
    {
      id: 1,
      name: "Home",
      dropdown: false,
    },
    {
      id: 2,
      name: "Services",
      dropdown: true,
    },
    {
      id: 3,
      name: "Product",
      dropdown: true,
    },
    {
      id: 4,
      name: "About",
      dropdown: false,
    },
    {
      id: 5,
      name: "Blog",
      dropdown: false,
    },
    {
      id: 6,
      name: "Contact",
      dropdown: false,
    },
  ];

  const dropDown = (id) => {
    setShowMenu((prev) => (prev === id ? null : id));
  };
  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };

  return (
    <nav >
      <ul className="flex">
        {items.map((lists) => {
          return (
            <li
              key={lists.id}
              className={`px-3 cursor-pointer ${
                showMenu === lists.id ? "text-blue-500" : "text-black"
              }`}
              onClick={() => dropDown(lists.id)}
            >
              {lists.name}
              {lists.dropdown && <span> &#9660;</span>}
              {showMenu === lists.id && lists.dropdown && (
                <div
                  className="absolute bg-white border border-gray-300 mt-1 p-2"
                  onClick={handleDropdownClick}
                >
                  <Menu name={lists.name} activeMenu={showMenu} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
