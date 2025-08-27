import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
// import CustomForm from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Coba from "./pages/Coba";
import FindCafePage from "./pages/FindCafePage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import { Contact } from "lucide-react";
import ContactPage from "./pages/ContactPage";
import CafeDetailPage from "./pages/CafeDetailPage";
import LoginPage from "./pages/LoginPage";

function App() {
  // const location = useLocation();

  return (
    <>
      <Header />

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-cafe" element={<FindCafePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/find-cafe/cafe-detail/:id"
            element={<CafeDetailPage />}
          />
          <Route to="/login" element={<LoginPage />} />
        </Routes>
      </Layout>

      <Footer />
      {/* <Coba /> */}
    </>
  );
}

export default App;
