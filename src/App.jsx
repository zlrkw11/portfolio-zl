import "./styles/tailwind.css";

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
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
