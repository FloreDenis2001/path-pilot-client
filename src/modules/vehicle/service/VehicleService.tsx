import ApiServer from "../../system/service/ApiServer";
import Vehicle from "../models/Vehicle";

class VehicleService extends ApiServer {
  createVehicle = async (data: Vehicle): Promise<any> => {
    const response = await this.api<any, any>(
      `/vehicles/create`,
      "POST",
      data,
      ""
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };

  allVehicles = async (): Promise<Vehicle[]> => {
    const response = await this.api<null, Vehicle[]>(
      `/vehicles/findAll`,
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

  deleteVehicle = async (registrationNumber: string): Promise<any> => {
    const response = await this.api<null, any>(
      `/vehicles/delete=` + registrationNumber,
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

  updateVehicle = async (data: Vehicle): Promise<any> => {
    const response = await this.api<any, any>(
      `/vehicles/update`,
      "PUT",
      data,
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

export default VehicleService;
