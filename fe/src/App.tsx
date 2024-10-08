import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import SignupPage from "./pages/(auth)/signup/page";
import LayoutAdmin from "./pages/admin/layout";
import DashboardPage from "./pages/admin/dashboard/page";
import NotFoundPage from "./pages/(website)/404/page";
import Shop from "./pages/(website)/shop/page";
import ProductDetail from "./pages/(website)/product-detail/page";
import Payment from "./pages/(website)/payment/page";
import Cart from "./pages/(website)/cart/page";
import Contact from "./pages/(website)/contact/page";
function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<LayoutWebsite />}>
                  <Route index element={<HomePage />} />
                  <Route path="shop" element={<Shop />}/>
                  <Route path="payment" element={<Payment/>}/>
                  <Route path="cart" element={<Cart />}/>
                  <Route path="contact" element={<Contact />}/>
                  <Route path="product-detail" element={<ProductDetail/>}/>
                  <Route path="signup" element={<SignupPage />} />
              </Route>
              <Route path="admin" element={<LayoutAdmin />}>
                  <Route index element={<Navigate to="dashboard" />} />
                  <Route path="dashboard" element={<DashboardPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </>
  );
}


export default App;