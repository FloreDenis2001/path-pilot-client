import React from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus, FaSearch } from "react-icons/fa";

const Orders = () => {
  return (
    <div className="orders">
      <Sidebar />
      <section className="orders__container">
      <div className="orders__header">
        <h1 className="heading-primary">Orders</h1>
        <div className="button__box__second">
        <FaPlus/>
        <button>New Order</button>
        </div>
      </div>

      <div className="orders__filters">
        <div className="searchBox">
          <label htmlFor="">What are you looking for ?</label>

          <div className="searchBox__input">
            <FaSearch className="searchBox__icon"/>
            <input type="search" placeholder="Search..." />
          </div>
        </div>

        <div className="filtersBox">
          <label htmlFor="">Country</label>
          <select name="" id="">
            <option value="all">All</option>
            <option value="romanian">Romanian</option>
            <option value="germany">Germany</option>
          </select>
        </div>

        <div className="filtersBox">
          <label htmlFor="">Status</label>
          <select name="" id="">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button className="button__search">Search</button>

      </div>

      <div className="orders__table"></div>
      </section>
    </div>
  );
};

export default Orders;
