import { Company } from "../../company/models/Company";
import RegisterRequest from "../../user/dto/RegisterRequest";


export default interface RegisterDTO {
    user: RegisterRequest,
    company: Company,
}