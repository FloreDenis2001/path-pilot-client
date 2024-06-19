import Driver from "../../driver/models/Driver";
import Order from "../../orders/models/Order";
import Vehicle from "../../vehicle/models/Vehicle";

export default interface Route {
    id: number;
    totalDistance: number;
    orders: Order[];
    driver: Driver;
    vehicle: Vehicle;

}