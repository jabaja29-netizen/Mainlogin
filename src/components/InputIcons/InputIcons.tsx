/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  property1:
    | "chevron-down"
    | "arrow-up-right"
    | "chevron-left"
    | "user"
    | "menu"
    | "layers"
    | "smile"
    | "chevron-right"
    | "zap";
  size: "medium" | "big";
  className: any;
  propertyZapSize: string;
  propertyUserSize: string;
}

export const InputIcons = ({
  property1,
  size,
  className,
  propertyZapSize = "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-zap--size-medium.svg",
  propertyUserSize = "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-user--size-medium.svg",
}: Props): JSX.Element => {
  return (
    <img
      className={`left-0 top-0 absolute ${size === "big" ? "w-6" : "w-[18px]"} ${size === "big" ? "h-6" : "h-[18px]"} ${className}`}
      alt="Property user size"
      src={
        property1 === "user"
          ? propertyUserSize
          : property1 === "smile"
            ? "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-smile--size-medium.svg"
            : property1 === "zap" && size === "medium"
              ? propertyZapSize
              : property1 === "layers"
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-layers--size-big.svg"
                : property1 === "arrow-up-right"
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-arrow-up-right--size-big.svg"
                  : property1 === "menu"
                    ? "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-menu--size-big.svg"
                    : property1 === "chevron-down"
                      ? "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-chevron-down--size-big.svg"
                      : property1 === "chevron-left"
                        ? "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-chevron-left--size-big.svg"
                        : property1 === "chevron-right"
                          ? "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-chevron-right--size-big.svg"
                          : "https://c.animaapp.com/mophdx97y3wpG4/img/property-1-zap--size-big.svg"
      }
    />
  );
};
