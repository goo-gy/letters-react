import React from "react";
import { Route, Routes } from "react-router-dom";
//local
import { Home, Login } from "page";

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
