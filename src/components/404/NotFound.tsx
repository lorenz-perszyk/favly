// I M P O R T S
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotFoundGif from "../../assets/media/favly_404.gif";

// C O M P O N E N T
const NotFound: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img className="mb-12 w-full max-w-[450px]" src={NotFoundGif} alt="" />
      <div className="text-center">
        <h2 className="mb-6">
          Don't Worry! <br />
          We are taking you to safety.
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
