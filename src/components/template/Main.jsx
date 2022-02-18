import "../../assets/css/components/Main.css";
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = (props) => (
  <React.Fragment>
    <Header {...props} />
    <main className="content container-fluid">
        <div className="p-3 mt-3">
        <Outlet />
        </div>
    </main>
  </React.Fragment>
);

export default Main;
