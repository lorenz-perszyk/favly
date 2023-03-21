// I M P O R T S
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../data/routesData";

// C O M P O N E N T
const MenuDesktop: FC = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-8">
        {pages.map((page) => (
          <li
            className="hover-underline inline-block relative transition-all duration-200"
            key={page.pageName}
          >
            <NavLink
              to={page.route}
              className={({ isActive }) => (isActive ? "text-favly-main" : undefined)}
            >
              {page.pageName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuDesktop;
