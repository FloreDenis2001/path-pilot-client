import ApiServer from "../../system/service/ApiServer";
import LoginRequest from "../dto/LoginRequest";
import UserLogin from "../dto/UserLogin";
import RegisterDTO from "../../auth/models/RegisterDTO";

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

  register = async (data: RegisterDTO): Promise<UserLogin> => {
    const response = await this.api<RegisterDTO, UserLogin>(
      `/user/register`,
      "POST",
      data,
      ""
    );
    if (response.status === 200) {
      const user = await response.json();
      return user;
    } else {
      return Promise.reject([]);
    }
  };

  getImage = async (email: string): Promise<string> => {
    const response = await this.api<null, string>(
      `/image/user/?email=${email}`,
      "GET",
      null,
      ""
    );
    if (response.status === 200) {
      const data = await response.text();
      return data;
    } else {
      return Promise.reject([]);
    }
  }
}

export default UserService;
