import React from "react";
import Home from "./components/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Game from "./components/Game/Game";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default App;
