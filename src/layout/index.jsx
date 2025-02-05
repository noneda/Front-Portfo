import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "../Components/Loader";

import { Languages } from "../Utils/Api";

// * Export ... Views? O don´t know how name those

const Layout = () => {
  const location = useLocation();
  const isLoading = location.state?.loading;
  const HeaderSubtitle = Languages.English.HeaderSubtitle;
  const AboutMe = Languages.English.AboutMe;
  const Education = Languages.English.Education;

  return (
    <>
      <Header data={HeaderSubtitle}></Header>
      {isLoading ? <Loader /> : <Outlet context={[AboutMe, Education]} />}
      <Footer></Footer>
    </>
  );
};

export default Layout;
