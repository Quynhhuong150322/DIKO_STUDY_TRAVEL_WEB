import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import CopyRight from "./components/CopyRight";

const App = () => {
  return (
    <Router>
      <div className="">
        <div className="max-container">
          <Navbar />
        </div>
        <div>
          <AppRoutes />
        </div>
        <div className="max-container">
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