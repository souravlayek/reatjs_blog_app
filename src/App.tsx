import React from "react";
import "./assets/css/utility.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Route";
import NavSection from "./layouts/navSection/NavSection";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <NavSection />

      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
