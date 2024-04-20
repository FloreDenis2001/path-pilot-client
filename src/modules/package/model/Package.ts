import Shipment from "../../shipment/model/Shipment";

export default interface Package {
    awb:string;
    width:number;
    height:number;
    weight:number;
    length:number;
    type:string;
    totalAmount:number;
    deliveryDescription:string;
    shipmentDTO:Shipment;
}