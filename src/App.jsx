import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Main } from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
//no lo voy a implementar por el tipo de pagina que quiero hacer.

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
