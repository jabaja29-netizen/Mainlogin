/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  text: string;
  imageClassName: any;
  image: string;
}

export const QuoteCard = ({
  className,
  text = "New @boltdotnew + @AnimaApp Figma to Code just got released. Spoiler: it’s the best tool by far right now.",
  imageClassName,
  image = "https://c.animaapp.com/mophdx97y3wpG4/img/image@2x.png",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-[340px] items-start gap-[var(--spacing-spacing-lg)] pt-[var(--spacing-spacing-xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-xl)] pl-[var(--spacing-spacing-xl)] relative bg-color-light-1000 rounded-[var(--spacing-corner-radius-xl-2)] border border-solid border-color-dark-250 justify-between ${className}`}
    >
      <p className="relative self-stretch mt-[-1.00px] font-body-regular-sm font-[number:var(--body-regular-sm-font-weight)] text-color-dark-750 text-[length:var(--body-regular-sm-font-size)] tracking-[var(--body-regular-sm-letter-spacing)] leading-[var(--body-regular-sm-line-height)] [font-style:var(--body-regular-sm-font-style)] flex-1 overflow-hidden">
        {text}
      </p>

      <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className={`relative w-12 h-12 object-cover ${imageClassName}`}
          alt="Image"
          src={image}
        />

        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="flex h-6 items-center gap-1.5 relative self-stretch w-full">
            <div className="relative w-fit mt-[-1.00px] font-body-semibold-sm font-[number:var(--body-semibold-sm-font-weight)] text-color-dark-1000 text-[length:var(--body-semibold-sm-font-size)] tracking-[var(--body-semibold-sm-letter-spacing)] leading-[var(--body-semibold-sm-line-height)] whitespace-nowrap [font-style:var(--body-semibold-sm-font-style)]">
              Miguel Fernandez
            </div>
          </div>

          <div className="relative self-stretch font-body-regular-xs font-[number:var(--body-regular-xs-font-weight)] text-color-dark-500 text-[length:var(--body-regular-xs-font-size)] tracking-[var(--body-regular-xs-letter-spacing)] leading-[var(--body-regular-xs-line-height)] [font-style:var(--body-regular-xs-font-style)]">
            @MiguelFdezDev
          </div>
        </div>
      </div>
    </div>
  );
};
