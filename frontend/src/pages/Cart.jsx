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
    navigate("/checkout");
  };
  

  return (
    <Layout>
      <div className="max-w-3xl p-4 mx-auto bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Shopping Cart</h2>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b">
              <CartProductCard item={item} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}

        {/* Subtotal Section */}
        <div className="pt-4 text-right border-t">
          <p className="text-sm font-semibold">
            Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""}):{" "}
            <span className="text-lg font-bold">EGP {totalPrice.toLocaleString()}</span>
          </p>
        </div>

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <button
            onClick={handleProceedToCheckout}
            className="w-full py-2 mt-4 font-semibold text-black transition bg-yellow-500 rounded-md hover:bg-yellow-600"
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
