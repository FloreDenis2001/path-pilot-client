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


  generateRoute = async (companyRegistrationNumber: string , city : string): Promise<String> => {
    const data = await this.api<null, Route>(
      `/route/generateRoute?companyRegistrationNumber=${companyRegistrationNumber}&city=${city}`,
      "POST",
      null,
      ""
    );

    if(data.status===200){
        const route= await data.text();
        return route;
    }else { 
        return Promise.reject([]);
    }
  };
}

export default RouteService;
