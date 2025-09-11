import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import FindCafePage from "@/pages/FindCafePage";
import ContactPage from "@/pages/ContactPage";
import CafeDetailPage from "@/pages/CafeDetailPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardPage from "@/pages/admin/DashboardPage";
import ProductManagementPage from "@/pages/admin/ProductManagementPage";
import CreateProductPage from "@/pages/admin/CreateProductPage";
import EditProductPage from "@/pages/admin/EditProductPage";
import ListMejaManagementPage from "@/pages/admin/ListMejaManagementPage";
import CreateListMejaPage from "@/pages/admin/CreateListMejaPage";
import EditListMejaPage from "@/pages/admin/EditListMejaPage";
import AboutMePage from "@/pages/AboutMePage";

function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <>
      {!location.pathname.startsWith("/admin") ? <Header /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-cafe" element={<FindCafePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/find-cafe/cafe-detail/:id" element={<CafeDetailPage />} /> */}
        <Route
          path="/find-cafe/cafe-detail/:userId"
          element={<CafeDetailPage />}
        />

        <Route
          path="/login"
          element={token ? <Navigate to="/admin/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={
            token ? <Navigate to="/admin/dashboard" /> : <RegisterPage />
          }
        />

        <Route path="/admin">
          <Route path="dashboard" element={<DashboardPage />} />

          {/* Product */}
          <Route
            path="products/user/loggedin"
            element={<ProductManagementPage />}
          />
          <Route path="products/create" element={<CreateProductPage />} />
          <Route path="products/edit/:id" element={<EditProductPage />} />

          {/* List Meja */}
          <Route
            path="list-meja/user/loggedin"
            element={<ListMejaManagementPage />}
          />
          <Route path="list-meja/create" element={<CreateListMejaPage />} />
          <Route path="edit/list-meja/:mejaId" element={<EditListMejaPage />} />
        </Route>

        {/* Route not Found */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

      {!location.pathname.startsWith("/admin") ? <Footer /> : null}
    </>
  );
}

export default App;
