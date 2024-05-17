import Address from "../../address/model/Address";

export interface Company {
    address: Address;
    name: string;
    registrationNumber: string;
    industry: string;
    capital: number;
    phone: string;
    email: string;
    website: string;
}