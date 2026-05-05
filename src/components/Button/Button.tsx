/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

interface Props {
  showIcon: boolean;
  label: string;
  type: "primary" | "secondary";
  stateProp: "hover" | "default";
  size: "big";
  className: any;
  icon: string;
}

export const Button = ({
  showIcon = true,
  label = "Button",
  type,
  stateProp,
  size,
  className,
  icon = "https://c.animaapp.com/mophdx97y3wpG4/img/icon-9.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "secondary",

    state: stateProp || "default",

    size: size || "big",
  });

  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-[var(--spacing-spacing-sm-2)] pr-[var(--spacing-spacing-xl)] pl-[var(--spacing-spacing-xl)] py-2.5 h-11 rounded-[var(--spacing-corner-radius-xl-2)] justify-center relative ${state.type === "secondary" ? "border border-solid" : ""} ${state.state === "default" && state.type === "secondary" ? "border-color-dark-250" : (state.type === "secondary" && state.state === "hover") ? "border-color-dark-500" : ""} ${state.type === "secondary" ? "bg-color-light-1000" : (state.type === "primary" && state.state === "hover") ? "bg-color-primary-500" : "bg-color-primary-1000"} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {showIcon && (
        <div className="w-6 h-6 relative">
          <img
            className="w-3 left-1.5 top-1.5 h-3 absolute"
            alt="Icon"
            src={
              state.type === "secondary" && state.state === "hover"
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-1.svg"
                : state.type === "primary"
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-3.svg"
                  : icon
            }
          />
        </div>
      )}

      <button
        className={`all-[unset] box-border font-body-semibold-sm w-fit mt-[-1.00px] tracking-[var(--body-semibold-sm-letter-spacing)] text-[length:var(--body-semibold-sm-font-size)] [font-style:var(--body-semibold-sm-font-style)] font-[number:var(--body-semibold-sm-font-weight)] leading-[var(--body-semibold-sm-line-height)] whitespace-nowrap relative ${state.type === "secondary" && state.state === "hover" ? "text-color-dark-1000" : (state.type === "primary") ? "text-color-light-1000" : "text-color-dark-750"}`}
      >
        {label}
      </button>
    </button>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}
