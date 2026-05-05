/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import { Check } from "../Check";

interface Props {
  showBadge: boolean;
  type: "highlighted" | "default";
  className: any;
  checkCheck: string;
  text: string;
  checkImg: string;
  text1: string;
  checkCheck1: string;
  text2: string;
  checkCheck2: string;
  text3: string;
  checkCheck3: string;
  text4: string;
  text5: string;
  icon: string;
  text6: string;
  text7: string;
  customPrice?: string;
}

export const PricingCard = ({
  showBadge = true,
  type,
  className,
  checkCheck = "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-9.svg",
  text = "Up to 5 project members",
  checkImg = "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-9.svg",
  text1 = "Unlimited tasks and projects",
  checkCheck1 = "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-9.svg",
  text2 = "2GB storage",
  checkCheck2 = "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-9.svg",
  text3 = "Integrations",
  checkCheck3 = "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-9.svg",
  text4 = "Basic support",
  text5 = "Perfect for individuals and small projects",
  icon = "https://c.animaapp.com/mophdx97y3wpG4/img/icon-6.svg",
  text6 = "Basic",
  text7 = "$19",
  customPrice,
}: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid w-[354px] flex flex-col items-start gap-[var(--spacing-spacing-xl)] pt-[var(--spacing-spacing-xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-xl)] pl-[var(--spacing-spacing-xl)] rounded-[var(--spacing-corner-radius-xl-2)] bg-color-light-1000 relative ${type === "highlighted" ? "border-color-primary-1000 animate-pulse-border" : "border-color-dark-250"} ${className}`}
    >
      <div className="w-full flex self-stretch flex-col items-start gap-4 flex-[0_0_auto] relative">
        <div
          className={`w-full flex self-stretch items-start flex-[0_0_auto] relative ${type === "default" ? "gap-6" : ""} ${type === "highlighted" ? "justify-between" : ""}`}
        >
          <div
            className={`font-body-semibold-md w-fit mt-[-1.00px] tracking-[var(--body-semibold-md-letter-spacing)] text-[length:var(--body-semibold-md-font-size)] [font-style:var(--body-semibold-md-font-style)] relative font-[number:var(--body-semibold-md-font-weight)] text-center whitespace-nowrap leading-[var(--body-semibold-md-line-height)] ${type === "default" ? "text-color-dark-750" : "text-color-dark-1000"}`}
          >
            {type === "highlighted" && <>Pro</>}

            {type === "default" && <>{text6}</>}
          </div>

          {type === "highlighted" && (
            <>
              <>
                {showBadge && (
                  <div className="inline-flex h-8 items-center justify-center gap-[var(--spacing-spacing-xs-2)] pr-[var(--spacing-spacing-m)] pl-[var(--spacing-spacing-m)] py-2 relative flex-[0_0_auto] bg-color-light-1000 rounded-[var(--spacing-corner-radius-xl-2)] border border-solid border-color-dark-250">
                    <div className="relative w-[18px] h-[18px] mt-[-1.00px] mb-[-1.00px]">
                      <img
                        className="absolute w-4 h-4 top-px left-px"
                        alt="Icon"
                        src={icon}
                      />
                    </div>

                    <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-body-regular-xs font-[number:var(--body-regular-xs-font-weight)] text-color-dark-1000 text-[length:var(--body-regular-xs-font-size)] tracking-[var(--body-regular-xs-letter-spacing)] leading-[var(--body-regular-xs-line-height)] whitespace-nowrap [font-style:var(--body-regular-xs-font-style)]">
                        Most Popular
                      </div>
                    </div>
                  </div>
                )}
              </>
            </>
          )}
        </div>

        <div className="w-full flex self-stretch items-center gap-3 flex-[0_0_auto] relative">
          <div className="font-headings-h5 w-fit mt-[-1.00px] tracking-[var(--headings-h5-letter-spacing)] text-[length:var(--headings-h5-font-size)] [font-style:var(--headings-h5-font-style)] text-color-dark-1000 font-[number:var(--headings-h5-font-weight)] text-center whitespace-nowrap leading-[var(--headings-h5-line-height)] relative">
            {type === "default" && <>{text7}</>}

            {type === "highlighted" && <>{customPrice || "$49"}</>}
          </div>

          <div
            className={`font-body-semibold-md w-fit tracking-[var(--body-semibold-md-letter-spacing)] [font-style:var(--body-semibold-md-font-style)] text-[length:var(--body-semibold-md-font-size)] relative font-[number:var(--body-semibold-md-font-weight)] text-center whitespace-nowrap leading-[var(--body-semibold-md-line-height)] ${type === "highlighted" ? "text-color-dark-1000" : "text-color-dark-750"}`}
          >
            /month
          </div>
        </div>

        <Button
          className="!self-stretch !flex !w-full"
          label="Subscribe"
          showIcon={false}
          size="big"
          stateProp="default"
          type={type === "highlighted" ? "primary" : "secondary"}
        />
      </div>

      <div className="w-full flex self-stretch flex-col items-start gap-3 flex-[0_0_auto] relative">
        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkCheck}
            className="!relative !left-[unset] !top-[unset]"
          />
          <p className="font-body-regular-sm w-fit mt-[-1.00px] tracking-[var(--body-regular-sm-letter-spacing)] text-[length:var(--body-regular-sm-font-size)] [font-style:var(--body-regular-sm-font-style)] text-color-dark-1000 relative font-[number:var(--body-regular-sm-font-weight)] whitespace-nowrap leading-[var(--body-regular-sm-line-height)]">
            {text}
          </p>
        </div>

        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkImg}
            className="!relative !left-[unset] !top-[unset]"
          />
          <div className="font-body-regular-sm w-fit mt-[-1.00px] tracking-[var(--body-regular-sm-letter-spacing)] text-[length:var(--body-regular-sm-font-size)] [font-style:var(--body-regular-sm-font-style)] text-color-dark-1000 relative font-[number:var(--body-regular-sm-font-weight)] whitespace-nowrap leading-[var(--body-regular-sm-line-height)]">
            {text1}
          </div>
        </div>

        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkCheck1}
            className="!relative !left-[unset] !top-[unset]"
          />
          <div className="font-body-regular-sm w-fit mt-[-1.00px] tracking-[var(--body-regular-sm-letter-spacing)] text-[length:var(--body-regular-sm-font-size)] [font-style:var(--body-regular-sm-font-style)] text-color-dark-1000 relative font-[number:var(--body-regular-sm-font-weight)] whitespace-nowrap leading-[var(--body-regular-sm-line-height)]">
            {text2}
          </div>
        </div>

        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkCheck2}
            className="!relative !left-[unset] !top-[unset]"
          />
          <div className="font-body-regular-sm w-fit mt-[-1.00px] tracking-[var(--body-regular-sm-letter-spacing)] text-[length:var(--body-regular-sm-font-size)] [font-style:var(--body-regular-sm-font-style)] text-color-dark-1000 relative font-[number:var(--body-regular-sm-font-weight)] whitespace-nowrap leading-[var(--body-regular-sm-line-height)]">
            {text3}
          </div>
        </div>

        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <Check
            check={checkCheck3}
            className="!relative !left-[unset] !top-[unset]"
          />
          <div className="font-body-regular-sm w-fit mt-[-1.00px] tracking-[var(--body-regular-sm-letter-spacing)] text-[length:var(--body-regular-sm-font-size)] [font-style:var(--body-regular-sm-font-style)] text-color-dark-1000 relative font-[number:var(--body-regular-sm-font-weight)] whitespace-nowrap leading-[var(--body-regular-sm-line-height)]">
            {text4}
          </div>
        </div>
      </div>

      <div
        className={`font-body-regular-xs self-stretch tracking-[var(--body-regular-xs-letter-spacing)] [font-style:var(--body-regular-xs-font-style)] text-[length:var(--body-regular-xs-font-size)] relative font-[number:var(--body-regular-xs-font-weight)] text-center leading-[var(--body-regular-xs-line-height)] ${type === "highlighted" ? "text-color-dark-500" : "text-color-dark-750"}`}
      >
        {type === "default" && <p>{text5}</p>}

        {type === "highlighted" && (
          <p>Ideal for growing businesses and teams</p>
        )}
      </div>
    </div>
  );
};
