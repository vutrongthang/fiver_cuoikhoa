import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderDesktop from "../components/Header/HeaderDesktop";

export default function IndexTemplate() {
  return (
    <div className="relative">
      <HeaderDesktop />
      <Outlet />
      <Footer />
    </div>
  );
}
