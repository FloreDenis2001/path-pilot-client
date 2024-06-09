import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCalendarAlt, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const ReportsInformation = () => {
  return (
    <div className="information">
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faChartBar} />
          <h2>Report Information</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Report Name</h3>
            <p>Sales Performance Report</p>
          </div>
          <div className="information__body__textBox">
            <h3>Report Type</h3>
            <p>Monthly</p>
          </div>
          <div className="information__body__textBox">
            <h3>Generated Date</h3>
            <p>15 Mar 2024</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <h2>Period</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Start Date</h3>
            <p>1 Mar 2024</p>
          </div>
          <div className="information__body__textBox">
            <h3>End Date</h3>
            <p>31 Mar 2024</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faFileAlt} />
          <h2>File Details</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>File Format</h3>
            <p>PDF</p>
          </div>
          <div className="information__body__textBox">
            <h3>File Size</h3>
            <p>2.5 MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsInformation;
