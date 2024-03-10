import React from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCircleStop,
  faClock,
  faIdCard,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import ProgressSteps from "../components/ProgressSteps";
import OrderInformation from "../components/route/OrderInformation";

const RouteMap = () => {
  return (
    <section className="route">
      <Sidebar />

      <div className="route__container">
        <div className="route__container__header">
          <h1 className="heading-primary">Routes</h1>

          <button className="button__pluse">
            <FaPlus />
          </button>
        </div>

        <div className="route__container__maps">
          <div className="route__card">
            <div className="route__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>
            <div className="route__card__body">
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="route__card__body__infoItem__icon"
                />
                <span>New York</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="route__card__body__infoItem__icon"
                />
                <span>Los Angeles</span>
              </div>
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="route__card__body__infoItem__icon"
                />
                <span>2,800 km</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="route__card__body__infoItem__icon"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="route__card__status">
              <button className="button__status">On Delivery</button>
            </div>
          </div>
          <div className="route__card active">
            <div className="route__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>
            <div className="route__card__body">
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="route__card__body__infoItem__icon"
                />
                <span>New York</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="route__card__body__infoItem__icon"
                />
                <span>Los Angeles</span>
              </div>
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="route__card__body__infoItem__icon"
                />
                <span>2,800 km</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="route__card__body__infoItem__icon"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="route__card__status">
              <button className="button__status">On Delivery</button>
            </div>
          </div>
          <div className="route__card">
            <div className="route__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>
            <div className="route__card__body">
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="route__card__body__infoItem__icon"
                />
                <span>New York</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="route__card__body__infoItem__icon"
                />
                <span>Los Angeles</span>
              </div>
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="route__card__body__infoItem__icon"
                />
                <span>2,800 km</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="route__card__body__infoItem__icon"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="route__card__status">
              <button className="button__status">On Delivery</button>
            </div>
          </div>
          <div className="route__card">
            <div className="route__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>
            <div className="route__card__body">
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="route__card__body__infoItem__icon"
                />
                <span>New York</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="route__card__body__infoItem__icon"
                />
                <span>Los Angeles</span>
              </div>
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="route__card__body__infoItem__icon"
                />
                <span>2,800 km</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="route__card__body__infoItem__icon"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="route__card__status">
              <button className="button__status">On Delivery</button>
            </div>
          </div>
          <div className="route__card">
            <div className="route__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>
            <div className="route__card__body">
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="route__card__body__infoItem__icon"
                />
                <span>New York</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="route__card__body__infoItem__icon"
                />
                <span>Los Angeles</span>
              </div>
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="route__card__body__infoItem__icon"
                />
                <span>2,800 km</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="route__card__body__infoItem__icon"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="route__card__status">
              <button className="button__status">On Delivery</button>
            </div>
          </div>
          <div className="route__card">
            <div className="route__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>
            <div className="route__card__body">
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="route__card__body__infoItem__icon"
                />
                <span>New York</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="route__card__body__infoItem__icon"
                />
                <span>Los Angeles</span>
              </div>
              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="route__card__body__infoItem__icon"
                />
                <span>2,800 km</span>
              </div>

              <div className="route__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="route__card__body__infoItem__icon"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="route__card__status">
              <button className="button__status">On Delivery</button>
            </div>
          </div>
        </div>
      </div>

      <div className="route__map">
        <div className="route__map__header">
          <div className="route__map__header__info">
            <h3>
              Order Id :  <span>#AAEWGGGAWAEKW</span>
            </h3>
              <button className="button__status2">On Delivery</button>
          </div>

          <div className="route__map__header__progress">
            <ProgressSteps />
          </div>
        </div>

        <div className="route__map__body">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.157346343137!2d-74.0059740857363!3d40.71277683932555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f3e4f8d33%3A0x8a5f6f0f7f3e1f4a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sco!4v1623346407229!5m2!1sen!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="route__map__details">
           <div className="route__map__details__actions">
              <button className="button__details active">Order Information</button>
              <button className="button__details">Driver</button>
              <button className="button__details">Vehicle</button>
              <button className="button__details">Invoices</button>
              <button className="button__details">Reports</button>
           </div>
           <OrderInformation/>
        </div>

        
      </div>
    </section>
  );
};

export default RouteMap;
