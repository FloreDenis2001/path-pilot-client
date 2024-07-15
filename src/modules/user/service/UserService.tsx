import ApiServer from "../../system/service/ApiServer";
import LoginRequest from "../dto/LoginRequest";
import UserLogin from "../dto/UserLogin";
import RegisterDTO from "../../auth/models/RegisterDTO";
import ResetPasswordRequest from "../dto/ResetPasswordRequest";
import DeleteUserRequest from "../dto/DeleteUserRequest";
import UpdateUserRequest from "../dto/UpdateUserRequest";

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
  };

  resetPassword = async (
    resetPassword: ResetPasswordRequest
  ): Promise<string> => {
    const response = await this.api<ResetPasswordRequest, string>(
      `/user/reset/password`,
      "PUT",
      resetPassword,
      ""
    );
    if (response.status === 200) {
      const data = await response.text();
      return data;
    } else {
      return Promise.reject([]);
    }
  };

  delete = async (data : DeleteUserRequest): Promise<string> => {
    const response = await this.api<DeleteUserRequest, string>(
      `/user/delete`,
      "DELETE",
      data,
      ""
    );
    if (response.status === 200) {
      const data = await response.text();
      return data;
    } else {
      return Promise.reject([]);
    }
  };

   update = async (data: UpdateUserRequest): Promise<string> => {
    console.log(data);
    try {
      const response = await this.api<UpdateUserRequest, string>(
        '/user/update',
        'PUT',
        data,
        ''
      );
      if (response.status === 200) {
        const responseData = await response.text();
        return responseData;
      } else {
        return Promise.reject('Update failed'); 
      }
    } catch (error) {
      return Promise.reject('Update failed');
    }
  };

  uploadImage = async (email: string, file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await this.api<FormData, string>(
        `/user/update/image?email=${email}`,
        'POST',
        formData,
        ''
      );
      if (response.status === 200) {
        const data = await response.text();
        return data;
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      throw error;
    }
  };
  
  

}

export default UserService;
