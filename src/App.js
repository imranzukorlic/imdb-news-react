import React from "react";
import { BottomNavigation } from "@mui/material";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Serie from "./Pages/Serie/Serie";
import Footer from "./components/Footer/Footer";

const App = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
    transition: "0.3s",
  };

  let activeClassName = "underline";
  return (
    <>
      <BottomNavigation showLabels>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>Home </h4>
        </NavLink>

        <NavLink
          to="/Movies"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>Movies </h4>
        </NavLink>
        <NavLink
          to="/series"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>Series </h4>
        </NavLink>
      </BottomNavigation>
      <div className="rot">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Serie />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
