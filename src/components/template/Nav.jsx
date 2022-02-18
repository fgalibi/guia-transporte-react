import React from "react";
import "../../assets/css/components/Nav.css";
import NavItem from "./NavItem";

const Nav = () => (
  <header>
    <div className="b-example-divider"></div>
    <div className="px-3 py-2">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavItem
                title="Ônibus"
                icon="bus"
                active="active"
                link="onibus"
              />
            </li>
            <li className="nav-item">
              <NavItem title="Lotação" icon="bus" link="lotacao" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </header>
  
);

export default Nav;
