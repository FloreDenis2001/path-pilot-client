import Address from "../../address/model/Address";
import PackageAddress from "./PackageAddress";
import PackageDetails from "./PackageDetails";

export default interface PackageRequest {
    customerId: number;
    packageDetails: PackageDetails;
    originDetails: PackageAddress;
    destinationDetails: PackageAddress;
}