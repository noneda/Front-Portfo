import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "../Components/Loader";
import Nav from "./Nav";

// * Export ... Views? O don´t know how name those

const Layout = () => {
  const location = useLocation();
  const isLoading = location.state?.loading;
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      {isLoading ? <Loader /> : <Outlet />}
      <Footer></Footer>
    </>
  );
};

export default Layout;
