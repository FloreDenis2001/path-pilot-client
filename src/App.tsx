import "./App.css";
import Login from "./modules/auth/components/Login";
import Registration from "./modules/auth/components/Registration";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import RetrievePassword from "./modules/auth/components/RetrievePassword";
import Drivers from "./modules/driver/components/Drivers";
import Vehicle from "./modules/vehicle/components/VehicleMap";
import DashBoard from "./pages/Dashboard";
import MapTest from "./components/map/MapTest";
import LoginProvider from "./modules/context/LoginProvider";
import OrderMap from "./modules/orders/components/OrderMap";
import PackageMap from "./modules/package/components/PackageMap";
import RegistrationDriver from "./modules/driver/components/froms/RegistrationDriver";
import Profile from "./modules/user/components/Profile";
import ChangePassword from "./modules/auth/components/ChangePassword";

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
            <Route path="/reset-password" element={<ChangePassword />} />
            <Route path="/dashboard/orders" element={<OrderMap />} />
            <Route path="/dashboard/packages" element={<PackageMap />} />
            <Route path="/dashboard/drivers" element={<Drivers />} />
            <Route path="/dashboard/vehicles" element={<Vehicle />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/directions" element={<MapTest />} />
            <Route path="/drivers/add" element={<RegistrationDriver />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LoginProvider>
  );
}

export default App;
