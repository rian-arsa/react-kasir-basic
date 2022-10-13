import React from "react";
import { NavbarComponent } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Sukses } from "./pages";

export default function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sukses" element={<Sukses />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
