import Address from "../../address/model/Address";

export default interface PackageAddress {
    name : string;
    phone : string;
    addressDTO : Address;
}