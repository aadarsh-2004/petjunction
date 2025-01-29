import "./App.css";
import Navbar from "./Components/Navbar";
import WhatsappButton from "./Components/WhatsappButton";
import Footer from "./Components/Footer";
import PetProducts from "./Components/PetProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BoardingPage from "./Pages/Boarding";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <WhatsappButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boarding" element={<BoardingPage />} />
        <Route path="/shop" element={<PetProducts />} />
        <Route path="/products" element={<PetProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
