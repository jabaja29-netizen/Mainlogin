/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { InputIcons } from "../InputIcons";

interface Props {
  showIcon: boolean;
  label: string;
  state: "default";
  inputIconsPropertyZapSize: string;
  inputIconsProperty1: string;
  labelClassName: any;
}

export const Badge = ({
  showIcon = true,
  label = "Bring multiple screens from Figma",
  state,
  inputIconsPropertyZapSize,
  inputIconsProperty1 = "user",
  labelClassName,
}: Props): JSX.Element => {
  return (
    <div className="inline-flex h-8 items-center justify-center gap-[var(--spacing-spacing-xs-2)] pr-[var(--spacing-spacing-m)] pl-[var(--spacing-spacing-m)] py-2 relative bg-color-light-1000 rounded-[var(--spacing-corner-radius-xl-2)] border border-solid border-color-dark-250">
      {showIcon && (
        <InputIcons
          className="!mt-[-1.00px] !mb-[-1.00px] !relative !left-[unset] !top-[unset]"
          property1={inputIconsProperty1}
          propertyUserSize="https://c.animaapp.com/mophdx97y3wpG4/img/input-icons.svg"
          propertyZapSize={inputIconsPropertyZapSize}
          size="medium"
        />
      )}

      <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
        <p
          className={`relative w-fit mt-[-1.00px] font-body-regular-xs font-[number:var(--body-regular-xs-font-weight)] text-colorsblack text-[length:var(--body-regular-xs-font-size)] tracking-[var(--body-regular-xs-letter-spacing)] leading-[var(--body-regular-xs-line-height)] whitespace-nowrap [font-style:var(--body-regular-xs-font-style)] ${labelClassName}`}
        >
          {label}
        </p>
      </div>
    </div>
  );
};
