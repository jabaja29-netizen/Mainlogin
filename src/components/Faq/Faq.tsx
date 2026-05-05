/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

interface Props {
  stateProp: "closed" | "open";
  className: any;
  text: string;
  icon: string;
}

export const Faq = ({
  stateProp,
  className,
  text = "How it works?",
  icon = "https://c.animaapp.com/mophdx97y3wpG4/img/icon-5.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "closed",
  });

  return (
    <div
      className={`border border-solid border-color-dark-250 w-[422px] flex flex-col items-start gap-[var(--spacing-spacing-lg)] pt-[var(--spacing-spacing-xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-xl)] pl-[var(--spacing-spacing-xl)] rounded-3xl bg-color-light-1000 relative ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative">
        <div className="font-body-semibold-sm w-fit mt-[-1.00px] tracking-[var(--body-semibold-sm-letter-spacing)] text-[length:var(--body-semibold-sm-font-size)] [font-style:var(--body-semibold-sm-font-style)] text-color-dark-1000 font-[number:var(--body-semibold-sm-font-weight)] leading-[var(--body-semibold-sm-line-height)] whitespace-nowrap relative">
          {text}
        </div>

        <div className="w-6 h-6 relative">
          <img
            className="w-3.5 left-[5px] top-2 h-2 absolute"
            alt="Icon"
            src={
              state.state === "open"
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-4.svg"
                : icon
            }
          />
        </div>
      </div>

      {state.state === "open" && (
        <p className="relative self-stretch font-body-regular-sm font-[number:var(--body-regular-sm-font-weight)] text-color-dark-1000 text-[length:var(--body-regular-sm-font-size)] tracking-[var(--body-regular-sm-letter-spacing)] leading-[var(--body-regular-sm-line-height)] [font-style:var(--body-regular-sm-font-style)]">
          “We reduced project delays by 40% since switching to FlowTrack. Our
          remote teams finally feel aligned.”
        </p>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.state === "open") {
    switch (action) {
      case "click":
        return {
          state: "closed",
        };
    }
  }

  if (state.state === "closed") {
    switch (action) {
      case "click":
        return {
          state: "open",
        };
    }
  }

  return state;
}
