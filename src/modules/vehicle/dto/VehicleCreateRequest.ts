import CityData from "../../core/models/CityData";
import Route from "../../route/model/Route";
import Vehicle from "../components/VehicleMap";
import { FuelType } from "../models/FuelType";

export default interface Vehicle{
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
    currentLocation:string;
    companyRegistrationNumber:string;
}