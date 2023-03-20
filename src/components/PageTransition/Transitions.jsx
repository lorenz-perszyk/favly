import React, { useContext } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import TransitionContext from "./TransitionContext";

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={{ enter: 300, exit: 500 }}
        onEnter={(node) => {
          toggleCompleted(false);
          gsap.from(node, {
            autoAlpha: 0,
            duration: 0.3,
            onComplete: () => toggleCompleted(true),
          });
        }}
        onExit={(node) => {
          gsap.to(node, {
            autoAlpha: 0,
            duration: 0.5,
          });
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
