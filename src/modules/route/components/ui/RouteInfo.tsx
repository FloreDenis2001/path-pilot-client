import React, { useState } from "react";
import OptionsOrderDetails from "./OptionsOrderDetails";
import ProgressSteps from "./ProgressSteps";
import DriverInformation from "../information/DriverInformation";
import VehicleInformation from "../information/VehicleInformation";
import Route from "../../model/Route";
import OrderInformation from "../information/OrderInformation";

interface RouteProps {
    route:Route;
  }

const RouteInfo: React.FC<RouteProps>  = ({route}) => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [activeButton, setActiveButton] = useState("order");


  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenOrdersDetails = () => {
    setOpenOrderDetails(!openOrderDetails);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };
  const handlePrintOrder = () => {
    const printWindow = window.open('', '', 'height=800,width=1000');

    if (printWindow) {
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Order</title>
                    <style>
                        body {
                            font-family: 'Roboto', sans-serif;
                            color: #333;
                            margin: 0;
                            padding: 20px;
                            background: #f0f4f8;
                            line-height: 1.6;
                        }
            
                        .container {
                            max-width: 1000px;
                            margin: 0 auto;
                            background: #fff;
                            border-radius: 10px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                            padding: 20px;
                            box-sizing: border-box;
                        }
            
                        /* Header Styles */
                        .print-header {
                            text-align: center;
                            margin-bottom: 20px;
                        }
            
                        .print-header h3 {
                            font-size: 24px;
                            color: #007BFF;
                            margin: 0;
                            padding-bottom: 10px;
                        }
            
                        .map {
                            width: 100%;
                            height: 300px; /* Reduced map height */
                            margin-bottom: 20px;
                            border: 3px solid #007BFF;
                            border-radius: 8px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
            
                        .section {
                            margin-bottom: 20px;
                            padding: 10px;
                            background-color: #f9f9f9;
                            border-radius: 8px;
                            border: 1px solid #e0e0e0;
                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                        }
            
                        .section h4 {
                            background-color: #007BFF;
                            color: #fff;
                            padding: 8px;
                            border-radius: 5px;
                            margin: 0 0 8px 0;
                        }
            
                        .order-list {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 8px;
                        }
            
                        .order-info {
                            flex: 1 1 calc(33.333% - 10px); 
                            padding: 8px;
                            border: 1px solid #e0e0e0;
                            background-color: #fff;
                            border-radius: 5px;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                            box-sizing: border-box;
                        }
            
                        .order-info p {
                            margin: 5px 0;
                        }
            
                        .order-info strong {
                            color: #333;
                        }
            
                        @media print {
                            body {
                                font-size: 12px;
                                background: #fff;
                                padding: 0;
                            }
                            .container {
                                box-shadow: none;
                                margin: 0;
                                padding: 0;
                            }
                            .map {
                                height: 250px;
                            }
                            .order-info {
                                flex: 1 1 calc(33.333% - 10px);
                            }
                        }

                        .info-wrapper {
                            display: flex;
                            justify-content: space-between;
                            gap: 15px;
                        }

                        .info-section {
                            flex: 1;
                            padding: 10px;
                            background: #f9f9f9;
                            border: 1px solid #e0e0e0;
                            border-radius: 5px;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="print-header">
                            <h3>Route ID: ${route.id}</h3>
                            <iframe class="map" src="${buildGoogleMapsUrl()}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="section">
                            <h4>Order Information</h4>
                            <div class="order-list">
                                ${route.orders.map((order, index) => `
                                    <div class="order-info">
                                        <p><strong>Order ${index + 1}:</strong> ${order.shipment.destinationAddress.cityDetails.city}</p>
                                        <p><strong>Address:</strong> ${order.shipment.destinationAddress.street}</p>
                                        <p><strong>Phone:</strong> ${order.shipment.destinationPhone}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="section">
                            <div class="info-wrapper">
                                <div class="info-section">
                                    <h4>Driver Information</h4>
                                    <p><strong>Name:</strong>  ${route.driver.lastName} ${route.driver.firstName}</p>
                                    <p><strong>Phone:</strong> ${route.driver.phone}</p>
                                </div>
                                <div class="info-section">
                                    <h4>Vehicle Information</h4>
                                    <p><strong>Make and Model:</strong> ${route.vehicle.make} ${route.vehicle.model}</p>
                                    <p><strong>License Plate:</strong> ${route.vehicle.registrationNumber}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script>
                        function checkMapLoaded() {
                            return new Promise((resolve) => {
                                const iframe = document.querySelector('.map');
                                iframe.onload = () => resolve();
                            });
                        }
                        checkMapLoaded().then(() => {
                            setTimeout(() => {
                                window.print();
                            }, 1000);
                        });
                    </script>
                </body>
            </html>
        `);

        printWindow.document.close();
        printWindow.focus();
    }
};
  
  
  
  

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const buildGoogleMapsUrl = () => {
    const startPoint = route.startPoint;
    const destinations = route.orders.map(order => order.shipment.destinationAddress.cityDetails.city);

    const waypoints = destinations.slice(0, -1).join("|");
    const endPoint = destinations[destinations.length - 1];
    
    return `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAbyUrZndq4ZPLjIvBO_HeFy4r3heapRg0&origin=${startPoint}&destination=${endPoint}&waypoints=${waypoints}`;
  };

  return (
    <div className="order__map">
      <div className="order__map__header">
        <div className="order__map__header__info">
          <h3>
            Route Id : <span>{route.id}</span>
          </h3>
          <OptionsOrderDetails
            index={3}
            onToggle={handleDropdownToggle}
            onDelete={handleOpenOrdersDetails}
            onEdit={handleOpenModalEdit}
            onPrint={handlePrintOrder}
          />
        </div>

        <div className="order__map__header__progress">
          <ProgressSteps />
        </div>
      </div>

      <div className="order__map__body">
      <iframe
          title="map"
          src={buildGoogleMapsUrl()}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

      <div className="order__map__details">
        <div className="order__map__details__actions">
          <button
            className={`button__details ${
              activeButton === "order" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("order")}
          >
            Order Info
          </button>
          <button
            className={`button__details ${
              activeButton === "driver" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("driver")}
          >
            Driver
          </button>
          <button
            className={`button__details ${
              activeButton === "vehicle" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("vehicle")}
          >
            Vehicle
          </button>
         
        </div>
        {activeButton === "order" && <OrderInformation orders={route.orders}/>}
        {activeButton === "driver" && <DriverInformation driver={route.driver} />}
        {activeButton === "vehicle" && <VehicleInformation vehicle={route.vehicle} />}
      </div>
    </div>
  );
};

export default RouteInfo;
