import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

type Props = {
  animationPath: string;
  className?: string;
};

const GreetingLottie = ({ animationPath, className }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div className={className} onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;