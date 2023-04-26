import Nav from "./components/Nav/Nav.js";
import Slide1 from "./components/Slide1/Slide1.js";
import "./App.scss";
import "./assets/styles/index.scss";

export default function App() {
  return (
    <main>
      {/* fixed element */}
      <Nav/>
      {/* scroll element */}
      <Slide1/>
    </main>
  );
}
