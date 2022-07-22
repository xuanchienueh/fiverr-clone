import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./global.scss";
import Home from "./pages/home/Home";
import HomeTemplate from "./templates/homeTemplate/HomeTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeTemplate />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
