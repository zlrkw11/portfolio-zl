import "./styles/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

function App() {
  return (
    <div className="">
      <Navbar />
      <Main />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
