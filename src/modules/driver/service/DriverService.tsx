import ApiServer from "../../system/service/ApiServer";
import LoginRequest from "../../user/dto/LoginRequest";
import DriverCreateRequest from "../dto/DriverCreateRequest";
import DriverUpdateRequest from "../dto/DriverUpdateRequest";
import Driver from "../models/Driver";

class DriverService extends ApiServer {

  getAllDriversByCompany = async (registrationNumber:string): Promise<Driver[]> => {
    const response = await this.api<null, Driver[]>(
      `/drivers/allByCompany?registrationNumber=${registrationNumber}`,
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





  deleteDriver = async (licenseNumber:string,email:string): Promise<string> => {
    const response = await this.api<null, void>(
      `/drivers/delete?licenseNumber=${licenseNumber}&email=${email}`,
      "DELETE",
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
}

export default DriverService;
