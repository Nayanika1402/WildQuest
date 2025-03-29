import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  const location = useLocation();

  const hideNavbarAndFooterRoutes = ["/", "/main", "/login", "/register"];

  return (
    <>
     
      {!hideNavbarAndFooterRoutes.includes(location.pathname) && <Header />}
      
      <main>
        <Routers />
      </main>

      {!hideNavbarAndFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
