"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const NAISS_HOVER_SELECTOR = "[data-naiss-hover]";
const NAISS_HOVER_ZONE_SELECTOR = ".naiss-hover-zone";

export function NaissFinger({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const zone = containerRef.current?.querySelector(NAISS_HOVER_ZONE_SELECTOR);
    if (!zone) return;

    const handleMouseOver = (e: Event) => {
      const target = (e as MouseEvent).target as HTMLElement;
      if (target.closest(NAISS_HOVER_SELECTOR)) {
        setIsHovered(true);
        setIsHiding(false);
      }
    };

    const handleMouseOut = (e: Event) => {
      const relatedTarget = (e as MouseEvent).relatedTarget as HTMLElement | null;
      if (!relatedTarget?.closest(NAISS_HOVER_SELECTOR)) {
        setIsHovered(false);
        setIsHiding(true);
      }
    };

    zone.addEventListener("mouseover", handleMouseOver);
    zone.addEventListener("mouseout", handleMouseOut);
    return () => {
      zone.removeEventListener("mouseover", handleMouseOver);
      zone.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mounted]);

  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (e.animationName === "finger-arc-out") {
      setIsHiding(false);
    }
  };

  const fingerImage = (
    <div
      className={`finger-img fixed bottom-0 right-0 z-0 ${isHovered ? "is-visible" : ""} ${isHiding ? "is-hiding" : ""}`}
      onAnimationEnd={handleAnimationEnd}
      aria-hidden
    >
      <Image
        src="/lucasfinger.png"
        alt=""
        width={320}
        height={410}
        className="h-auto w-56 object-contain object-bottom-right sm:w-64 md:w-72"
        priority
      />
    </div>
  );

  return (
    <>
      {mounted && createPortal(fingerImage, document.body)}
      <div ref={containerRef} className="contents">
        {children}
      </div>
    </>
  );
}
