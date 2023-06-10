import "./css/App.css";
import { Home } from "./routes/Home";
import { Head } from "./routes/Head";
import { Cart } from "./routes/Cart";
import { Auth } from "./routes/Auth";
import { Admin } from "./routes/Admin";
import { Detail } from "./routes/Detail";
import { useAdmin } from "./hooks/useAdmin";
import { OrderForm } from "./routes/OrderForm";
import { Checkout } from "./components/Checkout";
import { PaymentSucces } from "./routes/PaymentSuccess";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
export default function App() {
  const { admin } = useAdmin();
  console.log("ADMIN IN APP ROUTES", admin);
  return (
    <div className="whole-app-container">
      <Router>
        <Routes>
          <Route element={<Head />}>
            <Route exact path="/admin_login" element={<Auth />} />
            <Route exact path="/order_form" element={<OrderForm />} />
            <Route
              exact
              path="/admin"
              element={admin?.email ? <Admin /> : <Auth />}
            ></Route>
            <Route exact path="/detail/:id" element={<Detail />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/checkout" element={<Checkout />}></Route>
            <Route exact path="/success" element={<PaymentSucces />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
