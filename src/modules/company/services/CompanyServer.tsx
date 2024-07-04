import ApiServer from "../../system/service/ApiServer";
import CompanyUpdateRequest from "../dto/CompanyUpdateRequest";
import { Company } from "../models/Company";
import CompanyDataDashboard from "../models/CompanyDataDashboard";

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

    getDataCompanyDashboard = async (registrationNumber: string): Promise<CompanyDataDashboard> => {
        const response = await this.api<null, CompanyDataDashboard>(
            `/companies/dashboard/company=${registrationNumber}`,
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
    }


    updateCompany = async (company: CompanyUpdateRequest): Promise<string> => {
        const response = await this.api<CompanyUpdateRequest, string>(
            `/companies/update`,
            "PUT",
            company,
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

export default CompanyService;