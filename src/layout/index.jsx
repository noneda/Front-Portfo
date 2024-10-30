import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Loader from "../Components/Loader";

// * Export ... Views? O don´t know how name those

const Layout = () => {
  const location = useLocation();
  const isLoading = location.state?.loading;

  return (
    <>
      <Header></Header>
      {/*
      <Nav></Nav>
      <div className="main">{isLoading ? <Outlet /> : <Loader />}</div>
      <Footer></Footer>
      */}
    </>
  );
};

export default Layout;
