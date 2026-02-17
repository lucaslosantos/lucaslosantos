"use client";

import { RoughNotation } from "react-rough-notation";

const BRAND_COLOR = "#03E888";

export function UnderlinedTitle() {
  return (
    <RoughNotation
      type="underline"
      color={BRAND_COLOR}
      strokeWidth={2}
      padding={4}
      show
      animate
      animationDuration={800}
    >
      <span className="text-2xl font-bold tracking-tight text-gray-600 sm:text-3xl dark:text-gray-400">
        product. builder. obsessed.
      </span>
    </RoughNotation>
  );
}
