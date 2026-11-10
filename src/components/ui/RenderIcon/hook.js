import { useMemo } from "react";

import { icons } from "lucide-react";

import "./base.css";

const toPascalCase = (str = "") =>
  str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (c) => c.toUpperCase());

export const useRenderIconHook = (component) => {
  const IconComponent = useMemo(
    () => icons[component] || icons[toPascalCase(component)],
  );

  return IconComponent;
};

