import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Header from "./Components/Shear/Header/Header";
import Footer from "./Components/Shear/Footer/Footer";
import PortfolioDetail from "./Components/Home/PortfolioSection/PortfolioDetail/PortfolioDetail";
import { useEffect, useState } from "react";
import Loading from "./Components/Shear/Loading";
import GraphicDesign from "./Components/Pages/GraphicDesign";
import Marketing from "./Components/Pages/Marketing";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import ProductManagement from "./Components/Pages/ProductManagement";
import Services from "./Components/Pages/Services";
import TeamOfService from "./Components/Pages/TeamOfService";
import WebDesign from "./Components/Pages/WebDesign";
import WebDevelopment from "./Components/Pages/WebDevelopment";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  return (
    <>
      {!isLoading ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/graphicDesign" element={<GraphicDesign />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/productManagement" element={<ProductManagement />} />
            <Route path="/services" element={<Services />} />
            <Route path="/teamOfService" element={<TeamOfService />} />
            <Route path="/webDesign" element={<WebDesign />} />
            <Route path="/webDevelopment" element={<WebDevelopment />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
