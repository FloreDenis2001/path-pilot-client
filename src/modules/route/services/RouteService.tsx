import ApiServer from "../../system/service/ApiServer";
import Route from "../model/Route";

class RouteService extends ApiServer {
  getAllRoutesByCompanyRegistrationNumber = async (
    companyRegistrationNumber: string
  ): Promise<Route[]> => {
    const data = await this.api<null, Route[]>(
      `/route/findAllByCompanyRegistrationNumber=${companyRegistrationNumber}`,
      "GET",
      null,
      ""
    );

    if(data.status===200){
        const routes= await data.json();
        return routes;
    }else { 
        return Promise.reject([]);
    }
  };
}

export default RouteService;
