import ApiServer from "../../system/service/ApiServer";
import LoginRequest from "../../user/dto/LoginRequest";
import DriverCreateRequest from "../dto/DriverCreateRequest";
import DriverUpdateRequest from "../dto/DriverUpdateRequest";
import Driver from "../models/Driver";

class DriverService extends ApiServer {
  getAllDrivers = async (): Promise<Driver[]> => {
    const response = await this.api<null, Driver[]>(
      `/drivers/all`,
      "GET",
      null,
      ""
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };

  addDriver = async (driver: DriverCreateRequest): Promise<void> => {
    try {
      const response = await this.api<DriverCreateRequest, string>(
        `/drivers/create`,
        "POST",
        driver,
        ""
      );
      if (response.status === 201) {
        const message = await response.text();
        console.error("Failed to create driver:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  updateDriver = async (
    driver: DriverUpdateRequest
  ): Promise<DriverUpdateRequest | undefined> => {
    try {
      const response = await this.api<DriverUpdateRequest, DriverUpdateRequest>(
        `/drivers/update`,
        "PUT",
        driver,
        ""
      );
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  sendEmail = async (email: { to: string }, companyRegistrationNumber:string): Promise<void> => {
    const response = await this.api<Object, void>(
      `/email/send?companyRegistrationNumber=${companyRegistrationNumber}`,
      "POST",
      email,
      ""
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };

  isValid = async (code: String): Promise<boolean> => {
    const response = await this.api<null, boolean>(
      `/email/validate/${code}`,
      "GET",
      null,
      ""
    );

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };

  removeLink = async (code: string): Promise<void> => {
    const response = await this.api<null, void>(
      `/email/remove/${code}`,
      "DELETE",
      null,
      ""
    );

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };
}

export default DriverService;
