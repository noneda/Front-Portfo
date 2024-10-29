import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Loader from "../Components/Loader";

// * Export ... Views? O don´t know how name those

const Layout = () => {
  const location = useLocation();
  const isLoading = location.state?.loading;

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      {isLoading ? <Outlet /> : <Loader />}
      <Footer></Footer>
    </>
  );
};

export default Layout;
