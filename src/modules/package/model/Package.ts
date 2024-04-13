import Shipment from "../../shipment/model/Shipment";

export default interface Package {
    width:number;
    height:number;
    weight:number;
    type:string;
    total_amount:number;
    shipmentDTO:Shipment;
}