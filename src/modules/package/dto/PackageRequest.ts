import Address from "../../address/model/Address";

export default interface PackageRequest {
    customerId: number;
    totalAmount: number;
    weight: number;
    height: number;
    width: number;
    deliveryDescription: string;
    originName: string;
    destinationName: string;
    originPhone: string;
    destinationPhone: string;
    origin: Address;
    destination: Address;
}