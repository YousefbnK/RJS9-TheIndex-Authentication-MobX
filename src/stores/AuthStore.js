import { decorate, observable } from "mobx";
import { instance } from "./instance";
import jwt_decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      instance.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodeUser = jwt_decode(token);
      this.user = decodeUser;
      localStorage.setItem("myToken", token);
    } else {
      delete instance.defaults.headers.common.Authorization;
      localStorage.removeItem("myToken", token);
      this.user = null;
    }
  };

  login = async (userData, history) => {
    try {
      const res = await instance.post("/login/", userData);
      const data = res.data;
      console.log("Logged in!", data);
      this.setUser(data.token);
      history.push("/");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  signup = async userData => {
    try {
      const res = await instance.post("/signup/", userData);
      const data = res.data;
      console.log("Signed Up !", data);
      this.login(userData);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  logout = () => {
    this.setUser();
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const data = jwt_decode(token);
      if (data.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
