import { useRenderIconHook } from "./hook";

import "./base.css";

const RenderIcon = ({ component, name, color, size = 24 }) => {
  const IconComponent = useRenderIconHook(component);

  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return (
    <div className="icon-container" style={{ "--ChangeColor": color }}>
      <button type="button" aria-label={name} className="icon-button">
        <IconComponent className="icons" size={size} />
      </button>
      <span className="tooltip" role="tooltip">
        {name}
      </span>
    </div>
  );
};

export default RenderIcon;
