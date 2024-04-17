import Route from "../../route/model/Route";
import Vehicle from "../components/VehicleMap";

export default interface Vehicle{

    id:number;
    make:string;
    model:string;
    year:number;
    fuelType:string;
    fuelCapacity:number;
    fuelConsumption:number;
    lastService:Date;
    nextService:Date;
    km:number;
    registrationNumber:string;
    capacity:number;
    isActive:boolean;
    routes:Route[];
    
}