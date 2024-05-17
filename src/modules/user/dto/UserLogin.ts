import { Company } from "../../company/models/Company";

export default interface UserLogin{
    id:number,
    username:string,
    firstName:string,
    lastName:string,
    role:string,
    email:string,
    phone:string,
    token:string,
    companyRegistrationNumber:string,
}