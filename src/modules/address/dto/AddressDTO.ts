import CityData from "../../core/models/CityData";

export default interface AddressDTO {
    cityDetails:CityData;
    street: string;
    streetNumber: string;
    postalCode: string;
}