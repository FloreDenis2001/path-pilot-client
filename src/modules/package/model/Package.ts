import Shipment from "../../shipment/model/Shipment";
import PackageDetails from "../dto/PackageDetails";
import { PackageStatus } from "./PackageStatus";

export default interface Package {
    customerEmail:string;
    awb:string;
    status:PackageStatus;
    packageDetails:PackageDetails;
    shipmentDTO:Shipment;
}