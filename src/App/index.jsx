import AboutMe from "./AboutMe";
import Education from "./Education";
import Technologies from "./Technologies";

import { useOutletContext } from "react-router-dom";

import "./base.css";

const App = () => {
  const [dataAboutMe, dataEducation, dataTechnologies] = useOutletContext();
  return (
    <>
      <div className="App">
        <AboutMe data={dataAboutMe} />
        <Education data={dataEducation} />
        <Technologies data={dataTechnologies} />
      </div>
    </>
  );
};

export default App;
