import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "../Components/Loader";

import { Languages, TechnologiesData } from "../Utils/Api";
import TranslateFixedButton from "../Components/ButtonTranslante";

// * Export ... Views? O don´t know how name those

const Layout = () => {
  const location = useLocation();
  const isLoading = location.state?.loading;
  const HeaderSubtitle = Languages.English.HeaderSubtitle;
  const dataAboutMe = Languages.English.AboutMe;
  const dataEducation = Languages.English.Education;
  const dataTechnologies = TechnologiesData;
  return (
    <>
      <Header data={HeaderSubtitle}></Header>
      {isLoading ? (
        <Loader />
      ) : (
        <Outlet context={[dataAboutMe, dataEducation, dataTechnologies]} />
      )}
      <Footer></Footer>
    </>
  );
};

export default Layout;
