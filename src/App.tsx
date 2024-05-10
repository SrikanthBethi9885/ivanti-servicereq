import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./MCPC-APP/Pages/Sidebar";
import Header from "./MCPC-APP/Pages/Header";
import Purchases from "./MCPC-APP/Content/Purchases";
import Inventory from "./MCPC-APP/Content/Inventory";
import Tickets from "./MCPC-APP/Content/Tickets";
import Orders from "./MCPC-APP/Content/Orders";
import Deployment from "./MCPC-APP/Content/Deployment";
import Assets from "./MCPC-APP/Content/Assets";
import LogiPage from "./MCPC-APP/Pages/LogiPage";
const App = () => {

  return (
    <Router>
      <div className="custom-layout">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/purchases" element={<Purchases />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/deployment" element={<Deployment />} />
              <Route path="/assets" element={<Assets />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    // <Layout />
    // <LogiPage />
  );
};

export default App;
