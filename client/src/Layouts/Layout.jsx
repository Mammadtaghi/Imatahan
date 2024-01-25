import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Common Layouts/Footer";
import Navbar from "./Common Layouts/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
