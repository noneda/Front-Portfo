import { useMemo } from "react";
import DOMPurify from "dompurify";

const getNodeType = (node) => {
  if (node.type !== "tag") return null;

  const href = node.attribs?.href ?? "";

  if (node.name === "a" && href.startsWith("/")) return "internalLink";
  if (node.name === "a" && href.startsWith("http")) return "externalLink";
  if (node.name === "img") return "image";

  return null;
};

export const useHtmlContentHook = ({ html = "", sanitize = true }) => {
  const cleanHtml = useMemo(() => {
    if (!html) return "";
    return sanitize ? DOMPurify.sanitize(html) : html;
  }, [html, sanitize]);

  return { cleanHtml, getNodeType };
};
