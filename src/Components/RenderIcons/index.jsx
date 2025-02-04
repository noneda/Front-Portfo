import "./base.css";
import * as fa from "react-icons/fa";
import * as si from "react-icons/si";
import * as di from "react-icons/di";

const RenderIcons = (props) => {
  const getIconComponent = () => {
    if (si[props.component]) {
      return si[props.component];
    }
    if (fa[props.component]) {
      return fa[props.component];
    }
    if (di[props.component]) {
      return di[props.component];
    }
    return null;
  };

  const IconComponent = getIconComponent();

  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return (
    <div className="icon-container" style={{ "--ChangeColor": props.color }}>
      <button className="icon-button">
        <IconComponent className="icons" />
      </button>
      <span className="tooltip">{props.name}</span>
    </div>
  );
};

export default RenderIcons;
