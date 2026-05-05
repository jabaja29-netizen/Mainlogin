/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  iconClassName: any;
  icon: string;
  text: string;
  text1: string;
}

export const Card = ({
  className,
  iconClassName,
  icon = "https://c.animaapp.com/mophdx97y3wpG4/img/icon-7.svg",
  text = "Integration Ecosystem",
  text1 = "Automate tasks, generate insights, and assist your team with a powerful AI agent designed to adapt to your needs.",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-80 items-start gap-[var(--spacing-spacing-xl)] pt-[var(--spacing-spacing-xl)] pr-[var(--spacing-spacing-xxl)] pb-[var(--spacing-spacing-xxl)] pl-[var(--spacing-spacing-xxl)] relative bg-color-light-1000 rounded-[var(--spacing-corner-radius-xl-2)] border border-solid border-color-dark-250 ${className}`}
    >
      <div className="inline-flex items-center gap-2.5 p-4 relative flex-[0_0_auto] bg-color-primary-100 rounded-2xl">
        <div className="relative w-6 h-6">
          <img
            className={`absolute w-5 h-[22px] top-px left-0.5 ${iconClassName}`}
            alt="Icon"
            src={icon}
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="mt-[-1.00px] font-headings-h7 font-[number:var(--headings-h7-font-weight)] text-color-dark-1000 text-[length:var(--headings-h7-font-size)] tracking-[var(--headings-h7-letter-spacing)] leading-[var(--headings-h7-line-height)] relative self-stretch [font-style:var(--headings-h7-font-style)]">
          {text}
        </div>

        <p className="font-body-regular-sm font-[number:var(--body-regular-sm-font-weight)] text-color-dark-750 text-[length:var(--body-regular-sm-font-size)] tracking-[var(--body-regular-sm-letter-spacing)] leading-[var(--body-regular-sm-line-height)] relative self-stretch [font-style:var(--body-regular-sm-font-style)]">
          {text1}
        </p>
      </div>
    </div>
  );
};
