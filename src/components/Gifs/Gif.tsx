// I M P O R T S
import React, { FC } from "react";

// C O M P O N E N T
interface GifProps {
  gif: any;
}

const Gif: FC<GifProps> = ({ gif }) => {
  return (
    <img
      className="gif-image w-full rounded bg-favly-main bg-opacity-20 min-h-[180px] max-h-[500px]"
      src={gif.images.downsized_medium.url}
      alt={gif.title}
    />
  );
};

export default Gif;
