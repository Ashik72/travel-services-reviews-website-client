import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

export default function Main() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
