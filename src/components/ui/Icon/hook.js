import { ICONS } from "@/lib/icons";

const toPascalCase = (str = "") =>
  str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (c) => c.toUpperCase());

// Devuelve el componente de Lucide para un nombre en string (o null)
export const useIconHook = (name) => {
  const IconComponent = ICONS[name] ?? ICONS[toPascalCase(name)] ?? null;

  if (!IconComponent && import.meta.env.DEV) {
    console.warn(
      `[Icon] "${name}" no está en src/lib/icons. Agrégalo al registro.`,
    );
  }

  return IconComponent;
};
