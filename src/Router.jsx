import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}
