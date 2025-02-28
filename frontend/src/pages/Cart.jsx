import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CartProductCard from "../components/Cart/CartProductCard";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const user = JSON.parse(localStorage.getItem("user"));

  const handleProceedToCheckout = () => {
    let storedOrders = JSON.parse(localStorage.getItem("checkoutData")) || []; // Ensure it's an array
  
    if (!Array.isArray(storedOrders)) {
      storedOrders = []; // Reset it to an empty array if it's not an array
    }
  
    storedOrders.push({ cartItems, totalPrice, date: new Date().toISOString() }); // Store relevant data
  
    localStorage.setItem("checkoutData", JSON.stringify(storedOrders)); // Save updated data
    dispatch(clearCart()); // Clear cart after checkout
    navigate("/orders");
  };
  

  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <CartProductCard item={item} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        )}

        {/* Subtotal Section */}
        <div className="border-t pt-4 text-right">
          <p className="text-sm font-semibold">
            Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""}):{" "}
            <span className="text-lg font-bold">EGP {totalPrice.toLocaleString()}</span>
          </p>
        </div>

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <button
            onClick={handleProceedToCheckout}
            className="w-full mt-4 bg-yellow-500 text-black py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
