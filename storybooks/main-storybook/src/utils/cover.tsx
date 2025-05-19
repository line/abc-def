import React from "react";

import CoverDark from "../assets/cover-dark.png";
import CoverLight from "../assets/cover-light.png";
import LogoDark from "../assets/logo-dark.mp4";
import LogoLight from "../assets/logo-light.mp4";

const mediaClass =
  "absolute top-0 left-1/2 w-[6.05%] max-w-16 -translate-x-1/2 translate-y-[70%]";
const containerClass = "absolute top-0 left-0";

const MediaBlock = ({
  imgSrc,
  videoSrc,
  percentage,
}: {
  imgSrc: string;
  videoSrc: string;
  percentage?: number;
}) => (
  <div
    className={containerClass}
    style={{
      clipPath:
        percentage !== undefined ? `inset(0 -50% 0% ${percentage}%)` : "",
    }}
  >
    <img src={imgSrc} alt="" />
    <video
      width="112"
      height="112"
      className={mediaClass}
      muted
      autoPlay
      playsInline
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  </div>
);

const DEFAULT_PERCENTAGE = 50;

const Cover = () => {
  const [percentage, setPercentage] = React.useState(DEFAULT_PERCENTAGE);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const adjustedPercentage = Math.min(
      Math.max((x / rect.width) * 100, 0),
      100,
    );
    setPercentage(adjustedPercentage);
  };

  const handleMouseLeave = () => {
    const currentPercentage = percentage;
    countToSpecificNumber(Math.floor(currentPercentage), DEFAULT_PERCENTAGE);
  };

  function countToSpecificNumber(current: number, specific: number) {
    let interval: NodeJS.Timeout;
    const timer = 5;

    if (current < specific) {
      interval = setInterval(() => {
        setPercentage(current);
        if (current === specific) {
          clearInterval(interval);
        }
        current++;
      }, timer);
    } else if (current > specific) {
      interval = setInterval(() => {
        setPercentage(current);
        if (current === specific) {
          clearInterval(interval);
        }
        current--;
      }, timer);
    }

    return () => clearTimeout(interval);
  }

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <MediaBlock imgSrc={CoverLight} videoSrc={LogoLight} />
      <MediaBlock
        imgSrc={CoverDark}
        videoSrc={LogoDark}
        percentage={percentage}
      />
    </div>
  );
};

export default Cover;
