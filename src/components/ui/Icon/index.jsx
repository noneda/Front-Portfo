import { useIconHook } from "./hook";

const Icon = ({
  name,
  size = 20,
  strokeWidth = 2,
  className = "",
  ...props
}) => {
  const IconComponent = useIconHook(name);
  if (!IconComponent) return null;

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Icon;
