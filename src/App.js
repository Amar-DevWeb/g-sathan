import React, { useRef, useState } from "react";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home.js";
import Tatoos from "./pages/Tatoos/Tatoos.js";
import Calendar from "./pages/Calendar/Calendar.js";
import Contact from "./pages/Contact/Contact.js";
import "./App.scss";
import "./assets/styles/index.scss";

export default function App() {
  const homeRef = useRef(null);
  const tatoosRef = useRef(null);
  const calendarRef = useRef(null);
  const contactRef = useRef(null);
  const [visible, setVisible] = useState(1);
  return (
    <main>
      {/* fixed element */}
      <Nav
        homeRef={homeRef}
        tatoosRef={tatoosRef}
        calendarRef={calendarRef}
        contactRef={contactRef}
        visible={visible}
      />
      {/* scroll element */}
      <Home homeRef={homeRef} setVisible={setVisible} />
      <Tatoos tatoosRef={tatoosRef} setVisible={setVisible} />
      <Calendar calendarRef={calendarRef} setVisible={setVisible} />
      <Contact contactRef={contactRef} setVisible={setVisible} />
    </main>
  );
}
