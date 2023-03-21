// I M P O R T S
import React, { FC } from "react";
import UpArrow from "../../assets/media/favly_up-arrow.svg";

// C O M P O N E N T
const UpButton: FC = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      className="button-filled max-w-[48px] flex justify-center items-center"
      onClick={scrollToTop}
    >
      <img className="w-3/6 h-3/6" src={UpArrow} alt="Up" />
    </button>
  );
};

export default UpButton;
