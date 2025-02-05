import "./base.css";

import ConvertStringToReact from "../../Components/Parser";

const AboutMe = ({ data }) => {
  return (
    <>
      <div className="Section AboutMe">
        <div className="head">
          <h2>
            <b>About Me</b>
          </h2>
          <picture>
            <img src="/Me.jpeg" alt="Picture for 'Me'" />
          </picture>
        </div>
        <p>{ConvertStringToReact(data)}</p>
      </div>
    </>
  );
};

export default AboutMe;
