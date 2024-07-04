import Address from "../../address/model/Address";
export default interface UserLogin{
    id:number,
    username:string,
    firstName:string,
    lastName:string,
    role:string,
    email:string,
    phone:string,
    addressDTO:Address,
    token:string,
    companyRegistrationNumber:string,
}