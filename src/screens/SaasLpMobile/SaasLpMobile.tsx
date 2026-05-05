import React, { useEffect, useState } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Badge } from "../../components/Badge";
import { BrandsLogos } from "../../components/BrandsLogos";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Faq } from "../../components/Faq";
import { FeatureCard } from "../../components/FeatureCard";
import { PlayButton } from "../../components/PlayButton";
import { PricingCard } from "../../components/PricingCard";
import { QuoteSlider } from "../../components/QuoteSlider";
import { SocialMediaIcons } from "../../components/SocialMediaIcons";
import { Toggle } from "../../components/Toggle";
import { VideoModal } from "../../components/VideoModal";

export const SaasLpMobile = (): JSX.Element => {
  const screenWidth = useWindowWidth();
  const [animationsStarted, setAnimationsStarted] = useState(false);
  const [isYearlyPricing, setIsYearlyPricing] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    // Start animations after component mounts
    const timer = setTimeout(() => {
      setAnimationsStarted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Calculate pricing based on toggle state - yearly pricing is 20% lower
  const getPrice = (basePrice: number) => {
    return isYearlyPricing ? Math.round(basePrice * 0.8) : basePrice;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#f7f7f7] relative ${screenWidth < 1036 ? "min-w-[375px]" : (screenWidth >= 1036) ? "min-w-[1036px]" : ""}`}
      data-model-id="4031:1398"
    >
      <div className={`w-full flex self-stretch items-center flex-[0_0_auto] px-6 py-4 justify-between relative transition-all duration-700 ease-out ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <img
          className={`w-[98.25px] object-cover h-6 relative transition-all duration-700 ease-out delay-100 ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          alt="Logo placeholder"
          src={
            screenWidth < 1036
              ? "https://c.animaapp.com/mophdx97y3wpG4/img/logo-placeholder.svg"
              : screenWidth >= 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/logo-placeholder-1.png"
                : undefined
          }
        />

        <div
          className={`relative transition-all duration-700 ease-out delay-200 ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${screenWidth < 1036 ? "w-6" : ""} ${screenWidth >= 1036 ? "inline-flex" : ""} ${screenWidth >= 1036 ? "items-center" : ""} ${screenWidth >= 1036 ? "gap-3" : ""} ${screenWidth >= 1036 ? "flex-[0_0_auto]" : ""} ${screenWidth < 1036 ? "h-6" : ""} ${screenWidth >= 1036 ? "rounded-[20px]" : ""}`}
        >
          {screenWidth < 1036 && (
            <img
              className="absolute w-5 h-3.5 top-[5px] left-0.5"
              alt="Icon"
              src="https://c.animaapp.com/mophdx97y3wpG4/img/icon-8.svg"
            />
          )}

          {screenWidth >= 1036 && (
            <>
              <button className="all-[unset] box-border inline-flex gap-1 px-4 py-0 flex-[0_0_auto] rounded-lg items-center justify-center relative">
                <button className="all-[unset] box-border mt-[-1.00px] text-color-dark-750 text-[length:var(--body-semibold-xs-font-size)] leading-[var(--body-semibold-xs-line-height)] relative w-fit font-body-semibold-xs font-[number:var(--body-semibold-xs-font-weight)] tracking-[var(--body-semibold-xs-letter-spacing)] whitespace-nowrap [font-style:var(--body-semibold-xs-font-style)]">
                  Home
                </button>
              </button>

              <button className="all-[unset] box-border inline-flex gap-1 px-4 py-0 flex-[0_0_auto] rounded-lg items-center justify-center relative">
                <div className="mt-[-1.00px] text-color-dark-750 text-[length:var(--body-semibold-xs-font-size)] leading-[var(--body-semibold-xs-line-height)] relative w-fit font-body-semibold-xs font-[number:var(--body-semibold-xs-font-weight)] tracking-[var(--body-semibold-xs-letter-spacing)] whitespace-nowrap [font-style:var(--body-semibold-xs-font-style)]">
                  Features
                </div>
              </button>

              <button className="all-[unset] box-border inline-flex gap-1 px-4 py-0 flex-[0_0_auto] rounded-lg items-center justify-center relative">
                <div className="mt-[-1.00px] text-color-dark-750 text-[length:var(--body-semibold-xs-font-size)] leading-[var(--body-semibold-xs-line-height)] relative w-fit font-body-semibold-xs font-[number:var(--body-semibold-xs-font-weight)] tracking-[var(--body-semibold-xs-letter-spacing)] whitespace-nowrap [font-style:var(--body-semibold-xs-font-style)]">
                  Pricing
                </div>
              </button>

              <button className="all-[unset] box-border inline-flex h-8 gap-[var(--spacing-spacing-xs-2)] pr-[var(--spacing-spacing-lg)] pl-[var(--spacing-spacing-lg)] py-2.5 flex-[0_0_auto] bg-color-primary-1000 rounded-[var(--spacing-corner-radius-xl-2)] items-center justify-center relative">
                <button className="all-[unset] box-border mt-[-3.00px] mb-[-1.00px] text-color-light-1000 text-[length:var(--body-semibold-xs-font-size)] leading-[var(--body-semibold-xs-line-height)] relative w-fit font-body-semibold-xs font-[number:var(--body-semibold-xs-font-weight)] tracking-[var(--body-semibold-xs-letter-spacing)] whitespace-nowrap [font-style:var(--body-semibold-xs-font-style)]">
                  Get Started
                </button>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="w-full flex self-stretch flex-col items-center gap-[var(--spacing-spacing-3xl)] flex-[0_0_auto] pt-[var(--spacing-spacing-4xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-4xl)] pl-[var(--spacing-spacing-xl)] relative">
        <div className="w-full flex flex-col items-start max-w-[1080px] gap-[42px] flex-[0_0_auto] relative">
          <div
            className={`w-full flex self-stretch flex-col items-center flex-[0_0_auto] relative transition-all duration-800 ease-out delay-300 ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${screenWidth < 1036 ? "gap-8" : (screenWidth >= 1036) ? "gap-[var(--spacing-spacing-xxl)]" : ""}`}
          >
            {screenWidth < 1036 && (
              <div className={`transition-all duration-700 ease-out delay-400 ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Badge
                  inputIconsProperty1="zap"
                  inputIconsPropertyZapSize="https://c.animaapp.com/mophdx97y3wpG4/img/input-icons-1.svg"
                  label="Start Building with AI"
                  labelClassName="!text-color-dark-1000"
                  state="default"
                />
              </div>
            )}

            {screenWidth >= 1036 && (
              <div className={`inline-flex h-8 items-center justify-center gap-[var(--spacing-spacing-xs-2)] pr-[var(--spacing-spacing-m)] pl-[var(--spacing-spacing-m)] py-2 relative bg-color-light-1000 rounded-[var(--spacing-corner-radius-xl-2)] border border-solid border-color-dark-250 transition-all duration-700 ease-out delay-400 ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="relative w-[18px] h-[18px] mt-[-1.00px] mb-[-1.00px]">
                  <img
                    className="absolute w-[15px] h-4 top-px left-0.5"
                    alt="Icon"
                    src="https://c.animaapp.com/mophdx97y3wpG4/img/icon-20.svg"
                  />
                </div>

                <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-regular-xs font-[number:var(--body-regular-xs-font-weight)] text-color-dark-1000 text-[length:var(--body-regular-xs-font-size)] tracking-[var(--body-regular-xs-letter-spacing)] leading-[var(--body-regular-xs-line-height)] whitespace-nowrap [font-style:var(--body-regular-xs-font-style)]">
                    Start Building with AI
                  </div>
                </div>
              </div>
            )}

            <div className={`w-full flex flex-col items-start max-w-[860px] gap-3 flex-[0_0_auto] relative transition-all duration-800 ease-out delay-500 ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p
                className={`self-stretch mt-[-1.00px] text-color-dark-1000 relative text-center transition-all duration-800 ease-out delay-600 ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${screenWidth < 1036 ? "font-headings-h5" : (screenWidth >= 1036) ? "font-headings-h4" : ""} ${screenWidth < 1036 ? "tracking-[var(--headings-h5-letter-spacing)]" : (screenWidth >= 1036) ? "tracking-[var(--headings-h4-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-[length:var(--headings-h5-font-size)]" : (screenWidth >= 1036) ? "text-[length:var(--headings-h4-font-size)]" : ""} ${screenWidth < 1036 ? "[font-style:var(--headings-h5-font-style)]" : (screenWidth >= 1036) ? "[font-style:var(--headings-h4-font-style)]" : ""} ${screenWidth < 1036 ? "font-[number:var(--headings-h5-font-weight)]" : (screenWidth >= 1036) ? "font-[number:var(--headings-h4-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[var(--headings-h5-line-height)]" : (screenWidth >= 1036) ? "leading-[var(--headings-h4-line-height)]" : ""}`}
              >
                Keep Your Team In Sync, Anywhere
              </p>

              <p
                className={`self-stretch text-color-dark-750 text-center relative transition-all duration-800 ease-out delay-700 ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-lg" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-lg-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-lg-font-style)]" : ""} ${screenWidth < 1036 ? "text-[22px]" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-lg-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-lg-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-lg-line-height)]" : ""}`}
              >
                The all-in-one workflow tracker built for remote teams who want
                clarity, accountability, and results — without the chaos
              </p>
            </div>

            <div
              className={`w-full flex self-stretch flex-col items-center flex-[0_0_auto] relative transition-all duration-800 ease-out delay-800 ${animationsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${screenWidth < 1036 ? "gap-6" : (screenWidth >= 1036) ? "gap-[var(--spacing-spacing-xl)]" : ""}`}
            >
              <div className="inline-flex items-center gap-4 flex-[0_0_auto] relative">
                <Button
                  className="!flex-[0_0_auto]"
                  label="Get Started"
                  showIcon={false}
                  size="big"
                  stateProp="default"
                  type="primary"
                />
                <Button
                  className="!flex-[0_0_auto]"
                  icon={
                    screenWidth >= 1036
                      ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-21.svg"
                      : undefined
                  }
                  label="See Demo"
                  size="big"
                  stateProp="default"
                  type="secondary"
                />
              </div>
            </div>
          </div>

          <div
            className={`border-color-primary-100 bg-[50%_50%] relative aspect-[1.78] w-full bg-cover border-[none] self-stretch overflow-hidden before:content-[''] before:[mask-composite:exclude] before:pointer-events-none before:inset-0 before:[background:linear-gradient(90deg,rgba(245,84,66,0.1)_0%,rgba(255,255,255,1)_100%)] before:absolute before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:rounded-3xl before:p-px before:z-[1] before:[-webkit-mask-composite:xor] transition-all duration-1000 ease-out delay-1000 cursor-pointer group ${animationsStarted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} ${screenWidth < 1036 ? "bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/hero-image@2x.png)]" : (screenWidth >= 1036) ? "bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/hero-video.png)]" : ""} ${screenWidth < 1036 ? "rounded-3xl" : (screenWidth >= 1036) ? "rounded-[var(--spacing-corner-radius-xl-2)]" : ""} ${screenWidth >= 1036 ? "bg-color-light-500" : ""}`}
            onClick={() => setIsVideoModalOpen(true)}
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-out z-10 rounded-inherit"></div>
            
            {/* Centered play button */}
            <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-800 ease-out delay-1200 ${animationsStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="transform group-hover:scale-110 transition-transform duration-300 ease-out">
                <PlayButton
                  className="!relative !left-0 !top-0"
                  state="default"
                  stateDefault={
                    screenWidth < 1036
                      ? "https://c.animaapp.com/mophdx97y3wpG4/img/play-button.svg"
                      : screenWidth >= 1036
                        ? "https://c.animaapp.com/mophdx97y3wpG4/img/play-button-1.svg"
                        : undefined
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full flex flex-col items-center max-w-[860px] gap-[var(--spacing-spacing-xxl)] flex-[0_0_auto] relative ${screenWidth >= 1036 ? "pr-[var(--spacing-spacing-xl)] pl-[var(--spacing-spacing-xl)] py-0" : ""}`}
      >
        <div className="w-full flex self-stretch flex-col items-start gap-3 flex-[0_0_auto] relative">
          <div className="[font-family:'Open_Sans',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-base text-color-dark-500 font-normal text-center leading-[normal] relative">
            Trusted by Leading Startups
          </div>
        </div>

        {/* Animated Logo Slider */}
        <div className="w-full overflow-hidden relative">
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            <div className="flex items-center gap-12 min-w-max px-6">
              <BrandsLogos
                brand="bolt"
                className="bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/vector-9.svg)] !w-[55.9px] flex-shrink-0"
              />
              <BrandsLogos
                brand="open-AI"
                className="bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/vector-10.svg)] !w-[97.52px] flex-shrink-0"
              />
              <BrandsLogos
                brand="anthropic"
                className="!h-[15.86px] bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/vector-11.svg)] !w-[141.24px] flex-shrink-0"
              />
              <BrandsLogos
                brand="replit"
                className="!h-[23.81px] bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/vector-12.svg)] !w-[100.72px] flex-shrink-0"
              />
              <BrandsLogos
                brand="anima-logo"
                className="!w-[81.6px] flex-shrink-0"
                vector="https://c.animaapp.com/mophdx97y3wpG4/img/vector-13.svg"
              />
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-12 min-w-max px-6">
              <BrandsLogos
                brand="bolt"
                className="bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/vector-9.svg)] !w-[55.9px] flex-shrink-0"
              />
              <BrandsLogos
                brand="open-AI"
                className="bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/vector-10.svg)] !w-[97.52px] flex-shrink-0"
              />
              <BrandsLogos
                brand="anthropic"
                className="!h-[15.86px] bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/vector-11.svg)] !w-[141.24px] flex-shrink-0"
              />
              <BrandsLogos
                brand="replit"
                className="!h-[23.81px] bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/vector-12.svg)] !w-[100.72px] flex-shrink-0"
              />
              <BrandsLogos
                brand="anima-logo"
                className="!w-[81.6px] flex-shrink-0"
                vector="https://c.animaapp.com/mophdx97y3wpG4/img/vector-13.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center max-w-[1080px] gap-[var(--spacing-spacing-3xl)] flex-[0_0_auto] pt-[var(--spacing-spacing-4xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-4xl)] pl-[var(--spacing-spacing-xl)] relative">
        <div className="w-full flex flex-col items-center max-w-[1080px] gap-6 flex-[0_0_auto] px-6 py-0 relative">
          <Badge
            label="Features"
            labelClassName="!text-color-dark-1000"
            showIcon={false}
            state="default"
          />
          <div className="w-full flex flex-col items-start max-w-[860px] gap-3 flex-[0_0_auto] relative">
            <div className="w-full flex self-stretch flex-col items-start gap-3 flex-[0_0_auto] relative">
              <p
                className={`self-stretch mt-[-1.00px] relative text-color-dark-1000 text-center ${screenWidth < 1036 ? "font-headings-h6" : (screenWidth >= 1036) ? "font-headings-h5" : ""} ${screenWidth < 1036 ? "tracking-[var(--headings-h6-letter-spacing)]" : (screenWidth >= 1036) ? "tracking-[var(--headings-h5-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-[length:var(--headings-h6-font-size)]" : (screenWidth >= 1036) ? "text-[length:var(--headings-h5-font-size)]" : ""} ${screenWidth < 1036 ? "[font-style:var(--headings-h6-font-style)]" : (screenWidth >= 1036) ? "[font-style:var(--headings-h5-font-style)]" : ""} ${screenWidth < 1036 ? "font-[number:var(--headings-h6-font-weight)]" : (screenWidth >= 1036) ? "font-[number:var(--headings-h5-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[var(--headings-h6-line-height)]" : (screenWidth >= 1036) ? "leading-[var(--headings-h5-line-height)]" : ""}`}
              >
                Endorsed by teams just like yours
              </p>
            </div>

            <p
              className={`self-stretch text-color-dark-750 relative text-center ${screenWidth < 1036 ? "font-body-regular-md" : (screenWidth >= 1036) ? "font-body-regular-lg" : ""} ${screenWidth < 1036 ? "tracking-[var(--body-regular-md-letter-spacing)]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-lg-letter-spacing)]" : ""} ${screenWidth < 1036 ? "[font-style:var(--body-regular-md-font-style)]" : (screenWidth >= 1036) ? "[font-style:var(--body-regular-lg-font-style)]" : ""} ${screenWidth < 1036 ? "text-[length:var(--body-regular-md-font-size)]" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-lg-font-size)]" : ""} ${screenWidth < 1036 ? "font-[number:var(--body-regular-md-font-weight)]" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-lg-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[var(--body-regular-md-line-height)]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-lg-line-height)]" : ""}`}
            >
              Over 5,000 teams collaborating effectively
            </p>
          </div>
        </div>

        <div className="w-full flex self-stretch flex-col items-start gap-[var(--spacing-spacing-lg)] flex-[0_0_auto] relative">
          <div className="w-full flex flex-wrap self-stretch items-start gap-[12px_12px] flex-[0_0_auto] justify-center relative">
            {screenWidth < 1036 && (
              <FeatureCard
                className="!flex-1 !grow !min-w-[280px] !w-[unset]"
                imagePlaceholder="https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-1.svg"
              />
            )}

            <FeatureCard
              className={
                screenWidth < 1036
                  ? "!flex-1 !grow !min-w-[280px] !w-[unset]"
                  : screenWidth >= 1036
                    ? "!flex-1 !min-w-[280px] !w-[unset] !grow"
                    : undefined
              }
              imagePlaceholder={
                screenWidth < 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-2.svg"
                  : screenWidth >= 1036
                    ? "https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-6.svg"
                    : undefined
              }
              text={
                screenWidth < 1036
                  ? "Real-Time Collaboration"
                  : screenWidth >= 1036
                    ? "Integration Ecosystem"
                    : undefined
              }
              text1={
                screenWidth < 1036
                  ? "Work together seamlessly from anywhere. Share updates, assign tasks, and keep everyone on the same page in real time"
                  : screenWidth >= 1036
                    ? "Automate tasks, generate insights, and assist your team with a powerful AI agent designed to adapt to your needs."
                    : undefined
              }
            />
            <FeatureCard
              className={
                screenWidth >= 1036
                  ? "!flex-1 !min-w-[280px] !w-[unset] !grow"
                  : screenWidth < 1036
                    ? "!flex-1 !grow !min-w-[280px] !w-[unset]"
                    : undefined
              }
              imagePlaceholder={
                screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-7.svg"
                  : screenWidth < 1036
                    ? "https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-3.svg"
                    : undefined
              }
              text={
                screenWidth >= 1036
                  ? "Real-Time Collaboration"
                  : screenWidth < 1036
                    ? "Streamline Your Workflow"
                    : undefined
              }
              text1={
                screenWidth >= 1036
                  ? "Work together seamlessly from anywhere. Share updates, assign tasks, and keep everyone on the same page in real time"
                  : screenWidth < 1036
                    ? "Automate repetitive tasks and focus on what really matters. Our intuitive tools help your team save hours every week."
                    : undefined
              }
            />
            <FeatureCard
              className={
                screenWidth >= 1036
                  ? "!flex-1 !min-w-[280px] !w-[unset] !grow"
                  : screenWidth < 1036
                    ? "!flex-1 !grow !min-w-[280px] !w-[unset]"
                    : undefined
              }
              imagePlaceholder={
                screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-8.svg"
                  : screenWidth < 1036
                    ? "https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-4.svg"
                    : undefined
              }
              text={
                screenWidth >= 1036
                  ? "Streamline Your Workflow"
                  : screenWidth < 1036
                    ? "Scalable &amp; Flexible"
                    : undefined
              }
              text1={
                screenWidth >= 1036
                  ? "Automate repetitive tasks and focus on what really matters. Our intuitive tools help your team save hours every week."
                  : screenWidth < 1036
                    ? "Grow your business without limits. Our platform adapts to your needs — whether you’re a startup or an enterprise."
                    : undefined
              }
            />

            {screenWidth < 1036 && (
              <FeatureCard
                className="!flex-1 !grow !min-w-[280px] !w-[unset]"
                imagePlaceholder="https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-5.svg"
                text="Enterprise-Grade Security"
                text1="Keep your data safe with industry-leading encryption and compliance standards. Trust and privacy come first."
              />
            )}
          </div>

          {screenWidth >= 1036 && (
            <div className="flex flex-wrap items-start justify-center gap-[12px_12px] relative self-stretch w-full flex-[0_0_auto]">
              <FeatureCard
                className="!flex-1 !min-w-[280px] !w-[unset] !grow"
                imagePlaceholder="https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-9.svg"
                text="Scalable &amp; Flexible"
                text1="Grow your business without limits. Our platform adapts to your needs — whether you’re a startup or an enterprise."
              />
              <FeatureCard
                className="!flex-1 !min-w-[280px] !w-[unset] !grow"
                imagePlaceholder="https://c.animaapp.com/mophdx97y3wpG4/img/image-placeholder-10.svg"
                text="Enterprise-Grade Security"
                text1="Keep your data safe with industry-leading encryption and compliance standards. Trust and privacy come first."
              />
            </div>
          )}
        </div>
      </div>

      <div
        className={`w-full flex flex-col items-center max-w-[860px] gap-[42px] flex-[0_0_auto] pt-[var(--spacing-spacing-3xl)] pb-[var(--spacing-spacing-4xl)] px-0 relative ${screenWidth < 1036 ? "overflow-hidden" : ""}`}
      >
        <div className="w-full flex flex-col items-center max-w-[1080px] gap-6 flex-[0_0_auto] px-6 py-0 relative">
          <Badge
            label="Feedback"
            labelClassName="!text-color-dark-1000"
            showIcon={false}
            state="default"
          />
          <div className="w-full flex flex-col items-start max-w-[860px] gap-3 flex-[0_0_auto] relative">
            <div className="w-full flex self-stretch flex-col items-start gap-3 flex-[0_0_auto] relative">
              <p
                className={`self-stretch mt-[-1.00px] relative text-color-dark-1000 text-center ${screenWidth < 1036 ? "font-headings-h6" : (screenWidth >= 1036) ? "font-headings-h5" : ""} ${screenWidth < 1036 ? "tracking-[var(--headings-h6-letter-spacing)]" : (screenWidth >= 1036) ? "tracking-[var(--headings-h5-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-[length:var(--headings-h6-font-size)]" : (screenWidth >= 1036) ? "text-[length:var(--headings-h5-font-size)]" : ""} ${screenWidth < 1036 ? "[font-style:var(--headings-h6-font-style)]" : (screenWidth >= 1036) ? "[font-style:var(--headings-h5-font-style)]" : ""} ${screenWidth < 1036 ? "font-[number:var(--headings-h6-font-weight)]" : (screenWidth >= 1036) ? "font-[number:var(--headings-h5-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[var(--headings-h6-line-height)]" : (screenWidth >= 1036) ? "leading-[var(--headings-h5-line-height)]" : ""}`}
              >
                Trusted by teams like yours
              </p>
            </div>

            <p
              className={`self-stretch text-color-dark-750 relative text-center ${screenWidth < 1036 ? "font-body-regular-md" : (screenWidth >= 1036) ? "font-body-regular-lg" : ""} ${screenWidth < 1036 ? "tracking-[var(--body-regular-md-letter-spacing)]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-lg-letter-spacing)]" : ""} ${screenWidth < 1036 ? "[font-style:var(--body-regular-md-font-style)]" : (screenWidth >= 1036) ? "[font-style:var(--body-regular-lg-font-style)]" : ""} ${screenWidth < 1036 ? "text-[length:var(--body-regular-md-font-size)]" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-lg-font-size)]" : ""} ${screenWidth < 1036 ? "font-[number:var(--body-regular-md-font-weight)]" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-lg-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[var(--body-regular-md-line-height)]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-lg-line-height)]" : ""}`}
            >
              5,000+ teams who get more done together
            </p>
          </div>
        </div>

        <QuoteSlider className={`${screenWidth < 1036 ? "mr-[-242.50px] ml-[-242.50px]" : ""}`} />
      </div>

      <div
        className={`w-full flex flex-col items-center max-w-[1080px] flex-[0_0_auto] relative ${screenWidth < 1036 ? "gap-[42px]" : (screenWidth >= 1036) ? "gap-[var(--spacing-spacing-3xl)]" : ""} ${screenWidth < 1036 ? "pt-[var(--spacing-spacing-3xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-4xl)] pl-[var(--spacing-spacing-xl)]" : (screenWidth >= 1036) ? "pt-[42px] pb-20 px-6" : ""}`}
      >
        <div className="w-full flex self-stretch flex-col items-center gap-6 flex-[0_0_auto] relative">
          <Badge
            label="Boost your productivity"
            labelClassName="!text-color-dark-1000"
            showIcon={false}
            state="default"
          />
          <div
            className={`relative text-color-dark-1000 text-center ${screenWidth < 1036 ? "font-headings-h6" : (screenWidth >= 1036) ? "font-headings-h5" : ""} ${screenWidth < 1036 ? "tracking-[var(--headings-h6-letter-spacing)]" : (screenWidth >= 1036) ? "tracking-[var(--headings-h5-letter-spacing)]" : ""} ${screenWidth < 1036 ? "[font-style:var(--headings-h6-font-style)]" : (screenWidth >= 1036) ? "[font-style:var(--headings-h5-font-style)]" : ""} ${screenWidth < 1036 ? "text-[length:var(--headings-h6-font-size)]" : (screenWidth >= 1036) ? "text-[length:var(--headings-h5-font-size)]" : ""} ${screenWidth < 1036 ? "font-[number:var(--headings-h6-font-weight)]" : (screenWidth >= 1036) ? "font-[number:var(--headings-h5-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[var(--headings-h6-line-height)]" : (screenWidth >= 1036) ? "leading-[var(--headings-h5-line-height)]" : ""}`}
          >
            Simple &amp; Transparent Pricing
          </div>

          <div className="w-full flex self-stretch items-center gap-3 flex-[0_0_auto] justify-center relative">
            <div
              className={`w-fit mt-[-1.00px] text-color-dark-750 text-center relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-md" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-md-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-lg" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-md-font-size)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-md-font-style)]" : ""} ${screenWidth < 1036 ? "font-semibold" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-md-font-weight)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-md-line-height)]" : ""}`}
            >
              Monthly
            </div>

            <Toggle
              className="!w-[42.35px]"
              frameClassName="!bg-color-light-1000"
              stateProp={isYearlyPricing ? "on" : "off"}
              onClick={() => setIsYearlyPricing(!isYearlyPricing)}
            />
            <div
              className={`w-fit mt-[-1.00px] text-color-dark-750 text-center relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-md" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-md-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-lg" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-md-font-size)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-md-font-style)]" : ""} ${screenWidth < 1036 ? "font-semibold" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-md-font-weight)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-md-line-height)]" : ""}`}
            >
              Yearly
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap self-stretch items-start gap-[var(--spacing-spacing-m)] flex-[0_0_auto] relative">
          <PricingCard
            checkCheck={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-29.svg"
                  : undefined
            }
            checkCheck1={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-29.svg"
                  : undefined
            }
            checkCheck2={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-29.svg"
                  : undefined
            }
            checkCheck3={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-29.svg"
                  : undefined
            }
            checkImg={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-29.svg"
                  : undefined
            }
            className="!flex-1 !grow !min-w-[280px] !w-[unset]"
            text="1 user"
            text1="Basic features"
            text2="Email support"
            text3="Secure cloud storage"
            text4="Access to community forum"
            text5="Perfect for individuals getting started."
            text6={screenWidth >= 1036 ? "Basic" : undefined}
            text7={screenWidth >= 1036 ? `$${getPrice(19)}` : undefined}
            type="default"
          />
          <PricingCard
            checkCheck={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-34.svg"
                  : undefined
            }
            checkCheck1={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-34.svg"
                  : undefined
            }
            checkCheck2={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-34.svg"
                  : undefined
            }
            checkCheck3={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-34.svg"
                  : undefined
            }
            checkImg={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-34.svg"
                  : undefined
            }
            className="!flex-1 !grow !min-w-[280px] !w-[unset]"
            icon={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-15.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-27.svg"
                  : undefined
            }
            text="Up to 5 project members"
            text1="Unlimited tasks and projects"
            text2="2GB storage"
            text3="Integrations"
            text4="Basic support"
            type="highlighted"
            customPrice={`$${getPrice(49)}`}
          />
          <PricingCard
            checkCheck={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-39.svg"
                  : undefined
            }
            checkCheck1={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-39.svg"
                  : undefined
            }
            checkCheck2={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-39.svg"
                  : undefined
            }
            checkCheck3={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-39.svg"
                  : undefined
            }
            checkImg={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-24.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/checkmark-39.svg"
                  : undefined
            }
            className="!flex-1 !grow !min-w-[280px] !w-[unset]"
            text="Unlimited users"
            text1="Dedicated success manager"
            text2="Custom integrations"
            text3="SLA &amp; uptime guarantee"
            text4="Premium onboarding &amp; training"
            text5="Right choice for large organizations."
            text6="Enterprise"
            text7={`$${getPrice(89)}`}
            type="default"
          />
        </div>
      </div>

      <div
        className={`w-full flex flex-col items-center gap-[var(--spacing-spacing-3xl)] flex-[0_0_auto] pt-[var(--spacing-spacing-3xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-4xl)] pl-[var(--spacing-spacing-xl)] relative ${screenWidth < 1036 ? "self-stretch" : ""} ${screenWidth >= 1036 ? "max-w-[1080px]" : ""}`}
      >
        <div className="w-full flex flex-col items-center max-w-[1080px] gap-6 flex-[0_0_auto] px-6 py-0 relative">
          <Badge
            label="FAQ"
            labelClassName="!text-color-dark-1000"
            showIcon={false}
            state="default"
          />
          <div className="w-full flex flex-col items-start max-w-[860px] gap-3 flex-[0_0_auto] relative">
            <div className="w-full flex self-stretch flex-col items-start gap-3 flex-[0_0_auto] relative">
              <div
                className={`self-stretch mt-[-1.00px] relative text-color-dark-1000 text-center ${screenWidth < 1036 ? "font-headings-h6" : (screenWidth >= 1036) ? "font-headings-h5" : ""} ${screenWidth < 1036 ? "tracking-[var(--headings-h6-letter-spacing)]" : (screenWidth >= 1036) ? "tracking-[var(--headings-h5-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-[length:var(--headings-h6-font-size)]" : (screenWidth >= 1036) ? "text-[length:var(--headings-h5-font-size)]" : ""} ${screenWidth < 1036 ? "[font-style:var(--headings-h6-font-style)]" : (screenWidth >= 1036) ? "[font-style:var(--headings-h5-font-style)]" : ""} ${screenWidth < 1036 ? "font-[number:var(--headings-h6-font-weight)]" : (screenWidth >= 1036) ? "font-[number:var(--headings-h5-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[var(--headings-h6-line-height)]" : (screenWidth >= 1036) ? "leading-[var(--headings-h5-line-height)]" : ""}`}
              >
                Frequently asked questions
              </div>
            </div>

            <p
              className={`self-stretch text-color-dark-750 relative text-center ${screenWidth < 1036 ? "font-body-regular-md" : (screenWidth >= 1036) ? "font-body-regular-lg" : ""} ${screenWidth < 1036 ? "tracking-[var(--body-regular-md-letter-spacing)]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-lg-letter-spacing)]" : ""} ${screenWidth < 1036 ? "[font-style:var(--body-regular-md-font-style)]" : (screenWidth >= 1036) ? "[font-style:var(--body-regular-lg-font-style)]" : ""} ${screenWidth < 1036 ? "text-[length:var(--body-regular-md-font-size)]" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-lg-font-size)]" : ""} ${screenWidth < 1036 ? "font-[number:var(--body-regular-md-font-weight)]" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-lg-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[var(--body-regular-md-line-height)]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-lg-line-height)]" : ""}`}
            >
              Discover what our customers are saying.
            </p>
          </div>
        </div>

        <div
          className={`w-full flex flex-col items-center max-w-[860px] flex-[0_0_auto] relative ${screenWidth < 1036 ? "gap-2" : (screenWidth >= 1036) ? "gap-[var(--spacing-spacing-sm-2)]" : ""}`}
        >
          <Faq
            className="!self-stretch !flex-[0_0_auto] !min-w-[280px] !w-full"
            icon={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-19.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-31.svg"
                  : undefined
            }
            stateProp="closed"
            text="How does the free trial work?"
          />
          <Faq
            className="!self-stretch !flex-[0_0_auto] !min-w-[280px] !w-full"
            icon={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-19.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-31.svg"
                  : undefined
            }
            stateProp="closed"
            text="Can I cancel anytime?"
          />
          <Faq
            className="!self-stretch !flex-[0_0_auto] !min-w-[280px] !w-full"
            icon={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-19.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-31.svg"
                  : undefined
            }
            stateProp="closed"
            text="Do you offer support?"
          />
          <Faq
            className="!self-stretch !flex-[0_0_auto] !min-w-[280px] !w-full"
            icon={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-19.svg"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-31.svg"
                  : undefined
            }
            stateProp="closed"
            text="Is my data safe?"
          />
        </div>

        <p className="[font-family:'Open_Sans',Helvetica] self-stretch tracking-[0] text-base text-color-dark-750 font-normal text-center leading-[normal] relative">
          Still have questions? Contact us.
        </p>
      </div>

      <div
        className={`w-full flex self-stretch flex-col items-center gap-[42px] flex-[0_0_auto] pt-[var(--spacing-spacing-3xl)] pr-[var(--spacing-spacing-xl)] pb-[var(--spacing-spacing-4xl)] pl-[var(--spacing-spacing-xl)] relative ${screenWidth >= 1036 ? "overflow-hidden" : ""} ${screenWidth >= 1036 ? "rounded-3xl" : ""}`}
      >
        <div
          className={`border border-solid border-color-primary-1000 w-full flex flex-col items-center max-w-[1080px] flex-[0_0_auto] rounded-3xl relative ${screenWidth < 1036 ? "bg-[linear-gradient(180deg,rgba(245,84,66,0)_0%,rgba(245,84,66,0.3)_100%)]" : ""} ${screenWidth < 1036 ? "gap-8" : (screenWidth >= 1036) ? "gap-[var(--spacing-spacing-xxl)]" : ""} ${screenWidth < 1036 ? "px-6 py-[120px]" : (screenWidth >= 1036) ? "pr-[var(--spacing-spacing-xl)] pl-[var(--spacing-spacing-xl)] py-[120px]" : ""} ${screenWidth >= 1036 ? "bg-color-primary-100" : ""}`}
        >
          <div className="w-full flex flex-col items-start max-w-[860px] gap-3 flex-[0_0_auto] relative">
            <p className="font-headings-h5 self-stretch mt-[-1.00px] tracking-[var(--headings-h5-letter-spacing)] text-[length:var(--headings-h5-font-size)] [font-style:var(--headings-h5-font-style)] text-color-dark-1000 relative font-[number:var(--headings-h5-font-weight)] text-center leading-[var(--headings-h5-line-height)]">
              Start your free trial today.
            </p>

            <p
              className={`self-stretch text-color-dark-1000 text-center relative ${screenWidth < 1036 ? "font-body-regular-md" : (screenWidth >= 1036) ? "font-body-regular-lg" : ""} ${screenWidth < 1036 ? "tracking-[var(--body-regular-md-letter-spacing)]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-lg-letter-spacing)]" : ""} ${screenWidth < 1036 ? "[font-style:var(--body-regular-md-font-style)]" : (screenWidth >= 1036) ? "[font-style:var(--body-regular-lg-font-style)]" : ""} ${screenWidth < 1036 ? "text-[length:var(--body-regular-md-font-size)]" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-lg-font-size)]" : ""} ${screenWidth < 1036 ? "font-[number:var(--body-regular-md-font-weight)]" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-lg-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[var(--body-regular-md-line-height)]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-lg-line-height)]" : ""}`}
            >
              Start your 7-day free trial. No credit card required.
            </p>
          </div>

          <div className="w-full flex self-stretch flex-col items-center gap-6 flex-[0_0_auto] relative">
            <Button
              label="Get Started"
              showIcon={false}
              size="big"
              stateProp="default"
              type="secondary"
            />
          </div>

          <img
            className={`aspect-[0.67] object-cover h-[393px] absolute animate-float-rotate ${screenWidth < 1036 ? "w-64" : (screenWidth >= 1036) ? "w-[262px]" : ""} ${screenWidth < 1036 ? "right-[-50px]" : (screenWidth >= 1036) ? "right-[-80px]" : ""} ${screenWidth < 1036 ? "top-[222px]" : (screenWidth >= 1036) ? "top-[76px]" : ""}`}
            alt="Right image"
            src={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/right-image.png"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/right-image-1.png"
                  : undefined
            }
          />

          <img
            className={`aspect-[0.67] object-cover h-64 absolute animate-gentle-float ${screenWidth < 1036 ? "w-[169px]" : (screenWidth >= 1036) ? "w-[171px]" : ""} ${screenWidth < 1036 ? "-left-6" : (screenWidth >= 1036) ? "left-0" : ""} ${screenWidth < 1036 ? "top-[-87px]" : (screenWidth >= 1036) ? "-top-2" : ""}`}
            alt="Left image"
            src={
              screenWidth < 1036
                ? "https://c.animaapp.com/mophdx97y3wpG4/img/left-image.png"
                : screenWidth >= 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/left-image-1.png"
                  : undefined
            }
          />
        </div>
      </div>

      <div
        className={`w-full flex self-stretch items-start flex-[0_0_auto] justify-center bg-color-dark-1000 relative ${screenWidth >= 1036 ? "flex-wrap" : ""} ${screenWidth < 1036 ? "gap-[512px]" : (screenWidth >= 1036) ? "gap-[32px_462px]" : ""} ${screenWidth < 1036 ? "pt-[var(--spacing-spacing-3xl)] pr-[var(--spacing-spacing-3xl)] pb-[var(--spacing-spacing-3xl)] pl-[var(--spacing-spacing-3xl)]" : (screenWidth >= 1036) ? "p-[42px]" : ""}`}
      >
        <div
          className={`flex items-start grow max-w-[1080px] flex-1 relative ${screenWidth < 1036 ? "flex-col" : ""} ${screenWidth < 1036 ? "gap-[var(--spacing-spacing-xxl)]" : ""} ${screenWidth >= 1036 ? "justify-between" : ""}`}
        >
          <div className="inline-flex flex-col items-start gap-[42px] flex-[0_0_auto] relative">
            <div className="inline-flex flex-col items-start gap-5 flex-[0_0_auto] relative">
              <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] p-2 rounded-lg bg-color-light-50 relative">
                <div className="w-6 h-6 relative">
                  <img
                    className="w-5 left-0.5 top-0.5 object-cover h-5 absolute"
                    alt="Vector"
                    src={
                      screenWidth < 1036
                        ? "https://c.animaapp.com/mophdx97y3wpG4/img/vector-8.svg"
                        : screenWidth >= 1036
                          ? "https://c.animaapp.com/mophdx97y3wpG4/img/vector-14.svg"
                          : undefined
                    }
                  />
                </div>
              </div>

              <div
                className={`w-60 text-color-light-1000 relative ${screenWidth < 1036 ? "[font-family:'DM_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-lg" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-lg-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-lg-font-style)]" : ""} ${screenWidth < 1036 ? "text-xl" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-lg-font-size)]" : ""} ${screenWidth < 1036 ? "font-semibold" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-lg-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-lg-line-height)]" : ""}`}
              >
                Spotlight
              </div>

              <p
                className={`w-60 text-color-light-500 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""}`}
              >
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website.
              </p>
            </div>

            <div className="inline-flex items-start gap-4 flex-[0_0_auto] relative">
              <SocialMediaIcons
                brand="instagram"
                className={
                  screenWidth < 1036
                    ? "bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/logo.svg)] !relative !bg-[100%_100%] !left-[unset] !w-[17.99px] !top-[unset]"
                    : screenWidth >= 1036
                      ? "bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/logo-4.svg)] !relative !bg-[100%_100%] !left-[unset] !w-[17.99px] !top-[unset]"
                      : undefined
                }
                color="monochrome"
                size="medium"
              />
              <SocialMediaIcons
                brand="linked-in"
                className={
                  screenWidth < 1036
                    ? "bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/logo-1.svg)] !relative !bg-[100%_100%] !left-[unset] !top-[unset]"
                    : screenWidth >= 1036
                      ? "bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/logo-5.svg)] !relative !bg-[100%_100%] !left-[unset] !top-[unset]"
                      : undefined
                }
                color="monochrome"
                size="medium"
              />
              <SocialMediaIcons
                brand="github"
                className={
                  screenWidth < 1036
                    ? "!h-[17.7px] bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/logo-2.svg)] !relative !bg-[100%_100%] !left-[unset] !top-[unset]"
                    : screenWidth >= 1036
                      ? "!h-[17.7px] bg-[url(https://c.animaapp.com/mophdx97y3wpG4/img/logo-6.svg)] !relative !bg-[100%_100%] !left-[unset] !top-[unset]"
                      : undefined
                }
                color="monochrome"
                size="medium"
              />
              <div className="w-[18px] h-[18px] relative">
                <img
                  className="w-4 left-px top-px h-[15px] absolute"
                  alt="Logo"
                  src={
                    screenWidth < 1036
                      ? "https://c.animaapp.com/mophdx97y3wpG4/img/logo-3.svg"
                      : screenWidth >= 1036
                        ? "https://c.animaapp.com/mophdx97y3wpG4/img/logo-7.svg"
                        : undefined
                  }
                />
              </div>
            </div>
          </div>

          <div
            className={`inline-flex items-start flex-[0_0_auto] relative ${screenWidth < 1036 ? "flex-col" : ""} ${screenWidth < 1036 ? "gap-[var(--spacing-spacing-3xl)]" : (screenWidth >= 1036) ? "gap-12" : ""} ${screenWidth >= 1036 ? "justify-end" : ""}`}
          >
            <div className="inline-flex flex-col items-start gap-5 flex-[0_0_auto] relative">
              <div
                className={`w-fit mt-[-1.00px] text-color-light-1000 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-semibold-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-semibold-xs-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-semibold-xs-font-size)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-semibold-xs-font-style)]" : ""} ${screenWidth < 1036 ? "font-bold" : (screenWidth >= 1036) ? "font-[number:var(--body-semibold-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-semibold-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Product
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Features
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Integrations
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Updates
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                FAQ
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Pricing
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-5 flex-[0_0_auto] relative">
              <div
                className={`w-fit mt-[-1.00px] text-color-light-1000 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-semibold-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-semibold-xs-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-semibold-xs-font-size)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-semibold-xs-font-style)]" : ""} ${screenWidth < 1036 ? "font-bold" : (screenWidth >= 1036) ? "font-[number:var(--body-semibold-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-semibold-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Company
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                About
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Blog
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Careers
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Manifesto
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Contact
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-5 flex-[0_0_auto] relative">
              <div
                className={`w-fit mt-[-1.00px] text-color-light-1000 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-semibold-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-semibold-xs-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-semibold-xs-font-size)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-semibold-xs-font-style)]" : ""} ${screenWidth < 1036 ? "font-bold" : (screenWidth >= 1036) ? "font-[number:var(--body-semibold-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-semibold-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Resources
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Examples
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Community
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Guides
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Docs
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-5 flex-[0_0_auto] relative">
              <div
                className={`w-fit mt-[-1.00px] text-color-light-1000 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-semibold-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-semibold-xs-letter-spacing)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-semibold-xs-font-size)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-semibold-xs-font-style)]" : ""} ${screenWidth < 1036 ? "font-bold" : (screenWidth >= 1036) ? "font-[number:var(--body-semibold-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-semibold-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Legal
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Privacy
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Terms
              </div>

              <div
                className={`w-fit text-color-light-250 relative ${screenWidth < 1036 ? "[font-family:'Open_Sans',Helvetica]" : (screenWidth >= 1036) ? "font-body-regular-xs" : ""} ${screenWidth < 1036 ? "tracking-[0]" : (screenWidth >= 1036) ? "tracking-[var(--body-regular-xs-letter-spacing)]" : ""} ${screenWidth >= 1036 ? "[font-style:var(--body-regular-xs-font-style)]" : ""} ${screenWidth < 1036 ? "text-sm" : (screenWidth >= 1036) ? "text-[length:var(--body-regular-xs-font-size)]" : ""} ${screenWidth < 1036 ? "font-normal" : (screenWidth >= 1036) ? "font-[number:var(--body-regular-xs-font-weight)]" : ""} ${screenWidth < 1036 ? "leading-[normal]" : (screenWidth >= 1036) ? "leading-[var(--body-regular-xs-line-height)]" : ""} ${screenWidth >= 1036 ? "whitespace-nowrap" : ""}`}
              >
                Security
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://youtu.be/M3pxgMJVeZc?si=Jkxs6bKj2lHzW4lF"
      />
    </div>
  );
};
