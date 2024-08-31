import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../common/header";
import Footer from "../../common/footer";
import BackToTop from "../../common/backtotop";
import SearchBar from "../../common/searchbar";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <SearchBar/>
      <Outlet />
      <Footer/>
      <BackToTop/>
    </div>
  );
}
