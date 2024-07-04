// hooks/useExportCSV.ts
import { useState } from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import Package from '../model/Package';

const useExportPacksCSV = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const exportCSV = async (data: Package[], filename: string): Promise<void> => {
    setLoading(true);
    try {
      const csvData = data.map((pack) => ({
        AWB: pack.awb,
        "Origin Name": pack.shipmentDTO.originName,
        "Origin Phone": pack.shipmentDTO.originPhone,
        "Origin City": pack.shipmentDTO.origin.city,
        "Origin Country": pack.shipmentDTO.origin.country,
        "Origin Street": pack.shipmentDTO.origin.street,
        "Origin Street Number": pack.shipmentDTO.origin.streetNumber,
        "Destination Name": pack.shipmentDTO.destinationName,
        "Destination Phone": pack.shipmentDTO.destinationPhone,
        "Destination City": pack.shipmentDTO.destination.city,
        "Destination Country": pack.shipmentDTO.destination.country,
        "Destination Street": pack.shipmentDTO.destination.street,
        "Destination Street Number": pack.shipmentDTO.destination.streetNumber,
        "Total Distance": pack.shipmentDTO.totalDistance,
        Status: pack.status,
        "Total Amount": pack.packageDetails.totalAmount,
        Weight: pack.packageDetails.weight,
        Height: pack.packageDetails.height,
        Width: pack.packageDetails.width,
        Length: pack.packageDetails.length,
        "Delivery Description": pack.packageDetails.deliveryDescription,
      }));

      const csv = Papa.unparse(csvData, { header: true });
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.click();
      toast.success("Packages exported successfully");
    } catch (error) {
      toast.error("Error exporting packages");
    } finally {
      setLoading(false);
    }
  };

  return { exportCSV, loading };
};

export default useExportPacksCSV;
