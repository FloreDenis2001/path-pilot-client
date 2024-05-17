import Address from "../../address/model/Address";

export default interface RegisterRequest {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    phone: string,
    address: Address,
}