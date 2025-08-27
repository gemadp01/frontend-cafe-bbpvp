import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
// import CustomForm from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Coba from "./pages/Coba";
import FindCafePage from "./pages/FindCafePage";
import HomePage from "./pages/HomePage";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Header />

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-cafe" element={<FindCafePage />} />
          <Route path="/about" element={"Coba"} />
          <Route path="/contact" element={"Coba"} />
        </Routes>
      </Layout>

      <Footer />
      {/* <Coba /> */}
    </>
  );
}

export default App;
