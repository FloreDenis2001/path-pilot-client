import Route from "../../route/model/Route";

export default interface Driver {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    salary: number;
    rating: number;
    experience: number;
    licenseNumber: string;
    isAvailable: boolean;
    routes:Route[];
}