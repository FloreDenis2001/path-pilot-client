import Address from "../../address/model/Address";

export default interface DriverCreateRequest {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    licenseNumber: string;
    companyRegistrationNumber: string;
    address:Address;
}