import "./styles/tailwind.css";

// pages
import Main from "./pages/Main";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
