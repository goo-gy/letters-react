import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
