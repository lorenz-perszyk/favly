// I M P O R T S
import React, { FC } from "react";
import UpArrow from "../../assets/media/favly_up-arrow.svg";

// C O M P O N E N T
const UpButton: FC = () => {
  return (
    <a href="#top">
      <button className="button-filled min-w-[48px] flex justify-center items-center">
        <img className="w-3/6 h-3/6" src={UpArrow} alt="Up" />
      </button>
    </a>
  );
};

export default UpButton;
