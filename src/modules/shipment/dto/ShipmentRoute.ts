import AddressDTO from "../../address/dto/AddressDTO";

export default interface ShipmentRoute{
    originName: string;
    destinationName: string;
    originPhone: string;
    destinationPhone: string;
    originAddress: AddressDTO;
    destinationAddress: AddressDTO;
    totalDistance: number;
}