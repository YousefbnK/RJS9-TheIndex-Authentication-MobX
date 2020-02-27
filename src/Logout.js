import React from "react";

// Stores
import authStore from "./stores/AuthStore";

const Logout = () => {
  return (
    <a className="btn btn-dark" onClick={authStore.logout}>
      Log out {authStore.user.username}
    </a>
  );
};

export default Logout;
