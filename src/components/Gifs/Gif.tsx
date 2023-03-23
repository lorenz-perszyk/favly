// I M P O R T S
import React, { FC } from "react";

// C O M P O N E N T
interface GifProps {
  gif: any;
}

const Gif: FC<GifProps> = ({ gif }) => {
  return (
    <img
      className="block w-full h-auto rounded bg-favly-main bg-opacity-20"
      src={gif.images.downsized_medium.url}
      alt={gif.title}
      width={gif.images.downsized_medium.width}
      height={gif.images.downsized_medium.height}
    />
  );
};

export default Gif;
