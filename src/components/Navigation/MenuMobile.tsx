// I M P O R T S
import React, { FC, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "react-transition-group";
import gsap from "gsap";
import { pages } from "../../data/routesData";
import useGeneralStore from "../../stores/generalStore";

// C O M P O N E N T
const Menu: FC = () => {
  const showMenu = useGeneralStore((state) => state.showMenu);
  const toggleMenu = useGeneralStore((state) => state.toggleMenu);
  const menuRef = useRef(null);

  return (
    <Transition
      nodeRef={menuRef}
      in={showMenu}
      mountOnEnter
      unmountOnExit
      addEndListener={(node, done) => {
        const ctx = gsap.context(() => {
          if (showMenu) {
            gsap.set("#menu", { yPercent: 100 });
            gsap.set("#menu li", { autoAlpha: 0, y: 15 });
            gsap
              .timeline({ onComplete: done })
              .to("#menu", { yPercent: 0, duration: 0.6, ease: "power3.out" })
              .to("#menu li", { autoAlpha: 1, y: 0, duration: 0.25, stagger: 0.1 }, "<0.15");
          } else {
            gsap
              .timeline({ onComplete: done })
              .to("#menu li", { autoAlpha: 1, duration: 0 })
              .to("#menu", { yPercent: 100, duration: 0.6, ease: "power3.out" });
          }
        }, menuRef);
      }}
    >
      <div ref={menuRef}>
        <div
          className="fixed z-50 w-full right-0 bottom-0 h-[calc(100vh-48px)] px-4 pt-20 bg-favly-dark text-favly-light"
          id="menu"
        >
          <ul className="flex flex-col items-center gap-12 font-[600] text-2xl uppercase tracking-[0.1rem]">
            {pages.map((page) => (
              <li
                key={page.pageName}
                className="hover:text-favly-main transition-colors duration-200"
              >
                <NavLink
                  to={page.route}
                  onClick={toggleMenu}
                  className={({ isActive }) => (isActive ? "text-favly-main" : undefined)}
                >
                  {page.pageName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Transition>
  );
};

export default Menu;
