import React from "react";
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home.js";
import Tatoos from "./components/Tatoos/Tatoos.js";
import "./App.scss";
import "./assets/styles/index.scss";

export default function App() {
  return (
    <main>
      {/* fixed element */}
      <Nav />
      {/* scroll element */}
      <Home />
      <Tatoos />
    </main>
  );
}