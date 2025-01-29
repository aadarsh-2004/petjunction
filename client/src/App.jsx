import BoardingPage from "./Pages/Boarding";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import WhatsappButton from "./Components/WhatsappButton";
import Footer from "./Components/Footer";
import PetProducts from "./Components/PetProducts";
import PopupBanner from "./Components/PopupBanner";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <PopupBanner />
        {/* <WhatsappButton /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boarding" element={<BoardingPage />} />
          <Route path="/shop" element={<PetProducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
