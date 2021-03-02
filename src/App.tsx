import React from "react";
import "./assets/css/utility.css";
import HomePage from "./screens/HomePage/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Route";
import NavSection from "./layouts/navSection/NavSection";

const App: React.FC = () => {
  return (
    <Router>
      <NavSection />

      <Routes />
    </Router>
  );
};

export default App;
