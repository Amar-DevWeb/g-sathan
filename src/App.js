import React from "react";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home.js";
import Tatoos from "./pages/Tatoos/Tatoos.js";
import Calendar from "./pages/Calendar/Calendar.js";
import Contact from "./pages/Contact/Contact.js";
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
      <Calendar/>
      <Contact/>
    </main>
  );
}