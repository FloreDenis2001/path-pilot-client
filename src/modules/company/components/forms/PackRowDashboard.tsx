import React from "react";
import Package from "../../../package/model/Package";
import { PackageStatus } from "../../../package/model/PackageStatus";
interface PackRowDashboardProps {
  pack: Package;
}
const PackRowDashboard: React.FC<PackRowDashboardProps> = ({ pack }) => {
  return (
    <tr>
      <td>{pack.awb}</td>
      <td>{pack.shipmentDTO.destinationName}</td>
      <td>{pack.shipmentDTO.totalDistance} km</td>

      <td>$ {pack.packageDetails.totalAmount}</td>
      <td className="td__status ">
        {pack.status === PackageStatus.ASSIGNED ? (
          <span className="td__status__completed">ASSIGNED</span>
        ) : (
          <span className="td__status__refused">UNASSIGNED</span>
        )}
      </td>
    </tr>
  );
};

export default PackRowDashboard;
