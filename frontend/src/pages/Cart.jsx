import Layout from "../components/Layout/Layout";
import CartProductCard from "../components/Cart/CartProductCard";
import productImage from "../assets/image.png"; // Replace with actual image

const cartItems = [
  {
    id: 1,
    name: "Samsung Galaxy A55 5G, Android Smartphone, Dual SIM Mobile Phone, 8GB RAM, 128GB Storage, Awesome Navy - 1 Year Warranty/Local Version",
    image: productImage,
    stockStatus: "In Stock",
    price: 19999,
    oldPrice: 23999,
    discount: "17% off Ramadan Deal",
    color: "Awesome Navy",
    size: "8GB RAM + 128GB Storage",
    pattern: "Local Version",
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

        {cartItems.map((item) => (
          <CartProductCard key={item.id} item={item} />
        ))}

        <div className="border-t pt-4 text-right">
          <p className="text-sm font-semibold">
            Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""}):{" "}
            <span className="text-lg font-bold">EGP {cartItems.reduce((acc, item) => acc + item.price, 0).toLocaleString()}</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
