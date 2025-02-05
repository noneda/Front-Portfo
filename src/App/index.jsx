import AboutMe from "./AboutMe";
import Education from "./Education";
import Technologies from "./Technologies";

import { useOutletContext } from "react-router-dom";

import "./base.css";

const App = () => {
  const [AboutMe, Education] = useOutletContext();
  return (
    <>
      <div className="App">
        <AboutMe data={AboutMe} />
        <Education data={Education} />
        <Technologies />
      </div>
    </>
  );
};

export default App;
