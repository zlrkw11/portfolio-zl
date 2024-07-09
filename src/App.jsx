import "./styles/tailwind.css";

// pages
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
