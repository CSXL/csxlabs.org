"use client";

import React from "react";
import Link from "next/link";

interface StreamingRulerProps {
  position: "top" | "bottom" | "left" | "right";
  news: Array<{ text: string; link: string }>;
  animationDuration?: string;
  direction: "left" | "right" | "up" | "down";
}

export const StreamingRuler: React.FC<StreamingRulerProps> = ({
  position,
  news,
  animationDuration = "30s",
  direction
}) => {
  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return "fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-400 h-8";
      case "bottom":
        return "fixed bottom-0 left-0 right-0 z-40 bg-neutral-950 border-t border-neutral-400 h-8";
      case "left":
        return "fixed left-0 top-8 bottom-8 w-8 bg-neutral-950 border-r border-neutral-400 z-30";
      case "right":
        return "fixed right-0 top-8 bottom-8 w-8 bg-neutral-950 border-l border-neutral-400 z-30";
      default:
        return "";
    }
  };

  const getAnimationClass = () => {
    switch (direction) {
      case "left":
        return `animate-[marquee_${animationDuration}_linear_infinite]`;
      case "right":
        return `animate-[marquee-reverse_${animationDuration}_linear_infinite]`;
      case "up":
        return `animate-[marquee-up_${animationDuration}_linear_infinite]`;
      case "down":
        return `animate-[marquee-down_${animationDuration}_linear_infinite]`;
      default:
        return "";
    }
  };

  const getContentLayout = () => {
    if (position === "left" || position === "right") {
      return (
        <div className="overflow-hidden h-full flex items-center justify-center">
          <div className={`flex flex-col whitespace-nowrap ${getAnimationClass()} group-hover:[animation-play-state:paused]`}>
            {[...news, ...news].map((item, index) => (
              <Link 
                key={index} 
                href={item.link} 
                className={`text-xs font-mono text-neutral-50 hover:text-white my-4 ${
                  position === "left" ? "[writing-mode:vertical-lr]" : "[writing-mode:vertical-rl]"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="overflow-hidden h-full">
        <div className={`flex items-center h-full whitespace-nowrap ${getAnimationClass()} group-hover:[animation-play-state:paused]`}>
          {[...news, ...news].map((item, index) => (
            <Link 
              key={index} 
              href={item.link} 
              className="text-xs font-mono text-neutral-50 hover:text-white mx-4"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`${getPositionStyles()} group`}>
      {getContentLayout()}
    </div>
  );
};