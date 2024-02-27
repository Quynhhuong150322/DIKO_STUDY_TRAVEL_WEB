import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import CopyRight from "./components/CopyRight";

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
        <div className="">
          <Footer />
        </div>
        <div >
          <CopyRight />
        </div>
      </div>
    </Router>
  );
};

export default App;
