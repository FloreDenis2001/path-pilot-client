import React from "react";
import ApiServer from "../../system/service/ApiServer";
import LoginRequest from "../dto/LoginRequest";
import UserLogin from "../dto/UserLogin";

class UserService extends ApiServer {
  login = async (user: LoginRequest): Promise<UserLogin> => {
    const data = await this.api<LoginRequest, UserLogin>(
      `/user/login`,
      "POST",
      user,
      ""
    );
    if (data.status === 200) {
      const user = await data.json();
      return user;
    } else {
      return Promise.reject([]);
    }
  };

  
}

export default UserService;