import "./base.css";
import ConvertStringToReact from "../../Components/Parser";

const Education = ({ data }) => {
  return (
    <>
      <div className="Section Education">{ConvertStringToReact(data)}</div>
    </>
  );
};

export default Education;
