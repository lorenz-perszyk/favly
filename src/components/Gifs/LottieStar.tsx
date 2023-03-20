// @ts-nocheck
// I M P O R T S
import React, { FC, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import StarAnimation from "../../assets/media/favly_star .json";
import useFavoriteStore from "../../stores/favoritesStore";
import useSearchStore from "../../stores/searchStore";

// C O M P O N E N T
interface StarButtonProps {
  gif: any;
}

const LottieStar: FC<StarButtonProps> = ({ gif }) => {
  const searchResults = useSearchStore((state) => state.searchResults);
  const favorites = useFavoriteStore((state) => state.favorites);
  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteStore((state) => state.removeFromFavorites);
  const lottieRef = useRef(null);

  useEffect(() => {
    favorites.find((el) => el.id === gif.id) ? lottieRef.current.goToAndStop(30, true) : null;
  }, [searchResults]);

  const handleClick = (gif: {}) => {
    if (lottieRef.current !== null) {
      lottieRef.current.setSpeed(3);
      favorites.find((el) => el.id === gif.id)
        ? (removeFromFavorites(gif.id), lottieRef.current.setDirection(-1))
        : (addToFavorites(gif), lottieRef.current.setDirection(1));
      lottieRef.current.play();
    }
  };
  return (
    <button
      className={
        "absolute top-4 right-4 w-10 h-10 flex justify-center bg-favly-light rounded-full transition duration-200 hover:scale-110"
      }
      onClick={() => {
        handleClick(gif);
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={StarAnimation}
        loop={false}
        autoplay={false}
        className="w-4/5"
      />
    </button>
  );
};

export default LottieStar;
