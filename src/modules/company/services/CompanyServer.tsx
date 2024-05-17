import ApiServer from "../../system/service/ApiServer";
import { Company } from "../models/Company";

class CompanyService extends ApiServer {


    getCompanyByRegistrationNumber = async (registrationNumber: string): Promise<Company> => {
        const response = await this.api<null, Company>(
            `/companies/findByRegistrationNumber/${registrationNumber}`,
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
    
}

export default CompanyService;