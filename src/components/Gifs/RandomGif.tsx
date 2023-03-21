// I M P O R T S
import React, { FC } from "react";
import { Transition, SwitchTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import gsap from "gsap";
import Gif from "./Gif";
import LottieStar from "./LottieStar";
import useSearchStore from "../../stores/searchStore";

// C O M P O N E N T
const RandomGif: FC = () => {
  const searchResults = useSearchStore((state) => state.searchResults);

  // Image Enter Animation
  function enter(node: HTMLElement) {
    gsap.from(node, {
      yPercent: -5,
      duration: 0.3,
      autoAlpha: 0,
      ease: "power1.in",
      onComplete() {
        gsap.set(node, { clearProps: "all" });
      },
    });
  }

  // Image Exit Animation
  function exit(node: HTMLElement) {
    gsap.to(node, {
      yPercent: 5,
      duration: 0.3,
      autoAlpha: 0,
      ease: "power1.in",
    });
  }

  return (
    <>
      {searchResults.map((gif) => (
        <SwitchTransition mode={"out-in"}>
          <Transition
            mountOnEnter
            unmountOnExit
            key={uuidv4()}
            onEnter={enter}
            onExit={exit}
            timeout={300}
          >
            <div className="gif relative mb-4 w-full max-w-[500px]" key={gif.id}>
              <Gif gif={gif} />
              <LottieStar gif={gif} />
            </div>
          </Transition>
        </SwitchTransition>
      ))}
    </>
  );
};

export default RandomGif;
