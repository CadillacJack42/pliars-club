import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./routes/Home";
import { Admin } from "./routes/Admin";
import { OrderForm } from "./routes/OrderForm";
import { Detail } from "./routes/Detail";
import { Head } from "./routes/Head";
import "./css/App.css";

export default function App() {
  return (
    <div className="whole-app-container">
      <Router>
        <Routes>
          <Route element={<Head />}>
            <Route exact path="/order_form" element={<OrderForm />} />
            <Route exact path="/admin" element={<Admin />}></Route>
            <Route exact path="/detail/:id" element={<Detail />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
