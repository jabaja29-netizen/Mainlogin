/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  state: "hover" | "default";
  className: any;
  stateDefault: string;
}

export const PlayButton = ({
  state,
  className,
  stateDefault = "https://c.animaapp.com/mophdx97y3wpG4/img/state-default.svg",
}: Props): JSX.Element => {
  return (
    <img
      className={`w-[120px] left-0 top-0 h-[120px] absolute ${className}`}
      alt="State default"
      src={
        state === "hover"
          ? "https://c.animaapp.com/mophdx97y3wpG4/img/state-hover.svg"
          : stateDefault
      }
    />
  );
};
