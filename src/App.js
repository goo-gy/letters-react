import React from "react";
import { Route, Routes } from "react-router-dom";
//local
import { Home, Login } from "page";
import TopHeader from "shared/TopHeader"

function App() {
  return (
    <div className="bg-gradient-to-r from-primaryStart to-primaryEnd min-h-screen">
      <TopHeader/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Dashboard" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
