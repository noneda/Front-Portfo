import "./base.css";
import SubTech from "./SubTech/";

const Technologies = ({ data }) => {
  return (
    <div className="Section Technologies">
      <h2>Technologies</h2>
      {data.map((item, index) => (
        <SubTech key={index} item={item} />
      ))}
    </div>
  );
};

export default Technologies;
