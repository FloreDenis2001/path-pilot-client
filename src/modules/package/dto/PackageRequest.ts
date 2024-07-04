import PackageAddress from "./PackageAddress";
import PackageDetails from "./PackageDetails";

export default interface PackageRequest {
    customerEmail: string;
    packageDetails: PackageDetails;
    origin: PackageAddress;
    destination: PackageAddress;
}