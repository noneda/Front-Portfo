import { useRevealHook } from "./hook";

const Reveal = ({ type, delay, as: Tag = "div", className, children }) => {
  const { ref } = useRevealHook({ type, delay });
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
