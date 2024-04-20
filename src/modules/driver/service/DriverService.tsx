import ApiServer from "../../system/service/ApiServer";
import LoginRequest from "../../user/dto/LoginRequest";
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

  updateDriver = async (driver: Driver): Promise<Driver> => {
    const response = await this.api<Driver, Driver>(
      `/drivers/update`,
      "PUT",
      driver,
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
