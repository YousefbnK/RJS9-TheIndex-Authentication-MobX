import React from "react";

// Stores
import authStore from "./stores/AuthStore";

const Logout = () => {
  return (
    <a className="btn btn-danger" onClick={authStore.logout}>
      LOG OUT {authStore.user.username}
    </a>
  );
};

export default Logout;
