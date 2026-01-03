import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import SignUpPage from "../pages/Signup/SignUpPage";
import PublicLayout from "../layouts/PublicLayout";
import ProductPage from "../pages/product/ProductPage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import PrivateRoute from "../layouts/PrivateLayour";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
