import AboutMe from "./AboutMe";
import Education from "./Education";
import Technologies from "./Technologies";

import "./base.css";

const App = () => {
  return (
    <>
      <div className="App">
        <AboutMe />
        <Education />
        <Technologies />
      </div>
    </>
  );
};

export default App;
