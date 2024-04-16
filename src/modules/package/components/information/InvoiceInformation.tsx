import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faCalendarAlt,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import Package from "../../model/Package";

interface InvoiceInformationProps {
  pack: Package;
}

const InvoiceInformation:React.FC<InvoiceInformationProps> = ({pack}) => {
  return (
    <div className="information">
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faFileInvoice} className="purple" />
          <h2>Invoice Info</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Invoice Number</h3>
            <p>INV-2023-001</p>
          </div>
          <div className="information__body__textBox">
            <h3>Issue Date</h3>
            <p>15 Mar 2024</p>
          </div>
          <div className="information__body__textBox">
            <h3>Due Date</h3>
            <p>30 Mar 2024</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faCalendarAlt} className="blue" />
          <h2>Payment</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Payment Terms</h3>
            <p>Net 30 Days</p>
          </div>
          <div className="information__body__textBox">
            <h3>Payment Method</h3>
            <p>Bank Transfer</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faMoneyBillWave} className="green" />
          <h2>Amount</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Total Amount</h3>
            <p>$1500.00</p>
          </div>
          <div className="information__body__textBox">
            <h3>Amount Paid</h3>
            <p>$0.00</p>
          </div>
          <div className="information__body__textBox">
            <h3>Amount Due</h3>
            <p>$1500.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceInformation;
