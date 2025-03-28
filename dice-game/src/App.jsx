import React from "react";
import Home from "./components/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Game from "./components/Game/Game";
import { useState } from "react";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return <> {isGameStarted ? <Game /> : <Home toggle={toggleGamePlay} />}</>;
};

export default App;
