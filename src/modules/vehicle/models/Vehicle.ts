import Route from "../../route/model/Route";
import Vehicle from "../components/VehicleMap";
import { FuelType } from "./FuelType";

export default interface Vehicle{
    id:number;
    make:string;
    model:string;
    year:number;
    fuelType:FuelType;
    fuelCapacity:number;
    fuelConsumption:number;
    lastService:Date;
    nextService:Date;
    km:number;
    registrationNumber:string;
    capacity:number;
    height:number;
    width:number;
    length:number;
    weight:number;
    active:boolean;
    routes:Route[];
    companyRegistrationNumber:string;
}