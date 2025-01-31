import Boarding from "./Components/Boarding";
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
import DogWalking from "./Components/DogWalking";
import DogGrooming from "./Components/DogGrooming";
import DogSitting from "./Components/DogSitting";
import DogTraining from "./Components/DogTraining";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        {/* <PopupBanner /> */}
        {/* <WhatsappButton /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/boarding" element={<BoardingPage />} /> */}
          <Route path="/shop" element={<PetProducts />} />
          <Route path="/Iform" element={<IForm />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dogwalking" element={<DogWalking />} />
          <Route path="/doggrooming" element={<DogGrooming />} />
          <Route path="/dogsitting" element={<DogSitting />} />
          <Route path="/dogtraining" element={<DogTraining />} />
          <Route path="/boarding" element={<Boarding />} />
          
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
};

export default App;
