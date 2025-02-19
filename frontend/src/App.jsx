import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Hamis from "./test/Hamis";

const App = () => {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/hamis" element={<Hamis />} />
      </Routes>
    </Router>
  );
};

export default App;
