import { useMemo } from "react";
import parse, { domToReact } from "html-react-parser";
import { Link } from "react-router-dom";

import { useHtmlContentHook } from "./hook";

const RENDERERS = {
  internalLink: (node, children) => (
    <Link to={node.attribs.href} className={node.attribs.class}>
      {children}
    </Link>
  ),

  externalLink: (node, children) => (
    <a
      href={node.attribs.href}
      className={node.attribs.class}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),

  image: (node) => (
    <img
      src={node.attribs.src}
      alt={node.attribs.alt || ""}
      className={node.attribs.class}
      loading="lazy"
    />
  ),
};

const HtmlContent = ({
  html = "",
  sanitize = true,
  className = "",
  as: Tag = "div",
}) => {
  const { cleanHtml, getNodeType } = useHtmlContentHook({ html, sanitize });

  const content = useMemo(() => {
    if (!cleanHtml) return null;

    const options = {
      replace(node) {
        const type = getNodeType(node);
        const render = RENDERERS[type];

        if (!render) return;

        const children = node.children
          ? domToReact(node.children, options)
          : null;

        return render(node, children);
      },
    };

    return parse(cleanHtml, options);
  }, [cleanHtml, getNodeType]);

  if (!content) return null;

  return <Tag className={className}>{content}</Tag>;
};

export default HtmlContent;
