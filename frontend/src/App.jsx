import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Hamis from "./test/Hamis";
import Haneen from "./test/Haneen";
import Mohamed from "./test/Mohamed";
import Omar from "./test/Omar";
import Eman from "./test/Eman";

const App = () => {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/haneen" element={<Haneen />} />
        <Route path="/mohamed" element={<Mohamed />} />
        <Route path="/omar" element={<Omar />} />
        <Route path="/eman" element={<Eman />} />
        <Route path="/hamis" element={<Hamis />} />


      </Routes>
    </Router>
  );
};

export default App;
