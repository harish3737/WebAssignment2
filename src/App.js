import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Tools from "./pages/Tools/tools";
import About from "./pages/About/about";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/services";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Fragment >
          <Routes>
            <Route path='*' element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}