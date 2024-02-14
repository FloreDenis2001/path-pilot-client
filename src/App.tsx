import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { Route, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import RetrievePassword from "./components/RetrievePassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/register" element={<Registration />} />
                    <Route path="/retrievePassword" element={<RetrievePassword />} />
                    




                  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
