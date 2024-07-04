import Driver from "../../driver/models/Driver";
import Package from "../../package/model/Package";

export default interface CompanyDataDashboard {
    totalSumLastMonthPackages: number;
    totalNumberOfPackagesLastMonth: number;
    totalSumLastMonthOfSalary: number;
    totalSumLastMonthProfit: number;
    bestFiveDriversByRanking: Driver[];
    lastFivePackagesAdded:Package[];
   
}