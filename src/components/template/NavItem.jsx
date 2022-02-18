import "../../assets/css/components/NavItem.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Link
      className={`nav-link ${
        splitLocation[1] === props.link ? "active" : ""
      }`}
      aria-current="page"
      to={`/${props.link}`}
    >
      <span className="bi d-block mx-auto mb-1 ">
        <i className={`fa fa-${props.icon} px-1`}></i>
        {props.title}
      </span>
    </Link>
  );
};

export default NavItem;
