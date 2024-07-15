import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCirclePlay,
    faCircleStop,
    faClock,
    faRoad,
  } from "@fortawesome/free-solid-svg-icons";
import Route from '../../model/Route';
import { RouteStatus } from '../../model/RouteStatus';

interface RouteCardProps {
    route:Route;
    onClick: (route: Route) => void;
}

const RouteCard:React.FC<RouteCardProps> = ({route,onClick}) => {

    const handleRouteClick = () => {
        onClick(route);
      };

      const getStatusClass = (status: string) => {
        switch (status) {
            case RouteStatus.PLANNEED:
                return 'pending';
            case RouteStatus.IN_PROGRESS:
                return 'intransit';
            case RouteStatus.COMPLETED:
                return 'done';
            case RouteStatus.CANCELLED:
                return 'cancelled';
            default:
                return '';
        }
    };
  return (
    <div className="order__card" onClick={handleRouteClick}>
            <div className="order__card__header">
              <h2>Route ID  <span>{route.id}</span> </h2>
             
            </div>

            <div className="order__card__body">
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="order__card__body__infoItem__icon green"
                />
                <span>{route.startPoint}</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="order__card__body__infoItem__icon red"
                />
                <span>{route.endPoint}</span>
              </div>
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="order__card__body__infoItem__icon orange"
                />
                <span>{route.totalDistance.toFixed(2)} km</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="order__card__body__infoItem__icon purple"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="order__card__status">
              <button className={`button__status ${getStatusClass(route.status)}`}>{route.status}</button>
            </div>
          </div>
  )
}

export default RouteCard