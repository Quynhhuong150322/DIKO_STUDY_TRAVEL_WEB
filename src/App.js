import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <div className="border-b border-[#A6A6A6]">
          <div className="max-container">
            <Navbar />
          </div>
        </div>
        <div className="layout">
          <AppRoutes />
        </div>
        <div className="max-container"><Footer /></div>
      </div>
    </Router>
  );
};

export default App;
