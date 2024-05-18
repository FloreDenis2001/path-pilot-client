import Address from "../../address/model/Address";

export default interface Shipment{
    originName: string;
    destinationName: string;
    originPhone: string;
    destinationPhone: string;
    origin: Address;
    destination: Address;
    totalDistance: number;
}