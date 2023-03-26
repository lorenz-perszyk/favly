// @ts-nocheck
// I M P O R T S
import React, { FC, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import MenuIcon from "../../assets/media/burger_menu.json";
import { NavLink } from "react-router-dom";
import MenuDesktop from "./MenuDesktop";
import useGeneralStore from "../../stores/generalStore";

// C O M P O N E N T
const NavBar: FC = () => {
  const showMenu = useGeneralStore((state) => state.showMenu);
  const toggleMenu = useGeneralStore((state) => state.toggleMenu);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current !== null) {
      showMenu === true
        ? lottieRef.current.setDirection(1)
        : lottieRef.current.setDirection(-1, lottieRef.current.goToAndPlay(45, true));
    }
    lottieRef.current.setSpeed(4);
    lottieRef.current.play();
  }, [showMenu]);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex flex-row items-center justify-between h-12 bg-favly-light px-2 sm:px-4 lg:px-12 xl:px-[10vw]">
      <div className="font-bold text-2xl text-favly-main">
        <NavLink
          to="/"
          onClick={() => {
            if (showMenu) {
              toggleMenu();
            }
          }}
        >
          Favly
        </NavLink>
      </div>
      <div className="container cursor-pointer lg:hidden w-12" onClick={toggleMenu}>
        <Lottie lottieRef={lottieRef} animationData={MenuIcon} autoplay={false} loop={false} />
      </div>
      <div className="hidden lg:block">
        <MenuDesktop />
      </div>
    </div>
  );
};

export default NavBar;
