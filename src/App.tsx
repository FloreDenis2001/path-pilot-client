import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import RetrievePassword from "./pages/RetrievePassword";
import Orders from "./pages/Orders";
import Drivers from "./pages/Drivers";
import Vehicle from "./pages/Vehicle";
import RouteMap from "./pages/RouteMap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/retrievePassword" element={<RetrievePassword />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/drivers" element={<Drivers />} />
          <Route path="/dashboard/vehicles" element={<Vehicle />} />
          <Route path="/dashboard/routes" element={<RouteMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
