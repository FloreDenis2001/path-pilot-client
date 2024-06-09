import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faGasPump, faCog } from "@fortawesome/free-solid-svg-icons";
import Vehicle from "../../../vehicle/models/Vehicle";

interface VehicleInformationProps {
  vehicle: Vehicle;
}

const VehicleInformation: React.FC<VehicleInformationProps> = ({ vehicle }) => {

  return (
    <div className="information">
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faCar} className="orange" />
          <h2>Vehicle Info</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Make</h3>
            <p>{vehicle.make}</p>
          </div>
          <div className="information__body__textBox">
            <h3>Model</h3>
            <p>{vehicle.model}</p>
          </div>
          <div className="information__body__textBox">
            <h3>Year</h3>
            <p>{vehicle.year}</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faGasPump} className="purple" />
          <h2>Fuel Information</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Fuel Type</h3>
            <p>{vehicle.fuelType}</p>
          </div>
          <div className="information__body__textBox">
            <h3>Fuel Capacity</h3>
            <p>{vehicle.fuelCapacity}</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faCog} className="red" />
          <h2>Maintenance</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Last Service</h3>
            <p>{vehicle.lastService.toString()}</p>
          </div>
          <div className="information__body__textBox">
            <h3>Next Service Due</h3>
            <p>{vehicle.nextService.toString()}</p>
          </div>
          <div className="information__body__textBox">
            <h3>Kilometers</h3>
            <p>{vehicle.km} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
