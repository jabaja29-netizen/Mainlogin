/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  imagePlaceholder: string;
  text: string;
  text1: string;
}

export const FeatureCard = ({
  className,
  imagePlaceholder = "https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder.svg",
  text = "Integration Ecosystem",
  text1 = "Automate tasks, generate insights, and assist your team with a powerful AI agent designed to adapt to your needs.",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-80 items-start gap-6 pt-[var(--spacing-spacing-xl)] pb-0 px-0 relative bg-color-light-1000 rounded-[var(--spacing-corner-radius-xl-2)] overflow-hidden ${className}`}
    >
      <div className="flex flex-col items-start gap-[var(--spacing-spacing-m)] pr-[var(--spacing-spacing-xl)] pl-[var(--spacing-spacing-xl)] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="mt-[-1.00px] font-headings-h7 font-[number:var(--headings-h7-font-weight)] text-color-dark-1000 text-[length:var(--headings-h7-font-size)] tracking-[var(--headings-h7-letter-spacing)] leading-[var(--headings-h7-line-height)] relative self-stretch [font-style:var(--headings-h7-font-style)]">
          {text}
        </div>

        <p className="font-body-regular-sm font-[number:var(--body-regular-sm-font-weight)] text-color-dark-750 text-[length:var(--body-regular-sm-font-size)] tracking-[var(--body-regular-sm-letter-spacing)] leading-[var(--body-regular-sm-line-height)] relative self-stretch [font-style:var(--body-regular-sm-font-style)]">
          {text1}
        </p>
      </div>

      <div className="relative self-stretch w-full h-[193px] overflow-hidden">
        <img
          className="relative w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"
          alt="Image placeholder"
          src={imagePlaceholder}
        />
      </div>
    </div>
  );
};
