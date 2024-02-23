import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

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
        <div>
          <Footer className="max-container" />
        </div>
      </div>
    </Router>
  );
};

export default App;