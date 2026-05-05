/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

interface Props {
  stateProp: "off" | "on";
  className: any;
  frameClassName: any;
  onClick?: () => void;
}

export const Toggle = ({
  stateProp,
  className,
  frameClassName,
  onClick,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "off",
  });

  return (
    <div
      className={`w-[42px] flex items-center p-[2.82px] rounded-[var(--spacing-corner-radius-lg-2)] relative ${state.state === "on" ? "justify-end" : ""} ${state.state === "on" ? "bg-color-primary-1000" : "bg-color-dark-250"} ${className}`}
      onClick={() => {
        dispatch("click");
        onClick?.();
      }}
    >
      <div
        className={`w-[18.35px] h-[18.35px] rounded-[16.94px] relative ${state.state === "on" ? "bg-color-light-1000" : "bg-white"} ${frameClassName}`}
      />
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.state === "off") {
    switch (action) {
      case "click":
        return {
          state: "on",
        };
    }
  }

  if (state.state === "on") {
    switch (action) {
      case "click":
        return {
          state: "off",
        };
    }
  }

  return state;
}
