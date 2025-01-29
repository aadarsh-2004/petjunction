import BoardingPage from "./Components/Boarding";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import WhatsappButton from "./Components/WhatsappButton";
import Footer from "./Components/Footer";
import PetProducts from "./Components/PetProducts";
import PopupBanner from "./Components/PopupBanner";
import IForm from "./Components/IForm";
import Aboutus from "./Components/Aboutus";
import ContactUs from "./Components/ContactUs";
import FAQ from "./Components/FAQ";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <PopupBanner />
        {/* <WhatsappButton /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/boarding" element={<BoardingPage />} /> */}
          <Route path="/shop" element={<PetProducts />} />
          <Route path="/Iform" element={<IForm />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
