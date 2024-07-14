import Driver from "../../driver/models/Driver";
import Order from "../../orders/models/Order";
import Vehicle from "../../vehicle/models/Vehicle";
import { RouteStatus } from "./RouteStatus";

export default interface Route {
    id: number;
    totalDistance: number;
    startPoint: string;
    endPoint: string;
    orders: Order[];
    driver: Driver;
    vehicle: Vehicle;
    status:RouteStatus;

}