import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { FormProvider } from "./FormContext";
import PersonalDetails from "./pages/personalDetails";
import AddressPage from "./pages/AddressPage";
import Images from "./pages/Images";
import ReviewDetails from "./pages/ReviewDetails";
import Details from "./pages/details";
import "./App.css"; // Import your CSS file for global styles
import logo from "../src/images/Layer 2.png"; // Import your logo
import back from "../src/images/background.png"; // Import your logo

const App: React.FC = () => {
  const location = useLocation(); // Use useLocation within Router context

  return (
    <div className="app-background">
      <div className="logo">
        <img src={logo} alt="MetaLogic Logo" className="app-logo" />
      </div>
      <div className="container">
        {/* Conditionally render the heading based on the route */}
        {location.pathname !== "/details" && <h2>Register</h2>}
        <img src={back} alt="" />
      </div>

      <FormProvider>
        <Routes>
          <Route path="/" element={<PersonalDetails />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/images" element={<Images />} />
          <Route path="/review-details" element={<ReviewDetails />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </FormProvider>
    </div>
  );
};

export default App;
