import { Company } from "../models/Company";

export default interface CompanyUpdateRequest {
  userEmail: string;
  updatedCompany: Company;
}