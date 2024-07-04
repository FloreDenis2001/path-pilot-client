import ApiServer from "../../system/service/ApiServer";
import VehicleCreateRequest from "../dto/VehicleCreateRequest";
import Vehicle from "../models/Vehicle";

class VehicleService extends ApiServer {
  createVehicle = async (data: VehicleCreateRequest): Promise<Vehicle> => {
    const response = await this.api<VehicleCreateRequest, VehicleCreateRequest>(
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

  allVehiclesByCompany = async (companyRegistrationNumber:string): Promise<Vehicle[]> => {
    const response = await this.api<null, Vehicle[]>(
      `/vehicles/getVehiclesByCompanyRegistrationNumber=${companyRegistrationNumber}`,
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

  deleteVehicle = async (registrationNumber: string): Promise<string> => {
    const response = await this.api<null, any>(
      `/vehicles/delete=` + registrationNumber,
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
