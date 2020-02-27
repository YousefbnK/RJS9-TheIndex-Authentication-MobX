import React from "react";
import { NavLink } from "react-router-dom";
import { observer } from "../node_modules/mobx-react";

// Logo
import logo from "./assets/theindex.svg";
import authStore from "./stores/AuthStore";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/authors">AUTHORS</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/books">BOOKS</NavLink>
        </h4>
        <br></br>
        <br></br>
        <h6 className="menu-item active">
          {authStore.user ? (
            <Logout />
          ) : (
            <>
              <NavLink to="/login">Log in</NavLink>
              <NavLink to="/signup">Sign up</NavLink>
            </>
          )}
        </h6>
      </section>
    </div>
  );
};

export default observer(Sidebar);
