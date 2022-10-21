import React from "react";
import Header from "../components/Header/Header";

import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Header></Header>

      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
