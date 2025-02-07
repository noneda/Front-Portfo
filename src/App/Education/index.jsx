import "./base.css";
import ConvertStringToReact from "../../Components/Parser";

const Education = ({ data }) => {
  return (
    <>
      <div className="Section Education">
        <h2>Education 🎓</h2>
        {ConvertStringToReact(data)}
      </div>
    </>
  );
};

export default Education;
