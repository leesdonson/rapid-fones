import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <main className="relative">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
