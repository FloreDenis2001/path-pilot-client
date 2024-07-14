import ShipmentRoute from "../../shipment/dto/ShipmentRoute";
import Shipment from "../../shipment/model/Shipment";

export default interface Order {
    awb: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    deliveryDescription: string;
    orderDate: Date;
    totalAmount: number;
    shipment:ShipmentRoute;
    deliverySequence:number;
}