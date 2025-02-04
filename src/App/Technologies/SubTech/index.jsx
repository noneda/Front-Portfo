import "./base.css";
import RenderIcons from "../../../Components/RenderIcons";

const SubTech = (props) => {
  return (
    <div className="SubTech">
      <h3>{props.item.Name}</h3>
      {props.item.objects.map((item, index) => (
        <RenderIcons
          key={index}
          component={item.icon}
          name={item.name}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default SubTech;
