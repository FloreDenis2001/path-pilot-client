import { toast } from "react-toastify";
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
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };


  deletePackage = async (awb: string): Promise<string> => {
    const response = await this.api<null, any>(
      `/packages/delete/` + awb,
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


  updatePackage = async (awb: string, data: PackageRequest): Promise<PackageRequest> => {
    try {
        const response = await this.api<PackageRequest, any>(
            `/packages/edit/` + awb,
            "PUT",
            data,
            ""
        );
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 409) {
                toast.warning("Package is already assigned");
            }
            return Promise.reject([]);
        }
    } catch (error) {
        toast.error("An error occurred while updating the package");
        return Promise.reject(error);
    }
};



}

export default PackageService;
