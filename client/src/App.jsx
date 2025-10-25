import Boarding from "./Pages/Dog-boarding";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import PetProducts from "./Components/PetProducts";

import IForm from "./Pages/Inquiry-form";
import Aboutus from "./Pages/About-us";
import ContactUs from "./Pages/Contact-us";
import FAQ from "./Pages/FAQ";
import DogWalking from "./Pages/Dog-walking";
import DogGrooming from "./Pages/Dog-grooming";
import DogSitting from "./Pages/Dog-sitting";
import DogTraining from "./Pages/Dog-training";

import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Professional Pet Services in Udaipur by PetJunction</title>
        <meta
          name="description"
          content="PetJunction provides professional pet services in Udaipur, including expert dog grooming, reliable pet boarding, and personalized dog training. Your pet's well-being is our priority."
        />
        <meta
          name="keywords"
          content="professional pet service in udaipur , Udaipur Best Pet Boarding Top Dog Walking in Udaipur ,pet grooming service in udaipur , cat sitting service in udaipur , dog walking in udaipur , pet walking in udaipur  "

        />

      </Helmet>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<PetProducts />} />
          <Route path="/inquiry-form" element={<IForm />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dog-walking" element={<DogWalking />} />
          <Route path="/dog-grooming" element={<DogGrooming />} />
          <Route path="/dog-sitting" element={<DogSitting />} />
          <Route path="/dog-training" element={<DogTraining />} />
          <Route path="/dog-boarding" element={<Boarding />} />

        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
