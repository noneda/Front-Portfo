import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "../Components/Loader";

// * Export ... Views? O don´t know how name those

const Layout = () => {
  const location = useLocation();
  const isLoading = location.state?.loading;
  return (
    <>
      <Header></Header>
      {isLoading ? <Loader /> : <Outlet />}
      <Footer></Footer>
    </>
  );
};

export default Layout;
