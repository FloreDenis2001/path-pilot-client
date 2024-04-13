import React from "react";
import ApiServer from "../../system/service/ApiServer";
import PackageRequest from "../dto/PackageRequest";
import Package from "../model/Package";

class PackageService extends ApiServer {
  createPackage = async (data: PackageRequest): Promise<any> => {
    const response = await this.api<PackageRequest, any>(
      `/packages/create`,
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

  allPackages = async (customerId : number): Promise<Package[]> => {
    const response = await this.api<null, Package[]>(`/packages/findAllByCustomer=`+customerId, "GET",null,"");
    if (response.status === 200) {
      console.log(response);
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };
}

export default PackageService;
