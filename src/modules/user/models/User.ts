import Address from "../../address/model/Address";

export default interface User {
    username: string;
    lastName: string;
    firstName: string;
    phone: string;
    password: string;
    email: string;
    address : Address;
    role: string;
    company_id: number;
}