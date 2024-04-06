import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./modules/auth/components/Login";
import Registration from "./modules/auth/components/Registration";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import RetrievePassword from "./pages/RetrievePassword";
import Orders from "./modules/orders/components/Orders";
import Drivers from "./pages/Drivers";
import Vehicle from "./pages/Vehicle";
import RouteMap from "./modules/orders/components/OrderMap";
import DashBoard from "./pages/Dashboard";
import MapTest from "./components/map/MapTest";
import LoginProvider from "./modules/context/LoginProvider";
import OrderMap from "./modules/orders/components/OrderMap";

function App() {
  return (

    <LoginProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/retrievePassword" element={<RetrievePassword />} />
          <Route path="/dashboard/orders" element={<OrderMap />} />
          <Route path="/dashboard/drivers" element={<Drivers />} />
          <Route path="/dashboard/vehicles" element={<Vehicle />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/directions" element={<MapTest />} />
        </Routes>
      </BrowserRouter>
    </div>
    </LoginProvider>
  );
}

export default App;
