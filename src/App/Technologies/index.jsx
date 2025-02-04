import "./base.css";
import SubTech from "./SubTech/";
import { TechnologiesData } from "../../Utils/Api";

const Technologies = () => {
  return (
    <div className="Section Technologies">
      <h2>Technologies</h2>
      {TechnologiesData.map((item, index) => (
        <SubTech key={index} item={item} />
      ))}
    </div>
  );
};

export default Technologies;
