import React, { useState } from "react";

function Menu({ name, activeMenu }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const menuItems = [
    { id: 1, heading: "Services", content: "AI Visual Inspection" },
    { id: 2, heading: "Services", content: "AI Infrastructure Inspection" },
    { id: 3, heading: "Services", content: "AI People Tracking" },
    { id: 4, heading: "Services", content: "AI Data Analytics" },
    { id: 5, heading: "Product", content: "Asset Performance Management" },
  ];

  const menuActive = (id) => {
    setActiveSubMenu((prev) => (prev === id ? null : id));
  };
  console.log(activeSubMenu);

  return (
    <ul>
      {menuItems
        .filter((item) => item.heading === name)
        .map((item) => {
          return (
            <li
              key={item.id}
              className={`py-2 ${
                activeSubMenu === item.id ? "text-blue-500" : "text-black"
              } ${item.id !== 1 && item.id !== 5 ? "border-t-2" : ""} `}
              onClick={() => menuActive(item.id)}
            >
              {item.content}
            </li>
          );
        })}
    </ul>
  );
}

export default Menu;
